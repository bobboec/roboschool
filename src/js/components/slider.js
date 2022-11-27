import Swiper, {
  Navigation,
  Scrollbar
} from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  slidesPerColumnFill: 'row',
  spaceBetween: 40,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
  },
});
