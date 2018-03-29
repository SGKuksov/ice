$( document ).ready(function() {

  $('.menu-icon').bind('click', function() {
    $(this).toggleClass('active');
    $(this).find('div').removeClass('no-animation');
    $(".header").toggle();
  });

  $('.gallery__miniature').slick({
    arrows: false,
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    touchMove: false,
    touchThreshold: 100
  });

  $('.instructor__conteiner').slick({
    arrows: false,
    variableWidth: true,
    infinite: false,
    slidesToShow: 1,
    speed: 800,
    touchMove: false,
    touchThreshold: 100
  });

});