const { routes } = require('./dbController');


exports.getAll = (req, res) => {
    routes.find({}, (err, docs) => {
        if (err) return console.log(err);
        res.json({ routes: docs });
      });
};

exports.getTest = (req, res) => {
    routes.find({ routeID: 'mil-lar', }, (err, docs) => {
        if (err) return console.log(err);
        res.json({ routes: docs });
    });
};

exports.getRoute = (req, res ) => {
    console.log(req.params)
    routes.find({routeID: req.params.routeID}, (err, docs) => {
      if (err) return console.log(err);
          res.json({ routes: docs });
    });
  }