# Define the content production and validation workflow

Type: grilling
Status: resolved
Blocked by: 04, 05, 06

## Question

What repeatable research, authoring, translation, review, provenance, batching, and automated-validation workflow should produce and maintain 118 complete trilingual element-context records without weakening the scientific or linguistic acceptance gates?

## Comments

## Answer

Author records in atomic-number batches against the shared schema, beginning from the source-backed English claim and translating Swedish and Greek independently without changing its scope. Validate each field’s sources and controlled status as it is written. The aggregate module is the release gate: it rejects missing or duplicate elements, incomplete language triplets, unknown source IDs, and malformed review dates. Astro type-check and production build then validate the UI integration; representative desktop/mobile and language-switch checks cover the drawer behavior. Content updates must change the review date and keep the source registry stable or add an explicit new approved source.
