# MindfulText Growth and Experimentation System

Last updated: 2026-08-13 12:43:56 PDT — edited by: Codex

> **Document role:** Product direction and hypotheses, not execution status.
> The founder-facing roadmap is `planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md`;
> detailed execution status and completion evidence belong in the synchronized
> `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md`.

## Document purpose

This brief defines the current direction for a practical growth-learning system. It is a planning package, not a decision proxy: it separates confirmed facts, founder-provided direction, recommendations, hypotheses, and unresolved questions so Mark can interpret the evidence and make decisions as the system develops.

The first goal is not to declare a winning message or hit an arbitrary conversion rate. It is to connect outreach, website behavior, conversations, sales stages, and revenue well enough that Mark and authorized agents can inspect what happened and learn from it.

## Confirmed current facts

- WordPress hosts the audio files used by MindfulText; it is not the owner of finalized text-message content.
- `dev.mindfultext.com` is a separate existing web app. It schedules and connects to the text-messaging system, holds finalized text-message content, and stores the WordPress audio URLs associated with that content.
- The connector that currently runs on Replit and connects to the `dev.mindfultext.com` API has a confirmed GitHub/Vercel destination, `dev-mindfultext-connector`, under [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]]. Its API contract, authorization model, data ownership, and clean migration boundary remain to be established; its delivery responsibilities do not change merely because its source/host changes.
- PostHog and Stripe remain part of the intended system.
- `/Users/mgzm-studio/AI-Studio/Projects/Replit/CRM-Sales` and `/Users/mgzm-studio/AI-Studio/Projects/Replit/EiyahMind` are prototypes, not authoritative production data stores.
- CRM-Sales already contains the stronger implementation base for prospects, campaigns, message variants, Unipile messaging, follow-ups, replies, webhooks, and campaign analytics.
- EiyahMind contains relationship-tracking ideas worth evaluating, but its standalone chat interface and separate lead system are not the desired product direction.
- `/Users/mgzm-studio/AI-Studio/Projects/model-dashboard-live` is the local inference broker on the Mac Studio. Its demo `crm.db` is not another source of truth for the growth system.
- The local broker exposes an OpenAI-compatible endpoint at `localhost:7070/v1/chat/completions` and local-model access through MCP.
- Growth Ops is approved for Vercel Pro plus Neon Launch. The planning baseline is
  Vercel's `$20/month` Pro platform fee and Neon usage-based Launch costs
  (Neon's published typical intermittent 1 GB database estimate is about
  `$15/month`); set spend limits and confirm live pricing before production.

## Founder-provided direction

### Product and initial audience

For the first four to six weeks, focus distribution and learning on CCBHC decision-makers. Keep a universal homepage default, but allow tracked campaigns and audience segments to change selected modules or route visitors to a dedicated CCBHC page. Staff-direct B2C2B pages can follow after this initial focus.

Candidate product sentences to test include:

- **Universal:** MindfulText delivers brief mindfulness practices by text — a protected pause people actually use.
- **CCBHC buyer:** MindfulText is between-visit support by text: no app, no charting change, no EHR integration.
- **Staff and clients:** MindfulText helps CCBHCs give staff and clients a low-lift daily reset without adding workflow.

These are test candidates, not settled claims. Additional language worth testing includes SMS-native or text-first, brief or micro-practices, between sessions or visits, low lift and high follow-through, no app or login, no new clinician work, sticky micro-mindfulness, text-native micro-mindfulness, pocket micro-mindfulness, and text-sized mindfulness.

Healthcare-facing language should make the boundary understandable: MindfulText is not therapy or crisis support. Prefer plain operational language such as “doesn’t change charting or clinician notes” over broad “clinical workflow” language.

The current CCBHC objection pattern is:

1. No app to add.
2. No charting or EHR change.
3. No new clinician workflow.

Different members of a buying group may respond to different evidence:

| Buyer lens | Candidate concerns and language to test |
| --- | --- |
| CEO / COO | Low lift, staff retention, client engagement, inexpensive deployment, pride and morale |
| Clinical leadership | Not therapy, not crisis support, between-visit support |
| Quality / compliance | Engagement evidence, no new documentation burden |
| CIO / health IT | No integration project |

Useful brand anchors include warm authority, a safety net between sessions, “tested by healthcare professionals, built for everyone,” and the prevention framing behind “an ounce of prevention is worth a pound of cure.” Any public proof or efficacy wording still needs to be factually supportable; the software does not need a separate claims-approval feature.

One copy pattern to test is `[outcome] for [audience] without [app, charting, or integration]`, for example: “Between-visit mindfulness support for CCBHC clients and staff — without another app, login, or EHR project.”

### Business outcome and measurement ladder

The system should show several levels of behavior rather than collapse success into one conversion:

1. A recipient arrives from a known campaign and message variant.
2. The visitor actively engages: time, scroll, section exposure and dwell, navigation, article reading, or audio use.
3. The visitor starts or completes a call request.
4. A first call is booked and held.
5. A second call occurs.
6. The opportunity is won or lost.
7. Cash is received through Stripe.

A booked call is the strongest near-term website conversion. A second call, close, and cash received are progressively stronger business outcomes. Engagement metrics are diagnostic evidence that helps explain those outcomes; they are not merely vanity metrics.

### Acquisition and campaign structure

SEO articles and social or LinkedIn campaigns should run concurrently. Outreach messages in the growth CRM should be connected to campaigns, message variants, tracked traffic, engagement, and downstream conversion so Mark can compare the full journey rather than isolated channel dashboards.

Campaigns may send recipients to the universal homepage, a segment-aware homepage experience, or a dedicated landing page. The system should accommodate LinkedIn first without assuming it is the only future acquisition channel.

## Recommendations with rationale

### Public site and page system

- Deploy a new public site from private GitHub repository `mindfultext-web` through Vercel on a public beta subdomain alongside the existing live delivery system: `dev.mindfultext.com` for scheduling and finalized text content, plus WordPress for audio hosting. This creates a reversible parallel path for learning before any main-domain cutover.
- Include a universal homepage, optional campaign- or segment-aware modules, a dedicated CCBHC decision-maker page, SEO blog and article templates, and guided page templates with sections that can be reordered, edited, or hidden.
- Use React Bits Pro components and blocks through the Replit project’s installed skill. Verify the Pro license and secret without committing the key, inspect each installed block’s actual export before importing it, and provide reduced-motion and lightweight mobile fallbacks for heavy animation.
- Keep month-one public content code/config-managed. Do not include practices, audio, uploads, a legacy catalog, or content administration in the month-one site. Treat cataloging and migration as post-beta work.
- Treat Typeform, Mailchimp, and Bunny as optional rather than inherited dependencies. Evaluate any later WordPress migration in concert with `dev.mindfultext.com` so audio URLs remain correctly associated with their finalized message content. Keep PostHog and Stripe.

### Flexible experiments

Experiment records should help organize learning, not gate publication. They may contain a hypothesis, audience, page or message variants, dates, metrics, notes, and a result, but those fields can remain optional while an idea is developing.

Support both:

- weighted random variants for comparable traffic; and
- campaign-assigned variants when the message and page experience are intentionally paired.

Do not enforce one experiment at a time, a fixed 50/50 split, minimum traffic, or a universal stop rule. Mark can choose rigor appropriate to traffic, risk, and the decision. Preserve exposure history and label low-volume findings as directional when appropriate.

### Attribution and funnel

Use opaque recipient routes such as `/r/{token}` with no personally identifying information in the URL. The intended journey is:

`prospect → campaign → message variant → tracked visit → page/section engagement → call request/booking → first call → second call → won/lost → Stripe cash received`

Preserve the complete touch timeline and show both first-touch and last-touch attribution. A forwarded recipient link is attributed-link activity, not proof that the original recipient visited; the interface and reports should say so.

PostHog should own detailed web behavior and masked session replay. The growth CRM should own prospects, campaigns, sales stages, payments, and joined funnel reporting. Track:

- active engaged time;
- maximum scroll and 25%, 50%, 75%, and 90% thresholds;
- section visibility and dwell;
- CTA impressions and clicks;
- navigation and exit paths;
- form and call-request starts and completions;
- blog reading depth;
- audio starts, milestones, and completions; and
- booking and sales-stage events.

Use a subtle privacy notice, mask sensitive inputs, provide opt-out support, and honor Global Privacy Control. Avoid sending sensitive form values, email bodies, or health-related inferences to PostHog.

Begin with an attributed call-request flow followed by manual Google Calendar and Zoom scheduling. Next, consider Google appointment-page reconciliation. Native availability and booking can follow only if it becomes worthwhile.

Ingest Stripe payment events with signature verification, idempotency, quick acknowledgement, and asynchronous processing.

### One growth CRM and relationship timeline

Build a new clean operations application and port selected concepts rather than merging either prototype wholesale. Use CRM-Sales as the source for prospect, campaign, variant, and Unipile concepts; use Neon Launch with separate production and development/test PostgreSQL environments.

Preserve from CRM-Sales:

- prospects and organizations;
- campaigns, membership, and message variants;
- Unipile messaging, follow-ups, replies, and webhooks; and
- campaign and outreach analytics.

Port only useful relationship-tracking concepts from EiyahMind. Remove or defer its standalone chat UI, separate lead database, Google Sheets replacement sync, sample data, vector search, persistent AI chats, model selector, and automatic email summaries.

Create one prospect timeline containing LinkedIn invitations, messages and replies, campaign membership, summarized website engagement, Gmail thread metadata, notes and attached deliverables, call requests and bookings, completed calls, stage changes, and Stripe payments.

For Gmail, sync metadata, participants, subjects, dates, identifiers, and snippets. Retrieve full message bodies only for an authorized on-demand analysis request. Do not continuously summarize email or retain duplicate AI summaries.

Sales stages should be customizable and seeded with: requested, booked, held, second call, won, lost, and cash received.

### Agent and local-model access

Expose a scoped REST/OpenAPI interface plus an MCP-compatible agent bridge. Capabilities should include:

- searching and reading prospects and organizations;
- reading relationship timelines and campaign context;
- retrieving authorized Gmail context on demand;
- adding notes and attaching deliverables;
- updating permitted sales stages;
- requesting local analysis; and
- inspecting experiment and attribution summaries.

Use separate read, draft/edit, experiment, campaign, publish, and administrative scopes. Mark has owner access; each agent receives only the scopes relevant to its task. Scopes should prevent unrelated actions without turning ordinary publishing or experimentation into a founder-approval workflow.

Keep `model-dashboard-live` as the Mac Studio inference broker. Add an outbound local bridge so an authorized agent or harness can fetch CRM context, invoke `localhost:7070/v1/chat/completions`, and return a note or deliverable to the growth app. Do not add the dashboard’s demo `crm.db` as another data store.

No Tailscale dependency is needed in the MVP request path. Tailscale may support private Mac access or a later connectivity experiment.

Phase local AI use as follows:

1. MVP: on-demand analysis initiated through Codex or another authorized harness.
2. Next: manually queued analysis jobs.
3. Later: background processing only for recurring work proven useful.
4. Paid-model fallback is never automatic. The agent reports the local limitation and obtains Mark’s explicit approval for that specific paid call.

### Deployment shape

- Public beta site: Vercel, deployed from private GitHub repository `mindfultext-web`.
- Clean operations app and API: Vercel Pro, deployed from the canonical private GitHub repository.
- Existing delivery connector: confirmed GitHub/Vercel destination `dev-mindfultext-connector`; Replit remains only the current migration source/placement until a separately approved cutover.
- Data: Neon Launch with separate production and development/test PostgreSQL environments.
- Workflow execution: existing DigitalOcean n8n, calling scoped Growth Ops APIs and never the database directly.
- Local inference: the always-on Mac Studio through the outbound bridge.
- Existing delivery system during beta: `dev.mindfultext.com` remains the scheduler, text-content, and messaging connector; WordPress remains the audio host. [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]] changes the connector's intended source/host to GitHub/Vercel, not these delivery responsibilities or live behavior.

This split keeps the public site independently scalable, gives the CRM managed database durability, uses n8n for durable workflow execution, and avoids premature Mac-hosting complexity. Reassess hosting only after real usage makes a change material.

## Hypotheses to test

The canonical growth-hypothesis registry remains context, not a two-row limit on website experiments.

| Record | Existing hypothesis area | Current relationship to this system |
| --- | --- | --- |
| [[growth/HYPOTHESES|GH-001]] | Blank intake pattern | Context and template for new hypotheses |
| [[growth/HYPOTHESES|GH-002]] | Elevated-stress LCSWs | Adjacent audience insight |
| [[growth/HYPOTHESES|GH-004]] | Community behavioral-health workforce reset | Immediately relevant to the CCBHC focus |
| [[growth/HYPOTHESES|GH-005]] | Reflective onboarding | Adjacent page and activation concept |
| [[growth/HYPOTHESES|GH-007]] | Event-triggered outreach | Later automation and timing exploration |

New messaging, page, offer, audience, channel, and funnel hypotheses may be created without forcing them into the structure of the existing records. Early examples include:

- Which of the candidate product sentences produces stronger CCBHC engagement and call intent?
- Does campaign-message continuity on a CCBHC page outperform a universal homepage visit?
- Which sections predict call requests, and which cause exits?
- Does an audio practice create meaningful engagement before a sales conversation?
- Which buyer lens responds to the no-app, no-charting, no-EHR objection pattern?
- Do SEO readers and outbound recipients follow meaningfully different paths to a call?

## Directional delivery sequence

1. Use the completed backend and connector audits as evidence beneath the master checklist.
2. Create the clean private operations foundation and freeze the first growth API contract.
3. Have the Replit site agent inspect the exported Next.js 16/React 19 project and report its structure, installed React Bits assets, and constraints.
4. Reconcile backend and public-site assumptions once before feature implementation.
5. Confirm the visual direction and page system, then allow the agents to build autonomously within the agreed contract.
6. Contract-test the public site against the clean operations API and run the end-to-end validation suite.
7. Launch on a parallel public beta subdomain while the existing `dev.mindfultext.com` and WordPress delivery components remain in service.
8. Treat read-only cataloging, local personalized drafting, and any legacy publishing capability as separately gated post-beta workstreams.

## Month-one success criteria

Month-one success is an operational growth-hypothesis tracking system:

- campaigns and message variants can send attributed traffic to the homepage or landing pages;
- page, section, article, CTA, form, and audio engagement is visible;
- call requests, bookings, later sales stages, and Stripe revenue can be connected to the journey;
- first-touch, last-touch, and forwarded-link caveats are understandable;
- Mark and authorized agents can query the resulting campaign and relationship context; and
- the system provides evidence Mark can interpret without automatically declaring a strategy winner.

No arbitrary conversion target is required before baseline traffic and funnel behavior are known.

## Verification and rollout

- Contract-test the public site against the clean operations API.
- Test recipient-link creation, redirect, attribution persistence, forwarding behavior, and first- and last-touch reporting.
- Test weighted-random and campaign-assigned variant exposure.
- Test opt-out, Global Privacy Control, sensitive-input masking, and replay behavior.
- Run a synthetic funnel from campaign and message through payment.
- Test Gmail metadata sync and authorized on-demand body retrieval.
- Test every agent scope and verify unauthorized actions fail.
- Verify the site remains usable when PostHog, the CRM, or the Mac AI bridge is temporarily unavailable.
- Test webhook signatures, idempotency, retries, quick acknowledgement, and asynchronous handling.
- Run mobile, accessibility, reduced-motion, SEO, and performance checks on React Bits sections.
- Keep the existing `dev.mindfultext.com` scheduling/content connector and WordPress audio host in service until the growth MVP and any later audio migration are verified.

## Open design questions

These are implementation questions to resolve from evidence, not defaults the brief silently chooses:

- What is the exact legacy Replit public-site project's framework and installed React Bits Pro inventory that may be safely reused as visual reference?
- Which beta subdomain should be used?
- What are the actual schemas, authentication mechanisms, and code-health risks in the two prototype apps?
- Which Replit app currently connects to the `dev.mindfultext.com` API, and which text-content, scheduling, messaging, and audio-URL operations does that API own?
- Which EiyahMind relationship concepts are valuable after the code and data model are inspected?
- What is the smallest stable API contract that both apps can implement without duplicating CRM state?
- Which Gmail authorization and retention settings fit the on-demand access model?
- Which fields should the first call-request form collect, and how should identity be reconciled when a link is forwarded?
- Which homepage modules should be campaign-aware in the first test, and which should remain universal?
- Which proof assets and statements are currently supportable for CCBHC buyers?
- What baseline traffic and behavior emerge during the first month, and which experiments then deserve deeper rigor?
