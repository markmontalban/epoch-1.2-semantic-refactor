# [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]] — Care-delivery one-degree market map report

Last updated: 2026-07-15 00:55:00 PDT — edited by: Codex

## Run outcome

This run passed its primary evaluation. It produced a 50-node, source-backed
map around `SEG-001 — Care-delivery organizations`, with explicit relationship
labels, node types, linked Epoch 1 subjects, priority tiers, and unknowns. The
map is stored in [one-degree-map.csv](one-degree-map.csv); its public evidence
is normalized in [source-ledger.csv](source-ledger.csv).

## What the public research establishes

1. **Care delivery is a family, not one buyer segment.** CMS, HRSA, Medicare,
   SAMHSA, and provider associations describe materially different delivery
   settings: behavioral health, CCBHCs, FQHCs, rural clinics, hospitals, home
   health, hospice, skilled nursing, rehabilitation, dialysis, opioid treatment,
   tribal health, public health, and veteran care.
2. **CCBHCs are the closest structured branch.** SAMHSA defines CCBHCs around
   comprehensive behavioral-health access, crisis care, care coordination,
   staffing, governance, quality, and multiple funding paths. This makes the
   branch researchable, but it does not demonstrate MindfulText demand.
3. **FQHC integrated behavioral health is the key comparison.** HRSA and NACHC
   establish a large community-provider system that includes behavioral health,
   social workers, and patient-support services. Its governance and workflow
   may differ materially from community behavioral-health providers.
4. **Distributed and post-acute care deserve separate hypotheses.** CMS and
   Medicare define home health, hospice, SNF, and other post-acute categories as
   distinct delivery environments. Their workforces may have relevant stress
   and low-downtime conditions, but this run found no organization-level demand
   signal.
5. **The ecosystem is wider than providers.** National Council, NACHC, AHA,
   LeadingAge, AHCA/NCAL, ANA, NASW, Joint Commission, CARF, NCQA, workforce
   programs, EHR platforms, and integrated-care technical assistance all sit
   directly beside care delivery. They are potential context or channel nodes,
   not assumed customers.

## Recommended next decision

Keep `SEG-002 — Community behavioral-health providers / CCBHCs` as the lead
branch. Create or refine one atomic comparison hypothesis for `SEG-003 — FQHCs
with integrated behavioral health` before expanding to home health, hospice, or
aging services. If a later research run needs a route rather than an account,
test one of `National Council`, `NACHC`, or `NASW` as a channel or learning
ecosystem, explicitly separate from the buyer ICP.

## Pass / fail / inconclusive assessment

- **Pass:** 50 nodes; all retained nodes have a source reference; under/beside/above relationships are explicit; the report names ranked branches and evidence limits.
- **Fail condition avoided:** The output is not a flat list of organizations and does not treat an association, funder, or directory as a buyer.
- **Inconclusive items:** No buyer intent, budget ownership, willingness to pay, current unmet need, efficacy, or transferability claim is supported.

## Boundary record

No login, private data, personal contact data, scraping, monitoring, outreach,
CRM write, publishing, paid provider, local-model worker, or external spend was
used. Any future discovery conversation or market test requires a separate
approval.

## Related records

- [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006-One-Degree-Market-Map]]
- [[growth/SEGMENTS|SEG-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/SEGMENTS|SEG-003]]
- [[growth/CDP-001|CDP-001]]
- [[growth/ICP-REGISTRY|ICP-019]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]
- [[paths/MT-LCSW-04-fqhc-behavioral-health|Run 001 FQHC candidate path]]
- [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]]
- [[runs/run-005/RUN-005-Organization-Registry|RUN-005]]
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-15-run-005-care-delivery-registry|DR-33]]
- [[runs/run-006/RUN-006-One-Degree-Market-Map|RUN-006]]
