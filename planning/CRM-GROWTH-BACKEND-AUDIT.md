# CRM-Sales and EiyahMind backend audit

> **Document role:** Historical evidence and recommendations from a read-only
> audit, not the current deployment plan or execution-status authority. Use the
> synchronized `planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md` for the
> founder-facing roadmap and `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` for
> current execution.

Last updated: 2026-08-13 12:43:56 PDT — edited by: Codex

**Status:** Read-only audit and implementation recommendation; no prototype, database, migration, deployment, or live API was changed. The required local Dispatcher work-card claim could not be created because `localhost:7070` was unavailable during documentation.

## Executive findings

Both Replit applications are prototypes, not safe production sources of truth. CRM-Sales is the stronger implementation base because it already models LinkedIn prospects, campaigns, templates, connections, message logs, and Unipile calls. It nevertheless requires a security and reliability rewrite before it can own production CRM data.

EiyahMind contributes the useful concept of per-person relationship notes. Its principal implementation is otherwise outside the MVP boundary: a separate lead store, persistent AI chats, Google Sheets replacement sync, sample data, vector routes, and direct paid OpenAI calls.

The original scoped audit did not include the connector source or safe API documentation. Those materials were supplied afterward and inspected separately. They confirm a broad legacy client/proxy with unsafe defaults; the current plan requires a narrow internal abstraction boundary and prohibits deploying its auto-session, shared-session fallback, or general-purpose proxy. Exact production-write semantics remain a later restricted research question, not an MVP blocker.

`model-dashboard-live` is appropriate only as the Mac-local inference broker. A Replit VM cannot reach its `localhost:7070`; an authorized Mac harness must initiate the bridge by fetching scoped CRM context, calling the broker, and returning a note or deliverable. Its demo SQLite CRM is not wired into the supported contract and must not be reused.

## Current architecture

| Area | CRM-Sales | EiyahMind |
| --- | --- | --- |
| Runtime | Node 20 Replit, TypeScript 5.6, React 18/Vite, Express 4, Drizzle/Postgres | Same base stack; adds `googleapis`, Zustand, and direct OpenAI |
| Deployment | Replit Autoscale today; intended target is a Reserved VM | Replit Autoscale prototype |
| Core data | Prospects, campaigns, templates, connections, message logs, settings, daily stats | Leads, lead notes, chats/messages, action logs, company/admin notes |
| Current integrations | Unipile; isolated OpenAI helper; Gmail settings UI only | Google Sheets read-only service; OpenAI; vector-store routes |
| Missing integrations | Organizations, Gmail sync, Stripe, PostHog, text-system integration, OpenAPI | Unipile, Gmail, Stripe, PostHog, text-system integration |
| Tests/migrations | No test files, no lint script, no committed migrations; `db:push` only | Same; vector test scripts are not an automated suite |

### CRM-Sales findings

- `prospects` directly references one optional campaign and no organizations table exists. Campaign totals are denormalized counters. [Schema](../../Replit/CRM-Sales/shared/schema.ts)
- Unipile search, invite, messaging, polling, and webhook handling are present. The client uses the configured DSN, API key, and account identifier. [Unipile client](../../Replit/CRM-Sales/server/unipile-api.ts)
- All checked API routes are unauthenticated, including provider actions and administrative settings. [Routes](../../Replit/CRM-Sales/server/routes.ts)
- The webhook compares a supplied header with the configured API key, but accepts requests when no expected secret exists; it processes inline, stores raw payloads, lacks event-ID dedupe, and returns 200 even after processing errors. [Webhook handler](../../Replit/CRM-Sales/server/routes.ts)
- Invite and follow-up schedulers start in-process. Autoscale or multiple instances could duplicate outreach, and many errors are swallowed. [Invite scheduler](../../Replit/CRM-Sales/server/campaign-automation.ts) · [Follow-up scheduler](../../Replit/CRM-Sales/server/followup-automation.ts)
- `bulk-connect` changes local state without calling Unipile and can therefore create false “sent” records. [Handler](../../Replit/CRM-Sales/server/routes.ts)
- The `users` table and Passport packages do not amount to working auth; no route-level authentication was found. API response logging can serialize relationship data before truncation. [Server](../../Replit/CRM-Sales/server/index.ts)

### EiyahMind findings

- The active storage export is PostgreSQL `DatabaseStorage`, though a legacy in-memory implementation includes sample leads. [Storage export](../../Replit/EiyahMind/server/storage.ts)
- Google Sheets sync deletes all leads before replacement and keeps configuration only in process memory. [Database storage](../../Replit/EiyahMind/server/storage-db.ts)
- Google integration is Sheets read-only, not Gmail. [Sheets service](../../Replit/EiyahMind/server/services/google-sheets.ts)
- AI analysis sends direct requests to paid OpenAI models, retains chats/messages, and exposes a model-selection concept. [Routes](../../Replit/EiyahMind/server/routes.ts)
- Vector routes include creation, deletion, insertion, query, and an unprotected sample-data test endpoint. [Vector routes](../../Replit/EiyahMind/server/routes/vector-store.ts)

### Model Ops findings

- The supported external surface is `GET /v1/models` and `POST /v1/chat/completions`, using literal installed models, `X-Caller`, `X-Run-Purpose`, `X-Resolved-Model`, and bounded memory refusal. It does not auto-fallback, queue, or expose a CRM. [External contract](../../model-dashboard-live/docs/EXTERNAL_CONTRACT.md)
- Its MCP wrapper provides local model tools only; it is not a CRM agent bridge. [MCP contract](../../model-dashboard-live/docs/MCP.md)
- Sanitized prompt payloads may be retained locally for newer proxy runs, so analysis context must be minimized and Gmail bodies must be supplied only after explicit authorization. [Proxy](../../model-dashboard-live/lib/openaiProxy.js)

## Feature disposition matrix

| Feature | Disposition | Source and rationale |
| --- | --- | --- |
| CRM-Sales base | Keep, then harden | Strongest domain coverage, but insecure/unreliable as-is |
| Prospects | Keep concept, rewrite model | Add organizations, identities, audit fields, timeline |
| Campaigns/memberships | Port and rewrite | Replace direct `prospect.campaign_id` with membership |
| Message variants | Port and rewrite | Add channel, assignment/weight, lifecycle, immutable revisions |
| Unipile | Port as adapter | Existing feasibility; rewrite webhook, retry, idempotency, audit |
| CRM analytics | Keep as derived reporting | Derive from events rather than mutable counters |
| Eiyah notes | Port concept only | Unified timeline notes with actor/audit data |
| Eiyah lead database | Remove | Competes with CRM ownership |
| Persistent AI chat/model selector | Remove | Contradicts on-demand analysis boundary |
| Sheets replacement sync | Remove | Destructive duplicate source of truth |
| Vector search | Defer/remove | No demonstrated MVP need |
| Continuous AI tags/summaries | Defer | Avoid duplicate opaque relationship state |
| Gmail metadata sync | New integration | No existing Gmail implementation |
| Stripe/calls/pipeline | New integration | No existing entities or handlers |
| PostHog/recipient attribution | New integration | No current dependency or contract |
| Text content/scheduler/audio system | Do not rebuild | Remains owned by `dev.mindfultext.com` |

## Merged domain and data model

Use one Replit PostgreSQL database and an append-only relationship timeline. Mutable summaries are conveniences, never the sole history.

```text
Organization ──< Prospect ──< RelationshipEvent >── CampaignMembership ── Campaign
                       │                  │
                       │                  ├── RecipientRoute ── WebVisit / EngagementRollup
                       │                  ├── GmailThreadRef / Note / Attachment
                       │                  ├── CallRequest ── Booking ── Call
                       │                  ├── StageHistory ── SalesStage
                       │                  ├── Payment
                       │                  └── ExternalMessageRef (Unipile / dev.mindfultext.com)
                       └── AnalysisRequest ── Deliverable
```

| Entity | Required design |
| --- | --- |
| Organizations/prospects | UUIDs; normalized external identities; canonical matching rules decided during import |
| Campaigns/memberships/variants | Memberships, channel, assignment/weight, lifecycle; immutable revisions after exposure |
| Relationship events | Append-only `event_type`, actor, occurrence time, source system/event ID, links, redacted raw reference; unique external event IDs |
| Recipient routes | Random opaque token hashes, expiry/revocation, campaign/variant/prospect links; no PII in URLs |
| Attribution | Anonymous visitor/session, immutable first touch, current last touch, explicit confidence status |
| Engagement rollups | Derived windowed PostHog summaries, not copied replay/session recordings |
| Calls/stages/payments | Call request, manual booking reference, held/no-show result; custom stages; verified Stripe payment state |
| Gmail refs | Account/thread/message IDs, participants, subject, dates, snippets; full body only transiently for authorized analysis |
| Notes/attachments/deliverables | Object-store reference, content hash, author/audit data, retention classification |
| Text-system refs | External content/message/schedule/revision IDs and linked WordPress URL reference; no cloned finalized content or scheduler state |
| Experiments | Optional hypothesis, audience, variants, dates, metrics, notes, result |
| Platform controls | Audit log, idempotency keys, webhook receipts, outbox jobs |

A recipient token is evidence that a link was followed, not proof that the named recipient visited. If observed from multiple anonymous visitor contexts, preserve activity but classify it as `forwarded_or_unknown` rather than crediting the prospect.

## Migration strategy

1. Create the merged schema in a fresh environment using reviewed, committed, forward-only migrations—not `drizzle-kit push`.
2. Seed only the customizable stages: requested, booked, held, second call, won, lost, cash received. Do not seed sample leads, demo data, chats, or vectors.
3. Build read-only import profilers for both prototypes: counts, nulls, duplicates, external IDs, campaign conflicts, and PII classification.
4. Produce a preview keyed by source and source primary key. Match through Unipile profile ID, normalized LinkedIn URL, and verified email; unresolved matches go to review rather than silently merging.
5. Import useful CRM-Sales history as source-stamped relationship events. Import Eiyah notes only when a lead match is confident; discard chats, sample rows, AI summaries, vectors, and Sheets replacement state.
6. Recalculate campaign and funnel summaries from events instead of copying counters.
7. Rehearse imports in disposable environments, verify counts and relationship samples, and retain encrypted exports only for an approved retention period.

Schema migration and production-data migration are separate future decisions. No production import should begin before actual database ownership and data quality are reviewed.

## REST/OpenAPI contract

Publish an OpenAPI 3.1 contract under `/v1`, generate typed clients, paginate collection endpoints with cursors, and require `Idempotency-Key` plus `X-Request-Id` for externally repeatable writes.

```json
{ "error": { "code": "forbidden", "message": "Required scope: crm.write" }, "request_id": "…" }
```

| Endpoint | Scope | Purpose |
| --- | --- | --- |
| `GET /v1/prospects`, `GET /v1/prospects/{id}` | `crm.read` | Search/read prospects, orgs, memberships, stages |
| `GET /v1/organizations`, `GET /v1/organizations/{id}` | `crm.read` | Organization context |
| `GET /v1/prospects/{id}/timeline` | `timeline.read` | Cursor-paginated relationship timeline |
| `POST /v1/prospects/{id}/notes` | `crm.draft` | Add auditable note |
| `POST /v1/prospects/{id}/attachments` | `crm.draft` | Upload grant/finalize attachment |
| `PATCH /v1/prospects/{id}/stage` | `pipeline.write` | Stage transition with reason |
| `GET/POST /v1/campaigns`, memberships, variants | campaign scopes | Read/draft campaign work |
| `GET /v1/gmail/threads/{id}` | `gmail.read` | Metadata/snippets only |
| `POST /v1/gmail/context-requests` | `gmail.analyze` | One-time full-body retrieval for named analysis |
| `POST /v1/analysis-requests`, `POST /v1/deliverables` | analysis scopes | Request/return local work |
| `GET /v1/reports/attribution`, `/experiments` | `experiment.read` | Funnel and experiment summaries |
| `POST /v1/webhooks/unipile`, `/stripe` | provider signature | Raw-body verified webhook ingress |
| `GET /v1/public/routes/{token}` | public-site service credential | Resolve opaque route with no PII |
| `POST /v1/public/exposures`, `/events`, `/call-requests` | public-site service credential | Exposure, behavior, attributed call request |

Route resolution returns only an opaque session/attribution instruction and selected variant—not a prospect record. Select campaign-assigned or deterministic weighted-random variants server-side using the token and an experiment seed.

Use separate `crm.read`, `crm.draft`, `campaign.read/write`, `experiment.read/write`, `publish`, `pipeline.write`, `gmail.read/analyze`, `analysis.request/write`, and `admin` scopes. Mark has owner access. Human sessions should use a mature hosted or Replit-supported identity system with short-lived sessions; integrations use independent rotatable, hashed client credentials. Browser code receives no broad CRM credential. Normal permitted work succeeds through scope checks; unauthorized work fails 401/403 without a manual gate.

## MCP-compatible agent contract

Expose an MCP server backed by CRM REST, never by direct database access.

| Tool | Scope | Result |
| --- | --- | --- |
| `search_prospects`, `get_organization` | `crm.read` | Minimal matching records |
| `get_relationship_timeline`, `get_campaign_context` | timeline/campaign read | Scoped context |
| `request_gmail_context` | `gmail.analyze` | Explicitly authorized ephemeral context |
| `add_note`, `attach_deliverable` | `crm.draft` | Audited write receipt |
| `update_sales_stage` | `pipeline.write` | Transition plus history event |
| `request_local_analysis` | `analysis.request` | Request/status |
| `get_attribution_summary`, `get_experiment_summary` | `experiment.read` | Derived metrics |

Mac local-analysis flow:

1. An authorized local harness authenticates to CRM with a narrow service credential.
2. It requests only named prospect/timeline/campaign context. Full Gmail content is included only after an authorized request.
3. It discovers literal models through `GET /v1/models`, then calls `localhost:7070/v1/chat/completions` with `X-Caller: mindfultext-growth-bridge` and a concise `X-Run-Purpose`.
4. It returns a draft note/deliverable through `analysis.write`, labelled model output and recording the source event IDs, model, and request ID.
5. On memory refusal, unreachable broker, or timeout, it records the local limitation. It never auto-calls a paid model; that requires Mark’s explicit approval for that call.

## Integration flows

- **Unipile:** CRM owns outreach/timeline state; Unipile owns LinkedIn transport. Verify signed raw webhooks, persist receipt and idempotency key, enqueue processing, then append events.
- **PostHog:** PostHog owns detailed behavior and masked replay. CRM owns recipient-token mapping, attribution rules, and summarized engagement; it must not copy replay data.
- **Gmail:** Gmail owns full message content. CRM stores metadata/snippets and mappings. Full content is transient for authorized analysis only.
- **Stripe:** Stripe owns payment processing. CRM records verified receipt-derived financial state. Verify signature, persist receipt, acknowledge quickly, process asynchronously.
- **`dev.mindfultext.com`:** It owns finalized text content, scheduling, messaging connector, and linked WordPress audio URLs. CRM stores only contextual external references. Exact adapter details are blocked pending source or safe docs.
- **Public site:** It renders and degrades gracefully. CRM owns token resolution, variant exposure, attribution persistence, experiment configuration, and call-request intake.
- **Mac bridge:** Model Ops owns admission/inference. CRM owns source context, request state, and returned business artifacts.

If CRM is unavailable, the public site serves a generic safe page. If PostHog is unavailable, first-party events can be accepted into CRM/outbox and reports label data delayed or partial. If the Mac bridge is unavailable, analysis becomes pending/unavailable while CRM work continues.

## Deployment plan

Deploy a new clean operations app on a Replit Reserved VM with a fresh Replit PostgreSQL production database and a separate development/test database. Port selected prototype concepts rather than treating either prototype as the deployable base.

- Store independent per-environment secrets and rotate each service credential separately.
- Run API/web and workers separately; workers handle webhook processing, Unipile outbox work, PostHog aggregation, Gmail metadata sync, and Stripe reconciliation.
- Make reviewed migrations, database backup/snapshot, and rollback plans deployment prerequisites.
- Add health/readiness checks for database, queue, and configured adapters without exposing secrets.
- Use structured correlation IDs and redaction; alert on signature failures, dead-letter jobs, retry exhaustion, and Stripe event lag.
- Test PostgreSQL backup restoration before accepting production CRM records.

## Implementation sequence

1. Reconcile this v0 OpenAPI/event contract with the public-site agent; freeze routes, payloads, CORS/credentials, event names, and degradation behavior.
2. Obtain `dev.mindfultext.com` source or safe documentation; define its exact auth, identifiers, read model, and event boundary.
3. Build the Reserved-VM foundation: identity/scopes, PostgreSQL migrations, audit log, OpenAPI, typed client, health checks.
4. Implement organizations/prospects, stages, campaigns/memberships/variants, timeline, notes, attachments, and import previews.
5. Implement recipient routes, public-site flow, attribution, experiments, PostHog rollups, and call requests.
6. Add Unipile adapter/outbox/webhook verification; then Gmail metadata and on-demand context.
7. Add Stripe verified receipt and asynchronous processing.
8. Add the Mac MCP bridge and on-demand local analysis.
9. Run synthetic funnel, migration rehearsal, and joint frontend/backend contract tests before Mark reviews implementation.

## Test plan

- **Unit:** token handling, forwarding confidence, stage transitions, weighted variants, idempotency, scope checks, attribution.
- **Integration:** Postgres migrations, outbox retries, signed Unipile/Stripe fixtures, Gmail redaction, PostHog aggregation.
- **Contract:** OpenAPI schema validation and public-site typed-client tests against a mock server.
- **Authorization:** each scope, cross-prospect access, and absence of browser access to provider/admin work.
- **Degradation:** CRM, PostHog, Mac, and provider outages.
- **Migration:** clean, duplicate, partial-match, corrupted, and rollback/restore cases.
- **Synthetic funnel:** route → exposure → engagement → call request → manual booking → held calls → won → Stripe cash, including a forwarded link.

## Overbuilding risks

Do not add a second text scheduler, cloned SMS content store, audio-hosting system, Tailscale in the request path, self-hosted identity platform, generic event bus, data warehouse, vector store, persistent chat UI, AI autotagging, automatic email summaries, native scheduling, or automatic paid-model fallback to the MVP.

Also defer multi-tenant SaaS abstractions, elaborate orchestration, and Mac hosting until Reserved-VM usage, cost, and workflow demand justify them.

## Open questions and recommendation boundaries

**Facts:** both prototypes lack committed migrations and automated suites; both deployments are currently Autoscale; no `dev.mindfultext.com` source/docs were found; no inspected code supports Gmail, Stripe, PostHog, organizations, or secure authorization; Model Ops supports local inference but not CRM storage/public remote access.

**Mark decisions:** human identity provider; whether any prototype rows deserve import after profiling; the authoritative `dev.mindfultext.com` contract; PII/Gmail/attachment/prompt retention; and the existing public-site agent’s API-base, server-credential, event-name, and fallback assumptions.
