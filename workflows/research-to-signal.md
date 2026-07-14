# Workflow: Research-to-Revenue-Signal

Last updated: 2026-07-12 23:13:16 PDT — edited by: Codex

Model-agnostic pipeline from a raw growth hypothesis to ranked, testable path
options. Charter pointer: `../CHARTER.md` (v1.8).

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

### 1. Growth-hypothesis intake
- Inputs: one `GH-###` item from `../growth/HYPOTHESES.md`; it may contain
  only a one-line starting thought.
- Research control: blank or `auto` means the agent selects relevant public
  sources. A populated control directs its source, question, and score
  contribution; it is not a substitute for naming the actual provider.
- Profile control: `off` is the default; `discover` proposes profiles only in
  run notes; `watch` may add public-profile summaries to
  `../growth/PUBLIC-PROFILE-WATCH.md`.
- Outputs: a working brief with Product, ICP, Pain, Signals, Offer-Outcome,
  and explicit unknowns. State ICP, when possible, as role/group + observable
  behavior/current alternative + situation/constraint; demographics and
  psychographics are supporting context only. Missing content is tagged
  `agent-hypothesis`.
- Actor-slot: exploration role per team config.
- Trace: `input_ref` = GH item; `output_ref` = working-brief ref.

### 2. Generate angles
- Inputs: working brief; run question from the run card.
- Outputs: candidate revenue angles on the blackboard.
- Actor-slot: synthesis role per team config.
- Trace: `prompt_ref` + `output_ref` for the angles list.

### 3. Research + cluster
- Inputs: working brief; angles; public sources only.
- Outputs: clustered map (angle -> supporting/contradicting refs), alternatives,
  and missing evidence. Cite public URLs; never use logins or private data.
  If profile tracking is `watch`, update only the allowed public fields in the
  watchlist; do not monitor, scrape, or contact people.
- Actor-slot: research/extraction role per team config.
- Trace: `output_ref` = research map ref; no raw sensitive text.

### 3a. TAM-first market sizing (only when the ICP is clear)
- Inputs: a U.S.-bounded ICP that has a role/group, observable behavior/current
  alternative, and relevant situation/constraint; an annual pricing assumption
  when actual pricing is unknown.
- Outputs: a short U.S. TAM note at `outputs/<GH-###>-tam.md` with the cited
  equation `eligible ICP count × annual pricing assumption`, low/base/high
  range, date, inclusions/exclusions, assumptions, and unknowns. It is
  `agent-hypothesis`, not WTP proof.
- Boundary: calculate SAM only when a narrower reachable/product scope changes
  the decision; calculate SOM only when a credible timeframe and go-to-market
  capacity are supplied. Neither is a default output.
- Actor-slot: research/synthesis role per team config.
- Trace: `output_ref` = TAM note ref, or `not-eligible: ICP unclear`.

### 4. Draft path cards
- Inputs: clustered evidence map; template `../templates/path-card.md`.
- Outputs: 3-5 draft path cards in `../paths/`, status `candidate`.
- Actor-slot: drafting role per team config.
- Trace: `output_ref` = list of drafted card paths.

### 5. Rank via rubric
- Inputs: draft path cards; rubric in `../growth/SCORECARD.md`.
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
