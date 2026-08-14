# MindfulText Epoch 1 — Decision Record — 2026-08-11 — Founder-controlled relationship pipeline

Last updated: 2026-08-13 12:43:56 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-45]]

## DR-45 — W3b — Lead Stage Automation

Mark selects **W3b — Lead Stage Automation**, the W3 relationship-pipeline
model that separates a lead's business stage from its evidence timeline and
proposed work. The initial, customizable lead-stage seed is:

`identified → researched → outreach_approved → contacted → replied → meeting_scheduled → meeting_completed → closed_won | closed_lost`

The system may create `identified` when a prospect is introduced and may
record an inbound call request. Mark's owner session controls outreach
approval, all sends, strategic moves, backward/reopen moves, and closed
won/lost. A versioned transition policy may automatically advance only the
following three edges from a trusted, unambiguous source event:

- `contacted → replied` from a provider-confirmed reply;
- `replied → meeting_scheduled` from a confirmed calendar booking; and
- `meeting_scheduled → meeting_completed` from an unambiguous completed
  calendar event or external transcript availability.

Every automatic transition records source, policy version, timestamp,
timeline, stage history, and audit evidence. Mark can reverse it with a linked
human reversal. `requested` remains a call-request event, not a universal lead
stage. Configurable substages may add detail without changing this sequence.

## Consequences

- Agents, Unipile, n8n, and other integrations append source-stamped timeline
  activities and may create proposed work. They have no general stage-change
  authority; only the three policy-matched trusted events above may advance a
  stage automatically.
- Timeline activity includes research evidence, an outreach draft, LinkedIn
  reaction, invitation/message send, reply, website engagement, call request,
  booking, meeting result, and payment reference. A LinkedIn reaction or an
  agent-discovered fact is evidence, not proof of lead intent.
- Agent-created outreach must enter an approval queue with its supporting data
  point; Mark approves or rejects it before any later provider send. Automatic
  external outreach remains out of scope.
- A public-site call request attaches to an existing lead when the canonical
  identity match is confident; otherwise it creates a new identified lead and
  records the request. It must not create a parallel lifecycle for the same
  person.
- W3's owner interface/API needs a manual stage-history action that records
  prior stage, next stage, actor, timestamp, and optional non-sensitive reason.
- Full Zoom transcripts remain in Zoom. Growth Ops retains external references
  plus structured summaries, tags, and selected quotes.
- Mark explicitly chooses unbounded pre-customer intake and raw-source
  retention for this first local owner-only system, pending a later cleanup
  policy. The archive retains source metadata/reference, content hash, review
  state, tags, linked records, and owner access audit, but never credentials,
  tokens, passwords, or payment-card data.
- Product/customer data is governed by its own PII, consent, access, retention,
  and deletion policy; this decision does not set that policy. The Growth
  source archive may retain owner-reviewed public or authorized
  lead-generation/outreach material, including raw content, pending a later
  cleanup decision. It never retains private provider exports.

## Boundary

This freezes the ownership and conceptual model for W3, not the entire W3 API
contract. Product/customer PII policy, duplicate-call-request policy, numeric
rate limits, n8n activation, provider credentials, any external send, database
migration, production deployment, and the later raw-source cleanup policy
remain separate decisions. No agent or integration receives general stage or
outreach authority merely because it can write an activity or draft.

## Related records

- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API Contract Proposal]] — proposed interface that must implement this boundary.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — W3 execution status and gate.
- [[decisions/2026-08-10-growth-ops-owner-auth|DR-41]] — the Mark-only owner authorization boundary.
