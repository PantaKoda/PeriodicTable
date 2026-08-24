# Source and data strategy for element context details

Research date: 2026-08-24

## Recommendation

Bundle a hand-curated, multilingual dataset in the repository and use online sources only during editorial research and review. Do not make the production site depend on a runtime API. Each factual field should carry its own source IDs and review date, and the UI should show those sources in the element detail view.

There is no single source that is simultaneously authoritative, complete for all four requested subjects across all 118 elements, structured, current, and clearly licensed for adaptation and translation. The defensible approach is a hierarchy:

1. Use IUPAC and PubChem's periodic-table endpoint for identity and baseline atomic data.
2. Use public-domain USGS material for terrestrial occurrence, extraction, and current commodity uses.
3. Use public-domain NIH and CDC/ATSDR material for established biological roles and health context.
4. Use public-domain DOE material and first-party discovery-laboratory pages for radioactive and superheavy-element status and research uses.
5. Use RSC, LANL, and source-attributed PubChem narrative sections as corroborating references and gap finders, not as prose to copy or translate, unless permission is obtained for the particular material.
6. Write concise original summaries from the supported facts. Preserve uncertainty and use explicit fallback states where evidence is sparse.

This answers the all-118 requirement without pretending that all elements have equally rich real-world information. For a short-lived superheavy element, “created in laboratories; no known biological role; research only” is useful, accurate content rather than an incomplete record.

## Source comparison

| Source | Best contribution | Coverage | Authority | Access and stability | Reuse position | Important gaps |
| --- | --- | --- | --- | --- | --- | --- |
| [IUPAC periodic table](https://iupac.org/what-we-do/periodic-table-of-elements/) and element announcements | Official names, symbols, atomic numbers/weights, discovery and naming status | Identity coverage for all 118; not a general occurrence/use database | International standards body responsible for chemical nomenclature | Stable HTML/PDF releases, but release cadence is irregular; the current page identifies the dated release used | IUPAC material is copyrighted. In PubChem, IUPAC IPTEI contributions explicitly carry **CC BY-NC-ND 4.0**, which does not permit translated/adapted derivatives and is unsuitable for unrestricted commercial hosting | Little coverage of common uses or biological role; licensing blocks using IPTEI prose as translation seed text |
| [PubChem PUG REST periodic table](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON) and [PUG-View element records](https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/element/118/JSON) | Machine-readable identity/properties, narrative “Uses” where available, and unusually strong item-level provenance | Structured records exist through element 118; depth varies sharply by element and field | NIH/NLM-operated aggregator; authority depends on each named contributor | Documented REST API; atomic-number URLs are predictable. The service asks clients to stay at or below five requests/second and warns that 503 responses can occur, so it should be an editorial import, not a runtime dependency ([PUG REST documentation](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest)) | No dedicated, consistently populated natural occurrence/native occurrence/biological-role quartet. PubChem integrates third-party contributions, so there is no blanket reuse licence for every annotation |
| [USGS Mineral Commodity Summaries](https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries) and associated data release | Modern commercial sources, production, reserves/resources, recycling, and material uses | More than 90 minerals and materials, not 118 element records; omits gases, many non-commodities, and synthetic elements | U.S. geological and mineral-statistics authority | Annual, versioned report with DOI, suggested citation, archived editions, and a structured data release | USGS-authored data and information are U.S. public domain and may be reused with acknowledgment; the 2026 data release is explicitly labelled public domain. Check individual figures for third-party notices ([USGS copyright FAQ](https://www.usgs.gov/faqs/are-usgs-reportspublications-copyrighted)) | Commodity chapters often describe a material group rather than a pure element and cannot establish biological role or native occurrence by themselves |
| [NIH Office of Dietary Supplements fact sheets](https://ods.od.nih.gov/factsheets/list-all/) | Human biological roles for recognized essential mineral nutrients | Only biologically relevant nutrients, not all elements | NIH evidence summaries; ODS says its fact sheets receive extensive expert scientific review | Stable HTML pages, visibly reviewed/updated, but content evolves with evidence | Most ODS material is public domain, but its specific site policy permits reproduction provided content is not changed or modified. Therefore link/cite it and write independently; do not translate or adapt its prose directly ([ODS site policy](https://ods.od.nih.gov/About/Site_Policies.aspx)) | Not a source for “no known role” across the table; focused on nutrition, not general element toxicology |
| [CDC/ATSDR Toxicological Profiles](https://www.atsdr.cdc.gov/toxicological-profiles/glossary/index.html) | Toxicity, exposure, environmental fate, and body burden for hazardous elemental substances and compounds | Strong but selective: includes aluminium, arsenic, beryllium, cadmium, lead, mercury, uranium, plutonium, zinc, and others; not all 118 | U.S. public-health authority; profiles are peer reviewed and comprehensively evaluate toxicological and epidemiological evidence ([profile process](https://www.atsdr.cdc.gov/toxicological-profiles/about/index.html)) | Stable profile landing pages/PDFs; revisions are substance-specific | Most CDC/ATSDR information is public domain. Reuse requires agency attribution and a clear non-endorsement disclaimer; third-party-marked content remains excluded ([CDC use policy](https://www.cdc.gov/other/agencymaterials.html)) | A toxicological profile is not evidence of a beneficial biological role, and compound-specific hazards must not be stated as a property of the neutral element without qualification |
| [DOE superheavy-element overview](https://www.energy.gov/science/doe-explainssuperheavy-elements), [DOE isotope program](https://www.energy.gov/science/ip/isotope-rd-and-production-doe-ip), and discovery labs such as [ORNL](https://www.ornl.gov/group/sedg) | Laboratory production, isotope-specific applications, and honest “research only” context for heavy/superheavy elements | Excellent targeted coverage; not a general 118-element encyclopedia | First-party U.S. research funder and laboratories that produced/discovered relevant elements and isotopes | Stable government/lab HTML; individual pages are event-driven rather than systematic | Government information on DOE websites is public domain with requested attribution, while contractor or third-party material may retain rights ([DOE web policy](https://nes.energy.gov/web-policies)). Use DOE-authored text facts; inspect lab-page notices separately | Often discusses an isotope rather than the element generally. It must not be used to imply a whole-element application where only one isotope is useful |
| [Royal Society of Chemistry periodic table](https://periodic-table.rsc.org/Help/Uses) | The clearest editorial model: separate Uses, Biological role, and Natural abundance sections on element pages | Navigable coverage for all 118, including honest sparse entries for short-lived elements | Major professional chemical society with element-specific references | Stable human-readable element URLs; no documented public data API; some narrative/references are dated | RSC's website terms allow only personal, non-commercial, non-public copying and prohibit further distribution without written consent. Treat it as a cited research reference; do not scrape, bundle, or translate its prose ([RSC terms](https://www.rsc.org/help-and-legal/terms-of-use)) | “Natural abundance” does not explicitly normalize native/uncombined occurrence; some claims and examples need current specialist confirmation |
| [LANL periodic table](https://periodic.lanl.gov/index.shtml) and archived Jefferson Lab contributions exposed through PubChem | Explicit “Sources” and “Uses” prose, often including “found/not found free in nature” | LANL exposes entries across the table; PubChem preserves JLab contributions through element 118 | U.S. national laboratories, useful for nuclear and elemental context | LANL URLs are stable but the site calls itself an imperfect public service; old JLab element URLs now redirect, making PubChem provenance more stable than the original pages | No clear open licence for the LANL narrative; the current LANL operator asserts copyright elsewhere. JLab's published notice clearly grants reuse for images in limited contexts but does not provide an equally clear blanket licence for all text. Cite and corroborate; do not use either as a bulk prose source | Some wording and applications are historical. JLab direct-link stability is poor, and neither source provides a normalized biological-role field |

## Why PubChem is not a licensing shortcut

PubChem is valuable precisely because its PUG-View JSON keeps reference numbers beside individual values and lists the contributing source and licence metadata at the end of each record. For example, the Oganesson record distinguishes PubChem, IUPAC, Jefferson Lab, LANL, NIST, and IAEA contributions. It also identifies the IUPAC IPTEI contribution as CC BY-NC-ND 4.0 ([Oganesson record, references](https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/element/118/JSON)).

NCBI states that it places no restriction on molecular data distribution, but also warns that contributed or licensed resources—including PubChem content—may be protected and that NCBI cannot transfer rights it does not own ([NCBI policies](https://www.ncbi.nlm.nih.gov/home/about/policies/)). PubChem's own data-source documentation likewise says licensing and reuse conditions are defined by the contributing source ([PubChem data-source documentation](https://pubchem.ncbi.nlm.nih.gov/docs/data-sources)). Therefore the application must resolve provenance at annotation level; “from PubChem” is not a sufficient licence assessment.

## Recommended field-by-field hierarchy

### Natural occurrence

1. USGS commodity reports and geological publications when they cover the element or its principal ores.
2. DOE or another first-party government scientific source for radioactive/nuclear production context.
3. RSC/LANL as corroboration or a lead to more specific sources.

The description should say where the element occurs **chemically**: atmosphere, seawater, ores/minerals, or biological material. It should distinguish an element present in compounds from an uncombined elemental substance.

### Native occurrence

This needs its own controlled status, because no reviewed source above supplies a complete machine-readable native-element classification. Only mark an element as occurring in native/uncombined form when a source says so explicitly. “Occurs in an ore” is not evidence of native occurrence.

Use values such as `common`, `rare`, `trace_generated`, `not_found_free`, `laboratory_only`, and `unknown`. The text can then explain the status briefly. This is safer than forcing a yes/no answer.

### Biological role

1. NIH ODS for essential nutrient roles.
2. CDC/ATSDR for toxicity/exposure context.
3. Other first-party public-health or regulatory sources when necessary.
4. RSC as a cross-check for “no known biological role,” with original phrasing rather than copied text.

Do not collapse “no known biological role” into “safe,” and do not describe the toxicity of a particular ion, isotope, or compound as universal to every form of the element. Keep the content educational, not medical advice.

### Common uses

1. The latest USGS commodity summary for current bulk/commercial uses.
2. DOE, NASA, FDA, or another first-party agency for isotope-specific, medical, space, or nuclear applications.
3. PubChem's source-attributed Uses section, RSC, and LANL as corroboration and gap finders.

Prefer durable categories (“semiconductor devices,” “corrosion-resistant alloys”) over market shares or production figures that age quickly. State the isotope when an application depends on one—for example, americium-241 rather than undifferentiated americium.

## Synthetic-element and scarcity gaps

The UI should not divide the table into a simplistic natural/synthetic binary. DOE says 90 of the 118 known elements occur naturally on Earth, while its superheavy overview says elements 104 and above have only been observed after laboratory creation ([DOE natural-element count](https://www.energy.gov/science/np/articles/new-progress-toward-discovery-new-elements), [DOE superheavy overview](https://www.energy.gov/science/doe-explainssuperheavy-elements)). Between those statements lies important nuance:

- Technetium and promethium have no surviving primordial deposits but are generated naturally in minute quantities by nuclear processes. RSC's Promethium page, for example, describes trace production in uranium ore while also explaining why it is not found as a normal terrestrial resource ([RSC Promethium](https://periodic-table.rsc.org/element/61/promethium)).
- Neptunium, plutonium, and even americium can be reported in trace natural nuclear-process contexts, although their practical sources are reactors. They should not be presented as ordinary naturally available materials.
- Elements 104–118 are laboratory-created, short-lived, and principally research subjects. DOE notes that superheavy elements are highly radioactive and often so short-lived that production is inferred from decay chains. Their occurrence field should say `laboratory_only`, their native status should be `not_applicable`, and their use should normally be `research_only` unless a first-party source establishes otherwise.
- “No practical use,” “research only,” and “unknown” are distinct. “Unknown” means evidence is missing; “research only” is an established present use; “no established practical use” is an affirmative claim that needs a source.

These distinctions are more accurate than the proposed blanket sentence “Not naturally occurring” for every element commonly called synthetic.

## Bundled data and provenance design

The production artifact should contain reviewed descriptions, not fetched third-party prose. A practical record should include:

- one English source-of-truth summary per field, plus Swedish and Greek translations authored from that summary;
- a controlled status for each field so empty evidence never becomes an empty UI;
- source IDs attached per field, not just once per element;
- `reviewedAt` and optionally `reviewNotes` for unstable or disputed claims;
- a central source catalog containing title, publisher, canonical URL/DOI, licence/reuse note, and access date;
- qualifiers such as `isotopeSpecific`, `compoundSpecific`, `historicalUse`, and `uncertain` where needed.

Translations should preserve the same scientific claim and source IDs; they should not be independent translations of RSC, IUPAC-IPTEI, ODS, or other restricted prose. This keeps citation parity across English, Swedish, and Greek while avoiding an accidental derivative-work problem.

At build or CI time, validate that all 118 atomic numbers have all four sections, every non-placeholder statement has at least one source, every source ID resolves in the catalog, and every language has a value. API imports, if used to help editors, should be cached with source metadata and never overwrite reviewed prose automatically.

## Attribution and visible-source policy

The details drawer should show a compact “Sources” group with direct links for the claims shown. A global credits/about note should additionally state:

- original summaries and translations were prepared for this project;
- USGS, NIH, CDC/ATSDR, and DOE are acknowledged where used;
- reference to a government agency or product does not imply endorsement;
- third-party names and logos are not used as project branding;
- sources were last reviewed on the recorded date.

For USGS, CDC/ATSDR, and DOE material, retain the requested source attribution and non-endorsement language. Do not bundle source images unless their individual licence is verified. For RSC, LANL, JLab, and IUPAC restricted material, link to the relevant page and cite the facts, but keep the project's descriptions independently authored. If the project later wants to reproduce or closely translate RSC narrative, request written permission first.

## Decision

Proceed with an offline curated dataset and field-level citations. Use PubChem only as a development-time identity/provenance tool, not as the sole scientific source or a runtime service. Give priority to explicitly reusable government sources, use IUPAC for official identity, and treat professionally curated but restrictively licensed sources as references rather than copy sources. Preserve uncertainty for synthetic and trace-natural elements instead of filling gaps with overconfident generalizations.
