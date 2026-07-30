# MindfulText Website Modernization — Founder Playbook & Handoff

Last updated: 2026-07-21 — prepared by: Codex

## Purpose

Provide a nimble, pre-seed plan for improving `mindfultext.com` with AI while
keeping the existing MindfulText application at `dev.mindfultext.com` out of
scope. This is a working playbook, not approval to make live-site, billing,
email, DNS, or application changes.

## Operating decision

**Keep WordPress for now; replace Thrive incrementally.**

Do not launch a separate CMS, database, or application frontend until the
current WordPress setup becomes a concrete blocker. Build a staging copy,
use Claude Design for page and component direction, and use one primary coding
agent to create a lightweight custom theme and/or Gutenberg blocks. Preserve
working URLs and integrations as each page is replaced.

This optimizes for founder speed, low incremental cost, and reversible learning
rather than a broad platform migration.

## Current architecture and boundaries

| Surface | Current role | Near-term treatment |
| --- | --- | --- |
| `mindfultext.com` | Public marketing website; WordPress + Thrive | Improve incrementally on WordPress. |
| Bluehost | WordPress hosting, database, and uploaded media | Retain. Confirm staging and backup capability. |
| Bunny.net | Cached/fast asset delivery | Retain; it complements rather than replaces WordPress storage. |
| Stripe | Checkout, subscriptions, and customer portal | Retain existing links and customer state. No billing migration. |
| Typeform | Selected inbound/application flows | Replace only where a custom site form is clearly preferable. |
| Mailchimp | Newsletter/form workflow | Evaluate replacement with Resend; do not interrupt existing list or unsubscribe handling. |
| PostHog | Existing product/web analytics | Retain as the one early-stage analytics and lightweight experiment tool. |
| `dev.mindfultext.com` | Existing product application | Explicitly out of scope: no feature, auth, data-model, or deployment work. |

## Lean tool set

| Capability | Tool / choice | Why it is in scope now |
| --- | --- | --- |
| Version history | Local Git | Enables reviewable, reversible AI-assisted theme/block changes. A remote Git host is optional now but should be added as an off-device backup later. |
| Design | Claude Design | Explore page directions, responsive layouts, reusable components, and clear experiment hypotheses before implementation. |
| Implementation | Claude Code **or** Codex | Use one primary coding agent per task/branch to avoid conflicting edits. |
| Content and page editing | WordPress block editor + custom blocks/theme | Keeps the existing editing and content system while exiting Thrive gradually. |
| Hosting, database, media | Bluehost + WordPress | Already covers the marketing site; no Payload, PostgreSQL, or separate media store is required now. |
| Asset delivery | Bunny.net | Keep the existing fast delivery path. |
| Payments | Existing Stripe setup | Preserve checkout, subscriptions, and customer portal. |
| Forms and email | Custom WordPress/site forms + Resend | Candidate replacement for Typeform and Mailchimp. Use spam protection and explicit consent. |
| Analytics and lightweight experiments | Existing PostHog account | Track page views, key CTA clicks, form submits, and one simple variant at a time. Do not add GrowthBook or Umami now. |
| Spam protection | Cloudflare Turnstile or equivalent | Protect custom public forms without adding a large form vendor. |
| Quality checks | Playwright, Lighthouse CI, axe-core | Open-source browser, performance, and accessibility checks before publishing a changed page. |
| Backup and recovery | Independent WordPress/database/media backup + Git backup | Makes any page or host change recoverable. Test restores, not only backup creation. |

## Email and form direction

Use **Resend first** as the candidate consolidation layer:

- Transactional: contact-form notifications, confirmations, and internal
  alerts.
- Marketing: newsletter broadcasts, product updates, and consented segments.
- Audience: contacts, topics/preferences, unsubscribes, and simple segments.

Do not make GMass the system of record for subscribers, consent, or
newsletters. It may remain useful for founder-led one-to-one outreach.

Do not replace Mailchimp or Typeform until the replacement has been tested on
staging with consent, delivery, unsubscribe, spam, and notification paths.
For a custom form, capture only data necessary for the requested follow-up;
avoid patient, clinical, or sensitive personal data.

## Measurement and experimentation

Use PostHog as the single source for early website learning.

1. Establish a baseline for each new or replaced page: page view, primary CTA
   click, form start, form submit, and outbound Stripe click where applicable.
2. Run only one major page test at a time; use two variants and one primary
   conversion signal.
3. Record the hypothesis, audience, date range, traffic volume, change, and
   observed result in the repository.
4. Treat low-traffic results as directional founder evidence, not statistically
   conclusive proof.
5. Remove losing/obsolete variants after review so experiments do not become
   permanent site complexity.

Initial tests should focus on meaningful differences: audience routing,
organization vs. individual framing, proof placement, CTA wording, or offer
structure—not cosmetic changes such as button shades.

## Delivery sequence

### 1. Protect the current system

- Confirm admin access for WordPress, Bluehost, Bunny.net, Stripe, Typeform,
  Mailchimp, PostHog, domain/DNS, and the existing app link destinations.
- Create and verify an independent backup of WordPress files, database, media,
  and current key configuration.
- Create a staging copy that cannot send production email, charge Stripe, or
  alter the live site.
- Initialize a local Git repository for custom theme/block code; do not commit
  credentials, exports containing personal data, or production secrets.

### 2. Establish the design system

- Give Claude Design approved logos, typography, colors, screenshots, target
  audiences, proof material, and content/safety boundaries.
- Produce three coherent directions for the marketing site, then choose one.
- Convert the chosen direction into a small reusable component inventory:
  navigation, hero, proof, CTA, pricing, forms, article cards, and footer.
- Define mobile behavior and accessibility expectations before coding pages.

### 3. Replace Thrive safely

- Rebuild one high-value page or landing path at a time using a custom WordPress
  template and/or Gutenberg blocks.
- Preserve the current URL, title, description, canonical URL, relevant schema,
  analytics events, and working CTA destination.
- Compare the staging page against the live page on desktop and mobile.
- Publish only after functional, performance, and accessibility checks pass.

Start with a new organization-facing landing page or another net-new page.
Avoid replacing the homepage first; it is the least reversible and affects all
audiences.

### 4. Modernize forms and email

- Build one custom form on staging with Turnstile, server-side validation,
  consent text, confirmation state, internal notification, and a safe error
  state.
- Connect it to Resend in a test environment.
- Verify delivery, unsubscribe/preferences where marketing consent applies, and
  reporting.
- Migrate one Typeform/Mailchimp flow at a time only after parity is verified.

### 5. Learn and iterate

- Add the five PostHog baseline events to the new page.
- Launch a single hypothesis-driven variant only when enough relevant traffic
  exists to learn from it.
- Keep a short decision log for each experiment and page replacement.

## Explicit deferrals

Do **not** add these unless a later decision identifies a concrete need:

- Next.js, Astro, Payload CMS, PostgreSQL, or a headless WordPress frontend.
- GrowthBook, Umami, or a second analytics/experimentation system.
- A new subscriber portal, organization portal, authentication, or custom app
  database.
- Stripe webhooks, entitlement logic, or billing migration.
- Rebuilding `dev.mindfultext.com` or the texting engine.
- Self-hosting the public production site on a Mac Studio or MacBook Air.

The Macs are suitable for development, staging, local experimentation, and
backup work. Public self-hosting transfers uptime, security, networking,
monitoring, and recovery responsibility to the founder; it is not the current
lowest-effort choice while Bluehost is operating.

## Handoff checklist

Complete or mark each item before authorizing implementation work.

| Item | Owner | Status | Notes |
| --- | --- | --- | --- |
| WordPress administrator access confirmed | Mark | ☐ | Include theme/plugin and staging access. |
| Bluehost access and backup/staging capability confirmed | Mark | ☐ | Confirm database and file restore path. |
| Bunny.net access confirmed | Mark | ☐ | Record current pull zone/storage configuration. |
| Domain/DNS access confirmed | Mark | ☐ | No DNS change without explicit approval. |
| Stripe access and current flow inventory confirmed | Mark | ☐ | Preserve customer state and existing payment links. |
| Typeform/Mailchimp ownership and export path confirmed | Mark | ☐ | Export only in line with consent/privacy obligations. |
| PostHog project access confirmed | Mark | ☐ | Identify current website events, if any. |
| Resend account/domain decision made | Mark | ☐ | Prefer a test domain/environment first. |
| Approved brand assets and claims inventory supplied | Mark | ☐ | Do not invent proof, certifications, or outcomes. |
| Local Git location created and backup destination chosen | Mark / implementation agent | ☐ | Remote host is optional but off-device backup is not. |
| Staging environment isolated from production | Implementation agent | ☐ | No live sends, charges, or DNS changes. |
| First page and single success metric selected | Mark | ☐ | Prefer a net-new organization landing page. |

## Definition of done for each page

A page replacement is complete only when it:

- Matches the approved design direction on desktop and mobile.
- Uses editable WordPress content/blocks where ordinary future edits are
  expected.
- Retains or deliberately updates SEO metadata, canonical behavior, and URL
  behavior.
- Preserves working Stripe, app, form, and resource links.
- Tracks its agreed PostHog events.
- Passes Playwright functional checks, Lighthouse review, and axe-core
  accessibility checks at an agreed threshold.
- Has a tested rollback path and a recorded release note.

## Decision log template

For each material change, record:

```text
Date:
Page / route:
Hypothesis:
Audience:
Control and variant:
Primary signal:
Observation window:
Result:
Decision: keep / revise / remove
Owner:
```

## Next action

Complete the handoff checklist, then choose one net-new or low-risk landing
page for the staging-first design and build cycle. Do not begin by changing the
homepage, billing flow, production DNS, or the existing application.
