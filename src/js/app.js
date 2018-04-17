
//якорь
$('nav').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
  

//дополнительные 
//offers

$('.offers__btn').on('click', function() {
  event.preventDefault();
  $(this).fadeOut(100);
  $('.offers--none').slideDown();
});
//
$('.examples__btn').on('click', function() {
  event.preventDefault();
  $(this).fadeOut(100);
  $('.examples--none').slideDown();
});
