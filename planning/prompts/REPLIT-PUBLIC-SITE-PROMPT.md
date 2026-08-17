# Copy-ready prompt: Replit public growth site

> **Retired prompt — do not run.** This prompt predates the approved clean
> `mindfultext-web`/Vercel direction in
> [[decisions/2026-08-11-public-site-clean-replacement|DR-42]] and
> [[decisions/2026-08-11-public-site-vercel-hosting|DR-44]], and its audience,
> copy, funnel, and deployment assumptions are stale. Use the
> [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Ordered Task Map]] and
> [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Master Checklist]] instead.

## Assignment

You are the Replit agent responsible for inspecting, planning, and then building the MindfulText public growth site. The current site project is not yet understood. Do not choose a framework, replace its structure, or invent an application data model until you inspect what actually exists.

You will receive the backend audit and proposed REST/OpenAPI contract produced from CRM-Sales, EiyahMind, and `model-dashboard-live`. Treat that report as a required input. Reconcile its assumptions with the current public-site project before implementation. The public site must consume the agreed growth API rather than creating a second CRM or prospect database.

**Backend report:** `[ATTACH OR PASTE THE COMPLETED BACKEND AUDIT HERE]`

## Product context

For the first four to six weeks, the primary learning audience is CCBHC decision-makers. The site still needs a universal homepage default. Tracked campaigns may alter selected homepage modules or route to a dedicated CCBHC page. Staff-direct B2C2B pages can follow later.

Candidate product sentences to support as variants include:

- **Universal:** MindfulText delivers brief mindfulness practices by text — a protected pause people actually use.
- **CCBHC buyer:** MindfulText is between-visit support by text: no app, no charting change, no EHR integration.
- **Staff and clients:** MindfulText helps CCBHCs give staff and clients a low-lift daily reset without adding workflow.

These are hypotheses, not automatically approved final claims. The site should make the non-clinical boundary understandable without making MindfulText sound defensive: it is not therapy or crisis support, and it does not require a new app, charting process, EHR integration, or clinician workflow.

SEO publishing and LinkedIn/social campaigns will run concurrently. Campaigns and outreach-message variants need to connect to website engagement, call requests, later sales stages, and Stripe revenue.

## Agreed deployment and system boundary

- Deploy the public beta through Replit Autoscale on a public beta subdomain.
- Keep the existing delivery system in service during beta: `dev.mindfultext.com` schedules and connects to the text-messaging system, owns finalized text-message content, and stores the WordPress audio URLs associated with that content; WordPress hosts the audio files.
- A new clean growth operations app/API will run separately on a Replit Reserved VM with a fresh production database and a separate development/test database.
- PostHog owns detailed web behavior and masked session replay.
- The growth CRM owns prospects, campaigns, relationship timelines, sales stages, payments, experiment metadata, and joined reporting.
- Stripe and PostHog are required. Do not presume WordPress, Typeform, Mailchimp, or Bunny are runtime dependencies for the new site.
- Do not include practices, audio, uploads, a legacy catalog, or content administration in month one. Keep page content code/config-managed and defer all legacy-content work until after beta acceptance.

## Checkpoint 1: inspect and reconcile architecture

Before changing code, inspect the project and report:

- applicable `AGENTS.md` and local skill instructions;
- current framework, runtime, package manager, directory structure, routes, components, content model, and styling system;
- existing hosting, Replit, database, environment, authentication, and deployment configuration;
- current pages, forms, analytics, SEO, audio/media handling, and administrative UI;
- the existing `dev.mindfultext.com` integration contract supplied by the backend audit: ownership of finalized text-message content, scheduling and messaging operations, WordPress audio URLs, API authorization, and failure behavior;
- installed React Bits Pro assets, the local React Bits skill, and how license secrets are expected to be supplied;
- test, lint, type-check, accessibility, and performance tooling;
- conflicts between the current project and the backend report; and
- your recommended public architecture, including what can stay, what needs refactoring, and what should be deferred.

Read the installed React Bits Pro skill completely before proposing component use. Verify that the Pro license/secret is configured, never print or commit the key, and inspect each installed block’s actual export before importing it.

At this checkpoint, propose the frontend-to-backend API mapping and list every contract mismatch or open assumption. Pause for architecture/API reconciliation. Do not begin a restructure or full build before this reconciliation.

## Required page and content system

After the contract is reconciled, propose and then implement:

- a universal homepage;
- optional campaign- and segment-aware homepage modules;
- a dedicated CCBHC decision-maker landing page;
- an SEO blog index and article templates;
- guided page templates whose sections can be reordered, edited, and hidden;
- reusable hero, proof, benefit, objection, audio, CTA, FAQ, article, and boundary modules;
- an attributed call-request flow;
- campaign-aware modules and recipient-link handling through the agreed API; and
- a stateless, server-mediated call-request flow.

Avoid building a general-purpose page builder. Guided templates and controlled modules should provide flexibility without recreating a full CMS.

Remove the prototype's independent PostgreSQL content store, public admin UI,
content-write route, and upload route from the MVP. Do not build a competing
scheduler, text-message store, media registry, CRM model, or public content
administration system.

Support both weighted-random variants and campaign-assigned variants. Experiment records should remain flexible: hypothesis, audience, variants, dates, metrics, notes, and result are useful optional fields, not publishing gates. Do not enforce one test at a time, a 50/50 split, minimum traffic, or an automatic winner.

## Checkpoint 2: visual and page-system confirmation

Before implementing the complete page set, present:

- the proposed information architecture and navigation;
- wireframes or representative page compositions for the homepage, CCBHC page, article, and guided template;
- the global design tokens and controlled campaign variation model;
- the exact React Bits Pro blocks or components proposed for each page;
- reduced-motion behavior and lightweight mobile fallbacks for animated sections; and
- the code/config page-content model.

Pause for visual and page-system confirmation. After confirmation, work autonomously within the agreed architecture and visual direction until pre-launch validation.

## Attribution, events, and privacy

Implement the agreed API contract for the journey:

`prospect → campaign → message variant → tracked visit → page/section engagement → call request/booking → first call → second call → won/lost → Stripe cash received`

Recipient links use opaque routes such as `/r/{token}` with no PII in the URL. Preserve attribution across the visit as the contract specifies. Forwarded-link activity must be labeled as activity on an attributed link, not proof that the original recipient visited.

Capture through PostHog, using stable names and contract-aligned properties:

- active engaged time;
- maximum scroll and 25%, 50%, 75%, and 90% thresholds;
- section visibility and dwell;
- CTA impressions and clicks;
- navigation and exit paths;
- form/call-request starts and completions;
- blog reading depth;
- booking and relevant sales-stage events where the public site is the source.

Use a subtle privacy notice, mask sensitive inputs, provide opt-out support, and honor Global Privacy Control. Never send sensitive form values, email content, or inferred health information to PostHog. Make analytics failure non-blocking.

Start with an attributed call request. Mark will manually arrange Google Calendar and Zoom details. Do not build native scheduling in the MVP. Google appointment-page reconciliation is a roadmap item.

## Implementation expectations

- Use the reconciled backend contract; do not invent duplicate prospect, campaign, experiment, or sales-stage stores.
- Generate or consume typed API clients from the agreed OpenAPI contract where practical.
- Make CRM, PostHog, and Mac-bridge outages degrade gracefully. The public content and call-request path should fail clearly and safely rather than blanking the site.
- Keep secrets server-side and out of version control, browser bundles, logs, and screenshots.
- Preserve accessibility and semantic HTML when adding animation.
- Provide reduced-motion behavior and simpler mobile treatments for heavy React Bits effects.
- Build SEO metadata, canonical URLs, social previews, sitemap/robots behavior, and structured article data appropriate to the beta environment.
- Optimize images, fonts, scripts, and animation so the page remains usable on ordinary mobile connections.
- Add automated tests at the unit, component, integration, and API-contract levels in proportion to risk.
- Maintain a concise implementation record of decisions, contract deviations, and deferred work.

## Checkpoint 3: pre-launch validation

Before public beta launch, stop and provide evidence for:

- contract tests against the clean growth operations API;
- recipient-link creation, redirect, attribution persistence, forwarding behavior, and first-/last-touch reporting;
- weighted-random and campaign-assigned variant exposure;
- opt-out, Global Privacy Control, sensitive-input masking, and session-replay behavior;
- a synthetic funnel from campaign and message through call request and a test payment/stage update;
- graceful behavior when PostHog, the CRM, or the Mac AI bridge is unavailable;
- webhook-facing UI behavior for delayed, repeated, or failed downstream updates;
- mobile and cross-browser behavior;
- keyboard navigation, screen-reader semantics, color contrast, and reduced motion;
- SEO, structured data, Core Web Vitals or equivalent performance evidence; and
- beta environment, secret, authentication, rollback, health-check, and monitoring readiness.

Report failures and material tradeoffs plainly. Do not switch the primary domain at this checkpoint.

## Acceptance boundary and rollout

The first release is accepted when campaigns and message variants can send attributed traffic to the homepage or landing pages; engagement is visible; call requests and later CRM/revenue stages can be connected; and Mark or an authorized agent can query the resulting context.

Launch on the agreed public beta subdomain. Keep `dev.mindfultext.com` as the scheduler/text-content/messaging connector and WordPress as the audio host during beta. Legacy cataloging, audio migration, and publishing are separate post-beta workstreams.

## Working style

Separate observed facts, recommendations, assumptions, and unresolved questions in your reports. Make implementation choices autonomously inside the reconciled plan. Pause only at:

1. architecture and API reconciliation;
2. visual and page-system confirmation; and
3. pre-launch validation.

Do not interpret a recommendation as a founder decision, and do not add approval machinery that the product does not need.
