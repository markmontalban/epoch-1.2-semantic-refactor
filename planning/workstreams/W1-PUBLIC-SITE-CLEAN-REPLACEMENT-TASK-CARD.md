# W1 Public Site — Clean Replacement Task Card

> **Retained task-card evidence.** This preserves the authorized W1 shell scope
> and acceptance basis; it does not describe current W4 work or authorize new
> implementation/deployment. Current status lives in the
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]].

## Purpose

Create an isolated, stateless Next.js public-site shell in the private GitHub
repository `mindfultext-web`, connected to Vercel, under
[[decisions/2026-08-11-public-site-clean-replacement|DR-42]] and
[[decisions/2026-08-11-public-site-vercel-hosting|DR-44]]. This closes the
unsafe application-foundation choice; it does not implement W3/W4 funnel
features or replace the live deployment.

## Inputs

- Sanitized frontend archive, used only to review visual components.
- [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]].
- [[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|Public-site readiness evidence]].
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]].
- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|Non-frozen W3 API proposal]], used only to preserve future boundaries.

## Authorized work

1. Create a clean Next.js 16/React 19 shell in a non-production branch or
   workspace of `mindfultext-web`.
2. Use code/config-managed placeholder content clearly marked for later founder
   review. Implement only the minimum root presentation needed to prove the
   shell builds and renders.
3. Port only reviewed visual primitives that contain no database, storage,
   admin, analytics, provider, credential, or legacy-system coupling.
4. Ensure `/admin`, `/api/admin/content`, `/api/admin/upload`, and
   `/api/storage/*` do not exist and return 404/405 as applicable.
5. Ensure the application starts, typechecks, lints, tests, and builds without
   `DATABASE_URL`, PostgreSQL, runtime DDL, Replit Object Storage, or secret
   values.
6. Document retained visual pieces, rejected source pieces, runtime
   dependencies, environment-variable names, and verification commands.

## Explicit exclusions

- No legacy Replit mutation, Vercel deployment, domain, production secret, or database.
- No Growth Ops network call or invented W3 contract.
- No recipient route, attribution, analytics/PostHog, call-request submission,
  CRM record, scheduling, provider integration, content admin, upload, audio,
  practices, legacy catalog, AI, or automatic outreach.
- No final MindfulText claims, founder copy, CCBHC value proposition, visual
  approval, SEO launch configuration, or indexing decision.
- No private corpus or connector source.

## Completion evidence

- Clean dependency and route inventory.
- Negative-route tests for all prohibited admin/write/upload/storage paths.
- Startup and production build with no database/storage configuration.
- Typecheck, lint, tests, dependency audit, and `git diff --check` results.
- Screenshot or local preview of the neutral shell, explicitly not deployed.
- Exact commit and a handoff listing every remaining W3/W4 dependency.

## Reconciled result — 2026-08-11

The clean shell is on verified Git branch `w1-clean-shell` at commit
`7e5ccb93f0447a482d34b8cc529989c705104404`; remote `main` remains unchanged.
The repository contains the required prohibited-path inventory and
`tests/route-negative.test.mjs`. The agent reported passing typecheck, ESLint,
two boundary tests, production build, the production-server route-negative
test, dependency audit, and `git diff --check`.

Vercel accepted the branch but its deployment failed, and no Preview URL was
issued. Therefore the above is source-level evidence only: it does not prove a
Vercel build, browser bundle, Preview route behavior, or any W4 acceptance.
The next bounded action is to inspect the authenticated Vercel build log and
correct only the non-secret Preview build blocker under a separately approved
Vercel task.

## Stop conditions

Stop before any action that needs credentials, touches the legacy Replit app,
deploys publicly, selects final copy/design, or implements an unfrozen API.

## Related records

- [[decisions/2026-08-11-public-site-clean-replacement|DR-42]]
- [[decisions/2026-08-11-public-site-vercel-hosting|DR-44]]
- [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]]
- [[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|Public-site readiness evidence]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — status authority and remaining W4 gate.
