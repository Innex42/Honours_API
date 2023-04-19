const { routes } = require('./dbController');
const { gil_stm } = require('./dbController');

const fs = require("fs");
const path = "./data/gil-stm/gil-stm-mon.json";

// returns all from routes nedb Database
exports.getAll = (req, res) => {
    routes.find({}, {_id:0}, (err, docs) => {
        if (err) return console.log(err);
        res.json({ routes: docs });
      });
};

// returns static result from routes NeDB Database
exports.getTest = (req, res) => {
    routes.findOne({ routeID: 'mil-lar', }, {_id: 0, }, (err, docs) => {
        if (err) return console.log(err);
        res.json( docs );
        console.log('get test called');
    });
};

//Main contoller to get the timetable data
exports.getRoute = (req, res ) => {
    console.log(req.params)
    //uses fs package find the requested timetables using departure Point, Arrival Point and weekday of travel
    fs.readFile('./data/'+req.params.routeID+'/'+req.params.routeID+'-'+req.params.day+'.json', "utf8", (err, jsonString) => {
        if (err) {
            console.error(err);
            return;
        }
        //exports the requested timetable
        res.json(JSON.parse(jsonString));
      })
  }

//extra test for database request
exports.getTest2 = (req, res) => {
    routes.findOne({ routeID: 'mil-lar', }, {'timetables.timetablesByDay': 1, _id: 0,  }, (err, docs) => {
        if (err) return console.log(err);
        res.json( docs );
        console.log('get test2 called');
    });
}

//test for JSON file data storage solution returns gil-stm-mon.json
exports.getGill = (req, res) => {
    /*gil_stm.findOne({day: 'monday'}, {_id:0}, (err, docs) => {
        if (err) return console.log(err);
        res.json(docs);
      }); */
      fs.readFile(path, "utf8", (err, jsonString) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(JSON.parse(jsonString));
      })
      
}