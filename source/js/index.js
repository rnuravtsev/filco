import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import "../less/style.less";

$(function() {
  $('body').css('color', 'blue');
});

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

  jQuery(function($){
    $('.form__input--phone').mask("+7 (999) 999-99-99");
  });

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
