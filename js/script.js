const images = document.querySelectorAll(".slides img");
let index = 0;

// Set the first image as active
images[index].classList.add("active");

function fadeToNextSlide() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(fadeToNextSlide, 5000);




//Carousel - Services
document.querySelectorAll('.services-carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.services-carousel');
  const card = wrapper.querySelector('.service-card');
  const leftArrow = wrapper.querySelector('.arrow.left');
  const rightArrow = wrapper.querySelector('.arrow.right');

  const cardWidth = card.offsetWidth + 30;

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
});


// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });
}

if (mobileClose) {
  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
}
