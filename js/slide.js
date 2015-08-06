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
$(function () {
    setTimeout(function () {
        $('#preload').fadeOut(1000, 'swing', function () {
            $('#preload').remove();
        });
    }, 1000);
});

$('#theCarousel').carousel({
    interval: false
})

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3

});
$('.multiple-items2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
var $topmenu = $('#top-menu');
$topmenu.waypoint(function (direction) {
    if (direction === 'down') {
        $('#top-menu').addClass('on-top-menu');
    } else {
        $('#top-menu').removeClass('on-top-menu');
    }
});

var $slickslide = $('#product-animation-index');
$slickslide.waypoint(function () {
    setTimeout(function () {
        $('#product-animation-index').css(
                {"opacity": "1"
                }
        );
    }, 1500);

}, {
    offset: '90%'
});
var $slickslide = $('#service-animation-index');
$slickslide.waypoint(function (direction) {
    if (direction === 'down') {
        $('#service-animation-index').css(
                {"opacity": "1"
                }
        );
    } else {
        $('#service-animation-index').css(
                {"opacity": "0"
                }
        );
    }
}, {
    offset: '95%'
});