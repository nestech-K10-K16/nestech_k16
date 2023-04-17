//menu
const menu = document.querySelector('.navbar__links');
const menuButton = document.querySelector('.navbar__icons');
const logo = document.querySelector('.navbar__logo');
const overlay = document.querySelector('#overlay');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('navbar__open');
  menuButton.classList.toggle('open');
});

overlay.addEventListener('click', () => {
  menu.classList.toggle('navbar__open');
  menuButton.classList.toggle('open');
  overlay.classList.toggle('show');
});

logo.addEventListener('click', () => {
  alert('reload');
});
