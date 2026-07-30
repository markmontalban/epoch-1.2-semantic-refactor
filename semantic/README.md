# Semantic-map migration record

This refactor belongs to [[portfolio/PROD-001-MindfulText|PROD-001]] and keeps
the complete Epoch 1 corpus authoritative in Markdown and Git.

## Historical checkpoint

- Checkpoint commit: `3a2dc5a`
- Tag: `epoch-1-pre-semantic-map-refactor-2026-07-30`
- The 44 apparent deletions were audited before the checkpoint. Git recorded
  42 as renames. The remaining two were the legacy
  `runs/run-002/run-card.md` and `runs/run-008/run-card.md`; their verified
  successors are [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]] and
  [[runs/run-008/RUN-008-Narrative-Pain-Map|RUN-008]].
- No historical prompt, trace, output, snapshot, or run card lacked a verified
  successor.
- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] had completed
  after the draft migration plan described it as open. The checkpoint preserves
  that newer repository state rather than manufacturing an earlier incomplete
  snapshot.

## Baseline references

- [Filtered graph screenshot](../visuals/baselines/2026-07-30-global-graph-filtered.png)
- [Unfiltered graph screenshot](../visuals/baselines/2026-07-30-global-graph-unfiltered.png)
- [Semantic Map Overview](../SEMANTIC-MAP-OVERVIEW.canvas)

`legacy-relations.json` is the only transitional override source. New typed
relationships belong in the frontmatter of their canonical record.
