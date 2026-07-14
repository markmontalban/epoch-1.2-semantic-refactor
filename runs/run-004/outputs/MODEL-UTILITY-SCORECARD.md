# RUN-004 — Local model utility scorecard

Last updated: 2026-07-14 06:46:58 PDT — edited by: Codex

This is a routing observation, not a general model ranking. A task earns 0–2
each for observed web-tool use, usable public URLs, source fidelity, claim
discipline, and output-schema compliance. An 8/10 initial task made its lane
eligible for the specified follow-up; it did not make its facts verified.

## Aggregated result

| Model | Completed tasks | Scores | Mean | Operational reading |
| --- | --- | ---: | --- |
| `llama3.3:70b` | 3 | 6, 8, 8 | 7.3 | Best bounded comparison output; run alone and still source-check every claim. |
| `qwen3.6:35b-a3b` | 7 | 9, 1, 8, 7, 7, 8, 6 | 6.6 | Useful account discovery with high variance; enforce schema review. |
| `gpt-oss:20b` | 10 | 6, 2, 9, 7, 8, 6, 9, 6, 4, 5 | 6.2 | Useful category language only with claim/source review. |
| `deepseek-r1:32b` | 4 | 6, 1, 5, 7 | 4.8 | Weak tool/schema adherence; no follow-up routing from this run. |
| `ornith:35b-q8` | 3 | 5, 1, 5 | 3.7 | One preflight memory block plus weak schema adherence; no follow-up routing. |

`OR35-01` is excluded from the table because it correctly failed preflight:
the requested model did not fit alongside the then-resident models. Full
per-task score components, output paths, and failure notes are in the
[runtime state](../runtime/run-state.json); raw transcripts remain noncanonical.
