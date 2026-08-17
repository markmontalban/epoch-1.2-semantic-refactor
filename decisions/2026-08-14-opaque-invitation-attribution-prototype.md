# MindfulText Epoch 1 — Decision Record — 2026-08-14 — opaque invitation attribution prototype

Last updated: 2026-08-14 15:03:33 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-49]]

## DR-49 — W4 prototype opaque invitation attribution

Mark amends the W4 prototype direction: MindfulText will retain private invitation-level attribution through an opaque recipient token, but will not show a visitor-facing attribution disclosure in the prototype.

### Prototype rule

- Each manually approved invitation may use a random, unguessable token with no PII or encoded metadata in its public URL.
- Growth Ops may privately map that token to the invitation, prospect, organization, campaign, message, and variant for evidence purposes.
- The public experience does not state that activity may be tied to the invitation and does not present an invitation-attribution disclosure.
- A token match remains evidence of activity on an invitation, not proof that the named recipient visited: scanners, previews, and forwarded links remain `forwarded_or_unknown` until voluntary identification.

### What remains unchanged

- This changes visitor-facing disclosure only. It does not authorize named answer capture, identity association, provider activation, public data collection, deployment, Production, or outreach.
- The approved fixed-choice reflection, answer/PII prohibitions, non-scored results, and no-automatic-association boundary remain in force.
- [[decisions/2026-08-14-w4a-l2b-custom-reflection-direction|DR-50]] later selects the small custom, Formbricks-inspired reflection; it does not change this attribution boundary.

### Deferred until significant revenue

Recipient-facing attribution disclosure, broader identity-association UX, and any expansion of response collection or provider-connected workflow are deferred until MindfulText is making significant revenue and Mark records a new dated decision that defines the exact scope and evidence trigger.

[[decisions/2026-08-14-linkedin-profile-invitation-attribution|DR-51]] and [[decisions/2026-08-14-w7-unipile-linkedin-attribution|DR-52]] create a narrow exception for the limited W7 manual beta: the Unipile-resolved public LinkedIn profile may be privately mapped to its invitation and invitation-level activity. It does not authorize answer-to-profile association or change the no-disclosure rule.

## Consequences

- DR-46's requirement to state invitation attribution plainly is superseded for the prototype only.
- DR-47's approved invitation-disclosure block is retained as historical provenance but is not prototype copy.
- W4's internal opaque-token, forwarding, scanner, privacy, and evidence boundaries remain unchanged; only the visitor-facing disclosure is removed.

## Boundary

This decision authorizes documentation reconciliation only. It does not authorize code changes, credentials, providers, public collection, deployment, Production, LinkedIn outreach, or any external send.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-w4a-l1a-recipient-presentation|DR-47]]
- [[decisions/2026-08-14-w4a-l2a-fit-reflection-direction|DR-48]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
