const nedb = require("@seald-io/nedb");


class Weather {
    constructor(weatherFilePath){
        if(weatherFilePath){
            this.weather = new nedb(weatherFilePath);
            console.log("weahter connected to "+ weatherFilePath);
            weatherFilePath;
        } else {
            this.weather = new nedb();
        }
    }

    getAllEntries(){
        return new Promise((resolve, reject))
    }
}