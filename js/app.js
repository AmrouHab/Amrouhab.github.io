(function($, document, window){
	
	$(document).ready(function(){

		// mettre en sorte que la navigation soit compatible avec la navigation mobile
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Menu sur mobile
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
		$(".search-form button").click(function(){
			$(this).toggleClass("active");
			var $parent = $(this).parent(".search-form");

			$parent.find("input").toggleClass("active").focus();
		});

        // Slider de index.html 
		$(".slider").flexslider({
			controlNav: false,
			prevText:'<i class="fa fa-chevron-left"></i>',
			nextText:'<i class="fa fa-chevron-right"></i>',
		});
		// Carte pour contact.html
		if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 12 
					}  
				},
				// Addresse de notre "entreprise"
				marker:{
					address: "44 rue jaufre rudel",
				}
			},
			"autofit" );
	    	
	    }
	});

	$(window).load(function(){

		/* Filterable Items */
		var $container = $('.filterable-items');
		$container.isotope({
			filter: '*',
			layoutMode: 'fitRows',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		$('.filterable-nav a').click(function(e){
			e.preventDefault();
			$('.filterable-nav .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		});

		$('.mobile-filter').change(function(){
			var selector = $(this).val();
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		});

	})

})(jQuery, document, window);