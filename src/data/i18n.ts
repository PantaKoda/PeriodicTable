import { categoryLabels, type Category, type ElementData } from './elements'

export type Language = 'en' | 'sv' | 'el'

interface UiStrings {
  pageTitle: string
  description: string
  language: string
  searchLabel: string
  searchPlaceholder: string
  surprise: string
  currentElement: string
  atomicMass: string
  group: string
  period: string
  at20: string
  phases: Record<ElementData['phase'], string>
  lanthanides: string
  actinides: string
  swipe: string
  tableControls: string
  selectedDetails: string
  scrollableTable: string
  filterElements: string
  showAll: string
  bracketNote: string
  builtFor: string
  atomicNumber: string
}

export const languageLabels: Record<Language, string> = {
  en: 'English',
  sv: 'Svenska',
  el: 'Ελληνικά',
}

export const ui: Record<Language, UiStrings> = {
  en: {
    pageTitle: 'Periodic Table — Explore the Elements',
    description: 'An interactive, neo-brutalist periodic table with essential facts for all 118 chemical elements.',
    language: 'Language',
    searchLabel: 'Search elements',
    searchPlaceholder: 'Search name, symbol, or number…',
    surprise: 'Surprise me',
    currentElement: 'CURRENT ELEMENT',
    atomicMass: 'Atomic mass',
    group: 'Group',
    period: 'Period',
    at20: 'At 20 °C',
    phases: { Solid: 'Solid', Liquid: 'Liquid', Gas: 'Gas', Unknown: 'Unknown' },
    lanthanides: 'Lanthanides',
    actinides: 'Actinides',
    swipe: 'Swipe to explore the full table',
    tableControls: 'Table controls',
    selectedDetails: 'Selected element details',
    scrollableTable: 'Scrollable periodic table',
    filterElements: 'Filter elements by category',
    showAll: 'Show all',
    bracketNote: 'Atomic masses in brackets refer to the mass number of the longest-lived isotope.',
    builtFor: 'Built for curious minds',
    atomicNumber: 'atomic number',
  },
  sv: {
    pageTitle: 'Periodiska systemet — Utforska grundämnena',
    description: 'Ett interaktivt periodiskt system med grundläggande fakta om alla 118 grundämnen.',
    language: 'Språk',
    searchLabel: 'Sök bland grundämnen',
    searchPlaceholder: 'Sök efter namn, symbol eller atomnummer…',
    surprise: 'Överraska mig',
    currentElement: 'AKTUELLT GRUNDÄMNE',
    atomicMass: 'Atommassa',
    group: 'Grupp',
    period: 'Period',
    at20: 'Vid 20 °C',
    phases: { Solid: 'Fast', Liquid: 'Flytande', Gas: 'Gas', Unknown: 'Okänt' },
    lanthanides: 'Lantanoider',
    actinides: 'Aktinoider',
    swipe: 'Svep för att utforska hela tabellen',
    tableControls: 'Tabellverktyg',
    selectedDetails: 'Information om valt grundämne',
    scrollableTable: 'Rullningsbart periodiskt system',
    filterElements: 'Filtrera grundämnen efter kategori',
    showAll: 'Visa alla',
    bracketNote: 'Atommassor inom hakparentes avser masstalet för den mest långlivade isotopen.',
    builtFor: 'Skapad för nyfikna sinnen',
    atomicNumber: 'atomnummer',
  },
  el: {
    pageTitle: 'Περιοδικός πίνακας — Εξερεύνησε τα στοιχεία',
    description: 'Ένας διαδραστικός περιοδικός πίνακας με βασικές πληροφορίες για τα 118 χημικά στοιχεία.',
    language: 'Γλώσσα',
    searchLabel: 'Αναζήτηση στοιχείων',
    searchPlaceholder: 'Αναζήτηση με όνομα, σύμβολο ή ατομικό αριθμό…',
    surprise: 'Έκπληξέ με',
    currentElement: 'ΤΡΕΧΟΝ ΣΤΟΙΧΕΙΟ',
    atomicMass: 'Ατομική μάζα',
    group: 'Ομάδα',
    period: 'Περίοδος',
    at20: 'Στους 20 °C',
    phases: { Solid: 'Στερεό', Liquid: 'Υγρό', Gas: 'Αέριο', Unknown: 'Άγνωστο' },
    lanthanides: 'Λανθανίδες',
    actinides: 'Ακτινίδες',
    swipe: 'Σύρετε για να εξερευνήσετε ολόκληρο τον πίνακα',
    tableControls: 'Εργαλεία πίνακα',
    selectedDetails: 'Στοιχεία επιλεγμένου χημικού στοιχείου',
    scrollableTable: 'Κυλιόμενος περιοδικός πίνακας',
    filterElements: 'Φιλτράρισμα στοιχείων ανά κατηγορία',
    showAll: 'Εμφάνιση όλων',
    bracketNote: 'Οι ατομικές μάζες σε αγκύλες αναφέρονται στον μαζικό αριθμό του μακροβιότερου ισοτόπου.',
    builtFor: 'Δημιουργήθηκε για ανήσυχα πνεύματα',
    atomicNumber: 'ατομικός αριθμός',
  },
}

export const localizedCategories: Record<Language, Record<Category, string>> = {
  en: categoryLabels,
  sv: {
    'alkali-metal': 'Alkalimetall',
    'alkaline-earth': 'Alkalisk jordartsmetall',
    'transition-metal': 'Övergångsmetall',
    'post-transition-metal': 'Övrig metall',
    metalloid: 'Halvmetall',
    'reactive-nonmetal': 'Reaktiv icke-metall',
    halogen: 'Halogen',
    'noble-gas': 'Ädelgas',
    lanthanide: 'Lantanoid',
    actinide: 'Aktinoid',
  },
  el: {
    'alkali-metal': 'Αλκαλικό μέταλλο',
    'alkaline-earth': 'Αλκαλική γαία',
    'transition-metal': 'Μέταλλο μετάπτωσης',
    'post-transition-metal': 'Μετα-μεταβατικό μέταλλο',
    metalloid: 'Μεταλλοειδές',
    'reactive-nonmetal': 'Δραστικό αμέταλλο',
    halogen: 'Αλογόνο',
    'noble-gas': 'Ευγενές αέριο',
    lanthanide: 'Λανθανίδα',
    actinide: 'Ακτινίδα',
  },
}

const names: Record<Exclude<Language, 'en'>, string[]> = {
  sv: [
    'Väte', 'Helium', 'Litium', 'Beryllium', 'Bor', 'Kol', 'Kväve', 'Syre', 'Fluor', 'Neon',
    'Natrium', 'Magnesium', 'Aluminium', 'Kisel', 'Fosfor', 'Svavel', 'Klor', 'Argon', 'Kalium', 'Kalcium',
    'Skandium', 'Titan', 'Vanadin', 'Krom', 'Mangan', 'Järn', 'Kobolt', 'Nickel', 'Koppar', 'Zink',
    'Gallium', 'Germanium', 'Arsenik', 'Selen', 'Brom', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirkonium',
    'Niob', 'Molybden', 'Teknetium', 'Rutenium', 'Rodium', 'Palladium', 'Silver', 'Kadmium', 'Indium', 'Tenn',
    'Antimon', 'Tellur', 'Jod', 'Xenon', 'Cesium', 'Barium', 'Lantan', 'Cerium', 'Praseodym', 'Neodym',
    'Prometium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Tulium', 'Ytterbium',
    'Lutetium', 'Hafnium', 'Tantal', 'Volfram', 'Rhenium', 'Osmium', 'Iridium', 'Platina', 'Guld', 'Kvicksilver',
    'Tallium', 'Bly', 'Vismut', 'Polonium', 'Astat', 'Radon', 'Francium', 'Radium', 'Aktinium', 'Torium',
    'Protaktinium', 'Uran', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium',
    'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium',
    'Röntgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moskovium', 'Livermorium', 'Tenness', 'Oganesson',
  ],
  el: [
    'Υδρογόνο', 'Ήλιο', 'Λίθιο', 'Βηρύλλιο', 'Βόριο', 'Άνθρακας', 'Άζωτο', 'Οξυγόνο', 'Φθόριο', 'Νέον',
    'Νάτριο', 'Μαγνήσιο', 'Αργίλιο', 'Πυρίτιο', 'Φώσφορος', 'Θείο', 'Χλώριο', 'Αργό', 'Κάλιο', 'Ασβέστιο',
    'Σκάνδιο', 'Τιτάνιο', 'Βανάδιο', 'Χρώμιο', 'Μαγγάνιο', 'Σίδηρος', 'Κοβάλτιο', 'Νικέλιο', 'Χαλκός', 'Ψευδάργυρος',
    'Γάλλιο', 'Γερμάνιο', 'Αρσενικό', 'Σελήνιο', 'Βρώμιο', 'Κρυπτό', 'Ρουβίδιο', 'Στρόντιο', 'Ύττριο', 'Ζιρκόνιο',
    'Νιόβιο', 'Μολυβδαίνιο', 'Τεχνήτιο', 'Ρουθήνιο', 'Ρόδιο', 'Παλλάδιο', 'Άργυρος', 'Κάδμιο', 'Ίνδιο', 'Κασσίτερος',
    'Αντιμόνιο', 'Τελλούριο', 'Ιώδιο', 'Ξένο', 'Καίσιο', 'Βάριο', 'Λανθάνιο', 'Δήμητριο', 'Πρασινοδύμιο', 'Νεοδύμιο',
    'Προμήθιο', 'Σαμάριο', 'Ευρώπιο', 'Γαδολίνιο', 'Τέρβιο', 'Δυσπρόσιο', 'Όλμιο', 'Έρβιο', 'Θούλιο', 'Υττέρβιο',
    'Λουτήτιο', 'Άφνιο', 'Ταντάλιο', 'Βολφράμιο', 'Ρήνιο', 'Όσμιο', 'Ιρίδιο', 'Λευκόχρυσος', 'Χρυσός', 'Υδράργυρος',
    'Θάλλιο', 'Μόλυβδος', 'Βισμούθιο', 'Πολώνιο', 'Άστατο', 'Ραδόνιο', 'Φράγκιο', 'Ράδιο', 'Ακτίνιο', 'Θόριο',
    'Πρωτακτίνιο', 'Ουράνιο', 'Ποσειδώνιο', 'Πλουτώνιο', 'Αμερίκιο', 'Κιούριο', 'Μπερκέλιο', 'Καλιφόρνιο', 'Αϊνσταΐνιο', 'Φέρμιο',
    'Μεντελέβιο', 'Νομπέλιο', 'Λορένσιο', 'Ραδερφόρντιο', 'Ντούμπνιο', 'Σιμπόργκιο', 'Μπόριο', 'Χάσιο', 'Μαϊτνέριο', 'Νταρμστάντιο',
    'Ρεντγκένιο', 'Κοπερνίκιο', 'Νιχόνιο', 'Φλερόβιο', 'Μοσκόβιο', 'Λιβερμόριο', 'Τενέσιο', 'Ογκανεσόνιο',
  ],
}

for (const [language, elementNames] of Object.entries(names)) {
  if (elementNames.length !== 118) {
    throw new Error(`Expected 118 ${language} element names, received ${elementNames.length}`)
  }
}

const specialFacts: Record<Exclude<Language, 'en'>, Record<number, string>> = {
  sv: {
    1: 'Det lättaste grundämnet och det vanligaste grundämnet i universum.',
    2: 'Används inom kryoteknik och i ballonger; det har lägst kokpunkt av alla grundämnen.',
    3: 'En viktig beståndsdel i lätta, uppladdningsbara batterier.',
    6: 'Grunden för organisk kemi; både diamant och grafit består av rent kol.',
    7: 'Utgör ungefär 78 procent av jordens atmosfär räknat i volym.',
    8: 'Nödvändigt för aerobt liv och det vanligaste grundämnet i jordskorpan räknat i massa.',
    9: 'Det mest reaktiva och mest elektronegativa grundämnet.',
    10: 'Ger det välkända rödorange skenet i neonskyltar.',
    11: 'En mjuk, mycket reaktiv metall som förvaras säkert under olja.',
    12: 'Brinner med ett intensivt vitt ljus och finns i centrum av klorofyllmolekylen.',
    13: 'Lätt, korrosionsbeständigt och den vanligaste metallen i jordskorpan.',
    14: 'Den viktiga halvledaren bakom de flesta datorchip och solceller.',
    15: 'DNA, cellmembran och den energibärande molekylen ATP är alla beroende av fosfor.',
    16: 'Används för att framställa svavelsyra, en av världens viktigaste industrikemikalier.',
    17: 'Ett desinfektionsmedel och en viktig beståndsdel i vanligt bordssalt.',
    18: 'En inert skyddsgas som används vid svetsning och i glödlampor.',
    19: 'Viktigt för nervsignaler, muskelsammandragning och vätskebalans i levande celler.',
    20: 'Det viktigaste metalliska grundämnet i ben, tänder, kalksten och krita.',
    22: 'Starkt, lätt och korrosionsbeständigt – idealiskt för flygplan och medicinska implantat.',
    24: 'Ger rostfritt stål större hårdhet och korrosionsbeständighet.',
    25: 'Viktigt vid ståltillverkning och används i många typer av batterier.',
    26: 'Huvudbeståndsdelen i stål och grundämnet i hemoglobinets centrum.',
    27: 'Används i högpresterande legeringar, magneter, pigment och uppladdningsbara batterier.',
    28: 'En korrosionsbeständig metall som används i rostfritt stål och batterikatoder.',
    29: 'En utmärkt elektrisk ledare som används i stor omfattning i kablar och elektronik.',
    30: 'Skyddar stål mot korrosion genom galvanisering.',
    31: 'Smälter i handen vid ungefär 29,8 °C.',
    32: 'En viktig halvledare som används i fiberoptik och infraröd teknik.',
    35: 'Ett av endast två grundämnen som är flytande nära rumstemperatur.',
    47: 'Har bäst elektrisk ledningsförmåga av alla grundämnen.',
    50: 'Används i lödmetall och för att belägga konservburkar av stål eftersom det motstår korrosion.',
    53: 'Behövs av sköldkörteln för att bilda hormoner som reglerar ämnesomsättningen.',
    54: 'Används i starka blixtlampor, jonmotorer och vissa högpresterande strålkastare.',
    57: 'Används i kameraobjektiv, katalysatorer och nickel–metallhydridbatterier.',
    58: 'Den vanligaste lantanoiden och en vanlig beståndsdel i tändstenar för cigarettändare.',
    60: 'Bildar exceptionellt starka permanentmagneter i legering med järn och bor.',
    74: 'Har högst smältpunkt av alla rena metaller.',
    78: 'Tätt, korrosionsbeständigt och används ofta som katalysator.',
    79: 'Mycket reaktionströgt, ovanligt formbart och uppskattat sedan antiken.',
    80: 'Den enda metallen som är flytande vid normal rumstemperatur.',
    82: 'Tätt och lätt att forma, men giftigt – särskilt för nervsystemet.',
    86: 'En naturligt förekommande radioaktiv gas som kan samlas i byggnader.',
    92: 'Det tyngsta naturligt rikligt förekommande grundämnet och ett viktigt kärnbränsle.',
    94: 'Ett radioaktivt grundämne som används i kärnbränsle och energisystem för rymdfärder långt från solen.',
    118: 'Det tyngsta bekräftade grundämnet; endast ett fåtal atomer har någonsin framställts.',
  },
  el: {
    1: 'Το ελαφρύτερο και το πιο άφθονο στοιχείο στο σύμπαν.',
    2: 'Χρησιμοποιείται στην κρυογενική και σε αερόστατα· έχει το χαμηλότερο σημείο βρασμού από όλα τα στοιχεία.',
    3: 'Βασικό συστατικό ελαφρών επαναφορτιζόμενων μπαταριών.',
    6: 'Η βάση της οργανικής χημείας· το διαμάντι και ο γραφίτης αποτελούνται από καθαρό άνθρακα.',
    7: 'Αποτελεί περίπου το 78% της ατμόσφαιρας της Γης κατ’ όγκο.',
    8: 'Απαραίτητο για την αερόβια ζωή και το αφθονότερο στοιχείο στον φλοιό της Γης κατά μάζα.',
    9: 'Το πιο δραστικό και το πιο ηλεκτραρνητικό στοιχείο.',
    10: 'Παράγει τη χαρακτηριστική ερυθροπορτοκαλί λάμψη στις φωτεινές επιγραφές.',
    11: 'Ένα μαλακό, εξαιρετικά δραστικό μέταλλο που φυλάσσεται με ασφάλεια μέσα σε λάδι.',
    12: 'Καίγεται με έντονο λευκό φως και βρίσκεται στο κέντρο του μορίου της χλωροφύλλης.',
    13: 'Ελαφρύ, ανθεκτικό στη διάβρωση και το αφθονότερο μέταλλο στον φλοιό της Γης.',
    14: 'Ο βασικός ημιαγωγός πίσω από τα περισσότερα μικροκυκλώματα και φωτοβολταϊκά στοιχεία.',
    15: 'Το DNA, οι κυτταρικές μεμβράνες και το ενεργειακό μόριο ATP εξαρτώνται από τον φώσφορο.',
    16: 'Χρησιμοποιείται για την παραγωγή θειικού οξέος, μιας από τις σημαντικότερες βιομηχανικές χημικές ουσίες.',
    17: 'Απολυμαντικό και απαραίτητο συστατικό του κοινού μαγειρικού αλατιού.',
    18: 'Αδρανές προστατευτικό αέριο που χρησιμοποιείται στη συγκόλληση και στους λαμπτήρες πυρακτώσεως.',
    19: 'Σημαντικό για τα νευρικά σήματα, τη σύσπαση των μυών και την ισορροπία υγρών στα ζωντανά κύτταρα.',
    20: 'Το κύριο μεταλλικό στοιχείο στα οστά, τα δόντια, τον ασβεστόλιθο και την κιμωλία.',
    22: 'Ισχυρό, ελαφρύ και ανθεκτικό στη διάβρωση — ιδανικό για αεροσκάφη και ιατρικά εμφυτεύματα.',
    24: 'Αυξάνει τη σκληρότητα και την αντοχή στη διάβρωση του ανοξείδωτου χάλυβα.',
    25: 'Απαραίτητο στη χαλυβουργία και χρησιμοποιείται σε πολλές χημικές συνθέσεις μπαταριών.',
    26: 'Το κύριο συστατικό του χάλυβα και το στοιχείο στο κέντρο της αιμοσφαιρίνης.',
    27: 'Χρησιμοποιείται σε κράματα υψηλών επιδόσεων, μαγνήτες, χρωστικές και επαναφορτιζόμενες μπαταρίες.',
    28: 'Μέταλλο ανθεκτικό στη διάβρωση που χρησιμοποιείται στον ανοξείδωτο χάλυβα και στις καθόδους μπαταριών.',
    29: 'Εξαιρετικός αγωγός του ηλεκτρισμού, με εκτεταμένη χρήση σε καλώδια και ηλεκτρονικά.',
    30: 'Προστατεύει τον χάλυβα από τη διάβρωση μέσω γαλβανισμού.',
    31: 'Λιώνει στο χέρι σε θερμοκρασία περίπου 29,8 °C.',
    32: 'Σημαντικός ημιαγωγός που χρησιμοποιείται στις οπτικές ίνες και στην υπέρυθρη τεχνολογία.',
    35: 'Ένα από τα μόλις δύο στοιχεία που είναι υγρά κοντά στη θερμοκρασία δωματίου.',
    47: 'Ο καλύτερος ηλεκτρικός αγωγός από όλα τα στοιχεία.',
    50: 'Χρησιμοποιείται σε συγκολλητικά κράματα και στην επικάλυψη χαλύβδινων κονσερβών επειδή αντιστέκεται στη διάβρωση.',
    53: 'Απαιτείται από τον θυρεοειδή αδένα για την παραγωγή ορμονών που ρυθμίζουν τον μεταβολισμό.',
    54: 'Χρησιμοποιείται σε ισχυρούς λαμπτήρες φλας, ιοντικούς προωθητήρες και ορισμένους προβολείς υψηλών επιδόσεων.',
    57: 'Χρησιμοποιείται σε φωτογραφικούς φακούς, καταλύτες και μπαταρίες νικελίου–υδριδίου μετάλλου.',
    58: 'Η αφθονότερη λανθανίδα και κοινό συστατικό του πυρόλιθου στους αναπτήρες.',
    60: 'Σχηματίζει εξαιρετικά ισχυρούς μόνιμους μαγνήτες όταν κραματώνεται με σίδηρο και βόριο.',
    74: 'Έχει το υψηλότερο σημείο τήξης από όλα τα καθαρά μέταλλα.',
    78: 'Πυκνό, ανθεκτικό στη διάβρωση και ευρέως χρησιμοποιούμενο ως καταλύτης.',
    79: 'Εξαιρετικά αδρανές, ιδιαίτερα ελατό και πολύτιμο από την αρχαιότητα.',
    80: 'Το μόνο μέταλλο που είναι υγρό σε κανονικές συνθήκες δωματίου.',
    82: 'Πυκνό και εύπλαστο, αλλά τοξικό — ιδιαίτερα για το νευρικό σύστημα.',
    86: 'Ένα φυσικό ραδιενεργό αέριο που μπορεί να συσσωρευτεί σε κτίρια.',
    92: 'Το βαρύτερο στοιχείο που απαντάται σε αφθονία στη φύση και σημαντικό πυρηνικό καύσιμο.',
    94: 'Ραδιενεργό στοιχείο που χρησιμοποιείται σε πυρηνικά καύσιμα και συστήματα ενέργειας για αποστολές στο βαθύ διάστημα.',
    118: 'Το βαρύτερο επιβεβαιωμένο στοιχείο· έχουν παραχθεί μόνο λίγα άτομά του.',
  },
}

export function getElementName(element: Pick<ElementData, 'number' | 'name'>, language: Language): string {
  return language === 'en' ? element.name : names[language][element.number - 1]
}

export function getElementFact(element: ElementData, language: Language): string {
  if (language === 'en') return element.fact
  const translatedFact = specialFacts[language][element.number]
  if (translatedFact) return translatedFact

  const name = getElementName(element, language)
  const category = localizedCategories[language][element.category]
  return language === 'sv'
    ? `${name} tillhör kategorin ${category.toLowerCase()} och finns i period ${element.period} i det periodiska systemet.`
    : `Το χημικό στοιχείο ${name} ανήκει στην κατηγορία «${category.toLowerCase()}» και βρίσκεται στην περίοδο ${element.period} του περιοδικού πίνακα.`
}
