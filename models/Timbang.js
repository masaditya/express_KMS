const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const Timbang = sequelize.define(
    "timbang", {
        id_timbang: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_bayi: {
            type: Sequelize.STRING(100)
        },
        tanggal_timbang: {
            type: Sequelize.STRING(100)
        },
        berat: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
        tableName: "timbang"
    }
)
module.exports = Timbang