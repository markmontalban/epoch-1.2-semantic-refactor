---
record_type: workflow
id: WF-006
title: Account and asset qualification
version: v1.0
status: active
stage: qualification
next_decision: Reuse for one bounded account, message, site, memo, evidence asset, or public-asset question.
---

# WF-006 — Account and asset qualification

- **Inputs:** one selected object, its canonical thread, public evidence, and a specific pass/fail decision.
- **Outputs:** qualification result, evidence gaps, prohibited claims, and smallest next action.
- **Gates:** source freshness, rights/provenance, role versus person boundaries, and external-action approval.
- **Stop:** private/authenticated data, uncertain rights, unsupported claim, or missing decision owner.
- **Replay:** refresh the same object; fork for a new asset type, account, or audience.

Historical seeds: [[runs/run-014/RUN-014-CCBHC-Site-Strategy|RUN-014]],
[[runs/run-015/RUN-015-Executive-Signal-Memos|RUN-015]],
[[runs/run-019/RUN-019-Pulse-Public-Asset-Audit|RUN-019]], and
[[runs/run-020/RUN-020-CCBHC-Buyer-Context-Brand|RUN-020]].
