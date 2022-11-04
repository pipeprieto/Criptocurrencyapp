const {DataTypes} = require('sequelize');
const sequelize = require("../../../database/database");
const Pais = require('./Pais');


const User = sequelize.define('users',{
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
        allowNull:false,
        unique:true
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{timestamps:false})

User.hasOne(Pais,{
    foreignKey:'pais_id',
    sourceKey:"id"
})




module.exports = User;