const swiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});