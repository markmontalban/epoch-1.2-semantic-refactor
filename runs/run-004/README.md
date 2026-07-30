# [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]] — Operator guide

Last updated: 2026-07-14 01:17:24 PDT — edited by: Codex

This folder is the execution record for the five-hour [[growth/CDP-001|CDP-001]] local-model
public-research sprint program. Start with the [run card](RUN-004-Local-Research-Sprints.md), then
the [prompt catalog](PROMPT-CATALOG.md). The runner writes raw output and
usage to `raw/`, compact runtime facts to `runtime/`, and only reviewed public
findings to `evidence-cards/` and `outputs/`.

## Operator sequence

1. Run `node scripts/runner.mjs preflight` to verify SearXNG, the dashboard,
   local provider/model resolution, and current memory before any worker.
2. Launch only the task IDs scheduled in the prompt catalog, with
   `node scripts/runner.mjs launch <task-id>`. The runner supplies the frozen
   worker contract and the compact rolling digest.
3. Use `node scripts/runner.mjs sync` at each check-in. It records terminal
   results and ends a worker that exceeds twelve minutes.
4. Score each initial worker result before launching its follow-on work. Only
   Codex promotes source-checked facts into an evidence card.

## State and privacy

- `runtime/run-state.json` holds only job metadata, output paths, status, and
  compact evidence IDs. It is the supervisor’s re-entry point.
- `trace.jsonl` stores reference/hash-oriented operational events. It contains
  no raw private material.
- The run is not a CRM, a people directory, an account monitor, a publishing
  system, or an outreach queue.
