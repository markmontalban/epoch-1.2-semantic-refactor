# MindfulText Epoch 1 — Agent Handoff

Last updated: 2026-07-12 22:25:32 PDT — edited by: Codex

**Written:** 2026-07-10 (Mark directions update 2026-07-12)

## Start here

Read [`README.md`](../README.md) first for the authority map. Then read
[`MASTER-CHECKLIST.md`](../MASTER-CHECKLIST.md) for active execution status and
[`decisions/DECISION-REGISTER.md`](../decisions/DECISION-REGISTER.md) to find the
approval record behind any `DR-*` reference. [`CURRENT-STATE.md`](CURRENT-STATE.md)
is the compact Mark-facing entry point.

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
  baseline is log line **1311**. Initial checks were clean, but the observation
  failed when the provisional core re-pinned at `2026-07-10T17:25:26.063Z` and
  `2026-07-10T18:40:26.171Z`. See
  [`observations/2026-07-10-stability-observation.md`](../observations/2026-07-10-stability-observation.md).

## Active work

The former 24-hour stability observation failed, then the core moved to
`qwen3:8b` (DR-19; dashboard commit `7b1cec0`). In prototype run-first mode,
stability is background telemetry: Run 001 and a later local comparison may
run now, with any instability recorded as learning (DR-22).

```bash
cd ~/AI-Studio/Projects/model-dashboard-live
curl -fsS localhost:7070/api/health
tail -n +1312 dashboard.log | grep -cE '503|maximum pending'
tail -n +1312 dashboard.log | grep -c 're-pinning evicted core'
tail -n +1312 dashboard.log | grep -ci 'evict'
curl -fsS localhost:7070/api/overview | jq '.dispatcher.core_degraded'
```

Boot noise before the line-1311 baseline is not part of this failed
observation.

## Critical path — Mark only

*(Items 1–2 completed 2026-07-11 — see
[`decisions/2026-07-11-run-001-approvals.md`](../decisions/2026-07-11-run-001-approvals.md).
Run 001 is approved as amended: Mark-prompted provider/agent, no default,
team-config v0.1.1, charter v1.3 §14.17.)*

1. ~~Class or strike all four evidence candidates~~ — done (DR-13); still
   pending: **physically import the assets** into
   [`growth/HYPOTHESES.md`](../growth/HYPOTHESES.md) and spot-check each
   against `external-okay`.
2. ~~Review rubric / team config / Run 001 card~~ — done. Fill the five-bullet
   founder brief and name the provider/agent in Mark's manual invocation prompt.
3. Hermes can perform manually prompted Run 001 work. Telegram is not in this
   workflow; defer C4 until a Telegram or autonomous integration is proposed.
4. The final lab location is `~/AI-Studio/Projects/mindfultext-epoch-1/`.
   The Seagate volume is selected for the separate local-only sensitive-input
   store; create its dedicated encrypted, non-Git, non-cloud-synced folder and
   stop if it is unavailable. Do not move the lab without Mark’s separate
   authorization.

## Important constraints and reasoning

- Run 001 invocation budget is supplied by the harness; Epoch 1 adds no second
  project budget system. Mark manually prompts the agent/provider and the
  run's ≤4-hour stop condition remains active.
- No outbound activity or automation is authorized.
- Run 001 runs on a Mark-prompted **external surface** (Codex, Claude, or
  Hermes; no default; team-config v0.1.1):
  only `external-okay` or Mark-approved `redacted-external` input may enter
  it. Raw `local-only` material stays outside the repo.
- Per-surface gates: external work blocks on either gate’s BLOCK; internal
  review may downgrade an uncorroborated BLOCK to WARN. The `surface` field is
  caller-declared and stored in the run record, so an `internal` label is a
  reviewable classification claim—not a trust boundary.
- Keep dashboard work stability-only through Run 003. Do not touch the active
  `archives-extract` worktree or revive disabled watchers.

## Safe next move for another agent

Run 001 is ready once Mark fills the five-bullet founder brief and names the
provider in the manual invocation prompt. Produce editable hypothesis paths,
then use later evidence import and local telemetry to improve them.

`/api/health` does not expose the plan’s `core_degraded` field. Use
`/api/overview` → `dispatcher.core_degraded` as the authoritative replacement
telemetry; it was `false` at the 2026-07-10T15:00:19Z spot check.
