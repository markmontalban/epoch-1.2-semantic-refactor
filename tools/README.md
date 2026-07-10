# Lab tools (python3, stdlib only)

Both scripts locate the lab root from their own location; run them from anywhere.

`new-run.py` — scaffold the next `runs/run-NNN/`: run-card.md from the template
(run_id, date, run_type, path_id filled), blackboard.md, outputs/, empty trace.jsonl.
Usage: `python3 tools/new-run.py [--type lab-validation|market-test] [--path-id ID] [--title "..."]`
Exit codes: 0 created; 1 error (target exists, template missing, bad args).

`validate-run-card.py` — check a run card's required fields and approval line.
Usage: `python3 tools/validate-run-card.py runs/run-001/run-card.md`
Exit codes: 0 valid and approved; 1 missing/invalid required fields or
unreadable file; 2 valid — awaiting Mark approval.
