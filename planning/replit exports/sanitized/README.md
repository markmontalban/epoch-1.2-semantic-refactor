# Sanitized Prototype Exports

These are source-only inspection handoffs, not deployable applications.

| Archive | Files | SHA-256 |
| --- | ---: | --- |
| `MindfulText-Front-End-source-sanitized.zip` | 66 | `43ecef4c416073818159ae343a7bb36615dbc325ad2145c81c181180c2229604` |
| `devmindfultextconnector-source-sanitized.zip` | 144 | `58f2b927556bacda01bfd1abe8a973e3c869338fd73be3190d678169e4b7d982` |

The matching manifest files list every included file. Generation excluded Git
history, environment files, dependencies, builds/caches, Replit local state,
session and organization settings, attached prompt assets, nested archives,
database files, the exported corpus, and private content/model instructions.
A scan for common private-key and access-token forms returned no candidate file.

The archives intentionally retain insecure prototype source that an
implementation agent must remove. In particular, the frontend still contains
its public admin/content/upload implementation and the connector still contains
auto-session and generic legacy-proxy code. Their presence is review evidence,
not permission to deploy them.

Sanitization does not revoke a credential that may have existed in the original
archive or Git history. Credential inventory and rotation remain launch gates.

