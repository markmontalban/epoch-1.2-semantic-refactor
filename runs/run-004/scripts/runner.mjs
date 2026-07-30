#!/usr/bin/env node
/**
 * RUN-004's local-only conductor. It starts named Hermes/Ollama workers but
 * does not interpret their output as evidence or alter Model Ops residency.
 */
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, appendFileSync, mkdirSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const RUN = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const P = {
  state: path.join(RUN, 'runtime', 'run-state.json'),
  contract: path.join(RUN, 'prompts', 'WORKER-CONTRACT.md'),
  tasks: path.join(RUN, 'prompts', 'sprints.json'),
  digest: path.join(RUN, 'runtime', 'evidence-digest.md'),
  trace: path.join(RUN, 'trace.jsonl'),
  raw: path.join(RUN, 'raw'),
  prompts: path.join(RUN, 'runtime', 'prompts'),
  pids: path.join(RUN, 'runtime', 'pids'),
};
const DASH = 'http://127.0.0.1:7070';
const SEARX = 'http://127.0.0.1:8888';
const WINDOW_MS = 5 * 60 * 60 * 1000;
const WORKER_MS = 12 * 60 * 1000;
const SCHEDULE = [
  'GO20-01','QW36-01','GO20-02','QW36-02','GO20-03','QW36-03','GO20-04','QW36-04',
  'GO20-05','DR32-01','GO20-06','DR32-02','GO20-07','DR32-03','GO20-08','OR35-01',
  'GO20-09','OR35-02','GO20-10','OR35-03','LL70-01','LL70-02','LL70-03',
  'QW36-05','QW36-06','DR32-04','DR32-05','OR35-04',
  'QW36-07','DR32-06','OR35-05','LL70-04','QW36-08','DR32-07','OR35-06','LL70-05',
  'QW36-09','DR32-08','OR35-07','LL70-06','QW36-10','DR32-09','OR35-08','LL70-07',
  'DR32-10','OR35-09','LL70-08','OR35-10','LL70-09','LL70-10'
];
const PROMPT_FILENAMES = {
  'GO20-01': 'GO20-01-Category-Problem-Language.md',
  'GO20-02': 'GO20-02-Wellness-Offer-Categories.md',
  'GO20-03': 'GO20-03-Alternative-Delivery-Formats.md',
  'GO20-04': 'GO20-04-CCBHC-Workforce-Language.md',
  'GO20-05': 'GO20-05-Workforce-Strain-Sources.md',
  'GO20-06': 'GO20-06-Structural-Change-Messaging.md',
  'GO20-07': 'GO20-07-Terminology-Mismatch.md',
  'GO20-08': 'GO20-08-Unsupported-Competitor-Claims.md',
  'GO20-09': 'GO20-09-Marketing-Opportunity-Record.md',
  'GO20-10': 'GO20-10-Verified-Language-Map.md',
  'LL70-01': 'LL70-01-Account-Evidence-Comparison.md',
  'LL70-02': 'LL70-02-Workforce-Context-Comparison.md',
  'LL70-03': 'LL70-03-Top-Account-Challenge.md',
  'QW36-01': 'QW36-01-Gulf-Coast-Workforce.md',
  'QW36-02': 'QW36-02-Centerstone-Workforce.md',
  'QW36-03': 'QW36-03-Sante-Workforce-Context.md',
  'QW36-04': 'QW36-04-Workforce-Signal-Accounts.md',
  'QW36-05': 'QW36-05-Target-Claim-Verification.md',
  'QW36-06': 'QW36-06-Workforce-Terms.md',
  'QW36-07': 'QW36-07-Shift-Work-Constraints.md',
};

function now() { return new Date().toISOString(); }
function loadJson(file) { return JSON.parse(readFileSync(file, 'utf8')); }
function saveJson(file, value) { writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`); }
function state() { return loadJson(P.state); }
function tasks() { return loadJson(P.tasks); }
function findTask(id) { const task = tasks().find((x) => x.id === id); if (!task) throw new Error(`Unknown task: ${id}`); return task; }
function trace(event, data = {}) { appendFileSync(P.trace, `${JSON.stringify({ at: now(), event, ...data })}\n`); }
function outputPaths(id) {
  return {
    out: path.join(P.raw, `${id}.out.txt`), err: path.join(P.raw, `${id}.err.txt`),
    usage: path.join(P.raw, `${id}.usage.json`), exit: path.join(P.raw, `${id}.exit`),
    prompt: path.join(P.prompts, PROMPT_FILENAMES[id] || `${id}.md`),
    pid: path.join(P.pids, `${id}.pid`),
  };
}
async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}
async function preflight(model) {
  const result = { at: now(), model: model || 'all', dashboard: false, searx: false, inventory: false, hermes_provider: false, fit: null, memory: null, ps: null, problems: [] };
  try { const h = await getJson(`${DASH}/api/health`); result.dashboard = h.dashboard === 'ok' && h.ollama?.reachable === true; } catch (e) { result.problems.push(`dashboard: ${e.message}`); }
  try { const s = await getJson(`${SEARX}/search?q=community+behavioral+health+workforce&format=json`); result.searx = Array.isArray(s.results); } catch (e) { result.problems.push(`searx: ${e.message}`); }
  try {
    const available = await getJson(`${DASH}/v1/models`);
    const ids = new Set((available.data || []).map((m) => m.id));
    const needed = model ? [model] : [...new Set(tasks().map((t) => t.model))];
    result.inventory = needed.every((id) => ids.has(id));
    if (!result.inventory) result.problems.push('one or more named models absent from proxy inventory');
  } catch (e) { result.problems.push(`model inventory: ${e.message}`); }
  try {
    const config = readFileSync(path.join(process.env.HOME, '.hermes', 'config.yaml'), 'utf8');
    result.hermes_provider = /providers:\s*[\s\S]*?\n  ollama:/m.test(config) && /base_url:\s*http:\/\/localhost:7070\/v1/.test(config);
    if (!result.hermes_provider) result.problems.push('Hermes local ollama provider is not configured for dashboard proxy');
  } catch (e) { result.problems.push(`Hermes config: ${e.message}`); }
  try { result.memory = await getJson(`${DASH}/api/memory`); result.ps = await getJson(`${DASH}/api/ps`); } catch (e) { result.problems.push(`memory/ps: ${e.message}`); }
  if (model) {
    try { result.fit = await getJson(`${DASH}/api/memory/fits?model=${encodeURIComponent(model)}`); if (!result.fit.ok) result.problems.push(`model does not fit: ${model}`); } catch (e) { result.problems.push(`fit: ${e.message}`); }
  }
  result.ok = result.dashboard && result.searx && result.inventory && result.hermes_provider && (!model || result.fit?.ok === true);
  return result;
}
function taskWasTried(s, id) { return [...s.active, ...s.completed, ...s.blocked].some((x) => x.task_id === id); }
function nextScheduled(s) { return SCHEDULE.find((id) => !taskWasTried(s, id)) || null; }
function lanePassed(s, task) { return s.completed.some((x) => x.lane === task.lane && x.stage === 'initial' && Number(x.score) >= 8); }
function compatible(s, task) {
  const models = s.active.map((x) => x.model);
  if (models.length === 0) return { ok: true };
  if (task.model === 'llama3.3:70b' || models.includes('llama3.3:70b')) return { ok: false, reason: 'Llama must run alone' };
  if ((task.model === 'qwen3.6:35b-a3b' && models.includes('ornith:35b-q8')) || (task.model === 'ornith:35b-q8' && models.includes('qwen3.6:35b-a3b'))) return { ok: false, reason: 'Qwen and Ornith may not overlap' };
  if (models.length >= 2) return { ok: false, reason: 'maximum two concurrent workers' };
  if (models.length === 1 && task.model !== 'gpt-oss:20b' && models[0] !== 'gpt-oss:20b') return { ok: false, reason: 'only GPT-OSS may pair with one peer' };
  return { ok: true };
}
function digest() {
  if (!existsSync(P.digest)) return 'EVIDENCE_DIGEST: no reviewed evidence cards yet.';
  const raw = readFileSync(P.digest, 'utf8');
  return raw.length <= 7200 ? raw : raw.slice(-7200);
}
function composePrompt(task) {
  const contract = readFileSync(P.contract, 'utf8').replace(/^#.*\n\nLast updated:.*\n\n/m, '');
  return `${contract}\n\nAssigned sprint:\n${task.id}: ${task.instruction}\n\nEVIDENCE_DIGEST:\n${digest()}\n`;
}
function recordBlocked(s, task, reason, pre) {
  const entry = { task_id: task.id, model: task.model, lane: task.lane, stage: task.stage, status: 'BLOCKED_PREFLIGHT', reason, at: now(), preflight: pre };
  s.blocked.push(entry); s.next_scheduled_task = nextScheduled(s); saveJson(P.state, s); trace('blocked_preflight', entry); console.log(JSON.stringify(entry, null, 2));
}
async function launch(id) {
  const s = state(); const task = findTask(id);
  if (s.status === 'WINDOW_COMPLETE') throw new Error('RUN-004 window is complete');
  if (taskWasTried(s, id)) throw new Error(`${id} already has a recorded attempt`);
  if ((s.active.length + s.completed.length + s.blocked.length) >= 28) throw new Error('28-launch ceiling reached');
  if (task.stage === 'followup' && !lanePassed(s, task)) throw new Error(`${id} requires an initial ${task.lane} score of at least 8`);
  const pairing = compatible(s, task); if (!pairing.ok) throw new Error(pairing.reason);
  const pre = await preflight(task.model);
  if (!pre.ok) { recordBlocked(s, task, pre.problems.join('; ') || 'preflight failed', pre); return; }
  const started = new Date();
  if (!s.started_at) { s.started_at = started.toISOString(); s.ends_at = new Date(started.getTime() + WINDOW_MS).toISOString(); s.status = 'RUNNING'; }
  if (Date.now() >= Date.parse(s.ends_at)) { s.status = 'WINDOW_COMPLETE'; saveJson(P.state, s); throw new Error('five-hour window elapsed'); }
  const paths = outputPaths(id); const prompt = composePrompt(task);
  for (const file of [paths.out, paths.err, paths.usage, paths.exit, paths.pid]) if (existsSync(file)) unlinkSync(file);
  writeFileSync(paths.prompt, prompt);
  const wrapper = 'set +e; hermes --ignore-rules --oneshot "$RUN_PROMPT_TEXT" --provider ollama --model "$RUN_MODEL" --toolsets web,terminal --usage-file "$RUN_USAGE" > "$RUN_OUT" 2> "$RUN_ERR"; code=$?; printf "%s\\n" "$code" > "$RUN_EXIT"; exit "$code"';
  const child = spawn('/bin/zsh', ['-lc', wrapper], {
    cwd: RUN, detached: true, stdio: 'ignore', env: { ...process.env, SEARXNG_URL: SEARX, RUN_PROMPT_TEXT: prompt, RUN_MODEL: task.model, RUN_USAGE: paths.usage, RUN_OUT: paths.out, RUN_ERR: paths.err, RUN_EXIT: paths.exit }
  });
  child.unref(); writeFileSync(paths.pid, `${child.pid}\n`);
  const active = { task_id: id, model: task.model, lane: task.lane, stage: task.stage, pid: child.pid, started_at: started.toISOString(), deadline_at: new Date(started.getTime() + WORKER_MS).toISOString(), paths };
  s.active.push(active); s.next_scheduled_task = nextScheduled(s); saveJson(P.state, s); trace('launched', active); console.log(JSON.stringify(active, null, 2));
}
function finish(s, active, status, extra = {}) {
  s.active = s.active.filter((x) => x.task_id !== active.task_id);
  const complete = { ...active, status, ended_at: now(), ...extra };
  s.completed.push(complete); s.next_scheduled_task = nextScheduled(s);
  trace('worker_terminal', complete); return complete;
}
function terminate(active) { try { process.kill(-active.pid, 'SIGTERM'); } catch {} try { process.kill(active.pid, 'SIGTERM'); } catch {} }
function sync() {
  const s = state(); const terminal = [];
  for (const active of [...s.active]) {
    const paths = active.paths || outputPaths(active.task_id);
    if (existsSync(paths.exit)) {
      const exitCode = readFileSync(paths.exit, 'utf8').trim();
      terminal.push(finish(s, active, exitCode === '0' ? 'COMPLETED_UNSCORED' : 'FAILED', { exit_code: exitCode }));
    } else if (Date.now() > Date.parse(active.deadline_at)) {
      terminate(active); terminal.push(finish(s, active, 'TIMED_OUT', { reason: '12-minute hard limit' }));
    }
  }
  if (s.ends_at && Date.now() >= Date.parse(s.ends_at) && s.active.length === 0) s.status = 'WINDOW_COMPLETE';
  saveJson(P.state, s); console.log(JSON.stringify({ at: now(), terminal, active: s.active.length, status: s.status, next_scheduled_task: s.next_scheduled_task }, null, 2));
}
function score(id, value, note = '') {
  const s = state(); const entry = s.completed.find((x) => x.task_id === id);
  const scoreValue = Number(value);
  if (!entry) throw new Error(`No completed task ${id}`);
  if (!Number.isInteger(scoreValue) || scoreValue < 0 || scoreValue > 10) throw new Error('score must be an integer from 0 to 10');
  entry.score = scoreValue; entry.score_note = note; entry.scored_at = now();
  if (entry.status === 'COMPLETED_UNSCORED') entry.status = 'COMPLETED_SCORED';
  trace('scored', { task_id: id, score: scoreValue, note }); saveJson(P.state, s); console.log(JSON.stringify(entry, null, 2));
}
async function showStatus() {
  const s = state(); const pre = await preflight();
  console.log(JSON.stringify({ state: s, health: { ok: pre.ok, dashboard: pre.dashboard, searx: pre.searx, inventory: pre.inventory, hermes_provider: pre.hermes_provider, free_gb: pre.memory?.free_gb, resident_models: pre.ps?.models?.map((m) => m.name) || [], problems: pre.problems } }, null, 2));
}
async function main() {
  const [command, arg1, arg2, ...rest] = process.argv.slice(2);
  if (!command || ['help', '--help'].includes(command)) { console.log('Usage: runner.mjs preflight [model] | launch TASK | sync | score TASK 0-10 [note] | status'); return; }
  if (command === 'preflight') { console.log(JSON.stringify(await preflight(arg1), null, 2)); return; }
  if (command === 'launch') { if (!arg1) throw new Error('launch requires a task ID'); await launch(arg1); return; }
  if (command === 'sync') { sync(); return; }
  if (command === 'score') { score(arg1, arg2, rest.join(' ')); return; }
  if (command === 'status') { await showStatus(); return; }
  throw new Error(`Unknown command: ${command}`);
}
main().catch((error) => { console.error(`RUN-004 conductor error: ${error.message}`); process.exitCode = 1; });
