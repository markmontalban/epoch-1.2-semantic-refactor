# Workflow: Research-to-Revenue-Signal

Model-agnostic pipeline from founder-approved evidence to a ranked, testable
revenue-path recommendation. Charter pointer: `../00-charter.md` (v1.2).

Binding rules:

- WHO performs each step comes from the active team config in `../team-configs/`.
  Actor-slots below are roles resolved at run time — never hardcode a model or
  provider in this file.
- Every step appends exactly one line to the run's `trace.jsonl` with schema
  `{"step","actor","model","prompt_ref","input_ref","output_ref","gate_verdict","human_verdict","ts"}`.
  References/hashes only — never raw sensitive content. Raw local-only inputs
  live outside this repo entirely (charter §14, trace-privacy amendment).
- Model output is data, never authority. Nothing outbound without Mark.

## Steps

### 1. Evidence intake
- Inputs: classed, founder-approved evidence from `../01-product-evidence.md`.
- Outputs: intake manifest on the run blackboard (evidence refs + data classes).
- Actor-slot: intake/routing role per team config.
- Trace: `input_ref` = evidence refs; `output_ref` = manifest ref.

### 2. Generate angles
- Inputs: intake manifest; run question from the run card.
- Outputs: candidate revenue angles on the blackboard.
- Actor-slot: synthesis role per team config.
- Trace: `prompt_ref` + `output_ref` for the angles list.

### 3. Extract + cluster evidence
- Inputs: intake manifest; angles.
- Outputs: clustered evidence map (angle -> supporting/contradicting refs).
- Actor-slot: extraction/clustering role per team config (local router from v0.2).
- Trace: `output_ref` = cluster map ref; no raw evidence text.

### 4. Draft path cards
- Inputs: clustered evidence map; template `../templates/path-card.md`.
- Outputs: 3-5 draft path cards in `../paths/`, status `candidate`.
- Actor-slot: drafting role per team config.
- Trace: `output_ref` = list of drafted card paths.

### 5. Rank via rubric
- Inputs: draft path cards; rubric in `../02-revenue-signal-scorecard.md`.
- Outputs: `rubric_score` per card + ranked list on the blackboard.
- Actor-slot: ranking role per team config.
- Trace: `output_ref` = ranking ref.

### 6. Critique
- Inputs: ranked path cards.
- Outputs: critique notes; gate verdicts where gates are configured.
- Actor-slot: config-dependent — the local dual-gate (Gate A logic + Gate B
  quality) arrives in team config v0.3.
- Trace: `gate_verdict` populated when gates run, else null.

### 7. Recommend cheapest next test
- Inputs: top-ranked cards + critique notes.
- Outputs: `cheapest_test` proposal per top path (cost, stop condition, target signal).
- Actor-slot: synthesis role per team config.
- Trace: `output_ref` = proposals ref.

### 8. Mark review
- Inputs: ranked cards, critiques, proposed tests.
- Outputs: Mark's verdict (approve / revise / park). Only Mark sets a path
  `active`; only Mark approves anything external.
- Actor-slot: Mark (human — this slot is never delegable).
- Trace: `human_verdict` populated.

### 9. Decision record + compaction
- Inputs: Mark's verdict.
- Outputs: decision record in `../decisions/` (`../templates/decision.md`) and a
  compaction note (`../templates/compaction.md`); run closed.
- Actor-slot: scribe role per team config; content approved by Mark.
- Trace: final line of the run.
