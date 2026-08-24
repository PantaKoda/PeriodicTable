import type {
  BiologicalRoleStatus,
  ElementContext,
  LocalizedText,
  NativeOccurrenceStatus,
  UseStatus,
} from '../element-context-types'

type Copy = readonly [en: string, sv: string, el: string]
type SourcedCopy = readonly [copy: Copy, sourceIds: string[]]
type NativeCopy = readonly [status: NativeOccurrenceStatus, copy: Copy, sourceIds: string[]]
type BiologicalCopy = readonly [status: BiologicalRoleStatus, copy: Copy, sourceIds: string[]]
type UsesCopy = readonly [status: UseStatus, copy: Copy, sourceIds: string[]]

const localized = ([en, sv, el]: Copy): LocalizedText => ({ en, sv, el })

const context = (
  atomicNumber: number,
  [naturalCopy, naturalSources]: SourcedCopy,
  [nativeStatus, nativeCopy, nativeSources]: NativeCopy,
  [biologicalStatus, biologicalCopy, biologicalSources]: BiologicalCopy,
  [useStatus, usesCopy, usesSources]: UsesCopy,
): ElementContext => ({
  atomicNumber,
  naturalOccurrence: { text: localized(naturalCopy), sourceIds: naturalSources },
  nativeOccurrence: { status: nativeStatus, text: localized(nativeCopy), sourceIds: nativeSources },
  biologicalRole: { status: biologicalStatus, text: localized(biologicalCopy), sourceIds: biologicalSources },
  commonUses: { status: useStatus, text: localized(usesCopy), sourceIds: usesSources },
  reviewedAt: '2026-08-24',
})

export const elementContexts1To40: ElementContext[] = [
  context(
    1,
    [[
      'Hydrogen is abundant in stars and occurs on Earth mainly in water and organic compounds.',
      'Väte är vanligt i stjärnor och förekommer på jorden främst i vatten och organiska föreningar.',
      'Το υδρογόνο αφθονεί στα άστρα και στη Γη απαντά κυρίως στο νερό και σε οργανικές ενώσεις.',
    ], ['rsc']],
    ['rare', [
      'Small amounts of uncombined molecular hydrogen occur in the atmosphere and some volcanic gases.',
      'Små mängder obundet molekylärt väte förekommer i atmosfären och i vissa vulkaniska gaser.',
      'Μικρές ποσότητες ελεύθερου μοριακού υδρογόνου υπάρχουν στην ατμόσφαιρα και σε ορισμένα ηφαιστειακά αέρια.',
    ], ['rsc']],
    ['essential', [
      'Hydrogen atoms are part of water and nearly every organic molecule in living cells.',
      'Väteatomer ingår i vatten och i nästan alla organiska molekyler i levande celler.',
      'Άτομα υδρογόνου αποτελούν μέρος του νερού και σχεδόν κάθε οργανικού μορίου στα ζωντανά κύτταρα.',
    ], ['rsc']],
    ['established', [
      'Hydrogen is used to make ammonia, refine fuels and, in fuel cells, produce electricity.',
      'Väte används för att framställa ammoniak, raffinera bränslen och producera el i bränsleceller.',
      'Το υδρογόνο χρησιμοποιείται για παραγωγή αμμωνίας, διύλιση καυσίμων και παραγωγή ηλεκτρισμού σε κυψέλες καυσίμου.',
    ], ['pubchem', 'rsc']],
  ),
  context(
    2,
    [[
      'Helium is made by radioactive decay in rocks and accumulates in some natural-gas deposits.',
      'Helium bildas vid radioaktivt sönderfall i berg och samlas i vissa naturgasfyndigheter.',
      'Το ήλιο παράγεται από ραδιενεργές διασπάσεις στα πετρώματα και συσσωρεύεται σε ορισμένα κοιτάσματα φυσικού αερίου.',
    ], ['usgs', 'rsc']],
    ['common', [
      'Because it is chemically inert, naturally occurring helium is present as uncombined atoms.',
      'Eftersom helium är kemiskt inert förekommer naturligt helium som obundna atomer.',
      'Επειδή είναι χημικά αδρανές, το φυσικό ήλιο απαντά ως ελεύθερα άτομα.',
    ], ['rsc']],
    ['none-known', [
      'Helium has no known biological role.',
      'Helium har ingen känd biologisk roll.',
      'Το ήλιο δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Liquid helium cools MRI magnets and scientific instruments; the gas also provides inert atmospheres.',
      'Flytande helium kyler MR-magneter och vetenskapliga instrument; gasen ger också inerta atmosfärer.',
      'Το υγρό ήλιο ψύχει μαγνήτες μαγνητικής τομογραφίας και επιστημονικά όργανα· το αέριο παρέχει επίσης αδρανή ατμόσφαιρα.',
    ], ['usgs', 'rsc']],
  ),
  context(
    3,
    [[
      'Lithium occurs in minerals and in brines, always chemically combined.',
      'Litium förekommer i mineral och saltlösningar, alltid kemiskt bundet.',
      'Το λίθιο απαντά σε ορυκτά και άλμες, πάντοτε χημικά δεσμευμένο.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Its high reactivity means lithium is not found naturally as free metal.',
      'Litiums höga reaktivitet gör att det inte förekommer naturligt som fri metall.',
      'Λόγω της υψηλής δραστικότητάς του, το λίθιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['none-known', [
      'Lithium has no established essential biological role.',
      'Litium har ingen fastställd livsnödvändig biologisk roll.',
      'Το λίθιο δεν έχει τεκμηριωμένο απαραίτητο βιολογικό ρόλο.',
    ], ['rsc']],
    ['established', [
      'Lithium compounds are central to rechargeable batteries and are also used in ceramics and glass.',
      'Litiumföreningar är centrala i laddningsbara batterier och används även i keramik och glas.',
      'Οι ενώσεις λιθίου είναι βασικές στις επαναφορτιζόμενες μπαταρίες και χρησιμοποιούνται επίσης σε κεραμικά και γυαλί.',
    ], ['usgs']],
  ),
  context(
    4,
    [[
      'Beryllium occurs in minerals such as beryl and bertrandite.',
      'Beryllium förekommer i mineral som beryll och bertrandit.',
      'Το βηρύλλιο απαντά σε ορυκτά όπως ο βήρυλλος και ο βερτρανδίτης.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Beryllium is not found naturally as uncombined metal.',
      'Beryllium förekommer inte naturligt som obunden metall.',
      'Το βηρύλλιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['hazardous', [
      'No biological role is known, and inhaling beryllium dust can cause serious lung disease.',
      'Ingen biologisk roll är känd, och inandning av berylliumdamm kan orsaka allvarlig lungsjukdom.',
      'Δεν είναι γνωστός βιολογικός ρόλος, ενώ η εισπνοή σκόνης βηρυλλίου μπορεί να προκαλέσει σοβαρή πνευμονοπάθεια.',
    ], ['cdc-atsdr']],
    ['specialized', [
      'Light, stiff beryllium alloys are used in aerospace, precision instruments and X-ray windows.',
      'Lätta och styva berylliumlegeringar används inom flyg- och rymdteknik, precisionsinstrument och röntgenfönster.',
      'Ελαφρά και άκαμπτα κράματα βηρυλλίου χρησιμοποιούνται στην αεροδιαστημική, σε όργανα ακριβείας και σε παράθυρα ακτίνων Χ.',
    ], ['usgs', 'rsc']],
  ),
  context(
    5,
    [[
      'Boron occurs in borate minerals deposited especially in dry lake basins.',
      'Bor förekommer i boratmineral som avlagras särskilt i torra sjöbäcken.',
      'Το βόριο απαντά σε βορικά ορυκτά, ιδιαίτερα σε αποθέσεις ξηρών λεκανών λιμνών.',
    ], ['usgs']],
    ['not-found-free', [
      'Boron is not normally found in nature as an uncombined element.',
      'Bor förekommer normalt inte i naturen som obundet grundämne.',
      'Το βόριο συνήθως δεν βρίσκεται στη φύση ως ελεύθερο στοιχείο.',
    ], ['rsc']],
    ['essential', [
      'Boron is essential for plant growth; no essential role in humans has been established.',
      'Bor är nödvändigt för växters tillväxt; någon livsnödvändig roll hos människor har inte fastställts.',
      'Το βόριο είναι απαραίτητο για την ανάπτυξη των φυτών· δεν έχει τεκμηριωθεί απαραίτητος ρόλος στον άνθρωπο.',
    ], ['rsc', 'nih-ods']],
    ['established', [
      'Borate compounds are used in heat-resistant glass, ceramics, detergents and fertilizers.',
      'Boratföreningar används i värmetåligt glas, keramik, tvättmedel och gödselmedel.',
      'Οι βορικές ενώσεις χρησιμοποιούνται σε θερμοανθεκτικό γυαλί, κεραμικά, απορρυπαντικά και λιπάσματα.',
    ], ['usgs']],
  ),
  context(
    6,
    [[
      'Carbon occurs in carbonate rocks, fossil fuels, the atmosphere and all known living organisms.',
      'Kol förekommer i karbonatbergarter, fossila bränslen, atmosfären och alla kända levande organismer.',
      'Ο άνθρακας απαντά σε ανθρακικά πετρώματα, ορυκτά καύσιμα, στην ατμόσφαιρα και σε όλους τους γνωστούς ζωντανούς οργανισμούς.',
    ], ['rsc']],
    ['common', [
      'Native carbon occurs as graphite and diamond, while most natural carbon is chemically bound.',
      'Gedigen kol förekommer som grafit och diamant, medan det mesta naturliga kolet är kemiskt bundet.',
      'Αυτοφυής άνθρακας απαντά ως γραφίτης και διαμάντι, ενώ ο περισσότερος φυσικός άνθρακας είναι χημικά δεσμευμένος.',
    ], ['usgs', 'rsc']],
    ['essential', [
      'Carbon forms the molecular framework of proteins, carbohydrates, fats and nucleic acids.',
      'Kol bildar molekylstommen i proteiner, kolhydrater, fetter och nukleinsyror.',
      'Ο άνθρακας σχηματίζει τον μοριακό σκελετό πρωτεϊνών, υδατανθράκων, λιπών και νουκλεϊκών οξέων.',
    ], ['rsc']],
    ['established', [
      'Carbon materials are used in steelmaking, electrodes, filters, cutting tools and composites.',
      'Kolmaterial används vid ståltillverkning, i elektroder, filter, skärverktyg och kompositer.',
      'Υλικά άνθρακα χρησιμοποιούνται στη χαλυβουργία, σε ηλεκτρόδια, φίλτρα, κοπτικά εργαλεία και σύνθετα υλικά.',
    ], ['usgs', 'rsc']],
  ),
  context(
    7,
    [[
      'Nitrogen makes up about 78% of Earth’s atmosphere and also occurs in nitrates and living tissue.',
      'Kväve utgör cirka 78 % av jordens atmosfär och förekommer även i nitrater och levande vävnad.',
      'Το άζωτο αποτελεί περίπου το 78% της γήινης ατμόσφαιρας και υπάρχει επίσης σε νιτρικά άλατα και ζωντανούς ιστούς.',
    ], ['rsc']],
    ['common', [
      'Atmospheric nitrogen occurs naturally as uncombined N₂ molecules.',
      'Atmosfäriskt kväve förekommer naturligt som obundna N₂-molekyler.',
      'Το ατμοσφαιρικό άζωτο απαντά φυσικά ως ελεύθερα μόρια N₂.',
    ], ['rsc']],
    ['essential', [
      'Nitrogen is part of amino acids, proteins and nucleic acids; organisms use it in chemically bound forms.',
      'Kväve ingår i aminosyror, proteiner och nukleinsyror; organismer använder det i kemiskt bundna former.',
      'Το άζωτο αποτελεί μέρος αμινοξέων, πρωτεϊνών και νουκλεϊκών οξέων· οι οργανισμοί το χρησιμοποιούν σε χημικά δεσμευμένες μορφές.',
    ], ['rsc']],
    ['established', [
      'Nitrogen is used to make ammonia and fertilizers, while liquid nitrogen provides rapid cooling.',
      'Kväve används för att framställa ammoniak och gödselmedel, medan flytande kväve ger snabb kylning.',
      'Το άζωτο χρησιμοποιείται για παραγωγή αμμωνίας και λιπασμάτων, ενώ το υγρό άζωτο προσφέρει ταχεία ψύξη.',
    ], ['usgs', 'rsc']],
  ),
  context(
    8,
    [[
      'Oxygen occurs as O₂ in air, in water and chemically bound throughout rocks and minerals.',
      'Syre förekommer som O₂ i luften, i vatten och kemiskt bundet i bergarter och mineral.',
      'Το οξυγόνο απαντά ως O₂ στον αέρα, στο νερό και χημικά δεσμευμένο σε πετρώματα και ορυκτά.',
    ], ['rsc']],
    ['common', [
      'Uncombined molecular oxygen is abundant in the atmosphere.',
      'Obundet molekylärt syre finns i stor mängd i atmosfären.',
      'Το ελεύθερο μοριακό οξυγόνο αφθονεί στην ατμόσφαιρα.',
    ], ['rsc']],
    ['essential', [
      'Most complex organisms use oxygen in cellular respiration to release energy from food.',
      'De flesta komplexa organismer använder syre i cellandningen för att frigöra energi ur föda.',
      'Οι περισσότεροι σύνθετοι οργανισμοί χρησιμοποιούν οξυγόνο στην κυτταρική αναπνοή για να απελευθερώνουν ενέργεια από την τροφή.',
    ], ['rsc']],
    ['established', [
      'Oxygen supports steelmaking, medical oxygen systems, welding and chemical manufacture.',
      'Syre används vid ståltillverkning, i medicinska syrgassystem, svetsning och kemisk produktion.',
      'Το οξυγόνο χρησιμοποιείται στη χαλυβουργία, σε ιατρικά συστήματα οξυγόνου, στη συγκόλληση και στη χημική παραγωγή.',
    ], ['pubchem', 'rsc']],
  ),
  context(
    9,
    [[
      'Fluorine occurs naturally only in compounds, notably in fluorite, fluorapatite and cryolite.',
      'Fluor förekommer naturligt endast i föreningar, särskilt i fluorit, fluorapatit och kryolit.',
      'Το φθόριο απαντά φυσικά μόνο σε ενώσεις, κυρίως στον φθορίτη, τον φθοραπατίτη και τον κρυόλιθο.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Elemental fluorine is too reactive to persist freely in nature.',
      'Elementärt fluor är alltför reaktivt för att bestå i fri form i naturen.',
      'Το στοιχειακό φθόριο είναι υπερβολικά δραστικό για να παραμένει ελεύθερο στη φύση.',
    ], ['rsc']],
    ['present', [
      'Fluoride ions occur in teeth and bones, but fluorine is not universally classified as an essential nutrient.',
      'Fluoridjoner förekommer i tänder och ben, men fluor räknas inte allmänt som ett livsnödvändigt näringsämne.',
      'Ιόντα φθορίου υπάρχουν στα δόντια και στα οστά, αλλά το φθόριο δεν ταξινομείται καθολικά ως απαραίτητο θρεπτικό στοιχείο.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Fluorine compounds are used in fluoropolymers, refrigerants and fluoride dental products.',
      'Fluorföreningar används i fluorpolymerer, köldmedier och tandvårdsprodukter med fluorid.',
      'Οι ενώσεις φθορίου χρησιμοποιούνται σε φθοροπολυμερή, ψυκτικά μέσα και οδοντιατρικά προϊόντα με φθοριούχα άλατα.',
    ], ['pubchem', 'rsc']],
  ),
  context(
    10,
    [[
      'Neon is a trace gas in Earth’s atmosphere and is more abundant in the wider universe.',
      'Neon är en spårgas i jordens atmosfär och är vanligare i universum i stort.',
      'Το νέον είναι ιχνοαέριο στη γήινη ατμόσφαιρα και είναι αφθονότερο στο ευρύτερο σύμπαν.',
    ], ['rsc']],
    ['common', [
      'As an inert noble gas, natural neon occurs as uncombined atoms.',
      'Som inert ädelgas förekommer naturligt neon som obundna atomer.',
      'Ως αδρανές ευγενές αέριο, το φυσικό νέον απαντά ως ελεύθερα άτομα.',
    ], ['rsc']],
    ['none-known', [
      'Neon has no known biological role.',
      'Neon har ingen känd biologisk roll.',
      'Το νέον δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Neon is used in bright discharge signs, indicators, lasers and some cryogenic systems.',
      'Neon används i lysande urladdningsskyltar, indikatorer, lasrar och vissa kryogena system.',
      'Το νέον χρησιμοποιείται σε φωτεινές επιγραφές εκκένωσης, ενδείξεις, λέιζερ και ορισμένα κρυογενικά συστήματα.',
    ], ['rsc']],
  ),
  context(
    11,
    [[
      'Sodium is widespread in salts, especially sodium chloride in seawater and evaporite deposits.',
      'Natrium är utbrett i salter, särskilt natriumklorid i havsvatten och evaporitavlagringar.',
      'Το νάτριο είναι διαδεδομένο σε άλατα, ιδίως ως χλωριούχο νάτριο στο θαλασσινό νερό και σε εξατμισιγενή κοιτάσματα.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Reactive sodium is not found naturally as free metal.',
      'Det reaktiva natriumet förekommer inte naturligt som fri metall.',
      'Το δραστικό νάτριο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['essential', [
      'Sodium ions help regulate body fluids and support nerve and muscle function.',
      'Natriumjoner hjälper till att reglera kroppsvätskor och stödjer nerv- och muskelfunktion.',
      'Τα ιόντα νατρίου συμβάλλουν στη ρύθμιση των σωματικών υγρών και στη λειτουργία νεύρων και μυών.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Sodium compounds are used in glass, paper, detergents and many chemical processes.',
      'Natriumföreningar används i glas, papper, tvättmedel och många kemiska processer.',
      'Οι ενώσεις νατρίου χρησιμοποιούνται σε γυαλί, χαρτί, απορρυπαντικά και πολλές χημικές διεργασίες.',
    ], ['usgs', 'rsc']],
  ),
  context(
    12,
    [[
      'Magnesium occurs in minerals such as magnesite and dolomite and as dissolved ions in seawater.',
      'Magnesium förekommer i mineral som magnesit och dolomit samt som lösta joner i havsvatten.',
      'Το μαγνήσιο απαντά σε ορυκτά όπως ο μαγνησίτης και ο δολομίτης και ως διαλυμένα ιόντα στο θαλασσινό νερό.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Magnesium is not found naturally as uncombined metal because it reacts readily.',
      'Magnesium förekommer inte naturligt som obunden metall eftersom det reagerar lätt.',
      'Το μαγνήσιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο επειδή αντιδρά εύκολα.',
    ], ['rsc']],
    ['essential', [
      'Magnesium ions are essential to many enzymes and are central to chlorophyll in plants.',
      'Magnesiumjoner är nödvändiga för många enzymer och utgör centrum i växternas klorofyll.',
      'Τα ιόντα μαγνησίου είναι απαραίτητα για πολλά ένζυμα και βρίσκονται στο κέντρο της χλωροφύλλης των φυτών.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Magnesium is used in light alloys, metal processing, refractory materials and chemical products.',
      'Magnesium används i lättmetallegeringar, metallbearbetning, eldfasta material och kemiska produkter.',
      'Το μαγνήσιο χρησιμοποιείται σε ελαφρά κράματα, στην κατεργασία μετάλλων, σε πυρίμαχα υλικά και χημικά προϊόντα.',
    ], ['usgs']],
  ),
  context(
    13,
    [[
      'Aluminium is abundant in Earth’s crust, chiefly in aluminosilicate minerals and bauxite.',
      'Aluminium är vanligt i jordskorpan, främst i aluminiumsilikatmineral och bauxit.',
      'Το αργίλιο αφθονεί στον φλοιό της Γης, κυρίως σε αργιλοπυριτικά ορυκτά και στον βωξίτη.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Aluminium is not normally found as free metal because it binds strongly with oxygen.',
      'Aluminium förekommer normalt inte som fri metall eftersom det binds starkt till syre.',
      'Το αργίλιο συνήθως δεν βρίσκεται ως ελεύθερο μέταλλο επειδή δεσμεύεται ισχυρά με το οξυγόνο.',
    ], ['rsc']],
    ['none-known', [
      'Aluminium has no known essential biological role.',
      'Aluminium har ingen känd livsnödvändig biologisk roll.',
      'Το αργίλιο δεν έχει γνωστό απαραίτητο βιολογικό ρόλο.',
    ], ['cdc-atsdr', 'rsc']],
    ['established', [
      'Aluminium is used in transport, buildings, electrical conductors, packaging and many alloys.',
      'Aluminium används i transportmedel, byggnader, elektriska ledare, förpackningar och många legeringar.',
      'Το αργίλιο χρησιμοποιείται στις μεταφορές, στις κατασκευές, σε ηλεκτρικούς αγωγούς, σε συσκευασίες και σε πολλά κράματα.',
    ], ['usgs']],
  ),
  context(
    14,
    [[
      'Silicon occurs mainly in silicate minerals and silica, which dominate many rocks and sands.',
      'Kisel förekommer främst i silikatmineral och kiseldioxid, som dominerar många bergarter och sandarter.',
      'Το πυρίτιο απαντά κυρίως σε πυριτικά ορυκτά και διοξείδιο του πυριτίου, που κυριαρχούν σε πολλά πετρώματα και άμμους.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Silicon is generally not found naturally in uncombined elemental form.',
      'Kisel förekommer i allmänhet inte naturligt i obunden grundämnesform.',
      'Το πυρίτιο γενικά δεν βρίσκεται στη φύση σε ελεύθερη στοιχειακή μορφή.',
    ], ['rsc']],
    ['present', [
      'Silicon supports structural tissues in many plants; an essential role in humans is not established.',
      'Kisel bidrar till stödjevävnader hos många växter; någon livsnödvändig roll hos människor är inte fastställd.',
      'Το πυρίτιο ενισχύει δομικούς ιστούς σε πολλά φυτά· δεν έχει τεκμηριωθεί απαραίτητος ρόλος στον άνθρωπο.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'High-purity silicon is used in computer chips and solar cells; silicon materials also serve in alloys and silicones.',
      'Högrent kisel används i datorchip och solceller; kiselmaterial används också i legeringar och silikoner.',
      'Πυρίτιο υψηλής καθαρότητας χρησιμοποιείται σε μικροκυκλώματα και ηλιακά κύτταρα· υλικά πυριτίου χρησιμοποιούνται επίσης σε κράματα και σιλικόνες.',
    ], ['usgs', 'rsc']],
  ),
  context(
    15,
    [[
      'Phosphorus occurs in phosphate minerals, especially apatite, and in all living organisms.',
      'Fosfor förekommer i fosfatmineral, särskilt apatit, och i alla levande organismer.',
      'Ο φώσφορος απαντά σε φωσφορικά ορυκτά, ιδιαίτερα στον απατίτη, και σε όλους τους ζωντανούς οργανισμούς.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Reactive phosphorus is not found naturally in uncombined elemental form.',
      'Reaktiv fosfor förekommer inte naturligt i obunden grundämnesform.',
      'Ο δραστικός φώσφορος δεν βρίσκεται στη φύση σε ελεύθερη στοιχειακή μορφή.',
    ], ['rsc']],
    ['essential', [
      'Phosphate is essential in DNA, RNA, cell membranes, energy transfer and bones.',
      'Fosfat är nödvändigt i DNA, RNA, cellmembran, energiöverföring och benvävnad.',
      'Τα φωσφορικά είναι απαραίτητα στο DNA, στο RNA, στις κυτταρικές μεμβράνες, στη μεταφορά ενέργειας και στα οστά.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Most mined phosphate is made into fertilizers; phosphorus compounds also have industrial and food uses.',
      'Det mesta utvunna fosfatet blir gödselmedel; fosforföreningar används också industriellt och i livsmedel.',
      'Το μεγαλύτερο μέρος των εξορυσσόμενων φωσφορικών γίνεται λίπασμα· ενώσεις φωσφόρου χρησιμοποιούνται επίσης στη βιομηχανία και στα τρόφιμα.',
    ], ['usgs']],
  ),
  context(
    16,
    [[
      'Sulfur occurs in sulfide and sulfate minerals, fossil fuels and volcanic regions.',
      'Svavel förekommer i sulfid- och sulfatmineral, fossila bränslen och vulkaniska områden.',
      'Το θείο απαντά σε θειούχα και θειικά ορυκτά, σε ορυκτά καύσιμα και σε ηφαιστειακές περιοχές.',
    ], ['usgs', 'rsc']],
    ['common', [
      'Native elemental sulfur forms around some volcanoes, hot springs and sedimentary deposits.',
      'Gedigen elementär svavel bildas kring vissa vulkaner, heta källor och sedimentära avlagringar.',
      'Αυτοφυές στοιχειακό θείο σχηματίζεται γύρω από ορισμένα ηφαίστεια, θερμές πηγές και ιζηματογενή κοιτάσματα.',
    ], ['usgs', 'rsc']],
    ['essential', [
      'Sulfur is part of the amino acids cysteine and methionine and therefore many proteins.',
      'Svavel ingår i aminosyrorna cystein och metionin och därmed i många proteiner.',
      'Το θείο αποτελεί μέρος των αμινοξέων κυστεΐνη και μεθειονίνη και επομένως πολλών πρωτεϊνών.',
    ], ['rsc']],
    ['established', [
      'Sulfur is used mainly to make sulfuric acid for fertilizers, mineral processing and chemical manufacture.',
      'Svavel används främst för att framställa svavelsyra till gödselmedel, mineralbearbetning och kemisk produktion.',
      'Το θείο χρησιμοποιείται κυρίως για παραγωγή θειικού οξέος για λιπάσματα, επεξεργασία ορυκτών και χημική παραγωγή.',
    ], ['usgs']],
  ),
  context(
    17,
    [[
      'Chlorine occurs as chloride salts in seawater, brines and evaporite minerals such as halite.',
      'Klor förekommer som kloridsalter i havsvatten, saltlösningar och evaporitmineral som halit.',
      'Το χλώριο απαντά ως χλωριούχα άλατα στο θαλασσινό νερό, σε άλμες και σε εξατμισιγενή ορυκτά όπως ο αλίτης.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Elemental chlorine is highly reactive and is not found free in nature.',
      'Elementärt klor är mycket reaktivt och förekommer inte fritt i naturen.',
      'Το στοιχειακό χλώριο είναι πολύ δραστικό και δεν βρίσκεται ελεύθερο στη φύση.',
    ], ['rsc']],
    ['essential', [
      'Chloride ions help maintain fluid balance and are used to form stomach acid.',
      'Kloridjoner hjälper till att upprätthålla vätskebalansen och används för att bilda magsyra.',
      'Τα ιόντα χλωρίου συμβάλλουν στην ισορροπία υγρών και χρησιμοποιούνται για τον σχηματισμό γαστρικού οξέος.',
    ], ['rsc']],
    ['established', [
      'Chlorine compounds disinfect water and are used to make PVC, bleaches and many chemicals.',
      'Klorföreningar desinficerar vatten och används för att tillverka PVC, blekmedel och många kemikalier.',
      'Οι ενώσεις χλωρίου απολυμαίνουν το νερό και χρησιμοποιούνται για την παραγωγή PVC, λευκαντικών και πολλών χημικών.',
    ], ['pubchem', 'rsc']],
  ),
  context(
    18,
    [[
      'Argon makes up about 0.93% of Earth’s atmosphere and is continuously produced by potassium-40 decay in rocks.',
      'Argon utgör cirka 0,93 % av jordens atmosfär och bildas kontinuerligt när kalium-40 sönderfaller i berg.',
      'Το αργό αποτελεί περίπου το 0,93% της γήινης ατμόσφαιρας και παράγεται συνεχώς από τη διάσπαση του καλίου-40 στα πετρώματα.',
    ], ['rsc']],
    ['common', [
      'As an inert noble gas, natural argon occurs as uncombined atoms.',
      'Som inert ädelgas förekommer naturligt argon som obundna atomer.',
      'Ως αδρανές ευγενές αέριο, το φυσικό αργό απαντά ως ελεύθερα άτομα.',
    ], ['rsc']],
    ['none-known', [
      'Argon has no known biological role.',
      'Argon har ingen känd biologisk roll.',
      'Το αργό δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['established', [
      'Argon provides inert atmospheres for welding, metal production, lighting and laboratory work.',
      'Argon ger inerta atmosfärer vid svetsning, metallframställning, belysning och laboratoriearbete.',
      'Το αργό παρέχει αδρανή ατμόσφαιρα για συγκολλήσεις, παραγωγή μετάλλων, φωτισμό και εργαστηριακές εργασίες.',
    ], ['rsc']],
  ),
  context(
    19,
    [[
      'Potassium occurs widely in silicate minerals and evaporite salts and as ions in soils and living tissue.',
      'Kalium förekommer allmänt i silikatmineral och evaporitsalter samt som joner i jord och levande vävnad.',
      'Το κάλιο απαντά ευρέως σε πυριτικά ορυκτά και εξατμισιγενή άλατα, καθώς και ως ιόντα σε εδάφη και ζωντανούς ιστούς.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Highly reactive potassium is not found naturally as free metal.',
      'Det mycket reaktiva kaliumet förekommer inte naturligt som fri metall.',
      'Το πολύ δραστικό κάλιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['essential', [
      'Potassium ions are essential for fluid balance, nerve signalling and muscle contraction.',
      'Kaliumjoner är nödvändiga för vätskebalans, nervsignaler och muskelsammandragning.',
      'Τα ιόντα καλίου είναι απαραίτητα για την ισορροπία υγρών, τη νευρική σηματοδότηση και τη μυϊκή συστολή.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Potassium salts are used mainly in fertilizers and also in glass, soaps and industrial chemicals.',
      'Kaliumsalter används främst i gödselmedel och även i glas, tvål och industrikemikalier.',
      'Τα άλατα καλίου χρησιμοποιούνται κυρίως σε λιπάσματα και επίσης σε γυαλί, σαπούνια και βιομηχανικές χημικές ουσίες.',
    ], ['usgs']],
  ),
  context(
    20,
    [[
      'Calcium is abundant in limestone, gypsum, fluorite and many silicate minerals.',
      'Kalcium är vanligt i kalksten, gips, fluorit och många silikatmineral.',
      'Το ασβέστιο αφθονεί στον ασβεστόλιθο, τον γύψο, τον φθορίτη και πολλά πυριτικά ορυκτά.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Reactive calcium is not found naturally as uncombined metal.',
      'Reaktivt kalcium förekommer inte naturligt som obunden metall.',
      'Το δραστικό ασβέστιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['essential', [
      'Calcium ions help build bones and teeth and support muscle, nerve and cell signalling functions.',
      'Kalciumjoner bygger upp ben och tänder och stödjer muskler, nerver och cellsignalering.',
      'Τα ιόντα ασβεστίου συμβάλλουν στον σχηματισμό οστών και δοντιών και στη λειτουργία μυών, νεύρων και κυτταρικής σηματοδότησης.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Calcium compounds are used in cement, plaster, steelmaking, agriculture and many chemical processes.',
      'Kalciumföreningar används i cement, gips, ståltillverkning, jordbruk och många kemiska processer.',
      'Οι ενώσεις ασβεστίου χρησιμοποιούνται σε τσιμέντο, γύψο, χαλυβουργία, γεωργία και πολλές χημικές διεργασίες.',
    ], ['usgs', 'rsc']],
  ),
  context(
    21,
    [[
      'Scandium is dispersed in small amounts through many minerals and is commonly recovered with rare-earth ores.',
      'Skandium är spritt i små mängder i många mineral och utvinns ofta tillsammans med sällsynta jordartsmetaller.',
      'Το σκάνδιο είναι διασκορπισμένο σε μικρές ποσότητες σε πολλά ορυκτά και συνήθως ανακτάται μαζί με μεταλλεύματα σπάνιων γαιών.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Scandium is not known to occur naturally as uncombined metal.',
      'Skandium är inte känt för att förekomma naturligt som obunden metall.',
      'Το σκάνδιο δεν είναι γνωστό ότι απαντά στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['none-known', [
      'Scandium has no known biological role.',
      'Skandium har ingen känd biologisk roll.',
      'Το σκάνδιο δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Small additions of scandium strengthen aluminium alloys used in aerospace and high-performance equipment.',
      'Små tillsatser av skandium förstärker aluminiumlegeringar för flyg- och rymdteknik och högpresterande utrustning.',
      'Μικρές προσθήκες σκανδίου ενισχύουν κράματα αργιλίου για αεροδιαστημικές εφαρμογές και εξοπλισμό υψηλών επιδόσεων.',
    ], ['usgs', 'rsc']],
  ),
  context(
    22,
    [[
      'Titanium occurs in minerals such as ilmenite and rutile and is widely distributed in Earth’s crust.',
      'Titan förekommer i mineral som ilmenit och rutil och är vitt spritt i jordskorpan.',
      'Το τιτάνιο απαντά σε ορυκτά όπως ο ιλμενίτης και το ρουτίλιο και είναι ευρέως κατανεμημένο στον φλοιό της Γης.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Uncombined native titanium is exceptionally rare; almost all natural titanium is chemically bound.',
      'Obunden gedigen titan är ytterst sällsynt; nästan all naturlig titan är kemiskt bunden.',
      'Το ελεύθερο αυτοφυές τιτάνιο είναι εξαιρετικά σπάνιο· σχεδόν όλο το φυσικό τιτάνιο είναι χημικά δεσμευμένο.',
    ], ['rsc']],
    ['none-known', [
      'Titanium has no established biological role, although its compounds occur in some organisms.',
      'Titan har ingen fastställd biologisk roll, även om dess föreningar förekommer i vissa organismer.',
      'Το τιτάνιο δεν έχει τεκμηριωμένο βιολογικό ρόλο, αν και ενώσεις του υπάρχουν σε ορισμένους οργανισμούς.',
    ], ['rsc']],
    ['established', [
      'Titanium metal is used in aircraft, implants and corrosion-resistant equipment; titanium dioxide is a major white pigment.',
      'Titanmetall används i flygplan, implantat och korrosionsbeständig utrustning; titandioxid är ett viktigt vitt pigment.',
      'Το μεταλλικό τιτάνιο χρησιμοποιείται σε αεροσκάφη, εμφυτεύματα και ανθεκτικό στη διάβρωση εξοπλισμό· το διοξείδιο του τιτανίου είναι σημαντική λευκή χρωστική.',
    ], ['usgs', 'rsc']],
  ),
  context(
    23,
    [[
      'Vanadium occurs in many minerals and in some phosphate rock, iron ores and petroleum deposits.',
      'Vanadin förekommer i många mineral och i vissa fosfatbergarter, järnmalmer och petroleumfyndigheter.',
      'Το βανάδιο απαντά σε πολλά ορυκτά και σε ορισμένα φωσφορικά πετρώματα, σιδηρομεταλλεύματα και κοιτάσματα πετρελαίου.',
    ], ['usgs']],
    ['rare', [
      'Native uncombined vanadium has been identified, but it is extremely rare.',
      'Gedigen obunden vanadin har påvisats men är ytterst sällsynt.',
      'Έχει εντοπιστεί αυτοφυές ελεύθερο βανάδιο, αλλά είναι εξαιρετικά σπάνιο.',
    ], ['rsc']],
    ['present', [
      'Vanadium is used by some microorganisms and marine animals, but no essential role in humans is established.',
      'Vanadin används av vissa mikroorganismer och havsdjur, men någon livsnödvändig roll hos människor är inte fastställd.',
      'Το βανάδιο χρησιμοποιείται από ορισμένους μικροοργανισμούς και θαλάσσια ζώα, αλλά δεν έχει τεκμηριωθεί απαραίτητος ρόλος στον άνθρωπο.',
    ], ['rsc', 'nih-ods']],
    ['established', [
      'Vanadium is used mainly to strengthen steel and in alloys for high-temperature applications.',
      'Vanadin används främst för att förstärka stål och i legeringar för höga temperaturer.',
      'Το βανάδιο χρησιμοποιείται κυρίως για την ενίσχυση του χάλυβα και σε κράματα για εφαρμογές υψηλής θερμοκρασίας.',
    ], ['usgs']],
  ),
  context(
    24,
    [[
      'Chromium occurs chiefly in the mineral chromite, usually together with iron and oxygen.',
      'Krom förekommer främst i mineralet kromit, vanligen tillsammans med järn och syre.',
      'Το χρώμιο απαντά κυρίως στο ορυκτό χρωμίτης, συνήθως μαζί με σίδηρο και οξυγόνο.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native chromium metal occurs naturally only in rare geological settings.',
      'Gedigen krommetall förekommer naturligt endast i sällsynta geologiska miljöer.',
      'Αυτοφυές μεταλλικό χρώμιο απαντά φυσικά μόνο σε σπάνια γεωλογικά περιβάλλοντα.',
    ], ['rsc']],
    ['unknown', [
      'Chromium(III) was long considered essential, but its essential role in humans remains uncertain; chromium(VI) compounds are hazardous.',
      'Krom(III) betraktades länge som livsnödvändigt, men dess nödvändiga roll hos människor är osäker; krom(VI)-föreningar är farliga.',
      'Το χρώμιο(III) θεωρούνταν επί μακρόν απαραίτητο, αλλά ο απαραίτητος ρόλος του στον άνθρωπο παραμένει αβέβαιος· οι ενώσεις χρωμίου(VI) είναι επικίνδυνες.',
    ], ['nih-ods', 'cdc-atsdr']],
    ['established', [
      'Chromium is used in stainless steel, heat-resistant alloys, plating and pigments.',
      'Krom används i rostfritt stål, värmetåliga legeringar, ytbeläggning och pigment.',
      'Το χρώμιο χρησιμοποιείται σε ανοξείδωτο χάλυβα, θερμοανθεκτικά κράματα, επιμεταλλώσεις και χρωστικές.',
    ], ['usgs']],
  ),
  context(
    25,
    [[
      'Manganese occurs mainly in oxide and carbonate minerals and in nodules on the ocean floor.',
      'Mangan förekommer främst i oxid- och karbonatmineral samt i noduler på havsbotten.',
      'Το μαγγάνιο απαντά κυρίως σε οξείδια και ανθρακικά ορυκτά, καθώς και σε κονδύλους στον πυθμένα των ωκεανών.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Manganese is not normally found in nature as uncombined metal.',
      'Mangan förekommer normalt inte i naturen som obunden metall.',
      'Το μαγγάνιο συνήθως δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['essential', [
      'Manganese ions are required by enzymes involved in metabolism, bone formation and antioxidant defence.',
      'Manganjoner behövs av enzymer som medverkar i ämnesomsättning, benbildning och antioxidantförsvar.',
      'Τα ιόντα μαγγανίου απαιτούνται από ένζυμα που συμμετέχουν στον μεταβολισμό, τον σχηματισμό οστών και την αντιοξειδωτική άμυνα.',
    ], ['nih-ods']],
    ['established', [
      'Manganese is used mainly in steelmaking and also in batteries, aluminium alloys and pigments.',
      'Mangan används främst vid ståltillverkning och även i batterier, aluminiumlegeringar och pigment.',
      'Το μαγγάνιο χρησιμοποιείται κυρίως στη χαλυβουργία και επίσης σε μπαταρίες, κράματα αργιλίου και χρωστικές.',
    ], ['usgs']],
  ),
  context(
    26,
    [[
      'Iron is abundant in ores such as hematite and magnetite and is a major component of Earth’s core.',
      'Järn är vanligt i malmer som hematit och magnetit och är en huvudbeståndsdel i jordens kärna.',
      'Ο σίδηρος αφθονεί σε μεταλλεύματα όπως ο αιματίτης και ο μαγνητίτης και αποτελεί κύριο συστατικό του πυρήνα της Γης.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native iron is rare on Earth’s surface and occurs chiefly in meteorites and unusual reduced rocks.',
      'Gediget järn är sällsynt vid jordytan och förekommer främst i meteoriter och ovanliga reducerade bergarter.',
      'Ο αυτοφυής σίδηρος είναι σπάνιος στην επιφάνεια της Γης και απαντά κυρίως σε μετεωρίτες και ασυνήθιστα αναγωγικά πετρώματα.',
    ], ['rsc']],
    ['essential', [
      'Iron ions in haemoglobin carry oxygen, and iron-containing proteins also support energy metabolism.',
      'Järnjoner i hemoglobin transporterar syre, och järnhaltiga proteiner stödjer även energiomsättningen.',
      'Ιόντα σιδήρου στην αιμοσφαιρίνη μεταφέρουν οξυγόνο, ενώ πρωτεΐνες που περιέχουν σίδηρο υποστηρίζουν και τον ενεργειακό μεταβολισμό.',
    ], ['nih-ods']],
    ['established', [
      'Most iron is made into steel for buildings, vehicles, machinery and infrastructure.',
      'Det mesta järnet blir stål för byggnader, fordon, maskiner och infrastruktur.',
      'Το μεγαλύτερο μέρος του σιδήρου μετατρέπεται σε χάλυβα για κτίρια, οχήματα, μηχανήματα και υποδομές.',
    ], ['usgs']],
  ),
  context(
    27,
    [[
      'Cobalt occurs mainly in minerals associated with copper and nickel ores.',
      'Kobolt förekommer främst i mineral som är förknippade med koppar- och nickelmalmer.',
      'Το κοβάλτιο απαντά κυρίως σε ορυκτά που συνδέονται με μεταλλεύματα χαλκού και νικελίου.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native cobalt metal is very rare; natural cobalt is usually chemically bound.',
      'Gedigen koboltmetall är mycket sällsynt; naturlig kobolt är vanligen kemiskt bunden.',
      'Το αυτοφυές μεταλλικό κοβάλτιο είναι πολύ σπάνιο· το φυσικό κοβάλτιο είναι συνήθως χημικά δεσμευμένο.',
    ], ['rsc']],
    ['essential', [
      'Cobalt is essential as the central metal ion in vitamin B₁₂, not as free metal.',
      'Kobolt är livsnödvändigt som central metalljon i vitamin B₁₂, inte som fri metall.',
      'Το κοβάλτιο είναι απαραίτητο ως κεντρικό μεταλλικό ιόν στη βιταμίνη B₁₂, όχι ως ελεύθερο μέταλλο.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Cobalt is used in rechargeable batteries, high-temperature alloys, hard materials and catalysts.',
      'Kobolt används i laddningsbara batterier, högtemperaturlegeringar, hårdmetall och katalysatorer.',
      'Το κοβάλτιο χρησιμοποιείται σε επαναφορτιζόμενες μπαταρίες, κράματα υψηλής θερμοκρασίας, σκληρά υλικά και καταλύτες.',
    ], ['usgs']],
  ),
  context(
    28,
    [[
      'Nickel occurs mainly in sulfide and laterite ores and is also present in many meteorites.',
      'Nickel förekommer främst i sulfid- och lateritmalmer och finns också i många meteoriter.',
      'Το νικέλιο απαντά κυρίως σε θειούχα και λατεριτικά μεταλλεύματα και υπάρχει επίσης σε πολλούς μετεωρίτες.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native nickel is rare and is found chiefly in iron-nickel meteorites and unusual terrestrial deposits.',
      'Gedigen nickel är sällsynt och finns främst i järn-nickelmeteoriter och ovanliga jordiska fyndigheter.',
      'Το αυτοφυές νικέλιο είναι σπάνιο και βρίσκεται κυρίως σε μετεωρίτες σιδήρου-νικελίου και ασυνήθιστα γήινα κοιτάσματα.',
    ], ['rsc']],
    ['present', [
      'Nickel is essential to some microorganisms and plants, but no essential role in humans is established.',
      'Nickel är nödvändigt för vissa mikroorganismer och växter, men någon livsnödvändig roll hos människor är inte fastställd.',
      'Το νικέλιο είναι απαραίτητο για ορισμένους μικροοργανισμούς και φυτά, αλλά δεν έχει τεκμηριωθεί απαραίτητος ρόλος στον άνθρωπο.',
    ], ['nih-ods', 'rsc']],
    ['established', [
      'Nickel is used in stainless steel, corrosion-resistant alloys, batteries and plating.',
      'Nickel används i rostfritt stål, korrosionsbeständiga legeringar, batterier och ytbeläggning.',
      'Το νικέλιο χρησιμοποιείται σε ανοξείδωτο χάλυβα, ανθεκτικά στη διάβρωση κράματα, μπαταρίες και επιμεταλλώσεις.',
    ], ['usgs']],
  ),
  context(
    29,
    [[
      'Copper occurs in sulfide and oxide ores and in sediment-hosted deposits around the world.',
      'Koppar förekommer i sulfid- och oxidmalmer samt i sedimentbundna fyndigheter världen över.',
      'Ο χαλκός απαντά σε θειούχα και οξειδικά μεταλλεύματα και σε ιζηματογενή κοιτάσματα σε όλο τον κόσμο.',
    ], ['usgs']],
    ['common', [
      'Native copper can form substantial natural masses and was used before metal smelting was developed.',
      'Gedigen koppar kan bilda stora naturliga massor och användes innan metallsmältning utvecklades.',
      'Ο αυτοφυής χαλκός μπορεί να σχηματίζει μεγάλες φυσικές μάζες και χρησιμοποιήθηκε πριν αναπτυχθεί η τήξη μετάλλων.',
    ], ['usgs', 'rsc']],
    ['essential', [
      'Copper ions are cofactors for enzymes involved in energy production, connective tissue and iron metabolism.',
      'Kopparjoner är kofaktorer för enzymer som medverkar i energiproduktion, bindväv och järnomsättning.',
      'Τα ιόντα χαλκού είναι συμπαράγοντες ενζύμων που συμμετέχουν στην παραγωγή ενέργειας, στον συνδετικό ιστό και στον μεταβολισμό του σιδήρου.',
    ], ['nih-ods']],
    ['established', [
      'Copper is widely used in electrical wiring, electronics, plumbing, heat exchangers and alloys.',
      'Koppar används allmänt i elledningar, elektronik, rör, värmeväxlare och legeringar.',
      'Ο χαλκός χρησιμοποιείται ευρέως σε ηλεκτρικές καλωδιώσεις, ηλεκτρονικά, σωληνώσεις, εναλλάκτες θερμότητας και κράματα.',
    ], ['usgs']],
  ),
  context(
    30,
    [[
      'Zinc occurs mainly in the sulfide mineral sphalerite, often with lead and copper ores.',
      'Zink förekommer främst i sulfidmineralet sfalerit, ofta tillsammans med bly- och kopparmalmer.',
      'Ο ψευδάργυρος απαντά κυρίως στο θειούχο ορυκτό σφαλερίτης, συχνά μαζί με μεταλλεύματα μολύβδου και χαλκού.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native zinc metal occurs only rarely; most natural zinc is chemically bound.',
      'Gedigen zinkmetall förekommer endast sällsynt; nästan all naturlig zink är kemiskt bunden.',
      'Το αυτοφυές μεταλλικό ψευδάργυρο απαντά μόνο σπάνια· σχεδόν όλος ο φυσικός ψευδάργυρος είναι χημικά δεσμευμένος.',
    ], ['rsc']],
    ['essential', [
      'Zinc ions support hundreds of enzymes, gene expression, immune function and growth.',
      'Zinkjoner stödjer hundratals enzymer, genuttryck, immunfunktion och tillväxt.',
      'Τα ιόντα ψευδαργύρου υποστηρίζουν εκατοντάδες ένζυμα, τη γονιδιακή έκφραση, τη λειτουργία του ανοσοποιητικού και την ανάπτυξη.',
    ], ['nih-ods']],
    ['established', [
      'Zinc protects steel by galvanizing and is used in brass, die-cast alloys and batteries.',
      'Zink skyddar stål genom galvanisering och används i mässing, pressgjutna legeringar och batterier.',
      'Ο ψευδάργυρος προστατεύει τον χάλυβα με γαλβάνισμα και χρησιμοποιείται σε ορείχαλκο, χυτά κράματα και μπαταρίες.',
    ], ['usgs']],
  ),
  context(
    31,
    [[
      'Gallium is dispersed in trace amounts in bauxite and zinc ores and is recovered as a by-product.',
      'Gallium är spritt i spårmängder i bauxit och zinkmalmer och utvinns som biprodukt.',
      'Το γάλλιο είναι διασκορπισμένο σε ίχνη στον βωξίτη και σε μεταλλεύματα ψευδαργύρου και ανακτάται ως παραπροϊόν.',
    ], ['usgs']],
    ['not-found-free', [
      'Gallium is not found naturally in useful deposits as uncombined metal.',
      'Gallium förekommer inte naturligt i brytvärda fyndigheter som obunden metall.',
      'Το γάλλιο δεν βρίσκεται στη φύση σε αξιοποιήσιμα κοιτάσματα ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['none-known', [
      'Gallium has no known essential biological role.',
      'Gallium har ingen känd livsnödvändig biologisk roll.',
      'Το γάλλιο δεν έχει γνωστό απαραίτητο βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Gallium compounds are used in LEDs, laser diodes, radio-frequency electronics and high-efficiency solar cells.',
      'Galliumföreningar används i lysdioder, laserdioder, radiofrekvenselektronik och högeffektiva solceller.',
      'Οι ενώσεις γαλλίου χρησιμοποιούνται σε LED, διόδους λέιζερ, ηλεκτρονικά ραδιοσυχνοτήτων και ηλιακά κύτταρα υψηλής απόδοσης.',
    ], ['usgs']],
  ),
  context(
    32,
    [[
      'Germanium is widely dispersed in small amounts and is recovered mainly from zinc ores and coal-related materials.',
      'Germanium är vitt spritt i små mängder och utvinns främst ur zinkmalmer och kolrelaterade material.',
      'Το γερμάνιο είναι ευρέως διασκορπισμένο σε μικρές ποσότητες και ανακτάται κυρίως από μεταλλεύματα ψευδαργύρου και υλικά που σχετίζονται με άνθρακα.',
    ], ['usgs']],
    ['not-found-free', [
      'Germanium is not normally found naturally as an uncombined element.',
      'Germanium förekommer normalt inte naturligt som obundet grundämne.',
      'Το γερμάνιο συνήθως δεν βρίσκεται στη φύση ως ελεύθερο στοιχείο.',
    ], ['rsc']],
    ['none-known', [
      'Germanium has no established biological role.',
      'Germanium har ingen fastställd biologisk roll.',
      'Το γερμάνιο δεν έχει τεκμηριωμένο βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Germanium is used in fibre-optic systems, infrared optics, electronics and some solar cells.',
      'Germanium används i fiberoptiska system, infraröd optik, elektronik och vissa solceller.',
      'Το γερμάνιο χρησιμοποιείται σε συστήματα οπτικών ινών, υπέρυθρα οπτικά, ηλεκτρονικά και ορισμένα ηλιακά κύτταρα.',
    ], ['usgs']],
  ),
  context(
    33,
    [[
      'Arsenic occurs in many minerals, commonly combined with sulfur or metals in ore deposits.',
      'Arsenik förekommer i många mineral, ofta bundet till svavel eller metaller i malmfyndigheter.',
      'Το αρσενικό απαντά σε πολλά ορυκτά, συχνά ενωμένο με θείο ή μέταλλα σε κοιτάσματα μεταλλευμάτων.',
    ], ['usgs', 'rsc']],
    ['rare', [
      'Native elemental arsenic occurs naturally but is uncommon.',
      'Gedigen elementär arsenik förekommer naturligt men är ovanlig.',
      'Αυτοφυές στοιχειακό αρσενικό απαντά στη φύση, αλλά είναι ασυνήθιστο.',
    ], ['rsc']],
    ['hazardous', [
      'No essential role in humans is established, and exposure to inorganic arsenic compounds can be toxic.',
      'Ingen livsnödvändig roll hos människor är fastställd, och exponering för oorganiska arsenikföreningar kan vara giftig.',
      'Δεν έχει τεκμηριωθεί απαραίτητος ρόλος στον άνθρωπο και η έκθεση σε ανόργανες ενώσεις αρσενικού μπορεί να είναι τοξική.',
    ], ['cdc-atsdr']],
    ['specialized', [
      'Arsenic compounds are used in some semiconductors and specialty alloys; many older pesticide and wood-treatment uses have been restricted.',
      'Arsenikföreningar används i vissa halvledare och speciallegeringar; många äldre användningar i bekämpningsmedel och träskydd har begränsats.',
      'Οι ενώσεις αρσενικού χρησιμοποιούνται σε ορισμένους ημιαγωγούς και ειδικά κράματα· πολλές παλαιότερες χρήσεις σε φυτοφάρμακα και συντήρηση ξύλου έχουν περιοριστεί.',
    ], ['usgs', 'rsc']],
  ),
  context(
    34,
    [[
      'Selenium is widely dispersed in sulfide ores, soils and some sedimentary rocks and is usually recovered as a by-product.',
      'Selen är vitt spritt i sulfidmalmer, jordar och vissa sedimentära bergarter och utvinns vanligen som biprodukt.',
      'Το σελήνιο είναι ευρέως διασκορπισμένο σε θειούχα μεταλλεύματα, εδάφη και ορισμένα ιζηματογενή πετρώματα και συνήθως ανακτάται ως παραπροϊόν.',
    ], ['usgs']],
    ['rare', [
      'Native elemental selenium occurs, but it is rare.',
      'Gedigen elementär selen förekommer men är sällsynt.',
      'Αυτοφυές στοιχειακό σελήνιο απαντά στη φύση, αλλά είναι σπάνιο.',
    ], ['rsc']],
    ['essential', [
      'Selenium is incorporated into selenoproteins that support antioxidant defence and thyroid-hormone metabolism.',
      'Selen ingår i selenoproteiner som stödjer antioxidantförsvar och sköldkörtelhormonernas omsättning.',
      'Το σελήνιο ενσωματώνεται σε σεληνοπρωτεΐνες που υποστηρίζουν την αντιοξειδωτική άμυνα και τον μεταβολισμό των θυρεοειδικών ορμονών.',
    ], ['nih-ods']],
    ['specialized', [
      'Selenium is used in glassmaking, pigments, electronics, metallurgy and some photovoltaic materials.',
      'Selen används i glastillverkning, pigment, elektronik, metallurgi och vissa solcellsmaterial.',
      'Το σελήνιο χρησιμοποιείται στην υαλουργία, σε χρωστικές, ηλεκτρονικά, μεταλλουργία και ορισμένα φωτοβολταϊκά υλικά.',
    ], ['usgs']],
  ),
  context(
    35,
    [[
      'Bromine occurs as bromide ions in seawater, salt lakes and underground brines.',
      'Brom förekommer som bromidjoner i havsvatten, saltsjöar och underjordiska saltlösningar.',
      'Το βρώμιο απαντά ως ιόντα βρωμίου στο θαλασσινό νερό, σε αλμυρές λίμνες και υπόγειες άλμες.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Reactive elemental bromine is not found free in nature.',
      'Reaktivt elementärt brom förekommer inte fritt i naturen.',
      'Το δραστικό στοιχειακό βρώμιο δεν βρίσκεται ελεύθερο στη φύση.',
    ], ['rsc']],
    ['present', [
      'Bromide is present in organisms and supports collagen structure in animals, but its broader nutritional status is still being studied.',
      'Bromid finns i organismer och bidrar till kollagenets struktur hos djur, men dess bredare näringsmässiga betydelse studeras fortfarande.',
      'Τα βρωμιούχα ιόντα υπάρχουν σε οργανισμούς και συμβάλλουν στη δομή του κολλαγόνου στα ζώα, αλλά η ευρύτερη διατροφική τους σημασία μελετάται ακόμη.',
    ], ['pubchem', 'rsc']],
    ['established', [
      'Bromine compounds are used in flame retardants, drilling fluids, water treatment and photographic chemicals.',
      'Bromföreningar används i flamskyddsmedel, borrvätskor, vattenrening och fotografiska kemikalier.',
      'Οι ενώσεις βρωμίου χρησιμοποιούνται σε επιβραδυντικά φλόγας, υγρά γεώτρησης, επεξεργασία νερού και φωτογραφικές χημικές ουσίες.',
    ], ['usgs']],
  ),
  context(
    36,
    [[
      'Krypton is a very rare trace gas in Earth’s atmosphere.',
      'Krypton är en mycket sällsynt spårgas i jordens atmosfär.',
      'Το κρυπτό είναι ένα πολύ σπάνιο ιχνοαέριο στη γήινη ατμόσφαιρα.',
    ], ['rsc']],
    ['common', [
      'As an inert noble gas, natural krypton occurs as uncombined atoms.',
      'Som inert ädelgas förekommer naturligt krypton som obundna atomer.',
      'Ως αδρανές ευγενές αέριο, το φυσικό κρυπτό απαντά ως ελεύθερα άτομα.',
    ], ['rsc']],
    ['none-known', [
      'Krypton has no known biological role.',
      'Krypton har ingen känd biologisk roll.',
      'Το κρυπτό δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Krypton is used in specialized lamps, photographic flashes, lasers and insulating window units.',
      'Krypton används i speciallampor, fotoblixtar, lasrar och isolerrutor.',
      'Το κρυπτό χρησιμοποιείται σε ειδικούς λαμπτήρες, φωτογραφικά φλας, λέιζερ και μονωτικές υαλομονάδες.',
    ], ['rsc']],
  ),
  context(
    37,
    [[
      'Rubidium is dispersed in potassium-bearing minerals and brines, commonly as a minor constituent.',
      'Rubidium är spritt i kaliumhaltiga mineral och saltlösningar, vanligen som en mindre beståndsdel.',
      'Το ρουβίδιο είναι διασκορπισμένο σε καλιούχα ορυκτά και άλμες, συνήθως ως δευτερεύον συστατικό.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Highly reactive rubidium is not found naturally as free metal.',
      'Det mycket reaktiva rubidiumet förekommer inte naturligt som fri metall.',
      'Το πολύ δραστικό ρουβίδιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['present', [
      'Rubidium ions can occur in organisms because they resemble potassium ions, but no essential role is known.',
      'Rubidiumjoner kan förekomma i organismer eftersom de liknar kaliumjoner, men ingen livsnödvändig roll är känd.',
      'Ιόντα ρουβιδίου μπορεί να υπάρχουν σε οργανισμούς επειδή μοιάζουν με ιόντα καλίου, αλλά δεν είναι γνωστός απαραίτητος ρόλος.',
    ], ['rsc']],
    ['specialized', [
      'Rubidium is used in research, atomic clocks, vacuum devices and some specialized optical systems.',
      'Rubidium används i forskning, atomur, vakuumutrustning och vissa specialiserade optiska system.',
      'Το ρουβίδιο χρησιμοποιείται στην έρευνα, σε ατομικά ρολόγια, συσκευές κενού και ορισμένα εξειδικευμένα οπτικά συστήματα.',
    ], ['usgs', 'rsc']],
  ),
  context(
    38,
    [[
      'Strontium occurs mainly in the minerals celestine and strontianite.',
      'Strontium förekommer främst i mineralen celestin och strontianit.',
      'Το στρόντιο απαντά κυρίως στα ορυκτά σελεστίνης και στροντιανίτης.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Reactive strontium is not found naturally as uncombined metal.',
      'Reaktivt strontium förekommer inte naturligt som obunden metall.',
      'Το δραστικό στρόντιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['present', [
      'Strontium can enter bones because its ions resemble calcium, but no essential biological role is established.',
      'Strontium kan byggas in i ben eftersom dess joner liknar kalcium, men ingen livsnödvändig biologisk roll är fastställd.',
      'Το στρόντιο μπορεί να ενσωματωθεί στα οστά επειδή τα ιόντα του μοιάζουν με του ασβεστίου, αλλά δεν έχει τεκμηριωθεί απαραίτητος βιολογικός ρόλος.',
    ], ['rsc']],
    ['established', [
      'Strontium compounds are used in red fireworks, ceramic magnets, ferrite materials and some specialty glass.',
      'Strontiumföreningar används i röda fyrverkerier, keramiska magneter, ferritmaterial och vissa specialglas.',
      'Οι ενώσεις στροντίου χρησιμοποιούνται σε κόκκινα πυροτεχνήματα, κεραμικούς μαγνήτες, υλικά φερρίτη και ορισμένα ειδικά γυαλιά.',
    ], ['usgs', 'rsc']],
  ),
  context(
    39,
    [[
      'Yttrium occurs with rare-earth elements in minerals such as monazite and xenotime.',
      'Yttrium förekommer tillsammans med sällsynta jordartsmetaller i mineral som monazit och xenotim.',
      'Το ύττριο απαντά μαζί με στοιχεία σπάνιων γαιών σε ορυκτά όπως ο μοναζίτης και ο ξενοτίμης.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Yttrium is not found naturally as uncombined metal.',
      'Yttrium förekommer inte naturligt som obunden metall.',
      'Το ύττριο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['none-known', [
      'Yttrium has no known biological role.',
      'Yttrium har ingen känd biologisk roll.',
      'Το ύττριο δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['specialized', [
      'Yttrium compounds are used in phosphors, lasers, advanced ceramics and superconducting materials.',
      'Yttriumföreningar används i luminoforer, lasrar, avancerad keramik och supraledande material.',
      'Οι ενώσεις υττρίου χρησιμοποιούνται σε φωσφόρους, λέιζερ, προηγμένα κεραμικά και υπεραγώγιμα υλικά.',
    ], ['usgs', 'rsc']],
  ),
  context(
    40,
    [[
      'Zirconium occurs chiefly in zircon and baddeleyite, commonly in mineral sands and igneous rocks.',
      'Zirkonium förekommer främst i zirkon och baddeleyit, ofta i mineralsand och magmatiska bergarter.',
      'Το ζιρκόνιο απαντά κυρίως στον ζιρκόνιο και τον μπαντελεΐτη, συχνά σε ορυκτές άμμους και πυριγενή πετρώματα.',
    ], ['usgs', 'rsc']],
    ['not-found-free', [
      'Zirconium is not found naturally as uncombined metal.',
      'Zirkonium förekommer inte naturligt som obunden metall.',
      'Το ζιρκόνιο δεν βρίσκεται στη φύση ως ελεύθερο μέταλλο.',
    ], ['rsc']],
    ['none-known', [
      'Zirconium has no known biological role.',
      'Zirkonium har ingen känd biologisk roll.',
      'Το ζιρκόνιο δεν έχει γνωστό βιολογικό ρόλο.',
    ], ['rsc']],
    ['established', [
      'Zirconium alloys clad nuclear fuel, while zirconium compounds are used in ceramics, foundry materials and abrasives.',
      'Zirkoniumlegeringar kapslar kärnbränsle, medan zirkoniumföreningar används i keramik, gjuterimaterial och slipmedel.',
      'Κράματα ζιρκονίου περιβάλλουν πυρηνικό καύσιμο, ενώ ενώσεις ζιρκονίου χρησιμοποιούνται σε κεραμικά, χυτήρια και λειαντικά.',
    ], ['usgs', 'rsc']],
  ),
]
