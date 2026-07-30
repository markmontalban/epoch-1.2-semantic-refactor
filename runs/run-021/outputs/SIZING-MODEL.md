Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

# [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] — Bottom-up sizing model (R5b)

Every line below is either a **[cited]** public figure with a URL in
[[runs/run-021/outputs/SOURCES|SOURCES]], or an **[assumption]** stated in the
open so you can change it and re-run the arithmetic. Nothing is a forecast. If
you disagree with an assumption, the number moves — that is the point of showing
the multiplication.

**Read the headline first: this model does not cleanly separate the three
candidates.** It separates them by roughly an order of magnitude, and then that
separation turns out to rest almost entirely on one third-party estimate that
the vendor in question has never published. Section 6 explains why, and
`FOCUS-DECISION-MATRIX.md` is where the decision actually gets made.

---

## 1. Shared inputs

| Input | Value | Basis |
|---|---|---|
| US resident population, 1 Jul 2025 | 341,784,857 | **[cited]** US Census Bureau Vintage 2025, as summarised publicly |
| Share under 18 | 21.5% | **[cited]** Census age structure, 2024 estimate |
| **US adults 18+** | **≈ 268.3M** | **[derived]** 341,784,857 × 0.785. The exact Census table (`SCPRC-EST2025-18+POP`) was not downloaded, so treat this as approximate, not authoritative |
| **ARPU** | **$96/year** ($8/month) | **[assumption]** MindfulText has no published price. Cross-check: Calm Premium is $69.99/year **[cited]**; Oura membership is a comparable recurring wellness subscription. $96 is therefore at the upper end of consumer-wellness willingness to pay and should be treated as optimistic |

**The funnel used for every candidate**, so the three are comparable:

```
addressable install base (US, server-side reachable)
  × reach   (share who ever encounter MindfulText)      = eligible pool
  × convert (share of those who start and keep paying)  = subscribers
  × ARPU                                                = SOM
```

- **Reach = 1%** **[assumption]** — MindfulText has no identified acquisition
  channel for any of the three. One percent of a reachable install base is a
  placeholder for "a channel exists and works modestly." It is the weakest
  number in this document and it moves every SOM linearly.
- **Convert = 10%** **[assumption]** — of people who encounter the offer and
  are eligible, one in ten becomes a paying subscriber. Optimistic for a cold
  consumer funnel, defensible for a warm or partner-introduced one.

**SAM** here means the annual revenue if every US server-side-reachable device
owner in that category subscribed at $96. It is a ceiling, not an expectation.
Section 5 shows it is an implausible ceiling.

---

## 2. Candidate A — blood pressure

Withings is the only server-side source in the capability matrix that carries
blood pressure at all; Garmin, Oura, Whoop and Polar have none
(`WEARABLE-SIGNAL-STANDARD.md` §B). So the install base for this offer is
Withings, and only Withings.

| Step | Arithmetic | Result | Basis |
|---|---|---|---|
| Withings global active users | — | 15,000,000 | **[cited]** Withings 2025 corporate release |
| US share of that base | × 40% | 6,000,000 | **[assumption]** — Withings states the US is its #1 market by revenue **[cited]** but does not publish a user split. **Unverified.** |
| Share who are "medical" users | × 24% | 1,440,000 | **[cited]** ratio — Withings reports 3.6M medical users of 15M total (3.6 ÷ 15 = 24%) |
| Share whose medical device is a BP monitor | × 50% | **720,000** | **[assumption]** — "medical users" spans cuffs, ScanWatch, Sleep Analyzer and Body scan. **Unverified.** |
| **SAM** | 720,000 × $96 | **$69.1M** | |
| Eligible pool | × 1% reach | 7,200 | **[assumption]** |
| Subscribers | × 10% convert | 720 | **[assumption]** |
| **SOM** | 720 × $96 | **$69,120/year** | |

**Population sanity check, not a market claim.** 47.7% of US adults have
hypertension **[cited]**, so 268.3M × 0.477 ≈ 128M adults. At $96 that is a
$12.3B population-level ceiling — and the gap between $12.3B and the $69.1M SAM
is the whole story of this candidate: **the condition is enormous and the
server-side-reachable slice of it is tiny.** Separately, 45% of US adults report
owning a blood-pressure monitor **[cited, commissioned consumer survey — treat as
indicative]**, but the overwhelming majority of those are not connected devices
on a platform with a public API, and MindfulText cannot reach them.

---

## 3. Candidate B — sleep

Four server-side sources carry sleep. Polar publishes no user figure, so it is
counted as zero and this total is therefore an understatement.

| Source | Published figure | US-share assumption | US reachable |
|---|---|---|---|
| Oura | 5,500,000 rings sold cumulatively since 2015 **[cited]** × 70% still active **[assumption]** = 3,850,000 | 50% **[assumption, unverified]** | 1,925,000 |
| Whoop | 2,500,000+ members, Mar 2026 **[cited]** | 60% **[assumption, unverified]** | 1,500,000 |
| Garmin | ~45,000,000 active Garmin Connect users **[third-party estimate; Garmin has never published a user count — see §6]** | 30% **[assumption, unverified]** | 13,500,000 |
| Polar | not published — **unverified** | — | 0 |
| Sum | | | 16,925,000 |
| Less multi-device overlap, 10% **[assumption]** | | | **15,232,500** |

| Step | Arithmetic | Result |
|---|---|---|
| **SAM** | 15,232,500 × $96 | **$1.462B** |
| Eligible pool | × 1% reach | 152,325 |
| Subscribers | × 10% convert | 15,233 |
| **SOM** | 15,233 × $96 | **$1.462M/year** |

**Population sanity check.** 30.5% of US adults slept under seven hours on
average in 2024, and 15.4% had trouble falling asleep **[cited]**. That is
268.3M × 0.305 ≈ 81.8M adults with short sleep — smaller than the hypertensive
population but with a far larger server-side-reachable overlap.

---

## 4. Candidate C — burnout

Burnout draws on the same autonomic, sleep and activity sources as Candidate B,
so it inherits the same device pool. It differs in one direction only: the
offer is scoped to working adults.

| Step | Arithmetic | Result | Basis |
|---|---|---|---|
| Device pool (identical to Candidate B) | — | 15,232,500 | see §3 |
| Share who are employed | × 70% | **10,662,750** | **[assumption]** — wearable owners skew working-age, but no cited split exists. **Unverified.** |
| **SAM** | 10,662,750 × $96 | **$1.024B** | |
| Eligible pool | × 1% reach | 106,628 | |
| Subscribers | × 10% convert | 10,663 | |
| **SOM** | 10,663 × $96 | **$1.024M/year** | |

**Population sanity check.** Gallup's Q4 2025 US data reports 31% of full-time
employed women and 23% of men saying they very often or always feel burned out,
and two-thirds of full-time US workers experiencing burnout at least sometimes
**[cited]**. A widely repeated "44% of employees" figure attributed to a 2025
Gallup report reached us only through a secondary blog and is **not used** in
this model. The size of the US full-time workforce was not verified from a
primary source, so no population ceiling is computed for this candidate.

---

## 5. Top-down cross-check, and the gap

The nearest top-down analogue for what MindfulText sells is the meditation and
mindfulness app category.

| Top-down figure | Value | Source type |
|---|---|---|
| Global meditation management apps, 2025 | $2.20B | **[cited]** Grand View Research |
| North America share of that market, 2025 | 43.22% | **[cited]** same |
| **Implied North American category revenue** | **≈ $0.951B** | **[derived]** 2.20B × 0.4322 |
| US corporate wellness services, 2025 | $12.8B | **[cited]** IBISWorld — relevant only to a future B2B burnout motion |
| Global sleep tech devices, 2025 | $25.3B–$29.6B across firms | **[cited]** — overwhelmingly hardware, **not comparable** to a subscription service |

**The gap, reported rather than reconciled.** My three bottom-up SAMs total
$69.1M + $1.462B + $1.024B = **$2.555B**, which is roughly **2.7× the entire
North American meditation-app category**. That is not a discovery about market
opportunity; it is proof that the SAM line is a headcount-times-price ceiling
and should never be quoted as revenue that exists. If Mark uses any figure from
this document in a fundraising conversation, **use the SOM, not the SAM**, and
say what the SOM assumes.

The cross-check runs the other way too, and this is the more interesting half.
If MindfulText captured 1% of the North American meditation-app category, that
would be **$9.5M** — about 6.5× my sleep SOM of $1.46M. So the SOMs are
*conservative* relative to top-down, while the SAMs are *implausible* relative
to it. The honest read is that the bottom-up model is well-calibrated at the
subscriber level and meaningless at the ceiling level.

---

## 6. Why this model does not separate the candidates

Three reasons, in descending order of how much they should bother you.

**One unverified number carries the entire ranking.** Sleep and burnout beat
blood pressure by roughly 20× and 15× respectively, and that gap comes almost
entirely from 13.5M assumed US Garmin users — a figure derived from a third
party's reasoning about segment revenue and shipments, because Garmin has never
published a user count and describes its base only as "tens of millions"
**[cited]**. Remove Garmin from the model and the picture changes materially:

| Candidate | SAM excl. Garmin | SOM excl. Garmin |
|---|---|---|
| Blood pressure | $69.1M | $69,120 |
| Sleep | 3,082,500 × $96 = **$296M** | 3,083 × $96 = **$295,968** |
| Burnout | 2,157,750 × $96 = **$207M** | 2,158 × $96 = **$207,168** |

That is a 4.3× spread rather than a 21× spread — same order of magnitude, well
inside the error bars of assumptions like "40% of Withings users are American."

**Sleep and burnout are not separable at all.** They run on the same devices,
the same people, and differ only by a 70% employment assumption I invented. A
1.4× ratio produced by a single unverified multiplier is not a market finding.

**All three target overlapping populations.** A stressed 45-year-old who owns a
wearable is plausibly in all three offers' addressable populations
simultaneously — hypertension prevalence is 52.5% at ages 40–59 **[cited]**,
short sleep peaks at 34.5% at ages 50–64 **[cited]**, and burnout is
concentrated in exactly the working population that buys these devices. The
three candidates are not three markets. They are three doors into one.

**Verdict for this task: sizing is INCONCLUSIVE as a tie-breaker.** It rules
nothing out and ranks the candidates only through numbers that cannot bear the
weight. Per the run's stop condition, the tie-breaking evidence is named in
`RUN-021-REPORT.md` §"What would break the tie."

## Related records

- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021 run card]]
- [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]
- [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]
- [[runs/run-021/outputs/RUN-021-REPORT|run report]]
- [[runs/run-021/outputs/SOURCES|sources]]
