var cube = {
  showFace: function(name) {
    switch (name) {
      case "front":
        $("#cube").addClass("show-front")
        break;
      case n:
        break;
    }
  }
}



function speak(s) {
  var msg = new SpeechSynthesisUtterance(s);
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices.filter(function(voice) {
    return voice.name == 'Google UK English Female';
  })[0];
  msg.lang = 'en-GB';

  msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };
  speechSynthesis.speak(msg);
}
// speak("");
// $(".content").hide();
// setTimeout(function () {
//     $("#load").show();
//     $(".content").show();
//     showOut("Good evening Linh-sama! Can I help you?");
//    }, 3000);

function answer() {
  showOut("lucre-sama is missing you so much!");
}

function showOut(text) {
  speak(text);
  animateText("textExample", text);
}

/*Bounce effect - do not edit unless you get it!*/
function bounce(progress) {
  for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (progress >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
    }
  }
}
/*Animation time interval function - do not edit*/

function animate(opts) {

  var start = new Date

  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration

    if (progress > 1) progress = 1

    var delta = opts.delta(progress)
    opts.step(delta)

    if (progress == 1) {
      clearInterval(id)
    }
  }, opts.delay || 10)

}
// /*the text typing animation function*/
// animateText('textExample', "Hello");
//
// function animateText(id, text1) {
//   var textArea = document.getElementById(id);
//  /*Predefine text to be animated into the textarea*/
//
//   var text = text1;
//
//   /*Declare animation starting point at 0, through the full length of text*/
//
//   var to = text.length, from = 0
//
//  /*Typical animation settings*/
//
//   animate({
//     delay: 10,
//     duration: 1000,
//     delta:bounce,
//     step: function(delta) {
//
// 	  /*Animates the forward typing then deleting and retyping effect*/
//
//       var typedResult = (to-from) * delta + from
//
// 	  /*Assign the value of textarea to the string assigned to 'text' variable*/
//
//       textArea.value = text.substr(0, Math.ceil(typedResult))
//     }
//   })
// };
//
// /*Again, Again!! Clear text area, run animateText() again when button is clicked*/
//
// function typeAgain(textArea){
//    var text=''
//    animateText('textExample', "hello linh sama");
//   };
