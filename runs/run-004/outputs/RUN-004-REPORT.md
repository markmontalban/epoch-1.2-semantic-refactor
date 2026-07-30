# [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]] — [[growth/CDP-001|CDP-001]] local research report

Last updated: 2026-07-14 06:46:58 PDT — edited by: Codex

[[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]] closed at its five-hour cutoff with bounded public research only; it is
a local-model routing observation, not market validation or authorization to
contact, market to, or track any organization.

## Closure

- **Full ceiling used:** 27 local workers completed with exit code 0; the 28th
  attempt, `OR35-01`, was recorded as a preflight memory block rather than
  forcing Ornith to load unsafely.
- **No hidden substitution:** All worker traces name `ollama` and their concrete
  local model. There was no OpenRouter/provider fallback, residency change,
  timeout kill, outbound action, login, scraper, or monitor.

## Model and tool utility

- **Llama comparison work:** `llama3.3:70b` had the strongest average (7.3/10
  across three isolated tasks), but its two 8/10 results still relied on
  snippets; it is useful for bounded comparison, not source verification.
- **Qwen account work:** `qwen3.6:35b-a3b` averaged 6.6/10 across seven tasks
  and produced the first usable account context, with large variance from 1 to
  9; require a schema/check step before relying on it.
- **GPT category work:** `gpt-oss:20b` averaged 6.2/10 across ten tasks. It was
  strongest on narrow category/language work but also produced unsupported
  page-opened claims and one out-of-scope survey proposal.
- **DeepSeek and Ornith:** DeepSeek averaged 4.8/10 (format/tool-use failures);
  Ornith averaged 3.7/10 across three completed tasks and first failed the
  memory-fit gate. Neither advances to follow-up CDP work from this run.

## Verified CDP context

- **Gulf Coast workforce signal:** Public pages document workforce development
  and Clinical Academy activity, not a wellness need or buyer path.
  [R4-E01](../evidence-cards/R4-E01-gulf-coast-workforce-development.md)
- **Category language and strain:** HCAI/Calm, HRSA, and SAMHSA supply context
  about retention, workforce strain, funding, and alternative language—not a
  MindfulText outcome or demand signal. [R4-E02](../evidence-cards/R4-E02-category-retention-and-workshop-language.md), [R4-E04](../evidence-cards/R4-E04-hrsa-workforce-strain.md), [R4-E05](../evidence-cards/R4-E05-samhsa-category-funding-context.md)
- **Employer-practice context:** Santé and Heritage publicly describe staff
  support practices. That can indicate existing alternatives or context; it
  does not reveal unmet need, authority, procurement readiness, or intent.
  [R4-E03](../evidence-cards/R4-E03-sante-public-workforce-context.md), [R4-E06](../evidence-cards/R4-E06-sante-heritage-workforce-wellness.md)

## Disqualified assumptions

- **Category concern is not demand:** Workforce strain, training, retention
  programs, or wellness days do not establish a market, willingness to pay, or
  any product effect.
- **A passing score is not proof:** The 8/10 threshold means a worker followed
  enough of this bounded task to receive follow-up work; it does not validate
  its findings without a direct source check.
- **Search is not page evidence:** Snippet-only output, extra searches, wrong
  task IDs, and malformed schemas were common. Such claims remain in `raw/` as
  dogfood evidence, not CDP findings.

## Next bounded decision

- **Choose the next research method:** Either conduct a small, manual
  source-opening pass against the six account cards with the existing public
  web tools, or pause [[growth/SEGMENTS#seg-002--community-behavioral-health-providers|SEG-002]] account research. Do not add a new extraction
  provider, outreach, tracking, campaign, or buyer-conversation step without
  a separate Mark decision.

## Related records

- [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004-Local-Research-Sprints]]
- [[growth/CDP-001|CDP-001]]
- [[growth/SEGMENTS|SEG-002]]
- [[growth/HYPOTHESES|GH-004]]
- [[growth/GTM-MOTIONS|GTM-001]]
- [[decisions/2026-07-13-segment-linked-runs|DR-29]]
- [[decisions/2026-07-14-customer-development-plan|DR-31]]
- [[decisions/2026-07-14-run-004-cdp-local-research|DR-32]]
- [[runs/run-004/RUN-004-Local-Research-Sprints|RUN-004]]
