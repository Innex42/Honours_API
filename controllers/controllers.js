const timetableReferenceDAO = require("../models/timetableReferenceModel");

const timetableReference = new timetableReferenceDAO({filename:"referenceTimetable.db", autoload: true});

const liveTimetableDAO = require("../models/liveTimetableModel");

const liveTimetable = new liveTimetableDAO({filename:"liveTimetable.db", autoload: true});

exports.newLists = function (req, res) {
    liveTimetable.init();
    res.redirect("/");
};

exports.listLiveTimetable = function (req, res){
    liveTimetable.getAllEntries()
        .then((list) => {
            res.json(list);
            console.log(list);
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};



exports.listTimetableReference = function (req, res){
    timetableReference.getAllEntries()
        .then((list) => {
            res.json(list);
            console.log(list);
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};

