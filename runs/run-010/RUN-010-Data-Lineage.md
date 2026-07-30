---
record_type: run-card
file_label: RUN-010 Data Lineage
run: RUN-010
title: Epoch 1 hierarchy and data lineage
status: completed
area: corpus-architecture
focus: Map retained entities, identifiers, artifacts, and dependencies through [[runs/run-009/RUN-009-DSP-Qualification|RUN-009]].
next_decision: Keep the lineage map current when a durable family or closed-run relationship changes.
date: 2026-07-15
product: PROD-001
threads: []
workflow: WF-010
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-001, RUN-002, RUN-003, RUN-004, RUN-005, RUN-006, RUN-007, RUN-008, RUN-009]
result_updates: []
---

# Run Card

Last updated: 2026-07-15 16:16:22 PDT — edited by: Codex

**run_id:** RUN-010
**date:** 2026-07-15
**workflow_id:** epoch-1-corpus-lineage
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** Epoch-1-corpus; [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]]..[[runs/run-009/RUN-009-DSP-Qualification|RUN-009]]; SEG-*; GH-*; ICP-*; GTM-*; CDP-*; ACC-*; CMP-*; DR-*
**run_type:** lab-validation
**path_id:** EPOCH-1-CORPUS
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]; [[growth/SEGMENTS#seg-004--neurodivergent-people|SEG-004]]; [[growth/SEGMENTS#seg-005--family-caregivers|SEG-005]]; [[growth/SEGMENTS#seg-006--care-recipients|SEG-006]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-001--your-first-growth-hypothesis|GH-001]]; [[growth/HYPOTHESES#gh-002--mindfultext-for-elevated-stress-lcsws|GH-002]]; [[growth/HYPOTHESES#gh-003--retention-gift-mindfulness-desk-object-for-paid-subscribers|GH-003]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Can the retained Epoch 1 corpus be represented as a source-linked hierarchy of entities, identifiers, raw artifacts, and dependency relationships without synthesizing findings or making strategic recommendations?
**owner:** Codex; Mark approved execution 2026-07-15 (X3)
**data_class:** external-okay — existing repository records and already-retained public-source references only; no fresh source opening, private data, or local-only material.
**sources:** Canonical Epoch 1 growth records, decision register, run cards and retained outputs for [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]] through [[runs/run-009/RUN-009-DSP-Qualification|RUN-009]], and their linked registries only.
**allowed_tools_providers:** Local filesystem inspection and deterministic text/CSV extraction only; no web, local-model invocation, paid provider, external-system write, scraper, CRM, monitoring, or outreach.
**budget:** One bounded local documentation pass; stop after source-linked maps and validation are complete.
**external_spend_cap:** $0
**stop_condition:** Stop if a required relationship cannot be traced to a retained artifact or source record; label it unresolved rather than inferring or reconciling it.
**review_date:** 2026-07-15
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** `EPOCH-1-HIERARCHY-DATA-LINEAGE.md` with eight requested maps; references to canonical CSV registries and raw run artifacts; privacy-safe trace.
**pre_run_snapshot:** 2026-07-15 16:16 PDT — local filesystem documentation work only; no model or external system is in scope. Dispatcher card #517 recorded as RUNNING.
**approval:** APPROVED by Mark 2026-07-15 (X3)
**closure:** Completed 2026-07-15 16:16 PDT — source-linked hierarchy, segment map, account-lineage index, buyer taxonomy map, artifact graph, ID registry, adjacency map, and privacy-safe trace retained; no external action occurred.

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-010-Data-Lineage.md`.

## Related records

- [[runs/run-009/RUN-009-DSP-Qualification|RUN-009]]
- [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]]
- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/SEGMENTS|SEG-003]]
- [[growth/SEGMENTS|SEG-004]]
- [[growth/SEGMENTS|SEG-005]]
- [[growth/SEGMENTS|SEG-006]]
- [[growth/HYPOTHESES|GH-001]]
- [[growth/HYPOTHESES|GH-002]]
- [[growth/HYPOTHESES|GH-003]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[runs/run-010/RUN-010-Lineage-Work-Notes|RUN-010-Lineage-Work-Notes]]
