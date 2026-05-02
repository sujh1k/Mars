const facts = [
  'Марс має два маленькі супутники: Фобос і Деймос.',
  'Олімп Монс — найвищий вулкан у Сонячній системі.',
  'Середня температура на Марсі близько -60°C.',
  'На Марсі є полярні льодові шапки з водяного льоду.',
  'Ровер Perseverance шукає сліди древнього життя у кратері Жезеро.'
];

const craters = {
  jezero: {
    name: 'Кратер Єзеро',
    age: 'близько 3,6 млрд років тому',
    impactor: 'скелястий астероїд діаметром 1,5 км',
    size: 'диаметр ~45 км',
    material: 'осадові породи з глинистими мінералами',
    description: 'Цей кратер став кандидатом для місії Perseverance, бо тут могли бути давні озера.'
  },
  gale: {
    name: 'Кратер Ґейл',
    age: 'понад 3,5 млрд років тому',
    impactor: 'великий астероїд діаметром близько 5 км',
    size: 'диаметр ~154 км',
    material: 'скельні та вулканічні породи з відкладеннями сульфатів',
    description: 'Всередині кратера є гору Аєоліс Монс, яку досліджував ровер Curiosity.'
  },
  hellas: {
    name: 'Hellas Planitia',
    age: 'приблизно 4,1 млрд років тому',
    impactor: 'гігантський астероїд діаметром близько 25 км',
    size: 'диаметр ~2300 км',
    material: 'дно із суміші пилу, льоду та базальтових порід',
    description: 'Один з найбільших ударних басейнів у Сонячній системі.'
  },
  argyre: {
    name: 'Argyre',
    age: 'приблизно 3,9 млрд років тому',
    impactor: 'астероїд діаметром 10-15 км',
    size: 'диаметр ~1800 км',
    material: 'утрамбовані осадові породи з характерними круглими шарами',
    location: 'південний захід Марсу',
    description: 'Великий басейн, заповнений давніми льодовими та водними відкладеннями.'
  }
};

const factButton = document.getElementById('show-fact');
const factCard = document.getElementById('fact-card');
const craterGrid = document.getElementById('crater-grid');
const craterDetail = document.getElementById('crater-detail');
const craterSection = document.getElementById('craters');

function showRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  factCard.textContent = facts[index];
}

function renderCraterDetail(crater) {
  craterDetail.innerHTML = `
    <h3>${crater.name}</h3>
    <p><strong>Коли утворився:</strong> ${crater.age}</p>
    <p><strong>Ударний астероїд:</strong> ${crater.impactor}</p>
    <p><strong>Розмір:</strong> ${crater.size}</p>
    <p><strong>Матеріал:</strong> ${crater.material}</p>
    <p><strong>Позиція:</strong> ${crater.location || 'схематично на марсіанській карті'}</p>
    <p>${crater.description}</p>
  `;
}

function handleCraterClick(event) {
  const button = event.target.closest('[data-crater]');
  if (!button) return;
  const craterKey = button.dataset.crater;
  if (craters[craterKey]) {
    renderCraterDetail(craters[craterKey]);
  }
}

factButton.addEventListener('click', showRandomFact);
craterSection.addEventListener('click', handleCraterClick);
