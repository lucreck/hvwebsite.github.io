window.onload = gates();
var link = function(a) {
    return 'https://query.yahooapis.com/v1/public/yql?q=' + a;
    //return "http://where.yahooapis.com/v1/places.q('"+ a +"')?appid=dj0yJmk9TUpDd0tiM3RKV2FVJmQ9WVdrOVYwdGxVM0pYTkdzbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD01OA--&lang=de&format=json"
    //return "http://weather.yahooapis.com/forecastrss?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text="+ a +")&u=c&format=json"
    };
var place,
    choice;

function steve(a) {
  console.log(a);
  var forecast = a.query.results.channel.item.forecast,
      condition = a.query.results.channel.item.condition;
  
  //$('header i.wi').attr('class', 'wi wi-');
  $('header i.wi.main').attr('class', 'wi main '+ changePic(condition.code)).attr('data-cid', changePic(condition.code))
  $('header .right bold').text(condition.temp +'°C');
  $('header .right small').text(forecast[0].low +'°C - '+ forecast[0].high +'°C');
  $('#rainmetertop span.1').html(a.query.results.channel.atmosphere.humidity +'<tiny>%</tiny>');
  $('#rainmetertop span.2').html(a.query.results.channel.wind.speed +'<tiny>km/h</tiny>');
  
  //Bottom part
  for (var i = 1; i <= 3;i++) {
    var fc = a.query.results.channel.item.forecast[i];
    $('footer ul li.'+ i +' .wi').attr('class', 'wi '+ changePic(fc.code)).attr('data-cid', changePic(fc.code))
    $('footer ul li.'+ i +' .main').text(Math.round((parseInt(fc.low) + parseInt(fc.high)) / 2) + " °C");
    $('footer ul li.'+ i +' #rainmeter span').text(fc.day);
  }
} 

function jobs(a) {
  console.log(a);
   var weatherget = 'select * from weather.forecast where woeid=' + a + ' and u = "c" &format=json&language=de';
  $.getJSON('https://query.yahooapis.com/v1/public/yql?q='+ weatherget, steve);
}

function linus(a) {
  $('#results ul').empty();
  $('#results .restext').text('Found '+ a.Result.length +' results:');
  choice = a;
  
  for (var i in a.Result) {
    if (a.Result[i].woetype == 7)
      $('#results ul').append('\
      <li data-click="'+ i +'">\
        <p>'+ a.Result[i].country +' - '+ a.Result[i].city +', '+ a.Result[i].uzip +'</p>\
      </li>');
    else if (a.Result[i].woetype == 8)
      $('#results ul').append('\
      <li data-click="'+ i +'">\
        <p>'+ a.Result[i].country +' - '+ a.Result[i].state +'</p>\
      </li>');
    else if (a.Result[i].woetype == 12)
      $('#results ul').append('\
      <li data-click="'+ i +'">\
        <p>'+ a.Result[i].country +'</p>\
      </li>');
  }
  
  $('#results ul li').click(torvalds);
  $('#results').slideDown(300);
}

function torvalds(a) {
  var b = $(a.currentTarget).attr('data-click');
  console.log(a);
  console.log(b);
  jobs(choice.Result[b].woeid);
  location.hash = choice.Result[b].woeid;
  $('#results').slideUp(300);
}

function bill(a) {
      var x;
      if (typeof a == 'undefined') {
          x = 'New York';
      } else {
          x = $(a.target).prop('value');
      }
      place = 'select * from geo.placefinder where text="'+ x +'"&format=json';
    
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q='+ place, function(d) {
      console.log(d);
      if (d.query.results.Result[0])
        linus(d.query.results);
      else {
        $('#results').slideUp(300);
        jobs(d.query.results.Result.woeid);
        location.hash = d.query.results.Result.woeid;
      }
    });
}

function gates() {
  $('top input').change(bill);
  if (location.hash) {
    console.log(location.hash);
    if (location.hash.indexOf('&') !== -1) {
      var c = location.hash.slice(1).split('&'),
          y = c[0];
      console.log(c);
      if (c[1] == "search=false") {
        console.log('hey');
        $('top input').attr('hidden', 'true');
      }
    } else
      var y = location.hash.slice(1);
    var x = 'select city,state,country,woetype from geo.placefinder where woeid="'+ y +'"&format=json';
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q='+ x, function(d) {
      console.log(d);
      if (d.query.results.Result.woetype == 7)
        $('top input').attr('placeholder', d.query.results.Result.city);
      else if (d.query.results.Result.woetype == 8)
        $('top input').attr('placeholder', d.query.results.Result.state);
      else if (d.query.results.Result.woetype == 12)
        $('top input').attr('placeholder', d.query.results.Result.country);
      //---//
      jobs(location.hash.slice(1));
    });
  } else {
    bill();
  }
}

//Sadly I didn't have any ideas for new names...
function changePic(a) {
  var d = new Date(),
      n = d.getHours(),
      b = 'day';
  
  if (n >= 18 || n <= 6) {
    console.log(n);
      b = 'night';
  }
  
  switch(parseInt(a)) {
    case 0:
			return 'wi-tornado';
			break;
		case 1:
			return 'wi-'+ b +'-lightning';
			break;
		case 2:
      return 'wi-'+ b +'-cloudy-windy';
			break;
		case 3:
      return 'wi-'+ b +'-lightning';
			break;
		case 4:
			return 'wi-'+ b +'-lightning';
			break;
		case 5:
      return 'wi-'+ b +'-snow';
			break;
		case 6:
      return 'wi-'+ b +'-rain-wind';
			break;
		case 7:
      return 'wi-'+ b +'-snow';
			break;
		case 8:
      return 'wi-'+ b +'-rain-mix';
			break;
		case 9:
      return 'wi-'+ b +'-rain-mix';
			break;
		case 10:
			return 'wi-'+ b +'-rain-mix';
			break;
		case 11:
			return 'wi-'+ b +'-rain-mix';
			break;
		case 12:
			return 'wi-'+ b +'-rain-mix';
			break;
		case 13:
			return 'wi-'+ b +'-snow';
			break;
		case 14:
			return 'wi-'+ b +'-snow';
			break;
		case 15:
			return 'wi-'+ b +'-snow';
			break;
		case 16:
			return 'wi-'+ b +'-snow';
			break;
		case 17:
			return 'wi-'+ b +'-hail';
			break;
		case 18:
			return 'wi-'+ b +'-hail';
			break;
		case 19:
			return 'wi-'+ b +'-hail';
			break;
		case 20:
			return 'wi-'+ b +'-fog';
			break;
		case 21:
			return 'wi-'+ b +'-fog';
			break;
		case 22:
			return 'wi-'+ b +'-fog';
			break;
		case 23:
			return 'wi-'+ b +'-fog';
			break;
		case 24:
			return 'wi-'+ b +'-cloudy-gusts';
			break;
		case 25:
			return 'wi-thermometer-exterior';
			break;
		case 26:
			return 'wi-'+ b +'-fog';
			break;
		case 27:
			return 'wi-night-cloudy';
			break;
		case 28:
			return 'wi-'+ b +'-cloudy';
			break;
		case 29:
			return 'wi-night-cloudy';
			break;
		case 30:
			return 'wi-day-cloudy';
			break;
		case 31:
			return 'wi-night-clear';
			break;
		case 32:
			return 'wi-day-sunny';
			break;
		case 33:
			return 'wi-night-clear';
			break;
		case 34:
			return 'wi-day-sunny';
			break;
		case 35:
			return 'wi-'+ b +'-hail';
			break;
		case 36:
			return 'wi-day-sunny';
			break;
		case 37:
			return 'wi-'+ b +'-lightning';
			break;
		case 38:
			return 'wi-'+ b +'-lightning';
			break;
		case 39:
			return 'wi-'+ b +'-lightning';
			break;
		case 40:
			return 'wi-'+ b +'-rain-wind';
			break;
		case 41:
			return 'wi-'+ b +'-snow';
			break;
		case 42:
			return 'wi-'+ b +'-snow';
			break;
		case 43:
			return 'wi-'+ b +'-snow';
			break;
		case 44:
			return 'wi-'+ b +'-cloudy';
			break;
		case 45:
			return 'wi-'+ b +'-lightning';
			break;
		case 46:
			return 'wi-'+ b +'-snow';
			break;
		case 47:
			return 'wi-'+ b +'-lightning';
			break;
		case 3200:
			return 'wi-moon-new';
			break;
		case 999:
			return 'wi-moon-new';
			break;
		default:
			return 'wi-moon-new';
			break;
  }
}