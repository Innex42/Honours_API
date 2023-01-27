const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

//get all timetables
router.get('/get/timetable/all', controllers.getall);

//get one prespecified timetable for testing & inital development
router.get('/get/timetable/')

//get timetable by route name or route ID that will be prestored within the app
