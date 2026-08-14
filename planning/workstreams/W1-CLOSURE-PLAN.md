# W1 — Security Closure Plan

> **Retained planning evidence.** This records the W1 closure approach at the
> time it was written. Embedded status is historical; current W1 status and
> acceptance live only in the [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth
> System Master Checklist]].

## Role and status

This is the read-only closure plan for W1 source and security preparation. It
does not change global status: W1 remains **in progress** until the evidence
below is recorded in the [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]].

## Closure objective

Before beta launch, no public or agent-facing path can obtain legacy
credentials, write site content, upload files anonymously, or use a
general-purpose legacy proxy.

The connector's selected GitHub/Vercel destination under
[[decisions/2026-08-11-dev-connector-vercel-github|DR-43]] does not weaken this
objective: the old Replit connector is migration evidence, not deployable
source, and the clean replacement must exclude its unsafe session/proxy paths.

## Prioritized findings

| Severity | Surface | Evidence path | Safe remediation |
| --- | --- | --- | --- |
| Critical | Public content write | `planning/replit exports/sanitized/MindfulText-Front-End-source-sanitized.zip!/app/api/admin/content/route.ts` exposes unauthenticated content reads and writes. | Delete the route and use reviewed code/config for month-one page content. Do not replace it with public authentication. |
| Critical | Anonymous upload | `...!/app/api/admin/upload/route.ts`; UI caller `...!/app/admin/admin-editor.tsx`. | Delete the handler, its UI, storage route/helper, object-storage configuration, and all references. Do not merely hide the control. |
| High | Public admin | `...!/app/admin/page.tsx` and `...!/app/admin/admin-editor.tsx`. | Remove the complete `app/admin/` tree; prove `/admin` returns 404 or 410 in the production build. |
| High | Independent public-site content database | `...!/lib/content.ts`, `lib/content-schema.ts`, `lib/content-types.ts`, `lib/db.ts`, and frontend `package.json`. | Remove the independent database/content authority and unused dependencies. The frontend may make only scoped server-side Growth Ops calls. |
| Critical | Legacy credential/session proxy | `planning/replit exports/sanitized/devmindfultextconnector-source-sanitized.zip!/server/proxy.ts`, `server/session.ts`, `server/mtClient.ts`, and `server/routes.ts`. | Do not deploy, port, or expose auto-session, shared-session fallback, persisted sessions, or a general-purpose legacy proxy. |
| High | Credential exposure in original ZIP/Git history | [[planning/replit exports/sanitized/README|Sanitized Export README]] states that sanitization does not revoke credentials that may have existed in the source archive or history. | Use an authorized history inventory; rotate every exposed or uncertain credential before launch. Retain only redacted category-level evidence. |
| Medium | Dependency/security posture unproven | W1 checklist requires retained Replit security-scan and dependency-audit evidence for both apps. | Run, retain, and triage current scans; remediate high/critical findings or mark the prototype non-deployed. |

## Public frontend removal plan

1. Delete `app/admin/page.tsx` and `app/admin/admin-editor.tsx`.
2. Delete `app/api/admin/content/route.ts` and `app/api/admin/upload/route.ts`.
3. Delete `app/api/storage/[...path]/route.ts` and `lib/storage.ts`; verify no
   remaining `api/storage` or upload-helper references.
4. Replace public-page use of runtime content storage with code/config, then
   remove `lib/content.ts`, `lib/content-schema.ts`, `lib/content-types.ts`,
   and `lib/db.ts` when unused.
5. Remove unused object-storage/database dependencies and regenerate the
   lockfile through the approved implementation workflow.
6. Verify navigation, redirects, middleware, rewrites, sitemap, and assets do
   not reference `/admin`, `/api/admin`, or `/api/storage`.
7. Ensure all removed paths return 404/410. Do not redirect to an admin app or
   retain a compatibility proxy.
8. Permit only approved public pages, opaque `/r/{token}` handling, and narrow
   server-side Growth Ops calls for attribution and call requests.

## Credential rotation checklist

Rotate and verify the following categories; do not record values in this note
or the W1 evidence bundle.

- Replit deployment/runtime environment variables, workspace secrets, and Object Storage access.
- GitHub tokens, deploy keys, apps, and automation credentials.
- Vercel project/deployment/environment credentials.
- PostgreSQL/Neon connection credentials.
- `dev.mindfultext.com` operator accounts, passwords, sessions, API credentials, and legacy integration keys.
- WordPress administrator, application-password, media, and API credentials.
- n8n owner access, encryption key, webhook credentials, and workflow/service credentials.
- Unipile account/API/webhook credentials.
- Google OAuth, Gmail, Calendar, and Workspace integration credentials.
- Stripe secret, restricted, webhook-signing, and publishable-key categories.
- PostHog project/API credentials and model-broker/local-agent credentials.
- DNS, email-delivery, monitoring, and other third-party credentials identified by the authorized inventory.

For each category: rotate or revoke, invalidate existing sessions where supported, update only the designated secret store, run a scoped smoke test, and retain category, owner, rotation date, and result only.

## Required evidence

| Check | W1-complete evidence |
| --- | --- |
| Route-negative test | Production build returns 404/410 for `/admin`, `/api/admin/content`, `/api/admin/upload`, and `/api/storage/<test-path>` for applicable methods. |
| Deployable-source scan | Redacted output shows no remaining admin, upload, storage-write, content-write, or legacy-proxy registration/reference. |
| Public authorization test | Anonymous requests cannot write content, upload, access provider/admin work, retrieve credentials, or reach legacy APIs. |
| Build verification | Clean production build, typecheck, and lint for the remediated frontend. |
| Dependency audit | Dated frontend and connector lockfile audit, including tool/version, findings, disposition, owner, and due date. |
| Replit security scan | Dated reports for both historical Replit apps; high/critical findings remediated or the prototype explicitly non-deployed. |
| Connector migration readiness | Confirmed `dev-mindfultext-connector` GitHub/Vercel destination; minimal-contract inventory; clean-source/parity/rollback plan; no preview or live cutover without separate authorization. |
| ZIP/Git history inventory | Authorized scanner report that identifies findings only by category/location class, plus rotation record. |
| Deployment/config review | Evidence that browser bundles contain no server credentials and production frontend has no DB/content-write/object-storage/legacy-proxy configuration. |
| Rotation record | Redacted inventory with category, owner, completion date, session-invalidation status, and scoped smoke-test result. |

## Safe remediation order

1. Freeze deployment of the two prototypes and prohibit connector deployment.
2. Remove public admin, write, upload, storage, and independent-content state from the frontend implementation.
3. Run route-negative, authorization, build, type, and lint checks.
4. Perform authorized ZIP/Git-history inventory; rotate all exposed or uncertain credential categories.
5. Run and retain Replit security and dependency scans; remediate or formally constrain findings.
6. Prepare the clean connector GitHub/Vercel migration plan; do not configure or
   cut over any environment without a separate authorization.
7. Review deployment configuration and record all redacted evidence in the master checklist before changing W1 to done.

## Facts, assumptions, and Mark decisions

### Facts

- The sanitized frontend retains unauthenticated admin, content-write, upload, storage, and independent content-database source.
- The sanitized connector retains auto-session, shared-session fallback, persisted session-cookie handling, and a general-purpose legacy proxy.
- Sanitized exports had no candidate key/token signature, but excluded Git history and environment material cannot establish historical credential safety.
- The W1 gate requires removal, credential inventory/rotation, and Replit scan evidence.
- DR-43 selects private GitHub and Vercel for the connector's future source and
  hosting, while leaving its live behavior unchanged until a later cutover.

### Assumptions to verify

- The sanitized frontend corresponds to the implementation/deployment candidate.
- Original ZIP and Git history may contain credentials; uncertain credentials must be treated as exposed.
- Current Replit scans can produce retained, redacted evidence for both apps.

### Decisions for Mark

- Authorize the credential-history inventory and rotation work in each in-scope system.
- Choose remediation in the existing public frontend implementation or a clean replacement implementation.
- Name the custodian and storage location for redacted W1 evidence.
- Confirm no beta exception for legacy proxy, public content admin, uploads, or independent frontend content storage.
- Approve any connector preview configuration or live cutover after its
  clean-source, parity, and rollback evidence is reviewed.

## Related records

- [[planning/workstreams/W1-SOURCE-SECURITY-PREPARATION|W1 Source and Security Preparation]] — canonical W1 implementation plan.
- [[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|Public-site readiness evidence]] — 2026-08-11 Replit archive findings, limits, and no-go conclusion.
- [[planning/workstreams/W1-DEV-CONNECTOR-VERCEL-MIGRATION-TASK-CARD|Connector Vercel/GitHub migration task card]] — bounded migration preparation.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — global status and W1 completion evidence authority.
- [[planning/CRM-GROWTH-BACKEND-AUDIT|CRM Growth Backend Audit]] — historical prototype findings.
- [[planning/ai-handoff/MINDFULTEXT-GROWTH-SYSTEM-HANDOFF|Growth System AI Bootstrap]] — stable architecture and deployment boundaries only.
- [[planning/replit exports/sanitized/README|Sanitized Export README]] — archive scope and sanitization limits.
