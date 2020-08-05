const Timbang = require("../models/Timbang");

module.exports = {
    index: (req, res) => {
        Timbang.findAll().then((rows) => {
            res.json(rows);
        });
    },

    search: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            res.json(row);
        });
    },

    store: (req, res) => {
        Timbang.create(req.body).then((rows) => {
            res.json(rows);
        });
    },

    update: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            row.update(req.body);
            res.json(row);
        });
    },
    destroy: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            row.destroy();
            res.json(row);
        });
    }
};