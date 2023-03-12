const axios = require('axios');
const csvToJson = require('csvtojson');

const getTestData = async (body) => {
    const options = {
        'method': 'GET',
        'url': 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/millport/2023-03-14/2023-03-14?unitGroup=uk&elements=datetimeEpoch%2Cwindgust%2Cwindspeed&include=hours&key=VR5ESUURZ5WXYAG4FBBJZJEMW&contentType=csv',
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

const getWeatherData = async (body, place, date) => {
    const options = {
        'method': 'GET',
        'url': 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ place + '/'+ date + '/'+ date +'?unitGroup=uk&elements=datetime%2Cwindgust%2Cwindspeed&include=hours&key=VR5ESUURZ5WXYAG4FBBJZJEMW&contentType=csv',
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

exports.getWeather = async (req, res) => {
    const departPortApiResponse = await getWeatherData(req.body, req.params.departurePoint, req.params.date);
    const arrivalPortApiResponse = await getWeatherData(req.body, req.params.arrivalPoint, req.params.date);
    /*console.log(departPortApiResponse);
    console.log("/////////////////////////////////")
    console.log(arrivalPortApiResponse); */
    let combinedApiResponse = departPortApiResponse;
    for (let index = 0; index < combinedApiResponse.length; index++) {
        if (parseFloat(combinedApiResponse[index].windgust) < parseFloat(arrivalPortApiResponse[index].windgust)) {
            combinedApiResponse[index].windgust = arrivalPortApiResponse[index].windgust
        }
        if (parseFloat(combinedApiResponse[index].windspeed) < parseFloat(arrivalPortApiResponse[index].windspeed)){
            combinedApiResponse[index].windspeed = arrivalPortApiResponse[index].windspeed
        }
    }
    res.json(combinedApiResponse);
}

exports.getWeatherTest = async (req, res) => {
    const weatherApiResponse = await getTestData(req.body);
    res.json(weatherApiResponse);
}