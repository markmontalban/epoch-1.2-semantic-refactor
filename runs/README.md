# Epoch 1 — Run Index

Last updated: 2026-07-16 11:50:49 PDT — edited by: Codex

Use this page to re-enter a run. A **run** is the bounded agent execution;
a **GH-###** is the reusable growth idea that may be explored again in another
run. The hypothesis therefore stays in `growth/`, while its execution record
and outputs stay together in that run's folder.

## Run artifact standard

New multi-worker runs follow the retention and safety rules in the
[run-card template](../templates/run-card.md#usage-notes): one consolidated
worker-results ledger, deduplicated input snapshots, transient files only while
a worker is active, atomic state changes, and verified idempotent closure.
Raw `local-only` content stays outside this repository.
Beginning with Run 005, each run card also records `workflow_id`,
`workflow_version`, `execution_kind`, `parent_run`, and `subject_refs`; closed
Runs 001–004 remain historical and are not backfilled.

## Run 001 — GH-002 exploration

| Need | Canonical location |
| --- | --- |
| Run authority, constraints, and execution record | [Run card](run-001/run-card.md) |
| Growth idea and expansion history | [GH-002](../growth/HYPOTHESES.md#gh-002--mindfultext-for-elevated-stress-lcsws) |
| Working research brief | [Blackboard](run-001/blackboard.md#gh-002--working-brief) |
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
was useful. It is not a CRM, monitoring system, or outreach run. [Run card](run-002/run-card.md)
· [Segment Map](../growth/SEGMENTS.md) · [Account Intelligence](../growth/ACCOUNT-INTELLIGENCE.md)

**Current checkpoint:** Run 002 completed its public-research outputs and
created `GH-004` under `SEG-002 — Community behavioral-health providers`.
The local `task:classify` check was inconclusive; it did not affect the public
research result. Mark reviews the outputs at `D8`, then selects at most one
hypothesis for a Run 003 packet at `D9`.

## Run 003 — Validation Packet for One Selected Test

Run 003 now scopes one selected atomic hypothesis (`GH-004`) and produces one
human-reviewed packet—buyer criteria, claim, proof needed, discovery questions,
target signal, pass/fail/stop conditions, and draft-only materials. `CMP-001`
compares `llama3.3:70b` local work with the current Codex/GPT-5 frontier
session using the same frozen input; it records the model for each arm. The
both packets completed; the scorecard documents why the frontier packet is the
safer starting point for this high-judgment task. [Run card](run-003/run-card.md)
· [Scorecard](run-003/CMP-001-SCORECARD.md)

## Run 004 — CDP-001 local-research sprint program

Run 004 is a five-hour, public-research-only local-model dogfood run. It uses
Hermes with an explicit local provider, a fixed fifty-prompt catalog, a
twenty-eight-sprint ceiling, and a finite supervisor. Workers never edit
canonical documents; the run records model/tool reliability and source-checked
CDP evidence only. [Run card](run-004/run-card.md) · [Prompt catalog](run-004/PROMPT-CATALOG.md)

## Run 005 — Care-delivery organization registry

Run 005 is a four-hour, public-research-only account-registry run for `SEG-001`.
It retains 56 organization records, a normalized source ledger, and a
buyer-function/title taxonomy, with explicit confidence and freshness gaps. It
does not create a CRM, people list, buyer-intent claim, monitoring process, or
outreach authorization. [Run card](run-005/run-card.md) · [Report](run-005/outputs/RUN-005-REPORT.md) · [Registry](../growth/account-registry/README.md)

## Run 006 — Care-delivery one-degree market map

Run 006 is an initial, four-hour, public-research-only map around `SEG-001`.
It retains 50 nodes across direct `under`, `beside`, and `above` relationships,
including segments, representative organizations, associations, workforce and
quality bodies, payment structures, funders, regulators, and infrastructure.
The complete map and source ledger live together in the run output; this does
not create a code fork, merge code, or create a second data system. [Run card](run-006/run-card.md) · [Map](run-006/outputs/one-degree-map.csv) · [Report](run-006/outputs/RUN-006-REPORT.md) · [DR-34](../decisions/2026-07-15-run-006-one-degree-map.md)

**Current checkpoint:** Run 006 passed. `SEG-002 / CCBHCs` remains the lead
branch; `SEG-003 / FQHC integrated behavioral health` is the recommended first
comparison. Public research did not establish buyer intent or authorize any
external action.

## Run 007 — Care-delivery influence map

Run 007 is an initial, four-hour, public-research-only sweep for `SEG-001`.
It retains 50 public influence records across healthcare
business media, behavioral-health sources, FQHC/community-health channels,
rural and post-acute care, workforce media, nursing podcasts, and clinician or
creator channels. It does not create a contact list, outreach queue, monitoring
process, publishing plan, or buyer-intent claim. [Run card](run-007/run-card.md)
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
or authorization for outreach or publishing. [Run card](run-008/run-card.md)
· [Report](run-008/outputs/RUN-008-REPORT.md) · [Pain ranking](run-008/outputs/pain-point-ranking.csv)
· [Narratives](run-008/outputs/narrative-registry.csv) · [Terms](run-008/outputs/term-taxonomy.csv)

**Current checkpoint:** Run 008 passed with bounded coverage gaps. The strongest
next research route is a setting-specific workflow study in `SEG-002` CCBHCs,
`SEG-003` integrated FQHC behavioral health, or one post-acute transition path.

## Run 009 — Direct Support Professional ICP qualification

Run 009 used prior Epoch 1 evidence plus bounded public research and MHA
context to qualify Direct Support Professionals as a possible new frontline
user audience. It recommends a candidate ICP under `SEG-001`, keeps the
organization sponsor separate, and does not create a new segment, account
list, buyer-intent signal, or outreach authorization. [Run card](run-009/run-card.md)
· [Report](run-009/outputs/RUN-009-REPORT.md) · [ICP note](run-009/outputs/dsp-icp-note.md)

**Current checkpoint:** Mark reviews whether to create candidate `ICP-022` and
select one DSP setting for a narrower provider/workflow qualification pass.

## Run 010 — Epoch 1 hierarchy and data lineage

Run 010 is a completed local-filesystem lab-validation pass over the retained
Epoch 1 corpus through Run 009. It records a source-linked entity hierarchy,
segment map, account-lineage index, buyer taxonomy, artifact graph, identifier
registry, and adjacency map without synthesizing findings or making strategic
recommendations. It opened no fresh sources and made no external change.
[Run card](run-010/run-card.md) · [Lineage map](../EPOCH-1-HIERARCHY-DATA-LINEAGE.md)

## Run 011 — SOC-008 constructive comedy movement concept

Run 011 is an initial, documentation-only lab-validation pass over Mark's
founder direction. It advances a mindfulness-led, comedy-infused movement as a
coherent founder-theme route: broad public identity, with care-worker and
founder lenses. It records guardrails, three internal format cards, and a
separately gated manual-baseline recommendation; it establishes no demand,
resonance, health outcome, GTM motion, or authority to publish, monitor,
automate, or reach out. [Run card](run-011/run-card.md) · [Concept packet](run-011/outputs/SOC-008-CONCEPT-PACKET.md)
