$(document).ready(function () {
  $('.main-slider__list').slick({
    arrows: false,
    slidesToShow: 3
  });
});

$(document).ready(function () {
  $('.shop-slider__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true
  });
});

$(document).ready(function () {
  $('.categories-slider__list').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function () {
  $('.subscribe-slider__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  });
});