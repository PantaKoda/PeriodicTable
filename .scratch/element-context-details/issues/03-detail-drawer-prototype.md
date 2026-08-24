# Validate the detail drawer information hierarchy

Type: prototype
Status: resolved
Blocked by: 01

## Question

What information hierarchy and interaction make the four element-context fields, citations, and unavailable-data states easy to scan in a desktop drawer and mobile bottom sheet without obscuring the periodic table or overloading the existing inspector?

Use representative elements that exercise distinct cases: carbon, gold, oxygen, uranium, and oganesson.

## Comments

The user approved the recommended interaction and asked to proceed directly to implementation, so the production UI became the validation surface instead of a disposable prototype.

## Answer

Keep the inspector compact and add one explicit “More details” action. Open a modal right-side drawer on desktop and an 84-viewport-height bottom sheet on narrow screens. Lead with the element identity and category color, then show four consistent cards in this order: natural occurrence, free/native occurrence, biological role, and common uses. Put deduplicated high-trust source links and the review date in a final sources card. Native `<dialog>` behavior supplies focus trapping, Escape-to-close, and focus restoration; the close control and backdrop provide pointer alternatives.
