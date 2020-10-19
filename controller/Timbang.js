const Timbang = require("../models/Timbang");

module.exports = {
    index: (req, res) => {
        Timbang.findAll().then((rows) => {
            console.log(rows)
            res.json(rows);
        });
    },

    search: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            console.log(row)
            res.json(row);
        });
    },

    store: (req, res) => {
        Timbang.create(req.body).then((rows) => {
            console.log(rows)
            res.json(rows);
        });
    },

    update: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            row.update(req.body);
            console.log(row)
            res.json(row);
        });
    },
    destroy: (req, res) => {
        Timbang.findByPk(req.params.id).then((row) => {
            console.log(row)
            row.destroy();
            res.json(row);
        });
    }
};
