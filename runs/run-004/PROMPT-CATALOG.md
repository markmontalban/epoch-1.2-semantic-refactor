# [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]] — Frozen prompt catalog

Last updated: 2026-07-14 01:23:53 PDT — edited by: Codex

[`sprints.json`](prompts/sprints.json) is the machine-readable, frozen queue:
ten bounded sprint instructions for each named local model. The runner always
prepends the fixed [worker contract](prompts/WORKER-CONTRACT.md), then appends
one task and a rolling digest of at most six compact evidence cards.

## Dispatch and scoring

- Initial work follows the approved five-hour windows. A completed initial
  result gets a 0–10 score: web-tool use, usable public URLs, source fidelity,
  claim discipline, and output-schema compliance receive 0–2 each.
- A lane needs at least 8/10 before its follow-up task can launch. Errors,
  malformed output, timeout, 503, or unsupported claims are retained as
  dogfood evidence and are never silently retried on another model.
- Qwen and Ornith never overlap; Llama runs alone; GPT-OSS can overlap only
  with one fit-checked peer. The runner makes no router, residency, budget, or
  provider change.

The pending/reserve order and every task's lane/stage are encoded in the JSON,
so the supervisor reads state rather than reconstructing the plan from raw
worker output.
