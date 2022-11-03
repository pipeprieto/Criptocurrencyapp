const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const User = require("./User");
const Gestora = require("./Gestora");
const Crypto = require("./Crypto");

const Pais = sequelize.define(
  "Pais",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

// Pais.hasMany(User,{
//     foreignKey:'userID',
//     sourceKey:'id'
// })
// User.belongsTo(Pais, {
//   foreignKey:'userID',
//   targetKey:'id'
// });

// Pais.hasOne(Crypto,{
//     foreignKey:'cryptoID',
//     sourceKey:'id'
// })

// Crypto.belongsToMany(Pais, {
//   through:'Gestora',
//   foreignKey: 'cryptoID',
//   targetKey:'id'
// });

// Pais.hasMany(Gestora,{
//     foreignKey:'gestoraID',
//     sourceKey:'id'
// })
// Gestora.belongsTo(Pais, {
//   foreignKey: "gestoraID",
//   targetKey: "id",
// });

module.exports = Pais;