# Legacy MindfulText API — Reference

Base URL: `https://dev.mindfultext.com`
Accessed from this app via `server/mtClient.ts` (`mtFetch` / `mtFetchJson`) and the
pass-through proxy in `server/proxy.ts` (`/api/proxy/mindfultext/*`).

Auth is cookie-session based: `POST /api/login` with
`application/x-www-form-urlencoded` `email` + `password`, then send the returned
`Set-Cookie` values on every subsequent call. Bad credentials come back as **400**,
not 401. Auto-login lives in `server/orgSettings.ts`.

Most list/detail responses are wrapped in a `{ "data": ... }` envelope. Errors come
back as `{ "errors": ["..."] }`.

> **Provenance:** everything below was verified against live `dev.mindfultext.com`
> responses for org `00000022` (283 modules, 278 contacts, 352 messages sampled),
> not inferred from client code. Where the app's own code disagrees with the live
> API, that gap is called out explicitly.

---

## 1. How modules are referenced

### ID format

All entities use **8-character zero-padded numeric strings**: `"00000023"`,
`"00000445"`. They are strings, not integers — never parse and re-serialize them,
or `00000023` becomes `23` and stops resolving.

Organization IDs use the same format. `server/proxy.ts` defensively re-pads and
rewrites any org ID appearing in a path or JSON body to the configured org
(`String(x).padStart(8, "0")`).

### Key naming is inconsistent — handle both casings

The API mixes casings across fields and endpoints:

| Concept | Keys seen in live payloads |
|---|---|
| Organization | `organizationID` (in bodies), `organizationId` (some request bodies) |
| Module ref | `moduleID` (messages, subscriptions), `moduleIDs` (journeys), `id` (module itself) |
| Action ref | `actionID` |
| Contact ref | `contactID` |

`server/linkHarvester.ts` additionally tolerates `id` / `_id` / `moduleID` when
reading a module ID. Client-side array coercion for both spellings lives in
`client/src/lib/api.ts` (`arrayFields`).

### Endpoints

| Purpose | Endpoint |
|---|---|
| List modules for an org | `GET /api/modules/byOrganization/{orgId}?page=&limit=` |
| Module detail | `GET /api/modules/{moduleId}` |
| Create module | `POST /api/modules/{orgId}` |
| Update module | `PUT /api/modules/{moduleId}` |
| List journeys | `GET /api/journeys/byOrganization/{orgId}` |
| List contacts | `GET /api/contacts/byOrganization/{orgId}` |
| List actions | `GET /api/actions/byOrganization/{orgId}` |
| List messages | `GET /api/messages/byOrganization/{orgId}` |
| List subscriptions | `GET /api/subscriptions/byOrganization/{orgId}` |
| Enroll contact | `POST /api/subscriptions/launch/{orgId}` — `{ contactId, moduleIds: [...] }` |

`GET /api/customFields/byOrganization/{orgId}` returns **404** — see §4.

### Module shape (live)

```jsonc
{
  "id": "00000023",
  "createdAt": 1651010655,          // unix epoch SECONDS, not ms
  "updatedAt": 1773866843,
  "organizationID": "00000022",
  "name": "2-Controlled Breathing + 4-7-8 Breathing",
  "description": "1-Week Module",
  "tags": ["1"],
  "isPublic": false,
  "isArchived": false,
  "texts": [
    {
      "subject": "",
      "content": "✅ Controlled breathing is ...",
      "actionID": "00000052",       // "" when no action attached
      "actionMatches": ["evidence"], // reply keywords that fire the action
      "mediaURLs": ["https://mindfultext-dev-cdn.sfo3.digitaloceanspaces.com/image_...jpg"]
    }
  ]
}
```

Notes:

- **Timestamps are epoch seconds.** Multiply by 1000 before `new Date()`.
- A module owns an ordered `texts` array; a text is addressed positionally, not by
  ID. Messages reference the position via `moduleMessageIndex`.
- **Journeys** own modules as an ordered `moduleIDs: string[]`. There is no
  join object and no per-entry metadata — reordering means rewriting the array.
- `content` supports mustache-style personalization: `{{ Contact.FirstName }}`.
- On `PUT`, null array fields are rejected — coerce `texts` / `tags` /
  `moduleIDs` / `actionIDs` to `[]` first (already handled in `server/routes.ts`
  and `client/src/lib/api.ts`).

---

## 2. Approval state — **does not exist**

There is **no approval, review, draft, or publish workflow anywhere in the legacy
API.** No `status`, `approvedBy`, `reviewState`, or equivalent field appears on
modules, texts, journeys, or actions.

The only lifecycle-ish booleans are:

| Field | On | Meaning |
|---|---|---|
| `isArchived` | modules, journeys, contacts, actions | Soft-delete / hide. Not an approval gate. |
| `isPublic` | modules, journeys, actions | Cross-org visibility / template sharing. Not an approval gate. |

**Implication: writing to the legacy API is immediately live.** A `POST /api/modules/{orgId}`
creates a module that can be sent on the next scheduler tick. There is no staging
area upstream and no way to un-send.

Related but *not* approval state:

- `subscriptions[].state` — delivery lifecycle of a contact's enrollment, observed
  values: `active` (102), `paused` (73), `sending` (1), `completed` (2109),
  `cancelled` (710).
- `messages[].status` — per-message delivery result, observed values: `queued`,
  `sent`, `delivered`, `webhook_delivered`, `delivery_failed`, `delivery_unconfirmed`.

### Where approval actually lives

Every approval concept in this product is **local to this app**, in Postgres
(`shared/schema.ts`), and is enforced before anything is pushed upstream:

| Local table | Status values |
|---|---|
| `content_drafts` | `planning` → `generating` → `draft` → `review` → `approved` → `pushed` |
| `reply_drafts` | `generated` → `edited` → `approved` → `sent` / `discarded` |
| `pending_changes` | `pending` → `approved` / `edited` / `rejected` |
| `harvested_links` | `staged` → `published` (founder review for the library) |

`content_drafts.mindfulTextModuleId` is the only link back to the legacy module,
populated at push time. Additionally, `server/agentSafety.ts` gates mutating proxy
calls (POST/PUT/DELETE) behind an interactive session or a one-time confirm token —
a locally-invented safety layer standing in for the upstream approval step that
doesn't exist.

**If upstream approval is ever needed, it has to be built here.** Do not expect the
legacy API to reject or hold anything.

---

## 3. SMS vs MMS

**The legacy API supports MMS, and MMS is already in active use.** This contradicts
the app's current code, which only ever writes SMS.

### Evidence

- Module texts carry `mediaURLs: string[]`. Across the 283 live modules in org
  `00000022`: **87 modules contain at least one media text; 139 of 1112 texts have
  a non-empty `mediaURLs`.**
- Messages carry `mediaURLs` too (present in the message record key set).
- Action automations of type `sendMessage` carry `mediaURLs` in their `values`.
- Media is hosted on the MindfulText CDN:
  `https://mindfultext-dev-cdn.sfo3.digitaloceanspaces.com/…`

### What the type/connection fields actually mean

- `messages[].type` is **`"text"` for all 352 sampled messages.** It does *not*
  discriminate SMS from MMS — presence of `mediaURLs` does.
- `messages[].connection` is the carrier: `telnyx` (344), `twilio` (2), `""` (6).
- `subject` exists on both module texts and messages but is empty everywhere
  observed — likely a vestigial email/MMS-subject field.

### Gap in this app

- `server/routes.ts` hardcodes `moduleType: draft.moduleType ?? "sms"` when pushing
  a module, and `shared/schema.ts` defaults `content_drafts.module_type` to `"sms"`.
  Note `moduleType` is a field *this app sends*; it does not appear in any live
  module response, so upstream may be ignoring it entirely.
- Nothing in the app reads, writes, or renders `mediaURLs`. Local
  `message_events` / `inbound_messages` have no media column. **Media attached to
  existing modules is invisible in this dashboard**, and AI-generated modules can
  only ever be plain SMS.
- The 160-character SMS guidance in `mindfultext.md` and `server/ai/index.ts` is a
  local authoring convention, not an API constraint. There is no segment-count
  field upstream; `segments` in API responses refers to **pagination**, not SMS
  concatenation.

---

## 4. Can the schema hold arbitrary tags?

**Yes for tags, no for arbitrary key/value metadata.**

### Tags — supported, free-form, but flat

`tags: string[]` exists on **modules, contacts, journeys, and actions**. Values are
completely unvalidated free text — the live org proves it:

- **Module tags** (5 distinct): `1`, `test`, `Relationships`, `sleep`, `3days`
- **Contact tags** (~55 distinct, 278 contacts): `MHA` (86), `Q4` (112),
  `maas360` (65), `SurveyDone` (19), `DEC8` (18), `force` (13), `2Texts` (12),
  `2025 Funnel` (11), `A` (10), `G` (10), down to one-offs like
  `Cottage Health → CH`, `TELNYX FOLLOW UP`, `not working?`, `autopaused`

Constraints and hazards:

- **Flat strings only.** No namespacing, no key/value pairs, no colors, no
  descriptions, no tag entity with an ID. A rename is a rewrite across every record.
- **No tag registry endpoint.** The only way to enumerate tags is to page every
  contact/module and union their arrays. This app does exactly that in
  `server/audienceGroups.ts` and `server/routes.ts`.
- **Empty strings are real data.** 10 contacts carry a `""` tag. Filter them out.
- **Case-sensitive and drifting.** `MIC` and `Mic`, `force` and `FORCE` coexist as
  distinct tags.
- Tags are how audience targeting works: this app writes
  `modulePayload.tags = [draft.audienceTag]` at push time, and verifies the tag
  still exists on at least one contact first.

### Arbitrary metadata — not available

- **`GET /api/customFields/byOrganization/{orgId}` returns 404.** Despite
  `server/contactMemory.ts` referencing a custom-field mechanism and an
  `agentMemory` field, there is no working custom-fields API on this deployment.
  Treat that code path as dead or unverified.
- Contact records are a **fixed, closed schema**: `id`, `createdAt`, `updatedAt`,
  `organizationID`, `firstName`, `lastName`, `companyName`, `title`, `phoneNumber`,
  `email`, `timezone`, `location`, `tags`, `hasReceivedMessage`, `isUnsubscribed`,
  `isArchived`, `preferredConnectionID`. There is no `metadata` / `customFields` /
  `extra` object.
- Same for modules, journeys, actions, and messages — no free-form JSON anywhere.

**Consequence:** anything richer than a flat string tag must be stored locally. This
app does so with `jsonb metadata` columns across `content_drafts`,
`inbound_messages`, `message_events`, `token_usage`, and with local-only tables
(`segments` for saved include/exclude cohorts, `agent_memory` for per-contact
facts). The join key back to the legacy API is always the 8-char padded entity ID.

There are two workable escape hatches if upstream storage is genuinely required,
both ugly:

1. **Encode structure into tag strings** (`theme:sleep`, `cohort:Q4`). Cheap, but
   pollutes the shared tag namespace and every contact-facing tag picker.
2. **Abuse `description`** on modules/journeys as a text blob. Fragile, and it is a
   user-visible field.

Prefer local storage keyed by legacy ID.

---

## 5. Summary

| Question | Answer |
|---|---|
| How are modules referenced? | 8-char zero-padded numeric **strings**; key casing varies (`moduleID` / `moduleIDs` / `id`); journeys hold an ordered `moduleIDs` array; texts are positional within a module. |
| Does approval state exist? | **No.** Only `isArchived` / `isPublic` booleans. Writes go live immediately. All approval workflow is local to this app. |
| SMS vs MMS? | **MMS is supported and in use** via `mediaURLs` on texts, messages, and action automations (87/283 modules). `type` is always `"text"` and does not discriminate. **This app ignores media entirely** — a real gap. |
| Arbitrary tags? | **Flat `string[]` tags, yes** — unvalidated, on modules/contacts/journeys/actions, no registry endpoint. **Arbitrary key/value metadata, no** — `customFields` 404s and all entities are closed schemas. Use local `jsonb` keyed by legacy ID. |

### Known gaps worth acting on

1. Media (`mediaURLs`) is invisible in the dashboard and unwritable by the AI pipeline.
2. `moduleType: "sms"` is sent but never echoed back — likely ignored upstream.
3. `server/contactMemory.ts` targets a `customFields` API that returns 404.
4. Contact tag hygiene is poor upstream (empty strings, case drift, near-duplicates).
