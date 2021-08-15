import Swiper, {Autoplay, EffectFade} from 'swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const createDefaultSwiper = ({container, pagination, navNext, navPrev}) => {
  return new Swiper(container, {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    // autoHeight: true,
    speed: 750,

    pagination: {
      el: pagination,
      clickable: true,
      type: 'bullets'
    },
    //
    // navigation: {
    //   nextEl: navNext,
    //   prevEl: navPrev,
    // },
  });
}
