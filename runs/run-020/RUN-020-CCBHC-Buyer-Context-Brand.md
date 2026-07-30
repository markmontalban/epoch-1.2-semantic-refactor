---
record_type: run-card
run: RUN-020
title: CCBHC Buyer Context Brand Translation
status: completed
area: care-delivery
focus: Revalidate the CCBHC operating context and translate the general MindfulText worldview into a bounded, buyer-aware brand and voice record without treating category evidence as demand evidence.
next_decision: Review and either retain, revise, or park the provisional [[growth/BRAND-DIRECTION|BRD-002]] translation before using it in a future asset or market-test decision.
---

# RUN-020 — CCBHC Buyer Context Brand Translation

Last updated: 2026-07-29 PDT — edited by: Codex

**run_id:** RUN-020
**date:** 2026-07-29
**workflow_id:** ccbhc-buyer-context-brand-translation
**workflow_version:** v0.1
**execution_kind:** fork
**parent_run:** [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]
**subject_refs:** [[growth/BRAND-DIRECTION|BRD-001]]; [[growth/SEGMENTS|SEG-001]]; [[growth/SEGMENTS|SEG-002]]; [[growth/ICP-REGISTRY|ICP-019]]; [[growth/HYPOTHESES|GH-004]]; [[growth/GTM-MOTIONS|GTM-001]]; [[growth/CDP-001|CDP-001]]
**run_type:** lab-validation
**path_id:** [[growth/SEGMENTS|SEG-002]]
**segment_id:** [[growth/SEGMENTS|SEG-001]]; [[growth/SEGMENTS|SEG-002]]
**hypothesis_ids:** [[growth/HYPOTHESES|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS|GTM-001]]
**question:** Does current public CCBHC context, combined with the retained buyer-function work, justify a provisional CCBHC-specific brand and voice translation; if so, what language fits stakeholders' operating realities without claiming demand, efficacy, or authority?
**owner:** Codex; Mark directly approved execution 2026-07-29.
**data_class:** external-okay — approved repository records plus public institutional and statistical sources only; no private, person-level, patient, contact, authenticated, or raw social data.
**sources:** [[growth/BRAND-DIRECTION|BRD-001]]; [[runs/run-013/RUN-013-Sales-Playbooks|RUN-013]]; [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]; [[runs/run-015/RUN-015-Executive-Signal-Memos|RUN-015]]; [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]; SAMHSA, HRSA, BLS, Census ACS PUMS, and National Council public material. See [[runs/run-020/outputs/SOURCES|sources]].
**allowed_tools_providers:** Read-only local Markdown inspection and public web research. Do not authenticate, collect named people or contacts, access patient/employee data, publish, contact, monitor, scrape, create accounts, change a website, make CRM writes, or spend funds.
**budget:** One primary synthesis plus one bounded internal critique; four-hour ceiling.
**external_spend_cap:** $0
**stop_condition:** Stop and mark the translation inconclusive if it requires an individual biography, a clinical/efficacy assertion, buyer-intent claim, named-person data, or fresh data that cannot be verified from an institutional or statistical source. Record the gap; do not infer around it.
**review_date:** 2026-07-29
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** [[runs/run-020/outputs/SOURCES|SOURCES]]; [[runs/run-020/outputs/CCBHC-STAKEHOLDER-DAY-IN-THE-LIFE|stakeholder day-in-the-life map]]; [[growth/BRAND-DIRECTION|BRD-002]]; [[runs/run-020/outputs/BRD-002-CRITIQUE|BRD-002 critique]]; [[runs/run-020/outputs/RUN-020-REPORT|run report]]; privacy-safe `trace.jsonl`.
**pre_run_snapshot:** 2026-07-29 PDT — documentation/public-research scope only. No local platform, private source, authenticated account, named-person registry, external system, or publication surface was opened or changed.
**approval:** APPROVED by Mark 2026-07-29 (direct selection of X3 after revising the run brief)
**closure:** Completed 2026-07-29 — current SAMHSA material confirms that CCBHCs operate across staffing, 24/7 access, care coordination, scope, quality/reporting, and governance obligations. It supports a cautious stakeholder-context translation, not buyer interest. The run creates provisional [[growth/BRAND-DIRECTION|BRD-002]], anchored to the founder-set BRD-001 worldview and explicitly bounded against clinical, workforce-outcome, and demand claims. No external action occurred.

## Related records

- [[growth/BRAND-DIRECTION|BRD-001 and BRD-002]]
- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/ICP-REGISTRY|ICP-019]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[growth/CDP-001|CDP-001]]
- [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]
- [[runs/run-013/RUN-013-Sales-Playbooks|RUN-013]]
- [[runs/run-015/RUN-015-Executive-Signal-Memos|RUN-015]]
- [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]
- [[runs/run-020/RUN-020-CCBHC-Buyer-Context-Notes|RUN-020 notes]]
- [[runs/run-020/outputs/CCBHC-STAKEHOLDER-DAY-IN-THE-LIFE|stakeholder map]]
- [[growth/BRAND-DIRECTION|BRD-002]]
- [[runs/run-020/outputs/BRD-002-CRITIQUE|critique]]
- [[runs/run-020/outputs/RUN-020-REPORT|report]]
- [[runs/run-020/outputs/SOURCES|sources]]

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-NNN-Topic.md`.
