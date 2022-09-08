const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  [burger, nav].forEach((e) => {
    e.classList.toggle('is-active');
  }) 
  body.classList.toggle('lock');
});

links.forEach((e) => {
    e.addEventListener('click', () => {
        [burger, nav].forEach((e) => {
          e.classList.remove('is-active');
        }) 
        body.classList.remove('lock');
      });
})