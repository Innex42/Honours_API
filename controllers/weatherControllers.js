const weatherDAO = require("../models/weatherModel");

const weather = new weatherDAO({filename:"weather.db", autoload: true});

exports.newWeatherList = function (req, res){
    weather.init();
    res.redirect("/");
}

exports.listWeather = function (req, res){
    weather.getAllEntries()
        .then((list) => {
            res.json(list);
            console.log(list);
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};

exports.getWeatherByLocation = function (req, res) {
    weather.findOne({})
}