import './lib/maskedinput';

//mask
$('#phone').mask('99 99999 99 999');

//якорь
$('nav, .menu__mobile').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
  

//дополнительные блоки
////offers

$('.offers__btn').on('click', function() {
  event.preventDefault();
  $(this).fadeOut(100);
  $('.offers--none').slideDown();
});
////examples
$('.examples__btn').on('click', function() {
  event.preventDefault();
  $(this).fadeOut(100);
  $('.examples--none').slideDown();
});



//menu-open
$('.menu-open').on('click', function() {
  $('.menu__mobile').fadeIn();
  $('.menu--bg').fadeIn();
});
$('.menu--bg, .close, .menu__mobile a').on('click', function() {
  $('.menu__mobile').fadeOut();
  $('.menu--bg').fadeOut();
});
