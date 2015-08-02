/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var on = true;
var myVar = setInterval(function () {
    if (on) {
        slides()
    }
    on = true;
}, 3000);

function slides(i) {
    document.getElementsByClassName("div-img-slide")[1].style.width = "0px";
    document.getElementsByClassName("div-img-slide")[2].style.width = "100%";
    var slide = document.getElementsByClassName("div-img-slide")[0];
    document.getElementById("slide").appendChild(slide);
    if (i) {
        on = false;
    }
}

function back_slide(i) {
    document.getElementsByClassName("div-img-slide")[1].style.width = "0px";
    document.getElementsByClassName("div-img-slide")[0].style.width = "100%";
    var slide = document.getElementsByClassName("div-img-slide")[4];
    var slide2 = document.getElementsByClassName("div-img-slide")[0];
    document.getElementById("slide").insertBefore(slide, slide2);
    if (i) {
        on = false;
    }
}

$(function () {
    $('.crsl-items').carousel({
        visible: 3,
        itemMinWidth: 180,
        itemEqualHeight: 370,
        itemMargin: 9,
    });

    $("a[href=#]").on('click', function (e) {
        e.preventDefault();
    });
});
$(function () {

    $('#da-slider').cslider({
        autoplay: true, // auto play slider on load
        bgincrement: 450
    });

});


$('#theCarousel').carousel({
    interval: false
})

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});