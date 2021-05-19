import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
import 'slick-carousel/slick/slick'
import '@fancyapps/fancybox/dist/jquery.fancybox.min'
import Inputmask from "inputmask/lib/inputmask"
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../less/style.less'

$(document).on('click', 'a[href^="#"]', function (evt) {
  evt.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 95
  }, 500);
});

$( document ).ready(function() {

  if ($( window ).width() < 768) {
    $('.main-nav__item').click(() => {
      $('.navbar-collapse').removeClass('show');
    });
  }

  Inputmask({'mask': '+7 (999) 999-99-99'}).mask('.form__input--phone')

  $('.consumers__slider').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.autopark__slider').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
  });

});
