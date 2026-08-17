# MindfulText Epoch 1 — Decision Record — 2026-08-14 — W4a-L2b custom reflection direction

Last updated: 2026-08-14 14:47:48 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-50]]

## DR-50 — W4a-L2b Formbricks-inspired small custom reflection

Mark selects a **small custom, Formbricks-inspired reflection** for the W4 prototype. MindfulText will take inspiration from useful interaction patterns—short fixed-choice steps, clear progress, and immediate non-scored guidance—without adopting Formbricks Cloud or self-hosted Formbricks.

### Chosen prototype boundary

- Build only the approved fixed-choice reflection and immediate useful result in the existing MindfulText public experience when separate implementation approval is granted.
- Do not add a survey-builder platform, Docker service, Formbricks account, database, user accounts, response warehouse, admin console, provider credentials, or provider-connected workflow.
- Keep invitation-level activity private through the approved opaque token. Keep reflection answers separate from identity and do not collect names, email addresses, or free text through the reflection.

### Identity connection: future, explicit, and voluntary

If a later dated decision authorizes it, the connection must happen **after** results and through a separate optional follow-up action: the visitor deliberately chooses a conversation/demo/save request, enters their contact details in that separate form, sees the purpose of the follow-up, and submits. Growth Ops may then create a consent/evidence record linking that request to the opaque invitation reference. The reflection answers remain unassociated unless a later decision explicitly approves otherwise. This is distinct from DR-51's pre-invitation LinkedIn-profile-to-invitation mapping.

This is not part of the prototype build. DR-49 continues to defer recipient-facing attribution disclosure and expanded identity-association work until significant revenue.

## Consequences

- W4a-L2b is complete as a direction choice; `W4b-L1a` through `W4b-L2d` remain blocked pending separate implementation, data, collection, and deployment approvals.
- Formbricks remains a later reconsideration option only if buyer learning or repeated operating pain justifies a provider-backed survey system.
- This decision does not authorize code changes, credentials, collection, deployment, Production, LinkedIn outreach, or any external send.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-w4a-l2a-fit-reflection-direction|DR-48]]
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
