# Run Card

Last updated: 2026-07-11 00:47:16 PDT — edited by: Claude Dispatch — task: Record Run 001 approvals

**run_id:** RUN-001
**date:** 2026-07-10
**run_type:** lab-validation
**path_id:** MT-BOOTSTRAP
**question:** From the founder-approved evidence set, which 3–5 ROI paths (buyer × pain × channel × offer) are worth testing, ranked with rubric v0.1, and what is the cheapest next test for the top two?
**owner:** Mark-named external combo (Codex, Claude, Hermes, etc. — no default provider; Hermes excluded until C4) per team-config v0.1.1 (execution); Mark (approval and path selection). Mark names the actual provider set before execution (DR-15).
**data_class:** external-okay — set by Mark 2026-07-11 (E1-EV04, DR-13); resolves the DR-12 collision. Stop immediately if any actual input fails to match this class at import spot-check.
**sources:** Approved rows of 01-product-evidence.md only; declared founder assumptions marked as such; no unlisted inputs
**allowed_tools_providers:** Combination of Mark-named external providers per team-config v0.1.1 (Codex, Claude, Hermes, etc.; Hermes excluded until C4 — E1-G04) — no default provider, no silent fallback, no local router tasks, no `local-only` input, no web fetching beyond Mark-approved sources. Actual provider set named by Mark before execution (DR-15).
**budget:** One working session (≤ 4 h) on the Mark-named provider combo; $0 agent-side external spend (DR-8; subscription usage only)
**external_spend_cap:** $0 agent-side, fail-closed (DR-8). Mark-held exception: Mark may personally spend budget for manual testing (DR-16); this never raises the agent-side cap.
**stop_condition:** Stop at 5 path cards, or when the approved evidence set is exhausted, or at the 4 h budget — whichever comes first; stop immediately on any data-class ambiguity
**review_date:** 2026-07-24 (or within 2 days of execution, whichever is earlier)
**charter_version:** v1.2 (2026-07-11, §14.16 provider-combo amendment); commit recorded at execution time
**target_signal:** N/A (lab-validation; measures evidence quality, decision usefulness, reproducibility, latency, cost)
**output_schema:** 3–5 path cards (templates/path-card.md) in paths/; ranked scorecard table in outputs/; evidence-gap list; baseline notes on blackboard.md; trace.jsonl (references/hashes only)
**pre_run_snapshot:** Not required — external-surface-only run, does not touch the local platform (snapshot rule applies from Run 002)
**approval:** APPROVED by Mark 2026-07-11 (E1-R1A04; as amended by E1-R1A03 — recorded by Claude Dispatch from Mark's 2026-07-11 dispatch; decisions/2026-07-11-run-001-approvals.md). Execution additionally requires: evidence assets imported and spot-checked, and the provider set named by Mark (DR-15).

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
