Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

# [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] — Report and alpha-focus recommendation (R5e)

## Recommendation

**Launch the alpha on sleep.** Blood pressure and burnout are sequenced, not
discarded — burnout second, blood pressure third.

**The claims axis drove this, not access and not sizing.** Sleep is the only
candidate whose core promise sits inside what the FDA's January 2026 general
wellness guidance names as a purely wellness claim, which means the safest
version of the offer and the most saleable version of the offer are the same
version. Nothing else in this run produced a separation that could carry a
decision.

Two things this recommendation explicitly is **not** resting on:

- **Not sizing.** The model could not separate the candidates in a way that
  survives inspection. Details in §"Did sizing separate them?" below.
- **Not the ungated Withings path.** That is a schedule argument, it favours
  blood pressure, and it is real — but at alpha scale it is worth far less than
  it appears, because Oura's and Whoop's 10-user caps are large enough to run
  an entire alpha without approval. Blood pressure's access advantage only
  begins to pay at the eleventh subscriber.

---

## The sleep alpha, sized

**SOM: approximately $1.46M in annual recurring revenue, from about 15,200 US
subscribers**, on a 15.2M US server-side-reachable install base across Oura,
Whoop, Garmin and Polar.

**The single most load-bearing assumption is that 1% of that install base ever
encounters MindfulText.** MindfulText has no identified acquisition channel, so
that 1% is a placeholder for "a channel exists and works modestly," and the SOM
moves linearly with it. Mark's interested sleep partner is the only identified
thing that could make it defensible — which is itself an argument for sleep
going first, since the same 1% is pure conjecture for the other two candidates.

Two caveats to carry with the number. The 1% figure is only credible if a
channel materialises. And the install base behind it depends heavily on a
Garmin user count that Garmin has never published; excluding Garmin, the sleep
SOM falls to roughly $296,000.

---

## Did sizing separate the candidates?

**No.** Full arithmetic is in `SIZING-MODEL.md`; the short version:

| Candidate | SAM | SOM | SOM excluding Garmin |
|---|---|---|---|
| Blood pressure | $69.1M | $69,120 | $69,120 |
| Sleep | $1.462B | $1.462M | $295,968 |
| Burnout | $1.024B | $1.024M | $207,168 |

The apparent 21× advantage for sleep over blood pressure collapses to 4.3× when
one unverified third-party estimate of Garmin's user base is removed — and 4.3×
sits comfortably inside the error bars of assumptions like "40% of Withings
users are American," which is a number I invented. Sleep and burnout are not
separable from each other at all: they run on the same devices and the same
people, and differ only by a 70% employment multiplier I also invented.

Underneath the arithmetic is a structural fact that no better data would fix.
**All three candidates target overlapping populations of stressed adults who
own wearables.** Hypertension prevalence peaks at 52.5% in ages 40–59; short
sleep peaks at 34.5% in ages 50–64; burnout concentrates in the working
population that buys these devices. A single 48-year-old could be in all three
addressable populations at once. These are three doors into one market, not
three markets — so the market axis was never going to pick a winner, and the
access and claims axes decided instead. That is what happened, and it is stated
here rather than dressed up as a market finding.

### What would break the tie

**One number: the median lag between when a sleep record is observed and when
it lands on the server, per vendor.** It is unverified for every cloud source
(no vendor publishes a latency SLA), it is the top risk in the signal standard
(§G1), and it decides whether the sleep offer is a mindfulness intervention or
a reminder that the morning already happened. Twenty to thirty real syncs
during a dogfood period would answer it. If sleep's p50 lands outside the
morning-after window, the recommendation in this report should be revisited and
burnout — which can trigger in seconds from the watch already in Mark's
possession — becomes the stronger first move.

---

## Deliverable: disclaimer and targeting language

Written out for use, not described. Take to counsel before publishing.

### Standing disclaimer — every surface

> MindfulText is a general wellness service. It is not a medical device, and it
> is not intended to diagnose, treat, cure, prevent, or mitigate any disease or
> condition. It does not replace care from a qualified professional. If you are
> in crisis or need urgent help, contact your local emergency number or dial or
> text 988 in the US.

### At sign-up — sleep alpha

> MindfulText sends you short mindfulness practices by text, timed around your
> own sleep patterns. It is a wellness practice, not a treatment. It will not
> diagnose or treat insomnia, sleep apnea, or any other sleep disorder, and it
> is not a substitute for talking to your doctor about how you are sleeping.

### On connecting a device

> You choose what you share, and you can disconnect at any time. We use your
> sleep summary to decide when to send you a practice and what to say. We do not
> interpret it clinically, and nothing we send is a medical assessment of your
> sleep.

### Targeting language — who this is for, in Mark's voice

> For adults who sleep badly more nights than they would like, are not looking
> for therapy or a sleep clinic, and would rather have a short practice arrive
> by text than open another app.

### Targeting language — who this is not for

> Not for people seeking treatment for a diagnosed sleep disorder, not for
> anyone in crisis, and not a replacement for care.

### Three sentences to never write

- Any version of "improves your sleep score," "fixes your sleep," or "treats
  insomnia."
- Any before-and-after comparison of a subscriber's own metrics presented as
  evidence that MindfulText caused the change.
- Any claim of clinical accuracy, clinical equivalence, or "medical grade" —
  the FDA guidance names those specifically as disqualifying.

---

## Sequencing the other two

**Burnout — second, and cheap to add.** It runs on the same four vendors, the
same integration, and the same envelope; the only new component is the
self-report family, which has no vendor gate at all. Once sleep is live,
burnout is a content and rules change rather than a new integration. Two things
to resolve before it ships: the employer-channel exposure that appears the
moment [[growth/ICP-REGISTRY|ICP-005]] or [[growth/SEGMENTS|SEG-001]] becomes a
distribution route (what an employer may see or infer about an employee's
signals is a privacy question, not an FDA one), and language discipline around
the boundary between work stress and depression or anxiety. Burnout itself is
helpfully *not* a medical condition in ICD-11, which is the one part of this
candidate that is easier than it looks.

**Blood pressure — third, and it needs a reason to move up.** It is a different
device family, a different supplier with no server-side fallback, a different
buyer, and by a distance the most claims work. It should move up the queue if
any of three things happen: a partner or care-delivery channel appears that
brings cuff-owning people with it; Withings-owning subscribers show up
organically in the sleep base; or an Omron or RPM partnership becomes available
that makes the supply less concentrated. Absent one of those, the ungated
Withings API is a convenience, not a reason.

---

## Mobile-app cost per option

The mobile-app question is separately scoped and is **not decided here**. What
each option costs if the answer stays "no app":

- **Sleep — moderate cost.** Four server-side suppliers make the candidate
  fully viable without an app. What you forgo is Apple Watch, likely the
  largest sleep-tracking population, whose size is **unverified**.
- **Burnout — lowest cost.** Self-report arrives by text and text is the
  product. An app adds fidelity, never viability.
- **Blood pressure — highest opportunity cost, lowest urgency.** An app would
  unlock user-entered BP from Apple Health and Health Connect plus the Omron
  SDK, which is a large expansion of a small pool. But Withings alone is enough
  to start, so the app is the thing that would make this candidate *big*, not
  the thing that would make it *possible*.

---

## Evaluation result

**PASS.** The run card's pass condition was one recommended focus, both axes
scored, an auditable assumption chain, and disclaimer language written. All four
are delivered.

One qualification, stated rather than buried: **the sizing task is
inconclusive on its own terms.** It could not separate the candidates, the
single named tie-breaking piece of evidence has been recorded, and the
recommendation was made on the claims axis instead. That is the run card's
"inconclusive" branch applied to one task, inside an otherwise passing run —
not a failure, and not a hidden one.

## What remains unverified

Things Mark should know are soft before quoting any of this externally.

- **Withings US user share.** The 40% assumption behind every blood-pressure
  number is not published anywhere. Withings confirms only that the US is its
  largest market by revenue.
- **The BP-cuff share of Withings "medical users."** The 3.6M-of-15M medical
  ratio is cited; the 50% of those who own a cuff specifically is invented.
- **Garmin's user count.** The ~45M active Garmin Connect figure is a third
  party's reasoned estimate. Garmin has never published a number and says only
  "tens of millions." This single figure drives the ranking between candidates.
- **US share for Oura, Whoop and Garmin.** All three assumptions, none published.
- **Polar's user base.** No public figure at all, so it counts as zero and the
  sleep install base is understated by an unknown amount.
- **Vendor delivery latency.** Unverified for every cloud source. This is the
  tie-breaker named above.
- **Oura's current commercial terms.** Only the superseded 2021 agreement was
  publicly reachable; whether Oura may start charging is unread.
- **Garmin's "some metrics may require a license fee."** Which metrics, and how
  much, is not published.
- **Duration of Google's Restricted-scope privacy and security review**, which
  matters if the Fitbit-successor path is ever taken before the September 2026
  sunset of the legacy API.
- **Apple Watch installed base**, which is the size of what a no-app decision
  forgoes.
- **US full-time workforce size**, so no population ceiling was computed for
  burnout. A widely repeated "44% of employees are burned out" figure reached
  us only through a secondary blog and was deliberately excluded.
- **Abbott Libre and clinical-grade RPM reachability** were not researched.

## Boundaries honoured

Public sources only. No contact with any vendor, customer, or partner. **The
interested sleep partner was treated purely as a distribution input to the reach
assumption and was not identified, researched, or approached.** No PHI, no
subscriber data, no spend, no accounts created, no publication, no scraping. No
code and nothing under `Projects/wearables/` was modified. No clinical efficacy
is asserted for any candidate. No `DR-` record was created — this is a
recommendation, and only Mark can approve it in a dated decision record.

## Related records

- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021 run card]]
- [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]
- [[runs/run-021/outputs/SIZING-MODEL|sizing model]]
- [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]
- [[runs/run-021/outputs/WEARABLE-DEVICE-ROADMAP|device roadmap]]
- [[runs/run-021/outputs/SOURCES|sources]]
- [[growth/ICP-REGISTRY|ICP-021]] · [[growth/ICP-REGISTRY|ICP-005]]
- [[growth/SEGMENTS|SEG-001]] · [[growth/SEGMENTS|SEG-002]]
