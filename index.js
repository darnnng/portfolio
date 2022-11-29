
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const eng = document.querySelector('.en');
const rus = document.querySelector('.ru');

function getTranslate(lang) {
  const elements = document.querySelectorAll('[data-i18]');
  elements.forEach((element) => { element.textContent = i18Obj[lang][element.dataset.i18]});
}

rus.addEventListener('click', () => {getTranslate('ru');
eng.classList.remove('active');
rus.classList.toggle('active');
})

eng.addEventListener('click', () => {getTranslate('en');
rus.classList.remove('active');
eng.classList.toggle('active');
})

//HAMBURGER
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu-nav-item');


function toggleMenu() {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu() {
  console.log('close');
  hamburger.classList.remove('open');
  menu.classList.remove('open');
}

// hamburger.addEventListener('click', toggleMenu);
// menu-nav-item.addEventListener('click', closeMenu);


navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    hamburger.classList.remove('is-active');
  });
});

//CHANGE PHOTOS 

const portfolioBtnAutumn = document.querySelector('.buttonautumn');
const portfolioBtnWinter = document.querySelector('.buttonwinter');
const portfolioBtnSpring = document.querySelector('.buttonspring');
const portfolioBtnSummer = document.querySelector('.buttonsummer');
const portfolioImages = document.querySelectorAll('.portfoliopicture');


portfolioBtnAutumn.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `assets/autumn/${index + 1}.jpg`);
});

portfolioBtnWinter.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `assets/winter/${index + 1}.jpg`);
});

portfolioBtnSpring.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `assets/spring/${index + 1}.jpg`);
});

portfolioBtnSummer.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `assets/summer/${index + 1}.jpg`);
});

//ПОДСВЕТКА КНОПКИ 

// const portfolioBtns = document.querySelectorAll('.portfoliobutton');

//  portfolioBtns.forEach(() => {
//     portfolioBtns.classList.remove('active');
//   });

// portfolioBtns.addEventListener('click', () => {
//   portfolioBtns.classList.add('active');
// });

// portfolioBtns.forEach((button) => {
//   button.addEventListener('click', () => {
//     portfolioBtns.classList.add('active');
//   });
// });

//КЭШИРОВАНИЕ

const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach (
  function preloadImages() {
   for(let j = 0; j <= 4; j++) {
     for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/${j}/${i}.jpg`;
    }
  }
}
);

//СМЕНА ТЕМЫ

let activeTheme = "dark";
const theme = document.querySelector(".lightdark");

theme.addEventListener("click", changeTheme);

const changingClasses = [
  "main",
  ".pricecards",
  "price",
  ".icontext",
  ".icontitle",
  ".skills",
  ".portfolio",
  ".hero",
  ".portfoliobutton",
  "html",
  ".container",
  ".video",
  ".pcard",
  ".texttext",
  ".textemail",
  ".price",
  ".contacts",
  ".downfooter",
  "footer",
  ".footerlink",
  ".sociallinks",
  ".contactme",
  ".containerheader",
  ".out",
  "header.main-header.out.light-theme",
  ".welcomebutton",
  ".pwelcome",
  "h1",
  "li.nav-item",
  ".ru",
  ".switcher",
  ".in",
  ".active",
  "header",
  ".main-header",
  ".hcard"
];
const changingElements = changingClasses.map((el) =>
  document.querySelectorAll(el)
);

function changeTheme() {
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  toggleTheme(changingElements);
}

function toggleTheme(elements) {
  elements.forEach((el) =>
    el.forEach((el2) => el2.classList.toggle("light-theme"))
  );
}



// const ikonSwitch = document.querySelector('.lightdark');
// let themeIcon = document.querySelector('.iconsun');
// let changeStyle = document.querySelectorAll(['.body', '.skills.sun', '.description-text.sun', '.wrapper-section-title.sun', '.section-title.sun','.button-empty.sun', '.button-empty.active.sun', '.title-block-price.sun', '.text-block-price.sun','.portfolio-section.container.sun','.video-section.container.sun','.price-section.container.sun']);


// ikonSwitch.addEventListener('click', () => {
//   changeStyle.forEach((item) => item.classList.toggle('sun'));

//   if (themeIcon.getAttribute("src") === "./assets/moon.svg") {
//     themeIcon.src = "./assets/carbon_sun.svg";
//   } else {
//     themeIcon.src = "./assets/moon.svg";
//   }

// })





// const lightDarkBtn = document.querySelector('.lightdark');
// const changeThemeElem = ['main','.skills.light-theme', '.portfolio', '.video', '.price','.portfoliobutton'];

// lightDarkBtn.addEventListener('click', changeTheme);

// function changeTheme() {
//   changeThemeElem.forEach((item) => {
//       const elem = document.querySelector(item);
//       elem.classList.toggle('light-theme');
//   });
// }

//   changeThemeElem.forEach (
//     function changeTheme() {
//       lightDarkBtn.addEventListener('click', () => {
//         changeThemeElem.classList.add('light-theme');
//       });
//     }
// );

// changeThemeElem.forEach((elem) => {
//   lightDarkBtn.addEventListener('click', () => {
//     changeThemeElem.classList.add('light-theme');
//   });
// });


