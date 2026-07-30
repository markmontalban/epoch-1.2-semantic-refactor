---
record_type: run-card
file_label: RUN-017 Social Search Route
run: RUN-017
title: Social and search route qualification
status: completed
area: social-search
focus: Qualify a transparent character-account and people-first owned-asset route without deceptive or unsupported claims.
next_decision: Consider a separately approved manual baseline; no account, post, or site change is authorized.
---

# Run Card

Last updated: 2026-07-21 13:16:27 PDT — edited by: Codex

**run_id:** RUN-017
**date:** 2026-07-21
**workflow_id:** social-search-route-qualification
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SOCIAL-IDEA-LEDGER|SOC-002]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-003]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-008]]; [[runs/run-011/RUN-011-Comedy-Concept|RUN-011]]; [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]; [[decisions/2026-07-16-social-intelligence-founder-content-direction#dr-36--social-intelligence-and-founder-content-exploration-direction|DR-36]]
**run_type:** lab-validation
**path_id:** SOCIAL-LEARNING-LANE-C4
**segment_id:** N/A — this qualifies a cross-cutting social/search route; it does not assert a new market segment.
**hypothesis_ids:** N/A — the route must earn a GH or GTM promotion after observed results.
**gtm_ids:** N/A — no reusable GTM motion is asserted by this lab-validation pass.
**question:** Can a transparently MindfulText-owned, employee-operated character account support one people-first owned asset and a narrow organic-search route without deceptive affiliation, unsupported health claims, or a broad SEO program—and is that route strong enough to justify a separately approved manual baseline?
**owner:** Codex; Mark directly approved execution 2026-07-21
**data_class:** external-okay — existing Epoch 1 social and site-strategy records plus current public MindfulText, FTC, Google Search, and public search-result material. No employee data, platform login, customer data, private/social-platform content, or raw analytics.
**sources:** [[growth/SOCIAL-IDEA-LEDGER|SOC-002]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-003]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-008]]; [[runs/run-011/RUN-011-Comedy-Concept|RUN-011]]; [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]; [[decisions/2026-07-16-social-intelligence-founder-content-direction#dr-36--social-intelligence-and-founder-content-exploration-direction|DR-36]]; current public MindfulText pages; FTC disclosure guidance; Google Search Central people-first-content guidance; bounded public query checks. See `outputs/SOURCES.md`.
**allowed_tools_providers:** Local repository inspection and public web/search research only. No account creation, authenticated platform access, paid tool, external-system write, scraper, monitoring, employee outreach, content scheduling, publishing, commenting, messaging, site change, or analytics collection.
**budget:** One primary-agent public-research and documentation pass; four bounded tasks; four-hour ceiling.
**external_spend_cap:** $0
**stop_condition:** Stop if the route needs a concealed employee relationship, harmful/polarizing satire, private or platform-authenticated data, a health/clinical/outcome claim not supported by approved evidence, paid distribution, or a broad programmatic SEO/content system. Record the limitation rather than working around it.
**review_date:** 2026-07-21
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** `outputs/SOURCES.md`; `outputs/ROUTE-QUALIFICATION.md`; `outputs/RUN-017-REPORT.md`; and privacy-safe `trace.jsonl`. No account, employee program, social post, website, campaign, tracking configuration, or external action.
**pre_run_snapshot:** 2026-07-21 13:16 PDT — public-search and documentation-only scope; no local model, authenticated service, platform account, external-system write, or local-only data is in scope.
**approval:** APPROVED by Mark 2026-07-21 (direct request: “x3” after selecting search strategy, a brand-owned character account, and attention/search/commercial-learning signals)
**closure:** Completed 2026-07-21 13:16 PDT — the pass qualifies a narrow, people-first asset-plus-distribution route only. It recommends a transparently MindfulText-owned character account and one existing CCBHC-adjacent founder asset as a later manual-baseline candidate. No employee participation, social account, post, site change, tracking configuration, publication, outreach, monitoring, or automation occurred.

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
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/RUN-017-Social-Search-Route.md`.

## Related records

- [[growth/SOCIAL-IDEA-LEDGER|SOC-002]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-003]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-008]]
- [[runs/run-011/RUN-011-Comedy-Concept|RUN-011]]
- [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]]
- [[decisions/DECISION-REGISTER|DR-36]]
- [[runs/run-017/RUN-017-Route-Research-Notes|RUN-017-Route-Research-Notes]]
- [[runs/run-017/outputs/ROUTE-QUALIFICATION|ROUTE-QUALIFICATION]]
- [[runs/run-017/outputs/RUN-017-REPORT|RUN-017-REPORT]]
- [[runs/run-017/outputs/SOURCES|SOURCES]]
