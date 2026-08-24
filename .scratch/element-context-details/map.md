# Element Context Details

Label: wayfinder:map

## Destination

An implementation-ready specification for sourced element-context details covering all 118 elements in English, Swedish, and Greek, with a responsive detail drawer that preserves the table’s concise hover experience.

## Notes

- Element context has four fields: natural occurrence, native occurrence, biological role, and common uses.
- Every element receives explicit content; synthetic elements state that they are not naturally occurring and identify research-only or absent practical uses.
- A deliberate “More details” action opens a right-side drawer on desktop and a bottom sheet on mobile.
- English, Swedish, and Greek ship with full content parity and no fallback-language fragments.
- Claims have visible, high-trust source citations.
- Consult the research, prototype, and domain-modeling skills while resolving this map.

## Decisions so far

<!-- Resolved ticket pointers are appended here. -->

## Not yet specified

- The maintainable ingestion and review workflow cannot be specified until the source strategy and content schema are settled.
- The exact production batching and validation approach for 118 × 3 localized records depends on the evidence and translation policies.

## Out of scope

- Medical advice, exposure limits, and element hazard guidance; this effort is an educational occurrence-and-use reference.
- New standalone element pages or a backend service; the destination is an enhancement to the existing single-page table.
