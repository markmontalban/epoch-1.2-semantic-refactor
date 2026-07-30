"use client";

import type cytoscape from "cytoscape";
import { useEffect, useMemo, useRef, useState } from "react";

type GraphNode = {
  id: string;
  type: string;
  label: string;
  status?: string;
  stage?: string;
  date?: string;
  product?: string;
  threads?: string[];
  workflow?: string;
  runType?: string;
  executionKind?: string;
  nextDecision?: string;
  hiddenByDefault?: boolean;
  navigation?: boolean;
  template?: boolean;
  rawArtifact?: boolean;
  source: {
    path: string;
    line: number;
    heading?: string;
    uri: string;
    provenance: string;
  };
};

type GraphEdge = {
  id: string;
  source: string;
  target: string;
  type: string;
  provenance: string;
  note?: string;
  sourceLocation: {
    path: string;
    line: number;
  };
};

type GraphIndex = {
  schemaVersion: number;
  counts: Record<string, number>;
  nodes: GraphNode[];
  edges: GraphEdge[];
};

type PerspectiveId =
  | "portfolio"
  | "threads"
  | "products"
  | "workflows"
  | "lineage"
  | "timeline"
  | "raw";

type Filters = {
  search: string;
  product: string;
  thread: string;
  workflow: string;
  nodeType: string;
  edgeType: string;
  status: string;
  stage: string;
  dateFrom: string;
  dateTo: string;
  runType: string;
  executionKind: string;
  showSatellites: boolean;
  showMentions: boolean;
};

const EMPTY_FILTERS: Filters = {
  search: "",
  product: "",
  thread: "",
  workflow: "",
  nodeType: "",
  edgeType: "",
  status: "",
  stage: "",
  dateFrom: "",
  dateTo: "",
  runType: "",
  executionKind: "",
  showSatellites: false,
  showMentions: false,
};

const PERSPECTIVES: Array<{
  id: PerspectiveId;
  name: string;
  kicker: string;
  description: string;
  nodeTypes: string[];
  edgeTypes: string[];
}> = [
  {
    id: "portfolio",
    name: "Portfolio",
    kicker: "Roots & choices",
    description: "Products → learning threads → stage → next decision",
    nodeTypes: ["product", "learning-thread"],
    edgeTypes: ["belongs_to_product"],
  },
  {
    id: "threads",
    name: "Learning threads",
    kicker: "Questions over time",
    description: "Subjects, runs, playbooks, evidence, and decisions by thread",
    nodeTypes: [
      "product",
      "learning-thread",
      "growth-hypothesis",
      "segment",
      "icp",
      "playbook",
      "workflow",
      "run",
      "decision",
      "review",
      "output",
      "evidence",
    ],
    edgeTypes: [
      "belongs_to_product",
      "belongs_to_thread",
      "contains",
      "implements_workflow",
      "uses_input",
      "forked_from",
      "derived_from",
      "produces",
      "evidence_for",
      "updates",
      "approved_by",
      "supersedes",
      "compares_with",
    ],
  },
  {
    id: "products",
    name: "Products",
    kicker: "Reusable roots",
    description: "Product ideas, threads, workflows, and evidence coverage",
    nodeTypes: [
      "product",
      "learning-thread",
      "workflow",
      "run",
      "evidence",
      "decision",
    ],
    edgeTypes: [
      "belongs_to_product",
      "belongs_to_thread",
      "implements_workflow",
      "produces",
      "evidence_for",
      "approved_by",
    ],
  },
  {
    id: "workflows",
    name: "Workflows",
    kicker: "Replayable method",
    description: "Reusable processes and every historical execution",
    nodeTypes: ["product", "learning-thread", "workflow", "run", "output"],
    edgeTypes: [
      "belongs_to_product",
      "belongs_to_thread",
      "implements_workflow",
      "produces",
    ],
  },
  {
    id: "lineage",
    name: "Run lineage",
    kicker: "Dependency ≠ time",
    description: "Forks, replays, comparisons, and input-run dependencies",
    nodeTypes: ["run"],
    edgeTypes: ["uses_input", "derived_from", "forked_from", "compares_with"],
  },
  {
    id: "timeline",
    name: "Logic timeline",
    kicker: "How state formed",
    description: "Dated runs, decisions, promotions, forks, and updates",
    nodeTypes: [
      "run",
      "decision",
      "review",
      "growth-hypothesis",
      "segment",
      "icp",
      "playbook",
    ],
    edgeTypes: [
      "uses_input",
      "derived_from",
      "forked_from",
      "updates",
      "approved_by",
      "supersedes",
      "compares_with",
    ],
  },
  {
    id: "raw",
    name: "Raw vault",
    kicker: "Diagnostic layer",
    description: "Files and ordinary wikilinks, similar to Obsidian Graph",
    nodeTypes: ["file"],
    edgeTypes: ["mentions"],
  },
];

const TYPE_LABELS: Record<string, string> = {
  "learning-thread": "thread",
  "growth-hypothesis": "hypothesis",
};

const TYPE_COLORS: Record<string, string> = {
  product: "#f6c453",
  "learning-thread": "#ef7f62",
  workflow: "#7bb8a4",
  "growth-hypothesis": "#d79b5b",
  segment: "#bd8dd6",
  icp: "#8ca4dc",
  playbook: "#d2c276",
  run: "#e7e3d7",
  output: "#7a8591",
  evidence: "#76a6c7",
  decision: "#ea6b73",
  review: "#a5ce80",
  file: "#72706b",
};

function unique(values: Array<string | undefined>) {
  return [...new Set(values.filter(Boolean) as string[])].sort();
}

function displayType(value: string) {
  return TYPE_LABELS[value] ?? value.replaceAll("-", " ");
}

function shortLabel(node: GraphNode) {
  if (/^(RUN|TRK|WF|PROD|GH|SEG|ICP|DR|PB)-/.test(node.id)) return node.id;
  const text = node.label.replace(/^\[\[.*?\]\]\s*[—:-]?\s*/, "");
  return text.length > 30 ? `${text.slice(0, 28)}…` : text;
}

function roleSize(node: GraphNode, perspective: PerspectiveId) {
  if (node.type === "product") return perspective === "portfolio" ? 58 : 46;
  if (node.type === "learning-thread") return 42;
  if (node.type === "workflow") return perspective === "workflows" ? 44 : 32;
  if (node.type === "run") return perspective === "lineage" ? 37 : 29;
  if (node.type === "decision") return 28;
  if (node.type === "file") return 16;
  if (node.type === "output" || node.type === "evidence") return 15;
  return 24;
}

function formatDate(value?: string) {
  if (!value) return "Undated";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function Explorer() {
  const [index, setIndex] = useState<GraphIndex | null>(null);
  const [loadError, setLoadError] = useState("");
  const [perspective, setPerspective] = useState<PerspectiveId>("portfolio");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [selectedId, setSelectedId] = useState("");
  const canvasRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);

  useEffect(() => {
    fetch("/graph-index.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Index request failed: ${response.status}`);
        return response.json();
      })
      .then((data: GraphIndex) => setIndex(data))
      .catch((error: Error) => setLoadError(error.message));
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("mindfultext-graph-preferences-v1");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      queueMicrotask(() => {
        if (PERSPECTIVES.some((item) => item.id === parsed.perspective)) {
          setPerspective(parsed.perspective);
        }
        if (parsed.filters) setFilters({ ...EMPTY_FILTERS, ...parsed.filters });
      });
    } catch {
      window.localStorage.removeItem("mindfultext-graph-preferences-v1");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "mindfultext-graph-preferences-v1",
      JSON.stringify({ perspective, filters }),
    );
  }, [perspective, filters]);

  const currentPerspective =
    PERSPECTIVES.find((item) => item.id === perspective) ?? PERSPECTIVES[0];

  const options = useMemo(() => {
    if (!index) return null;
    return {
      products: unique(index.nodes.map((node) => node.type === "product" ? node.id : node.product)),
      threads: unique(index.nodes.flatMap((node) =>
        node.type === "learning-thread" ? [node.id] : node.threads ?? [],
      )),
      workflows: unique(index.nodes.map((node) =>
        node.type === "workflow" ? node.id : node.workflow,
      )),
      nodeTypes: unique(index.nodes.map((node) => node.type)),
      edgeTypes: unique(index.edges.map((edge) => edge.type)),
      statuses: unique(index.nodes.map((node) => node.status)),
      stages: unique(index.nodes.map((node) => node.stage)),
      runTypes: unique(index.nodes.map((node) => node.runType)),
      executionKinds: unique(index.nodes.map((node) => node.executionKind)),
    };
  }, [index]);

  const visible = useMemo(() => {
    if (!index) return { nodes: [], edges: [] };
    const allowedTypes = new Set(currentPerspective.nodeTypes);
    const allowedEdges = new Set(currentPerspective.edgeTypes);
    if (filters.showSatellites && perspective !== "raw") {
      allowedTypes.add("output");
      allowedTypes.add("evidence");
      allowedEdges.add("produces");
      allowedEdges.add("evidence_for");
    }
    if (filters.showMentions || perspective === "raw") allowedEdges.add("mentions");

    const relationMatches = (node: GraphNode, relation: string, target: string) =>
      index.edges.some(
        (edge) =>
          edge.type === relation &&
          ((edge.source === node.id && edge.target === target) ||
            (edge.target === node.id && edge.source === target)),
      );

    const buildScope = (seedIds: Set<string>) => {
      const scope = new Set(seedIds);
      for (const edge of index.edges) {
        if (edge.type === "mentions") continue;
        if (seedIds.has(edge.source)) scope.add(edge.target);
        if (seedIds.has(edge.target)) scope.add(edge.source);
      }
      const queuedRuns = [...scope].filter((id) => id.startsWith("RUN-"));
      const visitedRuns = new Set<string>();
      while (queuedRuns.length) {
        const runId = queuedRuns.shift()!;
        if (visitedRuns.has(runId)) continue;
        visitedRuns.add(runId);
        for (const edge of index.edges) {
          if (edge.source !== runId) continue;
          if (
            ![
              "uses_input",
              "forked_from",
              "derived_from",
              "produces",
              "updates",
              "approved_by",
            ].includes(edge.type)
          ) continue;
          scope.add(edge.target);
          if (edge.target.startsWith("RUN-")) queuedRuns.push(edge.target);
        }
      }
      return scope;
    };

    const threadScope = filters.thread
      ? buildScope(new Set([
          filters.thread,
          ...index.nodes
            .filter((node) => (node.threads ?? []).includes(filters.thread))
            .map((node) => node.id),
        ]))
      : null;
    const productScope = filters.product
      ? buildScope(new Set([
          filters.product,
          ...index.nodes
            .filter((node) => node.product === filters.product)
            .map((node) => node.id),
        ]))
      : null;
    const workflowScope = filters.workflow
      ? buildScope(new Set([
          filters.workflow,
          ...index.nodes
            .filter((node) => node.workflow === filters.workflow)
            .map((node) => node.id),
        ]))
      : null;

    const search = filters.search.trim().toLowerCase();
    let nodes = index.nodes.filter((node) => {
      if (!allowedTypes.has(node.type)) return false;
      if (!filters.showSatellites && ["output", "evidence"].includes(node.type)) return false;
      if (perspective !== "raw" && node.type === "file") return false;
      if (
        perspective === "raw" &&
        (node.navigation || node.template || node.rawArtifact)
      ) return false;
      if (search && !`${node.id} ${node.label} ${node.source.path}`.toLowerCase().includes(search)) return false;
      if (filters.nodeType && node.type !== filters.nodeType) return false;
      if (filters.status && node.status !== filters.status) return false;
      if (filters.stage && node.stage !== filters.stage) return false;
      if (filters.dateFrom && (!node.date || node.date < filters.dateFrom)) return false;
      if (filters.dateTo && (!node.date || node.date > filters.dateTo)) return false;
      if (filters.runType && node.runType !== filters.runType) return false;
      if (filters.executionKind && node.executionKind !== filters.executionKind) return false;
      if (
        filters.product &&
        !productScope?.has(node.id) &&
        !relationMatches(node, "belongs_to_product", filters.product)
      ) return false;
      if (
        filters.workflow &&
        !workflowScope?.has(node.id) &&
        !relationMatches(node, "implements_workflow", filters.workflow)
      ) return false;
      if (
        filters.thread &&
        !threadScope?.has(node.id) &&
        !relationMatches(node, "belongs_to_thread", filters.thread)
      ) return false;
      return true;
    });

    let nodeIds = new Set(nodes.map((node) => node.id));
    let edges = index.edges.filter(
      (edge) =>
        allowedEdges.has(edge.type) &&
        (!filters.edgeType || edge.type === filters.edgeType) &&
        nodeIds.has(edge.source) &&
        nodeIds.has(edge.target),
    );

    if (perspective !== "portfolio" && !search) {
      const connected = new Set(edges.flatMap((edge) => [edge.source, edge.target]));
      nodes = nodes.filter(
        (node) =>
          connected.has(node.id) ||
          ["product", "learning-thread", "workflow"].includes(node.type),
      );
      nodeIds = new Set(nodes.map((node) => node.id));
      edges = edges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target));
    }

    return { nodes, edges };
  }, [currentPerspective, filters, index, perspective]);

  useEffect(() => {
    let disposed = false;
    async function draw() {
      if (!canvasRef.current || !index) return;
      const cytoscapeModule = await import("cytoscape");
      if (disposed || !canvasRef.current) return;
      const createCytoscape = cytoscapeModule.default;
      cyRef.current?.destroy();

      const dated = unique(visible.nodes.map((node) => node.date));
      const dateRanks = new Map(dated.map((date, position) => [date, position]));
      const typeRanks = new Map(
        ["decision", "run", "review", "growth-hypothesis", "segment", "icp", "playbook"]
          .map((type, position) => [type, position]),
      );

      const elements: cytoscape.ElementDefinition[] = [
        ...visible.nodes.map((node) => ({
          data: {
            id: node.id,
            label:
              perspective === "portfolio" && node.type === "learning-thread"
                ? `${node.id}\n${node.stage || "stage not set"}`
                : shortLabel(node),
            fullLabel: node.label,
            nodeType: node.type,
            color: TYPE_COLORS[node.type] ?? "#888",
            size: roleSize(node, perspective),
            selected: node.id === selectedId ? "yes" : "no",
          },
          position:
            perspective === "timeline"
              ? {
                  x: 90 + (dateRanks.get(node.date ?? "") ?? 0) * 150,
                  y: 90 + (typeRanks.get(node.type) ?? 7) * 110,
                }
              : undefined,
        })),
        ...visible.edges.map((edge) => ({
          data: {
            id: edge.id,
            source: edge.source,
            target: edge.target,
            label: edge.type.replaceAll("_", " "),
            edgeType: edge.type,
          },
        })),
      ];

      const cy = createCytoscape({
        container: canvasRef.current,
        elements,
        minZoom: 0.12,
        maxZoom: 3,
        style: [
          {
            selector: "node",
            style: {
              width: "data(size)",
              height: "data(size)",
              "background-color": "data(color)",
              "border-width": 2,
              "border-color": "#171c1d",
              label: "data(label)",
              color: "#ebe9df",
              "font-family": "IBM Plex Mono, SFMono-Regular, Consolas, monospace",
              "font-size": 9,
              "text-wrap": "wrap",
              "text-max-width": 130,
              "text-valign": "bottom",
              "text-margin-y": 7,
              "text-outline-width": 3,
              "text-outline-color": "#111718",
              "overlay-opacity": 0,
            },
          },
          {
            selector: 'node[selected = "yes"]',
            style: {
              "border-color": "#f7d77f",
              "border-width": 5,
            },
          },
          {
            selector: "edge",
            style: {
              width: 1.1,
              "line-color": "#6f7b79",
              "target-arrow-color": "#8b9995",
              "target-arrow-shape": "triangle",
              "curve-style": "bezier",
              label: "data(label)",
              color: "#9ca7a3",
              "font-size": 7,
              "text-background-color": "#111718",
              "text-background-opacity": 0.82,
              "text-background-padding": 2,
              "text-rotation": "autorotate",
              "arrow-scale": 0.72,
              opacity: 0.72,
            },
          },
          {
            selector: 'edge[edgeType = "forked_from"]',
            style: {
              "line-color": "#ef7f62",
              "target-arrow-color": "#ef7f62",
              width: 2.4,
            },
          },
          {
            selector: 'edge[edgeType = "uses_input"]',
            style: {
              "line-style": "dashed",
              "line-color": "#7bb8a4",
              "target-arrow-color": "#7bb8a4",
            },
          },
          {
            selector: 'edge[edgeType = "mentions"]',
            style: {
              label: "",
              opacity: 0.2,
              width: 0.6,
            },
          },
        ],
      });
      cyRef.current = cy;
      cy.on("tap", "node", (event) => setSelectedId(event.target.id()));
      cy.on("tap", (event) => {
        if (event.target === cy) setSelectedId("");
      });

      const layout =
        perspective === "timeline"
          ? { name: "preset", fit: true, padding: 70 }
          : perspective === "lineage" || perspective === "portfolio"
            ? {
                name: "breadthfirst",
                directed: true,
                spacingFactor: 1.55,
                padding: 70,
                fit: true,
              }
            : {
                name: "cose",
                animate: false,
                randomize: true,
                nodeRepulsion: 7500,
                idealEdgeLength: 110,
                edgeElasticity: 100,
                nestingFactor: 1.2,
                gravity: 0.35,
                padding: 70,
                fit: true,
              };
      cy.layout(layout as cytoscape.LayoutOptions).run();
    }
    draw();
    return () => {
      disposed = true;
      cyRef.current?.destroy();
      cyRef.current = null;
    };
  }, [index, perspective, selectedId, visible]);

  const selected = index?.nodes.find((node) => node.id === selectedId);
  const selectedRelations = selected && index
    ? index.edges
        .filter((edge) => edge.source === selected.id || edge.target === selected.id)
        .filter((edge) => filters.showMentions || edge.type !== "mentions")
        .slice(0, 30)
    : [];

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function changePerspective(id: PerspectiveId) {
    setPerspective(id);
    setSelectedId("");
    setFilters((current) => ({
      ...EMPTY_FILTERS,
      showSatellites: current.showSatellites,
      showMentions: id === "raw",
    }));
  }

  if (loadError) {
    return (
      <main className="fatal-state">
        <p className="eyebrow">Index unavailable</p>
        <h1>The semantic graph could not be loaded.</h1>
        <p>{loadError}</p>
        <code>npm run graph:build</code>
      </main>
    );
  }

  if (!index || !options) {
    return (
      <main className="loading-state" role="status">
        <span className="loading-mark" />
        <p>Building the Epoch 1 logic map…</p>
      </main>
    );
  }

  return (
    <main className="explorer-shell">
      <aside className="perspective-rail">
        <div className="brand-block">
          <span className="brand-mark">MT</span>
          <div>
            <p className="eyebrow">Knowledge system</p>
            <h1>Epoch 1<br />Logic Map</h1>
          </div>
        </div>

        <nav aria-label="Saved perspectives">
          <p className="rail-label">Saved perspectives</p>
          {PERSPECTIVES.map((item, position) => (
            <button
              key={item.id}
              className={`perspective-button ${perspective === item.id ? "active" : ""}`}
              onClick={() => changePerspective(item.id)}
            >
              <span className="perspective-number">0{position + 1}</span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.kicker}</small>
              </span>
            </button>
          ))}
        </nav>

        <div className="rail-footer">
          <span className="status-dot" />
          <span>
            Local index
            <small>{index.counts.nodes} nodes · {index.counts.edges} relations</small>
          </span>
        </div>
      </aside>

      <section className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">{currentPerspective.kicker}</p>
            <h2>{currentPerspective.name}</h2>
            <p>{currentPerspective.description}</p>
          </div>
          <div className="header-actions">
            <span className="authority-chip">Markdown + Git are authoritative</span>
            <button
              className="reset-button"
              onClick={() => setFilters(EMPTY_FILTERS)}
            >
              Reset filters
            </button>
          </div>
        </header>

        <section className="filter-panel" aria-label="Graph filters">
          <label className="search-control">
            <span>Search records</span>
            <input
              type="search"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
              placeholder="RUN-013, CCBHC, evidence…"
            />
          </label>
          <FilterSelect label="Product" value={filters.product} values={options.products} onChange={(value) => updateFilter("product", value)} />
          <FilterSelect label="Learning thread" value={filters.thread} values={options.threads} onChange={(value) => updateFilter("thread", value)} />
          <FilterSelect label="Workflow" value={filters.workflow} values={options.workflows} onChange={(value) => updateFilter("workflow", value)} />
          <FilterSelect label="Node type" value={filters.nodeType} values={options.nodeTypes} onChange={(value) => updateFilter("nodeType", value)} />
          <FilterSelect label="Edge type" value={filters.edgeType} values={options.edgeTypes} onChange={(value) => updateFilter("edgeType", value)} />
          <FilterSelect label="Status" value={filters.status} values={options.statuses} onChange={(value) => updateFilter("status", value)} />
          <FilterSelect label="Stage" value={filters.stage} values={options.stages} onChange={(value) => updateFilter("stage", value)} />
          <FilterSelect label="Run type" value={filters.runType} values={options.runTypes} onChange={(value) => updateFilter("runType", value)} />
          <FilterSelect label="Execution" value={filters.executionKind} values={options.executionKinds} onChange={(value) => updateFilter("executionKind", value)} />
          <label className="date-control">
            <span>From</span>
            <input type="date" value={filters.dateFrom} onChange={(event) => updateFilter("dateFrom", event.target.value)} />
          </label>
          <label className="date-control">
            <span>Through</span>
            <input type="date" value={filters.dateTo} onChange={(event) => updateFilter("dateTo", event.target.value)} />
          </label>
          <label className="toggle-control">
            <input
              type="checkbox"
              checked={filters.showSatellites}
              onChange={(event) => updateFilter("showSatellites", event.target.checked)}
            />
            <span>Outputs + evidence</span>
          </label>
          <label className="toggle-control">
            <input
              type="checkbox"
              checked={filters.showMentions}
              onChange={(event) => updateFilter("showMentions", event.target.checked)}
            />
            <span>Ordinary mentions</span>
          </label>
        </section>

        <section className="graph-stage">
          <div className="graph-toolbar">
            <div>
              <strong>{visible.nodes.length}</strong> visible nodes
              <span className="toolbar-divider" />
              <strong>{visible.edges.length}</strong> typed relations
            </div>
            <div className="legend">
              {unique(visible.nodes.map((node) => node.type)).slice(0, 7).map((type) => (
                <span key={type}>
                  <i style={{ background: TYPE_COLORS[type] }} />
                  {displayType(type)}
                </span>
              ))}
            </div>
          </div>
          <div ref={canvasRef} className="graph-canvas" aria-label={`${currentPerspective.name} semantic graph`} />
          {visible.nodes.length === 0 && (
            <div className="empty-overlay">
              <p className="eyebrow">No matching records</p>
              <strong>Relax one or more filters.</strong>
            </div>
          )}
          <div className="canvas-hint">Scroll to zoom · drag the field · select a node for provenance</div>
        </section>
      </section>

      <aside className={`details-drawer ${selected ? "open" : ""}`} aria-label="Source details">
        {selected ? (
          <>
            <button className="drawer-close" onClick={() => setSelectedId("")} aria-label="Close details">×</button>
            <p className="eyebrow">{displayType(selected.type)}</p>
            <h2>{selected.id}</h2>
            <p className="drawer-label">{selected.label}</p>

            <div className="detail-grid">
              <Detail label="Status" value={selected.status || "Not set"} />
              <Detail label="Stage" value={selected.stage || "Not set"} />
              <Detail label="Date" value={formatDate(selected.date)} />
              <Detail label="Provenance" value={selected.source.provenance} />
            </div>

            {selected.nextDecision && (
              <section className="next-decision">
                <p className="eyebrow">Next decision</p>
                <p>{selected.nextDecision}</p>
              </section>
            )}

            <section className="source-card">
              <p className="eyebrow">Canonical source</p>
              <strong>{selected.source.path}</strong>
              <span>
                {selected.source.heading || "File record"} · line {selected.source.line}
              </span>
              <a href={selected.source.uri}>Open source in Obsidian ↗</a>
            </section>

            <section className="relations-list">
              <p className="eyebrow">Relations ({selectedRelations.length})</p>
              {selectedRelations.map((edge) => {
                const outgoing = edge.source === selected.id;
                const relatedId = outgoing ? edge.target : edge.source;
                return (
                  <button key={edge.id} onClick={() => setSelectedId(relatedId)}>
                    <span>{outgoing ? "→" : "←"} {edge.type.replaceAll("_", " ")}</span>
                    <strong>{relatedId}</strong>
                    <small>
                      {edge.provenance} · {edge.sourceLocation.path}:{edge.sourceLocation.line}
                    </small>
                  </button>
                );
              })}
            </section>
          </>
        ) : (
          <div className="drawer-empty">
            <span className="drawer-glyph">↗</span>
            <p className="eyebrow">Source details</p>
            <h2>Select a node</h2>
            <p>Inspect its authority, source heading, state, and typed relationships.</p>
          </div>
        )}
      </aside>
    </main>
  );
}

function FilterSelect({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="select-control">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All</option>
        {values.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
