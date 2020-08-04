const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "db_kms",
    "root",
    "", {
        host: "localhost",
        dialect: "mysql"
    }
)
module.exports = sequelize;