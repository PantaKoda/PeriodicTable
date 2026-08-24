export type Category =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'

export interface ElementData {
  number: number
  symbol: string
  name: string
  mass: string
  category: Category
  group: number | null
  period: number
  column: number
  row: number
  phase: 'Solid' | 'Liquid' | 'Gas' | 'Unknown'
  fact: string
}

export const categoryLabels: Record<Category, string> = {
  'alkali-metal': 'Alkali metal',
  'alkaline-earth': 'Alkaline earth',
  'transition-metal': 'Transition metal',
  'post-transition-metal': 'Post-transition metal',
  metalloid: 'Metalloid',
  'reactive-nonmetal': 'Reactive nonmetal',
  halogen: 'Halogen',
  'noble-gas': 'Noble gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
}

// number|symbol|name|atomic mass|category|group|period|column|row
const raw = `
1|H|Hydrogen|1.008|reactive-nonmetal|1|1|1|1
2|He|Helium|4.0026|noble-gas|18|1|18|1
3|Li|Lithium|6.94|alkali-metal|1|2|1|2
4|Be|Beryllium|9.0122|alkaline-earth|2|2|2|2
5|B|Boron|10.81|metalloid|13|2|13|2
6|C|Carbon|12.011|reactive-nonmetal|14|2|14|2
7|N|Nitrogen|14.007|reactive-nonmetal|15|2|15|2
8|O|Oxygen|15.999|reactive-nonmetal|16|2|16|2
9|F|Fluorine|18.998|halogen|17|2|17|2
10|Ne|Neon|20.180|noble-gas|18|2|18|2
11|Na|Sodium|22.990|alkali-metal|1|3|1|3
12|Mg|Magnesium|24.305|alkaline-earth|2|3|2|3
13|Al|Aluminium|26.982|post-transition-metal|13|3|13|3
14|Si|Silicon|28.085|metalloid|14|3|14|3
15|P|Phosphorus|30.974|reactive-nonmetal|15|3|15|3
16|S|Sulfur|32.06|reactive-nonmetal|16|3|16|3
17|Cl|Chlorine|35.45|halogen|17|3|17|3
18|Ar|Argon|39.948|noble-gas|18|3|18|3
19|K|Potassium|39.098|alkali-metal|1|4|1|4
20|Ca|Calcium|40.078|alkaline-earth|2|4|2|4
21|Sc|Scandium|44.956|transition-metal|3|4|3|4
22|Ti|Titanium|47.867|transition-metal|4|4|4|4
23|V|Vanadium|50.942|transition-metal|5|4|5|4
24|Cr|Chromium|51.996|transition-metal|6|4|6|4
25|Mn|Manganese|54.938|transition-metal|7|4|7|4
26|Fe|Iron|55.845|transition-metal|8|4|8|4
27|Co|Cobalt|58.933|transition-metal|9|4|9|4
28|Ni|Nickel|58.693|transition-metal|10|4|10|4
29|Cu|Copper|63.546|transition-metal|11|4|11|4
30|Zn|Zinc|65.38|transition-metal|12|4|12|4
31|Ga|Gallium|69.723|post-transition-metal|13|4|13|4
32|Ge|Germanium|72.630|metalloid|14|4|14|4
33|As|Arsenic|74.922|metalloid|15|4|15|4
34|Se|Selenium|78.971|reactive-nonmetal|16|4|16|4
35|Br|Bromine|79.904|halogen|17|4|17|4
36|Kr|Krypton|83.798|noble-gas|18|4|18|4
37|Rb|Rubidium|85.468|alkali-metal|1|5|1|5
38|Sr|Strontium|87.62|alkaline-earth|2|5|2|5
39|Y|Yttrium|88.906|transition-metal|3|5|3|5
40|Zr|Zirconium|91.224|transition-metal|4|5|4|5
41|Nb|Niobium|92.906|transition-metal|5|5|5|5
42|Mo|Molybdenum|95.95|transition-metal|6|5|6|5
43|Tc|Technetium|[98]|transition-metal|7|5|7|5
44|Ru|Ruthenium|101.07|transition-metal|8|5|8|5
45|Rh|Rhodium|102.91|transition-metal|9|5|9|5
46|Pd|Palladium|106.42|transition-metal|10|5|10|5
47|Ag|Silver|107.87|transition-metal|11|5|11|5
48|Cd|Cadmium|112.41|transition-metal|12|5|12|5
49|In|Indium|114.82|post-transition-metal|13|5|13|5
50|Sn|Tin|118.71|post-transition-metal|14|5|14|5
51|Sb|Antimony|121.76|metalloid|15|5|15|5
52|Te|Tellurium|127.60|metalloid|16|5|16|5
53|I|Iodine|126.90|halogen|17|5|17|5
54|Xe|Xenon|131.29|noble-gas|18|5|18|5
55|Cs|Caesium|132.91|alkali-metal|1|6|1|6
56|Ba|Barium|137.33|alkaline-earth|2|6|2|6
57|La|Lanthanum|138.91|lanthanide||6|4|9
58|Ce|Cerium|140.12|lanthanide||6|5|9
59|Pr|Praseodymium|140.91|lanthanide||6|6|9
60|Nd|Neodymium|144.24|lanthanide||6|7|9
61|Pm|Promethium|[145]|lanthanide||6|8|9
62|Sm|Samarium|150.36|lanthanide||6|9|9
63|Eu|Europium|151.96|lanthanide||6|10|9
64|Gd|Gadolinium|157.25|lanthanide||6|11|9
65|Tb|Terbium|158.93|lanthanide||6|12|9
66|Dy|Dysprosium|162.50|lanthanide||6|13|9
67|Ho|Holmium|164.93|lanthanide||6|14|9
68|Er|Erbium|167.26|lanthanide||6|15|9
69|Tm|Thulium|168.93|lanthanide||6|16|9
70|Yb|Ytterbium|173.05|lanthanide||6|17|9
71|Lu|Lutetium|174.97|lanthanide||6|18|9
72|Hf|Hafnium|178.49|transition-metal|4|6|4|6
73|Ta|Tantalum|180.95|transition-metal|5|6|5|6
74|W|Tungsten|183.84|transition-metal|6|6|6|6
75|Re|Rhenium|186.21|transition-metal|7|6|7|6
76|Os|Osmium|190.23|transition-metal|8|6|8|6
77|Ir|Iridium|192.22|transition-metal|9|6|9|6
78|Pt|Platinum|195.08|transition-metal|10|6|10|6
79|Au|Gold|196.97|transition-metal|11|6|11|6
80|Hg|Mercury|200.59|transition-metal|12|6|12|6
81|Tl|Thallium|204.38|post-transition-metal|13|6|13|6
82|Pb|Lead|207.2|post-transition-metal|14|6|14|6
83|Bi|Bismuth|208.98|post-transition-metal|15|6|15|6
84|Po|Polonium|[209]|post-transition-metal|16|6|16|6
85|At|Astatine|[210]|halogen|17|6|17|6
86|Rn|Radon|[222]|noble-gas|18|6|18|6
87|Fr|Francium|[223]|alkali-metal|1|7|1|7
88|Ra|Radium|[226]|alkaline-earth|2|7|2|7
89|Ac|Actinium|[227]|actinide||7|4|10
90|Th|Thorium|232.04|actinide||7|5|10
91|Pa|Protactinium|231.04|actinide||7|6|10
92|U|Uranium|238.03|actinide||7|7|10
93|Np|Neptunium|[237]|actinide||7|8|10
94|Pu|Plutonium|[244]|actinide||7|9|10
95|Am|Americium|[243]|actinide||7|10|10
96|Cm|Curium|[247]|actinide||7|11|10
97|Bk|Berkelium|[247]|actinide||7|12|10
98|Cf|Californium|[251]|actinide||7|13|10
99|Es|Einsteinium|[252]|actinide||7|14|10
100|Fm|Fermium|[257]|actinide||7|15|10
101|Md|Mendelevium|[258]|actinide||7|16|10
102|No|Nobelium|[259]|actinide||7|17|10
103|Lr|Lawrencium|[266]|actinide||7|18|10
104|Rf|Rutherfordium|[267]|transition-metal|4|7|4|7
105|Db|Dubnium|[268]|transition-metal|5|7|5|7
106|Sg|Seaborgium|[269]|transition-metal|6|7|6|7
107|Bh|Bohrium|[270]|transition-metal|7|7|7|7
108|Hs|Hassium|[269]|transition-metal|8|7|8|7
109|Mt|Meitnerium|[277]|transition-metal|9|7|9|7
110|Ds|Darmstadtium|[281]|transition-metal|10|7|10|7
111|Rg|Roentgenium|[282]|transition-metal|11|7|11|7
112|Cn|Copernicium|[285]|transition-metal|12|7|12|7
113|Nh|Nihonium|[286]|post-transition-metal|13|7|13|7
114|Fl|Flerovium|[290]|post-transition-metal|14|7|14|7
115|Mc|Moscovium|[290]|post-transition-metal|15|7|15|7
116|Lv|Livermorium|[293]|post-transition-metal|16|7|16|7
117|Ts|Tennessine|[294]|halogen|17|7|17|7
118|Og|Oganesson|[294]|noble-gas|18|7|18|7
`.trim()

const gases = new Set([1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86])
const liquids = new Set([35, 80])
const uncertain = new Set(Array.from({ length: 15 }, (_, index) => index + 104))

const facts: Record<number, string> = {
  1: 'The lightest element and the most abundant element in the universe.',
  2: 'Used in cryogenics and balloons; it has the lowest boiling point of any element.',
  3: 'A key ingredient in lightweight rechargeable batteries.',
  6: 'The backbone of organic chemistry; diamond and graphite are both pure carbon.',
  7: 'Makes up about 78% of Earth’s atmosphere by volume.',
  8: 'Essential for aerobic life and the most abundant element in Earth’s crust by mass.',
  9: 'The most reactive and most electronegative element.',
  10: 'Produces the familiar red-orange glow in illuminated signs.',
  11: 'A soft, highly reactive metal that is safely stored under oil.',
  12: 'Burns with an intense white light and sits at the center of chlorophyll.',
  13: 'Lightweight, corrosion-resistant, and the most abundant metal in Earth’s crust.',
  14: 'The essential semiconductor behind most computer chips and solar cells.',
  15: 'DNA, cell membranes, and energy-carrying ATP all depend on phosphorus.',
  16: 'Used to make sulfuric acid, one of the world’s most important industrial chemicals.',
  17: 'A disinfectant and an essential component of common table salt.',
  18: 'An inert shielding gas used in welding and incandescent light bulbs.',
  19: 'Important for nerve signals, muscle contraction, and fluid balance in living cells.',
  20: 'The main metallic element in bones, teeth, limestone, and chalk.',
  22: 'Strong, light, and corrosion-resistant—ideal for aircraft and medical implants.',
  24: 'Adds hardness and corrosion resistance to stainless steel.',
  25: 'Essential in steelmaking and used in many battery chemistries.',
  26: 'The main component of steel and the element at the core of hemoglobin.',
  27: 'Used in high-performance alloys, magnets, pigments, and rechargeable batteries.',
  28: 'A corrosion-resistant metal used in stainless steel and battery cathodes.',
  29: 'An excellent electrical conductor used extensively in wiring and electronics.',
  30: 'Protects steel from corrosion through galvanization.',
  31: 'Melts in your hand at about 29.8 °C.',
  32: 'An important semiconductor used in fiber optics and infrared technology.',
  35: 'One of only two elements that are liquid near room temperature.',
  47: 'The best electrical conductor of all elements.',
  50: 'Used in solder and to coat steel food cans because it resists corrosion.',
  53: 'Required by the thyroid gland to make hormones that regulate metabolism.',
  54: 'Used in bright flash lamps, ion thrusters, and some high-performance headlights.',
  57: 'Used in camera lenses, catalysts, and nickel–metal hydride batteries.',
  58: 'The most abundant lanthanide and a common ingredient in lighter flints.',
  60: 'Makes exceptionally strong permanent magnets when alloyed with iron and boron.',
  74: 'Has the highest melting point of all pure metals.',
  78: 'Dense, corrosion-resistant, and widely used as a catalyst.',
  79: 'Highly unreactive, exceptionally malleable, and valued since antiquity.',
  80: 'The only metal that is liquid at standard room conditions.',
  82: 'Dense and easy to shape, but toxic—especially to the nervous system.',
  86: 'A naturally occurring radioactive gas that can accumulate in buildings.',
  92: 'The heaviest naturally abundant element and a major nuclear fuel.',
  94: 'A radioactive element used in nuclear fuel and deep-space power systems.',
  118: 'The heaviest confirmed element; only a few atoms have ever been produced.',
}

function phaseFor(number: number): ElementData['phase'] {
  if (gases.has(number)) return 'Gas'
  if (liquids.has(number)) return 'Liquid'
  if (uncertain.has(number)) return 'Unknown'
  return 'Solid'
}

export const elements: ElementData[] = raw.split('\n').map((line) => {
  const [number, symbol, name, mass, category, group, period, column, row] = line.split('|')
  const atomicNumber = Number(number)
  const typedCategory = category as Category

  return {
    number: atomicNumber,
    symbol,
    name,
    mass,
    category: typedCategory,
    group: group ? Number(group) : null,
    period: Number(period),
    column: Number(column),
    row: Number(row),
    phase: phaseFor(atomicNumber),
    fact:
      facts[atomicNumber] ??
      `${name} is ${/^a[aeiou]/i.test(categoryLabels[typedCategory]) ? 'an' : 'a'} ${categoryLabels[typedCategory].toLowerCase()} in period ${period} of the periodic table.`,
  }
})
