# MindfulText Epoch 1 — Agent Handoff

**Written:** 2026-07-10

## Start here

Read [`MASTER-CHECKLIST.md`](MASTER-CHECKLIST.md) first. It is the active
execution tracker, synthesized from the next-steps plan and dated decision
record. [`current-state.md`](current-state.md) is its compact entry point.

## What is complete and evidenced

- LAB-SETUP and the Run 001 draft are on this repo’s `main` (`fa16547`,
  `c50dc5d`). The card validator reports: **valid — awaiting Mark approval**.
- The master checklist and refreshed current state are on `main` at `218c288`;
  its requirement-by-requirement completeness pass is `c00330c`.
- Dashboard safety/stability deployment is complete in
  `Projects/model-dashboard-live`:
  - `c7f0b32`: DR-1 per-surface gates, snapshot-first SSE implementation fix,
    ISO-timestamp logging.
  - `72712e2`: 116 GB budget; `babysitter` and `window_watch` disabled.
  - Full dashboard suite passed **202/202**. Lint had **0 errors** and nine
    pre-existing warnings.
- The dashboard was restarted at `2026-07-10T14:38:25.508Z`. Its new stability
  baseline is log line **1311**. The initial two spot checks are clean. See
  [`../epoch-1-stability-observation-2026-07-10.md`](../epoch-1-stability-observation-2026-07-10.md).

## Active work

The only agent-owned active item is the read-only 24-hour stability observation
for Run 002. It does **not** block Run 001. For each spot check, append the UTC
time, health result, and post-baseline counts to the observation record:

```bash
cd ~/AI-Studio/Projects/model-dashboard-live
curl -fsS localhost:7070/api/health
tail -n +1312 dashboard.log | grep -cE '503|maximum pending'
tail -n +1312 dashboard.log | grep -c 're-pinning evicted core'
```

Do not make the provisional `gpt-oss:20b` keep/swap call; that is Mark’s
judgment after the full window. Boot noise before the line-1311 baseline is not
part of this observation.

## Critical path — Mark only

1. Class or strike all four evidence candidates in
   [`01-product-evidence.md`](01-product-evidence.md), including consent and
   permitted use; resolve the external Claude routing class.
2. Review the rubric, Team Config v0.1, and Run 001 card in one sitting; then
   set `data_class` and change approval to `APPROVED by Mark YYYY-MM-DD`.
3. Before any Hermes/compaction work, perform C4: inspect Hermes provider
   configuration and identify the Telegram route consumer. Agents must not
   access those dot-directory files.
4. Choose the final lab location and a separate local-only sensitive-input
   store; do not move the lab without Mark’s authorization.

## Important constraints and reasoning

- No spend: external and sandbox caps are both **$0**, fail closed.
- No outbound activity or automation is authorized.
- Run 001 runs on Claude, an external surface: only `external-okay` or
  Mark-approved `redacted-external` input may enter it. Raw `local-only`
  material stays outside the repo.
- Per-surface gates: external work blocks on either gate’s BLOCK; internal
  review may downgrade an uncorroborated BLOCK to WARN. The `surface` field is
  caller-declared and stored in the run record, so an `internal` label is a
  reviewable classification claim—not a trust boundary.
- Keep dashboard work stability-only through Run 003. Do not touch the active
  `archives-extract` worktree or revive disabled watchers.

## Safe next move for another agent

Continue read-only stability checks until the 24-hour window has elapsed. Then
report the evidence to Mark for the core-model decision. In parallel, wait for
Mark’s evidence and approval edits; do not start Run 001 or infer approval.

`/api/health` currently returns dashboard/Ollama/Hermes availability but does
not expose the plan’s `core_degraded` field. Before claiming the full stability
criterion, identify and document the authoritative replacement telemetry rather
than treating a healthy HTTP response as proof of that field.
