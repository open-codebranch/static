$(document).ready(function(){

    $("#nav").slicknav();
    
    $(".slider").bxSlider();

    $.scrollUp();

    $('.service_area').owlCarousel({
        loop:true,
        margin:10,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.all-courses').owlCarousel({
        loop:true,
        margin:10,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.all-testimonial').owlCarousel({
        loop:true,
        margin:10,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.all-clients').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
});