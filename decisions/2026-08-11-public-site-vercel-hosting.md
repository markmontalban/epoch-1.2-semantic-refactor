# MindfulText Epoch 1 — Decision Record — 2026-08-11 — Public-site Vercel hosting

**decision_id:** [[decisions/DECISION-REGISTER|DR-44]]

## DR-44 — Host the clean public site on Vercel from `mindfultext-web`

Mark changes the public-site hosting portion of
[[decisions/2026-08-11-public-site-clean-replacement|DR-42]]: the clean
MindfulText public-site shell will be deployed from the private GitHub
repository `mindfultext-web` through its connected **Vercel** project, rather
than through Replit Autoscale.

[[decisions/2026-08-11-public-site-clean-replacement|DR-42]]'s clean-shell
decision remains in force. The reviewed Replit/Cortex
source remains visual-reference evidence only; it must not become the public
application foundation.

## Consequences

- GitHub `mindfultext-web` is the canonical public-site source; Vercel deploys
  it from Git.
- Use Vercel Preview for non-production review and Vercel Production only after
  the existing W1/W3/W4 acceptance gates.
- Do not carry Replit database, object storage, public admin, upload, runtime
  DDL, content-state, or secret assumptions into `mindfultext-web`.
- Retain the current Replit application only as historical/review evidence
  until a later separately approved retirement decision.

## Boundary

This decision changes public-site source/deployment placement only. It does not
authorize a deployment, custom domain, DNS change, credentials, analytics,
Growth Ops integration, final copy/design approval, data collection, or any
live-system mutation.

## Related records

- [[decisions/2026-08-11-public-site-clean-replacement|DR-42]] — clean-shell and security scope retained.
- [[planning/workstreams/W1-PUBLIC-SITE-CLEAN-REPLACEMENT-TASK-CARD|Clean replacement task card]] — bounded implementation work.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — current gates.
