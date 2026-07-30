# MindfulText Epoch 1 — Decision Record — 2026-07-21 — Product opportunity ledger

Last updated: 2026-07-27 — recorded by: Codex

## DR-37 — Product opportunity ledger and preliminary roadmap ranking

**Decision:** At Mark's direction, create `PRO-###` as the stable internal
identifier for a **product opportunity** and record the supplied product
roadmap notes in a ranked ledger.

**Rationale:** The existing repository has durable records for segments,
audiences, growth hypotheses, social ideas, and customer-development work, but
no equivalent record for product/platform opportunities. Product-discovery
practice commonly keeps ideas separate from committed delivery work; a prefix
is local convention rather than an industry standard. `PRO` is concise and
readable in this project while the record itself uses the standard
plain-language term *idea*.

**Scope:** [Product Opportunity Ledger](../product/PRODUCT-IDEAS.md) contains
18 records, a lightweight, explicitly provisional ranking, dependencies, and
an intake template. It ranks authentication, application data, and Stripe
entitlements first as foundational shaping decisions; [[product/PRODUCT-IDEAS|PRO-014]]/[[product/PRODUCT-IDEAS|PRO-015]] link
guided reflective onboarding and one-focus personalization to [[growth/HYPOTHESES#gh-005--reflective-onboarding-to-a-personalized-mindfultext-rhythm|GH-005]]; it
parks headless WordPress absent a demonstrated blocker, excludes AI-generated
clinical or efficacy claims from implementation, and captures a separately
tagged (`roadmap:agent-features`) agent-feature roadmap in [[product/PRODUCT-IDEAS|PRO-017]], and
captures the coach-supported manager-vertical network as [[product/PRODUCT-IDEAS|PRO-018]] for
service-model shaping and validation only.

**Authority and boundary:** This creates neither a product build plan nor an
approval to change the application, authentication, billing, database, email,
CRM, mobile app, WordPress stack, data practices, or external claims. The
website-modernization playbook continues to govern its defined scope. Each
`PRO-###` entry needs a separate decision before it becomes committed delivery
work.

**Affected documents:** `../product/PRODUCT-IDEAS.md`,
`../growth/HYPOTHESES.md`, `../growth/README.md`,
`DECISION-REGISTER.md`, and `../README.md`.

**Status:** Founder-directed ledger created. All entries are captured or
preliminary only; none is committed.
