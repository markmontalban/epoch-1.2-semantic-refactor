# MindfulText Growth System — Master Checklist

Last updated: 2026-08-19 10:34:46 PDT — edited by: Claude Dispatch

## Authority

This is the agent execution authority for global detailed task status,
dependencies, blockers, and completion evidence. The [Ordered Task
Map](GROWTH-SYSTEM-ORDERED-TASK-MAP.md) is the synchronized founder-facing
roadmap. Dated `DR-*` records in [[decisions/DECISION-REGISTER|the decision
register]] are approval authority; the register itself is an index only. The
growth brief is product direction; the backend audit is evidence; workstream
plans contain implementation detail.

For every Growth change, update this checklist first. When the change alters status, dependency, next action, or founder-visible meaning, update the Ordered Task Map in the same change. A policy, authority, retention, or external-action change requires a dated decision record. Evidence claims must stay specific to the verification actually performed. The former matching-reconciliation-timestamp-and-editor requirement was retired by [[decisions/2026-08-19-growth-process-right-sizing|DR-58]].

Parked scope lives in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). Nothing there is pending; each block names its resume trigger.

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
cautious recipient presentation and “Explore your staff-support fit” CTA.
[[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]] retains
private opaque invitation attribution but removes visitor-facing attribution
disclosure for the prototype; neither record authorizes implementation,
collection, deployment, proof publication, analytics/provider activation,
or outreach.
- [[decisions/2026-08-16-w4b-l1b-masked-analytics-replay|DR-55]] approves
  PostHog activation for W4b-L1b's recipient landing page only: private
  invitation-to-engagement linkage, privacy-masked replay, 30-day replay
  retention, Mark-only access, and the short purpose notice alongside the
  cookie notice. Reflection/results/contact paths, AI analysis, replay export,
  and raw network/console capture remain excluded.
- [[decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue|DR-56]]
  confirms W4b-L1a was authorized and built, accepts W4b-L1b laptop-only
  event recording as done, confirms the W3d identifier, and continues
  W4b-L2a/L2b/L2c on the laptop.
- [[decisions/2026-08-17-w4b-l1c-l2d-private-test|DR-57]] authorizes
  W4b-L2d laptop polish and authenticated Vercel Preview checks for
  W4b-L1c and W4b-L2d, plus disposable Neon `growth-ops-dev` only if
  migrations `005`/`006` are required for those checks. It does not
  authorize Production, public collection, PostHog credentials, or
  outreach.
- [[decisions/2026-08-19-growth-process-right-sizing|DR-58]] matches this
  document's process weight to a solo pre-seed prototype: `W4b-L1c`,
  `W4b-L2d`, and the W3d synthetic-funnel gate merge into one recorded walk
  (`W4b-walk`); evidence becomes proportional to consequence; the
  matching-timestamp rule is retired; the Ordered Task Map uses one
  four-value status system; and deferred scope moves to
  [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). It authorizes
  document restructuring only, and reaffirms every privacy, send, and
  collection boundary.



## Critical path and status

`W0 → W1 → W2 → W3d → W4a-L1a → W4a-L2a → W4a-L2b → W4b-L1a → W4b-L1b → W4b-L2a → W4b-L2b → W4b-L2c → W4b-walk → W7-L0a → W7-L1a → W7-L2a → W7-L2b → W7-L2c`.
`W4b-walk` replaces `W4b-L1c`, `W4b-L2d`, and the W3d synthetic-funnel gate per
[[decisions/2026-08-19-growth-process-right-sizing|DR-58]].
W5 and broader W6 are deferred scale work; DR-52 extracts only W7-L0a's narrow
Unipile LinkedIn read/reconciliation slice. W8–W10 are post-beta.
W11 is a post-revenue legacy-security and connector-hardening backlog and is
not a pre-validation dependency.


| Workstream                                | Status      | Current dependency or blocker                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W0 Planning authority                     | done        | Authority and plan directory established                                                                                                                                                                                                                                                                                                                                                       |
| W1 Source/security                        | done        | Authenticated Vercel Preview acceptance passed for the isolated stateless shell on `w1-clean-shell`; no Production or public launch occurred. Legacy credential-history, historical-app scans, and connector parity remain deferred to W11 and the legacy systems must remain unused/inactive                                                                                                  |
| W2 Operations foundation                  | done        | Disposable-database foundation and authenticated `w2-preview` authorization/readiness/log correlation passed; the temporary non-owner Vercel access used for rejection testing was revoked and must not be restored                                                                                                                                                                            |
| W3 Growth CRM/API | in progress | W3b disposable acceptance stands; `W3d-1`–`W3d-8` remain laptop-complete. Growth Ops Preview `w2-preview` `DATABASE_URL` points at disposable `W3b-testing`. Preview-only public-site credential `mindfultext-web-preview-w4b` is hashed there; `mindfultext-web` Preview `w1-clean-shell` has the matching env vars. Public resolve is HTTP 200 (`/care-team-fit`). Awaiting the single owner walk (`W4b-walk`). No Production credential or collection. |
| W4 Public beta site | in progress | `W4a-L1a`–`W4a-L2b` direction approved; `W4b-L1a`/`L1b` and `W4b-L2a`/`L2b`/`L2c` laptop-only done per [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md); awaiting the single owner walk (`W4b-walk`), authorized by [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md) and merged from `W4b-L1c`/`W4b-L2d` by [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md); L3/L4 remain deferred |
| W5 n8n foundation                         | deferred    | Resume after commercial commitment or repeated manual notification/reconciliation pain; not a manual L2 beta dependency. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                                                                                          |
| W6 Integrations                           | deferred    | Broader provider work resumes after commercial commitment or repeated manual reconciliation pain; DR-52 extracts only the narrow Unipile LinkedIn read/reconciliation slice needed by W7-L0a. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                     |
| W7 Beta rollout                           | in progress | `W7-L1a` homepage copy was approved by Mark on 2026-08-19 and is implemented laptop-only with call-to-action variation 0 (email link, nothing collected). `W7-L0a` Unipile-backed profile-to-invitation attribution preparation remains prioritized and unbuilt. New call-to-action variations `W7-L1b`–`W7-L1f` were added on 2026-08-19 with provisional identifiers and are not on the path to the first batch. The limited manual W7-L2 beta still waits for a recorded `W4b-walk` plus separate public collection, deployment, and outreach approvals |
| W8 Legacy catalog                         | deferred    | Begins after beta acceptance. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                                                                                                                                                                                   |
| W9 Local-agent drafting                   | deferred    | Begins after W8. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                                                                                                                                                                                                |
| W10 Legacy publishing research            | deferred    | Separate later decision. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                                                                                                                                                                                        |
| W11 Legacy security + connector hardening | deferred    | Begins after revenue, or before any legacy system is reused, connected, deployed, or exposed—whichever comes first. Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)                                                                                                                                                                                                              |




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

- [x] Core entities exist through W3b (relationships, stages, timeline, drafts)
  and W3d (recipient routes, visits, engagement, call requests). The remaining
  entities — campaign/membership/variant, experiment, and payment-reference —
  are parked in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) until
  the work that needs them (W6, or W7-L3 and later) is authorized.



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

The eight recipient-link, engagement-intake, and call-request items formerly
listed here, and the synthetic-funnel gate that accompanied them, moved to
`W3d — Public Recipient Link Service` below on 2026-08-17 with no wording
change. They were not part of the 2026-08-13 W3b acceptance evidence, and
holding them under a completed heading made them invisible as open work.

Gate: the founder-controlled relationship, timeline, stage, draft-approval, and
source-archive model passes owner-service synthetic acceptance without leaking
credentials, sensitive metadata, or unapproved sends.

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


| Stage      | System                                                                                 | Output                                          | Decision                                      |
| ---------- | -------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| 1. Tighten | One buyer, moment of pain, alternative, and testable offer                             | One-page segment proposition                    | Is this specific enough to ask about?         |
| 2. Qualify | Founder-defined hypothesis cohort, current context, role hypothesis, and disqualifiers | Prioritized working queue drawn from the cohort | Who is worth contacting now?                  |
| 3. Reach   | Personalized manual outreach with one learning ask                                     | Reply/no-reply/objection log                    | Does the problem earn attention?              |
| 4. Learn   | Structured 20–30-minute discovery conversations                                        | Tagged notes and verbatim-safe evidence         | Is pain real, owned, urgent, and addressable? |
| 5. Convert | Concrete next step: pilot-design call, introduction, or pricing discussion             | Intent or commitment signal                     | Is there actual commercial pull?              |
| 6. Decide  | Weekly synthesis against the scorecard                                                 | Advance/revise/park memo                        | What changes next week?                       |


Dependency: W3b — Lead Stage Automation supplies the founder-controlled lead/timeline record and
approval boundary. This loop stays manual and evidence-led; agents may research
and draft, but may not contact people or send outreach. Only the three narrow
trusted-event policy edges may advance automatically.

### W3d — Public Recipient Link Service

Authority: [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]] and
[[decisions/2026-08-14-word-only-opaque-route-handles|DR-54]].

Reconciliation note (2026-08-17): these eight items were recorded on 2026-08-14
under the `W3b` heading with no identifiers. Because `W3b` is marked complete,
they were not visible as open work, and `W4b-L1a` was later marked complete in
commit `89b0fe7` after its prerequisite text — "Needs W4a-L1a, W3 public-funnel
contract, and implementation authorization" — was replaced by its evidence
sentence rather than satisfied. Wording below is verbatim; only stable
identifiers were added. `W3d` is the record previously called the "W3
public-funnel slice" and gates `W4b-L1a` and `W4b-L1b`. The `W3d` identifier
was confirmed by Mark on 2026-08-17 ([DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md)).

- [x] **W3d-1** Generate cryptographically random, word-only opaque route handles and
  serve them through an approved semantic same-domain path such as
  `/team-alignment/{opaque-word-handle}`; the public path contains no PII,
  encoded metadata, or digits, and the internal resolver returns
  presentation/attribution instructions without a person record.
- [x] **W3d-2** Add recipient-link redirect, pause, revoke, and expiry controls while
  preserving the public URL; store only a protected lookup representation and
  never log the raw token or full personalized URL.
- [x] **W3d-3** Preserve original-invitation attribution and distinguish link opened,
  probable human engagement, voluntary identification, confirmed identity,
  and alternate/forwarded identity. None is automatic buyer intent.
- [x] **W3d-4** Accept exposure, summarized engagement, assessment-status, consent, and
  call-request writes idempotently. Keep answers and sensitive/free-text
  assessment content out of Growth Ops unless the visitor knowingly opts to
  associate an approved response reference or summary.
- [x] **W3d-5** Add scoped APIs, `Idempotency-Key`, `X-Request-ID`, rate limits, validation,
  retention fields, and privacy-safe logging.
- [x] **W3d-6** Keep detailed behavior in PostHog and summarized engagement in CRM.
  Laptop-only: summarized engagement is written in Growth Ops; recipient-page
  signals are reported from `mindfultext-web`. PostHog credentials and live
  replay remain uncreated per DR-55/DR-56.
- [x] **W3d-7** Keep PII, raw tokens, assessment answers, workforce disclosures, and
  inferred health information out of PostHog. Make Growth Ops/PostHog and any
  assessment-provider failure non-blocking or safely recoverable for visitors.
- [x] **W3d-8** Implement call request: name/work email required; organization/role/note
  optional; attribution server-side; no qualification gate; manual scheduling;
  attach it to one canonical lead lifecycle and record its own timeline status.
  2026-08-17 laptop-only: required `visitorName` and `workEmail` are now
  implemented in Growth Ops and on the public-site call-request form. 59
  Growth Ops tests and 42 public-site tests passed.

Current state (2026-08-17): Mark named disposable Neon `growth-ops-dev` /
`W3b-testing`. Database-reported IDs matched the W3b evidence record
(`solitary-shape-96086038` / `br-old-math-ay7pd9en`). Forward-only migrate
with `MIGRATION_TARGET=development` applied; ledger is
`001_operations_foundation`, `002_job_lease_tokens`,
`003_w3b_relationship_core`, `004_public_recipient_routes`,
`005_w3d_route_lifecycle_and_activity`,
`006_w4b_l2_reflection_and_call_request`. Production Neon was not touched.
This is disposable-database evidence only. It does not pass authenticated
Preview acceptance, public collection, or the W3d synthetic visitor gate.
Site credential issuance remains open.

Gate: satisfied by the single `W4b-walk` acceptance walk (see W4b); no separate
synthetic-funnel rerun is required. Original gate wording is preserved in
[the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

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
presentation and CTA, while [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
removes visitor-facing attribution disclosure from the prototype. L0 is the current baseline, L1
is the attribution prerequisite, L2 is the useful reflection, and L3/L4 are deferred.
No task below authorizes implementation, Formbricks/PostHog activation, public
collection, deployment, Production, or outreach without its separate gate.

Execution modes: **Agent** means agents can complete the task after the named
implementation authorization; **Agent → Mark → Agent** means agents prepare
the evidence and Mark supplies one consequential approval; **Mark** means only
Mark can perform the action or interpret the strategic signal.

### W4a — direction and founder approval


| ID      | Checklist task                                                                                                                                                   | Mode                 | Status / gate                                                                                                                                                                                                                                                           |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W4a-L0a | [x] Preserve the current static behavioral-health copy prototype and its nonclinical, staff-only, no-outcome-claim boundaries.                                   | Agent                | Source/local prototype only; no active path or collection                                                                                                                                                                                                               |
| W4a-L1a | [x] Prepare and approve the branded recipient-path presentation, private opaque invitation attribution, and basic CTA.                                           | Agent → Mark → Agent | Approved in [[decisions/2026-08-14-w4a-l1a-recipient-presentation|DR-47]] and amended by [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]: no visitor-facing attribution disclosure in the prototype; direction only, no implementation authority |
| W4a-L2a | [x] Prepare and approve the staff-support fit-reflection promise, question set, useful non-scored results, and prohibited-information rules.                     | Agent → Mark → Agent | Approved in [[decisions/2026-08-14-w4a-l2a-fit-reflection-direction|DR-48]]; direction only, no implementation or data-collection authority                                                                                                                             |
| W4a-L2b | [x] Choose the reflection approach: small custom, Formbricks-inspired fixed-choice flow; do not use Formbricks Cloud or self-hosted Formbricks in the prototype. | Agent → Mark → Agent | Approved in [[decisions/2026-08-14-w4a-l2b-custom-reflection-direction|DR-50]]; direction only, with no account, credential, data activation, or implementation authority                                                                                               |
| W4a-L3a | [ ] Define expanded message experiments, conditional result variants, and post-result conversion hierarchy.                                                      | Agent → Mark → Agent | **Deferred until W7-L2c confirms buyer intent**                                                                                                                                                                                                                         |
| W4a-L4a | [ ] Define scaled analytics, automation, and provider strategy.                                                                                                  | Agent → Mark → Agent | **Deferred until commercial commitment or repeated operating pain**                                                                                                                                                                                                     |




### W4b — implementation and acceptance


| ID      | Checklist task                                                                                                                                                                                                                          | Mode  | Status / gate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W4b-L1a | [x] Implement the stateless branded semantic-path experience such as `/team-alignment/{opaque-word-handle}` through server-side Growth Ops resolution, with generic safe handling for invalid, paused, revoked, and expired links.      | Agent | Laptop-only implementation passed Growth Ops tests/typecheck and `mindfultext-web` tests/typecheck/build on 2026-08-14. [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md) confirms this build was authorized. No database migration run, credential, Preview, deployment, collection, or external send occurred. |
| W4b-L1b | [x] Record link opened separately from probable human engagement and meaningful scroll; preview/scanner requests remain weak evidence.                                                                                                  | Agent | Laptop-only done per [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md): recipient-page activity reporter plus Growth Ops activity intake, DR-55 purpose notice on the page, 42 public-site tests passed 2026-08-17. PostHog replay remains inert/keyless. No credentials, Preview, deployment, or public collection. |
| W4b-walk | [x] One recorded owner walk of the existing private-test link on `w1-clean-shell`: open the link, see the invitation page, complete the reflection, view results, submit a call request, and confirm a dead handle shows the generic unavailable page. Record what happened; screenshots or notes suffice. This single walk is the acceptance evidence for the W3d gate, the former `W4b-L1c`, and the former `W4b-L2d`. | Agent → Mark → Agent | Merged from `W4b-L1c` and `W4b-L2d` by [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md); runs under [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md)'s existing private-test authorization. An agent may drive the walk; Mark reviews the record. 2026-08-18 17:12 PDT: Growth Ops Preview resolve HTTP 200; public-site invitation page loads; dead handle is generic unavailable. **Completed 2026-08-19 08:32 PDT** after Mark temporarily disabled Vercel deployment protection on `mindfultext-web` (an earlier 08:03 attempt returned Vercel's `Login – Vercel` page). Evidence below. The nineteen original check categories are preserved in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). No Production, no public collection. |
| W4b-L2a | [x] Implement the anonymous-answer fit reflection with progress, partial-response handling, useful results before identification, and no patient or employee-identifying input.                                                         | Agent | Laptop-only implementation in `mindfultext-web` and Growth Ops; 2026-08-17 tests passed (42 public-site, 59 Growth Ops). No deploy, no migration run, no credentials, no real collection. `W4b-L1c` is still unmet, so this is not Preview/live-site acceptance. |
| W4b-L2b | [x] Record assessment start, partial, completion, and results-viewed events without sending answers, free text, PII, raw tokens, or inferred health information to PostHog.                                                             | Agent | Laptop-only milestone reporter to Growth Ops `/reflection/events`; answers are never stored. PostHog credentials remain uncreated (DR-55/DR-56). |
| W4b-L2c | [x] Keep optional post-result identity, save, demo, or conversation choices separate from anonymous answers. Do not add visitor-facing attribution disclosure in the prototype; private opaque invitation attribution remains internal. | Agent | Laptop-only call-request path now requires name and work email; answers stay off that payload. Save remains a local acknowledgement only (DR-49). |
| ~~W4b-L2d~~ | Retired — merged into `W4b-walk` above by [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md). Laptop polish for cookie notice, forwarding copy, outage copy, and accessibility was recorded 2026-08-17 (43 public-site checks, typecheck passed). | — | Original wording preserved in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). |
| W4b-L3a | [ ] Add broader stable message experiments and richer conditional journeys.                                                                                                                                                             | Agent | **Deferred until W7-L2c confirms buyer intent**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| W4b-L3b | [ ] Expand demo, saving, identity association, and conversation optimization.                                                                                                                                                           | Agent | **Deferred until W7-L2c confirms buyer intent**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| W4b-L4a | [ ] Add LinkedIn aggregate reporting, scaled experimentation, and justified automation connections.                                                                                                                                     | Agent | **Deferred until commercial commitment or repeated operating pain**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


[DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md)
confirmed the W4b-L1a/L1b build and the laptop-only L2 work;
[DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md) authorized the
private test. As of 2026-08-18 the Preview-only site credential and
`w1-clean-shell` env vars are in place, Growth Ops Preview resolve is HTTP 200,
and a dead handle shows the generic unavailable page. Only the `W4b-walk` owner
walk remains. Full history is recoverable in Git.

W4 keeps month-one content code/config-managed and excludes practices, audio,
uploads, public admin, legacy catalog, clinical/patient workflows, and an
independent site database. Detailed status lives only in this checklist; no
parallel W4 workstream plan is created.

Gate: `W4b-walk` is recorded at the private-test tier. That technical gate does
not establish buyer validation or authorize W7-L2a.

### W7-L0a — laptop-only build, 2026-08-19 08:47 PDT

**Scope correction, 2026-08-19 10:34 PDT:** what is built is the storage and
rules layer only. `src/w7/attribution.ts` states it in its own header — "performs
no Unipile API call: the caller supplies an already-resolved public profile" —
and a repository-wide search finds no Unipile client, no `UNIPILE_*` environment
variable, and no network call in `src/w7/`. `src/w3b/domain.ts` still reports
the Unipile adapter as `configured: false`. **No credential is required for
`W7-L0a` to be used, and there is currently nowhere to put one.** For a small
hand-sent batch, profiles are entered by hand through the owner screens (not yet
built). A Unipile connection is a later convenience needing its own approval; if
one is ever added, its key belongs in a local `.env.local`, which `.gitignore`
already excludes via `.env*`, and never in a document, a commit, or chat.

Built under Mark's in-conversation authorization, implementing
[[decisions/2026-08-14-linkedin-profile-invitation-attribution|DR-51]],
[[decisions/2026-08-14-w7-unipile-linkedin-attribution|DR-52]], and
[[decisions/2026-08-14-word-only-opaque-route-handles|DR-54]].

- **Schema:** `migrations/007_w7_l0a_invitation_profiles.sql` adds
  `invitation_profiles`, one row per recipient route, holding the Unipile
  provider id, public profile URL, display name, public headline/organization,
  a generated `batch-` reference, an attribution-confidence label, a
  closed-vocabulary reason, and a mandatory `retain_until`.
- **Prohibited data is excluded twice** — by the schema's absence of those
  columns and by an explicit runtime check that rejects any payload carrying an
  email, phone, connection degree, follower count, posts, messages, summary,
  experience, education, skills, birthday, or address.
- **Honest confidence is enforced structurally, not by convention.** A record
  starts at `invitation_only` claiming nothing. Once forwarding or scanner
  ambiguity is seen it sits at `forwarded_or_unknown` and cannot climb back to
  `probable_recipient` on behavioural signals alone — only a visitor
  identifying themselves or a confirmed reply moves it, exactly as DR-51
  requires. `alternate_identity` is terminal, so a record cannot be quietly
  reassigned to the invited person.
- **Batch references are generated, never typed**, for the same reason
  `invitation_reference` is in migration 005: a hand-typed label cannot be
  validated as free of a real person's name.
- **Evidence export is masked and always caveated.** Exports carry a masked
  profile slug and initials rather than the raw URL and full name, retain the
  public organization for review, and every row carries the sentence that this
  is invitation-level attribution and not proof the named person acted.
- **Retention is enforced by deletion**, not archiving, and expired rows are
  excluded from export.
- **Answer separation is unaffected.** Reflection answers are still never
  written anywhere (migration 006), so keying attribution to `route_id`
  creates no path from a person to their answers.
- **Verification:** 70 `growth-ops` tests pass (11 new) and typecheck is clean.
  No migration was run against any database, no Unipile credential exists, and
  no API call was made.

### W4b-walk — recorded evidence, 2026-08-19 08:32 PDT

Driven by an agent in a real browser against the throwaway word-only test link
on `w1-clean-shell`, under [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md).
Mark temporarily disabled Vercel deployment protection for the run.

- **Invitation page loaded.** Title `MindfulText | Staff support for care teams`;
  headline "A brief, optional staff-support layer for care teams."; CTA "Explore
  your staff-support fit"; the DR-55 purpose notice, cookie notice, forwarding
  notice, and "No names. No employee or patient information." all present.
  Rendering confirmed visually at 1280×900.
- **Dead link handled safely.** A made-up word-only handle on the same path
  returned the generic "This page is unavailable" page and leaked no reflection
  content.
- **All six reflection questions walked**, in order: the workday moment; what a
  brief practice could support; what makes it genuinely accessible; whether
  staff can use it with dignity and real choice; how it sits beside the
  organization's responsibilities; and what would make a small pilot worth
  learning from. Progress indicator tracked `QUESTION n OF 6` correctly.
- **Results rendered and held the boundaries.** Guidance reflected the answers
  back, stated "This describes a possible use, not a promised outcome," and
  included a "What leadership still owns" section naming workload, staffing,
  safety, supervision, pay, and working conditions as leadership's
  responsibility and never substitutable.
- **Call request matched `W3d-8`.** Name and work email required; organization,
  role, and note optional. Submitted with clearly synthetic values
  (`W4B-WALK TEST — not a real person`, `w4b-walk-test@example.invalid`) against
  the disposable database; confirmation shown. That synthetic record may be
  reset at any time.
- **Privacy observations.** No cookies set; browser storage held only the single
  on-device marker `mt_route_seen` described in the cookie notice; PostHog was
  not loaded (credentials remain uncreated); every request went to the site's
  own origin with zero third-party calls, so the Growth Ops credential never
  reached the browser; no console errors.
- **Method caveat.** The browser pane's viewport repeatedly collapsed to 0×0, so
  the reflection and call-request steps were driven by scripted clicks on the
  real page rather than pixel clicks. The page, server actions, and responses
  were genuine; per-category mobile and accessibility checks were not performed
  and remain retired under [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md).

## W5 — n8n automation foundation

W5 is deferred scale work under
[[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]. Resume only after commercial commitment
or repeated manual notification/reconciliation pain; it is not a dependency for
the limited W7-L2 beta.

- [x] Retain the 2026-08-11 read-only inventory: healthy public endpoints, 101
  workflows, zero active, documented SQLite/backup baseline, and inactive
  webhook observations.
Six open items and the W5 gate are parked in
[the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

Evidence: [[planning/workstreams/W5-N8N-READINESS-EVIDENCE-2026-08-11|W5 n8n readiness evidence]].

## W6 — Outreach and relationship integrations

W6 is deferred scale work under
[[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]. Resume only after commercial commitment
or repeated manual outreach/relationship-reconciliation pain; it is not a
dependency for the limited W7-L2 beta.

Five open items and the W6 gate are parked in
[the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). The narrow Unipile
LinkedIn read slice that `W7-L0a` needs stays active under DR-52 and is not
parked.

## W7 — Public beta rollout


| ID         | Checklist task                                                                                                                                                                                                                                                       | Mode                                  | Status / gate                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W7-L0a     | [ ] Prepare the private Unipile-LinkedIn-profile-to-invitation attribution record for the limited manual beta: provider/profile identifiers, opaque word-only route handle, invitation metadata, activity classifications, masking/retention, and confidence labels. | Agent → Mark → Agent                  | Prioritized by [[decisions/2026-08-14-linkedin-profile-invitation-attribution|DR-51]], [[decisions/2026-08-14-w7-unipile-linkedin-attribution|DR-52]], and [[decisions/2026-08-14-word-only-opaque-route-handles|DR-54]]; must be accepted before W7-L2a. **Build authorized by Mark in conversation on 2026-08-19; built laptop-only the same day at 08:47 PDT.** Migration `007_w7_l0a_invitation_profiles.sql` and `src/w7/attribution.ts` in `growth-ops`; 70 tests pass (11 new) and typecheck is clean. No migration was run against any database, no Unipile credential was created, and no API call was made. Still NOT authorized: Unipile credentials, live API calls, real profile ingestion, public collection, deployment, and any outreach or send. Acceptance still required before `W7-L2a`. |
| W7-L1a     | [ ] Finalize the existing MindfulText homepage's approved final copy and design tweaks in `mindfultext-web`, reusing the existing site design rather than introducing a new product strategy or page system.                                                         | Agent → Mark → Agent                  | Added by [[decisions/2026-08-14-w7-homepage-finalization-priority|DR-53]]. **In progress:** Mark approved the final copy in conversation on 2026-08-19 and it is implemented laptop-only in `app/page.tsx` with call-to-action variation 0 (an email link to `hello@mindfultext.com`, nothing collected); 43 public-site checks and typecheck passed. Search-engine listing stays blocked per Mark, 2026-08-19. Review packet: `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web/W7-L1A-HOMEPAGE-COPY-REVIEW.md`. Remaining: confirm `hello@mindfultext.com` is a real mailbox, or the email button sends visitors' messages nowhere. No public launch, new collection, analytics/provider activation, or outreach authority. |
| W7-L1b     | [ ] Build the way homepage call-to-action variations are presented and compared, so one variation can replace another without redesigning the page.                                                                                                                | Agent                                 | Proposed by Mark on 2026-08-19; identifier provisional until he confirms it. Variation 0 (email link, nothing collected) already exists in `app/page.tsx`. Each variation below still needs its own approval before build.                                                                                                                                                |
| W7-L1c     | [ ] Variation 1 — a demo request that collects a phone number, stating plainly that MindfulText will not contact the person after the demo unless they ask.                                                                                                        | Agent → Mark → Agent                  | Proposed by Mark on 2026-08-19; identifier provisional. A phone number is new personal-information collection and requires its own dated decision record before any build, plus retention, deletion, and access rules.                                                                                                                                                    |
| W7-L1d     | [ ] Variation 2 — the same demo request as `W7-L1c` without the no-contact statement, to test whether the reassurance changes response.                                                                                                                            | Agent → Mark → Agent                  | Proposed by Mark on 2026-08-19; identifier provisional. Omitting the reassurance must not change actual behavior: numbers collected under `W7-L1d` receive the same no-contact treatment as `W7-L1c` unless separate consent is recorded. Covered by the same dated decision as `W7-L1c`.                                                                                |
| W7-L1e     | [ ] Variation 3 — offer the six-question reflection on the homepage itself, with no invitation link required.                                                                                                                                                      | Agent → Mark → Agent                  | Proposed by Mark on 2026-08-19; identifier provisional. Reuses the reflection built for the invited page, but makes the homepage receive answers, so it requires public-collection approval.                                                                                                                                                                             |
| W7-L1f     | [ ] Variation 4 and beyond — further call-to-action tests, defined once the earlier variations produce results.                                                                                                                                                    | Agent → Mark → Agent                  | Proposed by Mark on 2026-08-19; identifier provisional. Placeholder with no scope defined yet.                                                                                                                                                                                                                                                                           |
| W7-L2a     | [ ] Prepare a bounded manual LinkedIn batch; separately approve public collection, deployment/Production target, audience, named outreach drafts, and sends; Mark manually sends the approved messages.                                                              | Agent → Mark → Agent, then Mark sends | Needs a recorded `W4b-walk` and accepted W7-L0a; no automatic outreach                                                                                                                                                                                                                                                                                                             |
| W7-L2b     | [ ] Synthesize replies, objections, link-open confidence, human-like engagement, reflection progress/results use, voluntary identification, conversations, and requested next steps.                                                                                 | Agent                                 | Evidence distinguishes learning, buyer intent, and commitment                                                                                                                                                                                                                                                                                                             |
| W7-L2c     | [ ] Record Mark's advance, revise, or park decision.                                                                                                                                                                                                                 | Mark                                  | L3 resumes only if Mark confirms buyer intent                                                                                                                                                                                                                                                                                                                             |
| W7-L3-gate | [ ] Confirm a concrete organization-participating next step: pilot-design discussion, pricing/budget/procurement question, decision-group introduction, staff-cohort evaluation request, or equivalent.                                                              | Mark                                  | **Deferred; explicit L3 resume gate**                                                                                                                                                                                                                                                                                                                                     |
| W7-L4-gate | [ ] Confirm commercial commitment or repeated manual operating pain: accepted pilot, LOI, agreement, payment, other resource commitment, or a recurring scale problem.                                                                                               | Mark                                  | **Deferred; explicit L4 resume gate**                                                                                                                                                                                                                                                                                                                                     |


Clicks, scrolls, reflection completion, demo use, and positive comments are
learning signals. They do not independently satisfy W7-L3-gate. W8/W9 are
technical/post-beta workstreams and do not prove buying signal or traction.

Boundary for the `W7-L1c`–`W7-L1f` call-to-action variations: a phone number is
directly identifying personal information and is a category MindfulText has not
collected before, so `W7-L1c` and `W7-L1d` need a dated decision record covering
purpose, retention period, deletion, who may access the numbers, and the message
sent to the person, before either is built. `W7-L1d` deliberately omits the
no-contact reassurance to test its effect on response; omitting the sentence
must never change what actually happens to the number, because contacting
someone whose page implied otherwise is both a legal exposure under US
telephone-contact rules and the kind of reputational error this buyer segment
does not forgive. Numbers collected under `W7-L1d` therefore receive the same
treatment as `W7-L1c` unless separate consent is recorded.

Gate: W7-L2c records a founder-reviewed evidence decision. A future broader
beta, main-domain change, payment path, or automated/provider-connected launch
requires a separate plan and authorization.

## W8 — Read-only legacy catalog (post-beta)

Deferred; begins after beta acceptance. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## W9 — Local-agent analysis and drafting (post-beta)

Deferred; begins after W8. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## W10 — Legacy publishing research (independent later program)

Deferred; separate later program. Production publishing,
rename/update/archive/journey mutation, and subscription launch remain
prohibited until its archived validation sequence is completed. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## W11 — Legacy security and connector hardening (post-revenue)

Deferred; starts after revenue, or before any legacy system is reused,
connected, deployed, or exposed — whichever comes first. **Deferral is not
permission to reconnect an old system;** no legacy system returns to use until
its archived inventory, rotation, scan, clean-boundary, and acceptance items are
completed. Items: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## Completion evidence

Record what was actually done and checked — the commands run, tests passed, or
walk performed — specific enough that a later reader can trust or rerun it.

The full matrix (contract fixtures, authorization-failure evidence, retry
drills, rollback notes) applies only where a task touches a real person's
private information, sends or publishes externally, spends money, or cannot be
undone. Its original wording is preserved in
[the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md). Retired for all other
tasks by [[decisions/2026-08-19-growth-process-right-sizing|DR-58]].