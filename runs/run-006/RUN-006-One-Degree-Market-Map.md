---
record_type: run-card
file_label: RUN-006 One Degree Market Map
run: RUN-006
title: Care-delivery one-degree market map
status: completed
area: market-research
focus: Map the immediate ecosystem around care-delivery organizations and retain the strongest adjacent nodes.
next_decision: Keep CCBHCs as the lead route and FQHC integrated behavioral health as the comparison.
---

# Run Card

Last updated: 2026-07-15 00:56:08 PDT — edited by: Codex

**run_id:** RUN-006
**date:** 2026-07-15
**workflow_id:** care_delivery_one_degree_map
**workflow_version:** 0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]], [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]], [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]], [[growth/CDP-001|CDP-001]], [[growth/ICP-REGISTRY|ICP-019]], [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**run_type:** lab-validation
**path_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; direct relationships include [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] and [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Which market segments, organization types, ecosystem actors, and system-level entities sit within one direct relationship of care-delivery organizations, and which up to 50 nodes most deserve further MindfulText research?
**owner:** Codex conducts and records bounded public research; Mark retains approval for every external or customer-facing action.
**data_class:** external-okay — public organization pages, government sources, sector-body pages, public reports, and concise internal references only. No private data, logins, personal contact information, raw customer material, or local-only content.
**sources:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]; [[growth/CDP-001|CDP-001]]; [[growth/ICP-REGISTRY|ICP-019]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]; [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]]; [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]; official organization, government, and sector-body public sources opened during this run.
**allowed_tools_providers:** Codex public web search and direct public-page review only. No paid database, scraper, monitoring tool, contact-enrichment provider, CRM, outbound provider, local-model worker, or external-system write.
**budget:** Four-hour wall-clock ceiling; up to 50 normalized map nodes; at least one direct public source per retained node when available, with two or more for priority nodes where available.
**external_spend_cap:** $0
**stop_condition:** Stop at 50 nodes, at the four-hour boundary, or earlier if public evidence cannot support a clear relationship classification. Stop immediately if work requires login/private material, personal-contact collection, scraping, monitoring, outreach, paid-provider use, CRM write, publishing, or a claim of buyer intent, budget, efficacy, or outcome.
**review_date:** 2026-07-15
**charter_version:** v1.9 plus [[decisions/2026-07-13-segment-linked-runs#dr-29--segment-first-linked-research-model-and-run-002003-amendment|DR-29]], [[decisions/2026-07-14-customer-development-plan#dr-31--segment-linked-customer-development-plan|DR-31]], [[decisions/2026-07-15-run-005-care-delivery-registry#dr-33--run-005-care-delivery-organization-registry|DR-33]], and the RUN-006 approval record
**target_signal:** N/A
**output_schema:** `outputs/one-degree-map.csv` with stable node IDs; `outputs/source-ledger.csv`; `outputs/segment-adjacency-summary.md`; `outputs/RUN-006-REPORT.md`; privacy-safe trace. Reviewed implications may be proposed for [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]] and related records; no CRM or outreach queue is created.
**pre_run_snapshot:** 2026-07-15 00:51 PDT — no local-model work or external system write is in scope; public research may proceed.
**approval:** APPROVED by Mark 2026-07-15

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-006-One-Degree-Market-Map.md`.

## Related records

- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/SEGMENTS|SEG-003]]
- [[growth/CDP-001|CDP-001]]
- [[growth/ICP-REGISTRY|ICP-019]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]
- [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]]
- [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-15-run-005-care-delivery-registry|DR-33]]
- [[runs/run-006/RUN-006-Market-Map-Notes|RUN-006-Market-Map-Notes]]
- [[runs/run-006/outputs/RUN-006-REPORT|RUN-006-REPORT]]
- [[runs/run-006/outputs/segment-adjacency-summary|segment-adjacency-summary]]
