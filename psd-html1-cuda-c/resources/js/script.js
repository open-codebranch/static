$(document).ready(function()
{
    // Sticky nav
    $(".trigger-sticky-nav").waypoint(function (direction){
        // i want to make sticky nav visible when main nav is scrolled, need to find that way
        if (direction == "down"){
            $("body").addClass("sticky");
        }else{
            $("body").removeClass("sticky");
        }
    });

    // MixItUp - Portfolio Section
    let mixer = mixitup('.mixitup-container');

    // SMOOTH SCROLL for IE / EDGE / SAFARI

    $("a").on("click", function(event){
        if (this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
            });
        }
    })
});

function selectElement(element){
    return document.querySelector(element);
}

function openNav(){
    selectElement("#mobileNav").style.width = "100%";
}

function closeNav(){
    selectElement("#mobileNav").style.width = "0";
}