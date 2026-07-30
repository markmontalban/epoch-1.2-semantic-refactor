Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

# [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] — Access speed and claims exposure, scored separately (R5c)

Two axes, scored independently and never combined into a single number. Mark
asked for this structure specifically so that "fastest to integrate" cannot
quietly become "right thing to build." The two tables below should be read as
two different questions with two different answers.

**Nothing in this document is regulatory advice.** It flags exposure and points
at the public FDA guidance a founder should read and then take to counsel
before making any claim.

---

## Axis 1 — Access speed

Scored 1–5, higher is faster. Gate and cost facts come from
`WEARABLE-SIGNAL-STANDARD.md` §C, which already carries the vendor citations;
they were not re-researched.

| | Blood pressure | Sleep | Burnout |
|---|---|---|---|
| Required source | Withings | Oura, Whoop, Garmin, or Polar | Same as sleep, **plus self-report** |
| Gate to first real user | **None.** Withings Public API is self-serve and open to companies with no contract | Oura: self-serve, **10-user cap** until reviewed. Whoop: self-serve, **10-member cap** until approved. Garmin: business-use only, human approval, 1–4 week integration. Polar: self-serve client registration | **None for self-report** — it needs no vendor at all. The existing Garmin Connect IQ build already posts to a webhook and requires no Developer Program |
| Licence cost | $0 | $0 across Withings, Oura, Polar; Garmin publishes no fee but warns some metrics may require one (**unverified**) | $0 |
| Realistic time to first subscriber | **1–2 weeks** (OAuth + one mapper) | **1–2 weeks** for up to 10 users | **Days** using self-report alone; 1–2 weeks with a wearable attached |
| Time to the 11th subscriber | Unchanged — no cap exists | **Unknown.** Oura and Whoop reviews have no published duration | Unchanged for self-report; same unknown once a gated vendor is attached |
| **Score (alpha, ≤10 subscribers)** | **5** | **4** | **5** |
| **Score (launch, >100 subscribers)** | **5** | **2** | **3** |

### What this axis actually says

**At alpha scale the three are effectively tied, and the signal standard
already predicted this.** §G3 notes that the 10-user caps at Oura and Whoop are
"almost certainly large enough to run an entire alpha without approval." If the
alpha's job is to answer a question rather than to serve a market, the caps are
a launch problem, not a research problem. Blood pressure's genuine and
uncontested advantage — no gate, ever — therefore only starts paying at the
eleventh subscriber.

**Burnout has an access property the other two do not: it can run with no
vendor at all.** Self-report is a first-class family in the standard (§A3), and
an offer built on a daily one-tap check-in has zero gate, zero latency risk and
zero device cost. That makes burnout tied-fastest at alpha even though its
device sources are the most gated of the three.

**Everything about this axis is a schedule fact.** None of it is evidence that
any candidate is the right market. It is recorded here, separately, precisely so
it cannot be mistaken for that.

---

## Axis 2 — Claims exposure

Scored 1–5, higher is **more** exposure. The relevant public reference is the
FDA's *General Wellness: Policy for Low Risk Devices*, reissued 6 January 2026,
superseding the 2019 version.

The 2026 guidance keeps a two-factor test — the product must be intended only
for general wellness use, and must be low risk — and recognises two kinds of
acceptable intended use: purely wellness claims (it names weight management,
fitness and **sleep**), and disease-referenced claims tied to a healthy
lifestyle where it is well understood that the lifestyle may reduce risk or help
someone live well with a chronic condition. Notably for this decision, the 2026
revision newly allows non-invasive products that estimate or output physiologic
parameters **including blood pressure** to qualify, if the intended use is
strictly wellness-focused.

The guardrails are where the exposure lives. A product falls outside the policy
if it substitutes for an FDA-cleared device or claims clinical equivalence,
accuracy, or "medical grade"; includes outputs that guide clinical management;
reports values that mimic those used clinically without validation; or
**measures, estimates or reports physiologic values for medical purposes such as
screening, diagnosis, monitoring, alerting or management of a disease**.

| | Blood pressure | Sleep | Burnout |
|---|---|---|---|
| What the offer implies clinically | That practice relates to a diagnosed cardiovascular condition. The subject matter *is* a disease | That practice relates to rest. Sleep is named in the guidance as a purely-wellness claim | That practice relates to work stress. Burn-out is classified in ICD-11 (QD85) as an **occupational phenomenon and explicitly not a medical condition** **[cited]** |
| Closest guardrail | "Monitoring or alerting" of a disease, and non-substitution for an FDA-cleared device — the Withings cuff *is* one | Drifting from "sleep" into insomnia or sleep apnoea | Drifting from work stress into depression or anxiety, which *are* medical conditions |
| Right target audience | Adults who already measure at home under their clinician's direction and want a calming habit attached to it. **Not** people using it instead of care, and not undiagnosed people seeking reassurance | Adults who sleep poorly and are not seeking treatment. The broadest defensible audience of the three | Working adults under sustained load who are not in mental-health crisis. Employer-sponsored delivery adds a second exposure that is not clinical at all — surveillance and privacy |
| Temptation to overclaim | **Severe.** "Lower your blood pressure" is the most saleable sentence available and the least defensible | Low. "Sleep better" is already permitted framing | Moderate. "Prevent burnout" implies an outcome the product cannot deliver |
| **Score** | **5 — high** | **2 — low** | **3 — moderate** |

### Why blood pressure scores highest

Three compounding reasons, and they are structural rather than fixable by
wording.

**The offer would sit downstream of a cleared medical device.** Withings BP
monitors are FDA-cleared products. A messaging service that consumes their
readings and reacts to them is, functionally, doing something with clinical
measurements — and "monitoring" and "alerting" on a disease are named as
outside the general wellness policy. Offer A in `OFFER-DEFINITIONS.md` is
deliberately designed to trigger on *the act of measuring* rather than on *the
value measured*, which is what keeps it on the right side of that line. That is
a real constraint, and a competitor willing to ignore it will look better.

**The audience arrives with a diagnosis.** Nearly half of US adults have
hypertension and 59.2% of them are aware of it **[cited]**. A person who links
a cuff to a mindfulness texting service is very likely managing a diagnosed
condition. Everything the product says will be received in that context whether
or not the copy intends it.

**The evidence temptation is strongest here.** Blood pressure produces a number
that moves, which makes a before-and-after chart trivially easy to produce and
trivially easy to misread as efficacy. The run card forbids asserting clinical
efficacy for any candidate; this is the candidate where that boundary would be
under the most commercial pressure.

### Why sleep scores lowest

Sleep is the only candidate whose core promise sits inside the examples the FDA
names as purely wellness claims. The offer needs no disease reference at all to
be compelling, which means the safe version and the saleable version are the
same version. That is a rare alignment and it is the strongest single argument
in this whole run.

### Why burnout sits in the middle

The ICD-11 classification is genuinely helpful: burnout is not a medical
condition, so a burnout offer is not making a disease-referenced claim in the
first place. The exposure is adjacency — burnout language shades into
depression and anxiety, which *are* conditions, and the audience is by
definition people under strain. Add an employer channel
([[growth/ICP-REGISTRY|ICP-005]], [[growth/SEGMENTS|SEG-001]]) and a second,
non-FDA exposure appears: what an employer may see, infer, or be told about an
employee's physiological signals.

---

## The two axes side by side

| Candidate | Access (alpha) | Access (launch) | Claims exposure |
|---|---|---|---|
| Blood pressure | 5 | 5 | **5 (high)** |
| Sleep | 4 | 2 | **2 (low)** |
| Burnout | 5 | 3 | 3 (moderate) |

Deliberately **not** summed. Read across, not down: blood pressure wins access
outright and loses claims outright; sleep is the mirror image; burnout is
second on both. The recommendation in `RUN-021-REPORT.md` states which axis it
let decide, and why.

## Related records

- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021 run card]]
- [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]
- [[runs/run-021/outputs/SIZING-MODEL|sizing model]]
- [[runs/run-021/outputs/RUN-021-REPORT|run report]]
- [[runs/run-021/outputs/SOURCES|sources]]
