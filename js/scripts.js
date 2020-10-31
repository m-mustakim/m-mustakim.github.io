'use strict';

$(window).on('load', function() { 

	/*------------------
		Typed js
	--------------------*/
	if($('#typed-text').length > 0 ) {
		var typed2 = new Typed('#typed-text', {
		   	strings: ["HELLO :)", "I'M QIM_CODE", "YOU CAN CALL ME"," MUHAMAD MUSTAKIM", "A STUDENT OF", "ESEMKADUTA HIGH SCHOOL"],
			typeSpeed: 70,
			loop:true,
			backDelay: 2000
		});
	}
}) 

$('.carousel').carousel({
  interval: 2700
})

new WOW().init();