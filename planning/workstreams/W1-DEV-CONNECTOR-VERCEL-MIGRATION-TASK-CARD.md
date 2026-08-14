# W1 — dev connector GitHub/Vercel migration task card

> **Retained task-card context.** This card records a bounded historical scope;
> it is not current status or authorization to implement, deploy, configure, or
> cut over. Use the [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System
> Master Checklist]] for current state and gates.

## Purpose

Prepare a clean, reviewable migration of the existing `dev.mindfultext.com`
connector from Replit to a private GitHub repository and a separate Vercel
project under [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]]. The
connector remains the existing delivery component; this task must not change
its public behavior, delivery ownership, or live traffic.

## In scope

- Use the confirmed private GitHub/Vercel destination
  `dev-mindfultext-connector`; record a local checkout only if an approved
  implementation task needs one.
- Inventory the connector's supported routes, inputs, outputs, dependencies,
  and authentication categories without exposing values or private corpus
  content.
- Produce a minimal clean implementation/migration plan that explicitly omits
  auto-session, shared-session fallback, persisted session handling, and a
  general-purpose proxy.
- Specify preview parity checks, redacted observability, rollback, and the
  evidence required before a cutover request.

## Explicitly out of scope

- Changing the confirmed repository or Vercel project; copying source; entering secrets;
  deployment; DNS/domain changes; traffic cutover; or modifying
  `dev.mindfultext.com`, WordPress, Replit, n8n, or Growth Ops.
- Importing private corpus data, prototype databases, or credentials.
- Changing the connector's business responsibilities, adding Growth Ops
  integration, or introducing new product features.

## Acceptance evidence

- Confirmed `dev-mindfultext-connector` GitHub/Vercel destination and a
  documented source-of-truth boundary.
- A route/dependency/auth-category inventory with no secret values.
- A reviewable clean-source plan and explicit unsafe-feature exclusion list.
- A non-production parity, monitoring, rollback, and cutover checklist.
- A separate Mark authorization exists before any external configuration or
  live-system action.

## Dependencies and stop conditions

This work is governed by [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure
Plan]] and does not satisfy W1 by itself. Stop and return to Mark if the work
requires a credential, source archive outside the approved sanitized boundary,
an API behavior change, or any external-system mutation.

## Reconciled planning result — 2026-08-11

The local `dev-mindfultext-connector` path has no Git metadata, so this record
does not claim a verified repository checkout, branch, Vercel configuration,
or deployment. The following planning evidence comes only from the approved
sanitized historical connector archive:

- In scope for parity: finalized module read/create/update with ordered texts,
  optional allowlisted WordPress `mediaURLs`, scheduling/enrollment, minimal
  delivery-state reads, and a non-sensitive health endpoint.
- Required clean boundary: private versioned server-only API, fixed
  organization scope, allowlisted schemas, task-scoped service credential,
  required correlation and idempotency IDs, fail-closed mutation behavior, and
  redacted structured logs.
- Excluded: browser credentials; cookie/session forwarding or persistence;
  auto-login/shared-session fallback; generic legacy proxy; public/admin
  console; local database; imports; AI; webhooks; media hosting; and WordPress
  administration.
- Pre-cutover evidence: synthetic non-production parity and negative tests,
  browser/config review, credential-category rotation record, monitoring-alert
  test, approved rollback drill, named operator, and explicit Mark cutover
  authorization. Rollback is traffic reversal to the unchanged Replit
  reference without replaying mutations.

The historical evidence indicates cookie-session-based upstream access. Mark
must approve a documented scoped service-to-service credential/API, or a
separately designed non-persisted server-side authentication model, before any
implementation can start. The historical session pattern is not an acceptable
fallback.

## Related records

- [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]] — founder decision and boundary.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — status authority.
