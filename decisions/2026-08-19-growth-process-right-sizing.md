# MindfulText Epoch 1 — Decision Record — 2026-08-19 — Growth process right-sizing

Last updated: 2026-08-19 08:03:40 PDT — edited by: Claude Dispatch

**decision_id:** [[decisions/DECISION-REGISTER|DR-58]]

## DR-58 — Growth process right-sizing

On 2026-08-19 Mark directed that the Growth documents' process weight be matched
to a solo pre-seed prototype rather than an enterprise release process. His
stated reason: every agent that touches this project should read a clean roadmap
that does not mislead them about what is active, what is deferred, and where to
find scope.

This implements the section **"Match the process to the stage"** added to
`/Users/mgzm-studio/AI-Studio/AGENTS.md` on 2026-08-19.

### Decided

1. **One walk replaces three gates.** The `W3d` synthetic-funnel gate,
   `W4b-L1c`, and `W4b-L2d` merge into a single recorded owner walk, `W4b-walk`,
   on the existing private test link authorized by
   [DR-57](2026-08-17-w4b-l1c-l2d-private-test.md). The original nineteen named
   check categories move verbatim to
   [[planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE|the deferred archive]] and can be
   reinstated by a later decision if scale warrants. An agent may drive the
   walk; Mark reviews the record.
2. **Evidence proportional to consequence.** The completion-evidence matrix
   applies only to tasks touching a real person's private information, external
   sends or publishing, money, or irreversible actions. Every other task records
   what was actually done and checked, specifically enough to trust or rerun.
3. **Lockstep timestamps retired.** The Master Checklist updates first; the
   Ordered Task Map updates in the same change when founder-visible meaning
   changes. The matching-reconciliation-timestamp-and-editor requirement is
   retired in both `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` and the root
   `/Users/mgzm-studio/AI-Studio/AGENTS.md`, because it existed in both places
   and trimming only one would have left the rule alive.
4. **One status system.** The Ordered Task Map drops the work-state labels and
   the estimated-percent column, and uses four plain statuses: **Done**,
   **Ready now**, **Waiting on you**, **Waiting until later**.
5. **Deferred work moves to one archive.** Open `W5` and `W6` items, `W8`, `W9`,
   `W10`, `W11`, and the deferred `W3` entities move verbatim to
   `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md`. Each checklist stub keeps its
   resume trigger, including `W11`'s legacy-reuse trigger verbatim.
6. **Homepage sequencing recorded, not changed.**
   [DR-53](2026-08-14-w7-homepage-finalization-priority.md) set `W7-L1a`'s
   priority order, not a technical dependency: homepage copy never depended on
   Unipile attribution work. Mark gave his final-content approval for the
   homepage copy in conversation on 2026-08-19, ahead of accepted `W7-L0a`, and
   the approved copy is implemented laptop-only in `mindfultext-web` at
   `app/page.tsx` with call-to-action variation 0 — an email link that collects
   nothing. DR-53's ordering is not violated, because what remains of `W7-L1a`
   is its acceptance evidence, which keeps its position. Search-engine listing
   stays blocked, confirmed by Mark on 2026-08-19.
7. **Call-to-action variations recorded, not authorized.** `W7-L1b` through
   `W7-L1f` are added to W7 at Mark's 2026-08-19 request, with provisional
   identifiers pending his confirmation. None is authorized to build. A phone
   number is directly identifying personal information MindfulText has never
   collected, so `W7-L1c` and `W7-L1d` require their own separate dated
   decision covering purpose, retention, deletion, access, and what the visitor
   is told. `W7-L1d` deliberately omits the no-contact sentence to test its
   effect on response; that omission must never change how a collected number
   is treated. `W7-L1e` requires public-collection approval.

### Unchanged and explicitly reaffirmed

[DR-45](2026-08-11-founder-controlled-relationship-pipeline.md) — no message
goes out without Mark sending it, and its data policy;
[DR-41](2026-08-10-growth-ops-owner-auth.md) — Google-only owner sign-in for the
`/api/owner/*` screens; `W3d-7` and `W4b-L2b` — no answers, personal
information, raw link tokens, or health-inferring information to PostHog;
`W4b-L2c` — reflection answers stay separate from visitor identity; the
`W7-L1c`–`W7-L1f` phone-number boundary; Production Neon untouched until a
deliberate separately approved step; and every item on the Ordered Task Map's
"Not yet" list.

### Boundary

This record authorizes document restructuring only. It authorizes no
deployment, credentials, migrations, public collection, provider activation, or
outreach. `W4b-walk` runs under DR-57's existing private-test authorization and
establishes no Production or public-collection claim.

## Consequences

- `W4b-L1c` and `W4b-L2d` are retired as separate identifiers, replaced by
  `W4b-walk`. Their original wording is preserved in the deferred archive.
- `planning/GROWTH-SYSTEM-DEFERRED-ARCHIVE.md` becomes the single place to find
  parked scope; nothing in it is pending.
- The refactor plan file
  `planning/GROWTH-SYSTEM-CHECKLIST-REFACTOR-PLAN-2026-08-19.md` is deleted once
  applied, so no future agent finds a roadmap and a plan to change that roadmap
  side by side. This record is the durable account.

## Related records

- [[decisions/2026-08-17-w4b-l1c-l2d-private-test|DR-57]]
- [[decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue|DR-56]]
- [[decisions/2026-08-14-w7-homepage-finalization-priority|DR-53]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
