# MindfulText Epoch 1 — Next Steps Plan

Last updated: 2026-07-12 22:25:32 PDT — edited by: Codex

Status: Historical planning source. The project-local `MASTER-CHECKLIST.md`
and `CONTEXT-MAP.md` are authoritative for current execution and status.

**Created:** 2026-07-09  
**Basis:** Synthesized from the archived verification sheet (Doc A, primary) and archived finalization brief (Doc B, governance contributions)  
**Assumption:** 40-hour work week; Mark is the sole human decision-maker  
**Rule:** Nothing in this plan executes an outbound action, model change, or provider spend without an explicit Mark approval at the point of execution.
**Revision 2 — 2026-07-10 (Mark: "go"):** targets re-dated (§0.5, §3.4), LAB-SETUP scaffold added (§1.2), C4 verifications added (§1.6), platform stability now gates Run 002 only, restored items: path-scoring rubric, social-intel disposition, Pi role, log timestamps. See `../decisions/2026-07-10-epoch-1-foundation.md`.

---

## Phase 0 — 48 Hours: Decisions & Reconciliation

**Goal:** Resolve every blocking decision, align the documents, and create a single source of truth. No lab runs begin in this phase.

### 0.1 — Resolve D1: Gate rule (do this first)

| | |
|---|---|
| **Problem** | `gates.js:139–163` implements corroboration (lone BLOCK → WARN). `AGENTS.md` and `gates.js:4` comment say "BLOCK if either blocks." Code and docs disagree on a safety gate. |
| **Verify before deciding** | `sed -n '1,6p;139,163p;385,390p' Projects/model-dashboard-live/gates.js` and `grep -n "BLOCK if either" AGENTS.md` |
| **Options** | **A (stricter):** either gate BLOCKs → BLOCK. **B (looser, current code):** corroboration; lone BLOCK → WARN. **C (per-surface):** corroboration for internal artifacts, either-blocks for anything outbound. |
| **Recommendation** | **C** — preserves the empirical motivation (Gate A false-blocking trivial changes) while keeping the hard line on anything that touches the outside world. |
| **After deciding** | Align `gates.js` code, `gates.js:4` comment, `AGENTS.md` §Dual-gate, and charter §8 to match. If C, implement per-surface routing in `combineGateVerdicts`. |

### 0.2 — Resolve D2: Residency & budget

| | |
|---|---|
| **Problem** | 76 evictions, 404 re-pin attempts in the log. Budget is 124 GB live vs 112 GB documented. Core is `gpt-oss:20b` (16.5 GB) vs documented `qwen3:8b` (5 GB). |
| **Verify before deciding** | `curl -s localhost:7070/api/health; curl -s localhost:7070/api/memory; curl -s localhost:7070/api/ps` |
| **Options** | Keep `gpt-oss:20b` as core (better model, higher memory cost) or revert to `qwen3:8b` (lighter, documented). Budget: stay 124 or pull back to 112. |
| **Recommendation** | Keep `gpt-oss:20b` if it's earning its slot (Mark's judgment on model quality). Pull budget to **116 GB** — basis: ops-plan §8's 8–12 GB OS-headroom guidance (128 − 12). Caveat (Doc B §3): budget-lowering alone is unproven as the fix — the budget is advisory and evictions occurred with 8.1–14.3 GB free; §1.5's 24h observation is the test, and D3 is likely the bigger lever. |
| **When applying** | Enable timestamps in `dashboard.log` — the log is untimestamped (C2), which is what blocked root-cause analysis. |

### 0.3 — Resolve D3: Watcher jobs

| | |
|---|---|
| **Problem** | `babysitter` (ornith:35b-q8) and `window-watch` (qwen3:8b) are 503-ing under load (`maximum pending requests exceeded`). |
| **Options** | Keep both, disable one, disable both, or reduce polling frequency (currently 120s). |
| **Recommendation** | **Disable both for Epoch 1.** They're not on the critical path for Runs 001–003. Re-enable post-Run-003 with a concurrency cap. |

### 0.4 — Resolve D4: AGENTS.md refresh (mechanical, after D1–D3)

Update `AGENTS.md` to match live state:
- Path: `Projects/model-dashboard/` → `Projects/model-dashboard-live/`
- Models: add `gpt-oss:20b` and `ornith:35b-q8` to the model list
- Budget: update to whatever D2 decides
- Profiles: note they live in `residency.json`, not `router.json`
- Routes: document `babysit` and `window_watch` (or mark them disabled per D3)
- Gate rule: align to D1 outcome

### 0.5 — Adopt charter amendments (P1 from Doc B, §3 revisions from Doc A)

Adopt all P1 amendments from Doc B §6 **except** its gate-rule claim (§3), which is factually wrong — use Doc A's C1/D1 instead:

- [ ] Authority hierarchy: AGENTS.md governs platform/safety; charter governs lab roles only
- [ ] Data-class assignment: Mark assigns at import; unassigned defaults to `local-only`; redaction local + spot-checked
- [ ] External-provider failure mode: unknown/unverified provider = external; no spend without named provider + per-run cap + Mark approval
- [ ] Parked coding arm: autonomous build-and-deploy lane parked; revival needs level-2/3 signal + dated decision record
- [ ] Bootstrap rule: `LAB-SETUP` for scaffolding; `MT-BOOTSTRAP` for Runs 001–002; both carry data class, owner, budget, stop condition, review date
- [ ] Run taxonomy: `lab-validation` (evidence quality, reproducibility, cost) vs `market-test` (stated signal level)
- [ ] Hermes sequence: compaction/manual support only through Runs 001–002; reassess after Run 003
- [x] Targets re-dated (DR-6): lab-success criterion (three runs + packet) **2026-08-14** (was Jul 23); level-2/3 revenue target **2026-09-04** (was Aug 8). Confirmed by Mark 2026-07-10; amendable by dated decision record
- [ ] Social intelligence is an **input to the lab**, not a parallel program (Doc A §3.5 / Doc B §5.1); no parallel social-intel build in Epoch 1
- [ ] Pi's Epoch-1 role: optional-later (charter §5) stands — recorded in DR-7
- [ ] Minimal path-scoring rubric (Doc A §3.9) adopted as `growth/SCORECARD.md`; required before Run 001 ranking
- [ ] One privacy-safe `trace.jsonl` per run (references/hashes, not raw inputs)
- [ ] Post-Run-003 evaluation: Hermes logging vs dashboard expansion; dashboard work is stability-only until then
- [ ] Charter version/commit recorded in every run card

### 0.6 — Reconcile documents

- [x] `../../archive/epoch-1/epoch-1-scope-DRAFT.md` carries the Superseded banner (2026-07-09)
- [x] `../../archive/epoch-1/mindfultext-epoch-1-finalization-brief.md` archived 2026-07-10 (banner added)
- [x] P1/P2 amendments applied to `../CHARTER.md` → **v1.1**, the single canonical Epoch 1 doc (new §14)
- [x] Dated decision record: `../decisions/2026-07-10-epoch-1-foundation.md` (DR-1…DR-12)

> Remaining Phase 0 work is on-Mac only: apply D2/D3 (dashboard settings, watchers, log timestamps) and align `gates.js`/AGENTS.md to D1/D4. Docs-side Phase 0 is complete.

**Phase 0 exit criteria:** One canonical charter, one refreshed AGENTS.md, one decision record. No competing planning spines.

---

## Phase 1 — by 2026-07-17: Lab Setup & Run 001 Preparation

**Goal:** Stand up the lab environment and prepare Run 001. No model runs yet — just scaffolding, evidence inventory, and safety checks. Scaffolding executed 2026-07-10 (§1.2); remaining items need Mark.

### 1.1 — Lab location & Git setup

- [ ] Choose a non-iCloud Git location for the lab repo (ops plan §6.1 flags iCloud `index.lock` issues)
- [ ] Choose a separate local-only store for sensitive inputs (outside the tracked repo)
- [ ] Initialize the repo; confirm `datasets/` is gitignored or PII-free by construction
- [ ] Record the §6.3 new-repo waiver + non-iCloud rationale in the decision record

### 1.2 — LAB-SETUP: scaffold the lab *(executed 2026-07-10)*

- [x] Folder contract per charter §10 at `Docs/mindfultext-epoch-1/` (staging; final location = DR-9, pending Mark)
- [x] Four templates: run-card, path-card, decision, compaction
- [x] Team config v0.1 (Run 001 = Claude-only; v0.2/v0.3 stubs for Runs 002/003)
- [x] Workflow `workflows/research-to-signal.md` + privacy-safe `trace.jsonl` schema
- [x] Utilities `tools/new-run.py` and `tools/validate-run-card.py`, tested
- [x] `datasets/` gitignored; local git repo initialized (no remote), bootstrap commit (DR-10)

### 1.3 — Evidence inventory (founder-approved) & import

Before Run 001, record for every input asset:
- [ ] Asset name & source
- [ ] Owner (who provided it)
- [ ] Rights/consent status
- [ ] Data class (`local-only`, `redacted-external`, `external-okay`)
- [ ] Permitted use
- [ ] Import approved assets into `growth/HYPOTHESES.md` with class labels; mark founder assumptions (charter §11.5)
- [ ] **Data-class × Run 001 collision (needs Mark):** Run 001 runs on Claude — an external provider surface. Unassigned evidence defaults to `local-only`, which may not be given to Claude (charter §5). Mark must class the Run 001 input set `external-okay` (or approve a redacted set) or Run 001 cannot execute as designed

### 1.4 — Spending caps

- [x] Per-run external-model spending cap: **$0** (fail-closed default, DR-8; Mark raises by dated record)
- [x] Sandbox spending cap: **$0** (DR-8)
- [x] Recorded in the decision record. Note: Run 001 via Mark's Claude subscription incurs no per-run provider spend, so it fits under the $0 cap

### 1.5 — Platform stability check *(gates Run 002 only — Run 001 proceeds in parallel)*

- [ ] Apply D2 budget change if different from current
- [ ] Apply D3 watcher job changes
- [ ] Run a 24-hour observation: `curl -s localhost:7070/api/health` every few hours; check `dashboard.log` for new evictions/503s
- [ ] Confirm `core_degraded: false` holds stable
- [ ] Enable `dashboard.log` timestamps while applying D2/D3 (see §0.2)
- [ ] Contingency: if the 24h window still shows core evictions/503s, iterate D2 (lower budget further or swap core to `qwen3:8b`) before Run 002 — Run 001 is unaffected

### 1.6 — C4 verifications (before any Hermes use, incl. compaction)

- [ ] Mark opens/pastes `~/.hermes/config.yaml` — confirm the external-default-provider assumption in charter §6 (dot-dirs are default-deny for agents)
- [ ] Identify what consumes the router's `telegram` route before Hermes operates; inbound Telegram is untrusted data and never a source of task cards without Mark

### 1.7 — Run 001 card & rubric

- [x] Run 001 card drafted (`runs/run-001/run-card.md`, via `new-run.py`): `run_type: lab-validation`, `path_id: MT-BOOTSTRAP`, owner, budget, stop condition, review date, charter v1.1 — data class pending Mark (§1.3)
- [x] Rubric v0.1 drafted (`growth/SCORECARD.md`) — Mark reviews before Run 001 ranking
- [ ] Define what Run 001 measures: evidence quality, decision usefulness, reproducibility, latency, cost (fields present in card; confirm at approval)
- [ ] Mark reviews Run 001 card → approve or amend

**Phase 1 exit criteria:** Lab scaffold built and committed (done), spending caps recorded (done), evidence inventory approved & imported, C4 verifications done, Run 001 card + rubric approved by Mark. The 24h platform-stability window is an exit criterion for **starting Run 002**, not Run 001.

---

## Phase 2 — 2026-07-17 → 2026-07-31: Runs 001–002

**Goal:** Execute the first two lab-validation runs. Hermes is compaction/manual-support only unless a verified local-only task surface exists.

### 2.1 — Run 001 execution

- [ ] Execute Run 001 per the approved card
- [ ] Capture pre-run snapshot: health, models, memory, queue/re-pin state (benchmark-validity rule from Doc B)
- [ ] If core evictions or 503s occur during the run → mark comparison **inconclusive**
- [ ] Write `trace.jsonl` (references/hashes only, no raw sensitive I/O)
- [ ] Record charter version/commit in the run card
- [ ] Mark reviews Run 001 output

### 2.2 — Run 001 review & adjust

- [ ] Did the evidence quality meet the bar?
- [ ] Were latency/cost within budget?
- [ ] Any platform instability during the run?
- [ ] Adjust Run 002 card based on findings

### 2.3 — Run 002 execution

- [ ] Same pre-run snapshot + inconclusive-if-unstable rule
- [ ] Execute Run 002 per approved card
- [ ] Write `trace.jsonl`
- [ ] Mark reviews Run 002 output

### 2.4 — P2 amendments check (from Doc B, decide before Run 003)

- [ ] Benchmark validity: are runs producing clean comparisons or is memory pressure biasing results?
- [ ] Platform boundary: has dashboard work stayed stability-only? Any scope creep?
- [ ] Trace privacy: are raw local-only inputs stored outside the tracked repo?
- [ ] Review model: is Claude reviewing Codex merges? Is Mark approving/waiving?

**Phase 2 exit criteria:** Runs 001–002 complete, reviewed, and producing usable evidence-quality signal. Platform stable throughout (or instability documented and addressed).

---

## Phase 3 — 2026-08-01 → 2026-08-14: Run 003 & Post-Run Evaluation

**Goal:** Complete Run 003 (the signal-test packet), then make the platform-expansion decision that gates everything after.

### 3.1 — Run 003 execution

- [ ] Run 003 produces a **human-reviewed signal-test packet** (not an automated campaign)
- [ ] Same pre-run snapshot + inconclusive-if-unstable rule
- [ ] Define what "signal" means for Run 003: is this a level-1 (vanity/reach) or level-2 (buyer intent) test?
- [ ] Mark reviews signal-test packet

### 3.2 — Post-Run-003 evaluation (the key decision point)

This is the fork in the road. After Run 003, Mark decides:

- [ ] **Hermes operations:** expand from compaction-only to bounded operator? Or keep manual?
- [ ] **Dashboard work:** expand beyond stability-only? Or keep frozen?
- [ ] **Triage the ~28 open worktrees** (claim from Doc A — verify the actual count first)
- [ ] **Market-test path:** is there enough signal evidence to design a manual market-test phase?

### 3.3 — Market-test prep (if signal evidence supports it)

- [ ] Define the minimum "ICP-qualified buyer-intent conversation" (level-2 signal)
- [ ] Define a level-3 commitment signal
- [ ] Draft a manual-outreach step in the queue between packet approval and the Sep 4 target
- [ ] Mark approves the market-test phase or defers

### 3.4 — Confirm or amend target dates

- [ ] Aug 14 packet target (re-dated from Jul 23, DR-6): was it met? If not, trigger review/re-scope (never expanded automation)
- [ ] Sep 4 signal target (re-dated from Aug 8, DR-6): realistic given Run 003 outcomes? Mark confirms or amends

**Phase 3 exit criteria:** Run 003 complete, post-run evaluation done, Mark has made the platform-expansion and market-test-path decisions with dated records.

---

## Phase 4 — 2026-08-15 → 2026-09-04: Market-Test Phase & Epoch 1 Closeout (retro by 2026-09-11)

**Goal:** If approved, run the manual market-test phase. Close out Epoch 1 and plan Epoch 2.

### 4.1 — Market-test execution (if Mark approved in Phase 3)

- [ ] Execute the Mark-approved manual market-test phase
- [ ] All outbound actions require Mark approval at the point of execution
- [ ] Capture signal data: level-2 (buyer intent) and level-3 (commitment) conversations
- [ ] No automated campaigns — manual only

### 4.2 — Epoch 1 retrospective

- [ ] What did Runs 001–003 + market test produce in terms of usable evidence?
- [ ] Did the platform hold stable? Any recurring instability?
- [ ] Was the gate rule (D1 outcome) correct in practice?
- [ ] Did the parked coding arm need revival? (Requires level-2/3 signal + dated decision record)
- [ ] Spending: were the caps sufficient? Did anything leak?

### 4.3 — Epoch 2 planning

- [ ] Based on retrospective, draft Epoch 2 charter
- [ ] Carry forward: data-class system, signal ladder, trace privacy, review model
- [ ] Reassess: Hermes operator authority, dashboard scope, autonomous coding arm
- [ ] Mark approves Epoch 2 scope or defers

**Phase 4 exit criteria:** Market-test phase complete (or deferred with rationale), Epoch 1 retrospective done, Epoch 2 planning started or deferred.

---

## Quick Reference: Decision Dependency Chain

```
D1 (gate rule) ──► AGENTS.md refresh (D4) ──► charter §8 alignment

Charter amendments ──► LAB-SETUP scaffold ──► evidence import + rubric ──► Run 001 card ──► Run 001
D2 (budget/core) ──► apply + 24h observation ──► gates Run 002 ONLY
D3 (watchers) ─────┘   (parallel with Run 001 prep/execution)

Run 001 ──► Run 002 ──► Run 003 ──► Post-Run-003 eval
                                        (fork)
                              ┌──────────┴──────────┐
                        Hermes ops            Market test
                        expansion             phase (if approved)
                        decision                  │
                                              Epoch 1
                                              closeout
```

## Quick Reference: Who Decides What

| Decision | Owner |
|---|---|
| D1–D4 (platform) | Mark only |
| Charter amendments | Mark only |
| Target dates (Jul 23 / Aug 8) | Mark confirms or amends |
| Lab location & Git setup | Mark |
| Spending caps | Mark |
| Evidence inventory | Mark assigns/approves |
| Hermes execution surface | Mark |
| Run card approval | Mark |
| Pi's Epoch-1 role | Mark (default optional-later, recorded DR-7 2026-07-10) |
| Merge review | Claude reviews Codex; Mark approves or waives |
| Code changes | Codex/Claude implement; Mark approves |
| Outbound actions | Mark at the point of execution — always |
