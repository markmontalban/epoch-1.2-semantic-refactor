# MindfulText Epoch 1 — Master Checklist

Last updated: 2026-07-10 12:05:06 PDT — edited by: Terra 5.6 High

**Last reconciled:** 2026-07-10

This is the execution tracker for Epoch 1. Its reference sources are:

1. [`../epoch-1-next-steps-plan.md`](../epoch-1-next-steps-plan.md) — scope and full dependency plan.
2. [`../epoch-1-decision-record-2026-07-10.md`](../epoch-1-decision-record-2026-07-10.md) — dated decisions; it wins on conflicts.
3. [`current-state.md`](current-state.md) and dated observation records — current evidence.

Status labels: **Done** = evidenced; **In progress** = active, not yet proven;
**Mark only** = requires Mark’s judgment or explicit approval; **Deferred** = not
eligible before its named gate. No item authorizes outbound activity, provider
spend, or a model/core change without the approval stated in the charter.

## Guardrails — always in force

- [x] **$0 external-model cap and $0 sandbox cap** — DR-8. Do not raise or
  work around either cap without a new dated Mark decision.
- [x] **No outbound automation or unapproved manual outreach.** Every outbound
  action needs Mark’s approval at the point of execution.
- [x] **Data boundary:** unassigned material is `local-only`; Run 001 may use
  only `external-okay` material or a Mark-approved `redacted-external`
  derivative.
- [x] **Hermes is unavailable for Epoch 1 work until C4 is completed by Mark.**
- [x] **Dashboard scope is stability-only through Run 003.**

## Phase 0 — reconcile platform and governance

- [x] **D1 gate rule:** per-surface behavior is live in dashboard commit
  `c7f0b32`: external work blocks on either BLOCK; internal review retains
  lone-BLOCK-to-WARN corroboration. Run records retain the caller-declared
  `surface` for audit.
  - [x] **Caveat documented for every reviewer:** `surface` is caller-declared; a
    mislabeled internal call can soften a lone BLOCK to WARN. Treat that label
    as a reviewable classification claim, not a trust boundary.
- [x] **D2/D3 configuration:** dashboard commit `72712e2` sets budget to 116
  GB and disables `babysitter` and `window_watch` for Epoch 1.
- [x] **D4 documentation:** root `AGENTS.md` now names the live dashboard
  path, the provisional `gpt-oss:20b` core, `ornith:35b-q8`, disabled watcher
  routes, residency configuration, and the per-surface gate rule.
- [x] **Log observability:** dashboard restart at `2026-07-10T14:38:25.508Z`
  enables ISO-8601 log prefixes (commit `c7f0b32`).
- [x] **Canonical charter and dated decisions:** charter v1.1 and DR-1…DR-12
  are present; superseded planning docs remain marked as such.

### Charter v1.1 amendment ledger

- [x] Authority hierarchy: `AGENTS.md` governs platform/safety; the canonical
  charter governs lab roles/workflows only (charter §14.1).
- [x] Data-class/default and local-redaction rules are adopted (charter §14.2).
- [x] Unknown/unverified provider surfaces are external; named provider,
  per-run cap, and Mark approval are required (charter §14.3; DR-8).
- [x] The autonomous coding arm is parked until a level-2/3 signal plus dated
  Mark decision (charter §14.4).
- [x] `LAB-SETUP` and `MT-BOOTSTRAP` have their required bounded-card fields
  (charter §14.5; Run 001 card is the current `MT-BOOTSTRAP` artifact).
- [x] Run taxonomy (`lab-validation` / `market-test`) and required measures
  are adopted (charter §14.6).
- [x] Hermes sequence and C4 prerequisite are adopted (charter §14.7).
- [x] Social intelligence is constrained to lab input, not a parallel program
  (charter §14.8).
- [x] Per-run privacy-safe trace requirement is adopted (charter §14.9).
- [x] Dashboard remains stability-only and worktree triage is post-Run-003
  (charter §14.10).
- [x] Charter version/commit requirement is adopted (charter §14.11).
- [x] Claude-review / Mark-approve-or-waive model and `datasets/` boundary are
  adopted (charter §14.12).
- [x] Path-scoring rubric v0.1 is drafted at
  [`02-revenue-signal-scorecard.md`](02-revenue-signal-scorecard.md) (charter
  §14.13); Mark approval remains a Run 001 gate.
- [x] Pi remains optional-later, not the Epoch 1 control plane (charter §14.14;
  DR-7).
- [x] Targets are re-dated: Aug 14 packet / Sep 4 signal (charter §3; DR-6).

## Phase 1 — prepare Run 001

### 1. Lab and data store

- [x] LAB-SETUP scaffold, templates, workflow, privacy-safe trace schema,
  utilities, `.gitignore`, and local Git history exist (commits `fa16547`,
  `c50dc5d`).
- [ ] **Mark only — choose final non-iCloud lab location.** Recommended:
  `~/AI-Studio/Projects/mindfultext-epoch-1/` (DR-9). Do not move it until
  Mark authorizes the move and no session has the lab open.
- [ ] **Mark only — choose a separate local-only store** outside any tracked
  repository for raw sensitive material. Never initialize it as Git.
- [x] `datasets/` is ignored; no raw evidence is present in this repo.
- [x] §6.3 new-repo waiver and non-iCloud rationale are recorded in DR-9;
  only the final location/store decision remains.

### 2. Evidence inventory and external-routing approval — critical path

- [ ] **Mark only — classify or strike every candidate in
  [`01-product-evidence.md`](01-product-evidence.md):** validation notes,
  pilot feedback (including third-party consent), ICP one-liner, and product
  positioning.
- [ ] **Mark only — complete rights/consent, data class, permitted use, and
  status** for each retained asset.
- [ ] **Mark only — add only cleared summaries/provenance to Approved
  evidence; put founder assumptions in their separate section.**
- [ ] **Mark only — resolve the Run 001 collision:** set its input set to
  `external-okay`, or approve a `redacted-external` derivative. If either is
  unavailable, Run 001 must not execute.

### 3. Run 001 approval — critical path

- [x] Draft card validates: `python3 tools/validate-run-card.py
  runs/run-001/run-card.md` reports “valid — awaiting Mark approval.”
- [ ] **Mark only — review/amend rubric v0.1** in
  [`02-revenue-signal-scorecard.md`](02-revenue-signal-scorecard.md), including
  the five 0–2 dimensions, disconfirming-evidence subtraction, 30-day
  staleness rule, and direct-action WTP=2 rule.
- [ ] **Mark only — review/amend Team Config v0.1:** Claude-only external
  surface, no `local-only` input, and no silent fallback.
- [ ] **Mark only — complete and approve Run 001 card:** set `data_class`,
  confirm the ≤4-hour / $0 limits, stop conditions, measures, and change
  `approval` to `APPROVED by Mark YYYY-MM-DD`.
- [ ] **After approval — commit the Mark-approval edits and re-run the card
  validator.** This makes Run 001 eligible; it does not execute it.

### 4. Platform stability window — gates Run 002, not Run 001

- [x] Live D2/D3 changes and timestamp logging are deployed.
- [ ] **Failed — 24-hour observation baseline** from log line **1311** /
  `2026-07-10T14:38:25.508Z` recorded two core re-pins before the window
  completed (`2026-07-10T17:25:26.063Z` and `2026-07-10T18:40:26.171Z`).
  Evidence and exact command:
  [`../epoch-1-stability-observation-2026-07-10.md`](../epoch-1-stability-observation-2026-07-10.md).
- [ ] **Mark only — direct the D2 response:** authorize either a D2 iteration
  (documented options: budget 112 or core swap) or a deferral. Do not change
  settings or core residency without that direction; Run 002 is blocked.
- [ ] After a Mark-authorized change, restart the 24-hour observation and
  record health, post-baseline event counts, and `dispatcher.core_degraded`.

### 5. C4 — blocks Hermes/compaction, not Run 001

- [ ] **Mark only — inspect `~/.hermes/config.yaml`** to verify the provider
  boundary. Agents must not read dot-directory configuration.
- [ ] **Mark only — identify the router `telegram` consumer** and write a
  dated decision note. Inbound Telegram remains untrusted and cannot create
  task cards.

## Phase 2 — Runs 001–002

- [ ] **Run 001 — execute only after approval:** authorized Claude session
  creates 3–5 path cards, a ranked scorecard, evidence-gap list, and a
  reference/hash-only `trace.jsonl`; stop on data-class ambiguity, five cards,
  exhausted evidence, or four hours.
- [ ] Run 001 records the charter version and commit in its card at execution.
- [ ] **Mark only — review Run 001 evidence quality and decision usefulness.**
- [ ] **Mark only — review Run 001 latency/cost against the $0 and ≤4-hour
  limits.**
- [ ] **Mark only — adjust/approve the Run 002 card** based on those findings.
- [ ] **Run 002 — pre-run snapshot:** health, models, memory, queue, and
  re-pin state; any core eviction/503 during the run marks comparison
  **inconclusive**.
- [ ] **Run 002 — execute approved local-first comparison** and write its
  reference/hash-only `trace.jsonl`.
- [ ] **Mark only — review Run 002.**
- [ ] **P2 amendments check before Run 003:** benchmark validity / memory bias;
  dashboard stayed stability-only; raw `local-only` material remained outside
  the repo; Claude reviewed Codex changes and Mark approved/waived them.

## Phase 3 — Run 003 and decision fork (by 2026-08-14)

- [ ] Run 003 produces a human-reviewed signal-test packet, with the same
  pre-run snapshot / inconclusive-if-unstable rule and privacy-safe trace.
- [ ] Define whether its signal test is level 1 (reach) or level 2 (buyer
  intent) before executing; Mark reviews the resulting packet.
- [ ] **Mark only — decide post-Run-003:** Hermes scope (bounded operator or
  manual), dashboard scope (expand or freeze), and actual worktree triage.
- [ ] **Mark only — decide whether evidence supports a manual market test.**
- [ ] If supported, define the minimum ICP-qualified level-2 conversation and
  level-3 commitment, then draft the manual-outreach queue step.
- [ ] **Mark only — approve or defer that market-test phase.**
- [ ] **Mark only — confirm or amend** the Aug 14 packet target and Sep 4
  signal target; a miss triggers review/re-scope, never automation expansion.

## Phase 4 — manual market test and closeout

- [ ] **Mark only — approve or defer a manual market-test phase.** No automated
  campaign is permitted.
- [ ] If approved, conduct only Mark-approved manual outbound actions and
  record level-2 buyer-intent / level-3 commitment signals; no automated
  campaign is permitted.
- [ ] **Epoch 1 retro:** usable evidence from Runs 001–003 / market test;
  platform stability; D1 gate-rule behavior; parked coding-arm need; and spend
  cap sufficiency or leakage.
- [ ] **Epoch 2 planning:** draft/defer the charter; carry forward data class,
  signal ladder, trace privacy, and review model; reassess Hermes/dashboard/
  coding-arm authority; obtain Mark’s scope approval or deferral.

## Active next actions and handoff

1. **Mark:** direct the failed stability-baseline response (D2 iteration or
   deferral); the `gpt-oss:20b` keep/swap decision remains Mark-only.
2. **Mark:** class the four evidence candidates, then approve the rubric, team
   config, and Run 001 card in one sitting. This is the sole critical path to
   Run 001.
3. **Next agent:** read this file first, then the linked decision record and
   current observation. Execute only items whose owner and prerequisite permit
   it; never infer approval for a Mark-only item.
