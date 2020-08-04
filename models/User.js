const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const User = sequelize.define(
    "user", {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_user: {
            type: Sequelize.STRING(100)
        },
        alamat_user: {
            type: Sequelize.STRING(100)
        },
        email_user: {
            type: Sequelize.STRING(100)
        },
        username: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(100)
        }
    }, {
        timestamps: false,
        tableName: "user"
    }
)
module.exports = User