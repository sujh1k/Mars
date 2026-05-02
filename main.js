const facts = [
  'Марс має два маленькі супутники: Фобос і Деймос.',
  'Олімп Монс — найвищий вулкан у Сонячній системі.',
  'Середня температура на Марсі близько -60°C.',
  'На Марсі є полярні льодові шапки з водяного льоду.',
  'Ровер Perseverance шукає сліди древнього життя у кратері Єзеро.'
];

const craters = {
  hellas: {
    name: 'Hellas Planitia',
    age: 'приблизно 4,1 млрд років тому',
    impactor: 'гігантський астероїд діаметром близько 25 км',
    diameter: 2300,
    depth: '~9 км',
    material: 'дно із суміші пилу, льоду та базальтових порід',
    description: 'Один з найбільших ударних басейнів у Сонячній системі. Це друге за глибиною місце на Марсі.',
    image: 'https://images-assets.nasa.gov/image/PIA00404/PIA00404~thumb.jpg'
  },
  argyre: {
    name: 'Argyre Planitia',
    age: 'приблизно 3,9 млрд років тому',
    impactor: 'астероїд діаметром 10-15 км',
    diameter: 1800,
    depth: '~6 км',
    material: 'утрамбовані осадові породи з характерними круглими шарами',
    location: 'південний захід Марсу',
    description: 'Великий басейн, заповнений давніми льодовими та водними відкладеннями.',
    image: 'https://images-assets.nasa.gov/image/PIA00405/PIA00405~thumb.jpg'
  },
  gale: {
    name: 'Кратер Ґейл',
    age: 'понад 3,5 млрд років тому',
    impactor: 'великий астероїд діаметром близько 5 км',
    diameter: 154,
    depth: '~5,5 км',
    material: 'скельні та вулканічні породи з відкладеннями сульфатів',
    description: 'Всередині кратера є гора Аєоліс Монс (Mount Sharp), яку досліджує ровер Curiosity.',
    image: 'https://images-assets.nasa.gov/image/PIA22210/PIA22210~thumb.jpg'
  },
  jezero: {
    name: 'Кратер Єзеро',
    age: 'близько 3,6 млрд років тому',
    impactor: 'скелястий астероїд діаметром 1,5 км',
    diameter: 45,
    depth: '~3 км',
    material: 'осадові породи з глинистими мінералами',
    description: 'Цей кратер став місцем посадки місії Perseverance, бо тут була дельта давньої річки.',
    image: 'https://images-assets.nasa.gov/image/PIA24096/PIA24096~thumb.jpg'
  },
  schiaparelli: {
    name: 'Кратер Скіапареллі',
    age: 'близько 3,5 млрд років тому',
    impactor: 'астероїд діаметром ~2,5 км',
    diameter: 470,
    depth: '~2 км',
    material: 'слоїсті осадові породи',
    description: 'Названий на честь італійського астронома Джованні Скіапареллі. Містить добре збережені осадові шари.',
    image: 'https://images-assets.nasa.gov/image/PIA00406/PIA00406~thumb.jpg'
  },
  'valles-marineris': {
    name: 'Valles Marineris',
    age: 'близько 3,7 млрд років тому',
    impactor: 'тектонічна активність, а не удар астероїда',
    diameter: 4000,
    depth: '~7 км',
    material: 'вулканічні та осадові породи',
    description: 'Найбільша система каньйонів у Сонячній системі. Це тектонічний розлом, а не ударний кратер.',
    image: 'https://images-assets.nasa.gov/image/PIA00407/PIA00407~thumb.jpg'
  },
  'syrtis-major': {
    name: 'Syrtis Major Planitia',
    age: 'близько 4 млрд років тому',
    impactor: 'великий астероїд та вулканізм',
    diameter: 1500,
    depth: '~3 км',
    material: 'базальтові породи',
    description: 'Темна область, добре видима з Землі. Це щитовий вулкан у стародавньому ударному басейні.',
    image: 'https://images-assets.nasa.gov/image/PIA00408/PIA00408~thumb.jpg'
  },
  mariner: {
    name: 'Кратер Марінер',
    age: 'близько 3,2 млрд років тому',
    impactor: 'астероїд діаметром ~1 км',
    diameter: 170,
    depth: '~2,5 км',
    material: 'мішанина осадових та вулканічних порід',
    description: 'Названий на честь програми Mariner. Розташований у районі Phaethontis.',
    image: 'https://images-assets.nasa.gov/image/PIA12358/PIA12358~thumb.jpg'
  },
  victoria: {
    name: 'Кратер Вікторія',
    age: 'близько 3 млрд років тому',
    impactor: 'астероїд діаметром ~0,7 км',
    diameter: 0.8,
    depth: '~0,07 км',
    material: 'шаруваті осадові породи',
    description: 'Досліджений марсоходом Opportunity. Має характерні зазубрені краї через ерозію.',
    image: 'https://images-assets.nasa.gov/image/PIA08813/PIA08813~thumb.jpg'
  },
  endeavour: {
    name: 'Кратер Endeavour',
    age: 'близько 3,5 млрд років тому',
    impactor: 'великий астероїд',
    diameter: 22,
    depth: '~1,2 км',
    material: 'мінерали з глинистими слідами (філосилікати)',
    description: 'Місце тривалого дослідження марсоходом Opportunity. Тут знайдені докази існування прісної води.',
    image: 'https://images-assets.nasa.gov/image/PIA19154/PIA19154~thumb.jpg'
  },
  isidis: {
    name: 'Isidis Planitia',
    age: 'близько 4,1 млрд років тому',
    impactor: 'гігантський астероїд',
    diameter: 1500,
    depth: '~5 км',
    material: 'вулканічні та осадові породи',
    description: 'Третій за розміром ударний басейн на Марсі. Місце посадки місії Beagle 2.',
    image: 'https://images-assets.nasa.gov/image/PIA03087/PIA03087~thumb.jpg'
  },
  holden: {
    name: 'Кратер Холден',
    age: 'близько 3,8 млрд років тому',
    impactor: 'астероїд діаметром ~4 км',
    diameter: 140,
    depth: '~1,2 км',
    material: 'древні озерні відклади',
    description: 'Містить сліди давнього озера та річкових систем. Був кандидатом на посадку Curiosity.',
    image: 'https://images-assets.nasa.gov/image/PIA11982/PIA11982~thumb.jpg'
  }
};

const rovers = {
  perseverance: {
    name: 'Perseverance',
    launched: '30 липня 2020',
    location: 'Кратер Єзеро',
    mission: 'НАСА Марс 2020',
    description: 'Ровер Perseverance досліджує ознаки древнього життя та готує технології для людських місій.',
    sensors: [
      'RIMFAX (радар)',
      'Mastcam-Z (камери)', 
      'PIXL (рентген)',
      'SHERLOC (лазер)',
      'MEDA (погода)'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA23720/PIA23720~thumb.jpg'
  },
  curiosity: {
    name: 'Curiosity',
    launched: '26 листопада 2011',
    location: 'Кратер Ґейл',
    mission: 'НАСА MSL',
    description: 'Curiosity - найбільший марсохід на момент запуску. Досліджує можливість древнього життя на Марсі.',
    sensors: [
      'SAM (лабораторія)',
      'Mastcam (камери)',
      'RAD (радіація)',
      'ChemCam (лазер)',
      'MAHLI (макрокамера)'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~thumb.jpg'
  },
  opportunity: {
    name: 'Opportunity',
    launched: '7 липня 2003',
    location: 'Кратер Endeavour',
    mission: 'НАСА MER',
    description: 'Opportunity працював на Марсі майже 15 років, знайшовши докази присутності рідкої води в минулому.',
    sensors: [
      'Pancam (панорама)',
      'Microscopic Imager',
      'APXS (спектрометр)',
      'RAT (буріння)',
      'Mini-TES'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA18404/PIA18404~thumb.jpg'
  },
  zhurong: {
    name: 'Zhurong',
    launched: '14 травня 2021',
    location: 'Utopia Planitia',
    mission: 'CNSA Tianwen-1',
    description: 'Zhurong - перший китайський марсохід, який проводив геологічні дослідження та пошуки підземного льоду.',
    sensors: [
      'RoPeR (радар)',
      'MarSCoDe (лазер)',
      'MCS (клімат)',
      'MSCam (камери)',
      'RoMAG (магнітометр)'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA24634/PIA24634~thumb.jpg'
  }
};

const factButton = document.getElementById('show-fact');
const factCard = document.getElementById('fact-card');
const craterGrid = document.getElementById('crater-grid');
const craterDetail = document.getElementById('crater-detail');
const craterSection = document.getElementById('craters');
let currentSort = 'name';

function showRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  factCard.textContent = facts[index];
}

function getSortedCraters() {
  const craterArray = Object.entries(craters).map(([key, crater]) => ({
    key,
    ...crater
  }));
  
  if (currentSort === 'largest') {
    return craterArray.sort((a, b) => b.diameter - a.diameter);
  } else if (currentSort === 'smallest') {
    return craterArray.sort((a, b) => a.diameter - b.diameter);
  } else if (currentSort === 'name') {
    return craterArray.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
  }
  return craterArray;
}

function renderCraterGrid() {
  const sortedCraters = getSortedCraters();
  craterGrid.innerHTML = sortedCraters.map(crater => `
    <a href="craters/${crater.key}.html" class="crater-card crater-card--link">
      <img src="${crater.image}" alt="${crater.name}" class="crater-card__image">
      <h4>${crater.name}</h4>
      <p class="crater-card__size">⌀ ${crater.diameter} км</p>
    </a>
  `).join('');
}

function renderCraterDetail(crater) {
  craterDetail.innerHTML = `
    <div class="crater-detail__content">
      <img src="${crater.image}" alt="${crater.name}" class="crater-detail__image">
      <div class="crater-detail__text">
        <h3>${crater.name}</h3>
        <p><strong>📍 Діаметр:</strong> ${crater.diameter} км</p>
        <p><strong>📏 Глибина:</strong> ${crater.depth}</p>
        <p><strong>⏰ Вік:</strong> ${crater.age}</p>
        <p><strong>🌠 Ударний астероїд:</strong> ${crater.impactor}</p>
        <p><strong>🪨 Матеріал:</strong> ${crater.material}</p>
        <p><strong>📝 Опис:</strong> ${crater.description}</p>
      </div>
    </div>
  `;
}

function handleCraterClick(event) {
  const button = event.target.closest('[data-crater]');
  if (!button) return;
  const craterKey = button.dataset.crater;
  if (craters[craterKey]) {
    renderCraterDetail(craters[craterKey]);
    craterDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function changeSortOrder(sortType) {
  currentSort = sortType;
  renderCraterGrid();
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.remove('sort-btn--active');
  });
  const activeBtn = document.querySelector(`[data-sort="${sortType}"]`);
  if (activeBtn) activeBtn.classList.add('sort-btn--active');
}

function renderRovers() {
  const roverGrid = document.getElementById('rover-grid');
  if (roverGrid) {
    const missionFileNames = {
      perseverance: 'mars-2020',
      curiosity: 'curiosity',
      opportunity: 'opportunity',
      zhurong: 'zhurong'
    };
    
    roverGrid.innerHTML = Object.entries(rovers).map(([key, rover]) => `
      <a href="missions/${missionFileNames[key]}.html" class="rover-card rover-card--link" style="text-decoration: none; color: inherit;">
        <img src="${rover.image}" alt="${rover.name}" class="rover-card__image">
        <div class="rover-card__content">
          <h3>${rover.name}</h3>
          <p class="rover-card__meta">
            <span>🚀 Запущено: ${rover.launched}</span><br>
            <span>📍 Місце: ${rover.location}</span>
          </p>
          <p>${rover.description}</p>
          <h4>🔧 Датчики та інструменти:</h4>
          <ul class="rover-card__sensors">
            ${rover.sensors.map(sensor => `<li>${sensor}</li>`).join('')}
          </ul>
        </div>
      </a>
    `).join('');
  }
}

if (factButton) factButton.addEventListener('click', showRandomFact);
if (craterSection) craterSection.addEventListener('click', handleCraterClick);

// Сортування через делегування або кнопки (якщо вони будуть додані в HTML)
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('sort-btn')) {
    changeSortOrder(e.target.dataset.sort);
  }
});

// Ініціалізація
renderCraterGrid();
renderRovers();
