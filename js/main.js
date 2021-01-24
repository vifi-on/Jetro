$(function(){

  $('.slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__nav',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__content',
    infinite: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        }
      },
    ]
  })

  $('.header__btn').on('click', function(){
    $('.header__nav').slideToggle();
  });

});