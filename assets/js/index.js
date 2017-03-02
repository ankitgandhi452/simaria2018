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

		$(".carousel").slick({
			arrows:true,
			dots:false,
			infinite:true,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
			slidesToScroll: 1
		});
	}

});