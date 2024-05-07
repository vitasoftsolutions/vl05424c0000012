var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
