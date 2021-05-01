$(function(){
  $('.brgr__img').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

  $('.stories__link-a').on('click', function () {
    $('.stories__read-a').toggleClass('stories__read--active');
  });

  $('.stories__link-b').on('click', function () {
    $('.stories__read-b').toggleClass('stories__read--active');
  });

  $('.stories__link-c').on('click', function () {
    $('.stories__read-c').toggleClass('stories__read--active');
  });

  $('.stories__link-d').on('click', function () {
    $('.stories__read-d').toggleClass('stories__read--active');
  });

  $('.stories__link-e').on('click', function () {
    $('.stories__read-e').toggleClass('stories__read--active');
  });

  $('.stories__link-f').on('click', function () {
    $('.stories__read-f').toggleClass('stories__read--active');
  });

  $('.stories__link-g').on('click', function () {
    $('.stories__read-g').toggleClass('stories__read--active');
  });

  $('.stories__link-h').on('click', function () {
    $('.stories__read-h').toggleClass('stories__read--active');
  });

  $('.stories__more-text').on('click', function () {
    $('.stories__more-items').toggleClass('stories__more-items--active');
  });

  $('.stories__more-text').on('click', function () {
    $('.stories__more-item').toggleClass('stories__more-item--active');
  });

  $(".menu__list a, .header__bottom-btn, .usp-btn, .footer__top-nav a").on("click", function (e) {

    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);

  });
});
