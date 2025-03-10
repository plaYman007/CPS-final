import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const mobile = window.matchMedia('(min-width: 768px)');
const sliders = document.querySelectorAll('.swiper');
let swiper;

function breakpointCheck() {
  if (mobile.matches) {
    if (swiper) {
      sliders.forEach((slider) => slider.swiper.destroy());
    }
  } else {
    enableSwiper();
  }
}

function enableSwiper() {
  swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

mobile.addEventListener('change', breakpointCheck);

breakpointCheck();
