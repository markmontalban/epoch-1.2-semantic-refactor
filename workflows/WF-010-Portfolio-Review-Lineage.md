---
record_type: workflow
id: WF-010
title: Portfolio review and lineage
version: v1.0
status: active
stage: review
next_decision: Use when cross-thread priority, coverage, corpus structure, or next-run ordering needs review.
---

# WF-010 — Portfolio review and lineage

- **Inputs:** product roots, thread states, dated decisions, runs, workflows, and evidence coverage.
- **Outputs:** portfolio comparison, lineage map, gaps, sequencing recommendation, and unchanged boundaries.
- **Gates:** do not let document centrality, run count, or artifact volume substitute for evidence quality.
- **Stop:** missing thread ownership, unresolved stable IDs, or incomparable decision units.
- **Replay:** refresh the same product portfolio; fork for a different product root or review question.

Historical seed: [[runs/run-010/RUN-010-Data-Lineage|RUN-010]]. Portfolio
prioritization remains separately represented by [[workflows/WF-004-Segment-Prioritization|WF-004]].
