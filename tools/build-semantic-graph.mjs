#!/usr/bin/env node

import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, "..");
const args = process.argv.slice(2);
const outFlag = args.indexOf("--out");
const OUTPUT = outFlag >= 0
  ? resolve(process.cwd(), args[outFlag + 1])
  : resolve(ROOT, "graph-explorer/public/graph-index.json");
const VALIDATE_ONLY = args.includes("--validate-only");

const NODE_TYPES = new Set([
  "product",
  "learning-thread",
  "workflow",
  "growth-hypothesis",
  "segment",
  "icp",
  "playbook",
  "run",
  "output",
  "evidence",
  "decision",
  "review",
  "file",
]);

const EDGE_TYPES = new Set([
  "belongs_to_product",
  "belongs_to_thread",
  "implements_workflow",
  "contains",
  "uses_input",
  "derived_from",
  "forked_from",
  "produces",
  "evidence_for",
  "updates",
  "approved_by",
  "supersedes",
  "compares_with",
  "mentions",
]);

const EXCLUDED_DIRS = new Set([
  ".git",
  ".next",
  ".wrangler",
  "dist",
  "node_modules",
]);

const CANONICAL_HEADING_FILES = [
  /^growth\/HYPOTHESES\.md$/,
  /^growth\/SEGMENTS\.md$/,
  /^growth\/ICP-REGISTRY\.md$/,
  /^growth\/GTM-MOTIONS\.md$/,
  /^growth\/PRODUCT-IDEAS\.md$/,
  /^growth\/SOCIAL-IDEA-LEDGER\.md$/,
  /^growth\/BRAND-DIRECTION\.md$/,
  /^growth\/CDP-\d+\.md$/,
  /^product\/PRODUCT-IDEAS\.md$/,
  /^decisions\/20\d{2}-\d{2}-\d{2}[^/]*\.md$/,
];

const VIRTUAL_TYPES = new Map([
  ["GH", "growth-hypothesis"],
  ["SEG", "segment"],
  ["ICP", "icp"],
  ["DR", "decision"],
  ["PRO", "product"],
  ["SOC", "growth-hypothesis"],
  ["GTM", "playbook"],
  ["CDP", "workflow"],
  ["BRD", "playbook"],
]);

const FRONTMATTER_TYPES = new Map([
  ["product", "product"],
  ["learning-thread", "learning-thread"],
  ["workflow", "workflow"],
  ["playbook", "playbook"],
  ["run-card", "run"],
  ["review", "review"],
]);

const stripCodeFences = (value) =>
  value.replace(/```[\s\S]*?```/g, "").replace(/~~~[\s\S]*?~~~/g, "");

function scalar(value) {
  const cleaned = value.trim();
  if (!cleaned) return "";
  if (
    (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
    (cleaned.startsWith("'") && cleaned.endsWith("'"))
  ) {
    return cleaned.slice(1, -1);
  }
  if (cleaned === "true") return true;
  if (cleaned === "false") return false;
  return cleaned;
}

function parseInlineArray(value) {
  const body = value.trim().slice(1, -1).trim();
  if (!body) return [];
  return body.split(",").map((item) => scalar(item)).filter(Boolean);
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return { data: {}, body: content, offset: 0 };
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return { data: {}, body: content, offset: 0 };
  const block = content.slice(4, end);
  const data = {};
  for (const line of block.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, raw] = match;
    data[key] = raw.trim().startsWith("[") && raw.trim().endsWith("]")
      ? parseInlineArray(raw)
      : scalar(raw);
  }
  return {
    data,
    body: content.slice(end + 5),
    offset: block.split("\n").length + 2,
  };
}

function asArray(value) {
  if (Array.isArray(value)) return value.map(String);
  if (value === undefined || value === null || value === "") return [];
  return [String(value)];
}

function slugifyHeading(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function sourceUri(relPath, anchor = "") {
  const file = encodeURIComponent(relPath.replace(/\.md$/, ""));
  const heading = anchor ? `&heading=${encodeURIComponent(anchor)}` : "";
  return `obsidian://open?file=${file}${heading}`;
}

async function markdownFiles(dir = ROOT) {
  const output = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    const absolute = join(dir, entry.name);
    const rel = relative(ROOT, absolute).split(sep).join("/");
    if (entry.isDirectory()) {
      if (
        rel.startsWith("runs/run-004/runtime") ||
        rel.startsWith("runs/run-004/raw") ||
        rel.startsWith("graph-explorer")
      ) continue;
      output.push(...await markdownFiles(absolute));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".md") {
      output.push({ absolute, rel });
    }
  }
  return output.sort((a, b) => a.rel.localeCompare(b.rel));
}

function isNavigation(relPath) {
  const base = relPath.split("/").at(-1)?.toLowerCase() ?? "";
  return [
    "readme.md",
    "obsidian-home.md",
    "master-checklist.md",
    "current-state.md",
    "decision-register.md",
  ].includes(base);
}

function isTemplate(relPath) {
  return relPath.startsWith("templates/") || relPath.includes("/templates/");
}

function isRawArtifact(relPath) {
  return /(^|\/)(raw|runtime|traces?)(\/|$)/i.test(relPath) ||
    relPath.endsWith("trace.jsonl");
}

function idForFrontmatter(frontmatter) {
  if (frontmatter.record_type === "run-card") return frontmatter.run;
  return frontmatter.id;
}

function normalizeLabel(frontmatter, body, fallback) {
  const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = String(frontmatter.title ?? "");
  return heading || title.replace(/\[\[.*?\|(.+?)\]\]/g, "$1") || fallback;
}

function virtualId(match) {
  const prefix = match[1].toUpperCase();
  const number = String(Number.parseInt(match[2], 10));
  return `${prefix}-${prefix === "DR" ? number : number.padStart(3, "0")}`;
}

function nodeSort(a, b) {
  return a.id.localeCompare(b.id);
}

function edgeSort(a, b) {
  return `${a.source}|${a.type}|${a.target}`.localeCompare(
    `${b.source}|${b.type}|${b.target}`,
  );
}

const files = await markdownFiles();
const nodes = new Map();
const edges = [];
const errors = [];
const fileOwners = new Map();
const basenameMap = new Map();

function addNode(node) {
  if (!NODE_TYPES.has(node.type)) {
    errors.push(`Unknown node type "${node.type}" for ${node.id}`);
    return;
  }
  if (nodes.has(node.id)) {
    const existing = nodes.get(node.id);
    errors.push(
      `Duplicate stable ID ${node.id}: ${existing.source.path} and ${node.source.path}`,
    );
    return;
  }
  nodes.set(node.id, node);
}

function addEdge(edge) {
  if (!EDGE_TYPES.has(edge.type)) {
    errors.push(`Unknown edge type "${edge.type}" from ${edge.source}`);
    return;
  }
  edges.push({
    id: `${edge.source}::${edge.type}::${edge.target}`,
    ...edge,
  });
}

for (const file of files) {
  const content = await readFile(file.absolute, "utf8");
  const parsed = parseFrontmatter(content);
  const cleanBody = stripCodeFences(parsed.body);
  const fileId = `FILE:${file.rel.replace(/\.md$/, "")}`;
  const fileNode = {
    id: fileId,
    type: "file",
    label: normalizeLabel(parsed.data, cleanBody, file.rel),
    status: parsed.data.status || "",
    stage: parsed.data.stage || "",
    date: isTemplate(file.rel)
      ? ""
      : parsed.data.date || parsed.data.last_review || "",
    hiddenByDefault: true,
    navigation: isNavigation(file.rel),
    template: isTemplate(file.rel),
    rawArtifact: isRawArtifact(file.rel),
    source: {
      path: file.rel,
      line: 1,
      heading: "",
      uri: sourceUri(file.rel),
      provenance: "markdown-file",
    },
  };
  addNode(fileNode);
  fileOwners.set(file.rel, fileId);
  const stem = file.rel.replace(/\.md$/, "");
  basenameMap.set(stem, fileId);
  const base = stem.split("/").at(-1);
  if (!basenameMap.has(base)) basenameMap.set(base, fileId);
  else basenameMap.set(base, null);

  const mappedType = isTemplate(file.rel)
    ? undefined
    : FRONTMATTER_TYPES.get(String(parsed.data.record_type ?? ""));
  const stableId = idForFrontmatter(parsed.data);
  if (mappedType && stableId) {
    const id = String(stableId);
    const ownerNode = {
      id,
      type: mappedType,
      label: normalizeLabel(parsed.data, cleanBody, id),
      status: parsed.data.status || "",
      stage: parsed.data.stage || "",
      date: parsed.data.date || parsed.data.last_review || "",
      product: parsed.data.product || "",
      threads: asArray(parsed.data.threads),
      workflow: parsed.data.workflow || "",
      runType: parsed.data.run_type || "",
      executionKind: parsed.data.execution_kind || "",
      nextDecision: parsed.data.next_decision || "",
      subjects: asArray(parsed.data.subjects),
      source: {
        path: file.rel,
        line: 1,
        heading: normalizeLabel(parsed.data, cleanBody, id),
        uri: sourceUri(file.rel),
        provenance: "frontmatter",
      },
    };
    addNode(ownerNode);
    fileOwners.set(file.rel, id);
  }

  if (CANONICAL_HEADING_FILES.some((pattern) => pattern.test(file.rel))) {
    const lines = cleanBody.split("\n");
    const definedHere = new Set();
    for (let index = 0; index < lines.length; index += 1) {
      const headingMatch = lines[index].match(
        /^#{1,6}\s+(?:\*\*)?(GH|SEG|ICP|DR|PRO|SOC|GTM|CDP|BRD)-0*(\d+)\b(?:\*\*)?\s*(?:[—:-]\s*)?(.*)$/i,
      );
      const linkedHeadingMatch = lines[index].match(
        /^#{1,6}\s+\[\[[^\]|]+\|(DR)-0*(\d+)\]\]\s*(?:[—:-]\s*)?(.*)$/i,
      );
      const tableMatch = lines[index].match(
        /^\|\s*(?:\d+\s*\|\s*)?(GH|SEG|ICP|DR|PRO|SOC|GTM|CDP|BRD)-0*(\d+)\b/i,
      );
      const match = headingMatch || linkedHeadingMatch || tableMatch;
      if (!match) continue;
      const id = virtualId(match);
      if (definedHere.has(id)) continue;
      definedHere.add(id);
      const type = VIRTUAL_TYPES.get(match[1].toUpperCase());
      const heading = headingMatch || linkedHeadingMatch
        ? lines[index]
            .replace(/^#{1,6}\s+/, "")
            .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
            .replace(/\*\*/g, "")
            .trim()
        : lines[index].split("|").map((part) => part.trim()).filter(Boolean).slice(0, 3).join(" — ");
      addNode({
        id,
        type,
        label: heading,
        status: "",
        stage: "",
        date: parsed.data.date || file.rel.match(/\d{4}-\d{2}-\d{2}/)?.[0] || "",
        source: {
          path: file.rel,
          line: index + parsed.offset + 1,
          heading,
          anchor: slugifyHeading(heading),
          uri: sourceUri(file.rel, heading),
          provenance: "stable-id-heading",
        },
      });
    }
  }
}

for (const file of files) {
  const content = await readFile(file.absolute, "utf8");
  const parsed = parseFrontmatter(content);
  const owner = fileOwners.get(file.rel);
  const fm = parsed.data;

  if (owner && owner !== `FILE:${file.rel.replace(/\.md$/, "")}`) {
    if (fm.product) addEdge({ source: owner, type: "belongs_to_product", target: String(fm.product), provenance: "frontmatter:product" });
    for (const thread of asArray(fm.threads)) addEdge({ source: owner, type: "belongs_to_thread", target: thread, provenance: "frontmatter:threads" });
    if (fm.workflow) addEdge({ source: owner, type: "implements_workflow", target: String(fm.workflow), provenance: "frontmatter:workflow" });
    for (const workflow of asArray(fm.workflows)) addEdge({ source: owner, type: "implements_workflow", target: workflow, provenance: "frontmatter:workflows" });
    for (const subject of asArray(fm.subjects)) addEdge({ source: owner, type: "contains", target: subject, provenance: "frontmatter:subjects" });
    for (const input of asArray(fm.input_runs)) addEdge({ source: owner, type: "uses_input", target: input, provenance: "frontmatter:input_runs" });
    for (const update of asArray(fm.result_updates)) addEdge({ source: owner, type: "updates", target: update, provenance: "frontmatter:result_updates" });
    if (fm.parent_run) {
      addEdge({
        source: owner,
        type: fm.execution_kind === "fork" ? "forked_from" : "derived_from",
        target: String(fm.parent_run),
        provenance: "frontmatter:parent_run",
      });
    }
  }

  if (/^runs\/run-\d{3}\/outputs\/.+\.md$/.test(file.rel)) {
    const runId = `RUN-${file.rel.match(/^runs\/run-(\d{3})\//)?.[1]}`;
    const evidence = /(source|evidence|scorecard|research|registry|map|audit|comparison)/i.test(file.rel);
    const outputId = `${evidence ? "EVID" : "OUT"}:${file.rel.replace(/\.md$/, "")}`;
    const contentClean = stripCodeFences(parsed.body);
    addNode({
      id: outputId,
      type: evidence ? "evidence" : "output",
      label: normalizeLabel(parsed.data, contentClean, file.rel.split("/").at(-1)),
      status: parsed.data.status || "completed",
      stage: "",
      date: parsed.data.date || "",
      hiddenByDefault: true,
      source: {
        path: file.rel,
        line: 1,
        heading: normalizeLabel(parsed.data, contentClean, ""),
        uri: sourceUri(file.rel),
        provenance: "run-output-path",
      },
    });
    addEdge({ source: runId, type: "produces", target: outputId, provenance: "run-output-path" });
    if (evidence) addEdge({ source: outputId, type: "evidence_for", target: runId, provenance: "run-output-path" });
    fileOwners.set(file.rel, outputId);
  }
}

for (const file of files) {
  const content = stripCodeFences(await readFile(file.absolute, "utf8"));
  const source = fileOwners.get(file.rel);
  if (!source) continue;
  const wikilinks = content.matchAll(/\[\[([^\]#|]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g);
  for (const match of wikilinks) {
    const raw = match[1].trim().replace(/\.md$/, "");
    const target = basenameMap.get(raw) ?? basenameMap.get(raw.split("/").at(-1));
    if (!target || target === source) continue;
    addEdge({ source, type: "mentions", target, provenance: "wikilink" });
  }

  if (source.startsWith("RUN-")) {
    const approvals = content.matchAll(/(?:\[\[[^\]]*?\b(DR-\d+)\b[^\]]*\]\]|\b(DR-\d+)\b)/g);
    const seen = new Set();
    for (const match of approvals) {
      const decision = match[1] || match[2];
      if (seen.has(decision)) continue;
      seen.add(decision);
      if (content.match(new RegExp(`approval:[\\s\\S]{0,500}${decision}`, "i"))) {
        addEdge({ source, type: "approved_by", target: decision, provenance: "run-card:approval" });
      }
    }
  }
}

const legacyPath = resolve(ROOT, "semantic/legacy-relations.json");
const legacy = JSON.parse(await readFile(legacyPath, "utf8"));
for (const relation of legacy.relations ?? []) {
  addEdge({
    source: relation.source,
    type: relation.type,
    target: relation.target,
    note: relation.note || "",
    provenance: "semantic/legacy-relations.json",
  });
}

for (const node of nodes.values()) {
  if (node.date && !/^\d{4}-\d{2}-\d{2}$/.test(String(node.date))) {
    errors.push(`Invalid date "${node.date}" on ${node.id}`);
  }
  if (node.type === "run") {
    const memberships = edges.filter((edge) => edge.source === node.id);
    if (!memberships.some((edge) => edge.type === "belongs_to_product")) {
      errors.push(`Missing canonical product owner for ${node.id}`);
    }
    if (!memberships.some((edge) => edge.type === "implements_workflow")) {
      errors.push(`Missing workflow classification for ${node.id}`);
    }
  }
  if (node.type === "learning-thread" && !node.product) {
    errors.push(`Missing canonical product owner for ${node.id}`);
  }
}

const dedupedEdges = [...new Map(edges.map((edge) => [edge.id, edge])).values()]
  .map((edge) => {
    const relationNode = edge.provenance === "run-output-path"
      ? nodes.get(edge.target)
      : nodes.get(edge.source);
    return {
      ...edge,
      sourceLocation: edge.provenance === "semantic/legacy-relations.json"
        ? { path: "semantic/legacy-relations.json", line: 1 }
        : {
            path: relationNode?.source.path || "",
            line: relationNode?.source.line || 1,
          },
    };
  });
for (const edge of dedupedEdges) {
  if (edge.type === "mentions") continue;
  if (!nodes.has(edge.source)) errors.push(`Dangling typed edge source ${edge.source} (${edge.type})`);
  if (!nodes.has(edge.target)) errors.push(`Dangling typed edge target ${edge.target} (${edge.type})`);
}

const runs = [...nodes.values()].filter((node) => node.type === "run");
const runIds = runs.map((node) => node.id).sort();
if (runs.length !== 21) {
  errors.push(`Expected exactly 21 runs, found ${runs.length}`);
}
if (new Set(runIds).size !== runs.length) {
  errors.push("One or more runs appear more than once");
}

if (errors.length) {
  console.error(`Semantic graph validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const index = {
  schemaVersion: 1,
  sourceRoot: ".",
  latestRecordDate: [...nodes.values()]
    .map((node) => node.date)
    .filter(Boolean)
    .sort()
    .at(-1) || "",
  policy: {
    authority: "Markdown and Git",
    mentionsHiddenByDefault: true,
    buildOutput: true,
  },
  nodeTypes: [...NODE_TYPES].sort(),
  edgeTypes: [...EDGE_TYPES].sort(),
  counts: {
    nodes: nodes.size,
    edges: dedupedEdges.length,
    runs: runs.length,
    products: [...nodes.values()].filter((node) => node.type === "product").length,
    threads: [...nodes.values()].filter((node) => node.type === "learning-thread").length,
    workflows: [...nodes.values()].filter((node) => node.type === "workflow").length,
  },
  nodes: [...nodes.values()].sort(nodeSort),
  edges: dedupedEdges.sort(edgeSort),
};

if (!VALIDATE_ONLY) {
  await writeFile(OUTPUT, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`Wrote ${relative(ROOT, OUTPUT)} (${index.counts.nodes} nodes, ${index.counts.edges} edges)`);
} else {
  console.log(`Semantic graph valid (${index.counts.nodes} nodes, ${index.counts.edges} edges)`);
}
