/* Настройки бургер-меню */

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$('.menu-btn_active').fadeToggle('menu-btn_active');
});

/* Настройки Owl для 1 слайдера */

$(document).ready(function () {
	$('.slider-block').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		dotsEach: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
	})
});

/* Настройки Owl для 2 слайдера */

$(document).ready(function () {
	$('.feedback-sliders').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		dotsEach: true,
		autoplay: false
	})
});

var success = $('.success');
var success_close = $('#success_close');
var autoclose = function () {
	$(success).removeClass('success_active');
};

var modal = document.querySelector('#modal');
var modal_close = document.querySelector('#modal_close');
var modal_username = document.querySelector('#modal_username');
var modal_phone = document.querySelector('#modal_phone');

$('.header-block__button').on('click', function () {
	$('#modal').addClass('modal_active');
})

modal_close.addEventListener('click', function () {
	modal.classList.remove('modal_active')
})

success_close.on('click', function () {
	modal.classList.remove('modal_active')
});

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
	submitHandler: function (form) {
		success.addClass('success_active');
		setTimeout(autoclose, 4000)
	},
	messages: {
		username: {
			minlength: jQuery.validator.format("Не менее {0} символов"),
			maxlength: jQuery.validator.format("Введите не более 15 символов")
		},
	}
})

$('#modal-form').validate({
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
	submitHandler: function (form) {
		success.addClass('success_active');
		setTimeout(autoclose, 4000)
	},
	messages: {
		username: {
			minlength: jQuery.validator.format("Не менее {0} символов"),
			maxlength: jQuery.validator.format("Введите не более 15 символов")
		},
	}
})

success_close.on('click', function() {
	success.removeClass('success_active');
})

jQuery.extend(jQuery.validator.messages, {
	required: "Заполните поле",
});

/* Маски телефона */
$('#geo_phone').mask('8 (999) 999-99-99')
$('#modal_phone').mask('8 (999) 999-99-99')
