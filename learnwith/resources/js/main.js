$(document).ready(function(){
    $('.slider').bxSlider();
    // Sticky nav
    $(".slider").waypoint(function (direction){
        // i want to make sticky nav visible when main nav is scrolled, need to find that way
        if (direction == "down"){
            $("body").addClass("sticky");
        }else{
            $("body").removeClass("sticky");
        }
    });

    // $(".main-header").sticky({topSpacing:0});
});

// MOBILE MENU============================================
const selectElement = (element)=>{
    return document.querySelector(element);
}

const burger = selectElement(".burger");
const body = selectElement("body");

burger.addEventListener("click", ()=>{
    body.classList.toggle("open");
});

const closeNav = ()=>{
    body.classList.toggle("open");
}
