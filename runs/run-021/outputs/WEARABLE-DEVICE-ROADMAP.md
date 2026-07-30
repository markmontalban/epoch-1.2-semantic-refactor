Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

# [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] — Specialized and healthcare-adjacent device roadmap (R5d)

Beyond the consumer watches and rings already covered in
`WEARABLE-SIGNAL-STANDARD.md` §B, this is the roadmap for cuffs, rings,
CGM-adjacent devices and clinical-grade / remote-patient-monitoring hardware.
Devices are sorted into three buckets that mean genuinely different things for
a seed-stage company: what you can reach **today**, what you can reach **only
by shipping a mobile app**, and what you can reach **only through a commercial
partnership**.

This document does not decide whether MindfulText ships a mobile app. It prices
that decision per candidate, which is what R5e asks for.

---

## Bucket 1 — Reachable today, server-side, no partnership

| Device family | Source | What it gives you | Which candidate it serves |
|---|---|---|---|
| **Connected BP cuffs** (Withings BPM Connect and family) | Withings Public API — self-serve, free, no contract, webhook + pull | Systolic, diastolic, pulse at the moment of measurement. The best-behaved latency in the whole matrix | **Blood pressure only.** No other candidate needs it |
| **Smart rings** (Oura) | Oura API — self-serve, free, **10-user cap** pending review | Best-in-class sleep, HRV, daily stress, resilience, and first-class user tags | Sleep, burnout |
| **Straps** (Whoop) | Whoop API — self-serve, **10-member cap** pending approval | Sleep, HRV, recovery, strain | Sleep, burnout |
| **Sport watches** (Polar) | Polar AccessLink — self-serve client registration | Sleep Plus Stages, Nightly Recharge, continuous HR, Elixir SpO2 / skin temp / wrist ECG | Sleep, burnout |
| **Sleep mats** (Withings Sleep Analyzer) | Same Withings API, `appli` code 4 | Sleep without anything on the body — relevant to people who will not wear a device at night | Sleep |
| **The watch you already own** (Garmin Instinct 2X via Connect IQ) | Your own webhook; Connect IQ is free and needs no Developer Program | Near-real-time HR, stillness, and the on-device rule already running | Burnout (and any near-real-time trigger) |

Worth noticing: the ungated bucket already covers **every candidate**, not just
blood pressure. What blood pressure uniquely has is an ungated path with **no
user cap**.

## Bucket 2 — Reachable only if you ship a mobile app

| Device family | Barrier | What you forgo by not shipping |
|---|---|---|
| **Apple Watch and anything in Apple Health** | HealthKit is on-device only; there is no server-side Apple Health API | The single largest consumer wearable base, plus user-entered BP that people record from any cuff. Base size **unverified** |
| **Android wearables via Health Connect** | On-device store reached over IPC by the Jetpack SDK; per-type consent declared in Play Console | Android-side sleep and a BP record type |
| **Samsung Health devices** | Android app only; distribution requires a partnership; BP is region- and regulator-restricted (**unverified**) | Samsung's installed base |
| **Omron cuffs via the Connectivity SDK** | Omron offers an SDK for direct device integration | Omron is the most widely owned home BP brand; SDK route needs an app |

Aggregators do not solve this. Terra, Junction, Rook and Spike all resell the
same upstream gates and none of them make Apple or Samsung stop requiring a
mobile app — they sell you an SDK to put in the app you still have to ship
(`WEARABLE-SIGNAL-STANDARD.md` §C4).

## Bucket 3 — Reachable only through a commercial partnership

| Device family | Route | Gate |
|---|---|---|
| **Omron cuffs, server-to-server** | Omron Connect Create — Partner API and Data Service Platform, OAuth 2.0, server-to-server | "Approved partner applications" only; requires a signed contract with Omron Healthcare **[cited]** |
| **CGM (Dexcom)** | developer.dexcom.com — registration is free and **sandbox access is immediate**; Limited Access allows **up to 5 real users**; commercial scale requires the Partnership Interest Questionnaire and a Data Licensing Agreement **[cited]** | The 5-user Limited tier is enough to prototype, not to launch |
| **CGM (Abbott Libre)** | Not researched in this run | **Unverified** |
| **Clinical-grade / RPM platforms** | Not researched in this run. RPM devices generally land in an EHR or an RPM vendor's platform, not in a consumer-authorised API | **Unverified.** Assume partnership-only and assume PHI handling obligations that MindfulText is not currently set up for |

The Dexcom shape is worth internalising because it is the pattern across this
whole bucket: **free and instant to build against, trivially capped for real
users, and a months-long commercial process to exceed the cap.** Plan the
timeline at the start or discover it at the worst moment.

---

## What each candidate actually needs

**Blood pressure** needs exactly one device family and has exactly one ungated
supplier. That is a concentration risk as much as it is a convenience: if
Withings changes its terms, the candidate has no server-side fallback, because
no other cloud source in the matrix carries BP at all. Omron would be the
obvious second supplier and it is partnership-gated. **Mobile-app cost: highest
upside.** An app unlocks user-entered BP from Apple Health and Health Connect
plus the Omron SDK — this is the candidate where an app most expands the
reachable pool, and simultaneously the candidate that least needs one to start.

**Sleep** has four independent server-side suppliers today, which is real
resilience. **Mobile-app cost: moderate.** An app adds Apple Watch, the largest
sleep-tracking population, but the candidate is fully viable without it.

**Burnout** has the same four suppliers plus a family that needs no device.
**Mobile-app cost: lowest.** Self-report arrives by text, and text is the
product. An app adds fidelity, never viability.

## What is not on this roadmap, and why

Cuffless BP wearables, minimally invasive glucose sensors, and clinical-grade
RPM hardware were not evaluated. Two reasons. First, the FDA's 2026 general
wellness guidance draws a firm line at invasiveness — it indicates a glucose
wearable using minimally invasive microneedle technology is not low risk even
with purely wellness claims. Second, anything genuinely clinical-grade brings
PHI handling obligations, and no PHI touches MindfulText today. Both belong in
a later run with its own boundaries.

## Related records

- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021 run card]]
- [[runs/run-021/outputs/OFFER-DEFINITIONS|offer definitions]]
- [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]
- [[runs/run-021/outputs/SOURCES|sources]]
