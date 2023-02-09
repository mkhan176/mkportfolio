;(function($){
"use strict";
    
    //sticky Header
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('menu-fixed');
		} else {
			sticky.addClass('menu-fixed');
		}
	});
    
	// Preloader
	$(window).on('load', function () {
		$('.se-pre-con').fadeOut();
	});
    
})(jQuery)