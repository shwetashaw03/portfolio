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
	$(".ankitdaminiBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#ankitdamini").offset().top - 0)
		}, 1500);
	});
	$(".ankitritualBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#ankitritual").offset().top - 0)
		}, 1500);
	});
	$(".rohanintroBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanintro").offset().top - 0)
		}, 1500);
	});
	$(".rohanankitaBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanankita").offset().top - 0)
		}, 1500);
	});
	$(".rohanritualBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanritual").offset().top - 0)
		}, 1500);
	});
	$(".receptionBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#reception").offset().top - 0)
		}, 1500);
	});
	$(".galleryBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#gallery").offset().top - 0)
		}, 1500);
	});

	/* $.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=990602627938098&count=8", function (result) {
		var html = "";
		for (var i = 0; i < result.data.length; i++) {
			html += "<div><img src='" + result.data[i].images.standard_resolution.url + "' /></div>";
		}
		$("#insta-feed").html(html); 
	});*/
	
	
});
