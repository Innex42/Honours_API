const Datastore = require('@seald-io/nedb');

exports.timetables = new Datastore({
    filename: 'db/timetables.db',
    autoload: true,
})

exports.routes = new Datastore({
    filename: 'db/routes.db',
    autoload: true,
})

