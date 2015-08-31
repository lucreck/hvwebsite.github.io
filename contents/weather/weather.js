if ("geolocation" in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}

$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
});

$(document).ready(function() {
  loadWeather('Melbourne, Vic', '');
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<h1>' + weather.city + ' <b>' + weather.temp + '&deg;</b></h1>';
      html += '<h2><i class="icon-' + weather.code + '"></i> ' + weather.currently + '</h2>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
}

$(document).ready(function() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  $('#date').text(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

  setInterval(function() {
    var seconds = new Date().getSeconds();
    $("#sec").html((seconds < 10 ? "0" : "") + seconds);
  }, 1000);

  setInterval(function() {
    var minutes = new Date().getMinutes();
    $("#min").html((minutes < 10 ? "0" : "") + minutes);
  }, 1000);

  setInterval(function() {
    var hours = new Date().getHours();
    $("#hours").html((hours < 10 ? "0" : "") + hours);
  }, 1000);
});


