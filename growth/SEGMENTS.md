# Growth — Segment Map

Last updated: 2026-07-15 16:22:37 PDT — edited by: Codex

This is the canonical market hierarchy for reusable Growth work. Segment IDs
are stable, flat, and non-semantic. `parent_segment_id` expresses a true
parent-child relationship; use the human-readable breadcrumb in discussion.
`GH-###` items, GTM motions, tests, accounts, signals, and runs link to a
segment rather than duplicating its definition. [DR-29](../decisions/2026-07-13-segment-linked-runs.md)

## Segment fields

| Field | Meaning |
| --- | --- |
| `segment_id` | Immutable `SEG-###` identifier. |
| `parent_segment_id` | Optional immediate parent; blank only for a root segment. |
| `title` | Current human-readable market name. |
| `definition` | Boundary that makes the segment distinct. |
| `status` | `candidate`, `active`, `parked`, or `archived / split`; only Mark sets `active`. |
| `linked_icps` | Audience records that presently fit the segment. |

## Segments

### SEG-001 — Care-delivery organizations

- Parent segment: —
- Definition: Organizations that deliver patient, client, or community care
  through time-constrained staff workflows. This is a market family, not an
  assertion that every organization has the same buyer, pain, or budget.
- Excludes: generic employers, consumer buyers, and Mental Health America
  affiliates as new-target accounts for this research stream.
- Linked ICPs: `ICP-006`, `ICP-019` (candidate relationship; may be split as
  research distinguishes community behavioral health from FQHC contexts).
- Status: candidate
- Research question: Which care-delivery contexts have a visible workforce
  stress/retention problem, a plausible owner, and a low-disruption program
  need that MindfulText can credibly address?
- Research asset: `RUN-005` created a 56-record public organization registry
  and buyer-function/title taxonomy. Its directory status is a research lead,
  not a buyer or market-validation claim. [Registry](account-registry/README.md)

### SEG-002 — Community behavioral-health providers

- Parent segment: `SEG-001`
- Definition: Community-based organizations providing mental health, substance
  use, crisis, recovery, or integrated behavioral-health services through
  employed care teams. Includes CCBHC contexts when the organization fits this
  definition.
- Linked ICPs: `ICP-019` (current candidate; the exact organization/buyer
  boundary remains to be qualified).
- Status: candidate
- Why it is separate: workforce shortages, staff wellbeing, retention,
  workforce development, and organizational support are visible category
  concerns, but a low-disruption program must complement—never stand in for—
  staffing, pay, workload, supervision, and operational change.
- Discovery and formalization: [[runs/run-001/RUN-001-Growth-Research-Notes|Run 001 working notes]] first preserved the care-delivery direction; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]] formalized this focused segment record.

### SEG-003 — FQHCs with integrated behavioral health

- Parent segment: `SEG-001`
- Definition: Federally qualified health centers that operate integrated
  behavioral-health services alongside primary care.
- Linked ICPs: `ICP-019` only provisionally; split to a dedicated ICP when
  buyer roles, workflow, proof requirement, or GTM differ materially.
- Status: candidate
- Why it is separate: FQHC workforce-wellbeing research shows similar strain,
  but governance, care delivery, and buyer context may differ from community
  behavioral-health providers.
- Discovery and formalization: [[paths/MT-LCSW-04-fqhc-behavioral-health|Run 001's FQHC candidate path]] is the first retained FQHC route; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]] formalized it as the `SEG-003` comparison branch.

### SEG-004 — Neurodivergent people

- Parent segment: —
- Definition: People who identify as neurodivergent and may seek an accessible,
  self-directed, non-clinical mindfulness practice. This is an audience
  category, not a diagnosis or a claim that neurodivergence entails a shared
  care need, condition, or purchase behavior.
- Linked ICPs: —
- Status: candidate
- Research question: Which accessibility needs, daily contexts, and preferred
  practice formats define a sufficiently specific user and buyer hypothesis?

### SEG-005 — Family caregivers

- Parent segment: —
- Definition: Unpaid people who provide ongoing support to a parent or other
  family member; includes sandwich-generation caregivers who also support
  children. This segment is about the person giving care, not the person
  receiving it.
- Linked ICPs: `ICP-014` (candidate relationship; its current organizational
  buyer/channel framing may need a dedicated individual-user ICP).
- Status: candidate
- Research question: Which recurring caregiving moments create a meaningful,
  non-clinical need, and is MindfulText adopted directly, through an employer,
  or through a caregiver-support organization?

### SEG-006 — Care recipients

- Parent segment: —
- Definition: Older adults and disabled people who currently receive recurring
  formal or informal care. This segment is about the person receiving care;
  it does not treat age or disability alone as a care need.
- Linked ICPs: —
- Status: candidate
- Research question: In which care contexts could an accessible, voluntary,
  non-clinical text-based practice be useful, and who chooses, funds, or
  supports its use without displacing the person's autonomy?

### SEG-007 — Community mental-health support participants with higher support needs

- Parent segment: `SEG-006`
- Definition: People receiving ongoing support, services, referral, peer,
  rehabilitation, housing, or family-advocacy help through an MHA affiliate or
  comparable community mental-health program, where serious functional
  impairment or complex, persistent support needs are part of the context.
  MHA affiliate programs and local populations vary; this does not assert that
  every participant has a serious mental illness or receives clinical care.
- Linked ICPs: `ICP-007` (existing affiliate/program-leader context only; not
  a new-target-account pool).
- Status: candidate
- Research basis: MHA says affiliate services can include peer support,
  rehabilitation, housing, family advocacy, and referrals; SAMHSA defines
  serious mental illness by a diagnosable condition plus substantial functional
  impairment, rather than by a colloquial severity label. [MHA affiliate
  network](https://mhanational.org/our-affiliates/) · [SAMHSA SMI
  definition](https://www.samhsa.gov/mental-health/serious-mental-illness/about)
- Research question: Which support setting, level of autonomy, accessibility
  requirement, and consent model would make a voluntary, non-clinical practice
  appropriate as a complement to—never a replacement for—care, treatment, or
  crisis support?

### SEG-008 — Community mental-health support workforce

- Parent segment: `SEG-001`
- Definition: Frontline employees and peer-support workers in MHA-affiliate or
  comparable community mental-health programs who support people with complex
  or higher-support needs. This is a workforce-context segment, not a claim
  that staff personally have a mental-health condition or work in a uniformly
  high-acuity setting.
- Linked ICPs: `ICP-007` (affiliate/program-leader context only; no new
  MHA-account targeting implied).
- Status: candidate
- Research basis: MHA identifies peer support and professional education for
  people working in the mental-health field among affiliate activities.
  [MHA affiliate network](https://mhanational.org/our-affiliates/)
- Research question: Which roles have a recurring, time-constrained emotional
  load and a plausible workforce sponsor, without confusing a small supportive
  practice with staffing, supervision, clinical care, or structural support?

## Rules for adding a segment

1. Use the next unused `SEG-###` value. Never renumber an existing record.
2. Add `parent_segment_id` only when the child has a materially distinct buyer,
   workflow/pain, proof requirement, or GTM/test.
3. Use tags for filters that can cut across segments, such as
   `workforce:LCSW`, `need:staff-stress`, `workflow:low-downtime`, and
   `buyer-role:clinical-leader`.
4. If an existing segment is materially redefined, mark it `archived / split`
   and point to the replacements. Preserve its historical links.
