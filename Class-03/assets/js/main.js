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
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	