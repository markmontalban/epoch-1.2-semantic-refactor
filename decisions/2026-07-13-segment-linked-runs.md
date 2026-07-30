# MindfulText Epoch 1 — Decision Record — 2026-07-13 — segment-linked research runs

Last updated: 2026-07-13 21:37:17 PDT — edited by: Codex

## DR-29 — Segment-first linked research model and Run 002/003 amendment

**Decision:** Mark approved a segment-first operating model for Growth work.
The canonical records use stable, flat, non-semantic IDs and explicit links;
they do not encode hierarchy in the IDs. A human-readable title and an
optional `parent_segment_id` show segment hierarchy.

The core relationship is:

```text
Segment → ICP / buyer context → Growth Hypothesis → GTM motion → Test → Run
```

The entities serve different purposes. A segment is a reusable market map and
is never scored. A Growth Hypothesis is an atomic, falsifiable belief and is
scored. A GTM motion describes how a hypothesis is researched or tested. A
test defines the evidence to seek. A run is the bounded execution record that
may use those linked records. Existing path cards remain a comparison view;
they are not the root of the hierarchy.

### Segment convention

- `SEG-###` identifiers are permanent and flat. A child segment records its
  `parent_segment_id`; its title is shown in a breadcrumb rather than through
  nested identifiers such as `SEG-001a1`.
- Every linked record carries the most specific applicable `segment_id`.
  Tags are reserved for cross-cutting filters such as `workforce:LCSW` or
  `workflow:low-downtime`; tags are not a substitute for the segment map.
- Create a child segment only when buyer group, workflow/pain, required proof,
  or GTM/test materially differs. A renamed account or geography alone is not
  enough.

### Run amendment

[[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]] is amended from a pure local-first comparison to **Segment
Intelligence + Local Research Evaluation**. It begins only for a named
hypothesis that scores at least 6/10 with Pain, Evidence, Buyer reachability,
and MindfulText fit each at least 1. It uses public sources only and produces
segment, account, buyer-group, market-language, and category-positioning
research. Local research work may be evaluated for traceability, usefulness,
and latency, but that evaluation is not the run's only business output.

[[runs/run-003/RUN-003-Model-Validation-Comparison|RUN-003]] is amended to **Validation Packet for One Selected Test**. It takes
one atomic hypothesis and one test at a time; it does not require multiple
hypotheses and does not execute outreach. Its packet defines the buyer group,
claim, proof needed, discovery questions, claim-risk boundaries, success/fail
criteria, and draft-only materials. Mark separately approves or declines any
manual test.

### Account intelligence and evidence boundaries

Run 002 may retain public organization URLs, public buyer-role context,
dated public signals, public positioning, category language, and source links.
It is not a CRM, a people-surveillance system, an automated monitor, or an
outreach list. Public posts and leadership shares can inform language,
priorities, and research questions; they do not prove readiness or purchase
intent. No scraping, autonomous monitoring, private contact details, or
outbound activity is authorized.

The founder-supplied MHA Dutchess case-study summary and recent employee
testimonial are recorded as internal prioritization evidence only. They may
not be quoted externally or treated as a general claim until Mark confirms the
applicable attribution, consent, and usage rights.

### Initial application

Create [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]] — Care-delivery organizations as the parent segment and use
[[growth/HYPOTHESES#gh-002--mindfultext-for-elevated-stress-lcsws|GH-002]] as historical umbrella evidence for the first Run 002. Run 002 may
propose smaller, atomic hypotheses after segment research; no hypothesis is
validated merely by public research.

**Status:** Mark-approved 2026-07-13. This amendment preserves the $0
agent-side spend cap, data classes, no-silent-fallback rule, and Mark-only
approval for external activity.
