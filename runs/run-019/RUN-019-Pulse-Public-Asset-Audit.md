---
record_type: run-card
run: RUN-019
title: Pulse Public Asset Audit
status: completed
area: social-learning
focus: Qualify whether retained Pulse materials can support a future public insight asset without exposing community data or making unsupported scale, methodology, or rights claims.
next_decision: Keep Pulse as a private research/prototype asset; approve a separate local-only provenance inventory before considering an aggregated public report.
date: 2026-07-28
product: PROD-001
threads: [TRK-006]
workflow: WF-006
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-018]
result_updates: []
---

# RUN-019 — Pulse Public Asset Audit

Last updated: 2026-07-28 10:44:41 PDT — edited by: Codex

**run_id:** RUN-019
**date:** 2026-07-28
**workflow_id:** pulse-public-asset-qualification
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SOCIAL-IDEA-LEDGER|SOC-001]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-005]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]; [[growth/BRAND-DIRECTION|BRD-001]]; [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]; [[decisions/DECISION-REGISTER|DR-36]]
**run_type:** lab-validation
**path_id:** SOCIAL-LEARNING-LANE-C1
**segment_id:** N/A — asset/provenance qualification only; it does not select or validate a market segment.
**hypothesis_ids:** N/A — no claim that content creates stickiness, demand, or revenue is tested here.
**gtm_ids:** N/A — no reusable GTM motion is asserted.
**question:** Do the retained Healthcare Pulse code and workflow documents establish enough provenance, method, scale, rights, and privacy information to support a public educational or searchable insight asset; if not, what smallest local-only inventory must precede any public use?
**owner:** Codex; Mark directly approved execution 2026-07-28.
**data_class:** local-only — inspect only retained source code/workflow documentation and current public policy. No database, spreadsheet, credential, raw Reddit post, username, private platform data, deployment, or runtime endpoint is accessed; repository output retains safe summaries and source pointers only.
**sources:** [[growth/SOCIAL-IDEA-LEDGER|SOC-001]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-005]]; [[checklists/SOCIAL-LEARNING-LANE|Social Learning Lane C1]]; [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]; local Pulse source/docs at `/Users/mgzm-studio/AI-Studio/Projects/Replit/Pulse`; retained n8n export inventory; current official Reddit terms and guidance. See [[runs/run-019/outputs/SOURCES|SOURCES]].
**allowed_tools_providers:** Local source-code and documentation inspection plus current public policy research only. Do not authenticate, query or export a database/spreadsheet, read raw posts or usernames, invoke an API/webhook, start the application, inspect secrets, change code/workflows, reactivate ingestion, create a landing page, publish, monitor, scrape, contact anyone, or make an external-system write.
**budget:** One primary-agent, documentation-only provenance pass; three bounded analyses; three-hour ceiling.
**external_spend_cap:** $0
**stop_condition:** Stop and mark the public-asset path ineligible if a conclusion requires raw content, credentials, live access, personal/health information, legal interpretation beyond policy reading, a commercial API use decision, or an unverified numerical claim. Record the evidence gap rather than working around it.
**review_date:** 2026-07-28
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** [[runs/run-019/outputs/SOURCES|SOURCES]]; [[runs/run-019/outputs/PULSE-PUBLIC-ASSET-QUALIFICATION|PULSE-PUBLIC-ASSET-QUALIFICATION]]; [[runs/run-019/outputs/RUN-019-REPORT|RUN-019-REPORT]]; and privacy-safe `trace.jsonl`. No raw source content or external action.
**pre_run_snapshot:** 2026-07-28 10:44 PDT — local-code/document and current-policy scope only. The Pulse app, database, connected sheets, n8n workflows, credentials, raw post corpus, live endpoints, and social accounts were not opened, run, queried, changed, or reactivated.
**approval:** APPROVED by Mark 2026-07-28 (direct request to plan and execute the identified runs)
**closure:** Completed 2026-07-28 10:44 PDT — retained documentation shows a healthcare-discussion prototype with a raw-content-capable schema and a June 2025 internal note referring to 5,311 total records, not a verified 10K/40K corpus. The public-asset path is therefore not eligible now. Current Reddit terms also make commercial/API and user-content rights material conditions. The smallest next step is a separately approved local-only provenance inventory; until that passes, Pulse may inform private thinking only and must not be turned into a landing page, searchable archive, public report, source of quotes, or scale claim. No runtime, data source, workflow, or external system was accessed or changed.

## Related records

- [[growth/SOCIAL-IDEA-LEDGER|SOC-001]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-005]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]
- [[growth/BRAND-DIRECTION|BRD-001]]
- [[checklists/SOCIAL-LEARNING-LANE|Social Learning Lane C1]]
- [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]
- [[decisions/DECISION-REGISTER|DR-36]]
- [[runs/run-019/RUN-019-Pulse-Public-Asset-Notes|RUN-019 notes]]
- [[runs/run-019/outputs/PULSE-PUBLIC-ASSET-QUALIFICATION|Pulse qualification]]
- [[runs/run-019/outputs/RUN-019-REPORT|RUN-019 report]]
- [[runs/run-019/outputs/SOURCES|sources]]

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
