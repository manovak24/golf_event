$(document).ready(function(){
    $('.slider-ctr').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        nextArrow: $('.next'),
        prevArrow: $('.prev')
    });
  });
