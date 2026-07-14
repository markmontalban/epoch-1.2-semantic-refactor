# MindfulText Epoch 1 — Decision Record — 2026-07-14 — RUN-004 local research sprint program

Last updated: 2026-07-14 06:46:58 PDT — edited by: Codex

## DR-32 — RUN-004 CDP-001 local-research sprint program

**Decision:** Mark approved `RUN-004`, a five-hour, public-research-only
local-model dogfood run under `CDP-001`. It uses bounded Hermes one-shot
workers to evaluate selected local models on public search tasks that can add
account, buyer-function, category-language, and contradiction evidence for
`SEG-002 — Community behavioral-health providers`.

**Model and provider boundary:** Each worker names the `ollama` provider and
one concrete local model. Hermes’ OpenRouter default is excluded. The worker
may use SearXNG public search and at most two public page opens. A model error,
tool failure, malformed output, or proxy `503` is a recorded result; no silent
model/provider fallback or residency/budget/pin change is permitted.

**Evidence and action boundary:** Workers may retain public URLs, source
titles, dated observable facts, category language, functional buyer context,
and explicit uncertainties. They may not scrape, monitor, collect personal
contact details, use private/logged-in material, send messages, publish,
create a CRM, or authorize any buyer conversation, marketing activity, or
market test.

**Time and review boundary:** The run holds fifty ready prompts but launches
at most twenty-eight in the five-hour window. Individual workers stop at
twelve minutes. A finite supervisor records health, memory, PIDs, outputs,
and trace metadata; it stops launching at the five-hour boundary. Only Codex
writes canonical Epoch artifacts, after source and claim review.

**Execution result:** Closed at the five-hour boundary with 27 completed
local-worker results, one correctly blocked Ornith memory-fit attempt, six
source-checked public context cards, and no outbound or configuration change.
The model scorecard is routing evidence only; it does not validate demand or
authorize a next market action.

**Status:** Mark-approved and executed 2026-07-14. This decision extends
`DR-31` and preserves `DR-29`’s segment-first and no-outbound constraints.
