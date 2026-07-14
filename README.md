# MindfulText Epoch 1 — Project Entry Point

Last updated: 2026-07-13 13:34:26 PDT — edited by: Codex

Start here to locate the current work, the governing decision behind it, and
the document that has authority for each kind of claim.

## Start here

1. [`status/CURRENT-STATE.md`](status/CURRENT-STATE.md) — what to do now.
2. [`growth/README.md`](growth/README.md) — ideas, audiences, signals, and
   the link from each `GH-###` to its work.
3. [`runs/README.md`](runs/README.md) — each execution and all of its outputs.

## Authority map

| Need | Source of truth | Use it for |
| --- | --- | --- |
| Current task status | `MASTER-CHECKLIST.md` | What is done, open, blocked, or Mark-only. |
| Approval or amendment | Linked `DR-*` source record | What Mark decided and the caveats on that decision. |
| Project navigation | `CONTEXT-MAP.md` | Dependencies, current state, and all supporting artifacts. |
| Epoch 1 authority | `CHARTER.md` | Lab roles, data rules, lifecycle, and amendments. |
| Workspace-wide rules | `../../AGENTS.md` | Agent behavior, documentation protocol, and the lookup sequence. |

## Folder map

| Folder / file | Use it for |
| --- | --- |
| `growth/` | Your ICP registry, hypotheses, scorecard, signals, and optional profile watch. Start at the [Growth Index](growth/README.md). |
| `paths/` | Reusable opportunity/test-route cards. Start at the [Path Index](paths/README.md). |
| `status/` | Current state for Mark and handoff for an incoming agent. |
| `runs/` | Run cards, prompts, notes, outputs, and traces. Start at the [Run Index](runs/README.md) to see each run and its linked `GH-###` work. |
| `decisions/` | Dated Mark decisions and the Decision Register. |
| `workflows/`, `templates/`, `team-configs/` | Agent operating material. |
| `planning/`, `observations/`, `datasets/` | Historical plan, telemetry, and later learning material. |

## Reference grammar

Use both identifiers when the work has an associated decision: `C3c (DR-15)`.
`DR-*` is the durable decision identity; `A1`, `B1a`, and similar codes are
the current position of an actionable item in the Master Checklist. Historical
`E1-*` values are aliases only and must not be used for new assignments.

## Adding work

Add new decision records under `decisions/` as a dated Markdown file, assign
the next sequential `DR-*` number from the Decision Register, and update the
register, Master Checklist, Context Map, and affected artifacts together.
Keep the primary execution tracker at `MASTER-CHECKLIST.md`. Place additional
checklists in `checklists/` when that folder is first needed, name each in the
Context Map, and use document-position references for its action items.
