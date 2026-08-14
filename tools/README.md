# Lab tools (python3, stdlib only)

Last updated: 2026-08-14 07:28:23 PDT — edited by: Codex

Both scripts locate the lab root from their own location; run them from anywhere.

`new-run.py` — scaffold the next `runs/run-NNN/`: a descriptively named run card
from the template (run_id, date, run_type, path_id filled), descriptively named
working notes, outputs/, and an empty trace.jsonl.
Usage: `python3 tools/new-run.py [--type lab-validation|market-test] [--path-id ID] [--title "..."]`
Exit codes: 0 created; 1 error (target exists, template missing, bad args).

`validate-run-card.py` — check a run card's required fields and approval line.
Usage: `python3 tools/validate-run-card.py runs/run-001/RUN-001-Growth-Path-Ranking.md`
Exit codes: 0 valid and approved; 1 missing/invalid required fields or
unreadable file; 2 valid — awaiting Mark approval.
