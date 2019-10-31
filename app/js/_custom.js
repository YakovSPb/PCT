document.addEventListener("DOMContentLoaded", function() {

// MAIN SLIDER
$('.promo__slider').slick({
	prevArrow: '<div class="y_prevArrow"><i class="fa fa-angle-left"></i></div>',
	nextArrow: '<div class="y_nextArrow"><i class="fa fa-angle-right"></i></div>',
	slidesToShow: 1,
	infinite: true,
});
// MAIN SLIDER END

// NEWS SLIDER
$('.news__slider').slick({
	prevArrow: '<div class="y_prevArrow"><i class="fa fa-angle-left"></i></div>',
	nextArrow: '<div class="y_nextArrow"><i class="fa fa-angle-right"></i></div>',
	slidesToShow: 3,
	infinite: true,
});
// NEWS SLIDER END





// SERVICES ACCORDIONS
  $('.services__menu li:has(ul)').click(function(e) {
    e.preventDefault();

    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).children('ul').slideUp();
    } else {
      $('.services__menu li ul').slideUp();
      $('.services__menu li').removeClass('active');
      $(this).addClass('active');
      $(this).children('ul').slideDown();
    }

    $('.services__menu li ul li a').click(function() {
      window.location.href = $(this).attr('href');
    })
  });
// SERVICES ACCORDIONS END


});
