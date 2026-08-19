# MindfulText Growth System — Ordered Task Map

Last updated: 2026-08-19 08:32:14 PDT — edited by: Claude Dispatch

Role: the roadmap Mark reads. The [Growth System Master Checklist](GROWTH-SYSTEM-MASTER-CHECKLIST.md)
is where agents take their instructions; dated `DR-*` records hold approvals and
the [decision register](../decisions/DECISION-REGISTER.md) is only an index.
Parked work lives in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) —
nothing there is pending.

Four words describe every task, and there are no other status systems:

- **Done** — finished, with the evidence recorded.
- **Ready now** — an agent can do this today; nothing is missing.
- **Waiting on you** — Mark has to decide, approve, or supply something.
- **Waiting until later** — deliberately parked behind a named trigger.

## What changed recently

- **2026-08-19:** the whole invitation-to-call-request path was walked end to end on the private test version and worked. That finishes `W3d` and `W4b`. Mark briefly unlocked the test version for the walk and should lock it again.
- **2026-08-19 — [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md):** the roadmap and checklist were cut back to fit a small early-stage company. Three overlapping checks became one walk-through (`W4b-walk`), the requirement to prove everything on every task now applies only where real people, money, sending, or permanent changes are involved, and parked work moved to one archive. No decision about privacy, sending, or going live was changed.
- **2026-08-19:** Mark approved the final homepage wording. It is on the laptop only, with the button set to an email link that collects nothing. He also asked for alternative buttons to test later, added as `W7-L1b` through `W7-L1f`; two of them would collect a phone number and need their own written decision first. Search engines stay blocked.
- **2026-08-18:** the private test version was confirmed working — the invitation link opens the right page and a dead link correctly shows a plain "unavailable" message. Nothing went on the real site.
- **2026-08-17 — [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md):** Mark authorized the private-test checks. The real live site, collecting from the public, analytics accounts, and outreach all stayed closed.
- **2026-08-17 — [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md):** Mark confirmed the invitation-page work was authorized and built, and that the reflection work could continue on the laptop.

Older entries are kept in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## Workstream names

The `W` identifiers stay stable so evidence and history keep matching.

| ID | Founder-facing name |
| --- | --- |
| W0 | Growth System Direction |
| W1 | Safe Public-Site Foundation |
| W2 | Private Operations Foundation |
| W3 | Growth Relationship System |
| W4 | Public Beta Funnel |
| W5 | Workflow Automation Foundation |
| W6 | Relationship Data Connections |
| W7 | Beta Launch |
| W8 | Legacy Content Read Model |
| W9 | Agent Research & Drafting |
| W10 | Legacy Publishing Research |
| W11 | Legacy System Hardening |

## The map, in order

| ID | What this is | Where it stands | What happens next | Depends on |
| --- | --- | --- | --- | --- |
| W0 | Keeping the plan, decisions, and evidence straight | Done | Nothing; maintained as work proceeds | — |
| W1a | A clean, safe public website shell with nothing attached to it | Done | Nothing | W0 |
| W1b | Proof the shell actually loads in a private test version | Done | Nothing. Confirmed 2026-08-13; nothing went on the real site | W1a |
| W1c | Keeping the new site away from old passwords, old admin pages, and the old system | Done | Nothing; the old systems stay switched off | W0, W1a |
| W2a | The private operations system, proved correct against a throwaway database | Done | Nothing. Confirmed 2026-08-11; the real database was never touched | W0 |
| W2b | Proof only Mark can sign in to the private operations system | Done | Nothing. Confirmed 2026-08-13. The temporary outside access used for testing was removed and must not be restored | W2a |
| W3a | The agreed rules for how the two systems talk to each other | Done | Nothing | W2a, [DR-45](../decisions/2026-08-11-founder-controlled-relationship-pipeline.md) |
| W3b | Records of people, organizations, conversations, and where each relationship stands | Done | Nothing. Confirmed 2026-08-13 against a throwaway database | W3a, W2a |
| W3c | The six-step manual loop for finding and learning from buyers | Done | Nothing; running it stays manual and needs approval before contacting anyone | W3b |
| W3d | Creating the private word-only links sent to people, and safely recording what visitors do | Done | Finished 2026-08-19 by the `W4b-walk` walk-through, which is also this workstream's proof | W3a, W3b, [DR-46](../decisions/2026-08-13-l2-buyer-learning-funnel.md), [DR-54](../decisions/2026-08-14-word-only-opaque-route-handles.md) |
| W4a-L0a | The original plain-language description of what MindfulText offers | Done | Nothing | W1a |
| W4a-L1a | Agreed wording and promise for the invitation page | Done | Nothing. [DR-47](../decisions/2026-08-14-w4a-l1a-recipient-presentation.md), amended by [DR-49](../decisions/2026-08-14-opaque-invitation-attribution-prototype.md): visitors are never told their link is tracked | W4a-L0a |
| W4a-L2a | Agreed questions and results for the reflection | Done | Nothing. [DR-48](../decisions/2026-08-14-w4a-l2a-fit-reflection-direction.md) | W4a-L1a |
| W4a-L2b | Decision to build the reflection ourselves rather than buy a survey tool | Done | Nothing. [DR-50](../decisions/2026-08-14-w4a-l2b-custom-reflection-direction.md) | W4a-L2a |
| W4b-L1a | The invitation page itself, and safe handling of dead or paused links | Done | Nothing. On the laptop only; confirmed by [DR-56](../decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue.md) | W4a-L1a, W1b, W2b, W3d |
| W4b-L1b | Recording that a link was opened, separately from whether a person really engaged | Done | Nothing. On the laptop only. The analytics account is still not created | W4b-L1a, [DR-55](../decisions/2026-08-16-w4b-l1b-masked-analytics-replay.md), DR-56 |
| W4b-L2a | The six-question reflection, with useful results before anyone is asked who they are | Done | Nothing. On the laptop only; 42 site checks and 59 operations checks passed | W4a-L2a, W4a-L2b, DR-56 |
| W4b-L2b | Recording that someone started, paused, or finished the reflection — never their answers | Done | Nothing. Answers are never stored anywhere | W4b-L2a |
| W4b-L2c | Keeping the call request separate from the anonymous answers | Done | Nothing. The call request asks for name and work email, and answers are not attached | W4b-L2a, W4a-L2a |
| W4b-walk | One walk-through of the private test link: open it, read the invitation page, answer the reflection, see results, request a call, and check that a dead link shows a plain unavailable page | Done | Walked 2026-08-19 after Mark briefly unlocked the private test version. Everything worked: the invitation page loaded, all six questions answered, the guidance came back and said plainly that leadership still owns workload, staffing, pay, and supervision, the call request took a name and work email, and a made-up link correctly showed a plain "unavailable" page. No cookies, no analytics account, nothing sent to any outside company. Full record is in [the Master Checklist](GROWTH-SYSTEM-MASTER-CHECKLIST.md) | W4b-L2b, W4b-L2c |
| W7-L0a | Privately connecting each LinkedIn profile Mark invites to its link, so he can see which invitation drew activity | Waiting on you | The plan is approved ([DR-51](../decisions/2026-08-14-linkedin-profile-invitation-attribution.md), [DR-52](../decisions/2026-08-14-w7-unipile-linkedin-attribution.md), [DR-54](../decisions/2026-08-14-word-only-opaque-route-handles.md)) but Mark has not said "build it." This is never proof the named person visited — forwarding and automatic scanners stay possible | DR-51, DR-52, DR-54, W3d |
| W7-L1a | The final words on the MindfulText homepage | Done | Confirm `hello@mindfultext.com` is a real mailbox, or messages visitors send will go nowhere. Approved by Mark 2026-08-19; on the laptop only. Wording is in `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web/W7-L1A-HOMEPAGE-COPY-REVIEW.md` | [DR-53](../decisions/2026-08-14-w7-homepage-finalization-priority.md) |
| W7-L1b | The way alternative homepage buttons get swapped and compared | Waiting until later | Nothing until Mark confirms the identifier and wants the tests. The current email-link button already works | W7-L1a |
| W7-L1c | A demo request that collects a phone number and says plainly Mark will not contact the person afterward unless they ask | Waiting on you | Needs its own written decision first — why the number is collected, how long it is kept, how it is deleted, and who can see it. Nothing is built | W7-L1b, a new dated decision |
| W7-L1d | The same demo request without that reassurance, to test whether saying it changes how many people respond | Waiting on you | Same written decision as `W7-L1c`. Leaving the sentence out must never change what actually happens to a number | W7-L1c |
| W7-L1e | Offering the six-question reflection on the homepage, with no invitation link needed | Waiting on you | Reuses the reflection already built, but the homepage would start receiving answers, which needs approval to collect from the public | W7-L1b, W4b-walk |
| W7-L1f | Further button tests, once the earlier ones produce results | Waiting until later | Nothing; no scope defined yet | W7-L1c, W7-L1d, W7-L1e |
| W7-L2a | Going live and sending the first small batch of LinkedIn messages by hand | Waiting on you | Needs a recorded `W4b-walk`, an accepted `W7-L0a`, and separate approvals to go live, collect from the public, and send. Mark sends every message himself | W4b-walk, W7-L0a |
| W7-L2b | Making sense of replies, objections, and what people actually did | Waiting until later | Starts once the first batch produces evidence. Keeps learning, interest, and real commitment separate | W7-L2a |
| W7-L2c | Mark's decision to push on, change course, or park | Waiting on you | Happens after the evidence is in | W7-L2b |
| W7-L3-gate | Confirming a real organization wants a concrete next step | Waiting until later | A pilot discussion, a budget or pricing question, an introduction to decision-makers, or a staff group asking to try it. Clicks and compliments do not count | W7-L2c |
| W7-L4-gate | Confirming real commercial commitment, or that doing this by hand has become genuinely painful | Waiting until later | An accepted pilot, a signed letter, an agreement, a payment, or a recurring scale problem | W7-L3-gate |
| W4a-L3a, W4b-L3a, W4b-L3b | Bigger message experiments and richer journeys | Waiting until later | Parked behind `W7-L2c` and `W7-L3-gate` | W7-L2c |
| W4a-L4a, W4b-L4a | Large-scale analytics, automation, and outside services | Waiting until later | Parked behind `W7-L4-gate` or proven repeated pain | W7-L4-gate |
| W5a | The plan for one small notification workflow | Done | Nothing. A plan only — nothing was imported, switched on, or connected | W3a |
| W5b, W6 | Switching on automated workflows, and connecting outside services | Waiting until later | Parked behind `W7-L4-gate` or proven repeated pain. Details in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) | W7-L4-gate |
| W8, W9 | The read-only catalogue of old content, then agent research and drafting | Waiting until later | Parked until after the beta. Details in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) | Beta acceptance |
| W10 | Researching whether the old publishing system can ever be used safely | Waiting until later | A separate later programme. Publishing, renaming, and launching subscriptions stay prohibited meanwhile. Details in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) | A separate decision |
| W11 | Cleaning up old passwords and old systems before any of them is ever reused | Waiting until later | Starts after revenue, **or before any old system is switched back on — whichever comes first.** Parking it is not permission to reconnect anything. Details in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) | Revenue, or a proposal to reuse an old system |

## What can happen next

1. **Say "build it" on the LinkedIn who-clicked records (`W7-L0a`)** — the plan is approved, only Mark's go-ahead is missing. This is now the only thing standing between here and preparing the first batch.
2. **Confirm the homepage email address** — the wording for `W7-L1a` is approved and built; it just needs `hello@mindfultext.com` to be a real mailbox.
3. **Turn the lock back on** for the private test version of `mindfultext-web` in Vercel, which was opened on 2026-08-19 for the `W4b-walk` walk-through.
4. **Keep everything else waiting on its trigger** — the full list is in [the deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md).

## Decisions only Mark can make

- **Going live, collecting from the public, and sending the first LinkedIn batch** (`W7-L2a`). These can be approved together in one sitting, but none is assumed.
- **Saying "build it" on `W7-L0a`**, the private record of which invitation drew activity.
- **Confirming the identifiers `W7-L1b` through `W7-L1f`**, which an agent proposed, and whether `hello@mindfultext.com` is the right address to publish and exists as a real mailbox.
- **A written decision before `W7-L1c` or `W7-L1d` collects a phone number**, covering why it is collected, how long it is kept, how it is deleted, who can see it, and what the visitor is told. Because `W7-L1d` deliberately leaves out the reassurance, that decision must state plainly that leaving it out changes nothing about how the number is treated.
- **At `W7-L2c`, whether the evidence is strong enough** to justify the bigger experiments behind `W7-L3-gate`.

## Not yet

- No contacting anyone, no automatic sending, no outside services connected, no collecting call requests from real people, and no automated workflows switched on.
- No going live on the real site, no real database access, no domain or address changes.
- No practices, audio, old content catalogue, content admin pages, agent sending, or old publishing system.
- No cleaning up old passwords or old systems before revenue, unless an old system is proposed for reuse first.
- No claiming that a private test equals the real site, that a throwaway database equals the real one, that a plan equals a working system, or that something passing its checks means buyers want it.

## Related records

- [Growth System Master Checklist](GROWTH-SYSTEM-MASTER-CHECKLIST.md) — where agents take their instructions.
- [Deferred archive](GROWTH-SYSTEM-DEFERRED-ARCHIVE.md) — parked scope; nothing pending.
- [DR-58](../decisions/2026-08-19-growth-process-right-sizing.md) — the process right-sizing this roadmap reflects.
- [DR-57](../decisions/2026-08-17-w4b-l1c-l2d-private-test.md) — private-test authorization for `W4b-walk`.
- [DR-45](../decisions/2026-08-11-founder-controlled-relationship-pipeline.md) — no message goes out without Mark sending it.
