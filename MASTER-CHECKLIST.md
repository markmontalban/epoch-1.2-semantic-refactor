# MindfulText Epoch 1 — Master Checklist

Checklist ID: `E1`

Last updated: 2026-07-11 00:56:51 PDT — edited by: Claude Dispatch — task: Execute master checklist, Run 001

**Last reconciled:** 2026-07-11

This is the execution tracker for Epoch 1. Its reference sources are:

1. [`../epoch-1-next-steps-plan.md`](../epoch-1-next-steps-plan.md) — scope and full dependency plan.
2. [`../epoch-1-decision-record-2026-07-10.md`](../epoch-1-decision-record-2026-07-10.md) — dated decisions; it wins on conflicts.
3. [`current-state.md`](current-state.md) and dated observation records — current evidence.

Status labels: **Done** = evidenced; **In progress** = active, not yet proven;
**Mark only** = requires Mark’s judgment or explicit approval; **Deferred** = not
eligible before its named gate. No item authorizes outbound activity, provider
spend, or a model/core change without the approval stated in the charter.
Use the stable `E1-*` identifiers below when assigning or reporting work.

## Guardrails — always in force

- [x] `E1-G01` **$0 external-model cap and $0 sandbox cap** — DR-8. Do not raise or
  work around either cap without a new dated Mark decision. *2026-07-11 note
  (DR-16): Mark holds a personal manual-testing spend exception — Mark-executed
  only; it raises neither agent-side cap.*
- [x] `E1-G02` **No outbound automation or unapproved manual outreach.** Every outbound
  action needs Mark’s approval at the point of execution.
- [x] `E1-G03` **Data boundary:** unassigned material is `local-only`; Run 001 may use
  only `external-okay` material or a Mark-approved `redacted-external`
  derivative.
- [x] `E1-G04` **Hermes is unavailable for Epoch 1 work until C4 is completed by Mark.**
- [x] `E1-G05` **Dashboard scope is stability-only through Run 003.**

## Phase 0 — reconcile platform and governance

- [x] `E1-P001` **D1 gate rule:** per-surface behavior is live in dashboard commit
  `c7f0b32`: external work blocks on either BLOCK; internal review retains
  lone-BLOCK-to-WARN corroboration. Run records retain the caller-declared
  `surface` for audit.
  - [x] `E1-P001A` **Caveat documented for every reviewer:** `surface` is caller-declared; a
    mislabeled internal call can soften a lone BLOCK to WARN. Treat that label
    as a reviewable classification claim, not a trust boundary.
- [x] `E1-P002` **D2/D3 configuration:** dashboard commit `72712e2` sets budget to 116
  GB and disables `babysitter` and `window_watch` for Epoch 1.
- [x] `E1-P003` **D4 documentation:** root `AGENTS.md` now names the live dashboard
  path, the provisional `gpt-oss:20b` core, `ornith:35b-q8`, disabled watcher
  routes, residency configuration, and the per-surface gate rule.
- [x] `E1-P004` **Log observability:** dashboard restart at `2026-07-10T14:38:25.508Z`
  enables ISO-8601 log prefixes (commit `c7f0b32`).
- [x] `E1-P005` **Canonical charter and dated decisions:** charter v1.1 and DR-1…DR-12
  are present; superseded planning docs remain marked as such.

### Charter v1.1 amendment ledger

- [x] `E1-L01` Authority hierarchy: `AGENTS.md` governs platform/safety; the canonical
  charter governs lab roles/workflows only (charter §14.1).
- [x] `E1-L02` Data-class/default and local-redaction rules are adopted (charter §14.2).
- [x] `E1-L03` Unknown/unverified provider surfaces are external; named provider,
  per-run cap, and Mark approval are required (charter §14.3; DR-8).
- [x] `E1-L04` The autonomous coding arm is parked until a level-2/3 signal plus dated
  Mark decision (charter §14.4).
- [x] `E1-L05` `LAB-SETUP` and `MT-BOOTSTRAP` have their required bounded-card fields
  (charter §14.5; Run 001 card is the current `MT-BOOTSTRAP` artifact).
- [x] `E1-L06` Run taxonomy (`lab-validation` / `market-test`) and required measures
  are adopted (charter §14.6).
- [x] `E1-L07` Hermes sequence and C4 prerequisite are adopted (charter §14.7).
- [x] `E1-L08` Social intelligence is constrained to lab input, not a parallel program
  (charter §14.8).
- [x] `E1-L09` Per-run privacy-safe trace requirement is adopted (charter §14.9).
- [x] `E1-L10` Dashboard remains stability-only and worktree triage is post-Run-003
  (charter §14.10).
- [x] `E1-L11` Charter version/commit requirement is adopted (charter §14.11).
- [x] `E1-L12` Claude-review / Mark-approve-or-waive model and `datasets/` boundary are
  adopted (charter §14.12).
- [x] `E1-L13` Path-scoring rubric v0.1 is drafted at
  [`02-revenue-signal-scorecard.md`](02-revenue-signal-scorecard.md) (charter
  §14.13); Mark approval remains a Run 001 gate.
- [x] `E1-L14` Pi remains optional-later, not the Epoch 1 control plane (charter §14.14;
  DR-7).
- [x] `E1-L15` Targets are re-dated: Aug 14 packet / Sep 4 signal (charter §3; DR-6).

## Phase 1 — prepare Run 001

### 1. Lab and data store

- [x] `E1-DS01` LAB-SETUP scaffold, templates, workflow, privacy-safe trace schema,
  utilities, `.gitignore`, and local Git history exist (commits `fa16547`,
  `c50dc5d`).
- [x] `E1-DS02` **Mark chose the final non-iCloud lab location:**
  `~/AI-Studio/Projects/mindfultext-epoch-1/` (DR-9), confirmed 2026-07-10.
  The repository remains staged until Mark separately authorizes the move and
  no session has the lab open.
- [ ] `E1-DS03` **Mark only — choose a separate local-only store** outside any tracked
  repository for raw sensitive material. Never initialize it as Git. Candidate
  under consideration: `/Volumes/Seagate Desktop Drive`; before selection,
  specify a dedicated encrypted folder and the no-fallback behavior if the
  volume is unavailable.
- [x] `E1-DS04` `datasets/` is ignored; no raw evidence is present in this repo.
- [x] `E1-DS05` §6.3 new-repo waiver and non-iCloud rationale are recorded in DR-9;
  only the local-only-store decision and separate move authorization remain.

### 2. Evidence inventory and external-routing approval — critical path

- [x] `E1-EV01` **Mark only — classify or strike every candidate in
  [`01-product-evidence.md`](01-product-evidence.md):** validation notes,
  pilot feedback (including third-party consent), ICP one-liner, and product
  positioning. *Approved by Mark 2026-07-11 — all four retained (DR-13).*
- [x] `E1-EV02` **Mark only — complete rights/consent, data class, permitted use, and
  status** for each retained asset. *Approved by Mark 2026-07-11 (blanket;
  DR-13) — spot-check each actual asset at import, esp. asset 2's third-party
  content.*
- [x] `E1-EV03` **Mark only — add only cleared summaries/provenance to Approved
  evidence; put founder assumptions in their separate section.** *Approved by
  Mark 2026-07-11 (DR-13); populates when assets are physically imported.*
- [x] `E1-EV04` **Mark only — resolve the Run 001 collision:** set its input set to
  `external-okay`, or approve a `redacted-external` derivative. If either is
  unavailable, Run 001 must not execute. *Resolved by Mark 2026-07-11: input
  set classed `external-okay` (DR-13).*

### 3. Run 001 approval — critical path

- [x] `E1-R1A01` Draft card validates: `python3 tools/validate-run-card.py
  runs/run-001/run-card.md` reports “valid — awaiting Mark approval.”
- [x] `E1-R1A02` **Mark only — review/amend rubric v0.1** in
  [`02-revenue-signal-scorecard.md`](02-revenue-signal-scorecard.md), including
  the five 0–2 dimensions, disconfirming-evidence subtraction, 30-day
  staleness rule, and direct-action WTP=2 rule. *Approved by Mark 2026-07-11,
  unamended (DR-14).*
- [x] `E1-R1A03` **Mark only — review/amend Team Config v0.1:** Claude-only external
  surface, no `local-only` input, and no silent fallback. *Approved by Mark
  2026-07-11 **as amended**: no Claude default — Mark-named combo (Codex,
  Claude, Hermes, etc.). Now Team Config v0.1.1; charter §14.16 (v1.2)
  records the reconciliation with §7's Claude-only wording (DR-15). Hermes
  stays C4-gated (E1-G04). Open: Mark names the actual provider set per run.*
- [x] `E1-R1A04` **Mark only — complete and approve Run 001 card:** set `data_class`,
  confirm the ≤4-hour / $0 limits, stop conditions, measures, and change
  `approval` to `APPROVED by Mark YYYY-MM-DD`. *Approved by Mark 2026-07-11
  (DR-16), with a Mark-held manual-testing spend exception; agent-side caps
  unchanged $0/$0.*
- [x] `E1-R1A05` **After approval — commit the Mark-approval edits and re-run the card
  validator.** This makes Run 001 eligible; it does not execute it. *Done
  2026-07-11 by Claude Dispatch — validator: valid and approved.*

### 4. Platform stability window — gates Run 002, not Run 001

- [x] `E1-ST01` Live D2/D3 changes and timestamp logging are deployed.
- [ ] `E1-ST02` **Failed — 24-hour observation baseline** from log line **1311** /
  `2026-07-10T14:38:25.508Z` recorded two core re-pins before the window
  completed (`2026-07-10T17:25:26.063Z` and `2026-07-10T18:40:26.171Z`).
  Evidence and exact command:
  [`../epoch-1-stability-observation-2026-07-10.md`](../epoch-1-stability-observation-2026-07-10.md).
- [ ] `E1-ST03` **Mark only — direct the D2 response:** authorize either a D2 iteration
  (documented options: budget 112 or core swap) or a deferral. Do not change
  settings or core residency without that direction; Run 002 is blocked.
- [ ] `E1-ST04` After a Mark-authorized change, restart the 24-hour observation and
  record health, post-baseline event counts, and `dispatcher.core_degraded`.

### 5. C4 — blocks Hermes/compaction, not Run 001

- [ ] `E1-C401` **Mark only — inspect `~/.hermes/config.yaml`** to verify the provider
  boundary. Agents must not read dot-directory configuration.
- [ ] `E1-C402` **Mark only — identify the router `telegram` consumer** and write a
  dated decision note. Inbound Telegram remains untrusted and cannot create
  task cards.

## Phase 2 — Runs 001–002

- [ ] `E1-P201` **Run 001 — execute only after approval:** authorized Claude session
  creates 3–5 path cards, a ranked scorecard, evidence-gap list, and a
  reference/hash-only `trace.jsonl`; stop on data-class ambiguity, five cards,
  exhausted evidence, or four hours.
- [ ] `E1-P202` Run 001 records the charter version and commit in its card at execution.
- [ ] `E1-P203` **Mark only — review Run 001 evidence quality and decision usefulness.**
- [ ] `E1-P204` **Mark only — review Run 001 latency/cost against the $0 and ≤4-hour
  limits.**
- [ ] `E1-P205` **Mark only — adjust/approve the Run 002 card** based on those findings.
- [ ] `E1-P206` **Run 002 — pre-run snapshot:** health, models, memory, queue, and
  re-pin state; any core eviction/503 during the run marks comparison
  **inconclusive**.
- [ ] `E1-P207` **Run 002 — execute approved local-first comparison** and write its
  reference/hash-only `trace.jsonl`.
- [ ] `E1-P208` **Mark only — review Run 002.**
- [ ] `E1-P209` **P2 amendments check before Run 003:** benchmark validity / memory bias;
  dashboard stayed stability-only; raw `local-only` material remained outside
  the repo; Claude reviewed Codex changes and Mark approved/waived them.

## Phase 3 — Run 003 and decision fork (by 2026-08-14)

- [ ] `E1-P301` Run 003 produces a human-reviewed signal-test packet, with the same
  pre-run snapshot / inconclusive-if-unstable rule and privacy-safe trace.
- [ ] `E1-P302` Define whether its signal test is level 1 (reach) or level 2 (buyer
  intent) before executing; Mark reviews the resulting packet.
- [ ] `E1-P303` **Mark only — decide post-Run-003:** Hermes scope (bounded operator or
  manual), dashboard scope (expand or freeze), and actual worktree triage.
- [ ] `E1-P304` **Mark only — decide whether evidence supports a manual market test.**
- [ ] `E1-P305` If supported, define the minimum ICP-qualified level-2 conversation and
  level-3 commitment, then draft the manual-outreach queue step.
- [ ] `E1-P306` **Mark only — approve or defer that market-test phase.**
- [ ] `E1-P307` **Mark only — confirm or amend** the Aug 14 packet target and Sep 4
  signal target; a miss triggers review/re-scope, never automation expansion.

## Phase 4 — manual market test and closeout

- [ ] `E1-P401` **Mark only — approve or defer a manual market-test phase.** No automated
  campaign is permitted.
- [ ] `E1-P402` If approved, conduct only Mark-approved manual outbound actions and
  record level-2 buyer-intent / level-3 commitment signals; no automated
  campaign is permitted.
- [ ] `E1-P403` **Epoch 1 retro:** usable evidence from Runs 001–003 / market test;
  platform stability; D1 gate-rule behavior; parked coding-arm need; and spend
  cap sufficiency or leakage.
- [ ] `E1-P404` **Epoch 2 planning:** draft/defer the charter; carry forward data class,
  signal ladder, trace privacy, and review model; reassess Hermes/dashboard/
  coding-arm authority; obtain Mark’s scope approval or deferral.

## Active next actions and handoff

1. `E1-N01` **Mark:** direct the failed stability-baseline response (D2 iteration or
   deferral); the `gpt-oss:20b` keep/swap decision remains Mark-only.
2. `E1-N02` **Mark:** class the four evidence candidates, then approve the rubric, team
   config, and Run 001 card in one sitting. This is the sole critical path to
   Run 001. *Done 2026-07-11 — see
   [`decisions/2026-07-11-run-001-approvals.md`](decisions/2026-07-11-run-001-approvals.md).*
3. `E1-N03` **Next agent:** read this file first, then the linked decision record and
   current observation. Execute only items whose owner and prerequisite permit
   it; never infer approval for a Mark-only item.
4. `E1-N04` **Mark — before Run 001 executes:** (a) import the actual evidence
   assets into `01-product-evidence.md` and spot-check each against
   `external-okay`; (b) name Run 001's actual provider set (combo per team
   config v0.1.1; Hermes excluded until C4); (c) confirm each participating
   provider runs on subscription/free tier under the $0 agent-side cap
   (DR-15/DR-16). *Verified NOT yet done on disk 2026-07-11 00:56 PDT (Claude
   Dispatch): inventory rows still "approved — awaiting import", Approved
   evidence section empty, no concrete provider set named in the run card,
   decisions, or team config. Remains open and Mark-only; Run 001 execution
   stays blocked. Unblock packet for Mark:
   [`runs/run-001/UNBLOCK-PACKET.md`](runs/run-001/UNBLOCK-PACKET.md).*
