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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
// NEWS SLIDER END


// geometric-measurements SLIDER
$('.history__promo--slider').slick({
  prevArrow: '<div class="y_prevArrow"><i class="fa fa-angle-left"></i></div>',
  nextArrow: '<div class="y_nextArrow"><i class="fa fa-angle-right"></i></div>',
  slidesToShow: 1,
  infinite: true,
});
// geometric-measurements END





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


// HISTORY TABS START
$(".tab_item").not(":first").hide();
$(".history__tabs .tab").click(function() {
  $(".history__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// HISTORY TABS START END


// PHONE-LIST ACCORDIONS START
  $('.phone-list li:has(ul)').click(function(e) {
    e.preventDefault();

    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).children('ul').slideUp();
    } else {
      $('.phone-list li ul').slideUp();
      $('.phone-list li').removeClass('active');
      $(this).addClass('active');
      $(this).children('ul').slideDown();
    }

    $('.phone-list li ul li a').click(function() {
      window.location.href = $(this).attr('href');
    })
  });
// PHONE-LIST ACCORDIONS END


// DOCUMENTS__TABS START
$(".documents__item").not(":first").hide();
$(".documents__tab").click(function() {
  $(".documents__tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".documents__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
// DOCUMENTS__TABS END


// SLIDER INIONS START
$('.unions__slide').slick({
  prevArrow: '<div class="y_prevArrow"><i class="fa fa-angle-left"></i></div>',
  nextArrow: '<div class="y_nextArrow"><i class="fa fa-angle-right"></i></div>',
  slidesToShow: 1,
  infinite: true,
});
// SLIDER INIONS END


// READ MORE STAR
$('.faq__read-more').click(function(){
if($(this).next().is(':hidden')){
  $(this).next().slideDown('slow');
} else {
   $(this).next().slideUp('slow');
}
});
// READ MORE end

// SEARCH CHECKBOX START
$('.searh__checkbox li label').click(function(){
$(this).parent().toggleClass('active');
});
// SEARCH CHECKBOX END


// MOBILE MENU START

        var link = $('.gumburger');
        var close = $('.close-menu');
        var menu = $('.main-menu');
        link.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('main-menu__active')
        });
        close.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('main-menu__active')
        });
        

// MOBILE MENU END



});
