const {timetables} = require('../controllers/dbController.js');

exports.dataLoad = (req, res, next) => {
  timetables.loadDatabase();
  return next();
}