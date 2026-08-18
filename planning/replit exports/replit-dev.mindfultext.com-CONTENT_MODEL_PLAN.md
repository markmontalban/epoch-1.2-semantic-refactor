# MindfulText Legacy API Inventory & Reversible Content-Model Plan

**Decision date:** August 6, 2026  
**Scope:** planning and read-only research only. This document proposes no code,
schema, data, or behavior changes.

## Executive summary

The non-negotiable rule is **never rename, only add**.

An existing MindfulText module name is a load-bearing production compatibility
reference. Leave every existing upstream module and its `name` unchanged. Give
each catalogued item a new, immutable local key; preserve the original module
name in an immutable `legacy_name` field; and let a human-editable display title
change independently. A replacement is a **new** content item and, if it is ever
published, a **new** upstream module. It records a `supersedes` link to the
older item. It never edits, archives, or renames the older module.

The legacy service is a useful delivery system, not a content-management
system. The sampled data has ordered module texts, journeys, flat tags, keyword
actions, delivery records, and MMS media URLs. The safe-read evidence did
**not** reveal a review/publish workflow, rich metadata, a tag taxonomy, or a
safe staging area. Its documented module create/update routes are immediately
live. Therefore:

1. Keep editorial identity, taxonomy, review, publishing decisions, scheduling
   intent, and replacement relationships in the local Replit layer.
2. Keep legacy IDs, names, ordered text payloads, actual delivery records,
   actions, journey membership, and carrier-side outcomes authoritative
   upstream.
3. Make the first build a **local-only catalog**. It must make no upstream
   write and must not affect sending.
4. Do not build an upstream publisher until its only action is a separately
   confirmed, add-only `POST`, with a validated, frozen local approval record
   and an audit trail. Keep it hard-blocked from production until isolated
   tests establish targeting and scheduler safety.

### Questions still open after safe reads

The live read-only probe could not establish the semantics for arbitrary/event
delivery, schedule writes, carrier selection, segment counting/pricing, action
writes, or a guaranteed reply-attribution rule. Those gaps are itemized in
[Unresolved upstream facts and smallest safe validations](#unresolved-upstream-facts-and-smallest-safe-validations).
Do not turn any of them into product promises or hard-coded local behavior.

---

## Research boundary, sources, and evidence labels

### Boundary honored

This work made no production content, database, schema, application, or
delivery changes. The direct probe authenticated using the existing
cookie-session login flow. Authentication required `POST /api/login`, which
does not create or change content. **Every capability probe after login was
`GET` only.** No `POST`, `PUT`, `PATCH`, `DELETE`, archive, launch, send, or
write endpoint was called against MindfulText.

No credential, message body, phone number, contact data, or cookie is retained
in this document.

### Evidence labels

| Label | Meaning |
|---|---|
| **Live read — Aug. 6, 2026** | Direct authenticated `GET` observation during this task. It proves returned read shape, not an undocumented write or scheduler behavior. |
| **Verified reference** | `LEGACY_API.md`, whose provenance states that it was previously sampled from live org `00000022` (283 modules, 278 contacts, and 352 messages). |
| **Local inspection** | Current Replit code and schema. It describes this dashboard only; it is never proof that upstream supports a behavior. |
| **Unknown** | Not established by a safe read or verified reference. It needs the smallest explicitly approved future validation listed below. |

---

## Capability inventory

Confidence describes the fact in the answer, not a guarantee that undocumented
write behavior will accept every similar payload.

| Capability question | Answer | Endpoint / returned field | How I verified this | Confidence and operational implication |
|---|---|---|---|---|
| **How is a module identified?** | Modules have an 8-character, zero-padded numeric **string** ID (for example, an ID matching `^\d{8}$`). A module also has a human-readable `name`. Treat the padded ID as an opaque string; parsing it as a number loses leading zeroes. | `GET /api/modules/byOrganization/00000022?page=1&limit=3` → `data[].id`; `GET /api/modules/{id}` → `data.id`, `data.name` | **Live read:** sampled list and detail. **Verified reference:** `LEGACY_API.md` documents this format across entities. | **High** for returned identifiers. The read-only probe cannot prove exactly what an upstream name change would break. The founder’s stated production contract says backend behavior reacts to names, so preserve name immutably as a compatibility key and never rename it. |
| **How is a message identified and addressed?** | A delivered message has its own padded string `id`. Module-authored texts do **not** expose an ID; they live in ordered `module.texts[]` and messages point back with `moduleID` plus numeric `moduleMessageIndex`. | `GET /api/messages/byOrganization/00000022` → `id`, `moduleID`, `moduleMessageIndex`; module detail → `texts[]` | **Live read:** sampled message field keys and types; module detail returned five ordered texts. **Verified reference:** text position linkage. | **High** for read linkage. A local item referring to a legacy text needs both module ID and zero-based/observed upstream text position, not a made-up text ID. |
| **Are texts ordered? Are journeys ordered?** | Yes. A module owns ordered `texts[]`. A journey returns ordered `moduleIDs[]`; the observed object has no per-membership metadata or join ID. | Module detail → `texts[]`; `GET /api/journeys/byOrganization/00000022` → `moduleIDs[]` | **Live read:** both arrays returned; representative journeys carried ordered module ID arrays. **Verified reference:** `LEGACY_API.md` states journey reordering rewrites the array. | **High** for order. Do not encode editorial identity in an array index; retain it only as an optional upstream address/reference. |
| **What legacy module fields are visible?** | Sampled modules return `id`, `organizationID`, `name`, `description`, `tags`, `texts`, `isPublic`, `isArchived`, `createdAt`, and `updatedAt`. Timestamps are documented as epoch seconds. | Module list/detail fields | **Live read:** list and detail key sets. **Verified reference:** timestamp unit and full sample shape. | **High** for sample shape. Do not assume a field absent from this sample can never exist. |
| **Can tags or arbitrary metadata be attached?** | Modules, contacts, journeys, and actions support flat `tags: string[]` where present. No arbitrary key/value metadata facility was demonstrated. `GET /api/customFields/byOrganization/00000022` returned 404. | Module `tags`; contact `tags`; custom-fields endpoint | **Live read:** module/contact tags and custom-fields 404. **Verified reference:** tags are unvalidated flat strings; no registry; fixed closed entity schemas. | **High.** Upstream tags are unsuitable as the local taxonomy: they are flat, case-sensitive, can be empty, and a rename is a rewrite. Store structured taxonomy and per-item tags locally. |
| **Is there a message type, category, or track?** | `messages[].type` exists, but prior live sampling found only `"text"` and it does not distinguish SMS from MMS. No content category/track field or type vocabulary was established. The dashboard’s `moduleType` value is local/client-sent and is not returned on sampled modules. | `GET /api/messages/byOrganization/{org}` → `type`; module detail keys | **Live read:** `type` field is present on messages; sampled module key set has no `moduleType`. **Verified reference:** all 352 sampled messages had type `text`; locally sent `moduleType` is not echoed. | **Medium.** Use a local, data-driven content-type vocabulary. Do not infer that `moduleType: "sms"` is an accepted or meaningful upstream category. |
| **Does upstream have approval, review, draft, liked, or publish state?** | Could not find one. The only observed content lifecycle-like flags are `isArchived` and `isPublic`; they are not an approval gate. The verified reference found no `status`, `approvedBy`, or `reviewState` fields. | Module/journey/action reads → `isArchived`, `isPublic` | **Live read:** sampled module, journey, and action key sets. **Verified reference:** broader live survey. **Local inspection:** draft states are in local Postgres. | **High.** Treat an accepted upstream write as live; approval must remain local. There is no demonstrated upstream undo/un-send or staging state. |
| **What module and message statuses exist?** | Sampled messages expose `status`. Previously observed values are `queued`, `sent`, `delivered`, `webhook_delivered`, `delivery_failed`, and `delivery_unconfirmed`. Subscriptions expose `state`; previously observed values are `active`, `paused`, `sending`, `completed`, and `cancelled`. | Messages → `status`; `GET /api/subscriptions/byOrganization/{org}` → `state` | **Live read:** fields are present. **Verified reference:** observed values across the live sample. | **Medium-high** for observed values, not an exhaustive enum. Keep local editorial state separate from delivery state. |
| **What scheduling model is visible?** | Journeys expose `launchDays` (weekday booleans), `launchTime`, `schedule` (weekday booleans), and ordered `moduleIDs`. Subscriptions expose `startDate` and `nextMessage`, whose sampled shape has `moduleID`, `moduleIndex`, and `sendAt`. | Journeys → `launchDays`, `launchTime`, `schedule`, `moduleIDs`; subscriptions → `startDate`, `nextMessage.sendAt` | **Live read:** sampled three journeys with weekday-shaped objects and launch times; sampled subscription shape. | **Medium for returned fields.** This proves the service has weekday/scheduled concepts. It does **not** establish schedule write payloads, timezone rules, arbitrary dates, recurrence options, event triggers, or how those fields interact. |
| **Can a message be scheduled arbitrarily or triggered by an event?** | **Could not determine.** No safe-read evidence exposed an arbitrary event trigger, arbitrary-date content schedule, webhook-to-send contract, or scheduler write endpoint. | No documented read field/endpoint proves it | **Unknown:** no inference from local schedulers or client code. | Keep delivery intent local and flexible; do not promise upstream event-triggered delivery. See the minimal safe validation below. |
| **SMS or MMS?** | MMS/media is supported in existing content: module texts have `mediaURLs[]`; prior live sample found media in 87 of 283 modules and 139 of 1,112 texts. Message records expose carrier `connection`; `type` is not the SMS/MMS discriminator. | Module text → `mediaURLs`; messages → `connection`, `type`; action automation values may include `mediaURLs` | **Live read:** text `mediaURLs` array shape; message `connection` and `type` fields; action automation shape includes `mediaURLs`. **Verified reference:** occurrence counts and carriers. | **High** that media exists. The current dashboard does not render or author it, so local planning must retain media references even before a UI supports them. |
| **What are SMS length limits, segmentation behavior, and carrier cost?** | **Could not determine.** The app’s 160-character advice is an authoring convention, not a demonstrated API limit. No returned segment-count or carrier-price field was found; API `segments` in list responses refers to pagination, not SMS concatenation. | No verified carrier-price/segment field | **Verified reference** plus safe reads of message/subscription fields. | **Unknown.** Do not use message length as a billing estimate or promise delivery format/cost. |
| **Can a carrier be selected?** | Messages return a `connection` field. Prior sample had mostly `telnyx`, some `twilio`, and empty values. | Messages → `connection` | **Live read:** field present. **Verified reference:** sampled value distribution. | **Low-medium.** Returned carrier is evidence of delivery routing, not evidence of a selectable carrier, eligibility rule, or price. |
| **How do reply calls to action work?** | A module text and a delivered message can carry `actionID` and `actionMatches[]`. Actions return `automations[]`; sampled automations have `type` and `values`, and observed values can include `actionMatches`, `content`, and `mediaURLs`. | Module texts/messages → `actionID`, `actionMatches`; `GET /api/actions/byOrganization/{org}` → `automations[].type`, `automations[].values` | **Live read:** all named fields and automation shapes. **Verified reference:** reply keywords fire actions; `sendMessage` actions can have media. | **Medium.** A local content item may reference an existing action and its expected keywords, but keyword matching, action execution timing, and action write contracts remain unverified. |
| **Are inbound replies captured and attributable to the prompting message?** | Messages have `outbound`, `isReplyingToMessageID`, `wasRepliedTo`, `moduleID`, and `moduleMessageIndex`, which are promising linkage fields. **Could not determine** whether every inbound reply is reliably linked to the exact prompting message, especially after back-to-back texts. | Messages → `isReplyingToMessageID`, `wasRepliedTo`, `moduleID`, `moduleMessageIndex` | **Live read:** fields present on sampled inbound/outbound-shaped records. **Verified reference:** module text positional linkage. | **Medium for available fields; unknown for attribution guarantee.** Present local attribution should remain explicitly probabilistic/derived until a controlled test confirms the rules. |
| **Can content be created or updated through the API?** | Module routes are documented: create `POST /api/modules/{orgId}` and update `PUT /api/modules/{moduleId}`. Texts appear embedded in a module rather than independently addressable. The verified reference says null array fields are rejected on `PUT`. | Documented module endpoints; module detail → embedded `texts[]` | **Verified reference:** endpoints and broader live evidence. **Local inspection:** dashboard calls create route, but that is not proof of all upstream validation rules. | **High** that routes exist; **not verified in this task** because writes were prohibited. Both routes are dangerous: a successful write is immediately live. No add-only publisher may call `PUT`. |
| **Can actions be created/updated?** | **Could not determine.** A safe `GET` lists actions and their automations, but no verified creation/update route or required action payload is available. | `GET /api/actions/byOrganization/{org}` only | **Live read** for list shape; no write probe. | **Unknown.** Future publishing must initially reference existing action IDs only; it must not create or edit actions. |
| **What does the legacy API lack for a modern content system?** | The sampled fields and verified reference did **not** establish approval/staging, immutable editorial identity independent of name, rich metadata, normalized taxonomy, version/supersession links, native review history, published revision audit, reliable event intent, documented arbitrary scheduling, pricing/segment accounting, or a proven reply-attribution contract. | Absence across sampled entity shapes; custom-fields 404 | **Live read**, **verified reference**, and **local inspection** separated above. | Plan these as local-layer responsibilities unless later API-contract evidence changes the conclusion. Carrier billing/routing facts remain upstream/unknown until validated. |

### Important distinction: current dashboard behavior is not upstream evidence

The current dashboard can generate local drafts and its push route builds an
upstream module payload. That confirms what this dashboard *attempts* to send;
it does not prove that every sent field is honored by MindfulText. In particular,
the local `moduleType` default has not appeared in a sampled legacy module
response. Conversely, the dashboard does not presently surface `mediaURLs`,
even though safe reads and the verified reference show that upstream uses them.

---

## Unresolved upstream facts and smallest safe validations

None of the validations below is part of this plan. Each requires a separate
written go-ahead, a non-production or explicitly isolated test organization,
and a named operator. Do not run it against production simply to reduce
uncertainty.

| Unverified fact | What safe reads established | Smallest safe future validation | Why it is gated |
|---|---|---|---|
| **Scheduling write semantics** — accepted `launchDays`, `launchTime`, `schedule`, timezone, and whether modules use those fields | Journey and subscription reads expose schedule-shaped and `sendAt` fields. | In a test org with one test contact, create one clearly labeled disposable module/journey with a far-future schedule; GET it back; observe no message is sent. Then delete/expire it only if the test environment’s cleanup policy permits. | A bad schedule can send a real SMS. Read shapes cannot prove writes or timing behavior. |
| **Arbitrary-date / arbitrary-event delivery** | No event trigger contract or arbitrary-date delivery record was found. | Ask for the legacy API contract/source first. If still needed, run one isolated test-org experiment with a no-delivery safeguard and an event that cannot target production contacts. | An event trigger could immediately deliver, and no current evidence describes its safety boundary. |
| **Carrier selection, SMS/MMS segmentation, and cost** | Messages expose carrier after the fact; media URLs exist; no cost/segment fields are visible. | Obtain carrier account documentation/invoice access and legacy API implementation documentation. If a live test is necessary, send one consented test SMS and one consented test MMS from an isolated number, then reconcile carrier logs/invoice. | This requires actual billable sending. Do not infer cost from character count or an API pagination field. |
| **Action creation/update and keyword semantics** | Existing actions expose automation shape and keyword-looking fields. | First inspect a legacy API contract or source. Then, only in a test org, create one disposable action and module that points to it; use a consented test contact to send one exact keyword and one near match; read resulting messages/events. | It can send an automated reply and potentially create a loop. |
| **Reply attribution, especially two close replies** | `isReplyingToMessageID`, `wasRepliedTo`, module ID, and text index exist. | Use a test contact to receive two known texts separated by a defined short interval, reply once to each, and compare the returned message links with expected IDs/indices. Repeat with delayed and unmatched replies. | Read-only production history cannot prove causality. This test may send messages, so it needs consent and isolation. |
| **Exact module create payload and validation rules** | Reads show the returned module/text shape; a create route is documented. | In a test org, submit one minimal disposable add-only module with a non-targeting test tag; immediately GET it back and record normalization/returned ID. Do not use `PUT`. | A write may become live on the next scheduler tick; test targeting and owner confirmation are essential. |
| **Whether a module name is mutable upstream and all consequences of changing it** | Reads establish `name` exists; founder context establishes it is load-bearing. | Do **not** validate by renaming production. If it ever matters, investigate legacy source or use a fully disposable test module and dependent test automation. | The correct operating rule already avoids this risk: never rename existing modules. |

---

## Ownership map: one source of truth per field

“Upstream authoritative” means the value comes from MindfulText and is copied
locally only as a cache/reference. “Local authoritative” means it must never be
reconstructed from a flat upstream tag or title. “Snapshot/reference” is
immutable evidence about an upstream object, not a second editable source.

| Field / concern | Proposed authority | Local representation / rule | Upstream representation / rule |
|---|---|---|---|
| Local immutable identity | **Local authoritative** | `content_key`: generated UUID/ULID, never edited or reused. | None. Never use module name or upstream ID as the local primary key. |
| Organization boundary | **Both, with upstream ID as external reference** | Store padded `organization_id` with the item. | Existing padded `organizationID`. Preserve as a string. |
| Legacy module ID | **Upstream authoritative; local reference** | Optional `legacy_module_id`, immutable once linked; add-only publish records returned ID. | Module `id`. Never parse as number. |
| Legacy text address | **Upstream authoritative; local reference** | Optional `legacy_text_position` plus `legacy_module_id`; it is an address, not identity. | Ordered `texts[]` position and messages’ `moduleMessageIndex`. |
| Existing legacy module name | **Snapshot/reference, immutable locally** | `legacy_name`, set when catalogued; never edited. Keep even if an external system later changes it, with observation history rather than overwrite. | Existing module `name`; no future plan calls upstream rename/update. |
| Display title | **Local authoritative** | Editable `display_title`, used in dashboard/editorial views. | Never needs to equal legacy name. A future new module may receive an explicitly approved new legacy name. |
| Description/editorial notes | **Local authoritative** | Local rich text/JSON notes and revision history. | Existing legacy `description` stays a reference; do not repurpose it as metadata. |
| Content type vocabulary | **Local authoritative** | Data rows such as `content_types` (`type_key`, label, description, active flag, optional validation schema). No closed application enum. | No proven upstream category/track capability. |
| Per-item content type | **Local authoritative** | Foreign key to a type row, not a hard-coded string enum. | Do not map blindly to legacy `messages.type` or local `moduleType`. |
| Taxonomy dimensions | **Local authoritative** | Data rows for dimensions such as skill, outcome, audience, occasion, difficulty; dimensions can be added without code/schema rework. | None. |
| Taxonomy values and per-item tags | **Local authoritative** | Normalized tag/value records and item-to-value joins; optional free-text notes. | Optional delivery/audience tag mapping only when an approved publishing decision requires a particular flat contact tag. |
| Upstream flat tags | **Upstream authoritative for actual delivery targeting** | Store observed upstream strings as a read-only mapping/reference with normalization warnings. | Module/contact/journey/action `tags[]`; preserve exact casing and values. |
| Message body, subject, media, action keywords | **Dual, but by lifecycle** | Draft/approved/publish-candidate revision is local authoritative until published; preserve structured text fields, media references, and intended action reference. | Published legacy module `texts[]` is authoritative for what delivery uses. After publish, record a read-back snapshot and do not silently overwrite the approved revision. |
| Media asset references | **Local authoritative before publish; upstream after publish** | Local asset/reference record with source, rights/status, and optional target URL. | `mediaURLs[]` on published texts/actions. Do not claim upload behavior until separately verified. |
| Action reference | **Upstream authoritative for existing action** | Optional `legacy_action_id` reference plus local intended keyword/action notes. | Text `actionID`, `actionMatches[]`; action automations. Initial publisher only references an existing verified action ID. |
| Editorial review/approval/publish state | **Local authoritative** | Explicit state machine, approver, timestamps, immutable approved revision/hash, and audit log. | No demonstrated upstream equivalent. `isArchived`/`isPublic` are not approval. |
| Scheduling/delivery intent | **Local authoritative** | Flexible intent record and parameters; intent is a plan, not proof of upstream scheduling. | Upstream journey schedule/subscription state remains authoritative for actual delivery after it has been configured by a separately approved process. |
| Actual sends, delivery outcomes, carrier | **Upstream authoritative** | Local read cache/event log may reference source message IDs and observation time. | Message `status`, `connection`, timestamps, subscription `state`/`nextMessage`. |
| Supersession/replacement | **Local authoritative** | Directed `supersedes` relationship from new item to old item, with reason and date. Never change the old item’s identity/name to simulate a replacement. | No demonstrated relationship field. Old and new module IDs remain separate. |

---

## Minimal extensible local model (proposal, not an implementation)

This is deliberately a small catalog and review model, not a scheduler,
microservice program, or bulk migration.

### Plain-language terms

- **Local:** stored in the Replit layer, under this product’s editorial control.
- **Upstream:** stored in the older MindfulText service that actually delivers
  messages.
- **Add-only:** may create one new upstream module; may not edit, rename,
  archive, attach, launch, or send through an existing one.
- **Legacy text address:** the upstream module ID plus its text’s position in
  that module’s ordered list; useful for lookup, but not an identity.
- **Frozen revision:** the exact approved text/media/action package saved so
  later edits cannot change what the operator publishes.
- **Audience/tag mapping:** an explicit choice of which exact upstream flat tag,
  if any, the new module uses for delivery targeting.
- **Reconciliation required:** stop automatic retry and have the operator
  search upstream for the new module before deciding whether another create is
  safe.

### 1. Content item: one polymorphic catalog record

Use **one** `content_item` table with a data-managed `item_kind` reference
(initial values can be “module” and “message”; it is not a closed application
enum). An item is either:

- a **module container**, optionally with ordered message children; or
- a **message/one-off**, with no child items.

Only a module container may have children. A child must have one parent; its
`ordinal` is unique within that parent and determines authoring/publish order.
Never reuse an ordinal after deleting a draft; use a new ordinal or retain the
withdrawn child in history. Do not hard-delete an approved/published item:
retire it locally and retain its immutable identity, legacy references, and
supersession links.

Minimum proposed fields:

| Field | Purpose |
|---|---|
| `content_key` | Immutable generated local identity. |
| `organization_id` | Padded upstream organization reference. |
| `item_kind_id` | Data-managed “module,” “message,” or future kind. |
| `parent_content_key` (optional) | Lets a weekly module contain message items while a one-off has no parent. |
| `ordinal` (required for a child) | Unique order within its module parent; not a durable identity. |
| `legacy_module_id`, `legacy_text_position` (optional) | Optional address of existing/published upstream content. |
| `legacy_name` (optional, immutable) | Original production module name for catalogued legacy modules. |
| `display_title` | Editable human title. |
| `content_type_id` | Reference to a data-managed type vocabulary record. |
| `current_revision_id` | Points to structured editorial content/revision. |
| `review_state` and audit fields | Local editorial lifecycle only. |
| `supersedes_content_key` (optional) | Simple initial replacement relationship; use a relationship table later only if multiple relationship types become necessary. |

For legacy content, catalog an upstream module as a module container and its
ordered texts as message children. The child’s positional field is a
compatibility address, not its durable identity. For new content, create the
local item first and only add an upstream reference after a successful,
human-confirmed publish.

### 2. Revisions: freeze what a human approved

Store editable content in `content_revisions`, not by overwriting the last
approved body. A revision can hold:

- `subject`, `content`, `media_references`, intended `action_reference`, and
  intended `action_matches`;
- provenance (manual, AI draft, imported legacy observation);
- character-count guidance as advice, **not** a carrier-cost guarantee;
- validation results, reviewer, approval time, and content hash.

Once approved, the exact revision is immutable. Further editing creates a new
draft revision. This makes a future publish auditable and prevents “approved”
from meaning an unrecorded, mutable screen state.

### 3. Types and tags are data, not hard-coded application categories

Use a small editable vocabulary:

- `content_types`: stable local key, label, description, active flag, optional
  validation/configuration JSON.
- `tag_dimensions`: stable key and label (initially skill, outcome, audience,
  occasion, difficulty; more can be added).
- `tag_values`: belongs to a dimension, has a stable local key, label, optional
  description/retirement status.
- `content_item_tags`: many-to-many item/value links.

The dimension names are seed data, not a closed enum. A later “life stage,”
“language,” or “clinical review” tag adds a row rather than changing a module
schema or overloading upstream tags.

### 4. Delivery intent: one flexible concept, no weekday assumption

Represent a content item’s *intended use* separately from its body:

| Proposed intent shape | Example |
|---|---|
| `intent_type_id` from a data-managed vocabulary | `sequence_member`, `occasion`, `manual_campaign`, or a future type |
| `parameters` JSON | Sequence position/cadence guidance, event description, date window, audience criteria, source system reference, etc. |
| `status` | Planned/disabled/retired locally; not an upstream delivery state |
| `effective_from` / `effective_to` (optional) | Editorial validity window, not proof of a scheduled send |

A current five-message week may have one module item with five ordered child
items, each marked as a `sequence_member` with guidance such as `ordinal: 1…5`.
Nothing requires Monday–Friday. A birthday, holiday, enrollment milestone, or
other occasion message is a standalone item with an `occasion` intent and
parameters describing the trigger. Both use the same identity, revision,
taxonomy, review, and supersession structure.

This model intentionally does **not** implement a generalized scheduler. Until
the legacy schedule/event contract is validated, intent stays editorial and
local; it does not automatically translate into an upstream send.

---

## Review and add-only publish design

### Local workflow

Proposed transition path:

`draft → in_review → approved → publish_requested → published`  
with terminal/local branches `rejected`, `withdrawn`, and `superseded`.

Only the local system owns these states. Require:

1. a named reviewer and timestamp for approval;
2. a frozen approved revision/hash;
3. explicit selection of audience/tag mapping, media handling, and action
   references;
4. a human-readable warning that the legacy service has no staging/unsend
   state; and
5. a second explicit operator confirmation for the exact frozen revision,
   target organization, proposed **new** legacy name, and planned add-only
   action.

No status transition may rename an existing legacy item. No local state change
is itself an upstream write.

### Future publisher: narrow, add-only, and human-confirmed

The first publisher must only create a new module using
`POST /api/modules/{orgId}`. It must never call `PUT /api/modules/{moduleId}`,
archive an old module, modify a journey, create/edit an action, launch a
subscription, or send a message.

Before it permits an **isolated test-org** request, it must validate:

- item is locally `approved`, with an immutable approved revision;
- the request includes an explicit one-time human confirmation bound to the
  revision hash, organization, proposed legacy name, and expiry;
- a durable publish-attempt record is created **before** the upstream request,
  keyed by immutable revision hash plus organization, with serialization so two
  operators cannot submit the same revision concurrently;
- no prior successful or unresolved attempt exists for that idempotency key. A
  timeout, ambiguous response, or local save failure forces
  `reconciliation_required`: search upstream and resolve the original attempt
  before another create is possible;
- a new legacy name is present, unique in the current upstream module catalog,
  and is not copied over an existing load-bearing name;
- each text has a non-empty `content`; ordered texts are materialized
  deterministically;
- every payload field beyond required non-empty content—including the empty vs.
  omitted behavior of `subject`, `actionID`, `actionMatches`, and
  `mediaURLs`—has passed test-org create and read-back validation. The observed
  read shape is a hypothesis, not yet a proven create contract;
- every specified action ID exists in a fresh upstream action read; every
  audience tag is an intentionally selected, exact upstream tag; and
- media URLs, if any, are valid references approved for the relevant content.

The safe **candidate payload** is based on fields observed in module reads:
`name`, optional `description`/`tags`, and ordered `texts` whose observed shape
contains `subject`, `content`, `actionID`, `actionMatches`, and `mediaURLs`.
This is not yet a proven create contract. The publisher must therefore require
a one-time test-org validation before it is enabled for production.

On an accepted create response, record the returned padded module ID, exact
approved revision hash, request/response metadata with sensitive values
redacted, and a fresh read-back snapshot. Never blindly retry a create.

### Live-sending safety

“Create a module” is not equivalent to “harmlessly save a draft.” The verified
reference states legacy writes can become sendable on a scheduler tick and
there is no upstream staging/unsend. Later publishing must be separately gated
from any delivery enrollment/launch behavior and start only in an isolated test
organization.

**Hard production block:** do not enable any production create while any of
these remain unproven in an isolated organization: (1) what makes a created
module eligible for a send, (2) whether a module tag can target active
production-like contacts, (3) whether it can be attached to a journey or
subscription without an explicit separate action, and (4) a recipient-impact
preflight that shows the operator the exact test/production organization,
selected tag, matching-contact count, existing journey/subscription links, and
whether any send is possible. A production add-only create is not a rollout
step in this plan; it becomes eligible only after that separate evidence exists
and a founder explicitly accepts the remaining risk.

---

## Incremental rollout

| Step | Smallest deliverable and what it unlocks | Can it affect live sending? | What could break | Reversal |
|---|---|---:|---|---|
| **0. This planning release** | This evidence-backed inventory, ownership decision, and safety boundary. Unlocks informed scope decisions. | **No** | Only a decision/documentation risk; it changes no system. | Delete/revise the document. |
| **1. Local-only legacy catalog** | Add the proposed local identity, legacy-reference, title, type, taxonomy, revision, and supersession records; import/copy through authenticated GETs only. Show existing modules/texts without editing them. Unlocks searchable, safely renamed-for-display cataloging and replacement planning. | **No** | Bad field mapping or duplicate local imports; no upstream effect. | Disable feature and delete only the new local catalog records after backup/export. No upstream cleanup needed. |
| **2. Local drafting and review** | Let a reviewer create new local items/revisions, tag them, and move them through locally enforced review states. Keep all publish controls absent/disabled. Unlocks reliable approval and editorial work for weekly and occasion content. | **No** | Confusing workflow or local-data quality issues. | Disable feature; drafts/revisions remain local and can be withdrawn or exported. |
| **3. Isolated add-only publisher validation** | In a test organization, validate one minimal disposable module payload, read it back, prove field semantics and duplicate/reconciliation handling, and establish the recipient-impact preflight. Unlocks evidence for a narrow publisher contract. | **Potentially** (test recipient only) | A test record could schedule/send; duplicate create or target error. | Use a named test org/contact/tag; do not test on production; follow the test environment’s cleanup policy. |
| **4. Production-readiness decision (hard gate, not a release)** | Review test evidence for eligibility, targeting, journey/subscription links, recipient impact, and no-send/staging behavior. Unlocks a founder decision only if all gates pass. | **No** | Mistaking incomplete evidence for safety. | Keep publisher blocked; no upstream content exists from this step. |
| **5. Production add-only publish, only after Step 4 passes** | Enable only approved frozen revisions to create new modules; log the returned ID and create a local supersession link where applicable. | **Yes** | Immediate eligibility for delivery, duplicate module, wrong tag/action/media. | **No rollback or unsend is demonstrated.** Disable publisher, treat an unexpected delivery as an incident, and contact the upstream operator; never mutate the original module. |
| **6. Optional delivery experimentation** | Separately validate scheduling/event/attribution and, only after evidence, map selected local delivery intents to a limited legacy behavior. Unlocks measured occasion-based delivery. | **Yes** | Real subscriber messages, billing, attribution ambiguity, and unintended automation. | Feature flag off; start with isolated test contacts. This is not a rollback of already-sent messages. |

The smallest useful first build is **Step 1, local-only legacy cataloging**.
It creates a safe source of editorial truth and identity without touching any
sender. Do not combine it with drafting, publishing, scheduling, or a data
migration program.

---

## Decision log

| Decision | Why |
|---|---|
| Existing names are immutable local legacy references, not editable titles. | The founder established names as load-bearing production identifiers; read-only research cannot safely test renaming. |
| New local identity is generated independently of upstream IDs and names. | Texts are positional upstream and names are descriptive; neither is a stable editorial identity. |
| Rich taxonomy and workflow live locally. | Upstream supports only flat strings and has no demonstrated metadata or approval state. |
| Delivery intent is local and flexible, while actual delivery remains upstream. | Safe reads show weekday schedule-shaped fields but do not prove arbitrary/event behavior or write semantics. |
| Future publishing is `POST`-only and creates a new module. | `PUT` would violate “never rename, only add”; upstream has no staging/unsend. |
| The report does not infer behavior from dashboard code. | The local app omits known upstream media support and sends at least one field not observed in upstream module reads. |

## Evidence consulted

- **Direct live read-only probe, Aug. 6, 2026:** authenticated session followed
  by GETs for modules (list/detail), messages, journeys, subscriptions, actions,
  contacts, and custom fields on `dev.mindfultext.com`. Representative findings
  are labeled **Live read** above.
- **`LEGACY_API.md`:** existing live-verified reference for endpoint catalog,
  broader field sampling, IDs, media occurrence, tags, statuses, and the
  immediate-live write warning.
- **`README.md`, `server/mtClient.ts`, `server/routes.ts`,
  `server/personalJourney.ts`, `shared/schema.ts`, and `mindfultext.md`:**
  local inspection only, used to map current draft/review/push behavior and
  distinguish it from upstream facts.
