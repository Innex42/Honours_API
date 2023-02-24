const Datastore = require('@seald-io/nedb');

exports.timetables = new Datastore({
    filename: 'db/timetables.db',
    autoload: true,
})

exports.routes = new Datastore({
    filename: 'db/routes.db',
    autoload: true,
})

exports.gil_stm = new Datastore({
    filename: 'db/gil-stm.db',
    autoload: true,
})

exports.stm_gil = new Datastore({
    filename: 'db/stm-gil.db',
    autoload: true,
})

exports.lar_mil = new Datastore({
    filename: 'db/lar-mil.db',
    autoload: true,
})

exports.mil_lar = new Datastore({
    filename: 'db/mil-lar.db',
    autoload: true,
})