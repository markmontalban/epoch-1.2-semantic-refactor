# MindfulText Epoch 1 — Decision Register

Last updated: 2026-07-14 06:46:58 PDT — edited by: Codex

This is the canonical index for finding Epoch 1 decisions. It is not an
approval authority: the linked dated decision-record files retain the exact
decision text, status, caveats, and approval history.

## How to use this register

Look up the durable `DR-*` identifier here, then open its linked source record.
Use the Master Checklist mapping to find the current execution item; its status
is authoritative even when the decision record describes an earlier state.

## Register

| Decision | Date / recorded by | Short decision | Source-record status | Current checklist mapping | Historical alias / relationships |
| --- | --- | --- | --- | --- | --- |
| [DR-1](2026-07-10-epoch-1-foundation.md#dr-1--d1-gate-rule--option-c-per-surface) | 2026-07-10 / Claude (Cowork) | Per-surface dual-gate rule. | Recorded; pending on-Mac application in source. | `B1`, `B1a` — Done. | Implements D1; informs `DR-4`. |
| [DR-2](2026-07-10-epoch-1-foundation.md#dr-2--d2-residency--budget) | 2026-07-10 / Claude (Cowork) | Provisional core and 116 GB budget. | Recorded; pending on-Mac application in source. | `B2` — Done; `C4b` failed; `C4c`–`C4d`, `G1` open. | Related to `DR-3`. |
| [DR-3](2026-07-10-epoch-1-foundation.md#dr-3--d3-watcher-jobs) | 2026-07-10 / Claude (Cowork) | Disable non-critical watcher jobs for Epoch 1. | Recorded; pending on-Mac application in source. | `B2` — Done. | Related to `DR-2`; re-enable only post-Run 003. |
| [DR-4](2026-07-10-epoch-1-foundation.md#dr-4--d4-agentsmd-refresh) | 2026-07-10 / Claude (Cowork) | Refresh operating instructions after D1–D3 changes. | Recorded; blocked outside the original Docs mount. | `B3`, `B4` — Done. | Implements `DR-1`–`DR-3`. |
| [DR-5](2026-07-10-epoch-1-foundation.md#dr-5--charter-amendments-adopted-v11) | 2026-07-10 / Claude (Cowork) | Charter amendments and planning cleanup. | Recorded and applied, docs only. | `B5`, `B6a`–`B6m` — Done. | Amended by `DR-15` on provider policy. |
| [DR-6](2026-07-10-epoch-1-foundation.md#dr-6--targets-re-dated) | 2026-07-10 / Claude (Cowork) | Re-date Epoch 1 targets. | Recorded; amendable by dated record. | `B6o` — Done; `E7` open. | Related to `DR-5`. |
| [DR-7](2026-07-10-epoch-1-foundation.md#dr-7--pis-epoch-1-role) | 2026-07-10 / Claude (Cowork) | Pi remains optional-later. | Recorded. | `B6n` — Done. | No current blocker. |
| [DR-8](2026-07-10-epoch-1-foundation.md#dr-8--spending-caps) | 2026-07-10 / Claude (Cowork) | $0 external and sandbox caps, fail-closed. | Recorded. | `A1`, `B6c` — Done; `G4` open. | Qualified by Mark-only exception in `DR-16`. |
| [DR-9](2026-07-10-epoch-1-foundation.md#dr-9--lab-location) | 2026-07-10 / Claude (Cowork) | Final lab destination, separate store, and move conditions. | Final location recorded; store and move authorization need Mark. | `C1b` — Done; `C1c`, `C1e` open. | Related to `DR-10`. |
| [DR-10](2026-07-10-epoch-1-foundation.md#dr-10--git-bootstrap-exception) | 2026-07-10 / Claude (Cowork) | One-time Git bootstrap exception. | Recorded and applied. | `C1a` — Done. | Supports `DR-9`. |
| [DR-11](2026-07-10-epoch-1-foundation.md#dr-11--c4-verifications-blocking-for-any-hermes-use) | 2026-07-10 / Claude (Cowork) | C4 checks block all Hermes use. | Needs Mark. | `A4`, `C5a`, `C5b` — open. | Dependency for `DR-15`; blocks Hermes only. |
| [DR-12](2026-07-10-epoch-1-foundation.md#dr-12--evidence--the-run-001-data-class) | 2026-07-10 / Claude (Cowork) | Resolve Run 001 evidence data-class collision. | Needs Mark in source; classification later decided by `DR-13`. | `C2d` — Done; import spot-check remains in `G4`. | Implemented by `DR-13`. |
| [DR-13](2026-07-11-run-001-approvals.md#dr-13--e1-ev01e1-ev04-evidence-candidates-approved) | 2026-07-11 / Claude Dispatch | Approve four evidence candidates as `external-okay`. | Mark-approved; import and asset spot-check still required. | `C2a`–`C2d` — Done; `G4` open. | Historical alias `E1-EV01`–`E1-EV04`; implements `DR-12`. |
| [DR-14](2026-07-11-run-001-approvals.md#dr-14--e1-r1a02-rubric-v01-approved) | 2026-07-11 / Claude Dispatch | Approve revenue-signal rubric unamended. | Mark-approved. | `C3b` — Done. | Historical alias `E1-R1A02`. |
| [DR-15](2026-07-11-run-001-approvals.md#dr-15--e1-r1a03-team-config-approved-as-amended--no-claude-default) | 2026-07-11 / Claude Dispatch | No default provider; Mark names the run provider set. | Mark-approved as amended; execution provider set remains open. | `C3c` — Done; `G4` open. | Historical alias `E1-R1A03`; amends `DR-5`; depends on `DR-8`, `DR-11`. |
| [DR-16](2026-07-11-run-001-approvals.md#dr-16--e1-r1a04-run-001-card-approved-mark-held-manual-testing-budget-exception) | 2026-07-11 / Claude Dispatch | Approve Run 001 card; record Mark-held manual-testing exception. | Mark-approved; agent-side caps remain unchanged. | `A1`, `C3d`, `C3e` — Done; `G4` open. | Historical alias `E1-R1A04`; qualifies `DR-8`; depends on `DR-13`, `DR-15`. |
| [DR-17](2026-07-12-mark-directions.md#dr-17--run-001-manual-invocation-policy) | 2026-07-12 / Codex | Mark manually prompts each Run 001 invocation; harness controls its budget. | Mark-approved; no project-level budget system or silent fallback. | `G4`, `D1`, `D4` — amended. | Amends `DR-15`/`DR-16` operationally; does not override `AGENTS.md`. |
| [DR-18](2026-07-12-mark-directions.md#dr-18--run-001-evidence-confirmation) | 2026-07-12 / Codex | Confirm the four approved evidence candidates for `external-okay` use. | Mark-confirmed; physical import and spot-check remain open. | `G4` — decision confirmed; execution open. | Extends `DR-13` caveat. |
| [DR-19](2026-07-12-mark-directions.md#dr-19--mindfultext-local-model-core) | 2026-07-12 / Codex | Replace provisional `gpt-oss:20b` core with `qwen3:8b`. | Implemented and live; stability is background telemetry under DR-22. | `B3`, `C4c`, `C4d`, `G1` — amended. | Amends `DR-2`; local memory budget remains separate from harness spend. |
| [DR-20](2026-07-12-mark-directions.md#dr-20--local-only-sensitive-input-store) | 2026-07-12 / Codex | Use a dedicated encrypted Seagate folder as the local-only store. | Confirmed at `/Volumes/Seagate Desktop Drive/MindfulText-local-only/`. | `C1c` — Done; `C1e` remains open. | Amends `DR-9`. |
| [DR-21](2026-07-12-mark-directions.md#dr-21--hermes-included-in-epoch-1-scope) | 2026-07-12 / Codex | Include Hermes for bounded, manually prompted Epoch 1 work. | Mark-approved scope expansion; C4 is deferred by DR-22. | `A4`, `C5a`, `C5b`, `E3` — amended. | Amends `DR-11`/`DR-15`; Telegram remains out of scope. |
| [DR-22](2026-07-12-prototype-run-first.md#dr-22--prototype-run-first-workflow) | 2026-07-12 / Codex | Use a founder brief to run, draft, rank, and learn before optimizing controls. | Mark-approved; four-asset import, C4, and 24-hour stability are nonblocking. | `A4`, `C4d`, `C5a`–`C5b`, `D1`, `D6`, `G4` — amended. | Amends `DR-11`, `DR-13`, `DR-19`, and `DR-21`; no outbound authorization. |
| [DR-23](2026-07-12-growth-hypothesis-inbox.md#dr-23--growth-hypothesis-inbox-and-agent-assisted-exploration) | 2026-07-12 / Codex | One Growth Hypothesis entry; agents research and fill missing fields. | Mark-approved; detailed intake is replaced by one-line/partial hypothesis entry. | `C2`, `D1`, `G4` — simplified. | Amended by `DR-24`; public research permitted, no outbound. |
| [DR-24](2026-07-12-direct-growth-hypotheses.md#dr-24--direct-growth-hypotheses-start) | 2026-07-12 / Codex | Start a Growth Hypothesis directly as `exploring`; no inbox step. | Mark-approved and applied. | `D1`, `G4`, `G5` — simplified. | Supersedes the active workflow terminology in `DR-23`; preserves its agent-research safeguards. |
| [DR-25](2026-07-12-research-controls-and-profile-watch.md#dr-25--research-controls-and-public-profile-watch) | 2026-07-12 / Codex | Autonomous public research by default; optional per-hypothesis research controls and public-profile watch. | Mark-approved and applied. | `D1`, `G4`, `G5` — expanded. | Extends `DR-23`/`DR-24`; no provider expansion or outreach authorization. |
| [DR-26](2026-07-12-folder-organization.md#dr-26--folder-organization) | 2026-07-12 / Codex | Group daily growth work and status material; remove the duplicate charter pointer. | Mark-approved and applied. | `G4` — path clarified. | Organization only; preserves all earlier decisions and run scope. |
| [DR-27](2026-07-12-tam-first-market-sizing.md#dr-27--tam-first-market-sizing) | 2026-07-12 / Codex | Size a clear behavioral/situational ICP with U.S. TAM first; add SAM/SOM only when decision-useful. | Mark-approved and applied. | `D1`, `G4` — expanded. | TAM is context, not WTP proof or validation. |
| [DR-28](2026-07-12-icp-registry.md#dr-28--icp-registry-and-hypothesis-linkage) | 2026-07-12 / Codex | Maintain a stable ICP registry and link hypotheses, paths, and signals to its audience context. | Mark-approved and applied. | `D1`, `G4` — expanded. | Separates buyer ICPs from channels, partners, and funders; strategy conclusions remain ICP-specific. |
| [DR-29](2026-07-13-segment-linked-runs.md#dr-29--segment-first-linked-research-model-and-run-002003-amendment) | 2026-07-13 / Codex | Add the segment-first linked model; amend Run 002 to segment intelligence and Run 003 to one-test packet. | Mark-approved; Run 002 executed and awaiting Mark review. | `D3`–`D9`, `E1`–`E2`, `G4`–`G5` — amended. | Preserves no-outbound, data, and provider controls; public account intelligence is not a CRM or monitor. |
| [DR-30](2026-07-13-run-003-paired-model-comparison.md#dr-30--run-003-paired-localfrontier-validation-packet-comparison) | 2026-07-13 / Codex | Select GH-004 for a paired local/frontier Run 003 validation packet. | Mark-approved; both packets completed; the scorecard records the captured local result and safer frontier packet. | `D8`, `D9`, `E1`–`E2`, `G5` — completed; next work follows DR-31. | Paired outputs use frozen input; each concrete model, latency, output reference, and frontier cost when available are traced. |
| [DR-31](2026-07-14-customer-development-plan.md#dr-31--segment-linked-customer-development-plan) | 2026-07-14 / Codex | Create `CDP-001` for segment-linked care-delivery customer development. | Mark-directed; planning record created, no execution or external activity authorized. | `E2a` — Done; later research/test cards remain separately approved. | Links `SEG-001` parent, `SEG-002` focus, `GH-004`, and `GTM-001`; preserves DR-29 boundaries. |
| [DR-32](2026-07-14-run-004-cdp-local-research.md#dr-32--run-004-cdp-001-local-research-sprint-program) | 2026-07-14 / Codex | Execute a bounded five-hour local-model public-research dogfood run for CDP-001. | Mark-approved and executed: 27 worker results, one memory-fit block, six source-checked context cards; no external action. | `E2b` — Done. | Model scorecard is routing evidence only. Extends DR-31 and preserves DR-29 boundaries. |

## Maintenance rule

The next available Epoch 1 decision number is `DR-33`. Before creating it,
inspect this register and the dated source files, then claim the documentation
work. Create the full record in a dated file in this `decisions/` folder and
add one register row in the same change. Do not add `DR-*` headings to this
index: the register must not cause duplicate discovery results when agents scan
the source decision records.
