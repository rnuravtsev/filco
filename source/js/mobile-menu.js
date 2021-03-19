$( document ).ready(function() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  if ($( window ).width() < 768) {
    $('.main-nav__item').click(() => {
      $('.navbar-collapse').removeClass('show');
    });
  }

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

});
