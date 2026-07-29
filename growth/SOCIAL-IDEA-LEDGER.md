# Growth — Social Idea Ledger

Last updated: 2026-07-28 10:44:41 PDT — edited by: Codex

This ledger preserves Mark's social-media ideas before deciding whether they
belong to a growth hypothesis, GTM motion, signal, run, product feature, or
parking lot. Capture is intentionally cheap; promotion is evidence-dependent.
[DR-36](../decisions/2026-07-16-social-intelligence-founder-content-direction.md)

## A. Record contract

`SOC-###` is a stable capture ID for a social idea, observed content mechanic,
saved-example lead, or social-intelligence workflow thought. It does not claim
that the idea is original, feasible, compliant, useful, or validated.

| Field | What to retain |
| --- | --- |
| Founder thought | A faithful summary; preserve incompleteness instead of filling it silently. |
| Source pointer | Platform/post/account pointer when available; do not copy private or rights-unclear material. |
| Mechanic and theme | What may work and what subject it could express; keep these separate. |
| Candidate links | Zero or more `SEG-###`, `ICP-###`, `GH-###`, `GTM-###`, `CDP-###`, or path IDs. Unlinked is valid. |
| Human-touch boundary | What automation may collect, what an agent may propose, and what requires Mark. |
| Evidence state | Founder intuition, observed result, public evidence, contradiction, or unknown. |
| Next decision | The smallest choice that could promote, revise, test, or park the idea. |

## B. Captured ideas

| ID | Founder thought and fidelity note | Current classification | Candidate links | Evidence / status | Next decision |
| --- | --- | --- | --- | --- | --- |
| SOC-001 | Reuse the existing MindfulTextPulse app and self-hosted n8n workflow pattern to collect and categorize r/nursing posts, surface pain points/trends, and eventually guide helpful, rule-respecting participation or other revenue learning. | Existing technical asset plus social-intelligence/GTM input; not yet a generic platform. | [[growth/SEGMENTS#seg-001--care-delivery-organizations|SEG-001]]; possible [[growth/ICP-REGISTRY|ICP-006]]; possible extension of [[growth/GTM-MOTIONS#gtm-001--account-led-buyer-discovery|GTM-001]]; no GH selected. | Local inspection found a substantial React/Express/Postgres app and two inactive n8n exports. The Reddit workflow requests top/hot/new/rising posts every four hours; the enrichment workflow uses Sheets and an OpenAI model. Authorization, duplication, unit cost, policy fit, and topic portability remain unknown. | Decide whether the assets merit a bounded architecture/adapter audit before any reactivation or change. |
| SOC-002 | Adapt mechanics from viral social posts to another vertical or MindfulText theme to seek faster distribution. | Content-pattern and experiment lead. | Unlinked; may become a GTM motion after one ethical, original adaptation test. | Founder intuition plus saved examples not yet imported. “Viral” is not a promised outcome, and copying expression is out of scope. | Define one mechanic, one audience, one theme, and one non-vanity success signal. |
| SOC-003 | Compare one to three focused theme channels with a broad “just Mark” founder presence; focused likely wins in the short term, but Mark's range should not be erased. | Founder-brand/channel architecture hypothesis. | Candidate new `GH-###` and `GTM-###`; no current segment or ICP selected. | Founder assumption; no controlled comparison is recorded. | Choose whether the first test optimizes MindfulText revenue learning, Mark's founder brand, or an explicit bridge between them. |
| SOC-004 | The AI-learning TikTok and Instagram accounts grew slowly, but keeping up required near-full-time effort and drifted from the main goal while risking generic AI content. | Prior channel result and park/repurpose candidate. | Possible [[growth/ICP-REGISTRY|ICP-008]] only if founder learning becomes the chosen audience; no GH selected. | Founder-reported directional signal; metrics, dates, cadence, and content set are not yet retained. | Decide park, archive as baseline, or repurpose under a selected revenue-linked theme. |
| SOC-005 | Use agents and automation to watch relevant developments, brief Mark concisely, organize ideas, draft options, and reveal where Mark's human touch matters. | Cross-cutting human-in-the-loop workflow idea, not a market hypothesis. | May support multiple GH/GTM paths; no new control plane authorized. | Founder direction; workflow performance untested. | Run a shadow-mode rehearsal only after one theme and decision metric are selected. |
| SOC-006 | Mindfulness can apply across many industries; preserve that breadth while creating enough thematic focus for an audience to understand why to follow. | Brand/theme architecture question. | MindfulText-wide; links must wait for a named audience and offer. | Founder conviction plus unresolved positioning tradeoff. | Define a stable worldview spine and a narrow first audience promise without claiming all industries at once. |
| SOC-007 | Growth-hacking groups appear to exchange internal playbooks and “secrets”; the source thought is unfinished and may contain additional detail. | Incomplete research lead. | Unlinked. | Founder observation; no named group, artifact, or practice supplied. | Preserve until Mark completes the thought or supplies a permitted example; do not infer or investigate private groups. |
| SOC-008 | Mindfulness and comedy may help a creator invite a constructive social movement: encourage ordinary good without moralizing, social disruption, economic harm, or insensitive treatment of people and institutions. | Founder-theme route, qualified through internal lab validation; not a growth hypothesis, GTM motion, demand claim, or publishing plan. | SOC-003; SOC-006; [[runs/run-011/RUN-011-Comedy-Concept|RUN-011]]; [[decisions/2026-07-16-social-intelligence-founder-content-direction#dr-36--social-intelligence-and-founder-content-exploration-direction|DR-36]]; no GH/GTM selected. | Founder direction; [[runs/run-011/RUN-011-Comedy-Concept|RUN-011]] created an internal positioning packet only. Broad public identity is the proposed front door, with care workers and founders as lenses; public resonance is unknown. | Mark may separately approve a bounded manual social baseline, revise the route, or park it. |
| SOC-009 | Build a founder-led storytelling system around mindfulness as the underlying theme: tech/AI, startup and accelerator experience, healthcare, and film supply scenes; agents reduce research and production friction; a sufficiently qualified Pulse asset could later become an educational input. | Founder social-studio direction and source-boundary question; not a content plan, market claim, public-data authorization, or growth hypothesis. | [[growth/BRAND-DIRECTION|BRD-001]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-001]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-003]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-004]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-005]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-006]]; [[growth/SOCIAL-IDEA-LEDGER|SOC-008]]; [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]; [[runs/run-019/RUN-019-Pulse-Public-Asset-Audit|RUN-019]]; no GH/GTM selected. | Founder direction; [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]] defines an internal operating model. [[runs/run-019/RUN-019-Pulse-Public-Asset-Audit|RUN-019]] found Pulse not yet eligible for public use and did not validate any content, account, product, “stickiness,” or revenue effect. | Mark chooses a separately approved manual baseline or parks the route. Any Pulse-derived asset first needs a local-only provenance inventory. |

Saved examples that remain inside social platforms are not imported by this
ledger. Add a pointer and permitted-use note when Mark chooses to surface one.

## C. Promotion and learning rules

- `C1` If a record becomes one atomic, falsifiable business belief, link or
  create a `GH-###`; do not rewrite the originating `SOC-###`.
- `C2` If it becomes a reusable way to learn from or reach an audience, link or
  create a `GTM-###`.
- `C3` If an observed result changes a ranking, add a concise entry to
  [Signals](SIGNALS.md); an idea alone is not a signal.
- `C4` If a bounded execution is needed, create one `RUN-###` only after `X2`
  scaffolding and `X3` approval; preserve the `SOC-###` in `subject_refs`.
- `C5` Automation may ingest permitted data, deduplicate, summarize, and draft
  internal options. Mark retains worldview, lived meaning, final voice,
  community judgment, publishing, commenting, outreach, and spending.

## D. Adjacent operating notes

- `D1` Keep Replit provisionally as a replaceable speed layer; decide its
  longer-term role through the architecture/asset audit, not intuition alone.
- `D2` The MindfulTextPulse code is already a Git repository. The adjacent n8n
  workflow-export folder is not currently a Git repository; choose a private,
  credential-safe versioning path before changing those workflows.
- `D3` Transfer the planned Git checkpoint/continuity setup to the other device
  as a separate internal operation. Replit checkpoints are useful working
  snapshots, but long-lived source history should remain ordinary Git history.
