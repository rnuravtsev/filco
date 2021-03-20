$( document ).ready(function() {

  $(document).on('click', 'a[href^="#"]', function (evt) {
    evt.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 95
    }, 500);
  });

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //
  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   });
  // });

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
