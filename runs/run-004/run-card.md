# RUN-004 — CDP-001 local-research sprint program

Last updated: 2026-07-14 01:17:24 PDT — edited by: Codex

**run_id:** RUN-004
**date:** 2026-07-14
**run_type:** lab-validation
**path_id:** CDP-001
**segment_id:** SEG-002
**hypothesis_ids:** GH-004
**gtm_ids:** GTM-001
**question:** Which of the selected local models can use bounded SearXNG public
search to produce evidence-disciplined account, buyer-function, category,
language, and contradiction research for `CDP-001`, and what verified public
evidence does that work add for the community-behavioral-health branch?
**owner:** Codex conducts and records the run; Hermes invokes named local
workers; Mark retains approval for every external or customer-facing action.
**data_class:** external-okay — public sources, prior public account cards,
and concise internal references only. No raw testimonial, customer data,
private contact information, logins, or local-only material.
**sources:** CDP-001; SEG-002; GH-004; GTM-001; Run 002 account intelligence;
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
**charter_version:** v1.9 plus DR-29, DR-31, and DR-32
**target_signal:** N/A (lab-validation; no market test occurs)
**output_schema:** Frozen worker contract; fifty-prompt queue; runtime state;
raw worker outputs and usage records; privacy-safe trace; compact evidence
cards; model utility scorecard; and final CDP handoff.
**pre_run_snapshot:** Pending immediately before first launch; record SearXNG,
dashboard, resident models, memory fit, and Hermes/provider resolution.
**approval:** APPROVED by Mark 2026-07-14 (DR-32)

## Operating boundaries

- A worker is a draft-only public-research surface. Its output is not validated
  evidence, a model-routing decision, or authorization to act.
- The conductor records concrete model/provider, tool status, prompt ID,
  elapsed time, output path, and failure state. It does not silently retry a
  failure with another provider or change local-model residency.
- The finite supervisor reads a compact state file rather than the full worker
  transcripts. It may end a worker that has produced no terminal result by the
  twelve-minute limit, then records the timeout.
