import { contextSourceById } from './context-sources'
import { elementContexts1To40 } from './context/elements-1-40'
import { elementContexts41To80 } from './context/elements-41-80'
import { elementContexts81To118 } from './context/elements-81-118'
import type { ContextField, ElementContext } from './element-context-types'

export const elementContexts: ElementContext[] = [
  ...elementContexts1To40,
  ...elementContexts41To80,
  ...elementContexts81To118,
]

function validateField(field: ContextField, atomicNumber: number, fieldName: string) {
  for (const language of ['en', 'sv', 'el'] as const) {
    if (!field.text[language]?.trim()) {
      throw new Error(`Element ${atomicNumber} is missing ${fieldName}.${language}`)
    }
  }

  if (!field.sourceIds.length) {
    throw new Error(`Element ${atomicNumber} is missing sources for ${fieldName}`)
  }

  for (const sourceId of field.sourceIds) {
    if (!contextSourceById[sourceId]) {
      throw new Error(`Element ${atomicNumber} references unknown source ${sourceId}`)
    }
  }
}

if (elementContexts.length !== 118) {
  throw new Error(`Expected 118 element-context records, received ${elementContexts.length}`)
}

const seenNumbers = new Set<number>()
for (const record of elementContexts) {
  if (record.atomicNumber < 1 || record.atomicNumber > 118 || seenNumbers.has(record.atomicNumber)) {
    throw new Error(`Invalid or duplicate element-context atomic number: ${record.atomicNumber}`)
  }
  seenNumbers.add(record.atomicNumber)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.reviewedAt) || Number.isNaN(Date.parse(record.reviewedAt))) {
    throw new Error(`Element ${record.atomicNumber} has an invalid review date: ${record.reviewedAt}`)
  }
  validateField(record.naturalOccurrence, record.atomicNumber, 'naturalOccurrence')
  validateField(record.nativeOccurrence, record.atomicNumber, 'nativeOccurrence')
  validateField(record.biologicalRole, record.atomicNumber, 'biologicalRole')
  validateField(record.commonUses, record.atomicNumber, 'commonUses')
}

for (let atomicNumber = 1; atomicNumber <= 118; atomicNumber += 1) {
  if (!seenNumbers.has(atomicNumber)) throw new Error(`Missing element-context record ${atomicNumber}`)
}

export const elementContextByNumber = Object.fromEntries(
  elementContexts.map((record) => [record.atomicNumber, record]),
) as Record<number, ElementContext>
