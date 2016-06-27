$(document).ready(function(){
    $(".character").hover(function(){
        $(".character").css(
        "transform", "scale(" + "1.2,1.2"+ ")"
        );
    }, function(){
      $(".character").css(
        "transform", "scale(" + "1,1"+ ")"
        );
    });
  
    setTimeout(function(){
      $(".chop div").addClass("animation");
    }, 3000);
    // var leftMenu = $(window).width()/2 - $(".menu").width()/2;
    // $(".menu").css("left", leftMenu);
});