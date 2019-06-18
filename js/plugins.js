$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.nav_toggle_button i'),
				toggle_primary_icon = $('.nav_toggle_button i'),
				toggle_secondary_button = $('nav li span'),
				toggle_secondary_icon = $('nav li span i'),
				primary_menu = $('nav'),
				secondary_menu = $('nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width();

	// Forms on content area
	var form = $('main').find('#myframe');
		if(form.length > 0) {
		document.getElementById('myframe').onload = function(){
		  calcHeight();
		};
	}

	// Company name and phone number on content area
	$("main * :not('h1')").each(function() {
		var regex1 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
		var regex2 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
		var regex = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
				$(this).html(
						$(this).html()
						.replace(/CompanyName/gi, "<span class='comp'>$&</span>")
						.replace(regex1, "<strong>$&</strong>").replace(regex2, "<strong>$&</strong>").replace(regex, "<strong>$&</strong>"));
		});

	//Multi-line Tab
	toggle_secondary_button.each(function(){
		$(this).click(function(){
			$(this).parent("li").children("ul").slideToggle();
			$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");;
		});
	});

	// Basic functionality for nav_toggle_button
	$(toggle_primary_button).click(function(){
		primary_menu.stop().slideToggle();
		toggle_primary_icon.toggleClass("fa-times").toggleClass("fa-navicon");
	});

	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span i').addClass("fa-caret-down");

	// Reset all configs when width > 600
	$(window).resize(function(){

		if(window_width > 600) {
			primary_menu.removeAttr('style');
			toggle_primary_icon.removeClass("fa-times").addClass("fa-navicon");

			secondary_menu.removeAttr('style');
			toggle_secondary_icon.removeClass("fa-caret-up").addClass("fa-caret-down");
		}

	});

	$('.rslides').responsiveSlides();
	// $(".box_skitter_large").skitter();

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

	});

});
