# W2 — Growth Ops Operations Foundation

> **Retained workstream design and evidence context.** Embedded setup/status
> language is a snapshot, not current execution authority. Use the
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
> for the current W2 state and acceptance boundaries.

## Outcome

Establish `growth-ops` as the clean, private operational foundation for the MindfulText growth beta: authenticated owner access, scoped service boundaries, fresh databases, forward-only migrations, auditability, reliable job handling, and operational health checks. It is the foundation for W3, not the growth CRM or public-site implementation itself.

## Confirmed destination

| Item | Decision |
| --- | --- |
| Local repository | `/Users/mgzm-studio/AI-Studio/Projects/growth-ops` |
| Git repository name | `growth-ops` |
| Git remote | Private [`markmontalban/growth-ops`](https://github.com/markmontalban/growth-ops) |
| Application host | Vercel Pro [**Growth Ops**](https://vercel.com/mindful-text/growth-ops) project |
| Database | Neon Launch `growth-ops-prod` plus `growth-ops-dev` development/test environment |
| Workflow executor | Existing DigitalOcean n8n through scoped APIs |
| Source authority | GitHub is canonical; Vercel deploys from Git |
| Application role | Private owner UI, operations API, and PostgreSQL-backed audit/outbox state |
| Owner application auth | Google-only, restricted to Mark's account ([[decisions/2026-08-10-growth-ops-owner-auth|DR-41]]) |

Do not reuse CRM-Sales, EiyahMind, the connector prototype, or their data as the application foundation.

## Dependencies and boundaries

- W1 security work continues independently; its remaining rotations and live scans are launch gates, not a reason to reuse a prototype.
- W3 remains blocked until this foundation is tested and the first public-site interface contract is frozen.
- `dev.mindfultext.com`, WordPress, n8n, PostHog, provider systems, the Mac Studio, and both prototypes are out of scope for W2 changes.
- No legacy corpus, content management, public admin, automatic outreach, provider integration, AI/chat/vector feature, or production-data import is included.

## Confirmed setup and next boundary

The private GitHub remote, Vercel Pro project, and distinct Neon Launch
environments are connected and confirmed. Google-only owner login restricted to
Mark's account is also selected. Do not load real records, configure provider
credentials, or expose a public custom domain yet. Confirm only Mark and
explicitly approved collaborators can administer GitHub, Vercel, and Neon, and
configure a conservative Vercel spend limit before production deployment.

The next task may initialize the local repository from that empty remote and
add only the clean foundation described below.

## Foundation scope

1. Establish a documented application layout for owner UI, Vercel API routes, migrations, tests, and operational runbooks.
2. Add Google-only single-owner application authentication restricted to Mark's account and a separate service-auth mechanism for the public site, n8n, and future local-agent bridge; store only hashed, rotatable credentials and enforce scopes server-side.
3. Provision and migrate the fresh Neon production and development/test PostgreSQL environments using reviewed, committed, forward-only migrations—never production `db:push`.
4. Implement platform controls before growth entities: request IDs, redacted structured logging, consistent errors, audit records, idempotency receipts, and durable outbox/job state. n8n, not a resident app worker, executes scheduled, retried, and provider-facing work through scoped APIs.
5. Add automated tests for owner/service authorization, migration behavior, audit generation, idempotency, job retry, and health/readiness failure modes.

## Verification and gate

### Current preview evidence — 2026-08-11

The reviewed foundation commits are pushed only on `w2-preview` at
`162a76b340b117f4d59a55ccfcdc580b1b70a202`; `main` is unchanged remotely.
Reported local checks are typecheck, 19 tests, and production build passing.
Vercel received the branch event but marked the Preview deployment **blocked**;
there is no Preview URL. No Google OAuth flow, Vercel protection review,
development-Neon migration, or live matrix case has been accepted. Inspect the
blocked deployment's Vercel details before entering Preview-only configuration;
never infer production readiness from a Vercel deployment slot.

W2 is complete only when automated evidence shows:

- Mark can authenticate to the private owner surface.
- Each scoped service can perform only its permitted action; denied actions return safe 401/403 responses.
- Clean migrations apply to development/test and production-equivalent environments, and rollback/recovery guidance is documented.
- Auditable writes create request-correlated audit records and idempotency receipts.
- Jobs retry within bounds, record final outcome, and isolate failures.
- Health/readiness and redacted logging behave safely when a dependency is unavailable.

## Deployment and rollback

- Use Vercel preview/development validation before the production deployment.
- Take and test a Neon backup/restore procedure before accepting real growth records.
- Release only reviewed migration bundles; rollback application code independently from forward-only data migrations.
- On failure, disable the affected worker or service credential, preserve audit evidence, and restore from a tested backup only under an approved incident procedure.

## Handoff to W3

After W2 passes its gate, freeze the first narrow API contract with the public site before implementing growth-domain entities, recipient links, attribution, or call requests.

## Related records

- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — global status and W2 gate.
- [[planning/ai-handoff/MINDFULTEXT-GROWTH-SYSTEM-HANDOFF|Growth System AI Bootstrap]] — stable architecture and operating boundaries only.
- [[planning/workstreams/W2-OPERATIONS-FOUNDATION-TASK-CARD|W2 foundation task card]] — bounded next implementation task.
- [[planning/workstreams/W2-OPERATIONS-FOUNDATION-TEST-MATRIX|W2 test matrix]] — independent acceptance and abuse-case evidence requirements.
- [[planning/workstreams/W2-INTEGRATION-REVIEW-2026-08-10|W2 integration review]] — local implementation evidence, reviewed blockers, and next sequence.
