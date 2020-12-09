$(function () {
	AOS.init();
	
	$(".bannerImage").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 1,
		dots: false,
		nav: false,
		navElement: 'div',
		animateOut: 'fadeOut',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 1 },
			480: { items: 1 },
			600: { items: 1 },
			768: { items: 1 },
			992: { items: 1 },
			1600: { items: 1 }
		},
	});

	$(".galImage").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 1,
		dots: false,
		nav: false,
		autoHeight: true,
		animateOut: 'fadeOut',
		navElement: 'div',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 1 },
			480: { items: 1 },
			600: { items: 1 },
			768: { items: 2 },
			992: { items: 3 },
			1600: { items: 3 }
		},
	});
	$("#fb-feed").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 1,
		dots: false,
		nav: false,
		autoHeight: true,
		animateOut: 'fadeOut',
		navElement: 'div',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 1 },
			480: { items: 1 },
			600: { items: 1 },
			768: { items: 1 },
			992: { items: 3 },
			1600: { items: 3 }
		},
	});

	$("#instaFeedSlider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 1,
		dots: false,
		nav: false,
		autoHeight: true,
		animateOut: 'fadeOut',
		navElement: 'div',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 1 },
			480: { items: 1 },
			600: { items: 1 },
			768: { items: 1 },
			992: { items: 3 },
			1600: { items: 3 }
		},
	});
	


		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 300);
			return false;
		});
	
	$(document).on('click', '.mob-toggle', function () {
		$(this).toggleClass("open");
		$(".navmenu").toggleClass("open");
	});


	$(".headerBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#header").offset().top - 0)
		}, 1500);
	});
	$(".introBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#intro").offset().top - 0)
		}, 1500);
	});
	$(".photogalleryBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#photogallery").offset().top - 0)
		}, 1500);
	});
	$(".youtubeWrapBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#youtubeWrap").offset().top - 0)
		}, 1500);
	});
	$(".facebookfeedBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#facebookfeed").offset().top - 0)
		}, 1500);
	});
	$(".instafeedBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#instafeed").offset().top - 0)
		}, 1500);
	});
	
});
