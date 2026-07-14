# Run 001 — Unblock Packet (Mark fill-in)

Last updated: 2026-07-12 23:13:16 PDT — edited by: Codex

**Purpose:** Run 001 starts directly from one Growth Hypothesis and a manually
selected agent/provider. Enter one sentence or any partial fields; the agent
researches and fills the rest as working hypotheses (DR-23/DR-24).

## Fast-start input — one growth hypothesis (DR-23)

In `growth/HYPOTHESES.md`, add a starting thought under a `GH-###` item. It
starts as `exploring`; there is no inbox step. You
may enter only that thought, or add any of these optional fields:

- Product *(defaults to MindfulText; name a MindfulText sub-offering, prototype,
  or MVP if that is the test)*
- ICP
- Pain
- Signals *(or `none yet`; ongoing records belong in `growth/SIGNALS.md`)*
- Offer-Outcome
- Research *(blank or `auto` lets the agent choose and cite public research;
  otherwise: `<agent/model preference> | <sources> | <question> | update <fields/score dimensions>`)*
- Profile tracking *(off / discover / watch; `watch` writes permitted public
  profile summaries to `growth/PUBLIC-PROFILE-WATCH.md`)*

The idea must be safe to give the chosen external agent. Agent-filled content
is labeled `agent-hypothesis` and can be changed, parked, or killed later.

## Blocker 2 — manually name the provider at invocation (E1-N04b/c; DR-17)

The provider is selected by Mark's manual prompt, not by a project default.
Before starting, write the actual agent/provider into the run card's
`allowed_tools_providers` line and record it in the trace, e.g.:

> Named by Mark YYYY-MM-DD for this invocation: Claude (Anthropic). No others;
> no fallback. Invocation budget supplied by the harness.

- Codex, Claude, or Hermes may be named. Telegram is not used in this workflow.

## Copy/paste prompt

```text
You are the manually selected MindfulText Run 001 agent: <Codex | Claude | Hermes>.

Work in /Users/mgzm-studio/AI-Studio/Docs/mindfultext-epoch-1/.
Read growth/HYPOTHESES.md, growth/SCORECARD.md,
runs/run-001/run-card.md, workflows/research-to-signal.md, and templates/path-card.md.

Use the selected GH-### item to infer missing fields. If `Research` is blank or
`auto`, select and cite relevant public sources without waiting for more input.
If it supplies source/community/question/score controls, follow them. Identify
alternatives and contradictions, then create 3–5 editable path cards in paths/,
a ranked scorecard and evidence-gap list in runs/run-001/outputs/, working notes
in runs/run-001/blackboard.md, and a privacy-safe trace.jsonl. Once you can
state the ICP as role/group + current behavior/alternative + situation or
constraint, add `runs/run-001/outputs/<GH-###>-tam.md`: a cited U.S. TAM
low/base/high range with formula, inclusions/exclusions, assumptions, and
unknowns. Do not calculate SAM/SOM unless Mark asks for them or explains why a
narrower number changes the next decision. Link public sources and label
agent-filled claims `agent-hypothesis`.

If `Profile tracking` is `discover`, propose relevant public profiles in the
working notes. If it is `watch`, add only public URL, public role/context, and
concise relevance to growth/PUBLIC-PROFILE-WATCH.md. Do not monitor, scrape,
contact people, or record private contact details, sensitive traits, or raw
personal messages.

Do not send messages, use Telegram, use logins/private sources, or include raw
sensitive material. Stop at five cards or four hours. Report the files created,
the two highest-leverage evidence gaps, and the recommended status.
```

## Then

1. `python3 tools/validate-run-card.py runs/run-001/run-card.md` — must stay
   valid and approved.
2. Commit the edits.
3. Any agent session on the named provider may then execute Run 001 per its
   card (≤4 h and stop conditions as written), recording charter v1.7 + commit
   hash in the card at execution.

*Real customer feedback determines whether a hypothesis is validated, parked,
or killed. Keep this packet as the short prototype run instruction.*
