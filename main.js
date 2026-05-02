const facts = [
  'Марс має два маленькі супутники: Фобос і Деймос.',
  'Олімп Монс — найвищий вулкан у Сонячній системі.',
  'Середня температура на Марсі близько -60°C.',
  'На Марсі є полярні льодові шапки з водяного льоду.',
  'Ровер Perseverance шукає сліди древнього життя у кратері Жезеро.'
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
    image: 'https://images-assets.nasa.gov/image/PIA13162/PIA13162~thumb.jpg'
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
    image: 'https://images-assets.nasa.gov/image/PIA13935/PIA13935~thumb.jpg'
  },
  gale: {
    name: 'Кратер Ґейл',
    age: 'понад 3,5 млрд років тому',
    impactor: 'великий астероїд діаметром близько 5 км',
    diameter: 154,
    depth: '~5,5 км',
    material: 'скельні та вулканічні породи з відкладеннями сульфатів',
    description: 'Всередині кратера є гору Аєоліс Монс, яку досліджував ровер Curiosity.',
    image: 'https://images-assets.nasa.gov/image/PIA16064/PIA16064~thumb.jpg'
  },
  jezero: {
    name: 'Кратер Єзеро',
    age: 'близько 3,6 млрд років тому',
    impactor: 'скелястий астероїд діаметром 1,5 км',
    diameter: 45,
    depth: '~3 км',
    material: 'осадові породи з глинистими мінералами',
    description: 'Цей кратер став місцем посадки місії Perseverance, бо тут могли бути давні озера.',
    image: 'https://images-assets.nasa.gov/image/PIA23195/PIA23195~thumb.jpg'
  },
  schiaparelli: {
    name: 'Кратер Скіапарелі',
    age: 'близько 3,5 млрд років тому',
    impactor: 'астероїд діаметром ~2,5 км',
    diameter: 470,
    depth: '~2 км',
    material: 'слоїсті осадові породи',
    description: 'Названий на честь італійського астронома. Містить деякі з найбільш хорошо збережених шарів на Марсі.',
    image: 'https://images-assets.nasa.gov/image/PIA18821/PIA18821~thumb.jpg'
  },
  valles_marineris: {
    name: 'Valles Marineris - северний край',
    age: 'близько 3,7 млрд років тому',
    impactor: 'тектонічна активність, а не удар астероїда',
    diameter: 4000,
    depth: '~7 км',
    material: 'вулканічні та осадові породи',
    description: 'Система гігантських каньйнів. Це не кратер удару, а тектонічна впадина.',
    image: 'https://images-assets.nasa.gov/image/PIA03149/PIA03149~thumb.jpg'
  },
  syrtis_major: {
    name: 'Syrtis Major Planitia',
    age: 'близько 4 млрд років тому',
    impactor: 'великий астероїд діаметром ~15-20 км',
    diameter: 1500,
    depth: '~3 км',
    material: 'базальтові породи',
    description: 'Темна область, добре видима з Землі. Утворилась в результаті удару та вартісного вулканізму.',
    image: 'https://images-assets.nasa.gov/image/PIA08599/PIA08599~thumb.jpg'
  },
  mariner: {
    name: 'Mariner',
    age: 'близько 3,2 млрд років тому',
    impactor: 'астероїд діаметром ~1 км',
    diameter: 225,
    depth: '~2,5 км',
    material: 'мішанина осадових та вулканічних порід',
    description: 'Молодий кратер з чіткими краями. Названий на честь космічного апарата Mariner.',
    image: 'https://images-assets.nasa.gov/image/PIA18890/PIA18890~thumb.jpg'
  },
  victoria: {
    name: 'Кратер Вікторія',
    age: 'близько 3 млрд років тому',
    impactor: 'астероїд діаметром ~0,7 км',
    diameter: 800,
    depth: '~1,5 км',
    material: 'шаруваті осадові породи',
    description: 'Досліджується марсоходом Opportunity. Містить найбільш красиво збережені геологічні шари на Марсі.',
    image: 'https://images-assets.nasa.gov/image/PIA08768/PIA08768~thumb.jpg'
  },
  endeavour: {
    name: 'Кратер Endeavour',
    age: 'близько 3,5 млрд років тому',
    impactor: 'великий астероїд діаметром ~6-8 км',
    diameter: 225,
    depth: '~1,2 км',
    material: 'алтерейовані мінерали з глинистими слідами',
    description: 'Місце посадки марсохода Opportunity. Тут знайдені докази давньої кислої води.',
    image: 'https://images-assets.nasa.gov/image/PIA10068/PIA10068~thumb.jpg'
  },
  isidis: {
    name: 'Isidis Planitia',
    age: 'близько 4,1 млрд років тому',
    impactor: 'гігантський астероїд діаметром ~15-20 км',
    diameter: 1600,
    depth: '~5 км',
    material: 'вулканічні та осадові層 з олівіном',
    description: 'Один з найбільших і найстаріших ударних басейнів. Багата минеріалами.',
    image: 'https://images-assets.nasa.gov/image/PIA13935/PIA13935~thumb.jpg'
  },
  holden: {
    name: 'Кратер Холден',
    age: 'близько 3,8 млрд років тому',
    impactor: 'астероїд діаметром ~4 км',
    diameter: 140,
    depth: '~1,2 км',
    material: 'древні озерні відклади з глинистими мінералами',
    description: 'Містить сліди давнього озера. Розглядається як альтернативне місце для марсіанської бази.',
    image: 'https://images-assets.nasa.gov/image/PIA13146/PIA13146~thumb.jpg'
  }
};

const rovers = {
  perseverance: {
    name: 'Perseverance',
    launched: '30 липня 2020',
    location: 'Кратер Єзеро',
    mission: 'НАСА Марс 2020',
    description: 'Ровер Perseverance досліджує позначки древнього життя та готує технології для людських місій.',
    sensors: [
      'RAMI (гастрін)',
      'Mastcam-Z (гайбун)', 
      'PIXL (рентген)',
      'SHERLOC (лазер)',
      'RAD (датчик радіації)'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA23618/PIA23618~thumb.jpg'
  },
  curiosity: {
    name: 'Curiosity',
    launched: '26 листопада 2011',
    location: 'Кратер Ґейл',
    mission: 'НАСА MSL',
    description: 'Curiosity - найбільший марсохід на планеті. Досліджує можливість древнього життя на Марсі.',
    sensors: [
      'SAM (лабораторія)',
      'Mastcam (гайбун)',
      'RAD (радіація)',
      'ChemCam (лазер)',
      'Drill (буріння)'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA17944/PIA17944~thumb.jpg'
  },
  opportunity: {
    name: 'Opportunity',
    launched: '7 липня 2003',
    location: 'Кратер Endeavour',
    mission: 'НАСА MER',
    description: 'Opportunity був першим марсоходом, який знайшов докази древньої кислої води на Марсі.',
    sensors: [
      'Pancam (панорама)',
      'Microscopic Imager',
      'APXS (спектрометр)',
      'RAT (буріння)',
      'Thermal Emission'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA05213/PIA05213~thumb.jpg'
  },
  zhurong: {
    name: 'Zhurong',
    launched: '14 травня 2021',
    location: 'Utopia Planitia',
    mission: 'Китайське космічне управління',
    description: 'Zhurong - китайський марсохід, який проводить геологічні дослідження та пошуки води.',
    sensors: [
      '磁场传感器 (магніт)',
      'Radar (радар)',
      'Environment sensors',
      'Imaging system',
      'Solar panels'
    ],
    image: 'https://images-assets.nasa.gov/image/PIA24634/PIA24634~thumb.jpg'
  }
};

const factButton = document.getElementById('show-fact');
const factCard = document.getElementById('fact-card');
const craterGrid = document.getElementById('crater-grid');
const craterDetail = document.getElementById('crater-detail');
const craterSection = document.getElementById('craters');
let currentSort = 'largest';

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
  document.querySelector(`[data-sort="${sortType}"]`).classList.add('sort-btn--active');
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

factButton.addEventListener('click', showRandomFact);
craterSection.addEventListener('click', handleCraterClick);

// Інітіальна отримання
renderCraterGrid();
renderRovers();
