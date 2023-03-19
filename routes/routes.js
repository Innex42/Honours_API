const express = require('express');
const router = express.Router();
const timetablesController = require('../controllers/timetableControllers');
const routesController = require('../controllers/routeController');
const weatherController = require('../controllers/weatherControllers');

router.get('/', timetablesController.getTest)
//get all timetables
router.get('/timetable/all', timetablesController.getAll);

//get one prespecified timetable for testing & inital development
router.get('/test/', timetablesController.getTest)

//get timetable by route name or route ID for selected day 
router.get('/timetable/:id/:routeID/:day', timetablesController.getTimetable)

//get all routes
router.get('/routes/all', routesController.getAll);

//get test route
router.get('/routes/test', routesController.getTest);

router.get('/routes/test2', routesController.getTest2);

router.get('/gilltest', routesController.getGill);

//get specific routes
router.get('/routes/:routeID/:day', routesController.getRoute);

// get test weather call
router.get('/weather/test', weatherController.getWeatherTest);

//get the specific weather data
router.get('/weather/:departurePoint/:arrivalPoint/:date', weatherController.getWeather);
module.exports = router;