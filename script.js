const menuMobile = document.querySelector('.menu-mobile');
const menupop = document.querySelector('.menupop');
const h1 = document.querySelector('h1');
const arrow = document.querySelector('#arrow');

menuMobile.addEventListener('click', () => {
  menupop.style.display = 'flex';
  h1.style.display = 'none';
  arrow.style.display = 'none';
});
