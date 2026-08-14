# W2 Foundation — Bounded Implementation Task Card

> **Retained task-card context.** This is the historical bounded implementation
> scope, not current status or fresh authorization. Current W2 evidence and
> acceptance live in the [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth
> System Master Checklist]].

## Purpose

Prepare the clean `growth-ops` repository for the private Growth Ops foundation after Mark has connected the private GitHub repository, Vercel Pro project, and Neon Launch environments described in [[planning/workstreams/W2-OPERATIONS-FOUNDATION|the W2 workstream plan]].

## Preconditions

- Local destination exists: `/Users/mgzm-studio/AI-Studio/Projects/growth-ops`.
- Mark has connected the private `growth-ops` GitHub remote, the private **Growth Ops** Vercel Pro project, and Neon Launch `growth-ops-prod` and `growth-ops-dev` environments.
- [[decisions/2026-08-10-growth-ops-owner-auth|DR-41]] selects Google-only owner application sign-in, restricted to Mark's account.
- No credentials, prototype source, private corpus, or production data are supplied to the task.

## Authorized work

1. Initialize the clean repository from its intended remote and document the application layout and local-development instructions.
2. Add the smallest foundation needed for authenticated owner access, scoped service authentication, separate configuration by environment, forward-only migration tooling, audit/idempotency/job primitives, health/readiness, and redacted structured logging.
3. Add automated tests for authorization, migration application, audit and idempotency behavior, job retry/outcome, and health/readiness failure.
4. Configure only non-secret GitHub/Vercel/Neon settings needed to run the clean application; list every required secret by name and purpose without adding values.
5. Implement durable outbox/job state and the narrow n8n handoff; do not add a resident worker or Vercel Queue without a separately approved need.
6. Produce verification output and a concise handoff describing remaining human setup for Neon, Vercel environment variables, backups, and deployment.

## Explicit exclusions

- No prototype copy, merge, data import, credential transfer, or secret scan that prints values.
- No changes to CRM-Sales, EiyahMind, public frontend, connector prototype, `dev.mindfultext.com`, WordPress, n8n, PostHog, or Mac Studio.
- No growth-domain schema, public recipient route, call-request flow, provider adapter, email/LinkedIn sending, scheduler, content/admin system, AI chat, vector store, or paid-model fallback.
- No production deployment or production database migration without a separate approved task and backup/rollback review.

## Completion evidence

- Repository contains only reviewed clean-foundation code and documentation.
- Automated test results meet the W2 gate in [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|the Master Checklist]].
- Required environment variables are documented by name only.
- GitHub/Vercel connection, Neon environment provisioning state, n8n handoff, and remaining manual steps are recorded without credentials.
- A reviewer can identify the exact commit and reproduce checks locally.

## Stop conditions

Stop and ask Mark before any action requiring credentials, paid resource provisioning, external collaborator access, a public URL/domain, data import, or a change to another system.

## Related records

- [[planning/workstreams/W2-OPERATIONS-FOUNDATION|W2 Growth Ops Operations Foundation]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
