# Periodic Table

An interactive periodic table in a colorful neo-brutalist style. Built with Astro and TypeScript, with all 118 elements bundled locally for fast and reliable access.

The interface is available in English, Swedish, and Greek. A visitor's language choice is stored locally in their browser. Selecting **More details** opens a responsive panel with each element's natural occurrence, whether it occurs in native/free form, biological role, practical uses, and supporting source links.

Hovering or focusing an element previews it in the inspector. Clicking an element locks that selection so later pointer movement cannot replace it; clicking a different element moves the lock.

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
- Context entries distinguish natural occurrence from occurrence as a free/native element. Technetium, promethium, neptunium, plutonium, and americium are described as trace natural products where applicable; elements 104–118 are marked as laboratory-only.
- Context claims are maintained as an English semantic master with independent Swedish and Greek translations. Each field carries source identifiers and every record has a review date.
- Source links favor IUPAC, PubChem, USGS, NIH, CDC/ATSDR, and U.S. Department of Energy material, with the Royal Society of Chemistry used as a corroborating element reference.
- The app has no runtime API dependency, so the table remains available offline and in self-hosted environments.
