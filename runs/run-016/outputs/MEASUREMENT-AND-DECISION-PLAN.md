# Measurement and Decision Plan

## Learning question

Does a value-giving guided reflection make the first MindfulText experience
clearer and more compelling than a generic trial path for [[growth/ICP-REGISTRY|ICP-021]], without
creating consent confusion or collecting unnecessary sensitive data?

This is not yet a live experiment.

| Path | First value exchange | Personalization | Purpose |
| --- | --- | --- | --- |
| Control | Generic MindfulText explanation and trial choice | None | Baseline clarity and intent |
| Variant | Guided reflection → Your MindfulText Rhythm page → trial choice | One focus, timing, format, and tone chosen explicitly | Test whether personal framing aids activation |

Keep the offer, price, eligibility, and consent language identical in both
paths. Otherwise the comparison cannot isolate onboarding.

## Future event definitions

Instrument only after separate implementation approval and a clear
retention/deletion policy.

| Event | Definition | Why it matters |
| --- | --- | --- |
| `onboarding_started` | First reflection screen viewed | Entry into value exchange |
| `reflection_completed` | Last reflection choice submitted | Comprehension and friction |
| `rhythm_page_viewed` | Personal page displayed | Experience delivery |
| `trial_started` | Trial activation confirmed | Immediate activation decision |
| `first_practice_started` | First practice opened or configured text opted into | First meaningful action |
| `day_7_active` | A pre-defined meaningful action occurs in days 1–7 | Early activation, not efficacy |
| `preferences_changed` / `preferences_deleted` | Member uses an explicit control | Control discoverability and trust |

Avoid properties that record answers as health categories, emotional diagnoses,
or hidden behavioral scores. Retain only what is necessary.

## Decision gates

| Result | Evidence needed | Decision |
| --- | --- | --- |
| Advance | Separate approved prototype is understandable; consent and controls are clear; infrastructure is scoped; no safety boundary is breached | Request specific approval for a limited live comparison |
| Revise | People cannot explain how choices shape the experience, cannot find controls, or say the reflection feels extractive | Simplify prompts/page and retest prototype |
| Park | A useful experience requires sensitive data, misleading claims, or disproportionate platform build | Do not build; retain [[growth/HYPOTHESES#gh-005--reflective-onboarding-to-a-personalized-mindfultext-rhythm|GH-005]] as exploring |

Higher completion, trial start, or early activation would support the product
and conversion-path hypothesis. It would not prove improved mental health,
clinical efficacy, durable retention, willingness to pay, or suitability for
every audience.

## Related records

- [[runs/run-016/RUN-016-Reflective-Onboarding|RUN-016-Reflective-Onboarding]]
- [[growth/HYPOTHESES|GH-005]]
- [[growth/ICP-REGISTRY|ICP-021]]
- [[product/PRODUCT-IDEAS|PRO-001]]
- [[product/PRODUCT-IDEAS|PRO-002]]
- [[product/PRODUCT-IDEAS|PRO-003]]
- [[product/PRODUCT-IDEAS|PRO-004]]
- [[product/PRODUCT-IDEAS|PRO-010]]
- [[product/PRODUCT-IDEAS|PRO-014]]
- [[product/PRODUCT-IDEAS|PRO-015]]
- [[decisions/2026-07-21-product-opportunity-ledger|DR-37]]
