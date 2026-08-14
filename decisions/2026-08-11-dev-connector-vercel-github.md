# MindfulText Epoch 1 — Decision Record — 2026-08-11 — dev connector source and hosting

**decision_id:** [[decisions/DECISION-REGISTER|DR-43]]

## DR-43 — Move the `dev.mindfultext.com` connector to private GitHub and Vercel

Mark selects a migration of the existing `dev.mindfultext.com` connector from
its current Replit placement to the private GitHub repository
`dev-mindfultext-connector` and its connected separate Vercel project. GitHub
is the connector's canonical source-control location and Vercel its intended
deployment platform.

This is a hosting and source-control decision only. It does **not** change what
the connector or `dev.mindfultext.com` owns: finalized SMS text, scheduling,
messaging-system connectivity, and references to WordPress audio URLs. It also
does not authorize copying the unsafe exported prototype as-is, changing the
public API, connecting Growth Ops, entering credentials, deploying, changing
DNS, or cutting live traffic over.

## Consequences

- Build a clean, reviewed connector migration path rather than treating Replit
  as its continuing deployment destination.
- The private GitHub/Vercel destination is confirmed as
  `dev-mindfultext-connector`; local checkout location and Vercel configuration
  remain implementation details to be recorded without secrets.
- Preserve behavior/API parity during migration unless a later explicit product
  decision changes it.
- Retain the Replit deployment and source only as the current/historical
  migration reference until preview evidence and an approved rollback-capable
  cutover are complete.
- Remove or redesign unsafe auto-session, shared-session fallback, persisted
  session, and general-purpose proxy behavior. It must never be deployed to
  Vercel.

## Required gate before any live cutover

1. Keep secrets out of the confirmed private GitHub/Vercel destination.
2. Complete an authorized credential-history inventory and rotation plan.
3. Define the minimal supported connector contract, authentication model,
   preview configuration, parity checks, monitoring, rollback, and owner.
4. Prove the clean deployment in non-production with redacted evidence.
5. Obtain a separate Mark authorization for credentials, deployment, DNS, or
   traffic cutover.

## Boundary

This record updates the intended architecture and authorizes planning of a
bounded migration task. It does not itself authorize any change to Replit,
GitHub, Vercel, `dev.mindfultext.com`, WordPress, DNS, production credentials,
or live traffic.

## Related records

- [[planning/workstreams/W1-DEV-CONNECTOR-VERCEL-MIGRATION-TASK-CARD|Connector Vercel/GitHub migration task card]] — bounded preparation scope.
- [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]] — source-security requirements that remain binding.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — current status and gates.
- [[decisions/2026-08-10-growth-ops-hosting|DR-40]] — separate Growth Ops hosting decision.
