# MindfulText Product Opportunity Ledger

Last updated: 2026-07-29 — recorded by: Codex

**Status:** Founder-directed product discovery and prioritization reference.
`PRO-###` records are proposals, not approved builds, commitments, clinical
claims, data-handling changes, or live-site changes. The current
[website-modernization playbook](../planning/website-modernization-playbook.md)
still governs its stated scope and deferrals.

## A. Naming and lifecycle

`PRO-###` means **product opportunity**: one durable record for a possible
product, platform, operations, or compliance capability. The word *idea* is
used in plain English; `PRO` is this repository's short, stable identifier.
It does not mean production (`prod`), professional, product requirements
document (`PRD`), or an approval status.

There is no cross-industry standard identifier prefix for product ideas. The
common product-discovery pattern is instead an *idea* record that can represent
a problem, opportunity, solution, or feature request; it gains supporting
insights and is linked to delivery work once the team decides to act. See
[Atlassian's idea overview](https://www.atlassian.com/software/jira/product-discovery/guides/ideas/overview)
and [its product-discovery template](https://www.atlassian.com/software/jira/templates/product-discovery).

Lifecycle: **captured → shaping → validated → committed → delivering →
released**, or **parked**. A record only moves to `committed` through a
separate founder decision and has no delivery ticket by default.

## B. Ranking method

This first ordering is deliberately lightweight; there are no user-reach,
revenue, engineering-estimate, security, or legal inputs yet, so a RICE score
would imply false precision. The score is a decision aid, not a forecast:

`priority signal = customer/business value + foundation leverage + current
evidence/urgency − delivery and risk burden`

Each factor is 1–5. Higher is better except burden. Ties favor the item that
unblocks a preceding capability. Re-score when architecture, user evidence,
cost, privacy, or compliance facts become available.

## C. Ranked opportunity backlog

| Rank | ID | Product opportunity | Signal | Current placement | Why it is here / next decision |
| ---: | --- | --- | ---: | --- | --- |
| 1 | PRO-001 | Authentication and identity foundation | 10 | **Now — shape** | A prerequisite for subscriber or organization access. Define account model, sign-in options, migration path, and security boundary before choosing a provider or building. |
| 2 | PRO-002 | Application data foundation (Supabase or comparable) | 10 | **Now — shape** | Required to make accounts, entitlements, admin workflow, and later personalization coherent. Compare managed Postgres-based options on data model, access control, cost, portability, and operations; do not select Supabase by default. |
| 3 | PRO-003 | Stripe webhook-based app entitlements | 9 | **Now — shape** | Makes paid subscription state actionable in the app. Design the source of truth, event reconciliation, cancellation/refund handling, and failure recovery after PRO-001/PRO-002 are defined. |
| 4 | PRO-004 | Subscriber dashboard | 9 | **Next — validate and scope** | A visible subscriber value surface for account, plan, preferences, and support. Define the smallest user jobs and rely on the identity, data, and entitlement foundations first. |
| 5 | PRO-014 | Guided reflection onboarding and personal experience page | 8 | **Next — prototype and validate** | A product-led acquisition and activation loop: a short, value-giving guided reflection creates a personal web experience and configures an initial MindfulText rhythm. It depends on PRO-001–PRO-004 and must be tested before a full adaptive system is built. Linked belief: [[growth/HYPOTHESES#gh-005--reflective-onboarding-to-a-personalized-mindfultext-rhythm|GH-005]]. |
| 6 | PRO-016 | Commitment-risk removal: transparent trial, cancellation, and value proof | 8 | **Next — include in prototype** | Address three adoption objections by design: make renewal and cancellation plainly controllable; let a prospective member experience a small benefit before commitment; and provide a truthful, nonclinical way to judge whether the experience is worth continuing. It depends on PRO-003, PRO-004, and the PRO-014 prototype. |
| 7 | PRO-015 | One-focus goal personalization | 8 | **Next — include in prototype** | Let a member choose one current focus, then adapt the experience around it. The one-focus constraint keeps choices simple and makes the promise legible; it must remain nonclinical and user-controlled. Linked belief: [[growth/HYPOTHESES#gh-005--reflective-onboarding-to-a-personalized-mindfultext-rhythm|GH-005]]. |
| 8 | PRO-005 | Texting-engine rebuild | 8 | **Next — diagnose** | Potentially core to MindfulText's product experience, but “rebuild” is a solution label. First document concrete reliability, scheduling, content, delivery, or operating constraints and compare targeted repair with replacement. |
| 9 | PRO-006 | Custom admin tools | 8 | **Next — validate and scope** | May reduce founder operations friction and make support safer. Start from the few repeated support/operations jobs; build only the smallest internal controls needed after the data model is known. |
| 10 | PRO-007 | Email automation platform | 7 | **Next — evaluate** | The current website plan identifies Resend as a candidate to consolidate transactional and marketing email. Test consent, unsubscribe, deliverability, and migration parity before replacing Mailchimp or Typeform flows. |
| 11 | PRO-008 | Organization portal | 6 | **Later — validate buyer workflow** | A plausible B2B surface, but organization demand, sponsor, users, implementation workflow, and entitlement model remain unproven. It depends on PRO-001–PRO-003. |
| 12 | PRO-009 | Mobile application changes | 5 | **Later — define the user job** | “Mobile changes” is too broad to estimate or prioritize. Capture the specific workflow, platform, success signal, and relationship to the texting experience before splitting into separate opportunities. |
| 13 | PRO-010 | Private-data personalization | 4 | **Later — privacy-first discovery** | Could be valuable, but it needs an explicit user benefit, consent, data-minimization design, access controls, and a decision on whether sensitive/clinical data is ever in scope. It is not enabled by simply adding a database. |
| 14 | PRO-011 | CRM replacement | 4 | **Later — diagnose** | Do not replace a system before identifying the actual relationship-management workflow, current data quality, consent requirements, integrations, and failure points. It may be a process problem rather than a tool problem. |
| 15 | PRO-012 | Headless WordPress APIs after content migration | 3 | **Park — revisit on a concrete blocker** | The current website strategy is incremental WordPress modernization. A headless API layer adds operating complexity without a demonstrated need; revisit only if conventional WordPress becomes a specific constraint. |
| 16 | PRO-013 | AI-generated clinical or efficacy claims | — | **Park — do not build** | Do not generate or publish clinical, therapeutic, or efficacy claims with AI. Any future clinical-claim work requires qualified legal/regulatory and clinical review, a substantiation process, and explicit approval; it is outside this product backlog's build scope. |
| 17 | PRO-017 | Founder-facing agent skill roadmap | — | **Capture — shape as workflows repeat** | **Tag:** `roadmap:agent-features`. A grouped roadmap of agent capabilities for the founder learning and decision loop. Keep each skill independently scoped and evidence-bounded; build only when its stated trigger occurs and a separate decision approves the work. |
| 18 | PRO-018 | Coach-supported manager-vertical network | — | **Capture — shape and validate the service model** | Explore whether qualified coaches or trained helpers can offer opt-in, human support within a manager-facing vertical: identify emerging issues, provide bounded day-to-day support, and route matters that exceed the program's scope. Evaluate a coach-facing and operations system, email-based support routing, a crowdsourced supply model, and a possible revenue-share model. Do not imply coaching availability, compensation, clinical care, crisis response, or delegated people-management responsibility until the operating, safeguarding, legal, and economics model is validated. |
| 19 | PRO-019 | Micro guided-meditation audio capability | — | **Capture — research the delivery stack and economics** | Continue the strategic option to offer short, nonclinical guided meditations as part of the MindfulText experience, initially alongside [[product/PRODUCT-IDEAS#f-product-led-personal-experience-concept|PRO-014]]. Evaluate Fish Audio as a candidate voice-generation alternative to ElevenLabs: the founder’s current understanding is that it offers open-weight models alongside commercial pricing, which requires verification. Before selecting a provider or generating member-facing audio, compare voice quality, licensing and permitted use, pricing/usage economics, self-hosting feasibility, reliability, privacy/data handling, accessibility, and the review process for approved meditation scripts. No provider selection, audio generation, or health/therapeutic claim is authorized by this capture. |
| 20 | PRO-020 | Reply-based message feedback and content-preference learning | — | **Capture — validate the feedback model and safeguards** | Let subscribers reply to a text with a simple, preformatted positive or negative signal (for example, thumbs-up/down or an equivalent supported reply) to request more or less content like it. A negative signal must not be treated as a complete explanation: test a low-friction optional follow-up that identifies the relevant aspect—such as topic, tone, timing, length, or practice type—before changing future content. Validate SMS/platform behavior, response burden, content taxonomy, consent, data retention/deletion, explainability, and safe handling of unexpected free-text replies before building. |

## D. Dependency view

```text
PRO-001 authentication ─┐
                         ├─> PRO-003 Stripe entitlements ─> PRO-004 subscriber dashboard
PRO-002 application data ┘                                  └─> PRO-008 organization portal
                                      └─> PRO-006 admin tools

PRO-001 / PRO-002 / PRO-003 / PRO-004 ─> PRO-014 guided reflection experience
                                              ├─> PRO-015 one-focus personalization
                                              └─> PRO-016 commitment-risk removal

PRO-003 Stripe entitlements / PRO-004 subscriber dashboard ─> PRO-016

PRO-005 texting engine rebuild — diagnose independently before committing
PRO-007 email automation — evaluate independently; preserve consent/delivery
PRO-009 mobile changes — split only after a user job is defined
PRO-010 personalization — requires separate privacy and consent design
PRO-011 CRM replacement — diagnose independently
PRO-012 headless WordPress — concrete-blocker trigger only
PRO-013 AI clinical/efficacy claims — prohibited pending separate governance

PRO-017 agent-feature roadmap — independent, workflow-triggered capabilities;
no skill is implied to be built by capturing the roadmap

PRO-018 coach-supported manager-vertical network — depends on the organization,
identity, data, entitlement, and admin foundations; validate the human-service
model, safety boundaries, compensation economics, and support-routing workflow
before designing a coach-facing or operational system

PRO-019 micro guided-meditation audio — supports the PRO-014 personal
experience as a candidate content modality; validate provider fit, licensed
use, economics, privacy, accessibility, and script review before selecting a
stack or producing member-facing audio

PRO-020 reply-based message feedback — depends on PRO-005 texting-engine
capability and supports PRO-014/PRO-015's explicit, explainable member
preferences; validate platform behavior, consent, taxonomy, and negative-
feedback follow-up before adapting content
```

## E.1 Commitment-risk removal concept

PRO-016 is a product-principle layer for the PRO-014 prototype, not a
promise that MindfulText will guarantee outcomes. It should remove avoidable
commitment friction rather than try to overcome it with reassurance alone:

- **“Will I forget to cancel?”** — Make renewal terms plain, provide a clear
  pre-renewal reminder where applicable, and make self-service cancellation
  and confirmation easy to find. A prepaid or non-renewing trial is an
  alternative to evaluate, not a committed pricing decision.
- **“Does this actually work?”** — Establish a member-selected, nonclinical
  intention at onboarding and offer a simple, optional check-in on whether the
  experience has been useful. Do not represent this as efficacy evidence or a
  clinical outcome.
- **“Is it worth it?”** — Give a prospective member a small, useful experience
  before asking for a paid commitment; then make plan, price, and the next
  decision easy to understand.

The smallest next decision is which trial/renewal model and which optional
member check-in could be tested without misleading people, creating a dark
pattern, or making an unsupported outcome claim.

## F. Product-led personal experience concept

PRO-014 and PRO-015 are one joined product-and-marketing path. The
marketing promise is not separate advertising bolted onto the product: the
guided reflection gives a prospective member a small moment of value, then the
resulting experience gives them a reason to begin and return.

Use **Your MindfulText Rhythm** as a working customer-facing name—not “texting
program.” Other acceptable plain-language descriptions are *your daily
practice* and *your personalized MindfulText experience*.

```text
Landing page / invitation
  → Guided reflection (4–6 short prompts that are useful in themselves)
  → “Your MindfulText Rhythm” web page
  → trial or paid choice
  → first text-based practice, configured from the reflection
  → member reactions and page interactions refine future content and timing
```

The reflection should be brief, opt-in, and useful even if the visitor never
subscribes. Examples of the *kind* of prompt—not final copy—are:

- “What would you like to make a little more room for this week?” — selects
  the one focus.
- “When could a small pause feel most welcome?” — proposes timing, not a
  diagnosis.
- “What kind of support feels realistic right now?” — lets the member choose
  a tone or practice length.

The personal page can show the selected focus, a few relevant micro-practices,
the next small step, and clear controls to edit or delete preferences. Phrase
adaptation truthfully: “Your Rhythm can adapt to the preferences and reactions
you choose to share,” not as an opaque system that is silently profiling a
person or making clinical judgments.

The first prototype should **not** attempt open-ended AI personalization or
collect sensitive health information. Use a small approved content taxonomy,
explicit preferences/reactions, explainable rules, consent, and a reset/delete
control. PRO-010 remains the separate privacy-first work item for any future
broader personal-data approach.

## G. Coach-supported manager-vertical network

PRO-018 captures a possible human-support layer for a manager-facing
vertical. The proposition to test is not merely a coach directory: it is a
bounded operating model in which eligible coaches or helpers can receive
routed, opt-in requests and help participants handle ordinary growing pains
before they become disengagement or escalation points.

The model could eventually need two connected surfaces:

- **Coach-facing:** eligibility, availability, coaching scope, routed-request
  notifications (potentially by email), response expectations, handoff, and
  compensation tracking.
- **Operations-facing:** intake and triage, consent, matching/routing,
  escalation and referral rules, auditability, coach quality management, and
  an explicit boundary between program support and an employer's management or
  HR responsibilities.

Key questions to resolve before a build or external recruitment decision:

- Which manager vertical, participant job, and recurring issue would benefit
  from this layer more than self-service MindfulText support alone?
- Who can serve: vetted professionals, trained peers, a curated community, or
  a genuinely crowdsourced network—and what credentialing, background checks,
  supervision, and quality controls would each require?
- What is the safe scope and escalation path for sensitive, employment,
  clinical, crisis, or conflict-related issues? The service must not present
  itself as therapy, emergency support, legal/HR advice, or delegated manager
  authority without separate qualified review.
- Does a revenue share create a sustainable, fair incentive without making
  coaches employees or creating inappropriate incentives? This is an economics
  question to validate, not a proposed compensation commitment.
- Can email alerts support a small manual pilot while preserving participant
  consent, privacy, response-time expectations, and an auditable handoff—or is
  a purpose-built routing workflow needed first?

The smallest next decision is whether to define one manager vertical and one
nonclinical support scenario for a manual, safeguarded service-model test.
That decision follows PRO-008 organization-workflow validation and the
foundational account, data, entitlement, and admin work; it does not authorize
coach recruitment, participant outreach, payment, or collection of sensitive
information.

## H. Reply-based message feedback and content-preference learning

PRO-020 captures a small, subscriber-controlled feedback loop for the text
experience. The intended interaction is a reply using a preformatted positive
or negative signal—not open-ended analysis of a subscriber's messages—to help
the subscriber receive more or less content like the message they just saw.

A thumbs-down (or equivalent negative signal) establishes only that the
message was not wanted in its present form. It does **not** reliably say
whether the issue was the topic, tone, timing, length, frequency, practice
type, or something else. Before the system adapts content, validate whether a
brief optional second reply can capture one of those dimensions without making
the exchange burdensome. If the subscriber does not answer, preserve that
uncertainty rather than inferring a reason.

The smallest credible prototype should use:

- a small, approved content taxonomy so the system can truthfully explain what
  “more like this” and “less like this” mean;
- an explicit, supported reply format whose behavior is verified for the
  texting provider and subscriber device context;
- clear, user-visible controls to change or reset preferences and delete their
  feedback where applicable; and
- bounded handling for unexpected free-text replies, including a safe response
  and no silent interpretation of sensitive, clinical, or crisis content.

This is not authorization to profile subscribers silently, make clinical
judgments, collect sensitive health information, or claim that adaptation will
produce an outcome. Its next decision is whether one privacy-safe,
low-friction feedback pattern can produce interpretable preference signals
that subscribers actually choose to use.

## I. Agent-feature roadmap

PRO-017 uses the cross-cutting tag **`roadmap:agent-features`**. It captures
capabilities for the agent system that supports founder learning and decisions;
it is not a claim that the capabilities already exist, a mandate to create
them, or authority for external research, outreach, or automation. The timing
phrases below are the proposed build triggers.

### Current hypothesis loop

- **Existing — `expand-growth-hypothesis`:** Develop a selected `GH-###` with
  public research, editable assumptions, paths, evidence gaps, and TAM context.
- **Build first — `review-research-run`:** Review a completed run, identify
  what improved founder decisions, and stage one testable workflow revision.
- **Existing — `summarize-mark-doc`:** Compress verbose run or strategy
  material into a quick founder re-entry view.

### Public research and evidence

- **Later candidate — `audit-evidence-and-claims`:** Verify that claims match
  accessible sources and distinguish context, hypothesis, buyer intent, and
  validated evidence.
- **After another segment run — `map-segment-intelligence`:** Map buyer
  functions, public account signals, category language, alternatives, and
  contradictions without creating a CRM.
- **When account research repeats — `qualify-public-accounts`:** Score public
  account context against CDP qualification criteria while preserving unknown
  buyer authority and intent.
- **If sizing recurs — `size-icp-tam`:** Produce a transparent U.S. TAM range
  for a behavior-and-situation-defined ICP without presenting TAM as demand.

### Validation and founder decisions

- **Near-term candidate — `build-validation-packet`:** Convert evidence into
  the smallest responsible Level 2 test with questions, proof requirements,
  and pass/fail/stop conditions.
- **Approval-dependent — `design-manual-discovery-test`:** Draft one qualified
  learning conversation after Mark approves considering an external test.
- **Before external materials — `review-claim-risk`:** Flag clinical, outcome,
  retention, workload, and unsupported business claims in draft messaging.
- **When comparisons recur — `compare-decision-packets`:** Compare local and
  frontier outputs on safety, completeness, evidence discipline, and decision
  usefulness.

### Run and model learning

- **After repeated setup friction — `design-bounded-research-run`:** Turn an
  approved path into a run card, prompt catalog, budget, trace contract, and
  stop conditions.
- **After more model runs — `score-local-model-utility`:** Score task-specific
  tool use, sourcing, fidelity, discipline, schema compliance, latency, and
  review burden.
- **Only after validation — `supervise-bounded-local-run`:** Operate a finite
  queued run using preflight, concurrency, timeout, and fail-closed rules.
- **When protocols branch — `compare-run-versions`:** Compare two run-system
  versions against the same objective without silently promoting either.
- **Once patterns repeat — `curate-eval-cases`:** Convert sanitized historical
  tasks into stable inputs and expected properties for regression testing.

### Epoch 2 transition

- **Epoch 1 closeout — `run-epoch-retrospective`:** Separate validated
  learning, useful process, inconclusive observations, failed assumptions, and
  unresolved decisions.
- **After repeatable tasks — `curate-learning-dataset`:** Prepare reviewed
  candidate, approved-training, and frozen-evaluation records with provenance
  and rights status.
- **When roles stabilize — `port-skill-to-harness`:** Translate a proven Codex
  skill into Claude, Hermes, or another harness without assuming identical
  capabilities.
- **Later only — `evaluate-skill-optimizer`:** Determine whether SkillOpt,
  Promptfoo, or another framework adds value once tasks and scores stabilize.
- **Mark-directed — `draft-next-epoch-charter`:** Turn the retrospective and
  approved decisions into a bounded Epoch 2 proposal.

## J. Intake template

Use one `PRO-###` record per distinct opportunity. Add this information before
promoting an item beyond `captured`:

```text
ID and title:
Status:
Problem / user job:
Target user and buyer:
Expected outcome and metric:
Evidence and unknowns:
Dependencies:
Privacy, security, claims, and compliance notes:
Smallest next decision:
Linked delivery work (only when committed):
```
