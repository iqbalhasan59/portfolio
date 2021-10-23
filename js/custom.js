


		// MAIN NAVIGATION
		 $('.main-navigation').onePageNav({
		        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
		        scrollOffset: 75, //Height of Navigation Bar
		        filter: ':not(.external)',
		        changeHash: true
		    });

		    /* NAVIGATION VISIBLE ON SCROLL */
		    mainNav();
		    $(window).scroll(function () {
		        mainNav();
		    });

		    function mainNav() {
		        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		        if (top > 40) $('.sticky-navigation').stop().animate({
		            "opacity": '1',
		            "top": '0'
		        });
		        else $('.sticky-navigation').stop().animate({
		            "opacity": '0',
		            "top": '-75'
		        });
		    }


		// HIDE MOBILE MENU AFTER CLIKING ON A LINK
		    $('.navbar-collapse a').click(function(){
		        $(".navbar-collapse").collapse('hide');
		    });

				// Skills section
 $('.skills-content').waypoint(function() {
	 $('.progress .progress-bar').each(function() {
		 $(this).css("width", $(this).attr("aria-valuenow") + '%');
	 });
 }, {
	 offset: '80%'
 });

 // Init AOS
function aos_init() {
	AOS.init({
		duration: 1000,
		once: true
	});
}

 // Porfolio isotope and filter
 $(window).on('load', function() {
	 var portfolioIsotope = $('.portfolio-container').isotope({
		 itemSelector: '.portfolio-item'
	 });

	 $('#portfolio-flters li').on('click', function() {
		 $("#portfolio-flters li").removeClass('filter-active');
		 $(this).addClass('filter-active');

		 portfolioIsotope.isotope({
			 filter: $(this).data('filter')
		 });
		 aos_init();
	 });

	 // Initiate venobox (lightbox feature used in portofilo)
	 $('.venobox').venobox({
		 'share': false
	 });

	 // Initiate aos_init() function
	 aos_init();

 });
 // jQuery counterUp
 $('[data-toggle="counter-up"]').counterUp({
	 delay: 10,
	 time: 1000
 });
 // Testimonials carousel (uses the Owl Carousel library)
 $(".testimonials-carousel").owlCarousel({
	 autoplay: true,
	 dots: true,
	 loop: true,
	 items: 1
 });
//accordian
const Accordion = {
	settings: {
		// Expand the first item by default
		first_expanded: false,
		// Allow items to be toggled independently
		toggle: false
	},

	openAccordion: function(toggle, content) {
		if (content.children.length) {
			toggle.classList.add("is-open");
			let final_height = Math.floor(content.children[0].offsetHeight);
			content.style.height = final_height + "px";
		}
	},

	closeAccordion: function(toggle, content) {
		toggle.classList.remove("is-open");
		content.style.height = 0;
	},

	init: function(el) {
		const _this = this;

		// Override default settings with classes
		let is_first_expanded = _this.settings.first_expanded;
		if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
		let is_toggle = _this.settings.toggle;
		if (el.classList.contains("is-toggle")) is_toggle = true;

		// Loop through the accordion's sections and set up the click behavior
		const sections = el.getElementsByClassName("accordion");
		const all_toggles = el.getElementsByClassName("accordion-head");
		const all_contents = el.getElementsByClassName("accordion-body");
		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const toggle = all_toggles[i];
			const content = all_contents[i];

			// Click behavior
			toggle.addEventListener("click", function(e) {
				if (!is_toggle) {
					// Hide all content areas first
					for (let a = 0; a < all_contents.length; a++) {
						_this.closeAccordion(all_toggles[a], all_contents[a]);
					}

					// Expand the clicked item
					_this.openAccordion(toggle, content);
				} else {
					// Toggle the clicked item
					if (toggle.classList.contains("is-open")) {
						_this.closeAccordion(toggle, content);
					} else {
						_this.openAccordion(toggle, content);
					}
				}
			});

			// Expand the first item
			if (i === 0 && is_first_expanded) {
				_this.openAccordion(toggle, content);
			}
		}
	}
};

(function() {
	// Initiate all instances on the page
	const accordions = document.getElementsByClassName("accordions");
	for (let i = 0; i < accordions.length; i++) {
		Accordion.init(accordions[i]);
	}
})();

//acordian end
/* Scroll To Top */

	 $(window).scroll(function(){
	 if ($(this).scrollTop() >= 500) {
			 $('.scroll-to-top').fadeIn();
		} else {
			 $('.scroll-to-top').fadeOut();
		}
});

//Top scroll
$('.scroll-to-top').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
	});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})