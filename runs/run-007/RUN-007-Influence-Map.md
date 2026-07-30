---
record_type: run-card
file_label: RUN-007 Influence Map
run: RUN-007
title: Care-delivery influence map
status: completed
area: influence-research
focus: Identify public channels and sources shaping care-delivery and workforce-stress conversation.
next_decision: Select a narrower channel comparison only after Mark chooses the branch.
---

# Run Card

Last updated: 2026-07-15 01:08:00 PDT — edited by: Codex

**run_id:** RUN-007
**date:** 2026-07-15
**workflow_id:** care_delivery_influence_map
**workflow_version:** 0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]], [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]], [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]], [[growth/CDP-001|CDP-001]], [[growth/ICP-REGISTRY|ICP-019]], [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]], [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]], [[runs/run-005/RUN-005-Organization-Registry|RUN-005]], [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]
**run_type:** lab-validation
**path_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]
**segment_id:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; focused comparisons include [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] and [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]
**hypothesis_ids:** [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]
**question:** Which U.S.-relevant journalists, trade publications, blogs, newsletters, podcasts, YouTube channels, creators, associations, and other public content sources shape conversation around care-delivery organizations, workforce stress, staff wellbeing, retention, workflow, and behavioral-health delivery—and which 30–50 deserve future research attention for MindfulText distribution?
**owner:** Codex conducts and records bounded public research; Mark retains approval for every external, customer-facing, publishing, partnership, or outreach action.
**data_class:** external-okay — public publication, creator, organization, channel, and audience pages only. No private data, logins, personal contact information, raw customer material, or local-only content.
**sources:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]]; [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]]; [[growth/CDP-001|CDP-001]]; [[growth/ICP-REGISTRY|ICP-019]]; [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]; [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]; [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]; [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]; current public outlet, creator, association, government, academic, and sector sources opened during this run.
**allowed_tools_providers:** Codex public web search and direct public-page review only. No paid database, scraper, contact-enrichment provider, CRM, outbound provider, monitoring tool, local-model worker, or external-system write.
**budget:** Four-hour wall-clock ceiling; broad U.S. discovery sweep; retain 30–50 normalized source/profile records, with at least one direct public source per retained record and stronger evidence for priority records when available.
**external_spend_cap:** $0
**stop_condition:** Stop at 50 retained records, at the four-hour boundary, or earlier if public evidence cannot support a clear relevance classification. Stop immediately if work requires login/private material, personal-contact collection, scraping, monitoring, outreach, paid-provider use, CRM write, publishing, or a claim of buyer intent, budget, efficacy, or outcome.
**review_date:** 2026-07-15
**charter_version:** v1.9 plus [[decisions/2026-07-13-segment-linked-runs#dr-29--segment-first-linked-research-model-and-run-002003-amendment|DR-29]], [[decisions/2026-07-14-customer-development-plan#dr-31--segment-linked-customer-development-plan|DR-31]], [[decisions/2026-07-15-run-005-care-delivery-registry#dr-33--run-005-care-delivery-organization-registry|DR-33]], and the [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]] approval record
**target_signal:** N/A
**output_schema:** `outputs/influence-registry.csv` with stable INFL IDs; `outputs/source-ledger.csv`; `outputs/RUN-007-REPORT.md`; `outputs/coverage-gaps.md`; privacy-safe `trace.jsonl`. Reviewed implications may be proposed for [[growth/CDP-001|CDP-001]], [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]], and related records; no outreach queue or publishing plan is created.
**pre_run_snapshot:** 2026-07-15 01:08 PDT — public research only; no local-model work or external system write is in scope. Dashboard/model state is not a run gate.
**approval:** APPROVED by Mark 2026-07-15 (conversation: Run 007 A1/B1/C1, “then go”)

## Run 007 execution brief

### Decision

This run should help decide which public influence channels and creators are credible, relevant, and worth a later bounded distribution or content-learning step for the broad U.S. care-delivery market.

### Tasks

- `R5a` Discover and normalize public influence sources across hospital/health-system, behavioral-health, FQHC/community-health, nursing/workforce, home-health/hospice, long-term-care, health-policy, and healthcare-technology contexts.
- `R5b` Classify each source as journalist, trade publication, blog/newsletter, podcast, YouTube/video channel, creator, association, research/media outlet, or other amplifier; record audience and care-delivery relationship without inferring buyer status.
- `R5c` Rank retained records by care-delivery relevance, audience fit, evidence quality, apparent reach/consistency when publicly observable, and plausible future learning value; record contradictions and unknowns.
- `R5d` Identify coverage gaps, category language, and the cheapest next research step. Do not contact, pitch, subscribe, monitor, or publish.

### Evaluation

- **Pass:** 30–50 source-verified records span the major care-delivery contexts, include both large and niche sources, and produce a defensible ranked shortlist with explicit evidence gaps.
- **Fail:** The sweep is dominated by generic consumer wellness or unrelated health-tech sources, or fewer than 30 records can be supported with direct public evidence.
- **Inconclusive:** Public pages are inaccessible or too ambiguous to classify reliably; report the affected categories and preserve only verified records.

### Facts, assumptions, hypotheses, unknowns

- **Fact:** [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]] is a candidate market family, not a validated buyer segment; [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] and [[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]] are focused branches.
- **Founder assumption:** “The space” includes people and outlets influencing care-delivery leaders and workforce conversations, not only direct buyers.
- **Agent hypothesis:** Trade and niche professional sources may be more decision-useful than high-reach consumer creators for future distribution learning.
- **Unknown:** Which sources have an audience that includes actual care-delivery decision-makers, versus clinicians, students, consumers, or general health audiences.

## Related records

- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/SEGMENTS|SEG-003]]
- [[growth/CDP-001|CDP-001]]
- [[growth/ICP-REGISTRY|ICP-019]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]
- [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-15-run-005-care-delivery-registry|DR-33]]
- [[runs/run-007/RUN-007-Influence-Research-Notes|RUN-007-Influence-Research-Notes]]
- [[runs/run-007/outputs/RUN-007-REPORT|RUN-007-REPORT]]
- [[runs/run-007/outputs/coverage-gaps|coverage-gaps]]
