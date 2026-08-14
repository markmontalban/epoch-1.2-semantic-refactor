# W1 Public-Site Readiness Evidence — 2026-08-11

> **Retained evidence, not current status.** Interpret every claim at its named
> source/local or Preview/browser tier and use the
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
> for the current W1/W4 state.

## Evidence role

This note retains the decision-relevant results from the Replit public-site
readiness package supplied on 2026-08-11. The package contains a consolidated
summary and a detailed source review. Both reference the same sanitized archive
and Replit commit `de7154d`, so they are one review package—not two independent
security validations.

The source reports remain read-only evidence. They do not replace the
[[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]] or authorize changes
to the live Replit site.

## Source package

| Source | SHA-256 | Role |
| --- | --- | --- |
| `/Users/mgzm-studio/Downloads/mindfultext-readiness-summary.md` | `52cea57103ff403343e8161ad2d839fb67c8709fff374eb456bcb5ae3adbb1d5` | Founder-readable consolidated summary |
| `/Users/mgzm-studio/Downloads/mindfultext-public-site-readiness-review.md` | `f7b3e98f796c49852278b9c54103991eb8fc29fdab55847a1114d7a3f1caad0c` | Detailed route, dependency, data-flow, contract-mock, and test review |

## Confirmed archive findings

- The reviewed source is a customized, database-backed Cortex landing-page
  template, not a stateless MindfulText beta implementation.
- Unauthenticated surfaces include `/admin`, read/write
  `/api/admin/content`, upload `/api/admin/upload`, and object retrieval through
  `/api/storage/[...path]`.
- The public runtime uses `DATABASE_URL`, raw PostgreSQL access, runtime table
  creation, and Replit Object Storage. This violates the locked public-site
  boundary.
- Branding, copy, canonical URL, social metadata, SEO terms, and product
  positioning remain Cortex/AI-photo-video placeholders.
- The checked Replit workflow runs the development server on port 5000; it is
  not production Autoscale, smoke-test, health, or rollback evidence.
- No legacy proxy, connector/session behavior, Growth Ops client, n8n client,
  PostHog/GA integration, provider integration, WordPress route, or
  `dev.mindfultext.com` route was observed in the supplied archive. This is an
  archive-only absence, not history or live-deployment proof.

## Current conclusion

**No-go for public beta deployment.** Before the site can become a beta
candidate, the implementation repository must remove the public admin,
content-write, upload, object-gateway, independent database/content state, and
unneeded storage/database privileges. It must also replace placeholder
identity/SEO and retain production-like build, security, accessibility,
performance, privacy, Autoscale, and rollback evidence.

The detailed report's W3 request/response shapes are useful mocks only. The
canonical non-frozen interface proposal remains
[[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|the W3 API proposal]],
which must be reconciled with corrected W2 behavior before approval.

## Limits

- No dependency install, vulnerability scan, SAST scan, network test, live
  deployment inspection, or production smoke test was run.
- The package does not establish repository-history credential safety,
  deployed route state, environment values, database contents, IAM, DNS,
  external headers, or provider behavior.
- Replit commit `de7154d` records imported review materials; it is not evidence
  that the unsafe application source was remediated.

## Decision filter

The review lists several future choices, but it does not reopen locked
decisions: Growth Ops owns the W3 API, the public site uses server-side scoped
calls, month-one content is code/config managed, Replit Autoscale remains the
selected public host, and existing delivery systems remain unchanged.

The genuine current founder choice is whether to remediate the existing public
frontend implementation in place or use a clean replacement while retaining
only approved visual concepts. Beta domain/indexing, final copy/visual system,
retention/consent, and rollout ownership remain later checkpoints.

## Related records

- [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]] — remediation and evidence gate.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — execution-status authority.
- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API proposal]] — canonical non-frozen interface proposal.
- [[planning/ai-handoff/MINDFULTEXT-GROWTH-SYSTEM-HANDOFF|Growth System AI Bootstrap]] — stable architecture and boundaries only.
