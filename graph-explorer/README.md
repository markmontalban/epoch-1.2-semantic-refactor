# Epoch 1 Logic Map

This local-only browser application explores the generated semantic graph for
the MindfulText vault. Markdown and Git remain authoritative:
`public/graph-index.json` is deterministic build output and is ignored by Git.

## Run locally

```bash
cd graph-explorer
npm install
npm run dev
```

The `predev` script regenerates the index from the parent vault. Use
`npm run graph:validate` to validate without writing build output, and
`npm test` for the production build and structural tests.

The application does not require authentication, hosted storage, external
services, or network access at runtime. Personal filter preferences are stored
only in the browser's `localStorage`; the seven saved perspectives are shared
in source.
