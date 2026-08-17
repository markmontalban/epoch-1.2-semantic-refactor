# MindfulText Epoch 1 — Decision Record — 2026-08-13 — L2 buyer-learning funnel

Last updated: 2026-08-14 15:03:33 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-46]]

## DR-46 — W4 L2 buyer-learning funnel

**Prototype amendment:** [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]] supersedes this record's visitor-facing invitation-attribution disclosure requirement for the prototype. It retains private opaque-token invitation attribution and all forwarding/scanner uncertainty.

Mark selects **L2 — Learn** as the active development target for the W4 Public
Beta Funnel. W4 keeps its established `W4a` direction/approval and `W4b`
implementation/acceptance umbrellas; level-specific tasks use IDs such as
`W4a-L2a` and `W4b-L2a`. L0 preserves the current static prototype, L1 adds
attributed recipient links, L2 adds a useful staff-support fit reflection, and
L3/L4 remain deferred.

The active visitor path is:

`manual LinkedIn invitation → branded recipient path → matched behavioral-health page → staff-support fit reflection → useful results → optional identification, demo, or conversation`

The Master Checklist owns the complete stable L-task set and acceptance
evidence. The Ordered Task Map carries the same tasks in founder-readable
order. This decision records why the levels and gates exist; it does not
duplicate their current task inventory or status.

### Recipient-link decision

- Use a subtle same-domain public path such as
  `https://mindfultext.com/care-team-fit/{opaque-token}`; the experience slug
  may change without changing the policy.
- Generate a random, unguessable token containing no PII or encoded metadata.
  Never put a name, email, organization, LinkedIn ID, campaign name, or role
  classification in the URL.
- Growth Ops privately maps the token to the person, organization and role
  hypothesis, LinkedIn campaign/message, message/hero hypothesis, landing-page
  variant, and creation/send dates.
- Growth Ops may redirect, pause, revoke, or expire the link without changing
  its public URL. Store only a protected lookup representation and never log
  the raw token or full personalized URL.
- A link open is weak evidence because previews and security scanners may open
  it. Later activity is attributed to the original invitation, but identity is
  only probable until a visitor knowingly identifies. Forwarding remains an
  explicit attribution caveat.

### L2 assessment and identity boundary

- Consider Formbricks for conditional questions, partial responses, and
  results, but require a documented Cloud/self-hosted/custom feasibility and
  data-boundary review before selecting or activating it.

**Later selection:** [[decisions/2026-08-14-w4a-l2b-custom-reflection-direction|DR-50]] selects a small custom, Formbricks-inspired fixed-choice reflection. The Formbricks consideration above is retained as historical context only; no provider is selected for the prototype.
- The reflection returns useful, non-scored fit guidance before asking for
  identity or a meeting. It must not diagnose a person or team, claim efficacy,
  or manufacture a readiness percentage.
- In the prototype, retain private invitation-level attribution through the opaque token without a visitor-facing attribution disclosure. Assessment answers do not automatically become named Growth Ops relationship data.
- When questions could reveal workforce strain, organizational shortcomings,
  or personal mindfulness information, offer an anonymous-answer path. Do not
  collect patient data or employee-identifying details.
- After results, a visitor may knowingly associate results, save them,
  experience a MindfulText demo, or request a conversation. Growth Ops links
  identity and response references or approved summaries only according to
  that stated choice and recorded consent.
- PostHog may receive page variant and funnel events, but never names, emails,
  organizations, raw tokens, free-text answers, assessment content, or inferred
  health information. LinkedIn Insight Tag remains optional aggregate reporting
  only and is not individual identification.

### Signal and authority boundary

Keep these states distinct: link opened; probable human engagement; assessment
started/partial/completed; results viewed; voluntary identification; qualified
buyer intent; and commercial commitment. A click, scroll, completion, demo, or
positive comment is learning evidence, not automatic buyer intent or a stage
change.

The limited manual LinkedIn beta remains separately approved. Evidence is
synthesized before Mark makes an advance, revise, or park decision.

L3 may resume only after Mark confirms a concrete buyer-intent signal such as
a pilot-design discussion, pricing/budget/procurement question, introduction to
an actual decision group, explicit request to evaluate a staff cohort, or an
equivalent organization-participating next step. L4 may resume only after a
commercial commitment—such as an accepted pilot, LOI, agreement, payment, or
other resource commitment—or repeated manual operating pain justifies scale.
W8 and W9 are technical/post-beta workstreams and do not prove traction.

## Consequences

- The near-term critical path is `W3 public-funnel slice → W4 L2 → W7 L2`.
- W5 n8n automation and W6 provider connections are deferred scale work, not
  blockers for a manual L2 beta.
- Agents prepare research, copy, contracts, implementation, tests, link batches,
  drafts, and evidence synthesis. Mark approves consequential copy/data/provider
  choices, authorizes public collection/deployment/outreach, sends the manual
  LinkedIn messages, and interprets buyer evidence.
- No separate W4 workstream plan is created. Detailed W4 task evidence remains
  in the Growth System Master Checklist, with the Ordered Task Map as its
  synchronized founder-facing view. Contracts, decisions, and handoffs do not
  duplicate the task inventory.
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]] defers recipient-facing disclosure and broader identity-association UX until significant revenue and a new dated decision; it does not remove private invitation-level attribution.

## Boundary

This decision authorizes documentation reconciliation only. It does not
authorize code changes, Formbricks or PostHog activation, credentials, database
migrations, public data collection, deployment, Production, LinkedIn outreach,
n8n/provider activation, or any external send. Each remains separately gated.

## Related records

- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API Contract Proposal]]
- [[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]]
