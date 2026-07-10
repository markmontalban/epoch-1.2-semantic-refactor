# Run Card

**run_id:** RUN-XXX
**date:** TBD
**run_type:** lab-validation
**path_id:** TBD
**question:** TBD
**owner:** TBD
**data_class:** TBD
**sources:** TBD
**allowed_tools_providers:** TBD
**budget:** TBD
**external_spend_cap:** $0
**stop_condition:** TBD
**review_date:** TBD
**charter_version:** TBD
**target_signal:** N/A
**output_schema:** TBD
**pre_run_snapshot:** TBD
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
