# Copy-ready prompt: CRM-Sales and EiyahMind backend audit

> **Historical task card:** This read-only audit is complete. Retain this prompt
> for provenance; do not use it as the current implementation plan.

## Assignment

You are the Codex/backend agent responsible for the first, read-only phase of the MindfulText growth-system merge. Inspect the existing prototypes and the supported local-inference integration surface, then produce an evidence-backed audit and implementation plan.

**Do not modify either prototype, create migrations, change deployment state, or begin implementation in this phase.** Read applicable `AGENTS.md` files before inspecting each repository. Do not print or copy secret values into the report.

## Repositories in scope

Inspect:

1. `/Users/mgzm-studio/AI-Studio/Projects/Replit/CRM-Sales`
2. `/Users/mgzm-studio/AI-Studio/Projects/Replit/EiyahMind`
3. The supported integration contract in `/Users/mgzm-studio/AI-Studio/Projects/model-dashboard-live`
4. The existing `dev.mindfultext.com` API integration surface, including the separate Replit app that already connects to it, if its repository or safe read-only API documentation is available

For `model-dashboard-live`, inspect only what is necessary to define a supported outbound bridge to its local OpenAI-compatible endpoint and MCP capabilities. It remains the Mac Studio inference broker. Its demo `crm.db` must not become a CRM source of truth.

Treat both Replit apps as prototypes rather than authoritative production data stores. Identify any evidence that contradicts that assumption.

`dev.mindfultext.com` is an existing live-system dependency, not a prototype to replace in this audit. It schedules and connects to the text-messaging system, owns finalized text-message content, and stores the WordPress audio URLs tied to that content. Establish its existing client, API contract, authentication, source-of-truth boundaries, failure modes, and the smallest safe integration boundary for the merged growth app. If its source or documentation is unavailable, record that as a blocking integration unknown rather than guessing or probing a live API with write-capable requests.

## Product and architecture direction

The intended system is:

- one merged CRM-Sales/EiyahMind growth app on a Replit Reserved VM;
- one Replit PostgreSQL database;
- CRM-Sales as the implementation base;
- a separate Replit Autoscale public site consuming an agreed API;
- `dev.mindfultext.com` retained as the scheduler, finalized text-content owner, text-messaging connector, and source of linked WordPress audio URLs;
- PostHog as the detailed web-behavior and masked-session-replay system;
- the growth CRM as the owner of prospects, organizations, campaigns, relationship timelines, sales stages, payments, and joined funnel reporting; and
- `model-dashboard-live` as an external local-inference service accessed through an outbound bridge, not a database.

No Tailscale dependency should be introduced into the MVP request path. Tailscale may be evaluated later for private Mac access. Reassess Mac hosting only after actual usage and cost make it worthwhile.

### Feature boundary

Preserve from CRM-Sales where code quality permits:

- prospects and organizations;
- campaigns, campaign membership, and message variants;
- Unipile invitations, messaging, follow-ups, replies, and webhooks; and
- campaign and outreach analytics.

Evaluate and port only useful EiyahMind relationship-tracking concepts. Plan to remove or defer:

- standalone Eiyah chat UI;
- a separate lead database;
- Google Sheets replacement sync;
- sample data;
- vector search;
- persistent AI chats;
- model selector;
- automatic email summaries; and
- continuous AI-generated tags or next-action fields unless inspection reveals a compelling, non-duplicative need.

Gmail is a new integration boundary unless the audit proves otherwise. The intended behavior is to sync metadata, participants, subject, dates, thread/message IDs, and snippets. Full bodies are retrieved only for an authorized on-demand analysis request. Do not continuously summarize messages or retain duplicate AI summaries.

## Required domain behavior

Model the complete journey:

`prospect → campaign → message variant → tracked visit → page/section engagement → call request/booking → first call → second call → won/lost → Stripe cash received`

Use opaque recipient routes such as `/r/{token}` with no PII in the URL. Preserve a complete touch timeline and support first-touch and last-touch attribution. Forwarded recipient-link activity must not be represented as proof that the original recipient visited.

The unified prospect timeline should be able to contain:

- LinkedIn invitations, messages, replies, and campaign membership;
- website visits and summarized engagement;
- Gmail thread metadata;
- notes and attached deliverables;
- call requests, bookings, and completed calls;
- pipeline-stage changes; and
- Stripe payments.

Do not create a competing text-message-content, scheduler, or audio-URL system in the merged growth CRM. Instead, propose identifiers, read models, and event references needed to connect campaign and engagement context to `dev.mindfultext.com` while keeping its existing content ownership intact.

Sales stages must be customizable and initially seeded with requested, booked, held, second call, won, lost, and cash received.

The first scheduling flow is an attributed call request followed by manual Google Calendar and Zoom scheduling. Roadmap, but do not assume implementation of, Google appointment-page reconciliation and then native availability and booking.

Stripe webhook handling must include signature verification, idempotency, quick acknowledgement, retry tolerance, and asynchronous processing.

## Interfaces to design

Propose one scoped REST/OpenAPI interface plus an MCP-compatible agent bridge. It should provide capabilities equivalent to:

- search/read prospects and organizations;
- read relationship timelines and campaign context;
- retrieve authorized Gmail context on demand;
- add notes and attach deliverables;
- update permitted sales stages;
- request local analysis; and
- inspect experiment and attribution summaries.

Design separate read, draft/edit, experiment, campaign, publish, and administrative scopes. Mark has owner access; agents receive task-relevant scopes. Explain how service credentials, human sessions, webhook authentication, and token rotation should work. Show that unauthorized actions fail without introducing a manual approval gate into every normal action.

The public-site contract must support:

- recipient-link resolution and attribution persistence;
- weighted-random and campaign-assigned variant exposure;
- page and section engagement summaries derived from PostHog;
- CTA, form/call-request, blog, and audio events;
- first- and last-touch reports with forwarding caveats;
- flexible experiment records whose hypothesis, audience, variants, dates, metrics, notes, and result are optional; and
- graceful behavior when PostHog, the CRM, or the Mac AI bridge is temporarily unavailable.

For the Mac bridge, design an outbound workflow in which an authorized local agent or harness fetches scoped CRM context, calls `localhost:7070/v1/chat/completions`, and returns a note or deliverable. MVP analysis is on demand. Manually queued jobs may follow. Background analysis should wait until recurring work proves useful. Paid-model fallback is never automatic: the agent reports the local limitation and obtains Mark’s explicit approval for the specific paid call.

## Audit procedure

Inspect and cite file paths and relevant symbols for:

- application frameworks and runtime versions;
- directory and module structure;
- database engines, schemas, migrations, seeds, and duplicate entities;
- APIs, route handlers, jobs, webhook handlers, and generated OpenAPI material;
- authentication, authorization, secret handling, and tenancy assumptions;
- Unipile, Gmail or Sheets, Stripe, PostHog, and AI integrations;
- the `dev.mindfultext.com` client/API integration, its existing Replit client, its text-content and scheduling ownership, and its WordPress audio-URL linkage;
- deployment and Replit configuration;
- tests, linting, type checking, logging, retries, observability, and failure handling;
- data export/import paths and migration risks; and
- dead, sample, insecure, or tightly coupled code.

Run only safe, read-only diagnostics. If a useful check would write files, connect to a live service, mutate data, reveal secrets, or require installing dependencies, describe it as a follow-up instead of running it.

## Required report

Return one founder-readable report with these sections:

1. **Executive findings** — what exists, what is reliable, and the highest-risk unknowns.
2. **Current architecture** — each app’s framework, modules, schema, APIs, integrations, authentication, deployment, and code health, with evidence.
3. **Feature disposition matrix** — feature by feature: keep, port, rewrite, defer, or remove; identify the source and rationale.
4. **Merged domain and data model** — entities, ownership, identifiers, timeline/event model, attribution, experiment records, stages, payments, attachments, audit fields, and retention boundaries.
5. **Migration strategy** — how to reconcile prototype schemas, deduplicate or discard prototype data, preserve useful history, seed stages, and verify the result. Separate schema migration from any later production-data migration.
6. **REST/OpenAPI contract** — proposed endpoints, payloads, errors, authentication, scopes, idempotency, pagination, and versioning. Include enough specificity for the public-site agent to implement against it.
7. **MCP-compatible agent contract** — tools/capabilities, inputs, outputs, scope checks, auditability, and the Mac local-analysis request/return flow.
8. **Integration flows** — sequence descriptions for Unipile, PostHog, Gmail, Stripe, `dev.mindfultext.com`, the public site, and the Mac bridge. State the source of truth at each boundary.
9. **Deployment plan** — Reserved VM, Replit PostgreSQL, environments, secrets, migrations, workers/queues, backups, health checks, and observability.
10. **Implementation sequence** — small dependency-ordered milestones, including the point where the frontend and backend agents reconcile the contract.
11. **Test plan** — unit, integration, contract, authorization, webhook, degradation, migration, and synthetic end-to-end funnel tests.
12. **Overbuilding risks** — explicitly identify features, infrastructure, automation, and abstractions that should not enter the MVP.
13. **Open questions and recommendation boundaries** — distinguish facts from recommendations and decisions that remain Mark’s.

Include a concise proposed OpenAPI surface and data-model diagram or table where it materially improves clarity. Do not claim that code is reusable until inspection supports it.

## Completion and handoff

Stop after delivering the read-only report. The report will be given to the Replit public-site agent before implementation. Highlight any API assumption that the frontend agent must validate against its existing project. Implementation begins only after the two agents reconcile the contract and Mark can review the resulting architecture recommendation.
