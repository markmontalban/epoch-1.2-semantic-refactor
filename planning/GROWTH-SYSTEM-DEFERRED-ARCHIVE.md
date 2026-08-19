# MindfulText Growth System — Deferred Archive

Last updated: 2026-08-19 08:03:40 PDT — edited by: Claude Dispatch

## Role

Parked work and retired process text. **Nothing here is pending.** Each block
names its resume trigger and where it came from. The
[Master Checklist](GROWTH-SYSTEM-MASTER-CHECKLIST.md) keeps a short stub for
each workstream and links here for the detail; the
[Ordered Task Map](GROWTH-SYSTEM-ORDERED-TASK-MAP.md) links here for the same
reason.

This file is not an execution authority, a status record, or a task list. It
exists so the active documents can stay short without losing scope. Moving text
here never deleted it and never changed a decision. Authorized by
[[decisions/2026-08-19-growth-process-right-sizing|DR-58]].

To reinstate any block, record a dated decision saying so and move the text
back; do not start work directly from this file.

---

## W3 — deferred entities

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** the work that needs them — W6 provider integration, or
`W7-L3` and later experiment/payment work — is authorized.

Core entities already exist through W3b (relationships, stages, timeline,
drafts) and W3d (recipient routes, visits, engagement, call requests). These
remain unbuilt: **campaign/membership/variant, experiment, and payment-reference
entities.** Original wording of the umbrella item:

> - [ ] Implement organization, prospect/identity, campaign/membership/variant,
>   outreach draft/observed event, relationship event, recipient route, visit,
>   exposure, engagement rollup, call request, stage/history, experiment, and
>   payment-reference entities.

---

## W4b-L1c and W4b-L2d — the original nineteen check categories

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** a later dated decision judging that scale, real user volume,
or an actual defect warrants per-category verification.

[[decisions/2026-08-19-growth-process-right-sizing|DR-58]] merged these two
rows and the W3d synthetic-funnel gate into one recorded walk, `W4b-walk`,
because all three described the same journey through the same page. Original
wording:

> | W4b-L1c | [ ] Pass L1 word-handle, lifecycle, forwarding, privacy, mobile, accessibility, logging, outage, and authenticated Preview acceptance. | Agent | Authorized by DR-57; not yet accepted. 2026-08-18 17:12 PDT: Growth Ops Preview resolve HTTP 200; public-site invitation page loads on `w1-clean-shell`; dead handle is generic unavailable. Short owner walk still required. No Production. |

> | W4b-L2d | [ ] Pass complete L2 contract, anonymous-data separation, consent, forwarded-link, masking, accessibility, mobile, performance, retry/outage, and authenticated Preview acceptance. | Agent | Laptop polish for cookie notice, forwarding copy, outage copy, and accessibility recorded 2026-08-17 (43 public-site checks, typecheck passed). Authenticated Preview still not accepted. No Production or public collection. |

Original W3d gate wording:

> Gate: synthetic branded recipient link → matched page → anonymous reflection →
> useful results → optional identity association or call request → manual review
> succeeds without leaking token, PII, or assessment answers.

---

## W5 — n8n automation foundation

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** commercial commitment, or repeated manual notification and
reconciliation pain. Not a dependency for the limited W7-L2 beta.

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

---

## W6 — Outreach and relationship integrations

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** commercial commitment, or repeated manual outreach and
relationship-reconciliation pain. DR-52 already extracted the narrow Unipile
LinkedIn read slice that `W7-L0a` needs; that slice stays active in the
checklist and is not parked here.

- [ ] Harden Unipile and verified/idempotent ingress; retain provider IDs.
- [ ] Support editable sequences while all first-phase messages stay draft-only.
- [ ] Sync Gmail metadata/snippets; fetch bodies only for named scoped jobs; do
  not continuously summarize.
- [ ] Reconcile manual Calendar/Zoom appointments to call requests.
- [ ] Verify Stripe signatures, acknowledge quickly, process asynchronously,
  and join payments to opportunities/cash-received stage.

Gate: outreach, replies, calls, and payments join without n8n owning state.

---

## W8 — Read-only legacy catalog

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** beta acceptance.

- [ ] Import verified snapshot locally; preserve padded IDs and names as
  immutable compatibility data.
- [ ] Add independent keys/display titles, ordered content data, taxonomy,
  revisions, provenance, and supersession.
- [ ] Refresh only through explicit GET endpoints; no proxy or publishing.

Gate: reproducible refresh with zero delivery-state writes.

---

## W9 — Local-agent analysis and drafting

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** W8 complete.

- [ ] Add scoped REST/OpenAPI and MCP-compatible read/draft tools.
- [ ] Keep the Mac harness outbound and named-task scoped.
- [ ] Generate multiple checked candidates with full provenance; return drafts
  to operations and notify through n8n.
- [ ] Prohibit automatic sends and automatic paid-model fallback.

Gate: private, reproducible, attributable drafts with no delivery capability.

---

## W10 — Legacy publishing research

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** a separate later decision. Production publishing,
rename/update/archive/journey mutation, and subscription launch remain
prohibited until this validation sequence is completed.

- [ ] Build a restricted adapter with read-only web credentials and separate
  disabled-by-default publish credentials.
- [ ] Validate one minimal create in an isolated organization, exact payload,
  sendability, targeting/linkage/actions/media/attribution.
- [ ] Add frozen revisions, idempotency, ambiguous-response reconciliation, and
  recipient-impact preview.
- [ ] Require a separate production-readiness decision; continue prohibiting
  rename/update/archive/journey mutation/subscription launch until validated.

Gate: no production publisher before isolated evidence resolves recipient risk.

---

## W11 — Legacy security and connector hardening

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger, verbatim and binding:** start after MindfulText generates
revenue, or earlier if Mark proposes reusing, connecting, deploying, or exposing
any legacy system. The earlier trigger wins. **Deferral is not permission to
reconnect an old system.**

This is intentionally outside the pre-validation and first-revenue critical
path. Keeping the clean public shell and validation workflow isolated is the
current control.

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

Gate: no legacy system returns to use until its applicable inventory, rotation,
scan, clean-boundary, and acceptance evidence is complete.

---

## Retired — the per-task completion-evidence matrix

Moved from `GROWTH-SYSTEM-MASTER-CHECKLIST.md`, 2026-08-19.
**Resume trigger:** a later dated decision, or the arrival of a task that
touches a real person's private information, sends or publishes externally,
spends money, or cannot be undone — for which this matrix still applies under
DR-58 item 2.

Original section, applied to *every* task:

> ## Completion evidence required from every task
>
> Automated tests proportional to risk, contract fixtures, authorization-failure
> evidence, retry/failure results, privacy/logging review, deployment/rollback
> notes, and exact evidence suitable for this checklist.

---

## Retired — the work-state label legend

Moved from `GROWTH-SYSTEM-ORDERED-TASK-MAP.md`, 2026-08-19.
**Resume trigger:** none expected. DR-58 replaced three overlapping status
systems (status, percentage, work-state label) with four plain values.

> `Work-state labels` are navigation aids, not a second status system:
> **Open work** means execution or evidence is still needed; **Needs Mark** means
> the next material move requires founder judgment/approval; **Acceptance gap**
> means implementation may exist but the named evidence tier is incomplete; and
> **Deferred by gate** means the work is intentionally waiting on its stated
> trigger or dependency.

The estimated-percent explanation, retired with the column:

> `Estimated % done` is a directional planning estimate for the task as scoped in
> its row—not a substitute for acceptance evidence or the canonical status label.

---

## Task-map change history before DR-56

Moved from `GROWTH-SYSTEM-ORDERED-TASK-MAP.md`, 2026-08-19. The five most recent
entries stay in the active roadmap; these are kept for the record.

- The required call-request name field (W3d-8 / W4b-L2c) is now in the laptop-only Growth Ops and public-site forms; 59 Growth Ops tests and 42 public-site tests passed on 2026-08-17. No storage-layout switch was run against any database.
- [DR-55](../decisions/2026-08-16-w4b-l1b-masked-analytics-replay.md) approves W4b-L1b's private invitation-to-engagement linkage and recipient-page-only PostHog replay. Replays are privacy-masked, retained for 30 days, and Mark-only; the purpose notice sits alongside the cookie notice. Reflection/results/contact paths, raw inputs, AI analysis, exports, and raw network/console capture remain excluded.
- W4b-L1a is **Confirmed at source/local only**: the semantic word-only recipient path, server-side resolver, generic invalid-link handling, and tests/build are complete. It does not establish a database, credential, Preview, deployment, collection, or public-route acceptance. W4b-L1b laptop-only event recording is also Confirmed per DR-56; W4b-L1c remains the private-test gate.
- [DR-54](../decisions/2026-08-14-word-only-opaque-route-handles.md) replaces visitor-visible opaque-token strings with approved semantic entry slugs and cryptographically random word-only opaque handles. The words carry no recipient or campaign meaning, contain no digits, and remain private invitation-level attribution—not proof of visitor identity.
- [DR-53](../decisions/2026-08-14-w7-homepage-finalization-priority.md) places the existing homepage's final copy and design tweaks at `W7-L1a`, immediately after W7-L0a and before the limited manual LinkedIn batch. It preserves the existing design, requires a later bounded founder final-content approval, and authorizes no new product strategy, collection, deployment, or outreach.
- [DR-52](../decisions/2026-08-14-w7-unipile-linkedin-attribution.md) corrects the W7 source: use the existing Unipile API LinkedIn connection for the narrow profile/invitation attribution slice. Broader W6 integrations and all LinkedIn sending remain deferred/manual.
- [DR-51](../decisions/2026-08-14-linkedin-profile-invitation-attribution.md) prioritizes `W7-L0a`: privately map each Unipile-resolved public LinkedIn profile to its opaque invitation and invitation-level activity. This remains invitation-level evidence—not proof of a profile-owner visit—and does not link reflection answers.
- [DR-50](../decisions/2026-08-14-w4a-l2b-custom-reflection-direction.md) completes W4a-L2b direction: use a small custom, Formbricks-inspired fixed-choice reflection, not Formbricks Cloud or self-hosted Formbricks. Build, data collection, deployment, and identity connection remain separately approval-gated.
- [DR-49](../decisions/2026-08-14-opaque-invitation-attribution-prototype.md) amends the prototype boundary: retain private opaque-token invitation attribution, but do not disclose that attribution to visitors. Recipient-facing disclosure and expanded identity-association work wait until significant revenue; no implementation, provider, collection, or outreach was authorized.
- [DR-48](../decisions/2026-08-14-w4a-l2a-fit-reflection-direction.md) completes W4a-L2a direction: the leader-useful workday-refocus reflection, fixed-choice questions, non-scored results, and no-collection boundary are approved. DR-50 subsequently completes the reflection-approach choice; no implementation, provider, collection, or outreach was authorized.
- W1b moved to **Confirmed**: the authenticated `w1-clean-shell` Vercel Preview rendered the stateless shell and correlated runtime logs recorded `GET /` = `200`. No Production deployment or public launch occurred.
- W2b moved to **Confirmed**: Ready `w2-preview` deployment `4wiAjnKWgfZ17rp88qeSxKpTpLCQ` passed owner OAuth, correlated callback/root/readiness logging, and authenticated non-owner rejection. The temporary non-owner Vercel access was revoked and must not be restored. The simple deployed page is intentional Preview content, not an app error.
- W3b moved to **Confirmed** on the separately authorized disposable Neon target `growth-ops-dev / W3b-testing`: the owner-service synthetic workflow, sensitive-metadata rejection, audit/timeline evidence, cleanup, and idempotent migration rerun passed. This does not establish Preview, provider, Production, sending, or buyer-validation acceptance.
- Growth authority is reconciled: this roadmap is founder-facing, the Master Checklist is agent execution authority, and dated decision records govern approvals. Product/customer PII remains separate from the owner-reviewed Growth source archive policy.
- W5a now has a planning-only `call-request.notify` map. No n8n workflow was imported, activated, connected, or credentialed.
- An uncommitted `mindfultext-web` buyer-facing page exists only as a W4 hypothesis/copy prototype. It is not approved beta copy and does not complete W4.
- Git inspection found configured GitHub remotes for `growth-ops` and `mindfultext-web`. The local `n8n` repository has no commits and no configured remote, so no canonical n8n repository URL is asserted here.
- Founder scope correction: legacy credential-history rotation, historical-app scans, and connector parity/cutover are not pre-validation work. They move to W11 after revenue, or before any legacy system is reintroduced—whichever comes first.
- [DR-46](../decisions/2026-08-13-l2-buyer-learning-funnel.md) sets the lean W4 path: keep the existing W4 umbrella, complete only L1/L2 additions now, use branded per-recipient links plus an optional privacy-forward fit reflection, and defer L3/L4, n8n activation, and provider connections until W7 produces a clear buyer signal or operational pain justifies them.
