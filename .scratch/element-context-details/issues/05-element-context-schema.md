# Define the element-context data contract

Type: grilling
Status: resolved
Blocked by: 03, 04

## Question

What data contract should represent the four context fields, localized copy, citations, explicit absence/unknown states, and review metadata so the UI and future content maintenance have one unambiguous source of truth?

## Comments

## Answer

`ElementContext` is keyed by atomic number and contains `naturalOccurrence`, `nativeOccurrence`, `biologicalRole`, `commonUses`, and an ISO review date. Every field has an `en`/`sv`/`el` text record plus source IDs. The three interpretive fields add controlled statuses: native occurrence uses `common`, `rare`, `trace-generated`, `not-found-free`, `laboratory-only`, or `unknown`; biology uses `essential`, `present`, `none-known`, `hazardous`, or `unknown`; uses uses `established`, `specialized`, `research-only`, or `none-known`.

The build validates exactly 118 unique atomic numbers, complete text in all three languages, valid source references, and review-date syntax. The data is split into atomic-number ranges for maintainability and aggregated behind one lookup module.
