---
record_type: run-card
file_label: RUN-012 Segment Prioritization
run: RUN-012
title: Top-ten segment prioritization
status: completed
area: market-prioritization
focus: Compare ten buyer and workflow contexts using retained evidence and limited current public research.
next_decision: Approve, revise, or defer a matched CCBHC and FQHC qualification pass.
date: 2026-07-20
product: PROD-001
threads: [TRK-001, TRK-002, TRK-003, TRK-004]
workflow: WF-004
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-001, RUN-002, RUN-005, RUN-006, RUN-008, RUN-009]
result_updates: [SEG-002, SEG-003]
---

# Run Card

Last updated: 2026-07-20 10:50:00 PDT — edited by: Codex

**run_id:** RUN-012
**date:** 2026-07-20
**workflow_id:** top-ten-segment-prioritization
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]; [[growth/SEGMENTS#seg-004--neurodivergent-people|SEG-004]]; [[growth/SEGMENTS#seg-005--family-caregivers|SEG-005]]; [[growth/SEGMENTS#seg-006--care-recipients|SEG-006]]; [[growth/SEGMENTS#seg-008--community-mental-health-support-workforce|SEG-008]]; [[growth/HYPOTHESES#gh-002--mindfultext-for-elevated-stress-lcsws|GH-002]]; [[growth/HYPOTHESES#gh-003--retention-gift-mindfulness-desk-object-for-paid-subscribers|GH-003]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]; [[growth/CDP-001|CDP-001]]; [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]]; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]; [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]; [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]; [[runs/run-008/RUN-008-Narrative-Pain-Map|RUN-008]]; [[runs/run-009/RUN-009-DSP-Qualification|RUN-009]]
**run_type:** lab-validation
**path_id:** SEGMENT-PRIORITIZATION
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; comparison candidates to be defined and ranked
**hypothesis_ids:** [[growth/HYPOTHESES#gh-002--mindfultext-for-elevated-stress-lcsws|GH-002]]; [[growth/HYPOTHESES#gh-003--retention-gift-mindfulness-desk-object-for-paid-subscribers|GH-003]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Which ten distinct market segments—including a deeper care-delivery cut and adjacent/non-care alternatives—have the strongest evidence-backed case for a future account-and-buyer-role qualification pass, and which primary and backup segment should be advanced without treating the result as demand, buyer intent, or authorization for outreach?
**owner:** Codex; Mark approved execution 2026-07-20 (X3)
**data_class:** external-okay — retained Epoch 1 records and limited public first-party/category research only; no private platform material, contact data, or local-only inputs.
**sources:** Existing segment, hypothesis, ICP, CDP, GTM, and [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]]/002/005/006/008/009 records; limited current public sources that distinguish close candidate segments.
**allowed_tools_providers:** Local repository inspection and public web research; no authenticated platform access, paid data provider, local-model invocation, external-system write, scraper, monitoring, CRM, publishing, outreach, or automation.
**budget:** One primary-agent, two-stage research-and-synthesis pass; four-hour ceiling, with fresh source opening only where retained evidence cannot distinguish candidates.
**external_spend_cap:** $0
**stop_condition:** Stop if a conclusion requires private data, contact or profile collection, authenticated platform access, paid data, outreach, or a customer-facing action; return INCONCLUSIVE if public evidence cannot distinguish the leading candidates.
**review_date:** 2026-07-20
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** `outputs/TOP-TEN-SEGMENT-MAP.md`, `outputs/SEGMENT-PRIORITIZATION-SCORECARD.md`, `outputs/EVIDENCE-AND-DISCONFIRMERS.md`, `outputs/RUN-012-REPORT.md`, and privacy-safe `trace.jsonl`; distinguish observed/public context, founder evidence, inference, and unknowns.
**pre_run_snapshot:** 2026-07-20 10:10 PDT — documentation and public-web research only; Dispatcher unavailable at `localhost:7070`, so no work card could be claimed; no local platform or external system is in scope.
**approval:** APPROVED by Mark 2026-07-20 (X3)
**closure:** Completed 2026-07-20 10:45 PDT — a ten-context public-evidence map recommends CCBHCs as the primary account-qualification route and integrated-behavioral-health FQHCs as the backup comparison. No buyer intent, named-person research, outreach, CRM action, or automation occurred.

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-012-Segment-Prioritization.md`.

## Related records

- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/SEGMENTS|SEG-003]]
- [[growth/SEGMENTS|SEG-004]]
- [[growth/SEGMENTS|SEG-005]]
- [[growth/SEGMENTS|SEG-006]]
- [[growth/SEGMENTS|SEG-008]]
- [[growth/HYPOTHESES|GH-002]]
- [[growth/HYPOTHESES|GH-003]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[growth/CDP-001|CDP-001]]
- [[runs/run-001/RUN-001-Growth-Path-Ranking|RUN-001]]
- [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]
- [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]
- [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]
- [[runs/run-008/RUN-008-Narrative-Pain-Map|RUN-008]]
- [[runs/run-009/RUN-009-DSP-Qualification|RUN-009]]
- [[runs/run-012/RUN-012-Prioritization-Work-Notes|RUN-012-Prioritization-Work-Notes]]
- [[runs/run-012/outputs/EVIDENCE-AND-DISCONFIRMERS|EVIDENCE-AND-DISCONFIRMERS]]
- [[runs/run-012/outputs/RUN-012-REPORT|RUN-012-REPORT]]
- [[runs/run-012/outputs/SEGMENT-PRIORITIZATION-SCORECARD|SEGMENT-PRIORITIZATION-SCORECARD]]
- [[runs/run-012/outputs/TOP-TEN-SEGMENT-MAP|TOP-TEN-SEGMENT-MAP]]
