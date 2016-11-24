$.when(Weather.getCurrentWeather()).then(function (result) { // так мы его определили в index.js
    var temps = result.current;
    console.log(temps);

    var tempC = temps.temp_c;
    // console.log (tempC);
    $('.tempc').html(tempC + '<sup>o</sup>C');

    $('.sky').html(temps.condition.text);

    $('.last-update').html(temps.last_updated);

    var mainIcon = document.querySelector('.main-icon');


});


var forecast = [];

/*var index = forecast.length;
console.log(index);*/

$.when(Weather.getForecastWeather()).then(function (resultf) {
    forecast = resultf.forecast.forecastday;
    // var forecastIndex = forecast
    console.log(forecast);


    $('.forecast-temp1').html(forecast[0].day.maxtemp_c + ' | ' + forecast[0].day.mintemp_c);
    $('.forecast-temp2').html(forecast[1].day.maxtemp_c + ' | ' + forecast[1].day.mintemp_c);
    $('.forecast-temp3').html(forecast[2].day.maxtemp_c + ' | ' + forecast[2].day.mintemp_c);
    $('.forecast-temp4').html(forecast[3].day.maxtemp_c + ' | ' + forecast[3].day.mintemp_c);

    $('.forecast-date1').html(forecast[0].date);
    $('.forecast-date2').html(forecast[1].date);
    $('.forecast-date3').html(forecast[2].date);
    $('.forecast-date4').html(forecast[3].date);


    var icon = forecast[0].day.condition.text;

    function ImgChange() {
        if (icon == 'Sunny'){
            $('.forecast-icon1').attr('src', 'img/sun.svg');
        } if (icon == 'Cloudy'){
            $('.forecast-icon1').attr('src', 'img/cloud.svg');
        }
    }
    ImgChange();


    $('.sky1').html(forecast[0].day.condition.text);
    $('.sky2').html(forecast[1].day.condition.text);
    $('.sky3').html(forecast[2].day.condition.text);
    $('.sky4').html(forecast[3].day.condition.text);

});

/*
function renderWeather(forecast) {
                '<div class="f1 f">' +
                    '<p class="forecast-date1"></p>' +
                    '<p> <img src="" class="forecast-icon1 ficon"/></p>' +
                    '<p class="forecast-temp1"></p>' +
                '</div>';
}*/
