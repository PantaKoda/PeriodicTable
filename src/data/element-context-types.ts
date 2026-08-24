import type { Language } from './i18n'

export type LocalizedText = Record<Language, string>

export type NativeOccurrenceStatus =
  | 'common'
  | 'rare'
  | 'trace-generated'
  | 'not-found-free'
  | 'laboratory-only'
  | 'unknown'

export type BiologicalRoleStatus = 'essential' | 'present' | 'none-known' | 'hazardous' | 'unknown'
export type UseStatus = 'established' | 'specialized' | 'research-only' | 'none-known'

export interface ContextField {
  text: LocalizedText
  sourceIds: string[]
}

export interface NativeOccurrenceField extends ContextField {
  status: NativeOccurrenceStatus
}

export interface BiologicalRoleField extends ContextField {
  status: BiologicalRoleStatus
}

export interface UsesField extends ContextField {
  status: UseStatus
}

export interface ElementContext {
  atomicNumber: number
  naturalOccurrence: ContextField
  nativeOccurrence: NativeOccurrenceField
  biologicalRole: BiologicalRoleField
  commonUses: UsesField
  reviewedAt: string
}

export interface ContextSource {
  id: string
  label: string
  publisher: string
  url: string
  elementUrlTemplate?: string
}
