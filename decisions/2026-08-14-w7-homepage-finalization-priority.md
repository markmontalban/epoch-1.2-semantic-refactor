# MindfulText Epoch 1 — Decision Record — 2026-08-14 — W7 homepage finalization priority

Last updated: 2026-08-16 11:10:38 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-53]]

## DR-53 — W7-L1a existing homepage finalization

Mark directs MindfulText to finalize the existing homepage immediately before
the limited manual beta: after W7-L0a attribution readiness and before W7-L2a
LinkedIn-batch preparation. The homepage is already designed; this work is
limited to final copy and design tweaks in `mindfultext-web`.

### Scope

- Reuse the existing site's visual design and public-site repository.
- Finalize the approved homepage copy, CTA, and small visual refinements only
  after a bounded founder final-content review.
- Keep the homepage distinct from the opaque recipient path: a semantic
  word-only path such as `/care-team-fit/{opaque-word-handle}` remains the
  shared LinkedIn-recipient route, not a separately designed page per lead.
- Complete authorized Preview acceptance before the separately approved
  collection, deployment, and manual-outreach work of W7-L2a.

### Boundary

This records order and scope only. It does not select a new general-market
product strategy, authorize code changes, credentials, analytics/provider
activation, public data collection, deployment, Production, LinkedIn outreach,
or external sends. Those actions remain subject to their separate W4/W7
implementation and launch approvals.

### Clarification — 2026-08-16

The earlier `opaque-token` shorthand in this record referred only to the
private invitation lookup. [[decisions/2026-08-14-word-only-opaque-route-handles|DR-54]] controls the visitor-visible URL syntax: a controlled semantic entry
slug plus a cryptographically random word-only opaque handle. This clarification
changes no W7-L1a scope, ordering, or approval boundary.

## Consequences

- `W7-L1a` is the homepage-finalization task between accepted W7-L0a and W7-L2a.
- The existing design may be reused for the homepage and recipient experience,
  but their copy and route behavior remain independently governed.
- W4b-L1a through W4b-L2d remain the current build sequence and are not
  displaced by the later homepage-finalization task.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-w7-unipile-linkedin-attribution|DR-52]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
