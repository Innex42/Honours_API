const {timetables} = require('./dbController');

let jsonData = require('../newRoutes.json');

exports.getAll = (req, res) => {
    timetables.find({}, (err, docs) => {
        if (err) return console.log(err);
        res.json({ timetables: docs });
      });
};

exports.getTest = (req, res) => {
  res.json(jsonData);
};


exports.getTimetable = (req, res ) => {
  console.log(req.params)
  timetables.find({id: req.params.id, 'route.routeID': req.params.routeID, 'route.timetables.timetablesByDay.day':req.params.day}, (err, docs) => {
    if (err) return console.log(err);
        res.json({ timetables: docs });
  });
}

