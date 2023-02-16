const { routes } = require('./dbController');


exports.getAll = (req, res) => {
    routes.find({}, {_id:0}, (err, docs) => {
        if (err) return console.log(err);
        res.json({ routes: docs });
      });
};

exports.getTest = (req, res) => {
    routes.findOne({ routeID: 'mil-lar', }, {_id: 0}, (err, docs) => {
        if (err) return console.log(err);
        res.json( docs );
        console.log(docs);
    });
};

exports.getRoute = (req, res ) => {
    console.log(req.params)
    routes.findOne({routeID: req.params.routeID}, (err, docs) => {
      if (err) return console.log(err);
          res.json({ routes: docs });
          console.log(docs);
    });
  }