# Translation and terminology strategy

## Decision

Use one approved, source-backed English record as the semantic master for each element, then produce Swedish and Greek as independent translations from that master. Do not translate from one target language to the other, and do not let translators silently add facts from localized sources. Localized sources are terminology and naturalness checks; the factual claim and citations remain shared across languages.

The content should be concept-locked, not sentence-locked: each element has the same four claim slots in every language (`naturalOccurrence`, `nativeOccurrence`, `biologicalRole`, and `commonUses`), the same status/uncertainty values, and the same source IDs. Translators may change syntax and word order so the result sounds native, but may not change the scientific meaning, scope, certainty, examples, numbers, or chemical form.

Machine translation can assist a first draft, but no Swedish or Greek element-context text should ship without human bilingual revision and native-language review. The European Commission's translation-quality system makes the same useful distinction: **revision** compares target and source for accuracy/completeness, while **review** checks the target alone for clarity, tone, and audience suitability ([European Commission, “Translation quality”](https://translation.ec.europa.eu/languages-and-translation-european-commission/translation-quality_en)).

## Authority hierarchy

No single reference governs all three languages and all four subject areas. Use a small hierarchy and record which authority settled each term.

### English

1. **Element identity:** IUPAC's current periodic table is authoritative for atomic number, symbol, and English name. The current downloadable table is dated 4 May 2022 and uses international spellings such as *aluminium*, *caesium*, and *sulfur* ([IUPAC periodic table](https://iupac.org/what-we-do/periodic-table-of-elements/)). Use those spellings consistently rather than mixing US spellings from another data source.
2. **Chemical concepts and nomenclature:** use the IUPAC Gold Book for definitions. Its definition separates the atom-species sense of “chemical element” from the pure-substance sense, a distinction that matters when writing about an element in organisms versus elemental material ([IUPAC Gold Book, “chemical element”](https://goldbook.iupac.org/terms/view/C01022)). Use the IUPAC Red Book for inorganic compound names; IUPAC describes it as its definitive guide to inorganic names and formulae ([IUPAC Red Book](https://iupac.org/what-we-do/books/redbook/)).
3. **Mineral names:** use the current IMA-CNMNC list as the canonical international mineral identity. The commission controls new mineral names and maintains the official list of approved, renamed, and grandfathered minerals ([IMA-CNMNC](https://cnmnc.units.it/)).
4. **Field-specific prose:** use the claim sources selected by the separate source/data research. The Royal Society of Chemistry's element pages are a useful editorial model because they explicitly distinguish “Uses,” “Biological role,” and “Natural abundance” ([RSC field guide](https://periodic-table.rsc.org/Help/Uses)); they do not remove the need for corroboration or a license check.

### Swedish

1. **Element names and chemistry terminology:** the Svenska Kemisamfundet Nomenklaturutskott is the first national reference. It explicitly translates new chemical names and terms into Swedish and works with IUPAC and Swedish terminology bodies ([Nomenklaturutskottet](https://kemisamfundet.se/om-oss/utskott/nomenklaturutskottet/)). Its *Fickfakta kemi* material was prepared by the committee and contains the Swedish names, symbols, and numbers for the elements ([Fickfakta chemistry data](https://kemisamfundet.se/fick_app/)); its Swedish chemistry writing rules also publish a symbol-to-name list for all 118 elements ([Svenska skrivregler för kemi](https://kemisamfundet.se/wp-content/uploads/2020/05/Skrivregler-S%C3%A4rtryck-Kemisk-Tidskrift.pdf)).
2. **Geology and mineral wording:** Sveriges geologiska undersökning (SGU) is the preferred Swedish-domain check. SGU distinguishes minerals that are compounds from elemental minerals and uses wording such as *gedigen form* for naturally occurring uncombined material ([SGU, “Mineral”](https://www.sgu.se/om-geologi/mineral/)). Use an SGU-established Swedish mineral name when one exists; otherwise retain the IMA name rather than inventing a Swedish form.
3. **Biology/nutrition wording:** prefer Swedish public-science or government sources in the relevant domain. For example, Livsmedelsverket uses *mineraler och spårämnen* and describes iron as a life-essential trace element ([Livsmedelsverket terminology](https://www.livsmedelsverket.se/livsmedel-och-innehall/naringsamne/livsmedelsdatabasen/sok-naringsinnehall/ordlista-for-sok-naringsinnehall/naringsamnen)).
4. **General spelling and readability:** Svenska Akademiens ordlista is the spelling/inflection norm, while Isof's clear-language guidance says specialist terms should be explained for general readers ([Svenska Akademiens dictionaries](https://svenska.se/om/om-ordbockerna/); [Isof clear-language guidance](https://www.isof.se/svenska-spraket/klarsprak/lar-dig-mer-om-klarsprak/vad-ar-klarsprak)). Chemistry-specific authority overrides a general dictionary when they differ.

### Greek

There is no single, clearly maintained Greek national list that can be treated as the sole authority for all 118 names and all supporting terminology. Use triangulation, and require a Greek chemistry reviewer for disputed forms.

1. **Element names:** use the National and Kapodistrian University of Athens Department of Chemistry table as the initial 1–118 list; its physical-chemistry laboratory page explicitly offers a table with Greek names for elements 1–118 ([NKUA course resources](https://jupiter.chem.uoa.gr/pchem/courses/); [Greek 1–118 table PDF](https://jupiter.chem.uoa.gr/pchem/courses/periodic_table_gr.pdf)). Check modern spelling and stress against the Academy of Athens *Modern Greek Usage Dictionary*, which covers scientific vocabulary and chemical formulae ([Academy of Athens dictionary](https://christikolexiko.academyofathens.gr/)). Where these disagree, escalate to a native Greek chemist and record the decision in the project glossary. This is a real, not theoretical, risk: the NKUA table gives `Τενεσσίνιο` and `Ογκανέσιο`, while the Academy dictionary records `τενέσιο` and `ογκανέσιο`; the existing project already uses a third form, `Ογκανεσόνιο`. Atomic number 117 and 118 therefore require an explicit recorded decision rather than an automatic transliteration.
2. **Educational chemistry and biology:** the Greek Ministry of Education's official textbooks are the preferred public-facing terminology corpus. They use *βιολογικός ρόλος*, *ιχνοστοιχεία*, and distinguish chemical elements in Earth's crust from those incorporated in biomolecules ([official biology text, “Η χημεία της ζωής”](https://ebooks.edu.gr/ebooks/v/html/8547/2668/Biologia_B-Lykeiou_html-empl/index1_1.html)). They also demonstrate *σε ελεύθερη μορφή* for an element present in uncombined form ([official materials-technology text](https://ebooks.edu.gr/ebooks/v/pdf/8547/4224/24-0174-02_V2_Technologia-Ylikon_G-EPAL-Efarmosmenon-Technon_Vivlio-Mathiti/)).
3. **Specialist adjudication:** use the Association of Greek Chemists and a Greek university chemistry/mineralogy specialist to resolve new-element, compound, and native-mineral terminology. The Association publishes proceedings devoted to chemistry teaching and nomenclature/terminology ([Association of Greek Chemists proceedings](https://new.eex.gr/wp-content/uploads/2024/03/Conference_proceedings_April_2024.pdf)).

### Cross-language terminology

Use IATE as a **secondary cross-check**, not as the sole chemistry authority. IATE is maintained on behalf of EU institutions specifically to manage and standardize multilingual terminology, supports the EU's 24 official languages, and exposes source/entry context ([EU Translation Centre, IATE](https://www.cdt.europa.eu/en/iate)). Accept an IATE match only when its subject domain and reliability/source metadata fit the chemical concept; then confirm it against the national sources above.

## Controlled UI terminology

These labels are short enough for the drawer and natural to a general audience. The parenthetical definition prevents “free” from being confused with abundance, availability, or cost.

| Concept | English | Swedish | Greek |
| --- | --- | --- | --- |
| Natural occurrence | Occurrence in nature | Förekomst i naturen | Παρουσία στη φύση |
| Native occurrence (UI) | Free form in nature | Fri form i naturen | Ελεύθερη μορφή στη φύση |
| Native occurrence (first-use definition) | Uncombined elemental form, called native occurrence in geology | Obunden grundämnesform, inom geologin kallad gedigen form | Ελεύθερη στοιχειακή μορφή, στη γεωλογία αυτοφυής μορφή |
| Biological role | Biological role | Biologisk roll | Βιολογικός ρόλος |
| Common uses | Common uses | Vanliga användningsområden | Συνήθεις χρήσεις |
| No known biological role | No known biological role | Ingen känd biologisk roll | Δεν έχει γνωστό βιολογικό ρόλο |
| No confirmed natural occurrence | No natural occurrence has been confirmed | Ingen naturlig förekomst har bekräftats | Δεν έχει επιβεβαιωθεί παρουσία του στη φύση |
| Research-only use | No practical use outside research is established | Ingen praktisk användning utanför forskning är känd | Δεν είναι γνωστή πρακτική χρήση πέρα από την έρευνα |
| Trace occurrence | Occurs only in trace amounts | Förekommer endast i spårmängder | Απαντάται μόνο σε ίχνη |

“Native occurrence” may remain the internal schema key, but **Free form in nature / Fri form i naturen / Ελεύθερη μορφή στη φύση** is clearer UI copy. Do not label carbon in cells, calcium in bones, sodium ions in body fluids, or an element contained in a mineral as “free in nature.” That section is true only when the element occurs as an elemental substance rather than chemically bound in a compound.

## Editorial and terminology rules

### Preserve chemical meaning

- Tie element names to `atomicNumber` and `symbol`, never to fuzzy name matching. Symbols, formulae, isotope notation, numerals, and SI units are language-invariant.
- Explicitly distinguish an **element** from its **ions, isotopes, allotropes, compounds, minerals, and alloys**. Prefer “iron is present in haemoglobin as iron ions” over wording that implies pieces of elemental iron are in blood. Prefer “calcium occurs mainly in compounds such as…” over “calcium is found…” when elemental calcium is not meant.
- Use *elemental/uncombined* only for the pure-substance concept. Use *contains the element* or *is a compound of* for minerals and biomolecules.
- Preserve modality exactly: *is*, *can*, *may*, *has been detected*, *is not known*, and *has not been confirmed* are not interchangeable. Never turn absence of evidence into “does not exist.”
- Do not infer “not naturally occurring,” “no biological role,” or “research only” merely because a source field is blank. These are positive editorial claims and require support.
- Do not imply that presence in the body means beneficial, essential, safe, or present in elemental form. Toxicity and biological essentiality may depend on chemical species; IUPAC defines a chemical species of an element by isotope, electronic/oxidation state, and molecular structure ([IUPAC Gold Book, “chemical species of an element”](https://goldbook.iupac.org/terms/view/CT06859)).

### Minerals and compounds

- Give every recurring entity a language-neutral concept ID, for example `mineral:hematite`, `compound:sodium-chloride`, or `bioconcept:hemoglobin`. Store one approved label per language in a glossary instead of retyping it in 118 records.
- For a mineral, use the IMA-approved identity as the canonical key. Display a well-attested localized name from SGU, a Greek university/textbook, or another national authority. If none is attested, retain the IMA name and add the formula where it helps; do not manufacture a transliteration.
- For compounds, prefer the familiar public name when unambiguous, with the systematic/localized chemical name on first mention where useful: for example, “table salt (sodium chloride).” The formula can disambiguate a rare compound without forcing dense nomenclature into the prose.
- Chemical formulae must remain identical across languages and should not be translated or inflected. The surrounding noun phrase may be inflected naturally.
- Common names and systematic names are not freely interchangeable. Record both in the glossary when the copy may use both.

### Biological concepts

- Use the same concept IDs for biomolecules and processes across languages (`hemoglobin`, `thyroid-hormone-synthesis`, `nerve-signalling`). Validate Swedish terms against Swedish health/biology authorities and Greek terms against official education or university sources.
- State the relevant chemical form when it affects truth: element, ion, isotope, compound, or cofactor. This is mandatory for claims involving nutrition, metabolism, toxicity, or medicine.
- “Biological role” means an established function in living organisms, not mere detection or exposure. If an element accumulates but has no established function, say so explicitly.
- Avoid health advice, dosage, deficiency-treatment, and safety conclusions. The feature is descriptive educational content, not medical guidance.

### Target-language style

- Translate meaning, not English syntax. Swedish should use ordinary modern compounds and concise active sentences; Greek should use contemporary monotonic Greek and natural sentence order.
- Keep the register suitable for a curious general reader (roughly lower-secondary reading level) while retaining necessary scientific terms. Explain a specialist term at first use rather than replacing it with an inaccurate everyday word.
- Use one grammatical form per glossary entry. Element names appear in normal sentence case; symbols retain IUPAC capitalization.
- Do not expose unreviewed English fallback inside Swedish or Greek detail prose. A missing translation should fail validation, not silently mix languages.

## Translation workflow for 118 elements

The unit of work is one element record, not one isolated sentence. There are 118 records × 4 sections = 472 English content units and 944 target-language units. Short, structured units make complete review realistic.

1. **Lock the English fact.** A science editor approves the four English slots, structured status values, claim/source IDs, and uncertainty. No translation begins while the English record is changing.
2. **Extract the glossary first.** Before bulk translation, collect all element names, minerals, compounds, biological concepts, fixed fallback sentences, and UI labels. Each entry contains a concept ID, EN/SV/EL preferred term, allowed synonym if any, disallowed forms, source URL, reviewer, and decision date.
3. **Resolve the high-risk name list.** Audit the existing 118 Swedish and Greek names against their national references. The current Greek data should not be assumed correct: the NKUA table and the Academy dictionary use forms that differ from some common web variants, particularly for several recently named elements. Resolve and document every mismatch before translating prose.
4. **Translate in 12 batches.** Process atomic numbers 1–10, 11–20, and so on, with the final batch 111–118. A native Swedish translator and native Greek translator work independently from the same approved English batch, using the locked glossary.
5. **Bilingual scientific revision.** A second qualified person compares every target unit with English, checking subject/predicate, chemical form, examples, negation, certainty, numbers, and source scope. For this small educational corpus, all 944 target units should receive this pass rather than a sample.
6. **Monolingual review.** A native reader reviews every translated record without leaning on the English syntax, checking naturalness, clarity, inflection, repetition, and fit in the drawer. This follows the Commission's revision/review distinction cited above.
7. **Risk-based chemistry sign-off.** A chemistry subject-matter reviewer signs off every unit that mentions biological function, toxicity, radioactivity, medicine, nuclear use, disputed natural occurrence, or synthetic/superheavy elements. For low-risk use examples, the reviewer can review batches, but no record ships without the bilingual revision.
8. **Render and regression check.** Review all three languages at desktop and mobile widths. Test long Swedish compounds and long Greek inflections, formulas, source links, screen-reader headings, and the language switch while the same element remains selected.
9. **Freeze and record provenance.** Store `reviewedBy`, `reviewedAt`, `sourceRevision`, and a content version. A later English edit invalidates both translations for that field until they are re-reviewed.

### Automated release gates

Add a validation script that fails the build unless all of these hold:

- exactly 118 records exist, uniquely keyed by atomic number 1–118;
- every record has all four fields in `en`, `sv`, and `el`, with no empty or English-fallback target value;
- the three language variants share identical claim IDs, source IDs, structured native-occurrence status, and biological-role status;
- element symbols, chemical formula tokens, isotope numbers, other numerals, units, and URLs match the English source record unless an intentional locale-format exception is declared;
- every glossary concept referenced by content has approved labels in all three languages;
- a terminology linter rejects documented disallowed variants and flags unapproved transliterations;
- a negation/modality check flags loss of terms equivalent to *not known*, *not confirmed*, *may*, *trace*, and *only* for human review;
- every target field has translator and reviewer metadata later than the last English edit;
- Unicode is normalized to NFC, Greek text uses monotonic accents consistently, and no mojibake/replacement characters are present;
- rendered text stays within the drawer/sheet without clipping and source links remain reachable.

Automated checks cannot establish scientific correctness or idiomatic translation. Their purpose is to catch omissions, drift, and mechanically detectable mismatches before the human reviewers spend time on the prose.

## Acceptance checklist

The translation strategy is ready to implement when:

- the four UI labels and fallback phrases above are accepted;
- the complete 118-name Swedish and Greek tables have been audited and disputed Greek modern-element forms adjudicated;
- the multilingual concept glossary exists and is version-controlled;
- English claim records are frozen and source IDs are stable;
- a named native Swedish reviewer, native Greek reviewer, and chemistry reviewer are assigned;
- the 12-batch checklist and automated validator are part of the pull-request gate;
- no target-language record can silently fall back to English.

This workflow gives full three-language parity without requiring three independent scientific research projects. Scientific claims are researched once, equivalence is enforced structurally, terminology is reused through a controlled glossary, and every short target unit still receives human accuracy and naturalness review.
