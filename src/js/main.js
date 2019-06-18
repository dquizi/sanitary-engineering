/* Настройки бургер-меню */
$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
});

/* Инициализируем Owl */
// var owl = $('.owl-carousel');
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		dotsEach: true,
		dotsData: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
	})
});
