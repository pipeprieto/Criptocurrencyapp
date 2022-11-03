const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const Crypto = require('./Crypto');

const Gestora = sequelize.define(
  "Gestora",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

// Gestora.hasOne(Crypto,{
//     foreignKey:'cryptoID',
//     sourceKey:'id'
// })

// Crypto.belongsToMany(Gestora,{
//     through:'Pais',
//     foreignKey:'cryptoID',
//     targetKey:'id'
// })

module.exports = Gestora;