document.addEventListener('DOMContentLoaded', function () {
  // FADE SLIDES
  const images = document.querySelectorAll(".slides img");
  let index = 0;

  if (images.length > 0) {
    images[index].classList.add("active", "zoomed");

    function fadeToNextSlide() {
      images[index].classList.remove("active", "zoomed");
      index = (index + 1) % images.length;
      images[index].classList.add("active", "zoomed");
    }

    setInterval(fadeToNextSlide, 5000);
  }

  // SERVICES CAROUSEL
  document.querySelectorAll('.services-carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.services-carousel');
    const leftBtn = wrapper.querySelector('.arrow.left');
    const rightBtn = wrapper.querySelector('.arrow.right');

    if (carousel && leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });

  // HAMBURGER MENU
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
});
