var key = 'ad5d39cc015543028f6203619161811';

var Weather = {
    getCurrentWeather: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.apixu.com/v1/current.json",
            data: {
                key: key,
                q: 'Odesa'
            },
            success: function( result ) {
                dfd.resolve(result); //так мы его вынули из функции
            }
        });
        return dfd.promise();
    },

    getForecastWeather: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.apixu.com/v1/forecast.json",
            data: {
                key: key,
                q: 'Odesa',
                days: 4
            },
            success: function( resultf ) {
                dfd.resolve(resultf); //так мы его вынули из функции
            }
        });
        return dfd.promise();
    }
};