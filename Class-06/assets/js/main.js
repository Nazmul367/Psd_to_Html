(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".case-study-carousel").owlCarousel({
            items: 3,
            loop: true,
            nav:false,
            dots: true,
            margin:20,
            autoplay: true,
            
        });
        
        
         $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav:false,
            dots: true,
             margin:30,
            autoplay: true,
            
        });
		
		 $(".brand-logo-carousel").owlCarousel({
           items: 6,
           margin: 30,
           dots:false,
           autoplay: true,
           loop: true,
           nav: false,    
        });
		
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	