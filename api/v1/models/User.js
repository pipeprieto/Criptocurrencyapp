const {DataTypes} = require('sequelize');
const sequelize = require("../../../database/database");
const Crypto = require('./Crypto');


const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})

// User.hasMany(Crypto,{
//     foreignKey:'cryptoID',
//     sourceKey:'id'
// })

// Crypto.belongsTo(User,{
//     foreignKey:'cryptoID',
//     targetKey:'id'
// })


module.exports = User;