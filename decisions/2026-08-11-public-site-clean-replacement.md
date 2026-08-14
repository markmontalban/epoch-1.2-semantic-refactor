# MindfulText Epoch 1 — Decision Record — 2026-08-11 — Public-site clean replacement

**decision_id:** [[decisions/DECISION-REGISTER|DR-42]]

## DR-42 — Clean public-site replacement

Mark selects a **clean Next.js replacement shell** for the public MindfulText
beta. The reviewed Cortex application will not become the beta
foundation through in-place remediation. An isolated implementation may port
only specifically reviewed visual components or design ideas that do not carry
forward its admin, database, storage, content-state, placeholder-product, or
deployment assumptions.

Hosting is amended by [[decisions/2026-08-11-public-site-vercel-hosting|DR-44]]:
the clean shell is hosted on Vercel from `mindfultext-web`. Growth Ops remains
the only growth-data source of truth and will later provide a frozen, narrow
API.

## Consequences

- Create a stateless public shell with code/config-managed month-one content.
- Do not copy public admin, content-write, upload, object-serving, PostgreSQL,
  runtime DDL, or Replit Object Storage behavior.
- Treat existing visual code as a review source, not as an application base.
- Keep W3 network integration, final content, analytics, public deployment,
  and beta-domain work behind their existing gates.

## Boundary

This decision authorizes a bounded isolated replacement-shell task. It does
not authorize mutation of the legacy Replit site, a deployment, a custom domain,
credentials, Growth Ops calls, data collection, final founder copy/visual
approval, or any deferred feature.

## Related records

- [[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|Public-site readiness evidence]] — why the reviewed source is no-go.
- [[planning/workstreams/W1-PUBLIC-SITE-CLEAN-REPLACEMENT-TASK-CARD|Clean replacement task card]] — bounded implementation scope.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — current status and gates.
