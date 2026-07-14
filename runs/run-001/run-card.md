# Run Card

Last updated: 2026-07-12 23:54:25 PDT — edited by: Codex

**run_id:** RUN-001
**date:** 2026-07-12
**run_type:** lab-validation
**path_id:** MT-BOOTSTRAP
**question:** From one Growth Hypothesis in `growth/HYPOTHESES.md`, which 3–5 buyer × pain × channel × offer paths are worth exploring, what is the cheapest validation test for the top two, and—once the ICP is behaviorally and situationally clear—what is the defensible U.S. TAM range?
**owner:** Mark-prompted agent/provider per invocation (Codex, Claude, or Hermes) per team-config v0.1.1; Mark (approval and path selection). Mark names the actual provider in the prompt and it is recorded at execution (DR-17/DR-22).
**data_class:** external-okay — use only the selected Growth Hypothesis and public research; never place raw sensitive material in the prompt or outputs.
**sources:** One item from growth/HYPOTHESES.md, optional concise growth/SIGNALS.md rows, optional growth/PUBLIC-PROFILE-WATCH.md rows only when the hypothesis sets `Profile tracking: watch`, and public sources cited by the agent; declared founder and agent assumptions marked as such.
**allowed_tools_providers:** Codex, manually named by Mark for the GH-002 invocation on 2026-07-12; no other provider or fallback, no local router tasks, and no `local-only` input. Public web research is permitted with source links; no logins, private sources, or outbound actions. The actual provider is recorded in this card and trace (DR-17/DR-23).
**budget:** One manually prompted working session (≤ 4 h); invocation budget is supplied by the harness (DR-17)
**external_spend_cap:** No project-level agent budget system is added; the harness controls invocation spend. Never initiate unapproved provider spend or bypass the governing harness controls.
**stop_condition:** Stop at 5 path cards or at the 4 h budget, whichever comes first; stop if a source requires login, private data, or outbound contact.
**review_date:** 2026-07-14
**charter_version:** v1.9 (2026-07-12, §14.27 TAM-first market sizing); commit recorded at execution time
**execution_record:** GH-002 expansion completed by Codex, manually named by Mark, on 2026-07-12; charter v1.9; baseline repository commit `e42a302`; no commit was created because the working tree already contained unrelated documentation changes.
**target_signal:** N/A (lab-validation; measures evidence quality, decision usefulness, reproducibility, latency, cost)
**output_schema:** 3–5 path cards (templates/path-card.md) in paths/; ranked scorecard table in outputs/; evidence-gap list; baseline notes on blackboard.md; if the ICP is clear, a cited U.S. TAM note in outputs/ with formula/range/assumptions; trace.jsonl (references/hashes only). SAM/SOM only when the run explicitly needs them.
**pre_run_snapshot:** Not required — external-surface-only run, does not touch the local platform (snapshot rule applies from Run 002)
**approval:** APPROVED by Mark 2026-07-11 (E1-R1A04; as amended by E1-R1A03 — recorded by Claude Dispatch from Mark's 2026-07-11 dispatch; decisions/2026-07-11-run-001-approvals.md). Prototype execution requires: one Growth Hypothesis directly entered in `growth/HYPOTHESES.md` and the provider/agent named by Mark in the manual invocation prompt (DR-17/DR-24/DR-25/DR-27).

## Usage notes

- Execution is forbidden until approval reads "APPROVED by Mark YYYY-MM-DD".
- Every run records the charter version it ran under.
- One privacy-safe trace.jsonl per run — references/hashes only, no raw sensitive content.
- run_type allowed values: lab-validation | market-test.
- path_id: a path card id, or LAB-SETUP / MT-BOOTSTRAP for non-path runs.
- data_class: local-only | redacted-external | external-okay; unassigned defaults to local-only.
- target_signal: required for market-test runs; signal ladder 0-3. N/A is fine for lab-validation.
- pre_run_snapshot: health/models/memory/queue state before execution, for runs touching
  the local platform. If core evictions or 503s occur mid-run, mark comparisons INCONCLUSIVE.
- Validate with `python3 tools/validate-run-card.py runs/run-NNN/run-card.md`.
