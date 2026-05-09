// --- База даних ---
const CRATERS = [
  // 3 найбільші з вашими фото
  { name: "Hellas Planitia", info: "Найбільший ударний басейн. Глибина 7 км, діаметр 2300 км.", image: "Hellas Planitia.jpeg", link: "https://en.wikipedia.org/wiki/Hellas_Planitia" },
  { name: "Valles Marineris", info: "Система каньйонів довжиною 4000 км. У 10 разів більша за Великий каньйон Землі.", image: "Valles Marineris.jpeg", link: "https://en.wikipedia.org/wiki/Valles_Marineris" },
  { name: "Argyre Planitia", info: "Гігантський басейн, де в далекому минулому могло бути море.", image: "Argyre Planitia.jpeg", link: "https://en.wikipedia.org/wiki/Argyre_Planitia" },
  // Інші об'єкти (тільки текст)
  { name: "Кратер Єзеро (Jezero)", info: "Місце роботи ровера Perseverance. Стародавня дельта річки.", link: "https://en.wikipedia.org/wiki/Jezero_(crater)" },
  { name: "Кратер Ґейл (Gale)", info: "Тут Curiosity вивчає гору Шарп та шукає органіку.", link: "https://en.wikipedia.org/wiki/Gale_(crater)" },
  { name: "Гора Олімп (Olympus Mons)", info: "Найвищий вулкан у Сонячній системі (22 км заввишки).", link: "https://en.wikipedia.org/wiki/Olympus_Mons" },
  { name: "Кратер Скіапареллі", info: "Величезний об'єкт, названий на честь автора перших карт Марсу.", link: "https://en.wikipedia.org/wiki/Schiaparelli_(Martian_crater)" },
  { name: "Кратер Вікторія", info: "Мальовничий кратер, досліджений місією Opportunity.", link: "https://en.wikipedia.org/wiki/Victoria_(crater)" },
  { name: "Isidis Planitia", info: "Третій за розміром ударний басейн на планеті.", link: "https://en.wikipedia.org/wiki/Isidis_Planitia" },
  { name: "Кратер Холден", info: "Містить осадові породи, що свідчать про наявність води.", link: "https://en.wikipedia.org/wiki/Holden_(crater)" },
  { name: "Utopia Planitia", info: "Рівнина на півночі, де працював ровер Zhurong.", link: "https://en.wikipedia.org/wiki/Utopia_Planitia" },
  { name: "Кратер Ендевор", info: "Місце тривалих досліджень ровера Opportunity.", link: "https://en.wikipedia.org/wiki/Endeavour_(crater)" }
];

const MISSIONS = [
  { name: "Perseverance", agency: "NASA", year: "2021", goal: "Пошук ознак давнього життя та збір зразків.", status: "Активна", image: "Perseverance.jpeg" },
  { name: "Curiosity", agency: "NASA", year: "2012", goal: "Дослідження клімату та геології кратера Ґейл.", status: "Активна", image: "Curiosity.jpeg" },
  { name: "Mars Express", agency: "ESA", year: "2003", goal: "Вивчення атмосфери та пошук води.", status: "Активна", image: "Mars Express.jpeg" },
  { name: "Zhurong", agency: "CNSA", year: "2021", goal: "Вивчення структури ґрунту та пошук льоду.", status: "Завершено" }
];

const TIMELINE = [
  { year: "1610", who: "Галілео Галілей", what: "Вперше побачив Марс у телескоп як диск.", link: "https://en.wikipedia.org/wiki/History_of_Mars_observation" },
  { year: "1659", who: "Хрістіан Гюйгенс", what: "Склав першу карту та виміряв марсіанську добу.", link: "https://en.wikipedia.org/wiki/Mars_Discovery_Timeline" },
  { year: "1877", who: "Асаф Холл", what: "Відкрив супутники Фобос і Деймос.", link: "https://en.wikipedia.org/wiki/Moons_of_Mars" },
  { year: "1877", who: "Джованні Скіапареллі", what: "Описав «канали», чим породив віру в цивілізацію.", link: "https://en.wikipedia.org/wiki/Martian_canal" },
  { year: "1965", who: "Mariner 4", what: "Перші близькі фотографії кратерів.", link: "https://mars.nasa.gov/mariner4/" },
  { year: "1971", who: "Mariner 9", what: "Перший штучний супутник іншої планети.", link: "https://en.wikipedia.org/wiki/Mariner_9" },
  { year: "1976", who: "Viking 1 і 2", what: "Перша успішна посадка та аналіз ґрунту.", link: "https://mars.nasa.gov/viking/" },
  { year: "1997", who: "Sojourner Team", what: "Перший колісний марсохід почав рух.", link: "https://mars.nasa.gov/pathfinder/" },
  { year: "2012", who: "Curiosity Team", what: "Посадка великої хімічної лабораторії.", link: "https://mars.nasa.gov/msl/" },
  { year: "2021", who: "Perseverance Team", what: "Перший політ гелікоптера Ingenuity.", link: "https://mars.nasa.gov/mars2020/" },
  { year: "2024+", who: "SpaceX (Elon Musk)", what: "Випробування Starship для колонізації.", link: "https://www.spacex.com/human-spaceflight/mars/" }
];

const INTERESTING = [
  { title: "Підлідні озера", desc: "Вчені знайшли докази існування мережі солоних озер під південною полярною шапкою на глибині 1.5 км.", link: "https://www.nature.com/articles/d41586-020-02751-1" },
  { title: "Метанова загадка", desc: "Викиди метану на Марсі можуть бути результатом діяльності мікробів або вулканічних процесів.", link: "https://science.nasa.gov/mars/mystery-of-mars-methane-intensifies/" },
  { title: "Гора Олімп", desc: "Найвищий вулкан у Сонячній системі (22 км). Він настільки великий, що його неможливо побачити повністю з поверхні.", link: "https://en.wikipedia.org/wiki/Olympus_Mons" },
  { title: "Гіпотеза Океану", desc: "Вважається, що третину планети (північну частину) мільярди років тому вкривав гігантський океан.", link: "https://en.wikipedia.org/wiki/Mars_ocean_hypothesis" },
  { title: "Лавові трубки", desc: "Це природні підземні тунелі, які можуть стати ідеальним житлом для колоністів, захищаючи від радіації.", link: "https://en.wikipedia.org/wiki/Martian_lava_tube" },
  { title: "Теорія тераформування", desc: "Концепції розігріву планети для створення дихальної атмосфери та повернення рідкої води.", link: "https://en.wikipedia.org/wiki/Terraforming_of_Mars" },
  { title: "Блакитні заходи сонця", desc: "Через особливий склад атмосфери, сонце під час заходу на Марсі світиться блакитним світлом.", link: "https://science.nasa.gov/resource/blue-sunset-on-mars/" }
];

const FACTS = ["Рік на Марсі — 687 днів.", "Гравітація у 2.6 рази слабша за земну.", "Повітря на 95% — це вуглекислий газ."];

// --- Logic ---

const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for(let i=0; i<150; i++) {
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*1.2, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.8})`;
    ctx.fill();
  }
}
initStars();

document.getElementById('calc-btn')?.addEventListener('click', () => {
  const earthWeight = document.getElementById('weight-input').value;
  if (earthWeight > 0) {
    const marsWeight = (earthWeight * 0.377).toFixed(1);
    document.getElementById('calc-result').innerHTML = `Вага на Марсі: <strong>${marsWeight} кг</strong>! 🚀`;
    document.getElementById('calc-result').classList.add('visible');
  }
});

function loadContent() {
  const renderCraters = (showAll = false) => {
    const list = showAll ? CRATERS : CRATERS.slice(0, 3);
    document.getElementById('craters-list').innerHTML = list.map((c, idx) => `
      <div class="crater-item reveal glass-card">
        <div class="crater-content">
          ${idx < 3 ? `<img src="${c.image}" class="crater-mini-img">` : ''}
          <div>
            <h3>${c.name}</h3>
            <p>${c.info}</p>
          </div>
        </div>
        <a href="${c.link}" target="_blank" class="link-btn">Докладніше ↗</a>
      </div>
    `).join('');
    handleReveal();
  };
  renderCraters();
  document.getElementById('show-more-craters')?.addEventListener('click', () => {
    renderCraters(true);
    document.getElementById('show-more-craters').style.display = 'none';
  });

  document.getElementById('mission-list').innerHTML = MISSIONS.map(m => `
    <div class="mission-row reveal glass-card">
      <div class="m-main">
        ${m.image ? `<img src="${m.image}" class="mission-mini-img">` : ''}
        <div>
          <span class="m-name">${m.name}</span>
          <span class="m-agency">(${m.agency}) — ${m.year}</span>
          <p class="m-goal">${m.goal}</p>
        </div>
      </div>
      <span class="m-status">${m.status}</span>
    </div>
  `).join('');

  document.getElementById('timeline').innerHTML = TIMELINE.map(t => `
    <div class="timeline-row reveal">
      <span class="t-year">${t.year}</span>
      <div class="t-main">
        <span class="t-who">${t.who}</span>
        <span class="t-what">${t.what}</span>
      </div>
      <a href="${t.link}" target="_blank" class="t-link">Деталі</a>
    </div>
  `).join('');

  document.getElementById('interesting-list').innerHTML = INTERESTING.map(i => `
    <div class="interesting-item reveal glass-card">
      <h3>${i.title}</h3>
      <p>${i.desc}</p>
      <a href="${i.link}" target="_blank" class="link-more">Читати повну версію ↗</a>
    </div>
  `).join('');
}

function handleReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add('active');
  });
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);
document.getElementById('fact-btn')?.addEventListener('click', () => alert("ФАКТ: " + FACTS[Math.floor(Math.random() * FACTS.length)]));

loadContent();
handleReveal();
