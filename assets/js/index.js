$(function(){
	var handleOrientation = function() {
		if(window.outerWidth > window.outerHeight)
			$('body').removeClass('portrait').addClass('landscape');
		else
			$('body').addClass('portrait').removeClass('landscape');
	};

	handleOrientation();

	$(window).resize(function(e) {
		handleOrientation(); 
	});

	window.onload = function() {
		$('body').removeClass('loading');

		$("#web-carousel.carousel").slick({
			arrows:true,
			dots:false,
			infinite:true,
			prevArrow: $('.prev.w'),
			nextArrow: $('.next.w'),
			slidesToScroll: 1
		});

		$("#mobile-carousel.carousel").slick({
			arrows:true,
			dots:false,
			infinite:true,
			prevArrow: $('.prev.m'),
			nextArrow: $('.next.m'),
			slidesToScroll: 1
		});
	}

});