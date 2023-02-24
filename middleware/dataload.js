const {timetables, routes} = require('../controllers/dbController.js');

exports.dataLoad = (req, res, next) => {
  timetables.loadDatabase();
  routes.loadDatabase();
  return next();
}
