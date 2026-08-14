# W1 — Source and Security Preparation

> **Retained planning context.** This describes the original safe-source
> preparation boundary; it is not a live checklist. Current W1 status and any
> resume trigger live in the [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth
> System Master Checklist]].

## Outcome

Give external agents only necessary prototype source, excluding repository
history, environments, build output, credentials, sessions, and private content.

## Known risks

- Connector export: Git history, environment/config/session artifacts, private
  corpus, build output, auto-session fallback, and general-purpose legacy proxy.
- Frontend export: unauthenticated admin, content-write/upload APIs, independent
  content DB/object storage, build output, and Git history.
- A sanitized archive does not rotate a credential exposed elsewhere.

## Export policy

Exclude `.git`, `.env*`, caches, builds, dependencies, session/organization
settings, attached prompt assets, nested archives, database dumps, corpora, and
private model/content instructions. Preserve insecure source routes when an
implementation agent must remove them, but label them as removal targets.

Retain a sorted manifest and SHA-256 for each archive. Scan names and contents
for common credential forms without printing values. A clean result applies
only to the sanitized artifact, not historical credential safety.

## Completion checks

- No excluded class in archive listing.
- No candidate file from the secret-pattern scan.
- Manifest and archive SHA-256 recorded.
- Task cards label exports as prototypes.
- Mark rotates possibly exposed credentials.
- Replit security/dependency scans pass in the implementation apps.
- Before a connector cutover, retain a clean GitHub/Vercel migration plan with
  parity and rollback evidence under
  [[decisions/2026-08-11-dev-connector-vercel-github|DR-43]].

The dated redacted inventory procedure, scan commands, evidence format, and
remaining W1 security blockers are retained in
[[planning/workstreams/W1-SOURCE-SECURITY-EVIDENCE-CHECKLIST-2026-08-11|the W1 source-security evidence checklist]].

## Rollback

Delete and regenerate a failed derived archive from private source; do not alter
the private source merely to make an export pass.
