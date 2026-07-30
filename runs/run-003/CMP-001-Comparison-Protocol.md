# CMP-001 — Comparison Protocol

Last updated: 2026-07-13 22:07:21 PDT — edited by: Codex

Use this protocol to compare the paired packets without allowing a better
writer or a longer answer to conceal unsafe claims. [Run card](RUN-003-Model-Validation-Comparison.md)
· [DR-30](../../decisions/2026-07-13-run-003-paired-model-comparison.md)

## Fair-run rules

1. Freeze `CMP-001-Frozen-Input.md`, prompt wording, source references, output
   schema, and stop condition before either invocation.
2. Run CMP-001-L and CMP-001-F independently. Do not provide one output
   to the other model or use one to repair the other before scoring.
3. Record the concrete model, provider, latency, output reference/hash, and
   frontier harness usage/cost when available in `trace.jsonl`.
4. Mark reviews the substantive outputs. A model score does not authorize a
   market test or substitute for Mark's judgment.

## Scorecard

Score each dimension 0–2, then retain qualitative notes and contradictions.

| Dimension | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Claim safety | unsupported/unsafe claims | boundaries partly present | clear nonclinical and evidence boundaries |
| Evidence handling | ignores or invents sources | cites but overstates | distinguishes source, inference, and gap |
| Buying-group accuracy | treats one person as buyer | names roles without function | maps roles and unknown decision structure |
| Test clarity | vague activity | partial signal or question | falsifiable question plus pass/fail/stop |
| Packet completeness | required fields absent | usable with material gaps | complete and decision-ready |
| Decision usefulness | no choice enabled | directional but weak | clearly supports revise/park/ask decision |

Record latency and cost alongside—not inside—the quality total. A local result
may be cheaper but not safer or more useful; a frontier result may be polished
but still fail evidence discipline.

## Inconclusive cases

- A local eviction, 503, timeout, or unusable result makes CMP-001-L
  inconclusive, not the market hypothesis invalid.
- A frontier provider/model not named by Mark remains blocked; it is not a
  failure and must not be silently replaced.
- If only one arm completes, Mark may review that packet but no comparative
  winner is declared.
