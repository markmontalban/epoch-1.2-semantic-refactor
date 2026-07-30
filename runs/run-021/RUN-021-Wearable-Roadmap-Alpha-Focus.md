---
record_type: run-card
run: RUN-021
title: Wearable Roadmap Sizing and Alpha Focus Pick
status: completed
area: product-market
focus: Pick the alpha specialization among blood-pressure reduction, sleep, and burnout by sizing each bottom-up and scoring access speed and claims exposure as separate axes, without treating a fast integration path as market evidence.
next_decision: Review the recommended alpha focus and record a dated approval, revision, or park decision pending dogfood evidence.
date: 2026-07-30
product: PROD-001
threads: [TRK-007]
workflow: WF-007
run_type: lab-validation
execution_kind: initial
input_runs: []
result_updates: []
---

# RUN-021 — Wearable Roadmap, Sizing, and Alpha Focus Pick

Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

**run_id:** RUN-021
**date:** 2026-07-30
**workflow_id:** market-sizing-and-focus-pick
**workflow_version:** v0.1
**execution_kind:** initial
**parent_run:** N/A
**subject_refs:** [[growth/ICP-REGISTRY|ICP-021]]; [[growth/ICP-REGISTRY|ICP-005]]; [[growth/SEGMENTS|SEG-001]]; [[growth/SEGMENTS|SEG-002]]
**run_type:** lab-validation
**path_id:** [[growth/ICP-REGISTRY|ICP-021]]
**question:** Which of blood-pressure reduction, sleep, or burnout should MindfulText launch alpha on, once market size, access speed, and claims exposure are scored as separate axes rather than blended?
**owner:** Cursor; Mark directly approved execution 2026-07-30 (selected X3 after A1/B2 intake).
**data_class:** external-okay — approved repository records plus public institutional, statistical, and vendor-documentation sources only. No private, person-level, patient, contact, authenticated, or raw social data.
**sources:** `Projects/wearables/wearable-signals/Docs/WEARABLE-SIGNAL-STANDARD.md` (§B capability matrix, §C access gates, §G3 gate risk, §H open questions); `Projects/wearables/garmin/Docs/PHASE1-DECISIONS.md`; [[growth/ICP-REGISTRY|ICP registry]]; [[growth/SEGMENTS|segments]]; public install-base and market sources.
**allowed_tools_providers:** Read-only local Markdown inspection and public web research. Do not authenticate, contact any person or organization, create accounts, publish, monitor, scrape, make CRM writes, or spend funds.
**budget:** One primary research and synthesis pass; sequential tasks; four-hour ceiling.
**external_spend_cap:** $0
**stop_condition:** Stop and mark sizing inconclusive if no citable install-base or market figure can ground a candidate. Record the gap and name the one piece of evidence that would break the tie; do not infer around it.
**review_date:** 2026-07-30
**charter_version:** v1.9
**target_signal:** N/A
**output_schema:** [[runs/run-021/outputs/SOURCES|SOURCES]]; [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]; [[runs/run-021/outputs/SIZING-MODEL|bottom-up sizing model]]; [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]; [[runs/run-021/outputs/WEARABLE-DEVICE-ROADMAP|device roadmap]]; [[runs/run-021/outputs/RUN-021-REPORT|run report]].
**pre_run_snapshot:** 2026-07-30 PDT — documentation and public-research scope only. No platform, private source, authenticated account, external system, or publication surface opened or changed. Garmin dogfood build is instrumented but has not yet delivered a watch-originated event, so no first-party wearable evidence exists.
**approval:** APPROVED by Mark 2026-07-30 (direct selection of X3; intake A1 + B2)
**closure:** Completed 2026-07-30 — **recommends sleep as the alpha focus, decided on the claims axis.** Bottom-up sizing could not separate the three candidates: the apparent 21× advantage of sleep over blood pressure collapses to 4.3× once one unverified third-party Garmin user estimate is removed, sleep and burnout run on the same devices and people, and all three target overlapping populations of stressed wearable owners. Access speed is effectively tied at alpha scale, because the Oura and Whoop 10-user caps are large enough to run an alpha and burnout can run on ungated self-report alone — so blood pressure's ungated Withings path is a schedule advantage that only pays from the eleventh subscriber. Sleep wins on claims exposure as the only candidate whose core promise sits inside the FDA's January 2026 purely-wellness examples. Burnout is sequenced second (same integration plus self-report), blood pressure third (single concentrated supplier, highest claims work). Disclaimer and targeting language delivered. Sizing is recorded as inconclusive on its own terms, with vendor delivery latency named as the single tie-breaking piece of evidence. No dated decision record was created; Mark alone may approve, revise, or park the recommendation. No external action, contact, spend, or code change occurred.

## Decision this run must close

R1 — Which of the three candidate specializations MindfulText launches alpha on,
with the other two explicitly sequenced rather than discarded.

## Tasks

- **R5a — Define the three offers concretely.** For each candidate: what the
  subscriber receives, which signal families drive it, a representative message,
  and cadence. Sizing and claims assessment both depend on this.
- **R5b — Bottom-up sizing, cross-checked top-down.** Per candidate: addressable
  device install base → share reachable server-side and plausibly consenting →
  conversion assumption → ARPU → SAM and SOM. Every step carries a citation or a
  named assumption. Cross-check against a top-down figure and report the gap
  rather than reconciling it away.
- **R5c — Score access speed and claims exposure as separate axes.** Access: gate,
  cost, realistic time to first subscriber, per §C of the signal standard.
  Claims: what the offer implies clinically, the right target audience, required
  disclaimer language, and where the wellness-versus-medical-device line sits.
  Keep the axes separate so fast access cannot silently decide strategy.
- **R5d — Roadmap specialized and healthcare-adjacent wearables.** Cuffs, rings,
  CGM-adjacent, and clinical-grade devices: which are reachable per the capability
  matrix, which matter per candidate, and which require the mobile app flagged in
  §H of the standard.
- **R5e — Recommend one alpha focus with posture written out.** One
  recommendation, disclaimer and targeting language as a deliverable, the
  sequencing consequence for the other two, and the mobile-app cost each option
  implies — without deciding the mobile-app question, which is separately scoped.

## Boundaries

- Public sources only; no vendor, partner, or customer contact of any kind.
- **The interested sleep partner is an input to sizing, not a contactable party.**
- No PHI, no real subscriber data, no spend, no account creation, no outreach.
- Does not decide whether MindfulText ships a mobile app; states the cost per option.
- Must not assert clinical efficacy for any candidate, including blood pressure.
- Does not modify code or the wearables projects.

## Evaluation

- **Pass:** one recommended focus, both axes scored, an auditable assumption
  chain, and disclaimer language written.
- **Fail:** three options described with no recommendation.
- **Inconclusive:** sizing cannot separate the candidates — state it, and name the
  single piece of evidence that would break the tie.

## Known tension to report, not resolve away

The signal standard found that blood pressure is the only candidate with an
ungated, free, server-side data source (Withings), while every sleep and burnout
source sits behind an approval gate. That is a **schedule** argument. It must not
be presented as evidence that blood pressure is the right market, and the report
must keep the two arguments visibly separate.

## Related records

- [[growth/ICP-REGISTRY|ICP-021]] — wearer frame
- [[growth/ICP-REGISTRY|ICP-005]] — corporate wellbeing
- [[growth/SEGMENTS|SEG-001]] — care-delivery organizations
- [[growth/SEGMENTS|SEG-002]] — community behavioral-health providers
- [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]
- [[runs/run-021/outputs/SIZING-MODEL|sizing model]]
- [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]
- [[runs/run-021/outputs/WEARABLE-DEVICE-ROADMAP|device roadmap]]
- [[runs/run-021/outputs/RUN-021-REPORT|run report]]
- [[runs/run-021/outputs/SOURCES|sources]]
