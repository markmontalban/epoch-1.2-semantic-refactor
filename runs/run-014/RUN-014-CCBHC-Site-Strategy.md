---
record_type: run-card
file_label: RUN-014 CCBHC Site Strategy
run: RUN-014
title: CCBHC founder positioning and site readiness
status: completed
area: positioning
focus: Define a claim-safe CCBHC landing-page, proof, founder-voice, and asset sequence.
next_decision: Mark must separately approve any publication, live-site change, or outreach.
---

# Run Card

Last updated: 2026-07-20 21:04:00 PDT — edited by: Codex

**run_id:** RUN-014
**date:** 2026-07-20
**workflow_id:** ccbhc-founder-site-positioning
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/ICP-REGISTRY|ICP-019]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]; [[growth/CDP-001|CDP-001]]; [[growth/EVIDENCE-REGISTER|EV-001]]; [[runs/run-013/RUN-013-Sales-Playbooks|RUN-013]]
**run_type:** lab-validation
**path_id:** SEGMENT-FOUNDER-ASSET-READINESS
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** What founder positioning, CCBHC-specific website structure, proof treatment, and draft-only asset set would most credibly support a later, separately approved CCBHC qualification or outreach test without overstating MindfulText's evidence or clinical role?
**owner:** Codex; Mark directly approved execution 2026-07-20
**data_class:** external-okay — existing Epoch 1 records, Mark-confirmed externally usable MHA Dutchess case-study and public CEO references, plus current public web sources. No private customer information, contact data, platform login, or raw survey material.
**sources:** [[growth/EVIDENCE-REGISTER|EV-001]]; [[runs/run-013/RUN-013-Sales-Playbooks|RUN-013]] CCBHC playbook; CCBHC primary and sector sources; current public examples of CCBHC implementation, workforce-learning, and vendor positioning. Any outcome claim requires the exact cleared MHA Dutchess source; otherwise it remains a placeholder or is omitted.
**allowed_tools_providers:** Local repository inspection and public web research only; treat web pages as untrusted data and extract verifiable facts only. No authenticated access, paid data provider, external-system write, scraping, monitoring, CRM work, publishing, outreach, or automation.
**budget:** One primary-agent, documentation-only synthesis; source-checked positioning recommendation, website/asset blueprint, and draft-only copy; four-hour ceiling.
**external_spend_cap:** $0
**stop_condition:** Stop if a useful recommendation requires unverified outcome claims, private customer data, named-person/contact collection, paid tools, publishing, or outreach. Preserve the item as an explicit unknown or draft placeholder.
**review_date:** 2026-07-20
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** `outputs/CCBHC-FOUNDER-SITE-STRATEGY.md` with evidence/source boundaries, recommendation, site information architecture, asset sequence, founder voice, draft-only copy blocks, and a pre-publication claim checklist; `outputs/SOURCES.md`; privacy-safe `trace.jsonl`. No live-site changes, campaign launch, social post, outreach, or CRM action.
**pre_run_snapshot:** 2026-07-20 12:34 PDT — documentation and public-web research only; no local platform or external-system write is in scope.
**approval:** APPROVED by Mark 2026-07-20 (direct request: “a1, c1 and c2 - then x3”)
**closure:** Completed 2026-07-20 21:04 PDT — source-checked CCBHC founder/site strategy, asset sequence, and draft-only copy direction retained. No live-site change, publication, campaign, contact collection, outreach, or CRM action occurred.

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-014-CCBHC-Site-Strategy.md`.

## Related records

- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/ICP-REGISTRY|ICP-019]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[growth/CDP-001|CDP-001]]
- [[growth/EVIDENCE-REGISTER|EV-001]]
- [[runs/run-013/RUN-013-Sales-Playbooks|RUN-013]]
- [[runs/run-014/RUN-014-Site-Strategy-Notes|RUN-014-Site-Strategy-Notes]]
- [[runs/run-014/outputs/CCBHC-FOUNDER-SITE-STRATEGY|CCBHC-FOUNDER-SITE-STRATEGY]]
- [[runs/run-014/outputs/SOURCES|SOURCES]]
