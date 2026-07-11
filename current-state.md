# Current State — Compaction

Last updated: 2026-07-11 00:56:51 PDT — edited by: Claude Dispatch — task: Execute master checklist, Run 001

**master tracker:** [`MASTER-CHECKLIST.md`](MASTER-CHECKLIST.md). Read it
before acting; it reconciles the plan, decision record, live dashboard changes,
and owner/prerequisite boundaries.

**what changed:** Mark issued the Run 001 approval sitting on 2026-07-11
([`decisions/2026-07-11-run-001-approvals.md`](decisions/2026-07-11-run-001-approvals.md),
DR-13…DR-16): evidence candidates E1-EV01–04 approved and classed
`external-okay`; rubric v0.1 approved unamended; Team Config approved **as
amended** — no Claude default, Mark-named external combo (Codex, Claude,
Hermes, etc.) → v0.1.1, charter bumped to v1.2 (§14.16); Run 001 card
APPROVED by Mark 2026-07-11 (validator: valid and approved). A Mark-held
personal manual-testing spend exception is recorded (DR-16); agent-side caps
stay $0/$0 fail-closed.

**verification 2026-07-11 00:56 PDT:** a dispatch reported E1-N04 (evidence
import + provider-set naming) as done; an on-disk check found it is **not** —
`01-product-evidence.md` rows still read "approved — awaiting import" with an
empty Approved-evidence section, and no concrete provider set is named in the
run card, decisions, or team config. Run 001 execution remains blocked. A
fill-in unblock packet for Mark is at
[`runs/run-001/UNBLOCK-PACKET.md`](runs/run-001/UNBLOCK-PACKET.md).

**what is active:** Run 001 is approved and eligible but not yet executable —
it awaits Mark's physical evidence import (with class spot-check) and Mark
naming the actual provider set (Hermes excluded until C4). The failed
stability baseline still blocks Run 002 pending Mark's D2 direction. No run
execution, Hermes action, agent spend, or outbound activity is authorized.

**next approved action:** Mark's E1-N04 items (import + provider set), or
Mark's D2 direction. Lab-move authorization, local-only store selection, and
C4 remain Mark-only and open.

**links:** `MASTER-CHECKLIST.md`; `00-charter.md`; `../epoch-1-decision-record-2026-07-10.md`; `../epoch-1-next-steps-plan.md`; `runs/run-001/run-card.md`; `01-product-evidence.md`.
