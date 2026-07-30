import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the semantic explorer shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Epoch 1 Logic Map<\/title>/i);
  assert.match(html, /Building the Epoch 1 logic map/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("generated graph index contains all runs and typed provenance", async () => {
  const index = JSON.parse(
    await readFile(new URL("../public/graph-index.json", import.meta.url), "utf8"),
  );

  assert.equal(index.schemaVersion, 1);
  assert.equal(index.counts.runs, 21);
  assert.ok(index.nodes.some((node) => node.id === "PROD-001"));
  assert.ok(index.nodes.some((node) => node.id === "TRK-001"));
  assert.ok(index.nodes.some((node) => node.id === "WF-010"));
  assert.ok(index.nodes.some((node) => node.id === "RUN-021"));
  assert.equal(index.nodes.find((node) => node.id === "RUN-010")?.workflow, "WF-010");
  assert.equal(index.nodes.find((node) => node.id === "RUN-012")?.workflow, "WF-004");
  assert.equal(index.nodes.find((node) => node.id === "RUN-021")?.status, "completed");
  assert.ok(index.nodes.some((node) => node.id === "GH-005"));
  assert.equal(index.nodes.filter((node) => node.type === "decision").length, 39);
  assert.ok(index.edges.some((edge) => edge.type === "forked_from"));
  assert.ok(index.edges.some((edge) => edge.type === "uses_input"));
  assert.ok(
    index.edges.some(
      (edge) =>
        edge.source === "RUN-008" &&
        edge.type === "forked_from" &&
        edge.target === "RUN-007",
    ),
  );
  assert.ok(index.edges.every((edge) => edge.provenance));
  assert.ok(index.edges.every((edge) => edge.sourceLocation?.path && edge.sourceLocation?.line));
  assert.ok(index.nodes.every((node) => node.source?.path && node.source?.line));
});
