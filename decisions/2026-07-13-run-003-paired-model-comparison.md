# MindfulText Epoch 1 — Decision Record — 2026-07-13 — Run 003 paired model comparison

Last updated: 2026-07-13 22:12:38 PDT — edited by: Codex

## DR-30 — Run 003 paired local/frontier validation-packet comparison

**Decision:** Mark selected [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]] for Run 003 and authorized a paired
comparison: one local routed model and one paid frontier model will each
produce the same validation packet from a frozen, privacy-safe input bundle.
The comparison evaluates the operational value of the local pattern while
producing a useful founder-reviewed packet.

The paired outputs must be independently generated before either arm is shown
the other. Both use the same prompt, source bundle, output schema, and
stop condition. Each arm receives an immutable label ([[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]-L or
[[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]-F); Mark reviews the substantive outputs and comparison record.
Model output remains draft material, not authority.

### Model and cost controls

- The local arm uses the local proxy task named in the run card. Its concrete
  resolved model is recorded from the proxy response and in `trace.jsonl`.
- The frontier arm is **OpenAI Codex / GPT-5 (current Codex session)**, selected
  by Mark after the installed/local model review. No generic frontier fallback
  or silent substitution is permitted. Its current-session cost is unavailable
  as a separate harness figure and is recorded as such.
- Any paid frontier call uses Mark's approved manual harness and its existing
  limits. The run records provider, exact model identifier, harness-reported
  usage/cost when available, latency, and output hash/reference. It does not
  create an agent-side spend budget or authorize outreach.

### Evaluation

Judge the two outputs separately on claim safety, evidence/citation handling,
buyer-group accuracy, hypothesis/test clarity, completeness, decision
usefulness, latency, and cost. Do not let polished prose outweigh incorrect or
unsupported claims. An unavailable or failed arm is recorded as inconclusive;
the successful arm may still yield a packet for Mark review.

**Status:** Mark-approved 2026-07-13. [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]-F is complete; [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]]-L
had two no-usable-result attempts with the same selected local model and is
inconclusive. No customer contact or external action is authorized.
