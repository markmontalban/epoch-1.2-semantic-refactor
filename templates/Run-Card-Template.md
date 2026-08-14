---
record_type: run-card
run: RUN-XXX
title: Untitled Run
status: draft
area: TBD
focus: TBD
next_decision: TBD
date: TBD
product: PROD-001
threads: []
workflow: TBD
run_type: lab-validation
execution_kind: initial
parent_run:
input_runs: []
result_updates: []
---

# Run Card Template

Last updated: 2026-08-14 07:28:23 PDT — edited by: Codex

**run_id:** RUN-XXX
**date:** TBD
**workflow_id:** TBD
**workflow_version:** TBD
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** TBD
**run_type:** lab-validation
**path_id:** TBD
**segment_id:** TBD
**hypothesis_ids:** TBD
**gtm_ids:** TBD
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

## Related records

- Add direct source links only when they help readers reach the relevant
  subject, approval decision, predecessor run, working note, or output.
- Before closing a run, verify its required fields and approval status with
  `validate-run-card.py`; add direct source references only where they help a
  reader understand the run's evidence or decision.

## Usage notes

- Execution is forbidden until approval reads "APPROVED by Mark YYYY-MM-DD".
- Every run records the charter version it ran under.
- workflow_id names the reusable procedure; workflow_version freezes the
  implementation used for this execution without creating a new platform.
- execution_kind allowed values: initial | replay | fork | refresh. Resume
  continues the same open run and never creates another `RUN-###`.
- parent_run is required for replay, fork, and refresh; it is N/A for an
  initial execution. subject_refs lists the relevant `GH-###`, `SEG-###`,
  `GTM-###`, `CDP-###`, or non-market scope IDs without replacing them.
- Frontmatter `product`, `threads`, and `workflow` power the semantic explorer.
  `input_runs` records broader evidence dependencies; `result_updates` names
  canonical records changed by the run. Keep the legacy body fields because
  historical tools and frozen run outputs still use them.
- One privacy-safe trace.jsonl per run — references/hashes only, no raw sensitive content.
- run_type allowed values: lab-validation | market-test.
- path_id: a path card id, a `SEG-###` research scope, or LAB-SETUP /
  MT-BOOTSTRAP for non-path runs. segment_id, hypothesis_ids, and gtm_ids make
  the run's reusable market links explicit when applicable.
- data_class: local-only | redacted-external | external-okay; unassigned defaults to local-only.
- target_signal: required for market-test runs; signal ladder 0-3. N/A is fine for lab-validation.
- pre_run_snapshot: health/models/memory/queue state before execution, for runs touching
  the local platform. If core evictions or 503s occur mid-run, mark comparisons INCONCLUSIVE.
- While workers are active, use one `runtime/tmp/` directory for transient
  stdout, stderr, usage, status, and process metadata. Do not create permanent
  per-worker PID, exit-code, empty-error, usage, or full-prompt files.
- At terminal sync, append one verified record per worker to
  `raw/worker-results.jsonl`, then remove that worker's transient files. Keep
  status, usage, stderr when nonempty, and raw output in that single ledger.
- Store the worker contract and each distinct rolling context once in
  `runtime/input-snapshots.jsonl`; store per-worker task fields and hashes in
  `runtime/worker-inputs.jsonl`. The prompt hash must be reproducible from
  those inputs.
- Make state writes atomic and serialize launch, sync, score, and close
  mutations with a run lock. Verify the consolidated record before deleting
  any source artifact; closure/compaction must be idempotent.
- Never place `local-only` raw content in this repo. A local-only run records
  reference/hash metadata here and keeps its content in the approved encrypted
  local-only store.
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-NNN-Topic.md`.
