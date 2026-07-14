# Growth — Segment Map

Last updated: 2026-07-13 21:47:28 PDT — edited by: Codex

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

## Rules for adding a segment

1. Use the next unused `SEG-###` value. Never renumber an existing record.
2. Add `parent_segment_id` only when the child has a materially distinct buyer,
   workflow/pain, proof requirement, or GTM/test.
3. Use tags for filters that can cut across segments, such as
   `workforce:LCSW`, `need:staff-stress`, `workflow:low-downtime`, and
   `buyer-role:clinical-leader`.
4. If an existing segment is materially redefined, mark it `archived / split`
   and point to the replacements. Preserve its historical links.
