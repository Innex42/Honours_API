const axios = require('axios');
const csvToJson = require('csvtojson');
require('dotenv').config();

//test controller for weather API HTTP
const getTestData = async (body) => {
    const options = {
        'method': 'GET',
        'url': process.env.weatherTestURL,
        'headers': {
        },
        data: {
            body
        }
    };

    try {
        const result = await axios(options);
        //console.log(result);
        const jsonResult =  await csvToJson().fromString(result.data)
        
        return (jsonResult);
    } catch (e) {
        console.log(e);
    }
}

//the date format required for visual crossing: 2023-03-14

//Main http request controller
const getWeatherData = async (body, place, date) => {
    //get current date
    let testDateTime = new Date();

    // correct format of date
    let testDate = ("0" + testDateTime.getDate()).slice(-2);
    let testMonth = ("0" + testDateTime.getMonth()).slice(-2)
    let testYear = testDateTime.getFullYear();
    let reformatedDate = (`${testYear}-${testMonth}-${testDate}`)
    let formatedPlace = place.replace(/ /g, "%20")

    //solution to Hamars Ness not working in weather API
    if (place=="hamars ness"){
        formatedPlace="fetlar"
    }
    // if requested date equals current date http request
    if (date ==reformatedDate){
        const options = {
            'method': 'GET',
            'url': process.env.weatherURLStart + formatedPlace + process.env.wantedCountry + '/today'  + process.env.weatherURLEnd,
            'headers': {
            },
            data: {
                body
            }
        };
        try {
            const result = await axios(options);
            //console.log(result);
            const jsonResult =  await csvToJson().fromString(result.data)
            
            return (jsonResult);
        } catch (e) {
            console.log(e);
        }

    } 
    // if date is not equal to current date http request
    else{
        const options = {
            'method': 'GET',
            'url': process.env.weatherURLStart + formatedPlace + process.env.wantedCountry + '/'+ date + '/'+ date + process.env.weatherURLEnd,
            'headers': {
            },
            data: {
                body
            }
        };

        try {
            const result = await axios(options);
            //console.log(result);
            const jsonResult =  await csvToJson().fromString(result.data)
            
            return (jsonResult);
        } catch (e) {
            console.log(e);
        }
    }
   

    
}

//Weather Api request controller using async
exports.getWeather = async (req, res) => {
    //Deaprture point http request
    const departPortApiResponse = await getWeatherData(req.body, req.params.departurePoint, req.params.date);

    //Arrival point http request
    const arrivalPortApiResponse = await getWeatherData(req.body, req.params.arrivalPoint, req.params.date);

    /*console.log(departPortApiResponse);
    console.log("/////////////////////////////////")
    console.log(arrivalPortApiResponse); */

    //Combine the two results from API request by finding the higher value
    let combinedApiResponse = departPortApiResponse;
    for (let index = 0; index < combinedApiResponse.length; index++) {
        if (parseFloat(combinedApiResponse[index].windgust) < parseFloat(arrivalPortApiResponse[index].windgust)) {
            combinedApiResponse[index].windgust = arrivalPortApiResponse[index].windgust
        }
        if (parseFloat(combinedApiResponse[index].windspeed) < parseFloat(arrivalPortApiResponse[index].windspeed)){
            combinedApiResponse[index].windspeed = arrivalPortApiResponse[index].windspeed
        }
    }
    //export the combined list 
    res.json(combinedApiResponse);
}

//Test Weather controller
exports.getWeatherTest = async (req, res) => {
    const weatherApiResponse = await getTestData(req.body);
    res.json(weatherApiResponse);
}