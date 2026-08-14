# W1 — Source-security evidence checklist — 2026-08-11

> **Retained dated procedure/evidence.** Its open items and blocker language
> are historical snapshots, not current Growth status. Use the
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
> before assigning work.

## Purpose and evidence boundary

This is the dated, redacted procedure for closing the remaining W1
source-security evidence. It is a planning and evidence record, not proof of
current live state and not authorization to access credential values, original
archives, Git history, Replit, GitHub, Vercel, DNS, or any other live system.

The 2026-08-06 sanitized exports prove only the contents of the derived
archives. The 2026-08-11 public-site review proves unsafe historical source
surfaces and a public-beta no-go. The n8n report records a read-only audit and
an inactive inline-secret risk. Neither proves present deployment,
configuration, credential, repository-history, or rotation state.

W1 remains in progress under the
[[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]].

## Evidence checklist

### A. Historical Replit frontend and connector

| Needed evidence | Exact scope | Acceptable retained record | Status from retained evidence |
| --- | --- | --- | --- |
| Sanitized-export provenance | Both 2026-08-06 derived archives | Archive SHA-256, sorted manifest, excluded-class check, and sanitized-artifact secret-pattern result | Recorded; does **not** cover history or environments. |
| Historical unsafe-surface finding | Frontend Replit source at reviewed commit | Route/source finding with archive/commit identifier and remediation target | Recorded: public admin, content write, upload, storage gateway, and independent DB/content state. |
| Historical connector unsafe-feature finding | Connector sanitized source | File/class finding for auto-session, shared-session fallback, persisted session, and generic proxy | Recorded; never deploy these behaviors. |
| Credential-history inventory | Original ZIP(s), all reachable Git refs, Replit secrets/config history, and any linked deployment configuration | Authorized scanner's **category/location-class/count-only** summary; no values, hashes, filenames that reveal values, raw scanner output, or copied history | Not performed; Mark authorization required. |
| Replit security scan | Each historical implementation app at a recorded immutable revision | Dated tool/version/scope/result summary and high/critical disposition; attach only redacted aggregate output | Not performed. |
| Dependency audit | Each historical implementation app's committed lockfile at a recorded immutable revision | Dated package-manager/tool version, lockfile hash, findings by package/advisory/severity, disposition/owner/due date | Not performed. |
| Prototype constraint | Both Replit applications | Written confirmation they remain non-deployed migration/review evidence unless separately approved | Required until retirement or a separately approved migration/cutover. |

### B. `mindfultext-web` (private GitHub / Vercel destination)

Before a Vercel Preview can be requested, retain evidence that the clean
repository contains no copied Replit public-admin, content-write, upload,
object-storage, runtime-DDL, independent-content-database, or browser-secret
assumption. At minimum retain: commit SHA; route/reference-negative scan;
dependency/SAST/secret-scan summaries; production build/type/lint results; and
a redacted configuration inventory showing only variable **names/categories**,
runtime placement, owner, and secret-store reference—not values.

Before Vercel Production, additionally retain production-like route-negative
and anonymous-authorization tests, browser-bundle secret review, Vercel
Preview evidence, rollback plan, and W3/W4 acceptance evidence. DR-44 does
not authorize configuration, deployment, domain, DNS, analytics, or live
testing.

### C. `dev-mindfultext-connector` (private GitHub / Vercel destination)

Before any preview configuration, retain a minimal supported route/input/output
and authentication-**category** inventory, clean-source plan, explicit
unsafe-feature exclusion proof, dependency/SAST/secret scan summaries, and a
redacted Vercel configuration/observability/rollback plan. The replacement
must exclude auto-session, shared-session fallback, persisted-session handling,
and a general-purpose legacy proxy.

Before any cutover, retain non-production parity evidence, rollback rehearsal
result, monitored-owner/runbook, credential-history rotation record, and a
separate Mark approval for credentials, Vercel configuration, deployment, DNS,
and traffic. DR-43 selects the destination only; it is not cutover evidence.

### D. n8n dependency relevant to W1

The retained read-only report identifies an inactive inline Zoom-secret pattern
and broad audit-agent permissions. For W1, record the rotation category and
the least-privilege decision/result only; do not treat the report as a
credential inventory or a current host verification. W5's exact live version,
backup/restore proof, and workflow activation remain W5 work.

## Safe scan procedure (no credential-history access)

Run each command from a disposable, access-controlled checkout of the named
repository at an immutable commit. Do not print environment variables, run
application servers, invoke deployment commands, upload reports to public
systems, or use `--force`/unredacted secret-scanner output. A command may be
run only after the repository custodian authorizes that checkout and scan.

1. Record `git rev-parse HEAD`, `git status --short`, lockfile SHA-256, OS,
   Node, npm, and scanner versions in the evidence header. Refuse a dirty or
   unpinned revision.
2. Install dependencies without lifecycle scripts: `npm ci --ignore-scripts`.
   If the project uses a different committed package manager/lockfile, use its
   equivalent frozen, scripts-disabled install and record the substitution.
3. Capture dependency posture without values:
   `npm audit --omit=dev --json` and `npm audit --json`. Preserve a curated
   evidence table of advisory/package/severity/fix availability; keep raw JSON
   only in the restricted evidence store if it contains no secrets and the
   custodian approves retention.
4. Run the repository's non-deploy validation commands, normally
   `npm run lint`, `npm run typecheck`, and `npm run build`; record each exact
   command, exit status, duration, and commit. Do not treat a successful build
   as a security scan.
5. If installed and approved by the custodian, run a secrets scan of the
   working tree only: `gitleaks detect --source . --no-git --redact
   --report-format json`. Transform results immediately into category,
   path-class, count, and disposition; do not attach raw findings to this
   planning note. Absence of working-tree findings does not prove history is
   clean.
6. If installed and approved, run SAST against source only:
   `semgrep scan --config p/owasp-top-ten --config p/secrets --json`.
   Redact/truncate to rule ID, severity, source-path class, count, owner, and
   disposition. Do not auto-download rules or packages during an evidence run;
   record a "scanner unavailable" gap instead.
7. Perform explicit text/route-negative checks appropriate to the target:
   `rg -n -i 'app/admin|api/admin|api/storage|upload|storage|DATABASE_URL|CREATE TABLE|proxy|auto.?session|shared.?session|persisted.?session' .`
   Review the matches manually and record either an approved use with rationale
   or removal/no-match result. This is a review aid, not a pass/fail scanner.

For the authorized **history** procedure, use a separate restricted session
and approved scanner configuration. Its only output to W1 is the category-only
inventory below. Never paste commands, raw findings, values, or history
material into this vault.

## Redacted evidence format

Use one evidence row per tool/run and one disposition row per finding class:

| Evidence ID | Date (UTC) | Repository / immutable revision | Scope | Tool + version | Result | High/critical disposition | Custodian | Restricted record reference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `W1-SEC-YYYYMMDD-01` | `YYYY-MM-DD` | `repo@commit` | working tree / lockfile | `tool version` | pass / findings / unavailable | remediate, constrain non-deployed, or accepted by Mark | role only | opaque internal ID |

No values, bearer strings, cookies, private keys, environment dumps, URLs with
credentials, original archives, raw history, private corpus, or live-system
screenshots belong in the record.

## Credential-history inventory and rotation checklist

An authorized custodian inventories only these categories and reports whether
each is absent, confirmed exposed, uncertain, rotated/revoked, session
invalidated where supported, smoke-tested, or blocked. Treat `uncertain` as
requiring rotation before launch.

| Rotation category | Minimum category-only evidence |
| --- | --- |
| Replit workspace, runtime, deployment, and Object Storage | source class; custodian; revoke/rotate and session result |
| GitHub tokens, deploy keys, apps, Actions/automation | credential class; affected repository scope class; rotation result |
| Vercel project, deployment, and environment credentials | project class; environment class; rotation/configuration result |
| Database / Neon / PostgreSQL | connection/role class; environment class; rotate result |
| Connector operator, API, password, session, and integration credentials | interface/provider class; session invalidation and smoke-test result |
| WordPress administrator, application-password, media, and API | account/API class; revocation and scoped smoke-test result |
| n8n owner, encryption, webhook, Zoom, and workflow/service credentials | owner/workflow/provider class; least-privilege and rotation result |
| Google OAuth, Gmail, Calendar, Workspace | OAuth/client/service-account class; consent/token invalidation result |
| Unipile, Stripe, PostHog, model broker/local-agent | provider/key class; rotation and narrow smoke-test result |
| DNS, email delivery, monitoring, and other discovered third parties | provider/class; rotation and owner result |

For every applicable category: revoke/rotate; invalidate sessions/tokens where
supported; update only the designated secret store; remove stale references;
run one scoped non-production smoke test; and retain category, custodian role,
completion date, invalidation result, smoke-test result, and restricted record
ID. Do not add secret values or copies to GitHub, Vercel variables, planning
notes, tickets, scanner reports, or chat.

## Unresolved W1 blockers

1. Authorized original ZIP/Git/Replit configuration-history inventory and
   category-level rotation record are absent.
2. Dated Replit security-scan and lockfile dependency-audit evidence for both
   historical apps is absent.
3. `mindfultext-web` clean-source route/configuration/bundle/scan/build
   evidence is absent; its Vercel destination is not deployment proof.
4. `dev-mindfultext-connector` minimal-contract, clean-source, unsafe-feature
   exclusion, preview parity, monitoring, rollback, and scan evidence is
   absent; its Vercel destination is not cutover proof.
5. The n8n inline Zoom-secret category has not been evidenced as rotated, and
   audit-agent least privilege has not been evidenced.
6. No W1 route-negative/anonymous-authorization results establish that the
   eventual deployable public surface blocks admin/content/upload/storage and
   credential paths.

## Exact next authorization required from Mark

Authorize a named security custodian to perform a **read-only, restricted
credential-history inventory** across the original Replit ZIP(s), reachable Git
history, and Replit configuration/secret metadata for the historical frontend
and connector; permit the custodian to return only category, location class,
count, and exposed/uncertain status to the W1 evidence store. This
authorization expressly excludes copying or disclosing values, corpus data,
raw archives/history, deployments, Vercel/GitHub configuration, DNS changes,
and credential rotation.

After Mark reviews that category-only inventory, a separate authorization is
required for each approved rotation/revocation scope and its restricted smoke
test. A third, separate authorization is required for any Vercel preview
configuration, deployment, DNS, or traffic action.

## Related records

- [[planning/workstreams/W1-SOURCE-SECURITY-PREPARATION|W1 Source and Security Preparation]] — canonical W1 preparation scope.
- [[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]] — W1 closure gate and remediation order.
- [[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|Public-site readiness evidence]] — historical Replit review/no-go and its limits.
- [[planning/workstreams/W1-DEV-CONNECTOR-VERCEL-MIGRATION-TASK-CARD|Connector migration task card]] — bounded Vercel/GitHub preparation.
- [[planning/workstreams/W5-N8N-READINESS-EVIDENCE-2026-08-11|W5 n8n readiness evidence]] — read-only n8n findings and limits.
- [[decisions/2026-08-11-public-site-vercel-hosting|DR-44]] — public-site GitHub/Vercel decision.
- [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]] — connector GitHub/Vercel decision.
