---
record_type: run-card
file_label: RUN-005 Organization Registry
run: RUN-005
title: Care-delivery organization registry
status: completed
area: account-research
focus: Build a public-source organization registry with workforce context and buyer-function hypotheses.
next_decision: Use the registry only for a separately approved qualification or discovery decision.
date: 2026-07-15
product: PROD-001
threads: [TRK-001, TRK-002]
workflow: WF-003
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-002, RUN-004]
result_updates: [SEG-001, SEG-002, SEG-003, ICP-019]
---

# Run Card

Last updated: 2026-07-15 00:50:44 PDT — edited by: Codex

**run_id:** RUN-005
**date:** 2026-07-15
**workflow_id:** care_delivery_account_registry
**workflow_version:** 0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]], [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]], [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]], [[growth/CDP-001|CDP-001]], [[growth/ICP-REGISTRY|ICP-019]], [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**run_type:** lab-validation
**path_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; focused comparisons: [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]], [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Which 50–75 U.S. care-delivery organizations have sufficient public organization, workforce-context, and buyer-function evidence to form a durable research registry and identify the care-delivery subsegments most worth a later, separately approved discovery step for MindfulText?
**owner:** Codex conducts and records bounded public research; Mark retains approval for every external or customer-facing action.
**data_class:** external-okay — public organization pages, public directories, public reports, public leadership/operations pages, and concise internal references only. No private data, logins, personal contact information, raw customer material, or local-only content.
**sources:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]; [[growth/CDP-001|CDP-001]]; [[growth/ICP-REGISTRY|ICP-019]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]; [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]]; official organization, government, and sector-body public sources opened during this run.
**allowed_tools_providers:** Codex public web search and direct public-page review only. No paid database, scraper, monitoring tool, contact-enrichment provider, CRM, outbound provider, local-model worker, or external-system write.
**budget:** Four-hour wall-clock ceiling; 50–75 normalized organizations; at least one direct public source per record and two or more for a high-priority record when available.
**external_spend_cap:** $0
**stop_condition:** Stop discovery at 75 organizations, at the four-hour boundary, or earlier if source quality becomes too weak to support a public organization-level record. Stop immediately if work would require login/private material, personal-contact collection, scraping, monitoring, outreach, paid-provider use, a CRM write, publishing, or a claim of buyer intent, budget, efficacy, or outcome.
**review_date:** 2026-07-15
**charter_version:** v1.9 plus [[decisions/2026-07-13-segment-linked-runs#dr-29--segment-first-linked-research-model-and-run-002003-amendment|DR-29]], [[decisions/2026-07-14-customer-development-plan#dr-31--segment-linked-customer-development-plan|DR-31]], [[decisions/2026-07-14-run-004-cdp-local-research#dr-32--run-004-cdp-001-local-research-sprint-program|DR-32]], and [[decisions/2026-07-15-run-005-care-delivery-registry#dr-33--run-005-care-delivery-organization-registry|DR-33]]
**target_signal:** N/A
**output_schema:** `growth/account-registry/organizations.csv` with stable ACC IDs; `growth/account-registry/sources.csv` with stable source IDs; `growth/account-registry/README.md` schema and retention rules; buyer-function/title taxonomy; source-backed priority tiers; RUN-005 report; privacy-safe trace. Any update to the existing account-intelligence summary is reviewed and does not create a CRM or outreach queue.
**pre_run_snapshot:** 2026-07-15 00:40 PDT — Model Ops health and Ollama verified through the local control plane; the retained control plane returns 404 for the retired Dispatcher board endpoint, so the required documentation-card claim could not be made. This run does not use local-model work; public research may proceed.
**approval:** APPROVED by Mark 2026-07-15 ([[decisions/2026-07-15-run-005-care-delivery-registry#dr-33--run-005-care-delivery-organization-registry|DR-33]])
**closure:** Completed 2026-07-15 00:50 PDT — 56 source-backed organization records, a normalized public-source ledger, and a buyer-function/title taxonomy were retained. No external action occurred.

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-005-Organization-Registry.md`.

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
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-14-run-004-cdp-local-research|DR-32]]
- [[decisions/2026-07-15-run-005-care-delivery-registry|DR-33]]
- [[runs/run-005/RUN-005-Registry-Research-Notes|RUN-005-Registry-Research-Notes]]
- [[runs/run-005/outputs/RUN-005-REPORT|RUN-005-REPORT]]
