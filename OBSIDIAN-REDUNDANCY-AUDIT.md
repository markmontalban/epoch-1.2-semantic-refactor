# Obsidian Redundancy Audit

Last updated: 2026-08-14 11:54:29 PDT — edited by: Codex

This audit identifies overlap without deleting, merging, or weakening retained
project evidence.

## Document roles that overlap by design

| Documents | Keep each because | Future cleanup recommendation |
| --- | --- | --- |
| [Project Entry Point](README.md), [Obsidian Home](OBSIDIAN-HOME.md), and [Context Map](CONTEXT-MAP.md) | They respectively provide folder authority, vault navigation, and dependency/reference detail. | Keep the Entry Point short; point navigation questions to Obsidian Home and detailed relationship questions to Context Map. |
| [Current State](status/CURRENT-STATE.md), [Master Checklist](MASTER-CHECKLIST.md), and [Agent Handoff](status/HANDOFF.md) | They retain the historical Epoch 1 research/run summary, execution record, and operator context. | Do not use them for current Growth status; use the Growth Ordered Task Map and Growth Master Checklist. |
| [Hierarchy & Data Lineage](EPOCH-1-HIERARCHY-DATA-LINEAGE.md) and [Run Index](runs/README.md) | The first explains corpus structure and provenance; the second is the execution entry point. | Keep each; link from summaries instead of duplicating their tables. |
| [Next Steps Plan](planning/next-steps-plan.md) and Current State | Both retain historical Epoch 1 research/run rationale and synthesis. | Retain them as history and add no current Growth actions. |

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
2. Keep current Growth status in the Growth Ordered Task Map and Growth Master
   Checklist; keep approval language in dated decision records.
3. Before adding a new navigation index, prefer a direct reference to the
   existing canonical owner.

No deletion, merge, or archival action is authorized by this audit.
