# Epoch 1 — Decision Record — 2026-07-11 — Run 001 approvals

Last updated: 2026-07-12 22:25:32 PDT — edited by: Codex

**decision_id:** DR-13 … DR-16 (continues the series in `2026-07-10-epoch-1-foundation.md`)
**date:** 2026-07-11
**decider:** Mark
**recorded by:** Claude Dispatch, per Mark's 2026-07-11 dispatch message, quoted verbatim:

> "E1-EV01–E1-EV04: approved. E1-R1A02 approved. E1-R1A03 - amend to not make
> Claude default. I will use a combo of codex, Claude, Hermes, etc. E1-R1A04 -
> I may use some budget to test things here manually. Also all approved
> otherwise."

**conduct:** Markdown edits in `Docs/` only; no live system, config, router, model, provider, or outbound action. The Model Ops Dispatcher (localhost:7070) is unreachable from this sandboxed session (same limitation as [[decisions/2026-07-10-epoch-1-foundation#dr-2--d2-residency-budget|DR-2]]), so no dispatcher card could be claimed; reconcile the card ledger on-Mac if one was open for this work.

---

## DR-13 — E1-EV01…E1-EV04: evidence candidates approved

**decision:** All four candidates in `../growth/HYPOTHESES.md` (validation notes, pilot feedback, ICP one-liner, positioning docs) are retained — none struck. Rights/consent affirmed by Mark, including the asset-2 third-party consent check. The Run 001 input set is classed **`external-okay`** (E1-EV04's first option), resolving the [[decisions/2026-07-10-epoch-1-foundation#dr-12--evidence-the-run-001-data-class|DR-12]] collision.
**caveats recorded by the scribe:** Mark's approval was blanket, not per-asset. No asset has been physically imported yet — the inventory rows are still placeholders. At import, Mark should spot-check that each actual asset (especially asset 2's third-party content) matches the `external-okay` class before it enters a run. Anything that doesn't match stops the run (data-class-ambiguity stop condition).
**affected_docs:** `../growth/HYPOTHESES.md`, `../runs/run-001/RUN-001-Growth-Path-Ranking.md` (`data_class`).

## DR-14 — E1-R1A02: rubric v0.1 approved

**decision:** Path-scoring rubric v0.1 in `../growth/SCORECARD.md` is approved unamended — five 0–2 dimensions, disconfirming-evidence subtraction, 30-day staleness rule, direct-action WTP=2 rule.
**affected_docs:** `../growth/SCORECARD.md`.

## DR-15 — E1-R1A03: team config approved AS AMENDED — no Claude default

**decision:** Team Config is approved with Mark's amendment: **Claude is not the default provider.** The synthesis/execution role is a combination Mark chooses at execution time — Codex, Claude, Hermes, etc. Team Config **v0.1.1** (`../team-configs/v0.1.1.md`) supersedes v0.1 for Run 001. Unchanged: external-surface data rules (`external-okay` or Mark-approved `redacted-external` only; never `local-only`), no silent fallback, Mark holds all approvals.
**reconciliation (charter §7 / run card said Claude-only):**

- Charter §7 Run 001 ("Claude synthesizes…") and the run card's Claude-only `allowed_tools_providers` line conflicted with this amendment. Per the charter's own §14 rule ("where an amendment conflicts with older body text, the amendment governs"), the amendment is recorded as charter §14.16 (charter bumped to v1.2) rather than silently rewriting §7. The run card and evidence doc are updated to point at v0.1.1.
- **Still Hermes-gated:** E1-G04 / charter §14.7 / [[decisions/2026-07-10-epoch-1-foundation#dr-11--c4-verifications-blocking-for-any-hermes-use|DR-11]] stand — Hermes may not be used in any run until Mark completes C4. Naming Hermes in the combo does not unlock it.
- **All named providers are external surfaces** (Codex/OpenAI, Claude/Anthropic, Hermes' default provider). The data-class constraint on Run 001 input is therefore unchanged by the amendment.

**Mark must still re-decide (forced by this amendment):**

1. **Name the actual provider set for Run 001 at execution** — "combo of codex, Claude, Hermes, etc." is a policy, not a run manifest. The run card requires named providers (charter §14.3); Hermes is excluded until C4.
2. **Confirm $0 compatibility per provider:** [[decisions/2026-07-10-epoch-1-foundation#dr-8--spending-caps|DR-8]]'s note covered Mark's Claude subscription. Confirm Codex (and any "etc." provider) also runs on subscription/free tier, or raise the cap by dated record before it participates.
3. **Optional:** whether charter §7's body text gets rewritten at the next charter revision (the §14.16 amendment already governs).

**affected_docs:** `../team-configs/v0.1.1.md` (new), `../team-configs/v0.1.md` (superseded), `../runs/run-001/RUN-001-Growth-Path-Ranking.md`, `../growth/HYPOTHESES.md`, `../CHARTER.md` (v1.2, §14.16), `../MASTER-CHECKLIST.md`.

## DR-16 — E1-R1A04: Run 001 card approved; Mark-held manual-testing budget exception

**decision:** The Run 001 card is completed and approved — `data_class: external-okay` (DR-13), ≤4-hour session, stop conditions and measures confirmed, `approval: APPROVED by Mark 2026-07-11`.
**budget caveat (Mark-held exception):** Mark may personally spend for manual testing in this area, within the existing OpenRouter account limits. This is a **Mark-held, Mark-executed exception only**. Agent-side caps are unchanged: **$0 external / $0 sandbox, fail-closed ([[decisions/2026-07-10-epoch-1-foundation#dr-8--spending-caps|DR-8]])**. No agent may spend, authorize spend, or treat Mark's personal spending as raising either cap; any agent-side spend still requires a new dated Mark decision.
**affected_docs:** `../runs/run-001/RUN-001-Growth-Path-Ranking.md`, `../MASTER-CHECKLIST.md` (note under E1-G01).

---

## Scope of "Also all approved otherwise"

Interpreted as covering the sub-parts of the items Mark listed (E1-EV01–04, E1-R1A02–04) as written, plus the consequent scribe step E1-R1A05. It was **not** interpreted as approving any other open Mark-only item — E1-ST03 (D2 direction), E1-DS03 (local-only store), E1-C401/402 (C4), the lab-folder move authorization ([[decisions/2026-07-10-epoch-1-foundation#dr-9--lab-location|DR-9]]), and Run 001 *execution scheduling* all remain open. Mark: correct this record if the intent was broader.

## Effect on Run 001

Run 001 is **approved and eligible** (E1-R1A05 satisfied: validator run post-edit, edits committed). It is **not yet executable** until (a) Mark imports the actual evidence assets into `growth/HYPOTHESES.md` and spot-checks their class, and (b) Mark names the execution provider set (DR-15 item 1).
