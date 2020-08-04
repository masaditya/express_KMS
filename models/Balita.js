const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Balita = sequelize.define(
  "balita",
  {
    id_bayi: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_bayi: {
      type: Sequelize.STRING(100),
    },
    jenis_kelamin: {
      type: Sequelize.STRING(100),
    },
    alamat_bayi: {
      type: Sequelize.STRING(100),
    },
    umur: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "balita",
  }
);
module.exports = Balita;
