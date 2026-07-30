# [[runs/run-003/CMP-001-Comparison-Protocol|CMP-001]] — Model Comparison

Last updated: 2026-07-13 23:25:19 PDT — edited by: Codex

This is a draft quality comparison of two answers to the same prompt—not a
measure of which model is universally better, and not authorization to act.

## How to read this

- **A 2 means “usable as written.”** The answer meets the requirement for this specific research-and-validation task.
- **A 1 means “partly useful, but unsafe or incomplete.”** It has a usable idea but needs material correction before it can guide a decision.
- **A 0 means “wrong next move.”** The answer misses the requirement in a way that could send us to the wrong test.
- **The total is quality only.** It does not include price, speed, or general intelligence; those are listed separately because a cheaper/faster answer can still be unsafe.

## Detailed comparison

| Criterion and definition | Local — Llama 3.3 70B | Frontier — Codex / GPT-5 | What the difference means in practice |
| --- | --- | --- | --- |
| **Claim safety** — Does it avoid claiming clinical efficacy or business outcomes that have not been proven for a new organization? | **1/2.** It says the program can improve wellbeing and operational capacity, then proposes a turnover target. Those outcomes are not established by the available evidence. | **2/2.** It calls MindfulText a nonclinical support benefit and explicitly says not to claim reductions in turnover, burnout, stress, or care-quality risk. | The local wording could accidentally turn a discovery conversation into an outcome promise. The frontier wording keeps the conversation honest: “might this be useful here?” rather than “this will improve X.” |
| **Evidence discipline** — Does it separate the MHA example and public signals from proof that a new organization will benefit? | **1/2.** It says more proof is needed, but still treats retention and capacity improvement as the expected benefit. | **2/2.** It labels MHA as internal prioritization evidence only and names the specific proof still needed before a pilot. | The frontier output uses evidence as a reason to investigate, not as a guarantee. That is the right posture while this is still a hypothesis. |
| **Buying-group accuracy** — Does it describe who must be involved without pretending we know the buyer, budget, or decision path? | **1/2.** It names HR, clinical, operations, quality, and finance, but gives them broad outcome responsibilities such as patient outcomes that are not established. | **2/2.** It names each role’s likely contribution and separately lists what remains unknown: owner, budget, priority, approval path, and fit. | We need to learn how an account actually makes this decision. The frontier version is designed to surface those unknowns; the local version mostly assumes them. |
| **Test clarity** — Does it propose the next smallest learning step, with a concrete pass, fail, and stop condition? | **0/2.** It jumps to a six-month, post-implementation turnover test with a 10% target. That is an ungrounded outcome claim and far too large for the next validation step. | **2/2.** It proposes a Level 2 signal: one qualified leader confirms the workflow problem, identifies the buying group, and agrees to a bounded requirements/pilot-design conversation. | The immediate question is relevance and decision path—not whether MindfulText reduces turnover. A valid next test can be a single manual conversation after Mark approves a qualified account. |
| **Packet completeness** — Does it answer every item in the frozen prompt: hypothesis, roles, boundaries, questions, signal, draft material, and recommendation? | **2/2.** All required sections are present. | **2/2.** All required sections are present. | Both models can follow the requested structure. The quality difference is in the content inside that structure. |
| **Decision usefulness** — Can Mark use the answer to choose a responsible next step today? | **1/2.** It ends with “manual discovery,” but its outcome-focused test would need redesign first. | **2/2.** It gives one narrow choice: approve one manual Level 2 conversation only after public account qualification, otherwise revise or park [[growth/HYPOTHESES#gh-004--low-disruption-workforce-reset-for-community-behavioral-health-providers|GH-004]]. | The frontier answer gives a practical, bounded decision. The local answer is a useful brainstorming draft, not a ready operating instruction. |
| **Quality total** | **6/12 draft** | **12/12 draft** | This is a judgment about this one packet under this rubric. Mark can revise it; neither score authorizes outreach, a pilot, or external claims. |

## Speed and cost are separate

- **Local speed recorded.** Llama completed the captured run in 67.08 seconds with 492 prompt and 654 completion tokens; this is not a quality score.
- **Frontier cost unavailable.** The current Codex-session harness does not expose a separate cost or latency record, so there is no honest cost comparison yet.
- **Local cost is not zero.** It uses local compute rather than a separately metered provider call; we should still account for time, hardware capacity, and the quality-review burden when choosing a model later.

## Bottom line

For this exact task, the frontier answer is the one safe enough to use as the
starting point for Mark’s decision. Llama generated a complete draft, but it
made the classic early-stage validation mistake: it jumped from a plausible
problem to promised outcomes and a large implementation test. That makes it a
good candidate for structured drafting with a stronger review rubric, not yet
for unsupervised hypothesis or test design.
