# W3 — Growth API Contract Proposal (v1)

Last updated: 2026-08-14 17:14:43 PDT — edited by: Codex

> **Status: proposed, not frozen.** This is a planning-only interface proposal
> for W3. It creates no records, credentials, providers, or implementation
> commitment. Approve it only after the W2 dependencies below have been proven.

## Purpose and boundary

This proposed `/v1` contract supports the L2 public-site buyer-learning funnel:

`branded recipient path → link open → human-like engagement → fit reflection → useful results → optional identity/conversation request`

The operations app remains the canonical system of record. The public site is
stateless except for server-side API calls. n8n has no database access and may
claim and complete only work assigned to it. Detailed behavioral analytics and
replay remain in PostHog; this API stores only useful summaries. Assessment
answers remain anonymous unless the visitor knowingly opts to associate them.
n8n's narrow worker role is deferred and is not required for the L2 funnel.

All IDs, tokens, hosts, emails, names, and timestamps below are synthetic.

## Founder-approved relationship model

[[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]]
separates the founder-controlled lead funnel from the evidence timeline and
approval queue. The initial customizable lead-stage seed is:

`identified → researched → outreach_approved → contacted → replied → meeting_scheduled → meeting_completed → closed_won | closed_lost`

Mark's authenticated owner session controls outreach approval, all sends,
strategic changes, backward/reopen moves, and closed won/lost. A versioned
policy may automatically advance only `contacted → replied`, `replied →
meeting_scheduled`, and `meeting_scheduled → meeting_completed` from trusted,
unambiguous provider/calendar/transcript signals. Each automatic move records
source, policy version, timestamp, audit/history/timeline evidence, and a
human-reversible link. The
public site may create an `identified` lead when an inbound call request cannot
be confidently matched; it records `requested` as the call-request status, not
as a lead stage. Agents, Unipile, and n8n append source-stamped activities or
create approval-queued work, but have no general stage-change or send authority.

An agent insight, a LinkedIn reaction, a message draft, and a provider-observed
send/reply are different timeline activities. They are evidence for Mark's
judgment, never automatic proof of intent or conversion. The owner-only manual
stage-update contract must retain prior stage, next stage, actor, timestamp,
and an optional non-sensitive reason. Configurable substages sit beneath the
canonical sequence and never grant a new automatic transition.

W3b — Lead Stage Automation separates people from organizations with many-to-many relationships and
supports cohorts/hypotheses plus person overrides of organization defaults. It
also owns a priority queue, one append-only timeline, structured conversation
records, and inactivity/momentum signals. Zoom retains full transcripts;
Growth Ops stores only external references, summaries, tags, and selected
quotes.

Manual source-signal intake is the only active ingestion path. Future Unipile,
social, calendar, and transcript connectors are inert adapters until separately
approved. Mark selected unbounded pre-customer intake/raw-source retention
pending a later cleanup policy. The owner-only SQL archive records source
metadata/reference, content hash, review state, tags, linked records, and
access audit; it rejects credentials, tokens, passwords, payment-card data, and
private provider exports. Product/customer data, including any eventual
call-request contact data, uses a separate PII, consent, access, retention, and
deletion policy; it is not governed by this Growth archive rule.

[[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]] adds a stricter public
identity boundary: a personalized invitation identifies the original invite,
not the current visitor with certainty. Link activity stays attributed to that
invitation with confidence labels until voluntary identification. Sensitive
reflection answers must have an anonymous option and cannot become named
relationship data without the visitor's disclosed choice.

## Conventions proposed for every endpoint

| Concern | Proposed contract |
| --- | --- |
| Base and version | HTTPS `/v1`; version is in the path. Additive fields are allowed within v1; breaking changes require a new version and migration period. |
| Service authentication | `Authorization: Bearer <service-token>` over TLS. Credentials are independent, rotatable, stored hashed, and bound to a named service actor plus allowlisted scopes. No credential is delivered to browser JavaScript. |
| Proposed scopes | `public.route.resolve`, `public.exposure.write`, `public.engagement.write`, `public.assessment-status.write`, `public.consent.write`, `public.call-request.write`, `outbox.claim`, and `outbox.complete`. The manual stage-update action is owner-session authorized, not a service scope. Scope grants are deliberately separate. |
| Request IDs | Client may send a validated `X-Request-ID`; otherwise the API generates one. Every response includes it as `X-Request-ID` and `request_id` in JSON. It correlates audit, idempotency, and redacted logs. |
| Idempotency | Required on every listed state-changing POST: `Idempotency-Key` (opaque, 16–255 characters). Uniqueness is actor + endpoint + key. A replay with the same normalized payload returns the original status/body plus `Idempotency-Replayed: true`; a different payload returns `409 idempotency_key_reused`. Retention period and payload-normalization rules remain approval decisions. |
| Error envelope | `{"error":{"code":"invalid_request","message":"Request could not be accepted","details":[{"field":"event_id","reason":"required"}]},"request_id":"req_demo_01"}`. Messages never reveal route ownership, authorization policy beyond the required scope, or internal dependency detail. |
| Time and naming | ISO 8601 UTC timestamps; UUID-like opaque application IDs. Client event IDs are opaque strings, never a raw PostHog/session identifier. |
| Privacy | Do not put PII in paths, route tokens, error text, analytics, or logs. Redact authorization, idempotency, form note, email, name, IP address, user agent, and raw payloads. The owner-reviewed Growth archive may retain public or authorized lead-generation/outreach material under DR-45; product/customer data follows its own approved retention classification. |
| Rate limits | Limits are per credential and, where relevant, privacy-preserving network-abuse controls. Exact numbers are intentionally deferred until W2 capacity and abuse-control evidence exists. `429` includes `Retry-After`; rate-limit logs use redacted/hashed operational identifiers. |

### Common errors

| Status/code | Meaning |
| --- | --- |
| `400 invalid_request` | Malformed JSON, missing required header, or invalid field. |
| `401 unauthorized` | Missing, expired, revoked, or invalid service credential. |
| `403 forbidden` | Valid credential lacks the required scope. |
| `404 not_found` | Generic resource absence; never reveals a recipient or token relationship. |
| `409 idempotency_key_reused` | The key was already used for a materially different payload. |
| `409 invalid_job_state` | A completion does not match the lease/attempt/current job state. |
| `422 invalid_state` | Well-formed input violates a domain rule, such as a revoked route. |
| `429 rate_limited` | Retry after the supplied delay. |
| `503 dependency_unavailable` | A required readiness dependency is unavailable; callers should use bounded retry/backoff. |

## Endpoints

### `GET /v1/public/routes/{experience}/{handle}` — resolve an opaque recipient route

The visitor reaches this resolver through a subtle same-domain experience path
such as `/team-alignment/{opaque-word-handle}`. The semantic `experience` slug
comes from a controlled approved vocabulary; the random word-only `handle`
contains no PII, encoded metadata, or digits. Growth Ops privately owns its recipient/campaign/page
mapping and pause, revoke, expire, and destination-change state; the public URL
does not change.

- **Caller / scope:** public-site server only; `public.route.resolve`.
- **Request example:** `GET /v1/public/routes/rt_demo_b4xY7mQ` with a service
  credential and `X-Request-ID: req_demo_route_01`.
- **Success response (200):**

```json
{
  "route_session_id": "rs_demo_8c5d",
  "presentation": {
    "destination": "/care-team-fit",
    "campaign_code": "camp_demo_ccbhc_q3",
    "variant": { "key": "b", "revision": 1 }
  },
  "attribution": { "first_touch_status": "attributed_link", "last_touch_status": "attributed_link" },
  "request_id": "req_demo_route_01"
}
```

- **Idempotency:** safe GET; no `Idempotency-Key`. Repeated resolution may
  refresh only a short-lived opaque route-session record if approved, never
  mutate first-touch attribution or expose recipient data.
- **Errors:** `404 not_found` for unknown, paused, expired, or revoked tokens with the
  same generic body; `401`/`403` for service auth; `429` for abuse controls.
- **Rate-limit intent:** protect token enumeration and route-session churn;
  conservative credential and network-abuse limits without making a normal
  campaign visit fail.
- **Privacy/logging:** token is treated as sensitive. Store only a keyed hash
  for lookup/audit; never log the raw token, recipient, prospect, or full URL.
  The response has no name, email, organization, prospect ID, or recipient ID.
- **Expected audit event:** `recipient_route.resolved`, recording route ID,
  actor/service ID, outcome, request ID, and a non-reversible token reference.
  Resolution proves only `link_opened`; previews and security scanners can
  cause it. Forwarded-link activity stays tied to the original invitation and
  is marked probable, not certain, until voluntary identification.

### `POST /v1/public/exposures` — ingest a variant exposure

- **Caller / scope:** public-site server; `public.exposure.write`.
- **Request example:**

```json
{
  "event_id": "exp_demo_01J9A7",
  "route_session_id": "rs_demo_8c5d",
  "occurred_at": "2026-08-10T19:22:10Z",
  "surface": "ccbhc_hero",
  "variant_key": "b"
}
```

  Headers: `Idempotency-Key: idem_demo_exposure_01` and
  `X-Request-ID: req_demo_exposure_01`.
- **Success response (202):**

```json
{
  "receipt_id": "idr_demo_101",
  "event_id": "exp_demo_01J9A7",
  "accepted": true,
  "request_id": "req_demo_exposure_01"
}
```

- **Idempotency:** dedupe on the idempotency receipt and on a unique,
  route-session-scoped `event_id`; duplicates never increment exposure totals.
  Same key/payload replays the receipt; same event ID with a conflicting
  payload returns `409`.
- **Errors:** `400` missing/invalid headers or timestamp; `401`/`403` scope;
  `404` unknown route session; `422` variant does not match the resolved
  presentation; `409` conflict; `429`; `503` only if durable receipt storage
  is unavailable.
- **Rate-limit intent:** permit normal page rendering and bounded retries,
  while containing accidental client loops and synthetic-event abuse.
- **Privacy/logging:** no cookie, IP, user agent, URL query, or raw token in
  the body or logs. Log event category and validation outcome only; retain the
  minimum route-session reference required for attribution.
- **Expected audit event:** `exposure.accepted` (or `exposure.deduplicated`),
  with source event ID, route-session ID, campaign/variant reference, actor,
  request ID, and receipt ID.

### `POST /v1/public/engagements` — ingest an engagement summary

- **Caller / scope:** public-site server; `public.engagement.write`.
- **Request example:**

```json
{
  "event_id": "eng_demo_01J9B2",
  "route_session_id": "rs_demo_8c5d",
  "occurred_at": "2026-08-10T19:23:31Z",
  "summary": {
    "active_seconds": 46,
    "max_scroll_percent": 75,
    "sections_viewed": ["ccbhc_hero", "outcomes"],
    "cta": "request_call"
  }
}
```

  Headers: `Idempotency-Key: idem_demo_engagement_01`.
- **Success response (202):**

```json
{
  "receipt_id": "idr_demo_102",
  "event_id": "eng_demo_01J9B2",
  "accepted": true,
  "request_id": "req_demo_engagement_01"
}
```

- **Idempotency:** same receipt/event-ID policy as exposures. Engagement is
  merged only by approved server rules; retries cannot inflate rollups.
- **Errors:** as exposure ingestion, plus `422` for unsupported metric names,
  out-of-range values, or prohibited payload fields. A PostHog outage is not
  an API dependency and therefore does not cause a failure here.
- **Rate-limit intent:** accommodate batched, low-frequency summary submits;
  reject high-cardinality event floods. Detailed clickstream belongs in
  PostHog, not this endpoint.
- **Privacy/logging:** accept a strict allowlist of aggregate metrics. Reject
  form fields, free text, session replay references, IP/user-agent data,
  inferred health data, and raw PostHog identifiers. Redacted logs record only
  metric names/counts and outcome.
- **Expected audit event:** `engagement.accepted` (or
  `engagement.deduplicated`), with event/route-session/attribution references,
  a redacted summary fingerprint, actor, request ID, and receipt ID.

### L2 assessment and consent contract

- `POST /v1/public/assessment-status` accepts only `started`, `partial`,
  `completed`, and `results_viewed`. It may carry the route session and an
  anonymous Formbricks response reference, but never raw answers or free text.
- `POST /v1/public/consents` records a disclosed, versioned visitor choice to
  associate a response, save results, use a demo, or request a conversation.
  Each purpose is separate; no prechecked or inferred consent is allowed.
- Anonymous responses stay outside named Growth relationship data. Sensitive
  workforce or mindfulness answers must have an anonymous option.
- Useful results appear before any identity or scheduling ask. PostHog receives
  funnel milestones, not assessment answers. Withdrawal/deletion behavior must
  be approved before public collection.

### `POST /v1/public/call-requests` — submit a call request

- **Caller / scope:** public-site server; `public.call-request.write`.
- **Request example:**

```json
{
  "submission_id": "call_demo_01J9C4",
  "route_session_id": "rs_demo_8c5d",
  "submitted_at": "2026-08-10T19:25:02Z",
  "contact": {
    "name": "Jordan Example",
    "work_email": "jordan@example.test",
    "organization": "Example Behavioral Health",
    "role": "Operations Director",
    "note": "Interested in a short introductory conversation."
  }
}
```

  Headers: `Idempotency-Key: idem_demo_call_01`.
- **Success response (202):**

```json
{
  "call_request_id": "cr_demo_91a2",
  "status": "requested",
  "message": "Thanks — Mark will arrange scheduling manually.",
  "request_id": "req_demo_call_01"
}
```

- **Idempotency:** required. The same key/payload returns the original call
  request without another timeline event or outbox notification. The server
  additionally applies an approved duplicate-submission rule, but it must not
  silently merge distinct people who share an organization or email-like text.
- **Errors:** `400` header/body problems; `422` name/work-email validation or
  disallowed field size; `409` idempotency conflict; `429` form-abuse limit;
  `503` only when canonical write/receipt/outbox persistence cannot complete.
  There is no qualification rejection and no public scheduling action.
- **Rate-limit intent:** strict anti-abuse protection by service credential and
  privacy-preserving request fingerprint, with a safe user-facing retry path.
- **Privacy/logging:** contact fields are sensitive. Encrypt/protect them per
  approved storage design; do not emit name, work email, organization, role,
  or note to request logs, PostHog, error bodies, or n8n job payload logs.
  Attribution is resolved server-side from the route session; callers cannot
  submit prospect/campaign IDs.
- **Expected audit event:** `call_request.submitted`, including call-request
  ID, redacted contact fingerprint, derived attribution references, actor,
  request ID, receipt ID, and consent/version references. A notification outbox
  job is optional only after W5 activation; the canonical request must succeed
  without n8n.

### `POST /v1/outbox/jobs/claim` — lease an n8n outbox job

- **Caller / scope:** n8n only; `outbox.claim`.
- **Request example:**

```json
{
  "worker_id": "n8n-growth-notifier",
  "supported_job_types": ["call_request_notification"],
  "max_jobs": 1
}
```

  Headers: `Idempotency-Key: idem_demo_claim_01`.
- **Success response (200):**

```json
{
  "jobs": [
    {
      "job_id": "job_demo_7001",
      "job_type": "call_request_notification",
      "attempt": 1,
      "lease_expires_at": "2026-08-10T19:30:00Z",
      "correlation_id": "req_demo_call_01",
      "payload": {
        "call_request_id": "cr_demo_91a2",
        "notification": { "template": "call_request_received" }
      }
    }
  ],
  "request_id": "req_demo_claim_01"
}
```

- **Idempotency:** the same key returns the same claim result while its lease
  remains valid; it never claims an extra job. After the lease expires, the
  job may be reclaimed under the bounded retry policy. Claiming is atomic.
- **Errors:** `400` invalid worker/max; `401`/`403`; `429`; `503` when the job
  store is unavailable. An empty ready queue is `200 {"jobs":[]}`, not an
  error.
- **Rate-limit intent:** limit polling and batch size per n8n credential;
  support a bounded polling/backoff schedule without creating a resident app
  worker.
- **Privacy/logging:** return the minimum typed payload needed for the named
  job. For the first notification job, n8n should receive a template and
  canonical ID, not form free text or a full contact record, unless a later
  reviewed job contract explicitly proves need. Redact job payloads in logs.
- **Expected audit event:** `outbox_job.claimed`, with job type/ID, lease,
  attempt, worker/credential actor, request and correlation IDs; no raw payload.

### `POST /v1/outbox/jobs/{job_id}/complete` — record n8n job outcome

- **Caller / scope:** n8n only; `outbox.complete`.
- **Request example:**

```json
{
  "attempt": 1,
  "lease_token": "lease_demo_4f91",
  "outcome": "succeeded",
  "completed_at": "2026-08-10T19:27:14Z",
  "result": { "notification_reference": "notif_demo_55" }
}
```

  Headers: `Idempotency-Key: idem_demo_complete_01`.
- **Success response (200):**

```json
{
  "job_id": "job_demo_7001",
  "state": "completed",
  "attempt": 1,
  "request_id": "req_demo_complete_01"
}
```

- **Idempotency:** repeat completion with the same key/payload returns the
  original terminal receipt. Completion requires the active lease token and
  matching attempt. A late, mismatched, or already superseded completion is
  `409 invalid_job_state`; it cannot overwrite a later attempt.
- **Errors:** `400` malformed outcome/result; `401`/`403`; `404` generic job
  absence; `409` lease/state mismatch; `422` invalid result shape; `429`;
  `503` durable state unavailable. For `outcome: "retryable_failure"`, the API
  applies the preconfigured bounded retry policy; for `terminal_failure`, it
  records failure and triggers the approved founder-notification path.
- **Rate-limit intent:** allow prompt completion and bounded retry reporting;
  resist completion floods or brute-force lease attempts.
- **Privacy/logging:** result fields must be job-type allowlisted and contain
  provider references/statuses only, never credentials, raw provider payloads,
  email bodies, or call-request form text. Store a redacted error class, not a
  sensitive error message.
- **Expected audit event:** `outbox_job.completed`, `outbox_job.retry_scheduled`,
  or `outbox_job.terminal_failed`, with job/attempt/actor/request/correlation
  IDs, outcome, sanitized result reference, and next-attempt time when present.

### `GET /v1/health` and `GET /v1/readiness` — operational status

- **Caller / scope:** platform monitor or authenticated operational caller;
  proposed `ops.health.read` scope for readiness. `GET /health` may be
  unauthenticated only if W2 proves it contains no sensitive detail.
- **Request example:** `GET /v1/readiness` with `X-Request-ID:
  req_demo_ready_01`.
- **Success response (200):**

```json
{
  "status": "ready",
  "checks": { "database": "ok", "migrations": "ok", "outbox_store": "ok" },
  "request_id": "req_demo_ready_01"
}
```

- **Idempotency:** safe GET; no state change or idempotency header.
- **Errors:** `503 dependency_unavailable` when readiness checks fail; `401` or
  `403` for protected readiness; `429` for monitor abuse. A liveness response
  means only the process can answer, while readiness asserts the minimum W3
  write dependencies are usable.
- **Rate-limit intent:** generous monitoring allowance, bounded per caller to
  prevent health checks becoming an amplification vector.
- **Privacy/logging:** no connection strings, hostnames, credentials, migration
  names, queue depths, customer counts, or provider status details. Log status
  class and request ID only.
- **Expected audit event:** normally no durable business audit event. Emit a
  security/operations audit event only for denied access or a state transition
  such as `readiness.changed_to_unready`.

## Approval dependencies: evidence W2 must prove

This proposal cannot be approved merely because its shapes look reasonable.
W2 must supply automated, reviewable evidence that:

1. A separate hashed, rotatable public-site credential exists; scopes are
   enforced server-side; invalid, revoked, and cross-scope attempts safely
   return `401`/`403`. An n8n credential is a later W5 requirement.
2. Request-ID propagation, structured redacted logs, stable error envelopes,
   audit events, and idempotency receipts work together under concurrent retry.
3. Fresh development/test and production-equivalent Neon environments accept
   reviewed forward-only migrations; backup/restore and application rollback
   guidance are tested.
4. Canonical public-funnel writes do not depend on n8n. When W5 resumes,
   durable outbox/job state must support atomic leases, bounded retries,
   terminal failures, and no direct n8n database access.
5. Health and readiness distinguish process liveness from unavailable database,
   migration, and job-store dependencies without leaking topology or secrets.
6. The public-site server credential can be kept out of browser code and its
   deployment/runtime can call the operations API over TLS with a documented
   CORS/credential posture.
7. Rate-limit and abuse-control instrumentation can enforce the intended
   protections without retaining raw IP/user-agent/form content in ordinary
   logs; exact thresholds have an operational owner and test plan.
8. The data-retention, encryption/protection, and redaction approach for call
   request PII, recipient tokens, audit records, and idempotency payload
   fingerprints has been selected and tested.
9. W1's relevant credential rotation and source-security launch gates are
   satisfied before any production credential or real traffic is introduced.

## Decisions deliberately left open

- Exact service-token format, lifetime, rotation overlap, credential registry,
  and allowed network controls.
- Idempotency-receipt retention duration, canonical payload normalization, and
  the user-safe duplicate call-request policy.
- Exact rate-limit thresholds, job lease duration, retry schedule, and terminal
  failure notification channel.
- Final event taxonomy, engagement rollup windows, route-session lifetime, and
  forwarded-link classification mechanics.
- Formbricks adoption, exact reflection questions/results, anonymous-response
  retention/deletion, consent wording/versioning, and association withdrawal.
- Call-request confirmation copy, product/customer PII retention period, and
  any later n8n notification data beyond a canonical ID.

## Related records

- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] —
  canonical global status and W3 gate.
- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]] — L2 funnel,
  attribution, consent, and deferment authority.
- [[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]] —
  founder-controlled stages, timeline evidence, and approval-queue boundary.
- [[planning/workstreams/W2-OPERATIONS-FOUNDATION|W2 Operations Foundation]] —
  prerequisite controls and proof gate.
- [[planning/CRM-GROWTH-BACKEND-AUDIT|CRM Growth Backend Audit]] — historical
  domain evidence and earlier interface recommendation.
- [[planning/ai-handoff/MINDFULTEXT-GROWTH-SYSTEM-HANDOFF|Growth System AI Bootstrap]] —
  portable stable architecture and operating boundaries only.
