# MindfulText Epoch 1 — Decision Record — 2026-08-10 — Growth Ops hosting

**decision_id:** [[decisions/DECISION-REGISTER|DR-40]]

## DR-40 — Growth Ops hosting and workflow execution

Mark selects **Vercel Pro** for the private Growth Ops web/API application,
**Neon Launch** for its PostgreSQL production and development/test data, and
the existing DigitalOcean **n8n** instance as the workflow executor.

The local Git repository remains
`/Users/mgzm-studio/AI-Studio/Projects/growth-ops`; the private GitHub
repository `growth-ops` is the canonical source. Vercel deploys from that
repository. n8n calls Growth Ops only through scoped APIs and does not access
Neon directly.

## Consequences

- Replace the prior Replit Reserved-VM, Replit Auth, Replit PostgreSQL, and
  Replit Secrets assumptions for Growth Ops only.
- Keep the existing public-site Replit Autoscale decision unchanged.
- Growth Ops retains the durable PostgreSQL audit, idempotency, and outbox/job
  state. n8n performs scheduled, retried, and provider-facing workflow work.
- Use Vercel preview deployments and a separate Neon development/test
  environment before production deployment.
- Implement the Google-only, Mark-restricted single-owner application
  authentication selected in [[decisions/2026-08-10-growth-ops-owner-auth|DR-41]];
  Vercel project access is not a substitute for owner-app authorization.
- Do not add a Vercel Queue or a resident worker in the first beta unless
  evidence shows n8n cannot meet a named reliability requirement.

## Boundary

This decision changes hosting and execution responsibility only. It does not
authorize code scaffolding, secret entry, external provider configuration,
production deployment, prototype mutation, data import, or automatic outreach.
