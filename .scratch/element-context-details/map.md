# Element Context Details

Label: wayfinder:map

## Destination

Implemented sourced element-context details covering all 118 elements in English, Swedish, and Greek, with a responsive detail drawer that preserves the table’s concise hover experience.

## Notes

- Element context has four fields: natural occurrence, native occurrence, biological role, and common uses.
- Every element receives explicit content; synthetic elements state that they are not naturally occurring and identify research-only or absent practical uses.
- A deliberate “More details” action opens a right-side drawer on desktop and a bottom sheet on mobile.
- English, Swedish, and Greek ship with full content parity and no fallback-language fragments.
- Claims have visible, high-trust source citations.
- Consult the research, prototype, and domain-modeling skills while resolving this map.

## Decisions so far

- [Choose the source and data strategy](./issues/01-source-and-data-strategy.md): bundle original reviewed prose offline with field-level citations, using a hierarchy of first-party scientific and reusable government sources.
- [Choose the translation and terminology strategy](./issues/02-translation-and-terminology-strategy.md): translate Swedish and Greek independently from a source-backed, concept-locked English master using a versioned glossary and full human review.
- [Validate the detail drawer information hierarchy](./issues/03-detail-drawer-prototype.md): use one deliberate action, four consistently ordered context cards, then citations and review metadata in a modal drawer/bottom sheet.
- [Set the editorial and citation policy](./issues/04-editorial-and-citation-policy.md): use short qualified claims, explicit absence/unknown wording, no medical advice, and at least one approved source per field.
- [Define the element-context data contract](./issues/05-element-context-schema.md): store complete localized text, field-level source IDs, controlled interpretation statuses, and a review date per element.
- [Adjudicate localized element names](./issues/06-audit-localized-element-names.md): reuse the canonical language tables and standardize the final Greek superheavy names, including `Ογκανέσιο`.
- [Define the content production and validation workflow](./issues/07-content-production-and-validation.md): author in bounded number ranges and make completeness, translations, source IDs, dates, type-checking, and UI verification release gates.

## Not yet specified

- None at this frontier.

## Out of scope

- Medical advice, exposure limits, and element hazard guidance; this effort is an educational occurrence-and-use reference.
- New standalone element pages or a backend service; the destination is an enhancement to the existing single-page table.
