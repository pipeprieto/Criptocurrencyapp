const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const Crypto = require("./Crypto");

const usersCryptos = sequelize.define(
  "userscryptos",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    crypto_id:{
        type:DataTypes.INTEGER
    }
  },
  { timestamps: false }
);
module.exports = usersCryptos;