---
record_type: run-card
file_label: RUN-003 Model Validation Comparison
run: RUN-003
title: Model validation comparison
status: completed
area: model-evaluation
focus: Compare local and frontier approaches against one frozen validation-packet input.
next_decision: Mark reviews the paired packets before authorizing any manual market test.
date: 2026-07-13
product: PROD-001
threads: [TRK-001]
workflow: WF-006
run_type: lab-validation
execution_kind: initial
input_runs: [RUN-002]
result_updates: []
---

# Run 003 — Model Validation Comparison — [[growth/HYPOTHESES|GH-004]] paired local/frontier validation packet

Last updated: 2026-07-13 22:44:34 PDT — edited by: Codex

**run_id:** RUN-003
**comparison_id:** [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]
**date:** 2026-07-13
**run_type:** lab-validation
**path_id:** MT-LCSW-01
**segment_id:** [[growth/SEGMENTS|SEG-002]]
**hypothesis_ids:** [[growth/HYPOTHESES|GH-004]]
**gtm_ids:** [[growth/GTM-MOTIONS|GTM-001]]
**question:** Using the frozen [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]] input bundle, can each model create a safe, decision-useful validation packet for [[growth/HYPOTHESES|GH-004]] that names the relevant buying group, bounded claim, proof needed, discovery questions, target signal, pass/fail/stop conditions, and draft-only material—without inferring buyer intent or authorizing outreach?
**owner:** Codex for both arms: local proxy `llama3.3:70b` and OpenAI Codex / GPT-5 current session; Mark reviews the outputs and decides any manual test.
**data_class:** external-okay — public Run 002 sources and concise [[growth/EVIDENCE-REGISTER|EV-001]] summary only. No raw testimonial, customer data, private contact data, logins, or local-only material.
**sources:** [[growth/HYPOTHESES|GH-004]]; [[growth/SEGMENTS|SEG-002]]; [[growth/GTM-MOTIONS|GTM-001]]; [[growth/EVIDENCE-REGISTER|EV-001]]; [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]] blackboard and cited public sources; [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]] input bundle.
**allowed_tools_providers:** Local arm: local proxy task `final_review` and one direct-proxy retry, both resolving to `llama3.3:70b` at setup; record actual resolution at execution. Frontier arm: OpenAI Codex / GPT-5 current session. No fallback for either arm; no scraping, monitoring, or outbound activity.
**budget:** Two local attempts using the same selected model and one current-session frontier packet; no new paid API invocation. Record latency and usage/cost when available.
**external_spend_cap:** No project-level agent budget system is added. The current-session frontier cost is unavailable as a separate harness figure; never initiate unapproved provider spend or bypass the governing harness controls.
**stop_condition:** Stop after each arm independently returns the required packet or fails/inconclusively stops. Do not revise one model's packet with the other's output before scoring. Stop if a source requires login, private data, or outbound contact.
**review_date:** 2026-07-14
**charter_version:** v1.9 plus [[decisions/2026-07-13-segment-linked-runs|DR-29]] and [[decisions/2026-07-13-run-003-paired-model-comparison|DR-30]]
**target_signal:** N/A (lab-validation; no market test or outreach occurs in this run)
**output_schema:** Frozen input bundle; `CMP-001-L` local packet; `CMP-001-F` frontier packet; comparison scorecard with evidence/citation handling, buyer-group accuracy, claim safety, hypothesis/test clarity, completeness, decision usefulness, latency, and cost; reference/hash-only trace.jsonl.
**pre_run_snapshot:** Required for the local arm. At setup (2026-07-13 22:07:21 PDT), `final_review` resolves through the local proxy to `llama3.3:70b`, fits available memory, and is resident; refresh health/models/memory/queue immediately before invocation.
**local_arm_result:** `CMP-001-L` was rerun with the frozen input and explicitly collected to terminal completion at 2026-07-13 22:44 PDT. `final_review` resolved to `llama3.3:70b`; response status was HTTP 200, 67,080 ms, 492 prompt tokens, and 654 completion tokens. Status: COMPLETED. See [local arm result](CMP-001-Local-Packet.md).
**approval:** APPROVED by Mark 2026-07-13 for [[growth/HYPOTHESES|GH-004]] paired comparison ([[decisions/2026-07-13-run-003-paired-model-comparison|DR-30]]).

## Related records

- [[growth/HYPOTHESES|GH-004]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[growth/EVIDENCE-REGISTER|EV-001]]
- [[runs/run-002/RUN-002-Segment-Intelligence|RUN-002]]
- [[runs/run-003/CMP-001-Frozen-Input|Frozen comparison input]]
- [[runs/run-003/CMP-001-Local-Packet|Local packet]]
- [[runs/run-003/CMP-001-Frontier-Packet|Frontier packet]]
- [[runs/run-003/CMP-001-Comparison-Scorecard|Comparison scorecard]]
- [[decisions/2026-07-13-run-003-paired-model-comparison|DR-30]]

## Provider manifest

| Arm | Status | Provider / model | Required record |
| --- | --- | --- | --- |
| `CMP-001-L` | Completed | Local proxy task `final_review`; actual resolution `llama3.3:70b` | [Captured local packet](CMP-001-Local-Packet.md); HTTP 200, latency, and token metadata traced |
| `CMP-001-F` | Completed | OpenAI Codex / GPT-5 current session | [Frontier packet](CMP-001-Frontier-Packet.md); provider/model, output reference, and current-session cost-unavailable status traced |
