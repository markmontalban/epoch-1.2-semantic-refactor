# W2 Integration Review — 2026-08-10

> **Retained review evidence.** Statements such as “in progress,” “unproven,”
> and “remaining” describe the review date, not current W2 status. Use the
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]];
> do not infer Preview, provider, or Production acceptance from this review.

## Outcome

The clean Growth Ops foundation is implemented locally in four unpushed
commits, and its latest reported typecheck, 19 unit tests, production build, and npm
audit passed in the implementation agent's environment. W2 is **in progress**, not
complete: live Google OAuth, Neon migration/recovery, service-credential, and
the independent acceptance-matrix checks remain unproven.

No push, deployment, remote migration, credential issuance, prototype change,
or live-system change is part of this review.

## Local implementation evidence

Repository: `/Users/mgzm-studio/AI-Studio/Projects/growth-ops`

| Commit | Scope |
| --- | --- |
| `d62718f` | Clean Next.js/Vercel shell |
| `54f867a` | Google-only owner and scoped service-auth foundation |
| `2c2b15a` | Audit, idempotency, jobs, health/readiness, tests, and runbook |
| `162a76b` | Reviewed reliability corrections and expanded tests |

The local `main` branch is four commits ahead of `origin/main`. The working
tree was reported clean. A separate read-only review confirmed the expected
files and commit structure. Re-running typecheck succeeded; test/build/audit
re-runs from the planning workspace were blocked by filesystem/network sandbox
limits, so the implementation agent's successful transcripts remain the
current execution evidence.

## Acceptance blockers found in code review

1. **Migration transaction connection:** `applyMigrations(db(), ...)` sends
   explicit `BEGIN`, migration SQL, ledger insert, and `COMMIT` through a
   PostgreSQL `Pool`. Pool queries are not guaranteed to use the same
   connection, so the claimed transaction boundary is unsafe. Acquire one
   client for the full run and add a migration concurrency lock.
2. **Expired lease recovery:** job claim selects only `pending` rows. A leased
   job whose worker disappears is never reclaimed after `lease_expires_at`, so
   it can remain stuck indefinitely.
3. **Lease-bound completion:** job completion accepts only `jobId`. Return a
   unique lease/attempt token during claim and require it for completion so a
   stale or different worker cannot complete a newer lease.
4. **Safe error classification:** schema-validation failures currently fall
   through to `500`, and database readiness failure also returns `500` rather
   than a controlled `503`. Map expected validation/dependency failures to the
   documented safe envelopes and status codes.
5. **Idempotency normalization:** the request hash uses raw `JSON.stringify`
   property order. Canonicalize accepted request data before hashing so
   semantically identical JSON does not conflict merely because field order
   changed.

These are foundation corrections, not W3 feature expansion.

## Parallel planning outputs accepted

- [[planning/workstreams/W2-OPERATIONS-FOUNDATION-TEST-MATRIX|W2 test matrix]]:
  21 planning-only acceptance/abuse cases. It has not been executed.
- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API proposal]]:
  useful non-frozen proposal. Reconcile its `/v1` paths, scopes, idempotency
  rules, and lease semantics with the corrected W2 primitives before approval.
- [[planning/workstreams/W1-CLOSURE-PLAN|W1 closure plan]]: confirms that public
  admin/write/upload/storage remediation, credential-history work, and retained
  Replit scan evidence remain open.

The Replit public-site review package has now been received and retained in
[[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|the W1 readiness evidence]].
It confirms a no-go until remediation but does not change the W2 code blockers.
The actual n8n report has also been received and retained in
[[planning/workstreams/W5-N8N-READINESS-EVIDENCE-2026-08-11|the W5 readiness evidence]].

## Next dependency-ready sequence

1. Review correction commit `162a76b` with the three foundation commits.
2. In a separate controlled preview task, verify Vercel Git/deployment behavior,
   configure preview/development inputs, create a non-production review branch,
   and push that branch only after Mark approves the preview action. Keep remote
   `main` unchanged.
3. Configure a Vercel preview and `growth-ops-dev` only;
   validate Google OAuth, development migrations, failure handling, and the
   applicable test-matrix rows using synthetic data.
4. Reconcile and freeze the first W3 contract only after the corrected W2
   behavior is proven.
5. Build the isolated clean Replit shell under
   [[decisions/2026-08-11-public-site-clean-replacement|DR-42]] while preserving
   the W3/W4 feature gates.
6. Complete n8n pre-activation hardening; do not build or activate the first
   workflow until its Growth Ops API and credential exist.

## Correction evidence — 2026-08-11

Commit `162a76b` corrects the five reviewed code blockers without rewriting
migration history: single-client migrations with an advisory lock, expired
lease recovery/terminalization, lease-token ownership, safe validation and
readiness responses, and canonical JSON idempotency hashing. The agent reported
typecheck, 19 tests, production build, high-severity npm audit, and diff checks
passing. Local `main` is four commits ahead of `origin/main`; nothing was
pushed, deployed, configured, or migrated.

The next W2 action is commit review followed by a controlled non-production
review-branch/Vercel-preview/Google OAuth/`growth-ops-dev` acceptance task.
Remote `main` stays unchanged until preview acceptance and a later production
decision. The five original findings remain in this note as review history,
not as open defects.

## Related records

- [[planning/workstreams/W2-OPERATIONS-FOUNDATION|W2 Operations Foundation]] — canonical W2 scope and gate.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — current status authority.
- [[decisions/2026-08-10-growth-ops-hosting|DR-40]] — hosting and execution boundary.
- [[decisions/2026-08-10-growth-ops-owner-auth|DR-41]] — owner-auth decision.
