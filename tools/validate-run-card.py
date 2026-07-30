#!/usr/bin/env python3
"""Validate a MindfulText Epoch 1 run card.

Usage:
    python3 tools/validate-run-card.py path/to/RUN-NNN-Topic.md

Parses lines of the form '**field:** value' (leading '- ' tolerated; field
names case-insensitive). Empty, TBD, and PENDING count as unset. N/A counts
as unset, except target_signal when run_type is lab-validation.

Exit codes:
    0  all required fields valid and approval starts with "APPROVED"
    1  missing/invalid required fields, or file missing/unreadable
    2  all required fields valid — awaiting Mark approval
"""

import re
import sys
from pathlib import Path

FIELD_RE = re.compile(r"^\s*(?:-\s*)?\*\*([^:*]+?):\*\*\s*(.*?)\s*$")

REQUIRED = [
    "run_id",
    "date",
    "run_type",
    "path_id",
    "question",
    "owner",
    "data_class",
    "sources",
    "allowed_tools_providers",
    "budget",
    "external_spend_cap",
    "stop_condition",
    "review_date",
    "charter_version",
]
EXECUTION_FIELDS = [
    "workflow_id",
    "workflow_version",
    "execution_kind",
    "parent_run",
    "subject_refs",
]
RUN_TYPES = ("lab-validation", "market-test")
EXECUTION_KINDS = ("initial", "replay", "fork", "refresh")
UNSET = {"", "TBD", "PENDING"}


def parse_fields(path):
    fields = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        match = FIELD_RE.match(line)
        if match:
            fields[match.group(1).strip().lower()] = match.group(2).strip()
    return fields


def is_unset(value, na_is_unset=True):
    v = value.strip().upper()
    if v in UNSET:
        return True
    return na_is_unset and v == "N/A"


def main():
    if len(sys.argv) != 2:
        print("usage: python3 tools/validate-run-card.py path/to/RUN-NNN-Topic.md",
              file=sys.stderr)
        sys.exit(1)
    path = Path(sys.argv[1])
    try:
        fields = parse_fields(path)
    except OSError as exc:
        print("error: cannot read {}: {}".format(path, exc), file=sys.stderr)
        sys.exit(1)

    problems = []
    for name in REQUIRED:
        if is_unset(fields.get(name, "")):
            problems.append("missing required field: {}".format(name))

    run_id = fields.get("run_id", "")
    run_match = re.fullmatch(r"RUN-(\d+)", run_id, re.IGNORECASE)
    requires_execution_fields = bool(
        run_match and int(run_match.group(1)) >= 5
    ) or any(name in fields for name in EXECUTION_FIELDS)
    if requires_execution_fields:
        for name in EXECUTION_FIELDS:
            allow_na = name == "parent_run"
            if is_unset(fields.get(name, ""), na_is_unset=not allow_na):
                problems.append("missing required field: {}".format(name))

        execution_kind = fields.get("execution_kind", "").strip().lower()
        if execution_kind and not is_unset(execution_kind) and execution_kind not in EXECUTION_KINDS:
            problems.append(
                "invalid execution_kind: '{}' (allowed: initial | replay | fork | refresh)".format(
                    execution_kind
                )
            )
        parent_run = fields.get("parent_run", "").strip()
        if execution_kind == "initial" and parent_run.upper() not in ("N/A", "NONE"):
            problems.append("parent_run must be N/A for an initial execution")
        if execution_kind in ("replay", "fork", "refresh") and is_unset(parent_run):
            problems.append("parent_run is required for {} executions".format(execution_kind))

    run_type = fields.get("run_type", "").strip()
    if run_type and not is_unset(run_type) and run_type not in RUN_TYPES:
        problems.append(
            "invalid run_type: '{}' (allowed: lab-validation | market-test)".format(run_type)
        )

    if run_type == "market-test" and is_unset(fields.get("target_signal", "")):
        problems.append(
            "missing required field for market-test: target_signal "
            "(ladder 0-3; must not be N/A)"
        )

    if problems:
        print("{}: INVALID".format(path))
        for problem in problems:
            print("  - {}".format(problem))
        sys.exit(1)

    approval = fields.get("approval", "")
    if approval.startswith("APPROVED"):
        print("{}: valid and approved ({})".format(path, approval))
        sys.exit(0)
    print("{}: valid — awaiting Mark approval".format(path))
    sys.exit(2)


if __name__ == "__main__":
    main()
