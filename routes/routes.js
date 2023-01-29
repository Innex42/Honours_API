const express = require('express');
const router = express.Router();
const timetablesController = require('../controllers/timetableControllers')


router.get('/', timetablesController.getTest)
//get all timetables
router.get('/timetable/all', timetablesController.getAll);

//get one prespecified timetable for testing & inital development
router.get('/test/', timetablesController.getTest)

//get timetable by route name or route ID for selected day 
router.get('/timetable/:id/:routeID/:day', timetablesController.getTimetable)

module.exports = router;