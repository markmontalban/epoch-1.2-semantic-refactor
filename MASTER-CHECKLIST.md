# MindfulText Epoch 1 — Master Checklist

Position scheme: top-level sections use `A`, `B`, `C`; checklist items use
`A1`, `A1a`, `A1b`, etc. Items are named by their visible document position.

Last updated: 2026-07-17 01:12:20 PDT — edited by: Codex

**Last reconciled:** 2026-07-17

This is the Epoch 1 execution tracker; the [context map](CONTEXT-MAP.md) provides the Mark-facing re-entry summary and dependency diagrams.

Its reference sources are:

1. [`planning/next-steps-plan.md`](planning/next-steps-plan.md) — historical scope and full dependency plan.
2. [`decisions/2026-07-10-epoch-1-foundation.md`](decisions/2026-07-10-epoch-1-foundation.md) — foundation decisions; linked decision records win on conflicts.
3. [`status/CURRENT-STATE.md`](status/CURRENT-STATE.md) and dated observation records — current evidence.
4. [`CONTEXT-MAP.md`](CONTEXT-MAP.md) — re-entry dependency maps and reference
   index; explanatory only, never an execution authority.
5. [`CHARTER.md`](CHARTER.md) — canonical Epoch 1 authority and amendments.
6. [`decisions/DECISION-REGISTER.md`](decisions/DECISION-REGISTER.md) — the
   canonical decision index; linked dated decision records retain approval
   authority.

Status labels: **Done** = evidenced; **In progress** = active, not yet proven;
**Mark only** = requires Mark’s judgment or explicit approval; **Deferred** = not
eligible before its named gate. No item authorizes outbound activity, provider
spend, or a model/core change without the approval stated in the charter.
Use the document-position references below when assigning or reporting work.
Line numbers are optional current navigation hints only.

## Mark summary

- **Corpus reaches RUN-011:** Runs 005–009 retain the care-delivery account,
  adjacency, influence, narrative/pain, and candidate-DSP evidence; RUN-010
  indexes the corpus and RUN-011 qualifies one internal founder-theme route.
  None establishes demand or authorizes outreach or publishing. [Current state](status/CURRENT-STATE.md)
- **Care-delivery language stays bounded:** RUN-008 recurrence is source-profile
  coding, not audience prevalence or demand evidence, and RUN-009's candidate
  `ICP-022` still needs Mark review before any canonical addition or narrower
  workflow pass. [RUN-008 report](runs/run-008/outputs/RUN-008-REPORT.md)
- **Lineage is now checkable:** RUN-010 maps retained entities, IDs, artifacts,
  and dependencies through RUN-009 without adding strategic recommendations.
  [Lineage map](EPOCH-1-HIERARCHY-DATA-LINEAGE.md)
- **First social route is complete:** Mark selected the cross-cutting one-lab
  lane and founder-theme route; RUN-011 advanced `SOC-008` only to a separately
  gated manual-baseline decision. [DR-36](decisions/2026-07-16-social-intelligence-founder-content-direction.md)
- **Next decisions remain human:** Mark separately chooses the DSP candidate,
  manual social baseline, and whether existing market evidence supports `E4`;
  the local-core, no-Telegram, and no-unapproved-external-action boundaries
  remain unchanged. [DR-22](decisions/2026-07-12-prototype-run-first.md)

## Guardrails — always in force

- [x] `A1` **$0 external-model cap and $0 sandbox cap** — DR-8. Do not raise or
  work around either cap without a new dated Mark decision. *2026-07-11 note
  (DR-16): Mark's personal manual testing is controlled by the existing
  OpenRouter account limits — Mark-executed only; it raises neither agent-side
  cap.*
- [x] `A2` **No outbound automation or unapproved manual outreach.** Every outbound
  action needs Mark’s approval at the point of execution.
- [x] `A3` **Data boundary:** unassigned material is `local-only`; Run 001 may use
  only `external-okay` material or a Mark-approved `redacted-external`
  derivative.
- [x] `A4` **Hermes may be used for manually prompted prototype work; Telegram and autonomous task creation are out of scope.**
- [x] `A5` **Dashboard scope is stability-only through Run 003.**

## Phase 0 — reconcile platform and governance

- [x] `B1` **D1 gate rule:** per-surface behavior is live in dashboard commit
  `c7f0b32`: external work blocks on either BLOCK; internal review retains
  lone-BLOCK-to-WARN corroboration. Run records retain the caller-declared
  `surface` for audit.
  - [x] `B1a` **Caveat documented for every reviewer:** `surface` is caller-declared; a
    mislabeled internal call can soften a lone BLOCK to WARN. Treat that label
    as a reviewable classification claim, not a trust boundary.
- [x] `B2` **D2/D3 configuration:** dashboard commit `72712e2` sets budget to 116
  GB and disables `babysitter` and `window_watch` for Epoch 1.
- [x] `B3` **D4 documentation:** root `AGENTS.md` names the live dashboard
  path and the active router/residency/gate rules; the dashboard's configured
  MindfulText core is now `qwen3:8b` (DR-19).
- [x] `B4` **Log observability:** dashboard restart at `2026-07-10T14:38:25.508Z`
  enables ISO-8601 log prefixes (commit `c7f0b32`).
- [x] `B5` **Canonical charter and dated decisions:** charter v1.1 and DR-1…DR-12
  are present; superseded planning docs remain marked as such.

### Charter v1.1 amendment ledger

- [x] `B6a` Authority hierarchy: `AGENTS.md` governs platform/safety; the canonical
  charter governs lab roles/workflows only (charter §14.1).
- [x] `B6b` Data-class/default and local-redaction rules are adopted (charter §14.2).
- [x] `B6c` Unknown/unverified provider surfaces are external; named provider,
  per-run cap, and Mark approval are required (charter §14.3; DR-8).
- [x] `B6d` The autonomous coding arm is parked until a level-2/3 signal plus dated
  Mark decision (charter §14.4).
- [x] `B6e` `LAB-SETUP` and `MT-BOOTSTRAP` have their required bounded-card fields
  (charter §14.5; Run 001 card is the current `MT-BOOTSTRAP` artifact).
- [x] `B6f` Run taxonomy (`lab-validation` / `market-test`) and required measures
  are adopted (charter §14.6).
- [x] `B6g` Hermes sequence is adopted; C4 is deferred by the prototype
  run-first amendment (charter §14.7, §14.22).
- [x] `B6h` Social intelligence is constrained to lab input, not a parallel program
  (charter §14.8).
- [x] `B6i` Per-run privacy-safe trace requirement is adopted (charter §14.9).
- [x] `B6j` Dashboard remains stability-only and worktree triage is post-Run-003
  (charter §14.10).
- [x] `B6k` Charter version/commit requirement is adopted (charter §14.11).
- [x] `B6l` Claude-review / Mark-approve-or-waive model and `datasets/` boundary are
  adopted (charter §14.12).
- [x] `B6m` Path-scoring rubric v0.1 is drafted at
  [`growth/SCORECARD.md`](growth/SCORECARD.md) (charter
  §14.13); Mark approval remains a Run 001 gate.
- [x] `B6n` Pi remains optional-later, not the Epoch 1 control plane (charter §14.14;
  DR-7).
- [x] `B6o` Targets are re-dated: Aug 14 packet / Sep 4 signal (charter §3; DR-6).

## Phase 1 — prepare Run 001

### 1. Lab and data store

- [x] `C1a` LAB-SETUP scaffold, templates, workflow, privacy-safe trace schema,
  utilities, `.gitignore`, and local Git history exist (commits `fa16547`,
  `c50dc5d`).
- [x] `C1b` **Mark chose the final non-iCloud lab location:**
  `~/AI-Studio/Projects/mindfultext-epoch-1/` (DR-9), confirmed 2026-07-10.
  The repository remains staged until Mark separately authorizes the move and
  no session has the lab open.
- [x] `C1c` **Mark only — choose a separate local-only store** outside any tracked
  repository for raw sensitive material. Mark selected
  `/Volumes/Seagate Desktop Drive/MindfulText-local-only/`: encrypted, non-Git,
  non-cloud-synced, and no fallback if unavailable (DR-20).
- [x] `C1d` `datasets/` is ignored; no raw evidence is present in this repo.
- [x] `C1e` §6.3 new-repo waiver and non-iCloud rationale are recorded in DR-9;
  only the local-only-store decision and separate move authorization remain.

### 2. Evidence inventory and external-routing approval — critical path

- [x] `C2a` **Mark only — classify or strike every candidate in
  [`growth/HYPOTHESES.md`](growth/HYPOTHESES.md):** validation notes,
  pilot feedback (including third-party consent), ICP one-liner, and product
  positioning. *Approved by Mark 2026-07-11 — all four retained (DR-13).*
- [x] `C2b` **Mark only — complete rights/consent, data class, permitted use, and
  status** for each retained asset. *Approved by Mark 2026-07-11 (blanket;
  DR-13) — spot-check each actual asset at import, esp. asset 2's third-party
  content.*
- [x] `C2c` **Mark only — add only cleared summaries/provenance to Approved
  evidence; put founder assumptions in their separate section.** *Approved by
  Mark 2026-07-11 (DR-13); populates when assets are physically imported.*
- [x] `C2d` **Mark only — resolve the Run 001 collision:** set its input set to
  `external-okay`, or approve a `redacted-external` derivative. If either is
  unavailable, Run 001 must not execute. *Resolved by Mark 2026-07-11: input
  set classed `external-okay` (DR-13).*

### 3. Run 001 approval — critical path

- [x] `C3a` Draft card validates: `python3 tools/validate-run-card.py
  runs/run-001/run-card.md` reports “valid — awaiting Mark approval.”
- [x] `C3b` **Mark only — review/amend rubric v0.1** in
  [`growth/SCORECARD.md`](growth/SCORECARD.md), including
  the five 0–2 dimensions, disconfirming-evidence subtraction, 30-day
  staleness rule, and direct-action WTP=2 rule. *Approved by Mark 2026-07-11,
  unamended (DR-14).*
- [x] `C3c` **Mark only — review/amend Team Config v0.1:** Claude-only external
  surface, no `local-only` input, and no silent fallback. *Approved by Mark
  2026-07-11 **as amended**: Mark manually names the provider/agent for each
  invocation (Codex, Claude, or Hermes). Team Config v0.1.1 now records the
  DR-17/DR-22 manual prototype policy; Telegram stays out of the workflow.*
- [x] `C3d` **Mark only — complete and approve Run 001 card:** set `data_class`,
  confirm the ≤4-hour stop condition, harness-controlled invocation budget,
  stop conditions, measures, and change `approval` to `APPROVED by Mark
  YYYY-MM-DD`. *Approved by Mark 2026-07-11 (DR-16); clarified by DR-17 on
  2026-07-12.*
- [x] `C3e` **After approval — commit the Mark-approval edits and re-run the card
  validator.** This makes Run 001 eligible; it does not execute it. *Done
  2026-07-11 by Claude Dispatch — validator: valid and approved.*

### 4. Platform stability telemetry — background learning

- [x] `C4a` Live D2/D3 changes and timestamp logging are deployed.
- [x] `C4b` **Concluded failed — 24-hour observation baseline** from log line **1311** /
  `2026-07-10T14:38:25.508Z` recorded two core re-pins before the window
  completed (`2026-07-10T17:25:26.063Z` and `2026-07-10T18:40:26.171Z`).
  Evidence and exact command:
  [`observations/2026-07-10-stability-observation.md`](observations/2026-07-10-stability-observation.md).
- [x] `C4c` **Mark only — direct the D2 response:** Mark authorized and Codex
  deployed the core swap from `gpt-oss:20b` to `qwen3:8b` (DR-19; dashboard
  commit `7b1cec0`). Live health confirms `core_degraded: false`; DR-22 makes
  `C4d` background telemetry rather than a Run 002 gate.
- [ ] `C4d` **Deferred background telemetry:** when convenient, record a fresh
  24-hour observation with health, event counts, and `dispatcher.core_degraded`.
  It does not gate Run 001 or Run 002 (DR-22).

### 5. C5 — deferred Telegram/Hermes integration checks

- [ ] `C5a` **Deferred:** inspect Hermes provider configuration only if a future
  autonomous or Telegram-integrated workflow is proposed.
- [ ] `C5b` **Deferred:** identify the router `telegram` consumer only if Telegram
  is introduced. Inbound Telegram cannot create task cards in the current mode.

## Phase 2 — Runs 001–002

### Post–Run 001 review and Run 002 sequence

The seven steps below move from Mark’s review of Run 001 to a bounded local comparison; the checklist items remain the execution authority and no Mark-only approval is implied by this summary.

#### D3–D4 — Review Run 001

- **Assess evidence usefulness:** Mark found the organization-sponsored direction useful once the founder-supplied MHA Dutchess case-study/testimonial context was considered. It is prioritization evidence, not broad validation. [EV-001](growth/EVIDENCE-REGISTER.md), [ranked scorecard](runs/run-001/outputs/GH-002-ranked-scorecard.md)
- **Check run cost and latency:** The Run 001 trace records bounded completion but no reliable harness duration/usage figure. Record that gap; do not add a second project budget system. [Run 001 card](runs/run-001/run-card.md)

#### D5 — Approve Run 002

- **Choose the research scope:** Mark approved Run 002 for `SEG-001 — Care-delivery organizations`, using public account intelligence and local research evaluation rather than a pure model comparison. [Run 002 card](runs/run-002/run-card.md), [DR-29](decisions/2026-07-13-segment-linked-runs.md)

#### D6–D7 — Run segment intelligence

- **Capture local-work state:** Record dashboard health, resident models,
  memory, queue, and re-pin state before any local task; there is no 24-hour
  precondition. [Control-plane reference](../../Projects/model-dashboard-live/docs/EPOCH1-CONTROL-PLANE.md)
- **Execute and trace safely:** Produce cited public segment/account/buyer/language/category research and a reference/hash-only trace. An eviction or `503` makes only the local-work evaluation inconclusive; public research may continue. [Run 002 card](runs/run-002/run-card.md)

#### D8 — Review Run 002

- **Judge the research:** Mark reviews whether the segment/account research narrowed the target and whether local work earned its operational value before selecting one atomic hypothesis for Run 003. [Run Index](runs/README.md#run-002--segment-intelligence--local-research-evaluation)

#### D9 — Check Run 003 readiness

- **Select one testable claim:** Before Run 003, select one atomic hypothesis with a named segment/ICP/buyer role, bounded claim, evidence gap, and pass/fail/stop condition. Confirm stability-only dashboard scope, local-only data remaining outside the repo, and review requirements. [Run Index](runs/README.md#run-003--validation-packet-for-one-selected-test)

- [x] `D1` **Run 001 — hypothesis exploration (DR-24/DR-25/DR-27/DR-28):** a Mark-prompted agent starts from
  one Growth Hypothesis directly entered in `growth/HYPOTHESES.md`, follows its optional research and
  profile-tracking controls, fills missing fields with cited public research, then creates 3–5 editable path cards, a ranked scorecard,
  evidence-gap list, and a reference/hash-only `trace.jsonl`. Once the agent
  has a clear behavioral/situational ICP, it adds a transparent U.S. TAM
  range; SAM/SOM are not default outputs. It uses the primary `ICP-###` from
  `growth/ICP-REGISTRY.md` when known, preserves it on paths and signals, and
  distinguishes a buyer from a channel or research audience. Label agent-filled claims
  `agent-hypothesis`; stop at five cards or four hours. *Completed 2026-07-12 by Codex for GH-002: five paths, ranking, gaps, public-profile watch, and a cited U.S. TAM note are linked from the hypothesis; no outbound activity occurred.*
- [x] `D2` Run 001 records the charter version and commit in its card at execution. *Recorded 2026-07-12 in `runs/run-001/run-card.md`: charter v1.9; baseline commit `e42a302`; Codex named by Mark for the GH-002 invocation.*
- [x] `D3` **Mark — review Run 001 evidence quality and decision usefulness.** The MHA Dutchess context makes the organization-sponsored direction useful enough to prioritize, while transferability remains unproven (DR-29).
- [x] `D4` **Mark — review Run 001 usage record.** Five paths were completed within the card's bounded session; the trace does not supply a reliable duration/usage figure. That gap is recorded and does not create another project budget system (DR-29).
- [x] `D5` **Mark — approve Run 002:** segment intelligence and local research evaluation for `SEG-001`, not a pure model benchmark (DR-29).
- [x] `D6` **Run 002 — pre-run snapshot:** dashboard/Ollama healthy; `qwen3:8b` resident; `core_degraded: false`; no Dispatcher queue; 102.43 GB dashboard capacity available for new models. No 24-hour precondition applied.
- [x] `D7` **Run 002 — execute public segment intelligence:** cited account, buyer-group, market-language, category, contradiction, and `GH-004` outputs are present. The local `task:classify` check returned no usable response, so local-work evaluation is **inconclusive**; public research remains usable. [Run 002 blackboard](runs/run-002/blackboard.md)
- [x] `D8` **Mark — review Run 002 research and local-work value.** Mark advanced the focused community-behavioral-health branch; the local check was inconclusive and does not determine the market result (DR-30).
- [x] `D9` **Select one Run 003 test:** `GH-004` / `SEG-002` is selected for a paired local/frontier validation packet. The frontier provider/model must be named before that arm runs; both arms use the same frozen input and no outreach is authorized (DR-30).

## Phase 3 — Run 003 and decision fork (by 2026-08-14)

- [x] `E1` **Run 003 — paired validation packet:** `CMP-001-F` and `CMP-001-L` both completed with the frozen input; the scorecard records the captured local result and the safer frontier packet. Mark review remains required and neither output authorizes outreach (DR-30).
- [x] `E2` **Define the selected test:** the frontier packet defines a level-2 buyer-intent signal, pass/fail/stop conditions, and the prerequisite public account qualification. Mark still decides whether any manual conversation is warranted (DR-30).
- [x] `E2a` **Create segment-linked customer-development plan:** `CDP-001` links parent `SEG-001`, focused branch `SEG-002`, `GH-004`, and `GTM-001`. It maps bounded target intelligence and marketing opportunities but authorizes no research run, outreach, publication, monitoring, or manual conversation (DR-31).
- [x] `E2b` **Complete — RUN-004 CDP-001 local-research sprint program:** 27
  bounded public-search local workers completed and one Ornith attempt was
  blocked by the memory-fit gate. The run retained six source-checked context
  cards and a model-utility record; it did not authorize CRM work, monitoring,
  outreach, publishing, provider fallback, or a residency change (DR-32).
- [x] `E2c` **Complete — RUN-005 care-delivery organization registry:** 56
  public organization records, a normalized source ledger, and buyer-
  function/title taxonomy are retained under `growth/account-registry/`. Six
  accounts have additional public workforce/operating context; directory
  status remains a research lead, not buyer intent or authorization to contact
  any organization (DR-33).
- [x] `E2d` **Complete — RUN-006 care-delivery one-degree map:** 50 source-backed
  nodes are retained in `runs/run-006/outputs/` with explicit `under`, `beside`,
  and `above` relationships. `SEG-002 / CCBHCs` remains the lead branch;
  `SEG-003 / FQHC integrated behavioral health` is the first comparison. No
  code fork, code merge, CRM write, or external action occurred (DR-34).
- [x] `E2e` **Complete — RUN-007 care-delivery influence map:** 50 public
  source/profile records (45 direct page-opened; 5 search-snippet-only) are retained across operator media, behavioral health,
  FQHC/rural, post-acute, workforce, and creator channels. The report recommends
  an operator-specialist versus workforce-storytelling comparison; no external
  action is authorized.
- [x] `E2f` **Complete — RUN-008 narrative and pain map:** Approved fork of
  RUN-007 attempted all 50 public sources and retained a narrative registry,
  ranked pain points, term taxonomy, historical timeline, and source ledger. The
  leading coded pains are workforce capacity, retention/burnout, funding, and
  administrative/payer friction; this is not article-frequency, buyer-intent, or
  demand evidence. [Report](runs/run-008/outputs/RUN-008-REPORT.md)
- [x] `E2g` **Complete — RUN-009 Direct Support Professional ICP qualification:**
  Prior Epoch 1 evidence plus bounded public research supports a candidate DSP
  ICP under `SEG-001`, distinct from LCSWs but not yet a separate segment. The
  report keeps the worker/user separate from the possible provider sponsor and
  identifies one bounded provider/workflow pass as the next evidence step; no
  canonical ICP or segment record was changed. [Report](runs/run-009/outputs/RUN-009-REPORT.md)
- [x] `E2h` **Record the gap-analysis roadmap and feature backlog:** the
  FourthWave-inspired map records current market, differentiation, pilot,
  trust/procurement, and later capability/capital unknowns. It is a
  proposal-only de-risking queue; it changes none of the `E3`–`F4` gates and
  authorizes no build or external action. [Roadmap](checklists/GAP-ANALYSIS-ROADMAP.md)
  (DR-35).
- [x] `E2i` **Complete — RUN-010 Epoch 1 hierarchy and data lineage:** the
  source-linked map inventories retained entities, identifiers, artifacts, and
  dependencies through RUN-009 without synthesizing findings or making
  strategic recommendations. [Run card](runs/run-010/run-card.md)
- [x] `E2j` **Record social-intelligence and founder-content direction:**
  `SOC-001`–`SOC-007`, the one-lab architecture recommendation, human-touch
  boundary, and conditional run outlines are retained. This records direction
  only; no run card, build, monitoring, publishing, or outreach is authorized.
  [Lane outline](checklists/SOCIAL-LEARNING-LANE.md) (DR-36).
- [x] `E2k` **Complete — Mark chose the social placement and first decision:**
  retain the cross-cutting Epoch 1 lane, select the founder-theme route, and
  execute the `SOC-008` internal positioning pass by X3. RUN-011 advances a
  constructive comedy movement only to a separately gated manual-baseline
  decision; it authorizes no publishing, monitoring, automation, or outreach.
  [Concept packet](runs/run-011/outputs/SOC-008-CONCEPT-PACKET.md) (DR-36).
- [ ] `E2l` **Mark only — resolve Replit and workflow operational posture:**
  after the asset audit, keep, narrow, or replace Replit; choose a private,
  credential-safe Git home/export routine for the currently unversioned n8n
  workflow folder. No migration or workflow activation is authorized.
- [ ] `E2m` **Mark only — complete second-device Git continuity transfer:**
  configure and verify the intended checkpoint/restore path on the other
  device as a separate internal operation; do not treat Replit file history or
  agent checkpoints as the only long-term source history.
- [ ] `E3` **Mark only — decide post-Run-003:** Hermes scope (bounded operator or
  manual), dashboard scope (expand or freeze), and actual worktree triage.
- [ ] `E4` **Mark only — decide whether evidence supports a manual market test.**
- [ ] `E5` If supported, define the minimum ICP-qualified level-2 conversation and
  level-3 commitment, then draft the manual-outreach queue step.
- [ ] `E6` **Mark only — approve or defer that market-test phase.**
- [ ] `E7` **Mark only — confirm or amend** the Aug 14 packet target and Sep 4
  signal target; a miss triggers review/re-scope, never automation expansion.

## Phase 4 — manual market test and closeout

- [ ] `F1` **Mark only — approve or defer a manual market-test phase.** No automated
  campaign is permitted.
- [ ] `F2` If approved, conduct only Mark-approved manual outbound actions and
  record level-2 buyer-intent / level-3 commitment signals; no automated
  campaign is permitted.
- [ ] `F3` **Epoch 1 retro:** usable evidence from Runs 001–003 / market test;
  platform stability; D1 gate-rule behavior; parked coding-arm need; and spend
  cap sufficiency or leakage.
- [ ] `F4` **Epoch 2 planning:** draft/defer the charter; carry forward data class,
  signal ladder, trace privacy, and review model; reassess Hermes/dashboard/
  coding-arm authority; obtain Mark’s scope approval or deferral.

## Active next actions and handoff

1. `G1` **Optional background telemetry:** the `qwen3:8b` core is live. Record a
   24-hour baseline when convenient; it does not block the learning loop.
2. `G2` **Mark:** class the four evidence candidates, then approve the rubric, team
   config, and Run 001 card in one sitting. This is the sole critical path to
   Run 001. *Done 2026-07-11 — see
   [`decisions/2026-07-11-run-001-approvals.md`](decisions/2026-07-11-run-001-approvals.md).*
3. `G3` **Next agent:** read this file first, then the linked decision record and
   current observation. Execute only items whose owner and prerequisite permit
   it; never infer approval for a Mark-only item.
4. `G4` **Mark — review Run 002 (D8):** assess `SEG-002` research, the candidate-account universe, `GH-004`, and whether local work added enough value to retry. [Run 002 blackboard](runs/run-002/blackboard.md), [accounts](growth/ACCOUNT-INTELLIGENCE.md).
5. `G5` **Next execution gate:** create a separately approved public-research run for the highest-priority `CDP-001` accounts, or defer it. A manual discovery conversation remains a later Mark-only decision. [CDP-001](growth/CDP-001.md), [accounts](growth/ACCOUNT-INTELLIGENCE.md)
6. `G6` **Mark — review RUN-006:** decide whether the one-degree map warrants an atomic `SEG-003` comparison hypothesis, a focused channel/association study, or a pause. [RUN-006 report](runs/run-006/outputs/RUN-006-REPORT.md), [map](runs/run-006/outputs/one-degree-map.csv)
