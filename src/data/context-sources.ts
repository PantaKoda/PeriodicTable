import type { ContextSource } from './element-context-types'

export const contextSources: ContextSource[] = [
  {
    id: 'iupac',
    label: 'Periodic Table of Elements',
    publisher: 'IUPAC',
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/',
  },
  {
    id: 'pubchem',
    label: 'Element record',
    publisher: 'PubChem — NIH/NLM',
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/',
    elementUrlTemplate: 'https://pubchem.ncbi.nlm.nih.gov/element/{atomicNumber}',
  },
  {
    id: 'rsc',
    label: 'Periodic Table element profile',
    publisher: 'Royal Society of Chemistry',
    url: 'https://periodic-table.rsc.org/',
    elementUrlTemplate: 'https://periodic-table.rsc.org/element/{atomicNumber}/',
  },
  {
    id: 'usgs',
    label: 'Mineral Commodity Summaries',
    publisher: 'U.S. Geological Survey',
    url: 'https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries',
  },
  {
    id: 'nih-ods',
    label: 'Dietary supplement fact sheets',
    publisher: 'NIH Office of Dietary Supplements',
    url: 'https://ods.od.nih.gov/factsheets/list-all/',
  },
  {
    id: 'cdc-atsdr',
    label: 'Toxicological Profiles',
    publisher: 'CDC / ATSDR',
    url: 'https://www.atsdr.cdc.gov/toxicological-profiles/',
  },
  {
    id: 'doe',
    label: 'Superheavy elements and isotope research',
    publisher: 'U.S. Department of Energy',
    url: 'https://www.energy.gov/science/doe-explainssuperheavy-elements',
  },
]

export const contextSourceById = Object.fromEntries(contextSources.map((source) => [source.id, source]))

export function sourceUrl(source: ContextSource, atomicNumber: number): string {
  return source.elementUrlTemplate?.replace('{atomicNumber}', String(atomicNumber)) ?? source.url
}
