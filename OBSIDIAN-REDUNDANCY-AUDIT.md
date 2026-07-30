# Obsidian Redundancy Audit

This audit identifies overlap without deleting, merging, or weakening retained
project evidence.

## Document roles that overlap by design

| Documents | Keep each because | Future cleanup recommendation |
| --- | --- | --- |
| [Project Entry Point](README.md), [Obsidian Home](OBSIDIAN-HOME.md), and [Context Map](CONTEXT-MAP.md) | They respectively provide folder authority, vault navigation, and dependency/reference detail. | Keep the Entry Point short; point navigation questions to Obsidian Home and detailed relationship questions to Context Map. |
| [Current State](status/CURRENT-STATE.md), [Master Checklist](MASTER-CHECKLIST.md), and [Agent Handoff](status/HANDOFF.md) | They respectively hold the live founder summary, execution authority, and operator context. | Update Current State for live decisions; do not use the other two as competing summaries. |
| [Hierarchy & Data Lineage](EPOCH-1-HIERARCHY-DATA-LINEAGE.md) and [Run Index](runs/README.md) | The first explains corpus structure and provenance; the second is the execution entry point. | Keep each; link from summaries instead of duplicating their tables. |
| [Next Steps Plan](planning/next-steps-plan.md) and Current State | The plan is historical phase rationale; Current State is live. | Retain the plan as history and avoid adding current actions to it. |

## Intentional retained duplication

- Run 004 repeats worker-contract and evidence material across prompt snapshots.
  These are execution-time inputs and remain intact for reproducibility.
- Older run cards repeat template usage notes. They remain historical execution
  records and should not be mechanically shortened.
- Per-run reports, source ledgers, and files named `SOURCES.md` retain distinct
  provenance. Similar filenames are not a deletion signal.

## Safe future cleanup candidates

1. If an entry-point document grows, replace repeated descriptive prose with a
   short pointer to its named source of truth.
2. Keep status updates in Current State, checklist updates in Master Checklist,
   and approval language in dated decision records.
3. Use the Obsidian link audit before adding a new navigation index; prefer a
   direct semantic link to its owner instead.

No deletion, merge, or archival action is authorized by this audit.
