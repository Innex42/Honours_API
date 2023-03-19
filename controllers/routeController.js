const { routes } = require('./dbController');
const { gil_stm } = require('./dbController');

const fs = require("fs");
const path = "./data/gil-stm/gil-stm-mon.json";


exports.getAll = (req, res) => {
    routes.find({}, {_id:0}, (err, docs) => {
        if (err) return console.log(err);
        res.json({ routes: docs });
      });
};

exports.getTest = (req, res) => {
    routes.findOne({ routeID: 'mil-lar', }, {_id: 0, }, (err, docs) => {
        if (err) return console.log(err);
        res.json( docs );
        console.log('get test called');
    });
};

exports.getRoute = (req, res ) => {
    console.log(req.params)
    
    fs.readFile('./data/'+req.params.routeID+'/'+req.params.routeID+'-'+req.params.day+'.json', "utf8", (err, jsonString) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(JSON.parse(jsonString));
      })
  }

exports.getTest2 = (req, res) => {
    routes.findOne({ routeID: 'mil-lar', }, {'timetables.timetablesByDay': 1, _id: 0,  }, (err, docs) => {
        if (err) return console.log(err);
        res.json( docs );
        console.log('get test2 called');
    });
}

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