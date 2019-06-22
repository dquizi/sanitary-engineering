/* Настройки бургер-меню */

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	// $(this).toggleClass('menu-btn_active');
	$('.menu-btn_active').fadeToggle('menu-btn_active');
	// $('.header-block__menu').toggleClass('header-block__menu_active');
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
		nav: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
	})
});

// $('.service-wrap__title').on('hover', function() {
// 	$('.price')
// })

$('#geo-form').validate({
	rules: {
		username: {
			required: true,
			minlength: 3,
			maxlength: 15
		},
		phone: {
			required: true,
		},
	},
	errorClass: "invalid",
	errorElement: "div",
	messages: {
		username: {
			minlength: jQuery.validator.format("Не менее {0} символов"),
			maxlength: jQuery.validator.format("Введите не более 15 символов")
		},
	}
})

/* Маски телефона */
$('#phone').mask('8 (999) 999-99-99')

