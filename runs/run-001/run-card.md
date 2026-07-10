# Run Card

**run_id:** RUN-001
**date:** 2026-07-10
**run_type:** lab-validation
**path_id:** MT-BOOTSTRAP
**question:** From the founder-approved evidence set, which 3–5 ROI paths (buyer × pain × channel × offer) are worth testing, ranked with rubric v0.1, and what is the cheapest next test for the top two?
**owner:** Claude (execution, per team-config v0.1); Mark (approval and path selection)
**data_class:** TBD-BY-MARK — must be `external-okay` (or Mark-approved `redacted-external`) because the execution surface is Claude/Anthropic (external); the `local-only` default blocks this run (DR-12)
**sources:** Approved rows of 01-product-evidence.md only; declared founder assumptions marked as such; no unlisted inputs
**allowed_tools_providers:** Claude (Anthropic app, external surface) only — no local router tasks, no other external providers, no web fetching beyond Mark-approved sources
**budget:** One Claude working session (≤ 4 h); $0 external spend (DR-8; subscription usage only)
**external_spend_cap:** $0 (DR-8)
**stop_condition:** Stop at 5 path cards, or when the approved evidence set is exhausted, or at the 4 h budget — whichever comes first; stop immediately on any data-class ambiguity
**review_date:** 2026-07-24 (or within 2 days of execution, whichever is earlier)
**charter_version:** v1.1 (2026-07-10); commit recorded at execution time
**target_signal:** N/A (lab-validation; measures evidence quality, decision usefulness, reproducibility, latency, cost)
**output_schema:** 3–5 path cards (templates/path-card.md) in paths/; ranked scorecard table in outputs/; evidence-gap list; baseline notes on blackboard.md; trace.jsonl (references/hashes only)
**pre_run_snapshot:** Not required — Claude-only run, does not touch the local platform (snapshot rule applies from Run 002)
**approval:** PENDING

## Usage notes

- Execution is forbidden until approval reads "APPROVED by Mark YYYY-MM-DD".
- Every run records the charter version it ran under.
- One privacy-safe trace.jsonl per run — references/hashes only, no raw sensitive content.
- run_type allowed values: lab-validation | market-test.
- path_id: a path card id, or LAB-SETUP / MT-BOOTSTRAP for non-path runs.
- data_class: local-only | redacted-external | external-okay; unassigned defaults to local-only.
- target_signal: required for market-test runs; signal ladder 0-3. N/A is fine for lab-validation.
- pre_run_snapshot: health/models/memory/queue state before execution, for runs touching
  the local platform. If core evictions or 503s occur mid-run, mark comparisons INCONCLUSIVE.
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/run-card.md`.
