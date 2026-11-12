export const dishes = [
  {
    id: '01',
    slug: 'signature-chai',
    name: 'Signature Chai',
    lines: ['Signature', 'Chai'],
    label: 'The signature',
    kicker: 'The house pour',
    description:
      'Strong, hot Indian tea brewed with fresh milk and aromatic leaves. Poured in a cutting or as a full glass.',
    price: '₹40',
    spec: 'Served piping hot',
    since: 'Brewed since 2003',
    accent: '#c9894b',
    components: ['The glass', 'The brew', 'The milk', 'The malai', 'The steam'],
  },
  {
    id: '02',
    slug: 'kitkat-shake',
    name: 'KitKat Shake',
    lines: ['KitKat', 'Shake'],
    label: 'The shake',
    kicker: 'Cold, loud, excessive',
    description:
      'Thick chocolate shake blended with KitKat, crowned with whipped cream, crushed chocolate and one more wafer for the road.',
    price: '₹120',
    spec: 'Served ice cold',
    since: 'For the sweet-toothed',
    accent: '#a56a45',
    components: ['The glass', 'The blend', 'The KitKat', 'The cream', 'The rubble'],
  },
  {
    id: '03',
    slug: 'classic-vada-pav',
    name: 'Classic Vada Pav',
    lines: ['Classic', 'Vada Pav'],
    label: 'The classic',
    kicker: 'The city, in a bun',
    description:
      "A soft ladi pav, a spiced potato vada, dry garlic chutney and green chutney. The city's favourite, built by hand.",
    price: '₹40',
    spec: 'Built by hand',
    since: 'The 4 a.m. regular',
    accent: '#d09a4a',
    components: ['The pav', 'The vada', 'The chutneys', 'The chilli', 'The crunch'],
  },
  {
    id: '04',
    slug: 'paneer-tandoori-sandwich',
    name: 'Paneer Tandoori Sandwich',
    lines: ['Paneer', 'Tandoori', 'Sandwich'],
    label: 'The sandwich',
    kicker: 'Smoke, between bread',
    description:
      'Char-grilled paneer with mint chutney, onion, tomato and house slaw. Smoked between two slices of toasted bread.',
    price: '₹90',
    spec: 'Char-grilled to order',
    since: 'Best at midnight',
    accent: '#c46a3a',
    components: ['The bread', 'The paneer', 'The marinade', 'The slaw', 'The char'],
  },
  {
    id: '05',
    slug: 'masala-maggi',
    name: 'Masala Maggi',
    lines: ['Masala', 'Maggi'],
    label: 'The comfort',
    kicker: 'Two minutes, or as long as it takes',
    description:
      'Noodles cooked with our house masala, fresh vegetables and a generous knob of butter. The bowl you order when nothing else makes sense.',
    price: '₹50',
    spec: 'Cooked in small batches',
    since: 'The universal remedy',
    accent: '#d3a93f',
    components: ['The bowl', 'The noodles', 'The vegetables', 'The masala', 'The butter'],
  },
  {
    id: '06',
    slug: 'white-sauce-pasta',
    name: 'White Sauce Pasta',
    lines: ['White', 'Sauce', 'Pasta'],
    label: 'The pasta',
    kicker: 'Slow-cooked cream',
    description:
      'Penne folded through a slow-cooked cream sauce with herbs, corn and bell pepper. Finished with cracked pepper at the pass.',
    price: '₹110',
    spec: 'Finished at the pass',
    since: 'The quiet order',
    accent: '#d8c9a2',
    components: ['The bowl', 'The cream', 'The penne', 'The vegetables', 'The pepper'],
  },
  {
    id: '07',
    slug: 'stuffed-paratha',
    name: 'Stuffed Paratha',
    lines: ['Stuffed', 'Paratha'],
    label: 'The paratha',
    kicker: 'Flaky, warm, folded',
    description:
      'Flaky wheat paratha stuffed with spiced potato, finished with white butter and served with curd and house pickle.',
    price: '₹60',
    spec: 'Griddled to order',
    since: 'A Sunday, any day',
    accent: '#d7b477',
    components: ['The dough', 'The filling', 'The fold', 'The butter', 'The steam'],
  },
  {
    id: '08',
    slug: 'papadi-chaat',
    name: 'Papadi Chaat',
    lines: ['Papadi', 'Chaat'],
    label: 'The chaat',
    kicker: 'Cold, crisp, loud',
    description:
      'Crisp papdi, chilled curd, tamarind, mint, sev and pomegranate. Sweet, sour, cold, and loud.',
    price: '₹70',
    spec: 'Assembled at the counter',
    since: 'The 2 a.m. rescue',
    accent: '#c05f58',
    components: ['The bowl', 'The curd', 'The papdi', 'The chutneys', 'The sev'],
  },
]

export const spiceList = [
  {
    name: 'Cardamom',
    no: '01',
    note: 'Green pods, cracked open.',
    text: 'Floral and cooling. The top note of the brew, the reason it smells like a morning that never quite ends.',
  },
  {
    name: 'Ginger',
    no: '02',
    note: 'Pounded fresh each evening.',
    text: 'The heat that arrives late and stays. We use more than we should, and then a little more.',
  },
  {
    name: 'Clove',
    no: '03',
    note: 'One or two. Never more.',
    text: 'Dark, numbing, sweet. Clove is the spine of the glass — you only notice it when it is missing.',
  },
  {
    name: 'Cinnamon',
    no: '04',
    note: 'Rolled bark, slow warmth.',
    text: 'The backbone. Broken by hand, never ground, so the sweetness unfolds over the eleven hours we are open.',
  },
  {
    name: 'Fennel',
    no: '05',
    note: 'A quiet sweetness.',
    text: 'The reason you want a second glass. It smooths the edges without ever announcing itself.',
  },
  {
    name: 'Black Pepper',
    no: '06',
    note: 'A crack of heat at the end.',
    text: 'The last thing you taste. One turn of the mill over the kettle, and the whole glass wakes up.',
  },
]

export const stats = [
  { value: 11, suffix: '', unit: 'hours', label: 'A night' },
  { value: 6, suffix: '', unit: 'days', label: 'A week' },
  { value: 125, suffix: '', unit: 'seats', label: 'Inside & out' },
  { value: 24, suffix: '', unit: 'spices', label: 'In the blend' },
]

export const hoursInfo = [
  {
    label: 'First pour',
    time: '6:00 PM',
    text: 'The kettle goes on before the lights do. The first glass is always for the staff.',
  },
  {
    label: 'The last chai',
    time: '5:00 AM',
    text: 'Poured for the ones who stay, the night shifts and the ones who forgot the time.',
  },
  {
    label: 'Second home',
    time: 'Any hour',
    text: 'Our tables are yours. No rush, no last order, no one counting the minutes.',
  },
  {
    label: 'All are welcome',
    time: 'Every night',
    text: 'Students, drivers, dreamers, old friends and the ones who have not met yet.',
  },
]

export const menu = [
  {
    section: 'Chai & shakes',
    items: [
      { name: 'Signature Chai', note: 'Fresh milk, whole spices', price: '₹40' },
      { name: 'Cutting Chai', note: 'The small, strong one', price: '₹25' },
      { name: 'Kulhad Chai', note: 'Clay cup, extra adrak', price: '₹50' },
      { name: 'KitKat Shake', note: 'Whipped cream, crushed wafer', price: '₹120' },
    ],
  },
  {
    section: 'Buns & sandwiches',
    items: [
      { name: 'Classic Vada Pav', note: 'Dry garlic & green chutney', price: '₹40' },
      { name: 'Cheese Vada Pav', note: 'Amul cheese, extra chutney', price: '₹60' },
      { name: 'Paneer Tandoori Sandwich', note: 'Charred paneer, house slaw', price: '₹90' },
    ],
  },
  {
    section: 'Comfort',
    items: [
      { name: 'Masala Maggi', note: 'House masala, butter, vegetables', price: '₹50' },
      { name: 'White Sauce Pasta', note: 'Penne, cream, cracked pepper', price: '₹110' },
      { name: 'Stuffed Paratha', note: 'Potato, white butter, curd', price: '₹60' },
    ],
  },
  {
    section: 'Chaat',
    items: [
      { name: 'Papadi Chaat', note: 'Curd, tamarind, sev, pomegranate', price: '₹70' },
      { name: 'Sev Puri', note: 'Six pieces, three chutneys', price: '₹60' },
      { name: 'Dahi Puri', note: 'Cold curd, sweet & sharp', price: '₹70' },
    ],
  },
]

export const navLinks = [
  { label: 'Menu', href: '#menu', action: 'menu' },
  { label: 'Story', href: '#story' },
  { label: 'Experience', href: '#dishes' },
  { label: 'Visit', href: '#visit' },
]

export const DISHES_COUNT = dishes.length
