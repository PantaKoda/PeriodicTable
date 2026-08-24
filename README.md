# Periodic Table

An interactive periodic table in a colorful neo-brutalist style. Built with Astro and TypeScript, with all 118 elements bundled locally for fast and reliable access.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Quality checks

```bash
npm run check
npm run build
```

## Docker

Build and run directly:

```bash
docker build -t periodic-table .
docker run --rm -p 4321:4321 periodic-table
```

Or use Docker Compose:

```bash
docker compose up --build
```

The production server listens on port `4321`. The image uses a multi-stage build, serves the generated static site from an unprivileged Nginx process, adds basic security and asset-cache headers, and includes a health check.

## Data notes

- Atomic masses in brackets are the mass numbers of the longest-lived isotopes.
- Physical state is shown at approximately 20 °C; it is marked as unknown for recently synthesized superheavy elements whose bulk properties have not been measured.
- The app has no runtime API dependency, so the table remains available offline and in self-hosted environments.
