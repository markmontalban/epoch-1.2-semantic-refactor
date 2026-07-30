---
record_type: run-card
file_label: RUN-004 Local Research Sprints
run: RUN-004
title: [[growth/CDP-001|CDP-001]] local-research sprint program
status: completed
area: market-research
focus: Test bounded local research against public account, buyer, category, and language questions.
next_decision: Choose a separate manual source-opening pass or pause the branch.
date: 2026-07-14
product: PROD-001
threads: [TRK-001]
workflow: WF-003
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-002, RUN-003]
result_updates: [CDP-001]
---

# RUN-004 — [[growth/CDP-001|CDP-001]] local-research sprint program

Last updated: 2026-07-14 01:17:24 PDT — edited by: Codex

**run_id:** RUN-004
**date:** 2026-07-14
**run_type:** lab-validation
**path_id:** [[growth/CDP-001|CDP-001]]
**segment_id:** [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Which of the selected local models can use bounded SearXNG public
search to produce evidence-disciplined account, buyer-function, category,
language, and contradiction research for [[growth/CDP-001|CDP-001]], and what verified public
evidence does that work add for the community-behavioral-health branch?
**owner:** Codex conducts and records the run; Hermes invokes named local
workers; Mark retains approval for every external or customer-facing action.
**data_class:** external-okay — public sources, prior public account cards,
and concise internal references only. No raw testimonial, customer data,
private contact information, logins, or local-only material.
**sources:** [[growth/CDP-001|CDP-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]; Run 002 account intelligence;
the frozen prompt catalog; public sources returned by SearXNG.
**allowed_tools_providers:** Hermes one-shot with explicit local `ollama`
provider and named model; SearXNG public search plus at most two public page
opens. No OpenRouter/default provider, scraping, monitoring, contact
enrichment, outbound, publishing, or external system writes.
**budget:** Five-hour wall-clock window; fifty queued prompts; at most
twenty-eight launches; twelve minutes maximum per worker.
**external_spend_cap:** $0. Local model compute and local SearXNG only; no
agent-initiated paid provider call or configuration change.
**stop_condition:** Stop each worker after two relevant sources, eight minutes
of research, or twelve minutes wall-clock. Stop the run at the five-hour
boundary or immediately if a task needs login, private data, outreach,
monitoring, personal-contact collection, or a provider/residency change.
**review_date:** 2026-07-14
**charter_version:** v1.9 plus [[decisions/2026-07-13-segment-linked-runs#dr-29--segment-first-linked-research-model-and-run-002003-amendment|DR-29]], [[decisions/2026-07-14-customer-development-plan#dr-31--segment-linked-customer-development-plan|DR-31]], and [[decisions/2026-07-14-run-004-cdp-local-research#dr-32--run-004-cdp-001-local-research-sprint-program|DR-32]]
**target_signal:** N/A (lab-validation; no market test occurs)
**output_schema:** Frozen worker contract; fifty-prompt queue; runtime state;
raw worker outputs and usage records; privacy-safe trace; compact evidence
cards; model utility scorecard; and final CDP handoff.
**pre_run_snapshot:** Pending immediately before first launch; record SearXNG,
dashboard, resident models, memory fit, and Hermes/provider resolution.
**approval:** APPROVED by Mark 2026-07-14 ([[decisions/2026-07-14-run-004-cdp-local-research#dr-32--run-004-cdp-001-local-research-sprint-program|DR-32]])

## Operating boundaries

- A worker is a draft-only public-research surface. Its output is not validated
  evidence, a model-routing decision, or authorization to act.
- The conductor records concrete model/provider, tool status, prompt ID,
  elapsed time, output path, and failure state. It does not silently retry a
  failure with another provider or change local-model residency.
- The finite supervisor reads a compact state file rather than the full worker
  transcripts. It may end a worker that has produced no terminal result by the
  twelve-minute limit, then records the timeout.

## Related records

- [[growth/CDP-001|CDP-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-14-run-004-cdp-local-research|DR-32]]
- [[runs/run-004/PROMPT-CATALOG|PROMPT-CATALOG]]
- [[runs/run-004/README|README]]
- [[runs/run-004/outputs/MODEL-UTILITY-SCORECARD|MODEL-UTILITY-SCORECARD]]
- [[runs/run-004/outputs/RUN-004-REPORT|RUN-004-REPORT]]
