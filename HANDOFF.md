# MindfulText Epoch 1 — Agent Handoff

Last updated: 2026-07-11 00:47:16 PDT — edited by: Claude Dispatch — task: Record Run 001 approvals

**Written:** 2026-07-10 (approvals update 2026-07-11)

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
  baseline is log line **1311**. Initial checks were clean, but the observation
  failed when `gpt-oss:20b` re-pinned at `2026-07-10T17:25:26.063Z` and
  `2026-07-10T18:40:26.171Z`. See
  [`../epoch-1-stability-observation-2026-07-10.md`](../epoch-1-stability-observation-2026-07-10.md).

## Active work

The 24-hour stability observation for Run 002 has failed and now needs Mark’s
D2 direction; no agent-owned configuration response is authorized. It does
**not** block Run 001. The failed record contains the health, dispatcher, and
post-baseline counts.

```bash
cd ~/AI-Studio/Projects/model-dashboard-live
curl -fsS localhost:7070/api/health
tail -n +1312 dashboard.log | grep -cE '503|maximum pending'
tail -n +1312 dashboard.log | grep -c 're-pinning evicted core'
tail -n +1312 dashboard.log | grep -ci 'evict'
curl -fsS localhost:7070/api/overview | jq '.dispatcher.core_degraded'
```

Do not make the provisional `gpt-oss:20b` keep/swap call; that is Mark’s
judgment. Boot noise before the line-1311 baseline is not part of this
observation.

## Critical path — Mark only

*(Items 1–2 completed 2026-07-11 — see
[`decisions/2026-07-11-run-001-approvals.md`](decisions/2026-07-11-run-001-approvals.md).
Run 001 is approved as amended: Mark-named external provider combo, no Claude
default, team-config v0.1.1, charter v1.2 §14.16.)*

1. ~~Class or strike all four evidence candidates~~ — done (DR-13); still
   pending: **physically import the assets** into
   [`01-product-evidence.md`](01-product-evidence.md) and spot-check each
   against `external-okay`.
2. ~~Review rubric / team config / Run 001 card~~ — done (DR-14…DR-16); still
   pending: **name Run 001's actual provider set** (Hermes excluded until C4)
   and confirm each provider runs under the $0 agent-side cap (E1-N04).
3. Before any Hermes/compaction work, perform C4: inspect Hermes provider
   configuration and identify the Telegram route consumer. Agents must not
   access those dot-directory files.
4. The final lab location is `~/AI-Studio/Projects/mindfultext-epoch-1/`.
   Choose the separate local-only sensitive-input store; the Seagate volume is
   a candidate only with a dedicated encrypted, non-Git, non-cloud-synced
   folder. Do not move the lab without Mark’s separate authorization.

## Important constraints and reasoning

- No agent spend: external and sandbox caps are both **$0**, fail closed.
  Mark holds a personal manual-testing spend exception (DR-16); it raises
  neither agent-side cap.
- No outbound activity or automation is authorized.
- Run 001 runs on a Mark-named combination of **external surfaces** (Codex,
  Claude, Hermes, etc. — no default; Hermes C4-gated; team-config v0.1.1):
  only `external-okay` or Mark-approved `redacted-external` input may enter
  it. Raw `local-only` material stays outside the repo.
- Per-surface gates: external work blocks on either gate’s BLOCK; internal
  review may downgrade an uncorroborated BLOCK to WARN. The `surface` field is
  caller-declared and stored in the run record, so an `internal` label is a
  reviewable classification claim—not a trust boundary.
- Keep dashboard work stability-only through Run 003. Do not touch the active
  `archives-extract` worktree or revive disabled watchers.

## Safe next move for another agent

Hold stability changes pending Mark's D2 direction. After any Mark-authorized
change, restart a new 24-hour observation. Run 001 is approved (2026-07-11)
but not startable until Mark imports the evidence assets and names the
provider set (E1-N04); do not start Run 001 or infer those from the approval.

`/api/health` does not expose the plan’s `core_degraded` field. Use
`/api/overview` → `dispatcher.core_degraded` as the authoritative replacement
telemetry; it was `false` at the 2026-07-10T15:00:19Z spot check.
