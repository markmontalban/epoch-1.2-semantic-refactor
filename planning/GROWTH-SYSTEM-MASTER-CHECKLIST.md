# MindfulText Growth System — Master Checklist

Last updated: 2026-08-14 12:11:23 PDT — edited by: Codex

## Authority

This is the agent execution authority for global detailed task status,
dependencies, blockers, and completion evidence. The [Ordered Task
Map](GROWTH-SYSTEM-ORDERED-TASK-MAP.md) is the synchronized founder-facing
roadmap. Dated `DR-*` records in [[decisions/DECISION-REGISTER|the decision
register]] are approval authority; the register itself is an index only. The
growth brief is product direction; the backend audit is evidence; workstream
plans contain implementation detail.

For every Growth change, update this checklist first and update the Ordered
Task Map in the same change when status, dependency, estimated completion,
next action, or founder-visible meaning changes. A policy, authority,
retention, or external-action change requires a dated decision record. The
pair must carry the same reconciliation timestamp and editor, and evidence
claims must remain specific to the verification actually performed.

Data policy ([[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]]): product/customer data has its own PII, consent, access, retention, and deletion policy. The owner-reviewed Growth source archive may retain public or authorized lead-generation/outreach material, including raw content, pending a later cleanup policy. It must never retain credentials, authentication tokens, passwords, payment-card data, or private provider exports. This storage rule authorizes no send, provider or n8n activation, database migration, or production deployment.

For the founder-readable sequence, use the Ordered Task Map. The former
Founder Dashboard was retired because it duplicated that roadmap and this
checklist.

For transfer to a new agent or harness, use the short
[AI Bootstrap Handoff](ai-handoff/MINDFULTEXT-GROWTH-SYSTEM-HANDOFF.md). It
contains orientation and stable boundaries only; derive every current task,
status, dependency, and next action from this checklist and the Ordered Task
Map. There is no parallel JSONL task/status context.

Use `ready`, `in progress`, `blocked`, `done`, or `deferred`. An item is done
only when its evidence is recorded here.

## Locked decisions

- Clean Next.js 16/React 19 public-site replacement on Vercel from private
  GitHub repository `mindfultext-web`; port only reviewed visual concepts and
  carry forward no admin/database/storage application architecture
  ([[decisions/2026-08-11-public-site-clean-replacement|DR-42]] and
  [[decisions/2026-08-11-public-site-vercel-hosting|DR-44]]).
- New clean owner-only operations app on Vercel Pro, deployed from the canonical
  private GitHub repository; [[decisions/2026-08-10-growth-ops-owner-auth|DR-41]]
  locks its application login to Google-only, restricted to Mark's account.
- Neon Launch provides separate production and development/test PostgreSQL
  environments; no prototype data import for MVP.
- Existing n8n stays on DigitalOcean, uses scoped APIs, owns no business data,
  and executes the background/scheduled workflow work against the Growth Ops
  outbox.
- The existing `dev.mindfultext.com` connector moves from Replit to a private
  GitHub repository and separate Vercel project under
  [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]]. Its delivery
  responsibilities and external behavior remain unchanged through a separately
  approved migration/cutover. WordPress hosts audio; `dev.mindfultext.com` owns
  finalized text, scheduling, messaging, and the linked audio URLs.
- Initial buyer audience: community behavioral-health workforce leaders, with
  CCBHC context as the first research lane rather than the only eligible buyer.
  Month one has no practices, audio, legacy catalog, content admin, migration,
  or external-message sending.
- LinkedIn and email outreach remains draft-only in the first phase.
- Legacy content rule: **never rename, only add**. The corpus remains private.
- Services and agents receive independent rotatable task-scoped credentials.
- Mark interprets evidence and makes strategic decisions; the system does not
  declare a winner for him.
- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]] makes L2 the active
  W4 buyer-learning target, keeps L3/L4 deferred behind W7 evidence, and makes
  W5/W6 later scale work rather than blockers for the limited manual beta.
- [[decisions/2026-08-14-w4a-l1a-recipient-presentation|DR-47]] approves the
  cautious recipient presentation, disclosed original-invitation attribution,
  and “Explore your staff-support fit” CTA; it authorizes no implementation,
  collection, deployment, proof publication, analytics/provider activation,
  or outreach.

## Critical path and status

`W0 → W1 → W2 → W3 public-funnel slice → W4a-L1a → W4a-L2a →
W4a-L2b → W4b-L1a → W4b-L1b → W4b-L1c → W4b-L2a → W4b-L2b →
W4b-L2c → W4b-L2d → W7-L2a → W7-L2b → W7-L2c`.
W5/W6 are deferred scale work; W8–W10 are post-beta.
W11 is a post-revenue legacy-security and connector-hardening backlog and is
not a pre-validation dependency.

| Workstream | Status | Current dependency or blocker |
| --- | --- | --- |
| W0 Planning authority | done | Authority and plan directory established |
| W1 Source/security | done | Authenticated Vercel Preview acceptance passed for the isolated stateless shell on `w1-clean-shell`; no Production or public launch occurred. Legacy credential-history, historical-app scans, and connector parity remain deferred to W11 and the legacy systems must remain unused/inactive |
| W2 Operations foundation | done | Disposable-database foundation and authenticated `w2-preview` authorization/readiness/log correlation passed; the temporary non-owner Vercel access used for rejection testing was revoked and must not be restored |
| W3 Growth CRM/API | in progress | W3b — Lead Stage Automation passed source/local and separately authorized disposable-database acceptance; broader public API, provider, public-funnel, and Production work remains unimplemented or separately gated |
| W4 Public beta site | in progress | `W4a-L1a` and `W4a-L2a` direction are approved; `W4a-L2b` is next and remains direction-only; `W4b-L1a` through `W4b-L2d` remain blocked; L3/L4 remain deferred |
| W5 n8n foundation | deferred | Resume after commercial commitment or repeated manual notification/reconciliation pain; not a manual L2 beta dependency |
| W6 Integrations | deferred | Resume after commercial commitment or repeated manual outreach/relationship-reconciliation pain; not a manual L2 beta dependency |
| W7 Beta rollout | blocked | Limited manual W7-L2 beta waits for accepted W4b-L2d plus separate public collection, deployment, and outreach approvals |
| W8 Legacy catalog | deferred | Begins after beta acceptance |
| W9 Local-agent drafting | deferred | Begins after W8 |
| W10 Legacy publishing research | deferred | Separate later decision |
| W11 Legacy security + connector hardening | deferred | Begins after revenue, or before any legacy system is reused, connected, deployed, or exposed—whichever comes first |

## W0 — Planning authority

- [x] Create this checklist and `planning/workstreams/`.
- [x] Mark the growth brief as product direction, not execution status.
- [x] Mark the backend audit as evidence, not current deployment plan.
- [x] Record settled hosting, database, auth, content, automation, and outreach
  decisions.
- [x] Replace the stale undocumented-legacy-API assumption with inspected
  connector evidence and a narrow abstraction boundary.
- [x] Make “never rename, only add” authoritative. Review confirmed that older
  private planning says the same; the newer content plan allows local display
  names but explicitly prohibits production renames.
- [x] Keep agent prompts standalone rather than requiring Obsidian relationships.
- [x] Reconcile cross-repository Growth authority: this checklist is the
  execution authority, the Ordered Task Map is the founder-facing roadmap, and
  dated `DR-*` records are approval authority. The prior
  `Docs/mindfultext-epoch-1/MASTER-CHECKLIST.md` remains historical
  research/run material only.

Evidence: this file, the role notices in the brief and audit, and
`planning/workstreams/README.md`.

## W1 — Source and security preparation

- [x] Keep the connector archive and JSONL corpus under
  `mt-private/data/source/dev-mindfultext/2026-08-06/`.
- [x] Verify JSONL SHA-256
  `9b6f7ede20e3fe02724efe64aa6b041924dec561fc0708507446c553b2962873`.
- [x] Verify 283 modules, 1,112 texts, 139 media texts, 416 action-attached
  texts, and one zero-text module.
- [x] Create and verify sanitized source exports for external agents.
- [x] Treat both exports as prototypes, not deployable applications.
- [x] Remove/disable frontend `/admin`, content-write, upload, and storage
  paths in the clean `mindfultext-web` implementation branch; the production
  route-negative test at `7e5ccb9` returns `404` for the prohibited paths.
- [x] Prohibit deployment of connector auto-session, shared-session fallback,
  and general-purpose legacy proxy.
- [x] Confirm GitHub/Vercel connections: `growth-ops`, `mindfultext-web`, and
  `dev-mindfultext-connector`; retain no secrets in source control.
- [x] Complete the connector's supported-contract inventory and clean
  migration/parity/rollback **plan**; implementation, preview configuration,
  synthetic parity, deployment, DNS, and traffic cutover still require
  separate authorization.
- [x] Remove ZIP/Git-history credential rotation, historical Replit scans, and
  connector implementation/parity from the pre-validation critical path. They
  are retained in W11 for after revenue, or before any legacy system is reused,
  connected, deployed, or exposed—whichever comes first.

Gate: the clean validation shell has no public or agent path to legacy
credentials, content writes, uploads, storage, or the legacy connector. Legacy
systems remain unused/inactive until W11 is completed for the system being
reintroduced.

Sanitized-export evidence (2026-08-06): frontend 66 files, SHA-256
`43ecef4c416073818159ae343a7bb36615dbc325ad2145c81c181180c2229604`;
connector 144 files, SHA-256
`58f2b927556bacda01bfd1abe8a973e3c869338fd73be3190d678169e4b7d982`.
Excluded-path inspection passed and a common key/token signature scan returned
no candidate file. See `planning/replit exports/sanitized/README.md`.
Closure sequence and retained-evidence requirements:
[[planning/workstreams/W1-CLOSURE-PLAN|W1 Closure Plan]].
Connector source/hosting migration scope and its stop conditions are in
[[planning/workstreams/W1-DEV-CONNECTOR-VERCEL-MIGRATION-TASK-CARD|the connector migration task card]].
The 2026-08-11 Replit review package confirms the unsafe surfaces and a public
beta no-go, but performs no remediation or live verification. See
[[planning/workstreams/W1-PUBLIC-SITE-READINESS-EVIDENCE-2026-08-11|the retained readiness evidence]].
Clean-shell source evidence includes Git branch `w1-clean-shell` at
`7e5ccb93f0447a482d34b8cc529989c705104404`: local typecheck, lint, two
boundary tests, production build, route-negative test, and dependency audit
were reported passing. W1b Preview acceptance completed on 2026-08-13: the
authenticated Vercel Preview rendered the stateless “Preview shell,” and
correlated runtime logs recorded `GET /` = `200` for
`mindfultext-web-git-w1-clean-shell-mindful-text-26b9a896.vercel.app`. This is
Preview/browser evidence only; no Production deployment or public launch
occurred. See
[[planning/workstreams/W1-PUBLIC-SITE-CLEAN-REPLACEMENT-TASK-CARD|the clean replacement task card]].

## W2 — Private operations foundation

Hosting confirmed (2026-08-10):
[[decisions/2026-08-10-growth-ops-hosting|DR-40]]. Local repository
`/Users/mgzm-studio/AI-Studio/Projects/growth-ops`; private GitHub repository
`growth-ops` ([GitHub](https://github.com/markmontalban/growth-ops)); Vercel Pro
hosts **Growth Ops** ([project](https://vercel.com/mindful-text/growth-ops))
from Git; Neon Launch environments are `growth-ops-prod` and `growth-ops-dev`;
and existing n8n runs workflow execution through scoped APIs. Google-only owner
sign-in, restricted to Mark's account, is locked in
[[decisions/2026-08-10-growth-ops-owner-auth|DR-41]]. Implementation detail:
`planning/workstreams/W2-OPERATIONS-FOUNDATION.md`.

- [x] Create a new clean local shell without prototype source or data.
- [x] Correct the reviewed W2 foundation blockers: single-connection migration
  transactions/concurrency, expired-lease recovery, lease-bound completion,
  safe validation/readiness errors, and canonical idempotency hashing.
- [x] Validate Google-only owner authentication restricted to Mark; issue
  separate credentials for n8n, site, and agents only through an approved
  non-logging procedure.
- [x] Apply reviewed migrations to `growth-ops-dev`, prove recovery/restore in a
  disposable environment, and keep `growth-ops-prod` unchanged.
- [x] Execute the independent authorization, migration, audit, job,
  health/readiness, logging, and release-control matrix.

Gate: authenticated owner access, scoped services, migrations, audit logging,
and jobs pass automated tests.

Source/local evidence includes commits `d62718f`, `54f867a`, `2c2b15a`, and
correction commit `162a76b` on `w2-preview` in
`/Users/mgzm-studio/AI-Studio/Projects/growth-ops`; the implementation agent
reported typecheck, 19 tests, and build passing. Disposable-database acceptance
against `growth-ops-dev` established migrations, recovery, idempotency, audit,
jobs, readiness, and cleanup while Production remained untouched.

W2b Preview acceptance completed on 2026-08-13 against Ready deployment
`4wiAjnKWgfZ17rp88qeSxKpTpLCQ` on `w2-preview`. Google OAuth completed for
`m@mindfultext.com` with the Preview callback URI; correlated Vercel logs
recorded callback `307`, root `200`, and readiness `200`. Separately
authenticated non-owner `mark@ideaquest.co` reached the app and received
`owner_not_allowed` / “This Google account is not permitted,” request ID
`8a78ece0-cec1-4109-b894-80c7ad6199b8`. The temporary Vercel external access
used for that negative test was revoked and must not be granted again. The
simple “Private operations foundation” page on deployed commit `aeceada` is
intentional Preview content, not an application failure. This evidence is
Preview/browser evidence only and does not establish Production acceptance.
See [[planning/workstreams/W2-INTEGRATION-REVIEW-2026-08-10|the W2 integration review]]
and [[planning/workstreams/W2-OPERATIONS-FOUNDATION-TEST-MATRIX|the acceptance matrix]].

## W3 — Growth CRM and public API

The first interface is proposed but not frozen. Its public-funnel slice must
implement [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]] before W4b:
[[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API Contract Proposal]].

- [ ] Implement organization, prospect/identity, campaign/membership/variant,
  outreach draft/observed event, relationship event, recipient route, visit,
  exposure, engagement rollup, call request, stage/history, experiment, and
  payment-reference entities.
### W3b — Lead Stage Automation

Authority: [[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]].

- [x] Add the local W3b — Lead Stage Automation relationship core: independent people and
  organizations, many-to-many links, cohorts/hypotheses with inheritance and
  overrides, priority queue, append-only timeline, stage history, draft
  approvals, structured external-transcript references, owner-only raw-source
  archive, and inactivity/momentum signals. Source/local verification passed;
  the later disposable-database acceptance is recorded below.
- [x] Add the local owner UI for W3b — Lead Stage Automation: creation and
  review controls, person/organization links and detail views, hypothesis
  inheritance/overrides, draft decisions that explicitly report `sent: false`,
  manual stage/reversal and source-signal actions, source-archive review, and
  cursor-paginated timeline/source reads. Reported local verification: 36
  synthetic tests, typecheck, production build, and diff check.
- [x] Seed the customizable founder-controlled lead stages: identified,
  researched, outreach approved, contacted, replied, meeting scheduled,
  meeting completed, closed won, and closed lost, with configurable substages.
  Keep call request as a timeline status/event, not a universal stage.
- [x] Add versioned trusted-event automation for only contacted → replied,
  replied → meeting scheduled, and meeting scheduled → meeting completed;
  retain source/policy/time/audit evidence and human reversal. Outreach
  approval, sends, strategic moves, backward/reopen moves, and closed won/lost
  remain human-controlled.
- [x] Record manual-only source intake, external Zoom transcript references,
  and Mark's unbounded pre-customer raw-source retention choice pending a later
  cleanup policy ([[decisions/2026-08-11-founder-controlled-relationship-pipeline|DR-45]]).
- [ ] Generate random, unguessable recipient tokens and serve them through a
  branded same-domain path such as `/care-team-fit/{opaque-token}`; the public
  path contains no PII or encoded metadata, and the internal resolver returns
  presentation/attribution instructions without a person record.
- [ ] Add recipient-link redirect, pause, revoke, and expiry controls while
  preserving the public URL; store only a protected lookup representation and
  never log the raw token or full personalized URL.
- [ ] Preserve original-invitation attribution and distinguish link opened,
  probable human engagement, voluntary identification, confirmed identity,
  and alternate/forwarded identity. None is automatic buyer intent.
- [ ] Accept exposure, summarized engagement, assessment-status, consent, and
  call-request writes idempotently. Keep answers and sensitive/free-text
  assessment content out of Growth Ops unless the visitor knowingly opts to
  associate an approved response reference or summary.
- [ ] Add scoped APIs, `Idempotency-Key`, `X-Request-ID`, rate limits, validation,
  retention fields, and privacy-safe logging.
- [ ] Keep detailed behavior in PostHog and summarized engagement in CRM.
- [ ] Keep PII, raw tokens, assessment answers, workforce disclosures, and
  inferred health information out of PostHog. Make Growth Ops/PostHog and any
  assessment-provider failure non-blocking or safely recoverable for visitors.
- [ ] Implement call request: name/work email required; organization/role/note
  optional; attribution server-side; no qualification gate; manual scheduling;
  attach it to one canonical lead lifecycle and record its own timeline status.

Gate: synthetic branded recipient link → matched page → anonymous reflection →
useful results → optional identity association or call request → manual review
succeeds without leaking token, PII, or assessment answers.

W3b acceptance completed on 2026-08-13 on the separately authorized disposable
Neon target `growth-ops-dev / W3b-testing`. The owner-service synthetic workflow
passed relationship/person/organization creation, hypothesis context, priority,
draft approval explicitly reporting `sent: false`, manual trusted-signal stage
change and reversal, source archive/read/review access audit, prohibited
sensitive-metadata rejection, and timeline/audit evidence. Tagged synthetic
records were cleaned up, and the migration rerun was idempotent. This is
source/local plus disposable-database evidence; it authorizes no Preview or
Production claim, provider or n8n activation, sending, or public data collection.

### W3c — Lean segment-validation loop (after W3b — Lead Stage Automation)

Use this loop to test the buyer proposition without pretending a landing-page
visit is demand. It is the operational follow-through for
[[decisions/2026-07-14-customer-development-plan|DR-31]] and the existing
[[workflows/WF-002-Segment-ICP-Qualification|segment/ICP qualification workflow]].
`Reach` and later stages require their own bounded founder approval before any
external contact; no automatic outreach is authorized.

| Stage | System | Output | Decision |
| --- | --- | --- | --- |
| 1. Tighten | One buyer, moment of pain, alternative, and testable offer | One-page segment proposition | Is this specific enough to ask about? |
| 2. Qualify | Founder-defined hypothesis cohort, current context, role hypothesis, and disqualifiers | Prioritized working queue drawn from the cohort | Who is worth contacting now? |
| 3. Reach | Personalized manual outreach with one learning ask | Reply/no-reply/objection log | Does the problem earn attention? |
| 4. Learn | Structured 20–30-minute discovery conversations | Tagged notes and verbatim-safe evidence | Is pain real, owned, urgent, and addressable? |
| 5. Convert | Concrete next step: pilot-design call, introduction, or pricing discussion | Intent or commitment signal | Is there actual commercial pull? |
| 6. Decide | Weekly synthesis against the scorecard | Advance/revise/park memo | What changes next week? |

Dependency: W3b — Lead Stage Automation supplies the founder-controlled lead/timeline record and
approval boundary. This loop stays manual and evidence-led; agents may research
and draft, but may not contact people or send outreach. Only the three narrow
trusted-event policy edges may advance automatically.

## W4 — Public beta funnel

The foundation path is locked in
[[decisions/2026-08-11-public-site-clean-replacement|DR-42]]; bounded shell work
is defined in
[[planning/workstreams/W1-PUBLIC-SITE-CLEAN-REPLACEMENT-TASK-CARD|the clean replacement task card]].

The clean stateless shell on `w1-clean-shell` has authenticated Preview
acceptance, and the W3b owner-service foundation has source/local and
disposable-database acceptance. [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
makes **L2 — Learn** the active target, and
[[decisions/2026-08-14-w4a-l1a-recipient-presentation|DR-47]] approves the L1
presentation, invitation disclosure, and CTA. L0 is the current baseline, L1
is the attribution prerequisite, L2 is the useful reflection, and L3/L4 are deferred.
No task below authorizes implementation, Formbricks/PostHog activation, public
collection, deployment, Production, or outreach without its separate gate.

Execution modes: **Agent** means agents can complete the task after the named
implementation authorization; **Agent → Mark → Agent** means agents prepare
the evidence and Mark supplies one consequential approval; **Mark** means only
Mark can perform the action or interpret the strategic signal.

### W4a — direction and founder approval

| ID | Checklist task | Mode | Status / gate |
| --- | --- | --- | --- |
| W4a-L0a | [x] Preserve the current static behavioral-health copy prototype and its nonclinical, staff-only, no-outcome-claim boundaries. | Agent | Source/local prototype only; no active path or collection |
| W4a-L1a | [x] Prepare and approve the branded recipient-path presentation, original-invitation disclosure, and basic CTA. | Agent → Mark → Agent | Approved in [[decisions/2026-08-14-w4a-l1a-recipient-presentation\|DR-47]]; direction only, no implementation authority |
| W4a-L2a | [x] Prepare and approve the staff-support fit-reflection promise, question set, useful non-scored results, and prohibited-information rules. | Agent → Mark → Agent | Approved in [[decisions/2026-08-14-w4a-l2a-fit-reflection-direction\|DR-48]]; direction only, no implementation or data-collection authority |
| W4a-L2b | [ ] Compare managed Formbricks, self-hosted Formbricks, and a small custom build; approve a provider/data arrangement only after the evidence packet. | Agent → Mark → Agent | Next direction task; no account, credential, or data activation during review |
| W4a-L3a | [ ] Define expanded message experiments, conditional result variants, and post-result conversion hierarchy. | Agent → Mark → Agent | **Deferred until W7-L2c confirms buyer intent** |
| W4a-L4a | [ ] Define scaled analytics, automation, and provider strategy. | Agent → Mark → Agent | **Deferred until commercial commitment or repeated operating pain** |

### W4b — implementation and acceptance

| ID | Checklist task | Mode | Status / gate |
| --- | --- | --- | --- |
| W4b-L1a | [ ] Implement the stateless branded `/care-team-fit/{opaque-token}` experience through server-side Growth Ops resolution, with generic safe handling for invalid, paused, revoked, and expired links. | Agent | Needs W4a-L1a, W3 public-funnel contract, and implementation authorization |
| W4b-L1b | [ ] Record link opened separately from probable human engagement and meaningful scroll; preview/scanner requests remain weak evidence. | Agent | Needs W4b-L1a |
| W4b-L1c | [ ] Pass L1 token, lifecycle, forwarding, privacy, mobile, accessibility, logging, outage, and authenticated Preview acceptance. | Agent | L1 technical gate |
| W4b-L2a | [ ] Implement the anonymous-answer fit reflection with progress, partial-response handling, useful results before identification, and no patient or employee-identifying input. | Agent | Needs W4a-L2a/L2b, accepted L1, and implementation/provider authorization |
| W4b-L2b | [ ] Record assessment start, partial, completion, and results-viewed events without sending answers, free text, PII, raw tokens, or inferred health information to PostHog. | Agent | Needs W4b-L2a |
| W4b-L2c | [ ] State that invitation activity may be attributed while answers remain unassociated; offer explicit post-result consent to associate an approved response reference or summary, save results, try the demo, or request a conversation. | Agent | Needs W4b-L2a and approved consent/retention design |
| W4b-L2d | [ ] Pass complete L2 contract, anonymous-data separation, consent, forwarded-link, masking, accessibility, mobile, performance, retry/outage, and authenticated Preview acceptance. | Agent | Final L2 technical gate |
| W4b-L3a | [ ] Add broader stable message experiments and richer conditional journeys. | Agent | **Deferred until W7-L2c confirms buyer intent** |
| W4b-L3b | [ ] Expand demo, saving, identity association, and conversation optimization. | Agent | **Deferred until W7-L2c confirms buyer intent** |
| W4b-L4a | [ ] Add LinkedIn aggregate reporting, scaled experimentation, and justified automation connections. | Agent | **Deferred until commercial commitment or repeated operating pain** |

W4 keeps month-one content code/config-managed and excludes practices, audio,
uploads, public admin, legacy catalog, clinical/patient workflows, and an
independent site database. Detailed status lives only in this checklist; no
parallel W4 workstream plan is created.

Gate: W4b-L2d passes at the authorized Preview/browser evidence tier. That
technical gate does not establish buyer validation or authorize W7-L2a.

## W5 — n8n automation foundation

W5 is deferred scale work under
[[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]. Resume only after commercial commitment
or repeated manual notification/reconciliation pain; it is not a dependency for
the limited W7-L2 beta.

- [x] Retain the 2026-08-11 read-only inventory: healthy public endpoints, 101
  workflows, zero active, documented SQLite/backup baseline, and inactive
  webhook observations.
- [ ] Verify exact live n8n version, backup cron/restore readiness, and update
  script through a short read-only host check if current proof is required.
- [ ] Rotate the inactive inline Zoom secret, reduce read-only agent/MCP scope,
  and apply Mark's archive/quarantine decision before any workflow activation.
- [ ] Give n8n one narrow API credential; no DB, legacy credential, or send API.
- [ ] Standardize workflow ID, source event ID, correlation ID, attempt,
  timestamp, and outcome.
- [ ] Add idempotency, bounded retries, terminal failure, founder notification,
  minimal retention, and result writes to the operations API.
- [ ] Implement in order: call-request notification; Unipile reply sync;
  draft-ready notification; calendar reconciliation; Gmail metadata; daily
  PostHog rollup; Stripe notification; local-analysis coordination.

Gate: repeated, delayed, or failed runs create no duplicate event/action.

Evidence: [[planning/workstreams/W5-N8N-READINESS-EVIDENCE-2026-08-11|W5 n8n readiness evidence]].

## W6 — Outreach and relationship integrations

W6 is deferred scale work under
[[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]. Resume only after commercial commitment
or repeated manual outreach/relationship-reconciliation pain; it is not a
dependency for the limited W7-L2 beta.

- [ ] Harden Unipile and verified/idempotent ingress; retain provider IDs.
- [ ] Support editable sequences while all first-phase messages stay draft-only.
- [ ] Sync Gmail metadata/snippets; fetch bodies only for named scoped jobs; do
  not continuously summarize.
- [ ] Reconcile manual Calendar/Zoom appointments to call requests.
- [ ] Verify Stripe signatures, acknowledge quickly, process asynchronously,
  and join payments to opportunities/cash-received stage.

Gate: outreach, replies, calls, and payments join without n8n owning state.

## W7 — Public beta rollout

| ID | Checklist task | Mode | Status / gate |
| --- | --- | --- | --- |
| W7-L2a | [ ] Prepare a bounded manual LinkedIn batch; separately approve public collection, deployment/Production target, audience, named outreach drafts, and sends; Mark manually sends the approved messages. | Agent → Mark → Agent, then Mark sends | Needs accepted W4b-L2d; no automatic outreach |
| W7-L2b | [ ] Synthesize replies, objections, link-open confidence, human-like engagement, reflection progress/results use, voluntary identification, conversations, and requested next steps. | Agent | Evidence distinguishes learning, buyer intent, and commitment |
| W7-L2c | [ ] Record Mark's advance, revise, or park decision. | Mark | L3 resumes only if Mark confirms buyer intent |
| W7-L3-gate | [ ] Confirm a concrete organization-participating next step: pilot-design discussion, pricing/budget/procurement question, decision-group introduction, staff-cohort evaluation request, or equivalent. | Mark | **Deferred; explicit L3 resume gate** |
| W7-L4-gate | [ ] Confirm commercial commitment or repeated manual operating pain: accepted pilot, LOI, agreement, payment, other resource commitment, or a recurring scale problem. | Mark | **Deferred; explicit L4 resume gate** |

Clicks, scrolls, reflection completion, demo use, and positive comments are
learning signals. They do not independently satisfy W7-L3-gate. W8/W9 are
technical/post-beta workstreams and do not prove buying signal or traction.

Gate: W7-L2c records a founder-reviewed evidence decision. A future broader
beta, main-domain change, payment path, or automated/provider-connected launch
requires a separate plan and authorization.

## W8 — Read-only legacy catalog (post-beta)

- [ ] Import verified snapshot locally; preserve padded IDs and names as
  immutable compatibility data.
- [ ] Add independent keys/display titles, ordered content data, taxonomy,
  revisions, provenance, and supersession.
- [ ] Refresh only through explicit GET endpoints; no proxy or publishing.

Gate: reproducible refresh with zero delivery-state writes.

## W9 — Local-agent analysis and drafting (post-beta)

- [ ] Add scoped REST/OpenAPI and MCP-compatible read/draft tools.
- [ ] Keep the Mac harness outbound and named-task scoped.
- [ ] Generate multiple checked candidates with full provenance; return drafts
  to operations and notify through n8n.
- [ ] Prohibit automatic sends and automatic paid-model fallback.

Gate: private, reproducible, attributable drafts with no delivery capability.

## W10 — Legacy publishing research (independent later program)

- [ ] Build a restricted adapter with read-only web credentials and separate
  disabled-by-default publish credentials.
- [ ] Validate one minimal create in an isolated organization, exact payload,
  sendability, targeting/linkage/actions/media/attribution.
- [ ] Add frozen revisions, idempotency, ambiguous-response reconciliation, and
  recipient-impact preview.
- [ ] Require a separate production-readiness decision; continue prohibiting
  rename/update/archive/journey mutation/subscription launch until validated.

Gate: no production publisher before isolated evidence resolves recipient risk.

## W11 — Legacy security and connector hardening (post-revenue)

This is intentionally outside the pre-validation and first-revenue critical
path. Keeping the clean public shell and validation workflow isolated is the
current control; deferral is not permission to reconnect an old system.

- [ ] Inventory original ZIP/Git history by credential category without
  retaining or printing secret values.
- [ ] Rotate or revoke exposed and uncertain credentials only for systems that
  will be reused; record owner, date, session invalidation, and scoped smoke
  result without secret values.
- [ ] Retain current dependency/security scans for any historical Replit app
  proposed for reuse; otherwise keep that prototype non-deployed.
- [ ] Build and verify clean connector source, synthetic parity, monitoring,
  rollback, and scoped service authentication before Preview configuration or
  traffic cutover.
- [ ] Obtain separate approval before credentials, external configuration,
  deployment, DNS, or traffic changes.

Trigger: start after MindfulText generates revenue, or earlier if Mark proposes
reusing, connecting, deploying, or exposing any legacy system. The earlier
trigger wins.

Gate: no legacy system returns to use until its applicable inventory, rotation,
scan, clean-boundary, and acceptance evidence is complete.

## Completion evidence required from every task

Automated tests proportional to risk, contract fixtures, authorization-failure
evidence, retry/failure results, privacy/logging review, deployment/rollback
notes, and exact evidence suitable for this checklist.
