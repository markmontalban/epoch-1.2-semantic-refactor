# Growth Checklist Refactor Plan — APPLIED, retained only until committed

> **STOP — this plan is finished, not pending.** Mark approved it on 2026-08-19
> and sections 1–3 and 6–8 were applied the same day. The durable record is
> [[decisions/2026-08-19-growth-process-right-sizing|DR-58]]; the current
> roadmap is [the Ordered Task Map](GROWTH-SYSTEM-ORDERED-TASK-MAP.md) and the
> current instructions are [the Master Checklist](GROWTH-SYSTEM-MASTER-CHECKLIST.md).
> **Do not execute anything from this file.**
>
> It should have been deleted on completion, but it is untracked in Git, so
> deleting it would destroy it with no way to recover. It is kept only until
> Mark commits it or tells an agent to delete it. Step 4 (`W4b-walk`) did not
> complete — see the Master Checklist for why.

Last updated: 2026-08-19 08:03:40 PDT — edited by: Claude Dispatch

Status: **applied 2026-08-19.** Historical record of what was proposed. It implements the AGENTS.md section "Match the process to the stage"
(2026-08-19) against `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` and
`planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md`. Everything below labeled
**keep**, **rewrite**, **archive**, or **defer** is a proposal; nothing is a
current status change.

**Merge note — 2026-08-19 08:03 PDT.** This is the single plan of record; there
is no second competing proposal. Sections 0–8 were drafted at 07:35 PDT against
the 2026-08-18 17:17 PDT revision of both documents. At 07:41 PDT, separately
and with Mark's in-conversation approval, the live documents were edited to
record the approved `W7-L1a` homepage copy and to add five new call-to-action
tasks, `W7-L1b`–`W7-L1f`. Those edits are now merged in below and are marked
**[merged 08:03]** wherever they change a disposition. Two consequences:

1. **Every line number in sections 1 and 2 predates the 07:41 edits.** Insertions
   in the W7 area of both documents shifted subsequent lines. Whoever executes
   this plan must locate each item by its wording, not by its line number.
2. **Mark's approval of the `W7-L1a` copy already happened**, ahead of accepted
   `W7-L0a`. Draft DR-58 item 6 is rewritten accordingly in §4.

## 0. Verification of the incoming claims

The prompt for this task carried findings from a 2026-08-19 Claude session and
asked that each be verified, not trusted. Result:

| # | Claim | Verdict |
| --- | --- | --- |
| 1 | `W4b-L1c` names nine check categories (checklist line 440) | **Verified.** Word-handle, lifecycle, forwarding, privacy, mobile, accessibility, logging, outage, authenticated Preview — nine gates for a page no one has visited. |
| 2 | `W4b-L2d` names ten more (line 444) | **Verified.** Contract, anonymous-data separation, consent, forwarded-link, masking, accessibility, mobile, performance, retry/outage, authenticated Preview. |
| 3 | The `W3d` gate (lines 391–393) duplicates the same walk | **Verified as duplicative.** The `W3d` gate ("synthetic branded recipient link → matched page → anonymous reflection → useful results → optional identity association or call request → manual review") is the same end-to-end walk that `W4b-L1c` and `W4b-L2d` describe. Three gates, one walk. |
| 4 | "Completion evidence required from every task" (lines 596–600) | **Verified.** It demands automated tests, contract fixtures, authorization-failure evidence, retry/failure results, privacy/logging review, and deployment/rollback notes for *every* task. |
| 5 | Two-document lockstep rule (line 17) | **Verified — and it also lives in the root `AGENTS.md`.** `/Users/mgzm-studio/AI-Studio/AGENTS.md` lines 227–233 impose the same matching-timestamp-and-editor rule. Trimming only the checklist copy would leave the rule alive; DR-58 must amend both (see §4). |
| 6 | Work-state label legend (task map lines 40–45) | **Verified.** "Open work / Needs Mark / Acceptance gap / Deferred by gate" sit on top of a Status column and an Estimated-% column — three status systems on one table. |
| 7 | Deferred blocks inside the active checklist | **Verified, with line corrections.** W5 unchecked items are lines 481–492 (not 482); W10 is lines 557–568; W11 is lines 570–594. |
| — | Public recipient path does not need Mark's Google sign-in | **Verified in code.** `/Users/mgzm-studio/AI-Studio/Projects/growth-ops/src/app/api/public/routes/[experience]/[handle]/route.ts` lines 13–14: `authenticateService(...)` then `requireScope(principal, "public.route.resolve")`. DR-41's Google-only rule governs the owner screens; the recipient path uses a stored service credential. |
| — | `W7-L0a` blocked only by build authorization (line 520) | **Verified with one nuance.** Line 520 reads "Direction/planning only: no credentials, API calls, code, profile ingestion, collection, or outreach authority" — no technical blocker is named. Nuance: the task map also lists `W3 public-funnel slice` (W3d) as a dependency, and W3d closes with the same single owner walk proposed in §2. After that walk, the only gate on `W7-L0a` is Mark's build authorization. |

Must-keep list — all confirmed present and preserved intact by this plan:
`W3d-7` (checklist lines 369–371), `W4b-L2b` (line 442), `W4b-L2c` (line 443),
DR-45 draft-only/no-send (lines 19 and 59), Production Neon untouched (lines 88
and 385–386), DR-41 Google-only owner sign-in (lines 41–43). None is trimmed,
reworded, or weakened anywhere below.

**[merged 08:03] Added to the must-keep list:** the call-to-action variation
boundary paragraph inserted after the W7 table on 2026-08-19, beginning
"Boundary for the `W7-L1c`–`W7-L1f` call-to-action variations." It governs
phone numbers — directly identifying personal information MindfulText has never
collected — and states that `W7-L1d` omitting the no-contact sentence must never
change how those numbers are treated. It protects a real person's private
information and therefore falls inside this plan's own no-trim category. It sits
inside a stretch §1 marks "keep," so it is named here explicitly to prevent it
being lost in the surrounding rewrite.

Worktree state, refreshed 2026-08-19 08:03 PDT (all preserved, nothing staged).
The 07:35 reading of the public site as clean was accurate then and is now
superseded:

- Planning vault (`/Users/mgzm-studio/AI-Studio/Projects/mindfultext-epoch-1-semantic-map-refactor`, branch `codex/epoch-1-semantic-map-refactor`): `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` and `planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md` modified at 07:41; untracked `.cursor/` (editor configuration) and this plan file.
- Growth Ops (`/Users/mgzm-studio/AI-Studio/Projects/growth-ops`, branch `w2-preview`): 1 untracked file, `AI-STRATEGY-HANDOFF.md`.
- Public site (`/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web`, branch `w1-clean-shell`): `app/page.tsx` modified with the approved `W7-L1a` copy; untracked `W7-L1A-HOMEPAGE-COPY-REVIEW.md`. 43 checks and the typecheck passed.

## 1. Master Checklist — row-by-row disposition

File: `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md`. Line numbers are from the
2026-08-18 17:17 PDT revision.

### Header and Authority section (lines 1–32)

| Lines | Item | Disposition |
| --- | --- | --- |
| 1–5 | Title and provenance lines | **Keep**; refresh timestamp when the refactor is executed. |
| 7–16 | Authority paragraph | **Keep as-is.** |
| 17 | Two-document lockstep rule | **Rewrite.** Replace the paragraph with: *"For every Growth change, update this checklist first. When the change alters status, dependency, next action, or founder-visible meaning, update the Ordered Task Map in the same change. A policy, authority, retention, or external-action change requires a dated decision record. Evidence claims must stay specific to the verification actually performed."* This drops only the matching-reconciliation-timestamp-and-editor requirement; the update-both-when-meaning-changes rule survives. Requires the paired AGENTS.md edit in §4. |
| 19 | DR-45 data policy paragraph | **Keep as-is** (must-keep). |
| 21–23 | Ordered Task Map pointer / retired Founder Dashboard note | **Keep.** |
| 25–29 | AI Bootstrap Handoff pointer | **Keep.** |
| 31–32 | Status vocabulary | **Keep.** |

### Locked decisions (lines 34–89)

**Keep every bullet as-is.** These are Mark's recorded decisions (DR-41 through
DR-57); trimming process never touches decision text.

### Critical path and status (lines 93–115)

| Lines | Item | Disposition |
| --- | --- | --- |
| 95 | Critical-path chain | **Rewrite.** Replace `… → W4b-L1c → W4b-L2a → W4b-L2b → W4b-L2c → W4b-L2d → W7-L0a → …` with `… → W4b-L2a → W4b-L2b → W4b-L2c → W4b-walk → W7-L0a → …`, where `W4b-walk` is the single merged acceptance walk defined below. |
| 96–99 | W5/W6/W8–W11 deferral sentences | **Keep** (they already say deferred in one line each). |
| 102–115 | Workstream status table | **Keep the table.** Rewrite only the W3 (107) and W4 (108) cells after the merge so each ends "…awaiting the single owner walk (`W4b-walk`)" instead of naming `W4b-L1c`/`W4b-L2d` separately; rewrite W5/W10/W11 cells (109, 114, 115) to end with "Details: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)". **[merged 08:03]** The W7 cell (111) was changed at 07:41 from `blocked` to `in progress` to record the approved `W7-L1a` copy and the new `W7-L1b`–`W7-L1f` rows; keep that cell as written and append the `W4b-walk` rename where it names `W4b-L2d`. |

### W0 (120–140), W1 (142–195), W2 (197–244)

**Keep every item and evidence paragraph as-is.** All three are done; the
evidence text is the historical record the authority model depends on. No
line-by-line changes proposed.

### W3 (246–393)

| Lines | Item | Disposition |
| --- | --- | --- |
| 248–251 | W3 intro + contract-proposal pointer | **Keep.** |
| 253–256 | Unchecked umbrella entity item ("Implement organization, prospect/identity, campaign… payment-reference entities") | **Rewrite.** Most of this list already exists through W3b and W3d (people, organizations, recipient routes, visits, engagement, call requests, stages). Replace with: *"- [x] Core entities exist through W3b (relationships, stages, timeline, drafts) and W3d (recipient routes, visits, engagement, call requests). Remaining entities — campaign/membership/variant, experiment, payment-reference — are deferred to the archive until the work that needs them (W6/W7-L3+) is authorized."* Move the deferred-entity detail to the archive file. |
| 259–306 | W3b section, gate, and acceptance evidence | **Keep as-is** (done, evidenced). |
| 308–331 | W3c lean validation loop | **Keep as-is** (operating model, not ceremony). |
| 333–389 | W3d authority, reconciliation note, items `W3d-1`–`W3d-8`, current-state paragraph | **Keep as-is.** `W3d-7` is on the must-keep list and is untouched. |
| 391–393 | W3d gate | **Rewrite.** Replace with: *"Gate: satisfied by the single `W4b-walk` acceptance walk (see W4b); no separate synthetic-funnel rerun is required."* The walk it describes is the same walk `W4b-L1c`/`W4b-L2d` describe. |

### W4 (395–469)

| Lines | Item | Disposition |
| --- | --- | --- |
| 397–418 | W4 intro, decision pointers, execution-mode legend | **Keep.** |
| 421–428 | W4a table | **Keep all rows as-is.** `W4a-L3a`/`W4a-L4a` are already one-line deferred rows; cheap to keep in place. |
| 438 | `W4b-L1a` row | **Keep as-is.** |
| 439 | `W4b-L1b` row | **Keep as-is.** |
| 440 | `W4b-L1c` row (nine named check categories) | **Rewrite — merge.** Replace rows 440 and 444 with one row, ID `W4b-walk`: *"[ ] `W4b-walk` — One recorded owner walk of the existing private-test link on `w1-clean-shell`: open the link, see the invitation page, complete the reflection, view results, submit a call request, and confirm a dead handle shows the generic unavailable page. Record what happened (screenshots or notes suffice). This single walk is the acceptance evidence for the W3d gate, W4b-L1c, and W4b-L2d. Mode: Agent → Mark → Agent (an agent may drive the walk; Mark reviews the record). No Production, no public collection."* Original L1c wording moves to the archive file with a pointer, so the nine categories can be retrieved if a scale trigger ever warrants them. |
| 441 | `W4b-L2a` row | **Keep as-is.** |
| 442 | `W4b-L2b` row | **Keep as-is** (must-keep: no answers/PII/tokens/health info to PostHog). |
| 443 | `W4b-L2c` row | **Keep as-is** (must-keep: answers separate from identity). |
| 444 | `W4b-L2d` row (ten named check categories) | **Merge into `W4b-walk`** (above). Original wording to the archive with a pointer. |
| 445–447 | `W4b-L3a`/`L3b`/`L4a` deferred rows | **Keep** (one-liners already). |
| 450–461 | "Open question closed 2026-08-17" narrative paragraph | **Rewrite — compress.** Replace both paragraphs with three sentences: *"DR-56 confirmed the W4b-L1a/L1b build and the laptop-only L2 work; DR-57 authorized the private test. As of 2026-08-18 the Preview-only site credential and `w1-clean-shell` env vars are in place, Growth Ops Preview resolve is HTTP 200, and a dead handle shows the generic unavailable page. Only the `W4b-walk` owner walk remains."* Full history stays recoverable in Git; no archive copy needed. |
| 463–466 | Month-one exclusions paragraph | **Keep.** |
| 468–469 | W4 gate | **Rewrite.** *"Gate: `W4b-walk` is recorded at the private-test tier. That technical gate does not establish buyer validation or authorize W7-L2a."* |

### W5 (471–496)

| Lines | Item | Disposition |
| --- | --- | --- |
| 471–476 | Header + deferral paragraph | **Keep**, appending: "Item detail: [deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)." |
| 478–480 | `[x]` retained 2026-08-11 inventory item | **Keep** (recorded evidence). |
| 481–492 | Six unchecked deferred items | **Archive.** Move verbatim to the archive file under a "W5 — resume trigger: commercial commitment or repeated manual notification/reconciliation pain" heading. |
| 494 | W5 gate line | **Archive** with its items. |
| 496 | Evidence pointer to `W5-N8N-READINESS-EVIDENCE-2026-08-11` | **Keep** in the stub. |

### W6 (498–513) — *proposed beyond the prior session's list*

Same treatment as W5, for consistency: **keep** the header and deferral
paragraph (498–503) with an archive pointer; **archive** the five unchecked
items (505–512) and the gate (513) verbatim. Flagged explicitly: the prior
session did not name W6; this is this plan's addition, on the same rationale.

### W7 (515–535)

| Lines | Item | Disposition |
| --- | --- | --- |
| 520 | `W7-L0a` row | **Keep**, appending one sentence to the status cell: *"No technical blocker remains once `W4b-walk` is recorded; the open gate is Mark's build authorization."* |
| 521 | `W7-L1a` row | **[merged 08:03] Superseded — keep the 07:41 row as written.** The original proposal was to relax the sequencing so copy drafting could start any time. Events overtook it: Mark approved the final copy in conversation on 2026-08-19 and it is implemented laptop-only in `app/page.tsx` with call-to-action variation 0 (an email link to `hello@mindfultext.com` that collects nothing). The row already records that, plus the review packet path and the search-engine-blocked confirmation. No further rewrite needed; DR-58 item 6 is restated in §4 to match. |
| — | `W7-L1b`–`W7-L1f` rows | **[merged 08:03] Keep as written; restructure only.** Five call-to-action variation tasks added 2026-08-19 at Mark's request, with identifiers marked provisional until he confirms them. They are not on the path to the first LinkedIn batch. `W7-L1b` builds the variation-swapping mechanism; `W7-L1c` and `W7-L1d` collect a phone number and are gated on a new dated decision; `W7-L1e` puts the reflection on the homepage and needs public-collection approval; `W7-L1f` is an undefined placeholder. In the task-map restructure (§2) they map to: `W7-L1b` **Waiting until later**, `W7-L1c`/`W7-L1d`/`W7-L1e` **Waiting on you**, `W7-L1f` **Waiting until later**. |
| 522–526 | `W7-L2a`–`W7-L4-gate` rows | **Keep as-is** (these are the send/collection/deployment gates — consequence, not ceremony). |
| 529–535 | Signal-interpretation and gate paragraphs | **Keep.** |
| — | Call-to-action variation boundary paragraph (added 07:41, immediately after the signal-interpretation paragraph) | **[merged 08:03] Keep verbatim — must-keep.** Governs phone numbers as personal information, requires a dated decision covering purpose, retention, deletion, and access before `W7-L1c` or `W7-L1d` is built, and forbids `W7-L1d`'s omitted reassurance from changing actual treatment of a number. Named explicitly so the surrounding rewrite cannot absorb it. |

### W8 (537–545) and W9 (547–555) — *proposed beyond the prior session's list*

**Defer to archive with stubs**, same pattern: keep each heading plus one line
("Deferred; begins after beta acceptance / after W8. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)"), move the unchecked
items and gates verbatim. Flagged: this plan's addition, not the prior
session's.

### W10 (557–568) and W11 (570–594)

**Archive both, keeping safety-critical stubs.** Each heading stays with a
two-line stub. W10 stub: *"Deferred; separate later program. Production
publishing, rename/update/archive/journey mutation, and subscription launch
remain prohibited until its archived validation sequence is completed. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)."* W11 stub must retain
the trigger verbatim because it is a boundary, not ceremony: *"Deferred; starts
after revenue, or before any legacy system is reused, connected, deployed, or
exposed — whichever comes first. Deferral is not permission to reconnect an old
system; no legacy system returns to use until its archived inventory, rotation,
scan, and acceptance items are completed. Items:
[deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md)."* All eleven unchecked
items move verbatim.

### Completion evidence (596–600)

**Rewrite.** Replace the section with: *"## Completion evidence — Record what
was actually done and checked — the commands run, tests passed, or walk
performed — specific enough that a later reader can trust or rerun it. The full
matrix (contract fixtures, authorization-failure evidence, retry drills,
rollback notes) applies only where a task touches a real person's private
information, sends or publishes externally, spends money, or cannot be undone."*
Original wording to the archive with a pointer.

## 2. Ordered Task Map — row-by-row disposition

File: `planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md`. This document becomes
plain-language per `epoch-1-plain-language`: no "source/local," no "Preview,"
no "acceptance gap," no stacked status systems. Task IDs, paths, and `DR-*`
numbers stay exact.

| Lines | Item | Disposition |
| --- | --- | --- |
| 1–6 | Title, provenance, role line | **Keep**; refresh timestamp on execution. |
| 8–33 | "What changed since the prior map" (26 entries) | **Rewrite — trim to the five most recent entries**, rewritten in plain words. Entries older than DR-55 move verbatim to the archive file under "Task-map change history." **[merged 08:03]** The 2026-08-19 07:41 entry recording the approved homepage copy and the new `W7-L1b`–`W7-L1f` variations is now the most recent and is already in plain words; it counts as the first of the five retained. |
| 37–38 | Estimated-% explanation | **Remove** (column is removed below). |
| 40–45 | Work-state label legend | **Remove.** The labels ("Open work," "Needs Mark," "Acceptance gap," "Deferred by gate") are a second status system. Legend text to the archive with a pointer. |
| 47–68 | Founder-facing workstream names table | **Keep as-is.** |
| 70–111 | Main table | **Rewrite — restructure.** New columns: **ID · What this is · Where it stands · What happens next · Depends on**. Removed columns: Work-state labels, Estimated % done, Lane, Tools touched in priority order, Primary work tool, Complexity, Work type. (Tool detail is agent-facing and already lives in the Master Checklist rows.) Status vocabulary becomes exactly four plain values: **Done · Ready now · Waiting on you · Waiting until later**. Every row keeps its `W*` ID and `DR-*` links. Deferred rows W5b, W6, W8, W9, W10, W11 collapse to one line each pointing at the archive. Sample rewritten rows below. |
| 113–118 | Next dependency-ready work | **Rewrite in plain words**, keeping IDs and links (sample below). |
| 120–127 | Mark-only decisions | **Keep, rewritten in plain words** ("Preview" → "the private test version," "Production" → "the real, live site," etc.). No item is dropped. **[merged 08:03]** Two bullets added at 07:41 must survive: confirming the provisional identifiers `W7-L1b`–`W7-L1f` and whether `hello@mindfultext.com` is the right address to publish and exists as a real mailbox; and the dated decision required before `W7-L1c` or `W7-L1d` collects a phone number. Both are already in plain words. |
| 129–135 | "Not yet" list | **Keep, rewritten in plain words.** This is the safety list; every line survives, none softened. |
| 137–146 | Related records | **Keep as-is.** |

### Sample rewritten rows (the new voice, for approval)

**W3d** (replacing line 81):

> | W3d | **Public Recipient Link Service:** creates the private word-only links we send people, and safely records what visitors do | Ready now | Everything is built and checked on the laptop, and the private test version already answers correctly (confirmed 2026-08-18). One recorded walk-through of the test link (`W4b-walk`) finishes this. [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md) | W3a, W3b, [DR-46](../decisions/2026-08-13-l2-buyer-learning-funnel.md), [DR-54](../decisions/2026-08-14-word-only-opaque-route-handles.md) |

**W4b-walk** (replacing lines 90 and 94):

> | W4b-walk | **Public Beta Funnel — final check:** open the private test link once and walk the whole path — invitation page, reflection questions, results, call request — and keep a record of what happened | Ready now | Approved by [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md). The test link already works; a broken link correctly shows a plain "unavailable" page. An agent can drive the walk and you review the record. Nothing goes on the real site and no real visitors are involved. | W4b-L2b, W4b-L2c |

**W7-L0a** (replacing line 101):

> | W7-L0a | **Beta Launch — who-clicked records:** privately connect each LinkedIn profile you invite to its link, so you can see which invitation drew activity (never proof the named person visited) | Waiting on you | The plan is approved ([DR-51](../decisions/2026-08-14-linkedin-profile-invitation-attribution.md), [DR-52](../decisions/2026-08-14-w7-unipile-linkedin-attribution.md), [DR-54](../decisions/2026-08-14-word-only-opaque-route-handles.md)) but you have not yet said "build it." Nothing technical is missing once `W4b-walk` is recorded. | DR-51, DR-52, DR-54, W3d |

**W7-L1a and the variations** (new rows, added **[merged 08:03]**):

> | W7-L1a | **Beta Launch — homepage wording:** the final words on the MindfulText homepage, reusing the design you already have | Done | You approved the wording on 2026-08-19 and it is on the laptop only, with the button set to an email link that collects nothing. Still to confirm: that `hello@mindfultext.com` is a real mailbox, or messages visitors send will go nowhere. Wording is in `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web/W7-L1A-HOMEPAGE-COPY-REVIEW.md` | [DR-53](../decisions/2026-08-14-w7-homepage-finalization-priority.md) |
> | W7-L1c | **Beta Launch — demo request with a phone number:** ask for a phone number to set up a demo, and say plainly you will not contact the person afterward unless they ask | Waiting on you | A phone number is personal information MindfulText has never collected, so this needs its own written decision first — why you collect it, how long you keep it, how it gets deleted, and who can see it. Nothing is built | W7-L1b, a new dated decision |

**Next dependency-ready work** (replacing lines 113–118):

> 1. **Finish the funnel check:** record the one walk-through of the private test link (`W4b-walk`). Nothing goes online and no real people are involved.
> 2. **Say "build it" on the LinkedIn who-clicked records (`W7-L0a`)** — the plan is approved, only your go-ahead is missing.
> 3. **Confirm the homepage email address** — the wording for `W7-L1a` is approved and built; it just needs `hello@mindfultext.com` to be a real mailbox.
> 4. **Keep everything else waiting on its trigger** — the full list is in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## 3. Where archived material goes

**Proposed file: `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md`** (new), with
this structure:

- A provenance line and one-paragraph role statement: "Parked work and retired
  process text. Nothing here is pending. Each block names its resume trigger
  and where it came from; the Master Checklist links here from each stub."
- One section per source: W3 deferred entities, W4b-L1c/L2d original check
  lists, W5 items + gate, W6 items + gate, W8, W9, W10, W11, the retired
  completion-evidence matrix, the retired work-state label legend, and the
  task-map change history older than DR-55. All moved text verbatim, each block
  headed by its resume trigger and a `Moved from
  GROWTH-SYSTEM-MASTER-CHECKLIST.md / GROWTH-SYSTEM-ORDERED-TASK-MAP.md,
  2026-08-19` line.

Lifecycle-rule check against `/Users/mgzm-studio/AI-Studio/AGENTS.md`: the
`Docs/` lifecycle (lines 331–349) literally governs `Docs/active|drafts|archive`,
not the planning vault, so no `Docs/archive/` move is required. The applicable
rules are honored: no `v2`/parallel copy of an active topic is created (the
archive is a new topic, not a duplicate checklist), superseded text carries a
pointer back to its source, and nothing is deleted outright — AGENTS.md's own
requirement that deferred work live "in one short list, not threaded through
active checklists" (line 132–133) is the direct authorization for this file.
Existing capability checked: `planning/workstreams/` holds per-workstream
detail files, but none is a parked-work index, and reusing one would bury
W10/W11 inside a single workstream's file. Chosen approach: one new archive
file, because every stub can point at one stable place.

## 4. Draft DR-58 — for Mark's approval, not approved

Verified: the register (`decisions/DECISION-REGISTER.md` line 79) states the
next available number is `DR-58`, and the highest dated record is
`decisions/2026-08-17-w4b-l1c-l2d-private-test.md` (DR-57). Proposed file:
`decisions/2026-08-19-growth-process-right-sizing.md`, plus one register row in
the same change.

> ### DR-58 — Growth process right-sizing (DRAFT)
>
> Date: 2026-08-19. Recorded by: Claude Dispatch. Status: **draft — awaiting
> Mark's approval.**
>
> Decision: match the Growth documents' process weight to a solo pre-seed
> prototype, per the AGENTS.md section "Match the process to the stage"
> (2026-08-19):
>
> 1. **One walk replaces three gates.** The W3d synthetic-funnel gate,
>    `W4b-L1c`, and `W4b-L2d` merge into a single recorded owner walk,
>    `W4b-walk`, on the existing DR-57-authorized private test link. The
>    original nineteen named check categories move to
>    `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md` and can be reinstated by a
>    later decision if scale warrants.
> 2. **Evidence proportional to consequence.** The completion-evidence matrix
>    applies only to tasks touching a real person's private information,
>    external sends/publishing, money, or irreversible actions. Other tasks
>    record what was actually done and checked.
> 3. **Lockstep timestamps retired.** The Master Checklist updates first; the
>    Ordered Task Map updates in the same change when founder-visible meaning
>    changes. The matching-reconciliation-timestamp-and-editor requirement is
>    retired in both `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` (line 17)
>    and the root `/Users/mgzm-studio/AI-Studio/AGENTS.md` (MindfulText Growth
>    authority lookup section).
> 4. **One status system.** The Ordered Task Map drops work-state labels and
>    estimated-percent columns and uses four plain statuses: Done, Ready now,
>    Waiting on you, Waiting until later.
> 5. **Deferred work moves to one archive.** W5/W6 open items, W8, W9, W10,
>    W11, and deferred W3 entities move verbatim to
>    `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md`; each checklist stub keeps
>    its resume trigger, including W11's reuse-trigger boundary verbatim.
> 6. **Sequencing clarification, restated 08:03.** DR-53 set `W7-L1a`'s
>    priority order, not a technical dependency: homepage copy never depended on
>    Unipile attribution work. Recording what has already happened — Mark gave
>    his final-content approval for the homepage copy in conversation on
>    2026-08-19, ahead of accepted `W7-L0a`, and the approved copy is
>    implemented laptop-only in `mindfultext-web` at `app/page.tsx` with
>    call-to-action variation 0 (an email link, nothing collected). DR-53's
>    ordering is not violated by this, because what remains of `W7-L1a` is its
>    acceptance evidence, which keeps its position. Search-engine listing stays
>    blocked, confirmed by Mark 2026-08-19.
> 7. **Call-to-action variations recorded, not authorized.** `W7-L1b` through
>    `W7-L1f` are added to W7 at Mark's 2026-08-19 request with provisional
>    identifiers pending his confirmation. None is authorized to build. A phone
>    number is directly identifying personal information MindfulText has never
>    collected, so `W7-L1c` and `W7-L1d` require their own separate dated
>    decision — the next unused number after this one — covering purpose,
>    retention, deletion, access, and what the visitor is told. `W7-L1d`
>    deliberately omits the no-contact sentence to test its effect on response;
>    that omission must never change how a collected number is treated.
>    `W7-L1e` requires public-collection approval.
>
> Unchanged and explicitly reaffirmed: DR-45 (no message goes out without Mark
> sending it; data policy), DR-41 (Google-only owner sign-in for `/api/owner/*`
> screens), `W3d-7`/`W4b-L2b` (no answers, PII, raw link tokens, or
> health-inferring information to PostHog), `W4b-L2c` (answers separate from
> visitor identity), the `W7-L1c`–`W7-L1f` phone-number boundary paragraph,
> Production Neon untouched until a deliberate separately approved step, and
> every item on the "Not yet" list. This record authorizes document
> restructuring only: no deployment, credentials, migrations, collection,
> providers, or outreach.

## 5. Shortest remaining path to live

Stated explicitly, with what it skips and what skipping costs:

1. **`W4b-walk`** — one walk of the existing private test link (agent-drivable
   today; Mark reviews the record). Closes W3d, W4b, and the technical gate on
   W7-L2a. Cost: minutes, not days — DR-57 authorization, the Preview
   credential, and HTTP 200 resolve are already in place.
2. **`W7-L0a` build authorization** — Mark says "build it"; agents implement
   the Unipile profile-to-invitation record. Only his authorization is missing
   (verified, §0).
3. **`W7-L1a` homepage copy — done as of 2026-08-19 [merged 08:03].** Mark
   approved the wording and it is implemented laptop-only. Remaining: confirm
   `hello@mindfultext.com` exists as a real mailbox, or the email button sends
   visitors' messages into nothing. This step no longer gates anything.
4. **One bundled put-online approval** — Production deployment target,
   Production Neon setup, and public collection, approved together in one
   sitting (they are separate yeses today; nothing prevents presenting them as
   one decision). Mark opens the live link once before sending anything.
   **[merged 08:03]** The homepage itself no longer needs public-collection
   approval, because variation 0 is an email link that collects nothing; the
   collection question now applies only to the recipient reflection path, and
   later to `W7-L1c`–`W7-L1e` if Mark builds them.
5. **W7-L2a** — Mark manually sends the first approved LinkedIn messages
   (DR-45; never delegated).

What this path skips and the cost of skipping:

- **PostHog activation (DR-55).** Launch without replay/analytics credentials;
  Growth Ops already records link-opens, reflection milestones, and call
  requests itself. Cost: no session replay for the first recipients. Retrieve
  any time by creating the credential under DR-55's existing approval.
- **W5 n8n and W6 providers.** Cost: Mark checks Growth Ops manually for call
  requests instead of being notified. Acceptable at a volume of a handful of
  invitations.
- **The seventeen retired check categories.** Cost: mobile/accessibility/
  performance polish is verified only by the one walk, not per-category. The
  page has one purpose and no real users yet; a real visitor problem surfaces
  in W7-L2b evidence and can be fixed in hours.

**Evaluation of the prior session's "skip the private test entirely" finding —
partially rejected.** The premises are true (nothing online, nobody holds the
address, no data real), but the conclusion optimizes the wrong cost: the
private test is no longer setup work — it already stands (credential issued,
resolve HTTP 200, dead-handle page verified 2026-08-18). Skipping it saves
minutes while removing the only end-to-end check of the reflection and
call-request path before real recipients use it, and the walk is the accepted
evidence W7-L2a's gate already names. The honest version of the prior finding
survives as: *one recorded walk before the first send, wherever it runs* — and
the cheapest place to run it is the test link that already works. If Mark
prefers to fold it into his one look at the live link before sending (step 4),
DR-58 can say so; the plan recommends the test-link walk.

## 6. What stays gated regardless

Never trimmed, in any option: DR-45 — no message goes out without Mark sending
it; `W3d-7`/`W4b-L2b` — no answers, PII, raw link tokens, or health-inferring
information to PostHog; `W4b-L2c` — reflection answers stay separate from
visitor identity; DR-41 — Google-only owner sign-in for the owner screens;
Production Neon untouched until its own approved step; public collection, put-
online, deployment, DNS/cutover, spending, and anything irreversible each
behind an explicit Mark approval; the W11 legacy-reuse trigger (any legacy
system reuse forces W11 first) preserved verbatim in its stub.

## 7. How this unblocks Mark's stated priorities

- **Website copy — already unblocked and delivered [merged 08:03].** `W7-L1a`
  copy is written, approved by Mark on 2026-08-19, and implemented laptop-only;
  the review packet is at
  `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web/W7-L1A-HOMEPAGE-COPY-REVIEW.md`.
  Five further call-to-action variations are queued as `W7-L1b`–`W7-L1f`. What
  DR-58 item 6 now does is record that this happened without violating DR-53's
  ordering, so no future agent reads the checklist and concludes the copy was
  approved out of turn.
- **The Growth Ops system itself.** Collapsing three overlapping gates into
  `W4b-walk` finishes W3 and W4 with one recorded walk instead of nineteen
  named checks across three sections, and the per-task evidence matrix stops
  taxing every future Growth Ops task.
- **Unipile / Vercel / Neon / front-end integration.** Verified: `W7-L0a` has
  no technical blocker — only build authorization (checklist line 520; nuance
  in §0). The Vercel/front-end integration is already proven at the test tier
  (Preview resolve HTTP 200 through the service credential); Neon production
  remains a deliberate separate step by design. After `W4b-walk` and one "build
  it" from Mark, agents can start `W7-L0a` the same day.

## 8. Execution order once approved

1. Mark approves DR-58 (possibly with edits) → record
   `decisions/2026-08-19-growth-process-right-sizing.md` + register row.
2. Create `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md` with the moved text.
3. Apply §1 to the Master Checklist and §2 to the Ordered Task Map in one
   change; amend the root AGENTS.md lockstep sentence in the same change.
   **[merged 08:03]** Locate every item by its wording, not by the line numbers
   in §1 and §2 — the 07:41 edits shifted them.
4. Run `W4b-walk` under the existing DR-57 authorization and record it.
5. **[merged 08:03]** Delete this plan file once steps 1–4 are complete. It is a
   proposal, and leaving it beside the refactored documents would recreate
   exactly the confusion the refactor exists to remove: a future agent finding
   both a roadmap and a plan to change that roadmap, with no way to tell which
   is current. The decision record `DR-58` is the durable account of what was
   decided; Git history holds the rest.

Boundaries held while producing this plan: no edits to the two live documents,
no staging/commits/pushes/deploys, all three worktrees preserved as reported in
§0, no credentials, migrations, provider connections, outreach, or anything put
online.
