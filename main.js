const FACTS = [
  'Марс має два маленькі супутники: Фобос і Деймос — захоплені астероїди.',
  'Олімп Монс — найвищий вулкан у Сонячній системі: 21,9 км заввишки.',
  'Середня температура на Марсі близько -60°C, але влітку біля екватора буває +20°C.',
  'На Марсі є полярні льодові шапки з водяного льоду та сухого льоду (CO₂).',
  'Ровер Perseverance вже зібрав понад 20 зразків марсіанського ґрунту.',
  'Доба на Марсі (сол) тривала 24 год 37 хв — лише на 37 хвилин довше за земну.',
  'Марсіанський рік — 687 земних днів.',
  'Сила тяжіння на Марсі лише 38% від земної — людина вагою 80 кг важила б там 30 кг.',
  'Марс має найбільші пилові бурі у Сонячній системі — можуть вкрити всю планету.',
  'Вертоліт Ingenuity здійснив перший моторний політ на іншій планеті у 2021 р.',
  'Valles Marineris — найдовший каньйон Сонячної системи: 4000 км завдовжки.',
  'Марс можна побачити неозброєним оком — він виглядає як яскрава червона зірка.',
  'Атмосфера Марсу на 95% складається з CO₂ — дихання там неможливе.',
  'Прилад MOXIE на Perseverance вже виробив кисень з марсіанського CO₂.',
  'NASA планує пілотовану місію на Марс у 2030-х роках.',
];

const STATS = [
  { label: 'Відстань від Сонця', value: '228 млн км', icon: '☀️' },
  { label: 'Діаметр планети', value: '6 779 км', icon: '🔴' },
  { label: 'Тривалість доби (Сол)', value: '24 год 37 хв', icon: '🕐' },
  { label: 'Тривалість року', value: '687 днів', icon: '📅' },
  { label: 'Температура', value: '-60°C середня', icon: '🌡️' },
  { label: 'Супутники', value: '2 (Фобос, Деймос)', icon: '🌑' },
];

const MOONS = {
  phobos: {
    name: 'Фобос',
    diameter: '22,2 км',
    orbit: '7 год 39 хв',
    distance: '6 000 км від поверхні',
    description: 'Найближчий і найбільший супутник Марсу. Настільки близько, що його не видно з полюсів. Поступово наближається до Марсу — через ~50 млн років або зіткнеться з ним, або перетвориться на кільце.',
    emoji: '🌑',
  },
  deimos: {
    name: 'Деймос',
    diameter: '12,6 км',
    orbit: '30 год 18 хв',
    distance: '23 460 км від поверхні',
    description: 'Менший і далекий супутник Марсу. Поступово віддаляється від планети, як наш Місяць від Землі. Виглядає з Марсу як яскрава зірка, а не як диск.',
    emoji: '🌕',
  },
};

const SCIENTISTS = [
  {
    name: 'Галілео Галілей',
    years: '1564 – 1642',
    role: 'Астроном, фізик',
    country: '🇮🇹 Італія',
    contribution: 'Перший використав телескоп для спостереження Марсу (1610). Помітив, що планета змінює видимий розмір залежно від відстані до Землі.',
    fact: 'Галілей першим довів, що Марс — це куля, а не безформне світло.',
    avatar: 'ГГ',
    color: '#c0844a',
  },
  {
    name: 'Йоганн Кеплер',
    years: '1571 – 1630',
    role: 'Математик, астроном',
    country: '🇩🇪 Германія',
    contribution: 'Відкрив три закони руху планет, аналізуючи орбіту Марсу. Довів, що орбіти — еліпси, а не кола.',
    fact: 'Кеплер 6 років вивчав дані про Марс від Тихо Браге, перш ніж відкрив свої закони.',
    avatar: 'ЙК',
    color: '#4a7fc0',
  },
  {
    name: 'Джованні Скіапареллі',
    years: '1835 – 1910',
    role: 'Астроном',
    country: '🇮🇹 Італія',
    contribution: 'Створив детальну карту Марсу (1877). Описав "канали" на поверхні — це спричинило 40 років дискусій про марсіанську цивілізацію.',
    fact: 'Слово "canali" означало "протоки" — але англійці переклали як "canals" (рукотворні канали).',
    avatar: 'ДС',
    color: '#c04a6a',
  },
  {
    name: 'Персіваль Ловелл',
    years: '1855 – 1916',
    role: 'Астроном, письменник',
    country: '🇺🇸 США',
    contribution: 'Побудував обсерваторію для вивчення Марсу. Розвинув теорію про інтелектуальну цивілізацію, що зрошує планету каналами.',
    fact: 'Теорія Ловелла надихнула Герберта Уеллса написати "Война світів" (1898).',
    avatar: 'ПЛ',
    color: '#8a4ac0',
  },
  {
    name: 'Карл Саган',
    years: '1934 – 1996',
    role: 'Астроном, популяризатор науки',
    country: '🇺🇸 США',
    contribution: 'Брав участь у місіях Viking і Voyager. Популяризував ідею пошуку позаземного життя. Автор серіалу "Cosmos".',
    fact: 'Саган висунув ідею посадки марсохода ще у 1970-х — реалізована у 1997 р. (Sojourner).',
    avatar: 'КС',
    color: '#4ac080',
  },
  {
    name: 'Ілон Маск',
    years: '1971 – тепер',
    role: 'Підприємець, інженер',
    country: '🇺🇸 США / ПАР',
    contribution: 'Заснував SpaceX з метою колонізації Марсу. Розробляє ракету Starship для перевезення 100 людей на Марс за один рейс.',
    fact: 'Маск хоче побудувати на Марсі самодостатнє місто з мільйоном жителів до 2050 р.',
    avatar: 'ІМ',
    color: '#c0b04a',
  },
];

const TIMELINE = [
  { year: '~4000 до н.е.', event: 'Вавилоняни фіксують рух Марсу як бога Нергала — покровителя смерті та чуми.', type: 'ancient' },
  { year: '~130 н.е.', event: 'Клавдій Птолемей включає Марс у геоцентричну модель сонячної системи.', type: 'ancient' },
  { year: '1610', event: 'Галілео Галілей вперше спостерігає Марс у телескоп і помічає зміни його розміру.', type: 'discovery' },
  { year: '1659', event: 'Хрістіан Гюйгенс малює першу карту Марсу і вимірює тривалість марсіанської доби.', type: 'discovery' },
  { year: '1877', event: 'Скіапареллі описує "канали" на Марсі. Асаф Холл відкриває Фобос і Деймос.', type: 'discovery' },
  { year: '1965', event: 'Mariner 4 (NASA) — перший успішний прольот повз Марс. Перші крупні плани: кратери, відсутність рідкої води.', type: 'mission' },
  { year: '1971', event: 'Mariner 9 стає першим апаратом на орбіті іншої планети. Знімає Олімп Монс та Valles Marineris.', type: 'mission' },
  { year: '1976', event: 'Viking 1 і Viking 2 — перші успішні посадки на Марс. Вперше проводять біохімічні аналізи ґрунту.', type: 'mission' },
  { year: '1997', event: 'Pathfinder і перший марсохід Sojourner. Ідея Карла Сагана нарешті реалізована.', type: 'mission' },
  { year: '2004', event: 'Spirit і Opportunity знаходять докази існування рідкої води в минулому Марсу.', type: 'mission' },
  { year: '2012', event: 'Curiosity приземляється у кратері Ґейл. Знаходить органічні молекули та метан.', type: 'mission' },
  { year: '2021', event: 'Perseverance, Ingenuity та Zhurong — одразу три нових апарати. Перший моторний політ на Марсі.', type: 'mission' },
  { year: '2026', event: 'Планується місія повернення зразків (Mars Sample Return) — перша доставка марсіанського ґрунту на Землю.', type: 'future' },
  { year: '2030-ті', event: 'NASA планує першу пілотовану місію на Марс. SpaceX Starship — комерційні польоти на Марс.', type: 'future' },
  { year: '2050+', event: 'Ілон Маск та SpaceX планують перші постійні поселення — мета: самодостатнє місто на Марсі.', type: 'future' },
];

const GALLERY = [
  { title: 'Поверхня кратера Єзеро', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA24096/PIA24096~thumb.jpg' },
  { title: 'Ровер Perseverance', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA23720/PIA23720~thumb.jpg' },
  { title: 'Вертоліт Ingenuity', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA24547/PIA24547~thumb.jpg' },
  { title: 'Кратер Ґейл з орбіти', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA22210/PIA22210~thumb.jpg' },
  { title: 'Curiosity на горі Шарп', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~thumb.jpg' },
  { title: 'Hellas Planitia з орбіти', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA00404/PIA00404~thumb.jpg' },
  { title: 'Opportunity у кратері Вікторія', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA08813/PIA08813~thumb.jpg' },
  { title: 'Кратер Endeavour', credit: 'NASA/JPL-Caltech', url: 'https://images-assets.nasa.gov/image/PIA19154/PIA19154~thumb.jpg' },
  { title: 'Марс з космосу', credit: 'NASA/ESA', url: 'https://images-assets.nasa.gov/image/PIA02683/PIA02683~thumb.jpg' },
];

const CRATERS = {
  hellas: {
    name: 'Hellas Planitia',
    age: 'приблизно 4,1 млрд років тому',
    impactor: 'гігантський астероїд діаметром близько 25 км',
    diameter: 2300,
    depth: '~9 км',
    material: 'дно із суміші пилу, льоду та базальтових порід',
    description: 'Один з найбільших ударних басейнів у Сонячній системі. Це друге за глибиною місце на Марсі.',
    science: 'Через надзвичайну глибину тут найвищий атмосферний тиск на Марсі — ідеальне місце для майбутніх баз.',
    image: 'https://images-assets.nasa.gov/image/PIA00404/PIA00404~thumb.jpg',
  },
  argyre: {
    name: 'Argyre Planitia',
    age: 'приблизно 3,9 млрд років тому',
    impactor: 'астероїд діаметром 10–15 км',
    diameter: 1800,
    depth: '~6 км',
    material: 'утрамбовані осадові породи з характерними круглими шарами',
    description: 'Великий басейн, заповнений давніми льодовими та водними відкладеннями.',
    science: 'Можливо, тут раніше існувало озеро або невелике море — кандидат для пошуку слідів давнього життя.',
    image: 'https://images-assets.nasa.gov/image/PIA00405/PIA00405~thumb.jpg',
  },
  gale: {
    name: 'Кратер Ґейл',
    age: 'понад 3,5 млрд років тому',
    impactor: 'великий астероїд діаметром близько 5 км',
    diameter: 154,
    depth: '~5,5 км',
    material: 'скельні та вулканічні породи з відкладеннями сульфатів',
    description: 'Всередині кратера є гора Аєоліс Монс (Mount Sharp), яку досліджує ровер Curiosity.',
    science: 'Curiosity знайшов органічні молекули та метан — ознаки можливого давнього живого середовища.',
    image: 'https://images-assets.nasa.gov/image/PIA22210/PIA22210~thumb.jpg',
  },
  jezero: {
    name: 'Кратер Єзеро',
    age: 'близько 3,6 млрд років тому',
    impactor: 'скелястий астероїд діаметром 1,5 км',
    diameter: 45,
    depth: '~3 км',
    material: 'осадові породи з глинистими мінералами',
    description: 'Місце посадки Perseverance — тут була дельта давньої річки.',
    science: 'Дельта річки — найкраще місце для пошуку мікробних решток. Зразки чекають доставки на Землю.',
    image: 'https://images-assets.nasa.gov/image/PIA24096/PIA24096~thumb.jpg',
  },
  schiaparelli: {
    name: 'Кратер Скіапареллі',
    age: 'близько 3,5 млрд років тому',
    impactor: 'астероїд діаметром ~2,5 км',
    diameter: 470,
    depth: '~2 км',
    material: 'шаруваті осадові породи',
    description: 'Названий на честь астронома Джованні Скіапареллі. Містить добре збережені осадові шари.',
    science: 'Збережені шари дозволяють вивчати кліматичну історію Марсу — як кільця дерева, але планетарного масштабу.',
    image: 'https://images-assets.nasa.gov/image/PIA00406/PIA00406~thumb.jpg',
  },
  'valles-marineris': {
    name: 'Valles Marineris',
    age: 'близько 3,7 млрд років тому',
    impactor: 'тектонічна активність, а не удар астероїда',
    diameter: 4000,
    depth: '~7 км',
    material: 'вулканічні та осадові породи',
    description: 'Найбільша система каньйонів у Сонячній системі — тектонічний розлом.',
    science: 'Стіни каньйону оголюють 3,7 млрд років марсіанської геології — природний геологічний розріз планети.',
    image: 'https://images-assets.nasa.gov/image/PIA00407/PIA00407~thumb.jpg',
  },
  'syrtis-major': {
    name: 'Syrtis Major Planitia',
    age: 'близько 4 млрд років тому',
    impactor: 'великий астероїд та вулканізм',
    diameter: 1500,
    depth: '~3 км',
    material: 'базальтові породи',
    description: 'Темна область, добре видима з Землі. Щитовий вулкан у стародавньому ударному басейні.',
    science: 'Перша деталь Марсу, намальована з Землі — Гюйгенс зобразив її у 1659 р.',
    image: 'https://images-assets.nasa.gov/image/PIA00408/PIA00408~thumb.jpg',
  },
  mariner: {
    name: 'Кратер Марінер',
    age: 'близько 3,2 млрд років тому',
    impactor: 'астероїд діаметром ~1 км',
    diameter: 170,
    depth: '~2,5 км',
    material: 'мішанина осадових та вулканічних порід',
    description: 'Названий на честь програми Mariner. Розташований у районі Phaethontis.',
    science: 'Документує пізню стадію ударного бомбардування Марсу після формування Сонячної системи.',
    image: 'https://images-assets.nasa.gov/image/PIA12358/PIA12358~thumb.jpg',
  },
  victoria: {
    name: 'Кратер Вікторія',
    age: 'близько 3 млрд років тому',
    impactor: 'астероїд діаметром ~0,7 км',
    diameter: 0.8,
    depth: '~0,07 км',
    material: 'шаруваті осадові породи',
    description: 'Досліджений марсоходом Opportunity. Характерні зазубрені краї через ерозію.',
    science: 'Opportunity провів 2 роки всередині вивчаючи 7 шарів порід і знайшов сліди кислого водного середовища.',
    image: 'https://images-assets.nasa.gov/image/PIA08813/PIA08813~thumb.jpg',
  },
  endeavour: {
    name: 'Кратер Endeavour',
    age: 'близько 3,5 млрд років тому',
    impactor: 'великий астероїд',
    diameter: 22,
    depth: '~1,2 км',
    material: 'мінерали з глинистими слідами (філосилікати)',
    description: 'Місце тривалого дослідження Opportunity. Тут знайдені докази прісної води.',
    science: 'Філосилікати утворюються лише у нейтральній воді — перший прямий доказ прісноводного середовища на Марсі.',
    image: 'https://images-assets.nasa.gov/image/PIA19154/PIA19154~thumb.jpg',
  },
  isidis: {
    name: 'Isidis Planitia',
    age: 'близько 4,1 млрд років тому',
    impactor: 'гігантський астероїд',
    diameter: 1500,
    depth: '~5 км',
    material: 'вулканічні та осадові породи',
    description: 'Третій за розміром ударний басейн на Марсі. Місце посадки місії Beagle 2.',
    science: 'У 2003 р. тут спробував приземлитися британський зонд Beagle 2 — знайдений лише у 2015 р.',
    image: 'https://images-assets.nasa.gov/image/PIA03087/PIA03087~thumb.jpg',
  },
  holden: {
    name: 'Кратер Холден',
    age: 'близько 3,8 млрд років тому',
    impactor: 'астероїд діаметром ~4 км',
    diameter: 140,
    depth: '~1,2 км',
    material: 'древні озерні відклади',
    description: 'Містить сліди давнього озера та річкових систем. Кандидат на посадку Curiosity.',
    science: 'Озерні відклади та алювіальні конуси — одне з найперспективніших місць для пошуку слідів давнього марсіанського життя.',
    image: 'https://images-assets.nasa.gov/image/PIA11982/PIA11982~thumb.jpg',
  },
};

const MISSIONS = {
  'mars-2020': {
    name: 'Perseverance',
    missionName: 'NASA Mars 2020',
    agency: 'NASA / JPL-Caltech',
    launched: '30 липня 2020',
    landed: '18 лютого 2021',
    location: 'Кратер Єзеро',
    status: 'active',
    statusText: 'Активний',
    description: 'Ровер шукає ознаки давнього мікробного життя та готує технології для пілотованих місій.',
    goals: [
      'Пошук слідів давнього мікробного життя',
      'Збір і зберігання зразків для повернення на Землю',
      'Тестування виробництва кисню з CO₂ (MOXIE)',
      'Вивчення марсіанської погоди і поверхні',
    ],
    sensors: [
      { name: 'RIMFAX', desc: 'Радар для вивчення підземних шарів' },
      { name: 'Mastcam-Z', desc: 'Стереокамери з зумом' },
      { name: 'PIXL', desc: 'Рентгенівський спектрометр' },
      { name: 'SHERLOC', desc: 'УФ-лазер для органічних молекул' },
      { name: 'MEDA', desc: 'Метеорологічна станція' },
      { name: 'MOXIE', desc: 'Виробництво кисню з CO₂' },
    ],
    facts: [
      'Perseverance — найрозумніший ровер: може самостійно об\'їжджати перешкоди',
      'Ніс вертоліт Ingenuity — перший апарат, що літав над іншою планетою',
      'Зібрав понад 20 зразків ґрунту для майбутньої місії повернення',
    ],
    image: 'https://images-assets.nasa.gov/image/PIA23720/PIA23720~thumb.jpg',
  },
  curiosity: {
    name: 'Curiosity',
    missionName: 'NASA MSL',
    agency: 'NASA / JPL-Caltech',
    launched: '26 листопада 2011',
    landed: '6 серпня 2012',
    location: 'Кратер Ґейл (гора Аєоліс)',
    status: 'active',
    statusText: 'Активний',
    description: 'Найбільший марсохід на момент запуску. Досліджує можливість існування давнього мікробного життя.',
    goals: [
      'Визначення, чи міг Марс підтримувати мікробне життя',
      'Вивчення клімату та геології',
      'Дослідження радіаційного середовища',
      'Аналіз органічних молекул і хімічного складу ґрунту',
    ],
    sensors: [
      { name: 'SAM', desc: 'Хімічна лабораторія для аналізу газів та органіки' },
      { name: 'Mastcam', desc: 'Кольорові стереокамери' },
      { name: 'RAD', desc: 'Вимірювач радіаційного фону' },
      { name: 'ChemCam', desc: 'Лазерний спектрометр для аналізу порід' },
      { name: 'MAHLI', desc: 'Макрокамера для крупних планів' },
      { name: 'CheMin', desc: 'Рентгенівська дифракція мінералів' },
    ],
    facts: [
      'Curiosity важить 899 кг — розміром з автомобіль',
      'Живиться від ядерного джерела (RTG) — не залежить від сонця',
      'Знайшов органічні молекули та метан у марсіанській атмосфері',
    ],
    image: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~thumb.jpg',
  },
  opportunity: {
    name: 'Opportunity',
    missionName: 'NASA MER-B',
    agency: 'NASA / JPL',
    launched: '7 липня 2003',
    landed: '25 січня 2004',
    location: 'Кратер Endeavour',
    status: 'completed',
    statusText: 'Завершено (2018)',
    description: 'Opportunity працював майже 15 років — у 60 разів довше запланованого. Знайшов докази рідкої води.',
    goals: [
      'Пошук доказів присутності рідкої води в минулому',
      'Дослідження мінерального складу ґрунту',
      'Вивчення геологічної історії Меридіанської рівнини',
      'Аналіз метеоритів на поверхні Марсу',
    ],
    sensors: [
      { name: 'Pancam', desc: 'Панорамна камера для огляду місцевості' },
      { name: 'Microscopic Imager', desc: 'Мікроскоп для аналізу поверхні порід' },
      { name: 'APXS', desc: 'Спектрометр для хімічного складу' },
      { name: 'RAT', desc: 'Дриль для розкриття поверхні порід' },
      { name: 'Mini-TES', desc: 'Теплова спектрометрія порід' },
    ],
    facts: [
      'Планувався на 90 днів — відпрацював 5 111 днів (14 років)',
      'Подолав понад 45 км — марафонська дистанція на Марсі',
      'Замовчав після пилової бурі 2018 р., яка заблокувала сонячні панелі',
    ],
    image: 'https://images-assets.nasa.gov/image/PIA18404/PIA18404~thumb.jpg',
  },
  zhurong: {
    name: 'Zhurong',
    missionName: 'CNSA Tianwen-1',
    agency: 'CNSA (Китай)',
    launched: '23 липня 2020',
    landed: '14 травня 2021',
    location: 'Utopia Planitia',
    status: 'hibernation',
    statusText: 'Сплячка з 2022',
    description: 'Перший китайський марсохід. Геологічні дослідження та пошук підземного льоду.',
    goals: [
      'Картографування рельєфу Utopia Planitia',
      'Пошук підповерхневого льоду радаром',
      'Вивчення марсіанського ґнути та магнітного поля',
      'Аналіз кліматичних умов',
    ],
    sensors: [
      { name: 'RoPeR', desc: 'Радар для виявлення підземного льоду' },
      { name: 'MarSCoDe', desc: 'Лазерний спектрометр' },
      { name: 'MCS', desc: 'Кліматична станція' },
      { name: 'MSCam', desc: 'Мультиспектральна камера' },
      { name: 'RoMAG', desc: 'Магнітометр' },
    ],
    facts: [
      'Tianwen-1 — перша місія, яка одразу вивела орбітер, посадковий модуль і ровер',
      'Zhurong — бог вогню у китайській міфології',
      'Знайшов докази відносно недавньої водної активності (~400 млн р. тому)',
    ],
    image: 'https://images-assets.nasa.gov/image/PIA24634/PIA24634~thumb.jpg',
  },
};

// ── Stars ──────────────────────────────────────
(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random() * 0.8 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,230,${s.a})`;
      ctx.fill();
    });
  }

  resize();
  draw();
  window.addEventListener('resize', () => { resize(); draw(); });
})();

// ── Scroll animations ──────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Facts ──────────────────────────────────────
let factIndex = Math.floor(Math.random() * FACTS.length);
function showNextFact() {
  factIndex = (factIndex + 1) % FACTS.length;
  const el = document.getElementById('fact-text');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = FACTS[factIndex];
    el.style.transition = 'opacity 0.4s';
    el.style.opacity = '1';
  }, 250);
}
if (document.getElementById('fact-text')) {
  document.getElementById('fact-text').textContent = FACTS[factIndex];
}
document.getElementById('fact-btn')?.addEventListener('click', showNextFact);
setInterval(showNextFact, 8000);

// ── Hamburger ─────────────────────────────────
document.getElementById('hamburger')?.addEventListener('click', () => {
  const links = document.querySelector('.nav__links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

// ── Stats bar ──────────────────────────────────
document.getElementById('stats-grid').innerHTML = STATS.map(s => `
  <div class="stat-card fade-in">
    <div class="stat-card__icon">${s.icon}</div>
    <div class="stat-card__value">${s.value}</div>
    <div class="stat-card__label">${s.label}</div>
  </div>
`).join('');
document.querySelectorAll('.stat-card.fade-in').forEach(el => observer.observe(el));

// ── Tabs ───────────────────────────────────────
document.getElementById('about-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  const tab = btn.dataset.tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`tab-${tab}`)?.classList.add('active');
});

// ── Atmosphere ─────────────────────────────────
const ATM = [
  { pct: '95,3%', name: 'Вуглекислий газ', desc: 'CO₂ — основний компонент. Для дихання непридатний.' },
  { pct: '2,7%', name: 'Азот', desc: 'N₂ — як і на Землі, але в набагато меншій кількості.' },
  { pct: '1,6%', name: 'Аргон', desc: 'Ar — інертний газ, не реагує з іншими речовинами.' },
  { pct: '0,13%', name: 'Кисень', desc: 'O₂ — є, але в 150 разів менше, ніж на Землі.' },
  { pct: '0,08%', name: 'Монооксид вуглецю', desc: 'CO — утворюється при фотодисоціації CO₂.' },
  { pct: 'сліди', name: 'Водяна пара', desc: 'H₂O — мінімум, але достатньо для утворення хмар.' },
];
document.getElementById('atm-grid').innerHTML = ATM.map(a => `
  <div class="atm-card">
    <div class="atm-card__pct">${a.pct}</div>
    <div class="atm-card__name">${a.name}</div>
    <div class="atm-card__desc">${a.desc}</div>
  </div>
`).join('');

// ── Moons ──────────────────────────────────────
function showMoonDetail(moonKey) {
  const m = MOONS[moonKey];
  if (!m) return;
  const body = document.getElementById('detail-body');
  body.innerHTML = `
    <div class="detail-header">
      <p style="color:var(--accent-soft);margin:0">🌑 Супутник Марсу</p>
      <h1>${m.name}</h1>
      <p>${m.emoji}</p>
    </div>
    <div class="detail-specs">
      <div class="detail-spec"><div class="detail-spec__label">Діаметр</div><div class="detail-spec__value">${m.diameter}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Орбітальний період</div><div class="detail-spec__value">${m.orbit}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Відстань від поверхні</div><div class="detail-spec__value">${m.distance}</div></div>
    </div>
    <div class="detail-section">
      <h3>📖 Опис</h3>
      <p style="color:var(--muted);line-height:1.7">${m.description}</p>
    </div>
  `;
  document.getElementById('detail-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

document.getElementById('moons-grid').innerHTML = Object.entries(MOONS).map(([key, m]) => `
  <div class="moon-card fade-in" data-moon="${key}" style="cursor:pointer;">
    <div class="moon-card__emoji">${m.emoji}</div>
    <h3>${m.name}</h3>
    <div class="moon-card__stats">
      <div class="moon-stat">Діаметр: <strong>${m.diameter}</strong></div>
      <div class="moon-stat">Орбітальний період: <strong>${m.orbit}</strong></div>
      <div class="moon-stat">Відстань: <strong>${m.distance}</strong></div>
    </div>
    <p>${m.description}</p>
    <div style="color:var(--accent-soft);font-size:0.85rem;margin-top:1rem">🔍 Натисни для деталей</div>
  </div>
`).join('');

document.getElementById('moons-grid').addEventListener('click', e => {
  const card = e.target.closest('[data-moon]');
  if (card) showMoonDetail(card.dataset.moon);
});

document.querySelectorAll('.moon-card.fade-in').forEach(el => observer.observe(el));

// ── Moons Mini-Site Tabs ────────────────────
document.getElementById('moons-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.moons-tab-btn');
  if (!btn) return;
  
  const moon = btn.dataset.moon;
  document.querySelectorAll('.moons-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.moons-detail-content').forEach(c => c.classList.add('hidden'));
  
  btn.classList.add('active');
  document.getElementById(`moons-detail-${moon}`)?.classList.remove('hidden');
});

// ── Observe moon detail section ──
document.querySelectorAll('.moons-comparison, .moons-detail-content').forEach(el => observer.observe(el));

// ── Scientists ─────────────────────────────────
document.getElementById('scientists-grid').innerHTML = SCIENTISTS.map(s => `
  <div class="scientist-card fade-in">
    <div class="scientist-card__top">
      <div class="scientist-avatar" style="background:${s.color}22;border:2px solid ${s.color}55;color:${s.color}">${s.avatar}</div>
      <div class="scientist-card__meta">
        <div class="scientist-card__name">${s.name}</div>
        <div class="scientist-card__years">${s.years}</div>
        <div class="scientist-card__role">${s.role}</div>
        <div class="scientist-card__country">${s.country}</div>
      </div>
    </div>
    <p class="scientist-card__contribution">${s.contribution}</p>
    <div class="scientist-card__fact">${s.fact}</div>
  </div>
`).join('');
document.querySelectorAll('.scientist-card.fade-in').forEach(el => observer.observe(el));

// ── Timeline ───────────────────────────────────
document.getElementById('timeline-list').innerHTML = TIMELINE.map(t => `
  <div class="timeline-item timeline-item--${t.type} fade-in">
    <div class="timeline-item__year">${t.year}</div>
    <div class="timeline-item__text">${t.event}</div>
  </div>
`).join('');
document.querySelectorAll('.timeline-item.fade-in').forEach(el => observer.observe(el));

// ── Rovers ─────────────────────────────────────
function renderMissionDetail(key) {
  const m = MISSIONS[key];
  if (!m) return;
  const body = document.getElementById('detail-body');
  body.innerHTML = `
    <div class="detail-header">
      <p style="color:var(--accent-soft);margin:0">🚀 ${m.agency}</p>
      <h1>${m.name}</h1>
      <p>${m.missionName}</p>
    </div>
    <img src="${m.image}" alt="${m.name}" class="detail-image">
    <div class="detail-specs">
      <div class="detail-spec"><div class="detail-spec__label">Запуск</div><div class="detail-spec__value">${m.launched}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Посадка</div><div class="detail-spec__value">${m.landed}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Локація</div><div class="detail-spec__value">${m.location}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Статус</div><div class="detail-spec__value">${m.statusText}</div></div>
    </div>
    <div class="detail-section">
      <h3>📖 Про місію</h3>
      <p style="color:var(--muted);line-height:1.7">${m.description}</p>
    </div>
    <div class="detail-section">
      <h3>🔧 Датчики</h3>
      <ul class="detail-list">${m.sensors.map(s => `<li><strong>${s.name}</strong> — ${s.desc}</li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <h3>🎯 Цікаві факти</h3>
      <ul class="detail-list">${m.facts.map(f => `<li>✦ ${f}</li>`).join('')}</ul>
    </div>
  `;
  document.getElementById('detail-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

document.getElementById('rover-grid').innerHTML = Object.entries(MISSIONS).map(([key, m]) => `
  <div class="rover-card fade-in" data-mission="${key}" style="cursor:pointer">
    <img src="${m.image}" alt="${m.name}" class="rover-card__image" loading="lazy">
    <div class="rover-card__body">
      <div style="display:flex;align-items:center;gap:0.8rem;flex-wrap:wrap">
        <div class="rover-card__name">${m.name}</div>
        <span class="rover-card__status status--${m.status}">${m.status === 'active' ? '🟢' : m.status === 'completed' ? '🔴' : '🟡'} ${m.statusText}</span>
      </div>
      <div class="rover-card__meta">🚀 ${m.launched} &nbsp;·&nbsp; 📍 ${m.location}</div>
      <div class="rover-card__desc">${m.description}</div>
    </div>
  </div>
`).join('');

document.getElementById('rover-grid').addEventListener('click', e => {
  const card = e.target.closest('[data-mission]');
  if (card) renderMissionDetail(card.dataset.mission);
});

// ── Craters ────────────────────────────────────
let currentSort = 'name';
let searchQuery = '';

function getSortedCraters() {
  const arr = Object.entries(CRATERS)
    .map(([key, c]) => ({ key, ...c }))
    .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  if (currentSort === 'largest') return arr.sort((a, b) => b.diameter - a.diameter);
  if (currentSort === 'smallest') return arr.sort((a, b) => a.diameter - b.diameter);
  return arr.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
}

function renderCraters() {
  const sorted = getSortedCraters();
  const grid = document.getElementById('crater-grid');
  if (sorted.length === 0) {
    grid.innerHTML = '<p style="color:var(--muted);padding:1rem">Нічого не знайдено</p>';
    return;
  }
  grid.innerHTML = sorted.map(c => `
    <div class="crater-card" data-crater="${c.key}">
      <img src="${c.image}" alt="${c.name}" class="crater-card__image" loading="lazy">
      <div class="crater-card__body">
        <div class="crater-card__name">${c.name}</div>
        <div class="crater-card__size">⌀ ${c.diameter} км</div>
      </div>
    </div>
  `).join('');
}

function showCraterFullDetail(key) {
  const crater = CRATERS[key];
  if (!crater) return;
  const body = document.getElementById('detail-body');
  body.innerHTML = `
    <div class="detail-header">
      <p style="color:var(--accent-soft);margin:0">🌍 Кратер Марсу</p>
      <h1>${crater.name}</h1>
      <p>${crater.description.split('.')[0]}.</p>
    </div>
    <img src="${crater.image}" alt="${crater.name}" class="detail-image">
    <div class="detail-specs">
      <div class="detail-spec"><div class="detail-spec__label">Діаметр</div><div class="detail-spec__value">${crater.diameter} км</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Глибина</div><div class="detail-spec__value">${crater.depth}</div></div>
      <div class="detail-spec"><div class="detail-spec__label">Вік</div><div class="detail-spec__value">${crater.age}</div></div>
    </div>
    <div class="detail-section">
      <h3>📖 Детальний опис</h3>
      <p style="color:var(--muted);line-height:1.7">${crater.description} ${crater.science}</p>
    </div>
    <div class="detail-section">
      <h3>🔬 Характеристики</h3>
      <ul class="detail-list">
        <li><strong>Астероїд:</strong> ${crater.impactor}</li>
        <li><strong>Матеріал:</strong> ${crater.material}</li>
      </ul>
    </div>
  `;
  document.getElementById('detail-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderCraterQuickDetail(crater) {
  const el = document.getElementById('crater-detail');
  el.innerHTML = `
    <div class="crater-detail__grid">
      <img src="${crater.image}" alt="${crater.name}" class="crater-detail__img">
      <div>
        <h3>${crater.name}</h3>
        <div class="crater-detail__row"><strong>📍 Діаметр:</strong> ${crater.diameter} км</div>
        <div class="crater-detail__row"><strong>📏 Глибина:</strong> ${crater.depth}</div>
        <div class="crater-detail__row"><strong>⏰ Вік:</strong> ${crater.age}</div>
        <div class="crater-detail__row"><strong>🌠 Астероїд:</strong> ${crater.impactor}</div>
        <div class="crater-detail__row"><strong>🪨 Матеріал:</strong> ${crater.material}</div>
        <div class="crater-detail__desc">${crater.description}</div>
        <button class="btn btn--primary" onclick="showCraterFullDetail('${crater.key}')" style="margin-top:1.2rem;display:inline-flex">Повний опис →</button>
      </div>
    </div>
  `;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('crater-grid').addEventListener('click', e => {
  const card = e.target.closest('[data-crater]');
  if (!card) return;
  const key = card.dataset.crater;
  if (CRATERS[key]) renderCraterQuickDetail({ key, ...CRATERS[key] });
});



document.addEventListener('click', e => {
  const btn = e.target.closest('.sort-btn');
  if (!btn) return;
  currentSort = btn.dataset.sort;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('sort-btn--active'));
  btn.classList.add('sort-btn--active');
  renderCraters();
});

document.getElementById('crater-search').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderCraters();
});

renderCraters();

// ── Overlay Close ─────────────────────────────
document.getElementById('detail-close').addEventListener('click', () => {
  document.getElementById('detail-overlay').classList.remove('active');
  document.body.style.overflow = 'auto';
});

// ── Gallery ────────────────────────────────────
document.getElementById('gallery-grid').innerHTML = GALLERY.map(g => `
  <div class="gallery-item fade-in">
    <img src="${g.url}" alt="${g.title}" loading="lazy">
    <div class="gallery-item__caption">
      <div class="gallery-item__title">${g.title}</div>
      <div class="gallery-item__credit">${g.credit}</div>
    </div>
  </div>
`).join('');
document.querySelectorAll('.gallery-item.fade-in').forEach(el => observer.observe(el));

// ── Future ─────────────────────────────────────
const FUTURE = [
  { org: 'NASA', name: 'Mars Sample Return', year: '2026+', desc: 'Перша місія, яка доставить марсіанський ґрунт на Землю. Зразки зібрані Perseverance чекають у кратері Єзеро.' },
  { org: 'NASA', name: 'Moon to Mars', year: '2030-ті', desc: 'Після повернення на Місяць NASA відправить людей на Марс. Мета — 30-денна пілотована місія.' },
  { org: 'SpaceX', name: 'Starship на Марс', year: '2026–2030', desc: 'Starship може доставити 100 тонн вантажу або до 100 пасажирів на Марс за один рейс.' },
  { org: 'ESA', name: 'ExoMars Rosalind Franklin', year: '2028', desc: 'Європейський ровер з буром для взяття проб на глибині 2 метри — для пошуку мікробного життя.' },
  { org: 'SpaceX', name: 'Марська колонія', year: '2040–2050', desc: 'Ілон Маск планує побудувати самодостатнє місто з мільйоном жителів. Потрібно ~1000 рейсів Starship.' },
  { org: 'Різні агентства', name: 'Терраформування?', year: '2100+', desc: 'Довгострокова ідея — зробити Марс придатним для дихання. Потрібно 1 000+ років і величезні ресурси.' },
];
document.getElementById('future-grid').innerHTML = FUTURE.map(f => `
  <div class="future-card fade-in">
    <div class="future-card__org">${f.org}</div>
    <h3>${f.name}</h3>
    <div class="future-card__year">${f.year}</div>
    <p>${f.desc}</p>
  </div>
`).join('');
document.querySelectorAll('.future-card.fade-in').forEach(el => observer.observe(el));
