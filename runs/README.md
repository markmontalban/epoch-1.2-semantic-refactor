# Epoch 1 — Run Index

Last updated: 2026-07-28 10:44:41 PDT — edited by: Codex

Use this page to re-enter a run. A **run** is the bounded agent execution;
a **GH-###** is the reusable growth idea that may be explored again in another
run. The hypothesis therefore stays in `growth/`, while its execution record
and outputs stay together in that run's folder.

## Run artifact standard

New multi-worker runs follow the retention and safety rules in the
[run-card template](../templates/Run-Card-Template.md#usage-notes): one consolidated
worker-results ledger, deduplicated input snapshots, transient files only while
a worker is active, atomic state changes, and verified idempotent closure.
Raw `local-only` content stays outside this repository.
Beginning with Run 005, each run card also records `workflow_id`,
`workflow_version`, `execution_kind`, `parent_run`, and `subject_refs`; closed
Runs 001–004 remain historical and are not backfilled.

## Run 001 — [[growth/HYPOTHESES#gh-002--mindfultext-for-elevated-stress-lcsws|GH-002]] exploration

| Need | Canonical location |
| --- | --- |
| Run authority, constraints, and execution record | [Run card](run-001/RUN-001-Growth-Path-Ranking.md) |
| Growth idea and expansion history | [GH-002](../growth/HYPOTHESES.md#gh-002--mindfultext-for-elevated-stress-lcsws) |
| Working research brief | [Blackboard](run-001/RUN-001-Growth-Research-Notes.md#gh-002--working-brief) |
| Five path cards | [Paths](../paths/) |
| Ranked recommendation | [Ranked scorecard](run-001/outputs/GH-002-ranked-scorecard.md) |
| Evidence gaps / cheapest tests | [Evidence gaps](run-001/outputs/GH-002-evidence-gaps.md) |
| U.S. TAM note | [TAM note](run-001/outputs/GH-002-tam.md) |
| Privacy-safe execution trace | [Trace](run-001/trace.jsonl) |

**Current checkpoint:** `D3` — Mark reviews evidence quality and decision
usefulness. The next possible test is not authorized by this index.

## Run 002 — Segment Intelligence + Local Research Evaluation

Run 002 is the public, bounded research run for a qualifying hypothesis. It
maps a segment, candidate accounts, buying-group roles, market language,
category positioning, and contradictions; it also records whether local work
was useful. It is not a CRM, monitoring system, or outreach run. [Run card](run-002/RUN-002-Segment-Intelligence.md)
· [Segment Map](../growth/SEGMENTS.md) · [Account Intelligence](../growth/ACCOUNT-INTELLIGENCE.md)

**Current checkpoint:** Run 002 completed its public-research outputs and
created [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]] under [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] — Community behavioral-health providers.
The local `task:classify` check was inconclusive; it did not affect the public
research result. Mark reviews the outputs at `D8`, then selects at most one
hypothesis for a Run 003 packet at `D9`.

## Run 003 — Validation Packet for One Selected Test

Run 003 now scopes one selected atomic hypothesis ([[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]) and produces one
human-reviewed packet—buyer criteria, claim, proof needed, discovery questions,
target signal, pass/fail/stop conditions, and draft-only materials. [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]
compares `llama3.3:70b` local work with the current Codex/GPT-5 frontier
session using the same frozen input; it records the model for each arm. The
both packets completed; the scorecard documents why the frontier packet is the
safer starting point for this high-judgment task. [Run card](run-003/RUN-003-Model-Validation-Comparison.md)
· [Scorecard](run-003/CMP-001-Comparison-Scorecard.md)

## Run 004 — [[growth/CDP-001|CDP-001]] local-research sprint program

Run 004 is a five-hour, public-research-only local-model dogfood run. It uses
Hermes with an explicit local provider, a fixed fifty-prompt catalog, a
twenty-eight-sprint ceiling, and a finite supervisor. Workers never edit
canonical documents; the run records model/tool reliability and source-checked
CDP evidence only. [Run card](run-004/RUN-004-Local-Research-Sprints.md) · [Prompt catalog](run-004/PROMPT-CATALOG.md)

## Run 005 — Care-delivery organization registry

Run 005 is a four-hour, public-research-only account-registry run for [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]].
It retains 56 organization records, a normalized source ledger, and a
buyer-function/title taxonomy, with explicit confidence and freshness gaps. It
does not create a CRM, people list, buyer-intent claim, monitoring process, or
outreach authorization. [Run card](run-005/RUN-005-Organization-Registry.md) · [Report](run-005/outputs/RUN-005-REPORT.md) · [Registry](../growth/account-registry/README.md)

## Run 006 — Care-delivery one-degree market map

Run 006 is an initial, four-hour, public-research-only map around [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]].
It retains 50 nodes across direct `under`, `beside`, and `above` relationships,
including segments, representative organizations, associations, workforce and
quality bodies, payment structures, funders, regulators, and infrastructure.
The complete map and source ledger live together in the run output; this does
not create a code fork, merge code, or create a second data system. [Run card](run-006/RUN-006-One-Degree-Market-Map.md) · [Map](run-006/outputs/one-degree-map.csv) · [Report](run-006/outputs/RUN-006-REPORT.md) · [DR-34](../decisions/2026-07-15-run-006-one-degree-map.md)

**Current checkpoint:** Run 006 passed. `SEG-002 / CCBHCs` remains the lead
branch; `SEG-003 / FQHC integrated behavioral health` is the recommended first
comparison. Public research did not establish buyer intent or authorize any
external action.

## Run 007 — Care-delivery influence map

Run 007 is an initial, four-hour, public-research-only sweep for [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]].
It retains 50 public influence records across healthcare
business media, behavioral-health sources, FQHC/community-health channels,
rural and post-acute care, workforce media, nursing podcasts, and clinician or
creator channels. It does not create a contact list, outreach queue, monitoring
process, publishing plan, or buyer-intent claim. [Run card](run-007/RUN-007-Influence-Map.md)
· [Report](run-007/outputs/RUN-007-REPORT.md) · [Registry](run-007/outputs/influence-registry.csv)

**Current checkpoint:** Run 007 passed. The next smallest useful question is
which 5–8 channels in one selected care-delivery branch show current audience
fit, recurring workforce/care-delivery coverage, and a plausible non-promotional
learning format.

## Run 008 — Care-delivery narrative and pain map

Run 008 is the approved fork of Run 007. It attempted all 50 public influence
sources and organized their recurring narratives, ranked operating pain points,
terms, and historical topic shifts across the recent six months and prior three
years. The run retains 37 item-sampled sources, 10 channel-only sources, and 3
lead-only sources; it does not establish article volume, buyer intent, demand,
or authorization for outreach or publishing. [Run card](run-008/RUN-008-Narrative-Pain-Map.md)
· [Report](run-008/outputs/RUN-008-REPORT.md) · [Pain ranking](run-008/outputs/pain-point-ranking.csv)
· [Narratives](run-008/outputs/narrative-registry.csv) · [Terms](run-008/outputs/term-taxonomy.csv)

**Current checkpoint:** Run 008 passed with bounded coverage gaps. The strongest
next research route is a setting-specific workflow study in [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] CCBHCs,
[[growth/SEGMENTS#seg-003--fqhcs-with-integrated-behavioral-health|SEG-003]] integrated FQHC behavioral health, or one post-acute transition path.

## Run 009 — Direct Support Professional ICP qualification

Run 009 used prior Epoch 1 evidence plus bounded public research and MHA
context to qualify Direct Support Professionals as a possible new frontline
user audience. It recommends a candidate ICP under [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]], keeps the
organization sponsor separate, and does not create a new segment, account
list, buyer-intent signal, or outreach authorization. [Run card](run-009/RUN-009-DSP-Qualification.md)
· [Report](run-009/outputs/RUN-009-REPORT.md) · [ICP note](run-009/outputs/dsp-icp-note.md)

**Current checkpoint:** Mark reviews whether to create candidate [[growth/ICP-REGISTRY|ICP-022]] and
select one DSP setting for a narrower provider/workflow qualification pass.

## Run 010 — Epoch 1 hierarchy and data lineage

Run 010 is a completed local-filesystem lab-validation pass over the retained
Epoch 1 corpus through Run 009. It records a source-linked entity hierarchy,
segment map, account-lineage index, buyer taxonomy, artifact graph, identifier
registry, and adjacency map without synthesizing findings or making strategic
recommendations. It opened no fresh sources and made no external change.
[Run card](run-010/RUN-010-Data-Lineage.md) · [Lineage map](../EPOCH-1-HIERARCHY-DATA-LINEAGE.md)

## Run 011 — [[growth/SOCIAL-IDEA-LEDGER|SOC-008]] constructive comedy movement concept

Run 011 is an initial, documentation-only lab-validation pass over Mark's
founder direction. It advances a mindfulness-led, comedy-infused movement as a
coherent founder-theme route: broad public identity, with care-worker and
founder lenses. It records guardrails, three internal format cards, and a
separately gated manual-baseline recommendation; it establishes no demand,
resonance, health outcome, GTM motion, or authority to publish, monitor,
automate, or reach out. [Run card](run-011/RUN-011-Comedy-Concept.md) · [Concept packet](run-011/outputs/SOC-008-CONCEPT-PACKET.md)

## Run 012 — Top-ten segment prioritization

Run 012 compared ten buyer/workflow-defined market contexts using retained
Epoch 1 evidence and limited current public sources. It recommends CCBHCs as
the primary account-qualification route and integrated-behavioral-health FQHCs
as the backup comparison; the result is neither demand nor buyer-intent
evidence, and it authorizes no named-person research, outreach, CRM action, or
automation. [Run card](run-012/RUN-012-Segment-Prioritization.md) · [Report](run-012/outputs/RUN-012-REPORT.md)
· [Scorecard](run-012/outputs/SEGMENT-PRIORITIZATION-SCORECARD.md)

## Run 013 — Segment sales-playbook starters

Run 013 is a documentation-only fork of Run 012. It translates each of the
ten ranked buyer/workflow contexts into a separate internal sales hypothesis:
the sponsor, first problem frame, credible wedge, proof required, tentative
buying path, disqualifier, and next evidence gap. It establishes no demand,
buyer intent, budget, product outcome, named buyer, outreach, CRM action, or
automation. [Run card](run-013/RUN-013-Sales-Playbooks.md) · [Report](run-013/outputs/RUN-013-REPORT.md)

## Run 014 — CCBHC founder positioning and site readiness

Run 014 is an approved, documentation-only positioning pass for the primary
CCBHC route. It uses current public CCBHC context, the current MindfulText site,
and Mark-confirmed external use of the MHA Dutchess case study to recommend a
CCBHC landing page, proof treatment, founder voice, and draft-only asset
sequence. It makes no live-site change, publication, campaign, contact
collection, outreach, or CRM action. [Run card](run-014/RUN-014-CCBHC-Site-Strategy.md) ·
[Site strategy](run-014/outputs/CCBHC-FOUNDER-SITE-STRATEGY.md) ·
[Sources](run-014/outputs/SOURCES.md)

## Run 015 — Executive insight asset validation

Run 015 tested whether public, organization-level research can produce a
source-checked executive signal memo more useful than generic ICP-level
personalization. It produced a reusable angle taxonomy and private memos for
Centerstone, Santé Group, and Gulf Coast Center. Gulf Coast Center is the
strongest later manual-test candidate; Santé demonstrates why a credible motion
needs to preserve disqualifying or redundant context. The run passed production
feasibility only: no executive received an asset, so attention, reply, or buyer
intent remain untested. No named-person research, contact collection, outreach,
CRM action, publishing, monitoring, or automation occurred. [Run card](run-015/RUN-015-Executive-Signal-Memos.md)
· [Executive memos](run-015/outputs/EXECUTIVE-SIGNAL-MEMOS.md) ·
[Quality scorecard](run-015/outputs/QUALITY-SCORECARD.md) ·
[Sources](run-015/outputs/SOURCES.md)

## Run 016 — Product-led reflective-onboarding validation

Run 016 translated [[growth/HYPOTHESES#gh-005--reflective-onboarding-to-a-personalized-mindfultext-rhythm|GH-005]] into a testable, nonclinical concept for **Your
MindfulText Rhythm**: a guided reflection, one current focus, a personal
experience page, and explicitly controlled preference adaptation. It produces
a staged prototype brief, measurement/decision plan, and privacy/claim
guardrails. The run passed for a separate clickable-prototype decision only;
it did not build, test with participants, collect data, change the product,
or establish conversion, retention, personalization, or health outcomes.
[Run card](run-016/RUN-016-Reflective-Onboarding.md) ·
[Prototype brief](run-016/outputs/PERSONAL-EXPERIENCE-PROTOTYPE-BRIEF.md) ·
[Measurement plan](run-016/outputs/MEASUREMENT-AND-DECISION-PLAN.md) ·
[Report](run-016/outputs/RUN-016-REPORT.md)

## Run 017 — Social/search route qualification

Run 017 is an approved public-research and documentation-only pass over the
existing social founder-theme lane and CCBHC asset strategy. It qualifies one
transparent MindfulText-owned character-account route supporting a people-first
founder asset; it does not establish ranking, resonance, demand, employee
participation, or commercial result. No account, post, website change, tracking,
outreach, monitoring, or automation occurred. [Run card](run-017/RUN-017-Social-Search-Route.md)
· [Route qualification](run-017/outputs/ROUTE-QUALIFICATION.md) ·
[Report](run-017/outputs/RUN-017-REPORT.md) ·
[Source ledger](run-017/outputs/SOURCES.md)

## Run 018 — Mindfulness Social Studio

Run 018 is an approved, documentation-only founder-brand and channel-architecture
pass. It defines mindfulness as the worldview root; proposes a Social Studio
that turns technology, ambitious work, care, and film into concrete human-systems
stories; and reserves final voice, community judgment, and all external action
for Mark. It recommends the existing AI Instagram/TikTok pair as the provisional
public account and does not authorize an account change, media creation,
publishing, analytics collection, monitoring, outreach, or automation.
[Run card](run-018/RUN-018-Mindfulness-Social-Studio.md) ·
[Operating model](run-018/outputs/SOCIAL-STUDIO-OPERATING-MODEL.md) ·
[Report](run-018/outputs/RUN-018-REPORT.md)

## Run 019 — Pulse public-asset audit

Run 019 is an approved local-code/document and public-policy qualification of
the retained Healthcare Pulse prototype. It finds a possible future private
research asset, but not evidence sufficient for a public landing page,
searchable archive, quotes, sentiment/trend claim, or 10K/40K scale claim. The
next possible step is a separately approved, read-only local-only provenance
inventory; no source data, runtime, credential, workflow, or external system was
accessed or changed. [Run card](run-019/RUN-019-Pulse-Public-Asset-Audit.md) ·
[Qualification](run-019/outputs/PULSE-PUBLIC-ASSET-QUALIFICATION.md) ·
[Report](run-019/outputs/RUN-019-REPORT.md)

## Run 020 — CCBHC buyer-context brand translation

Run 020 revalidated the CCBHC operating context using current public sources,
then created a provisional route-specific translation of the general MindfulText
worldview in [[growth/BRAND-DIRECTION|BRD-002]]. It distinguishes public
operating facts from stakeholder-role hypotheses and explicitly does not
establish buyer demand, budget, authority, clinical impact, public resonance,
or a ready-to-publish message. [Run card](run-020/RUN-020-CCBHC-Buyer-Context-Brand.md)
· [Stakeholder map](run-020/outputs/CCBHC-STAKEHOLDER-DAY-IN-THE-LIFE.md)
· [BRD-002 critique](run-020/outputs/BRD-002-CRITIQUE.md)
· [Report](run-020/outputs/RUN-020-REPORT.md)

## Run 021 — Wearable roadmap and alpha-focus pick

Run 021 compared blood-pressure reduction, sleep, and burnout across bottom-up
sizing, access speed, and claims exposure. Sizing did not separate the
candidates and access was effectively tied at alpha scale; the run recommends
sleep first because its bounded promise fits a lower-risk general-wellness
posture. Burnout remains second and blood pressure third. The recommendation
requires a separate dated founder decision and authorizes no product, external
action, clinical claim, contact, or spend.
[Run card](run-021/RUN-021-Wearable-Roadmap-Alpha-Focus.md) ·
[Decision matrix](run-021/outputs/FOCUS-DECISION-MATRIX.md) ·
[Report](run-021/outputs/RUN-021-REPORT.md)
