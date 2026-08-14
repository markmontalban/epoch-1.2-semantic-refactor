# MindfulText Epoch 1 — Decision Record — 2026-08-10 — Growth Ops owner authentication

**decision_id:** [[decisions/DECISION-REGISTER|DR-41]]

## DR-41 — Growth Ops owner authentication

Mark selects **Google-only application sign-in**, restricted to Mark's own
Google account, for the private Growth Ops owner interface. This is application
authorization; Vercel Team membership remains deployment administration only.

## Consequences

- W2 must implement the Google identity allowlist server-side and fail closed
  for every other identity.
- The owner interface remains single-user for the MVP. Adding a collaborator,
  additional identity provider, or multi-user role model requires a later
  decision.
- Site, n8n, and local-agent access remains separate non-human service
  authentication with rotatable, task-scoped credentials; Google sign-in does
  not grant those scopes.

## Boundary

This decision authorizes only the W2 authentication design. It does not
authorize entering credentials, production deployment, importing data,
configuring external providers, or changing a prototype or live system.

## Related records

- [[decisions/2026-08-10-growth-ops-hosting|DR-40]] — hosting, database, and workflow execution.
- [[planning/workstreams/W2-OPERATIONS-FOUNDATION|W2 Operations Foundation]] — implementation scope and verification gate.
