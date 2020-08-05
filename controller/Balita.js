const Balita = require("../models/Balita");

module.exports = {
    index: (req, res) => {
        Balita.findAll().then((rows) => {
            res.json(rows);
        });
    },

    search: (req, res) => {
        Balita.findByPk(req.params.id).then((row) => {
            res.json(row);
        });
    },

    store: (req, res) => {
        Balita.create(req.body).then((rows) => {
            res.json(rows);
        });
    },

    update: (req, res) => {
        Balita.findByPk(req.params.id).then((row) => {
            row.update(req.body);
            res.json(row);
        });
    },
    destroy: (req, res) => {
        Balita.findByPk(req.params.id).then((row) => {
            row.destroy();
            res.json(row);
        });
    }
};