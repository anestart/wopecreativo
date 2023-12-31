
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(carousel.children);
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const itemWidth = carouselItems[0].getBoundingClientRect().width;

leftArrow.addEventListener('click', () => {
  carousel.scrollBy(-itemWidth, 0);
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy(itemWidth, 0);
});

let previousTitle  = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = 'No te vayas, vuelve 😱'
});
window.addEventListener('focus', () => {
  document.title = previousTitle
});



window.addEventListener('scroll', function() {
  var circleImg = document.querySelector('.circle-text');
  var scrollPos = window.scrollY;
  var rotation = scrollPos / 6; // Ajusta la velocidad de rotación cambiando el valor divisor
  
  circleImg.style.transform = 'rotate(' + rotation + 'deg)';
});





window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


function toggleMenu() {
  menuToggle.classList.toggle('active');
  if (window.innerWidth <= 992) {
    navigation.classList.toggle('active');
  } else {
    navigation.classList.remove('active');
  }
}