$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});

let anchors = document.querySelectorAll('header a[href*="#"]');
for (anchor of anchors) {
	if (anchor) {
		anchor.addEventListener('click', function(e){
			e.preventDefault();
			anchorId = this.getAttribute('href');
			
			document.querySelector(anchorId).scrollIntoView({
				behavior: 'smooth', block: 'start'
			})
		})
	}
}