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



