# MindfulText Epoch 1 — Obsidian Home

> [!info] How to use this vault
> This is a navigation layer for reading the project. It does not replace the
> Master Checklist for execution status, dated decision records for approvals,
> or the underlying reports for evidence.

## Start here

1. [Current State](status/CURRENT-STATE.md) — the compact view of the choices in front of Mark.
2. [Epoch 1 Overview Canvas](EPOCH-1-OVERVIEW.canvas) — the stable visual architecture of this vault.
3. [Project Entry Point](README.md) — folder-level navigation and the authority map.

## Current decisions and execution

- [Current State](status/CURRENT-STATE.md) is the re-entry summary: use it to decide what to examine now.
- [Master Checklist](MASTER-CHECKLIST.md) is the single execution tracker: use it for done, open, deferred, and Mark-only work.
- [Decision Register](decisions/DECISION-REGISTER.md) makes dated `DR-*` records findable; the linked dated record remains the approval source.

## Project authority

- [Charter](CHARTER.md) — Epoch 1 operating boundaries, lab roles, data rules, and lifecycle.
- [Context Map](CONTEXT-MAP.md) — dependency and reference index; explanatory, not execution authority.
- [Hierarchy & Data Lineage](EPOCH-1-HIERARCHY-DATA-LINEAGE.md) — corpus structure, identifiers, and run-to-artifact lineage; not live status.

## Business and growth records

- [Growth Index](growth/README.md) — segments, audiences, hypotheses, signals, motions, and scorecards.
- [Product Opportunity Ledger](product/PRODUCT-IDEAS.md) — proposal-only `PRO-###` opportunities; not delivery commitments.
- [Path Index](paths/README.md) — reusable opportunity and test-route cards.

## Runs and evidence

- [Run Index](runs/README.md) — bounded executions and their outputs.
- [Runs at a Glance](runs/RUNS-AT-A-GLANCE.base) — card and table views of each run's status, focus, and next decision.
- [Evidence Register](growth/EVIDENCE-REGISTER.md) — retained evidence pointers and gaps.
- A run card defines one bounded execution; its report and outputs retain what that execution found. Run cards and working notes now use descriptive filenames prefixed by their run ID.

## Visual views

- Use the [Overview Canvas](EPOCH-1-OVERVIEW.canvas) for a stable, curated high-level map.
- Use the global Graph to discover broad clusters, not to determine authority.
- Use a Local Graph at depth 1–2 when following one current-state item, decision, hypothesis, or run.
- Use the File Explorer or [Run Index](runs/README.md) when you need an exact file.
- The Graph intentionally hides unresolved links, orphans, raw/runtime artifacts, blackboards, templates, team configurations, and workflows in its overview configuration.

## Historical and operational material

- [Supplementary checklists](checklists/GAP-ANALYSIS-ROADMAP.md) are proposals or topic-specific queues. They never replace the Master Checklist.

For notes that are useful working artifacts but had no native graph edge, use the [Vault Link Index](OBSIDIAN-LINK-INDEX.md). It contains explicit Obsidian wikilinks to their canonical run or output context.
- Relationship convention: link stable IDs with Obsidian wikilinks; link CCBHC/FQHC conclusions to their segment and discovery lineage. Run `python3 tools/validate-obsidian-links.py` before treating a graph update as complete.
- [Redundancy Audit](OBSIDIAN-REDUNDANCY-AUDIT.md) explains the intended roles of overlapping navigation, status, and historical documents.
- `workflows/`, `templates/`, and `team-configs/` support the operating system of the project; they are not the current business or execution view.
- `planning/` and `observations/` preserve history and rationale. Read them when needed, not as the primary re-entry path.

## Document-role guide

| If you need to know… | Use… | It is not… |
| --- | --- | --- |
| What Mark should consider now | [Current State](status/CURRENT-STATE.md) | Executable task status |
| What is actually open, done, or Mark-only | [Master Checklist](MASTER-CHECKLIST.md) | The approval record |
| What Mark approved or amended | The linked dated `DR-*` record | A live task tracker |
| How documents and dependencies fit together | [Context Map](CONTEXT-MAP.md) | A competing plan |
| How the retained corpus nests and connects | [Hierarchy & Data Lineage](EPOCH-1-HIERARCHY-DATA-LINEAGE.md) | Current operating status |
