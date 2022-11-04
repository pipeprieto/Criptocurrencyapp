const User = require('../models/User');
const {tokenSign} = require('../helpers/generateToken');
const {userInfoQuery} = require('../../../database/querys');
const sequelize = require('../../../database/database');
const { QueryTypes } = require("sequelize");

const init = (req,res)=>{
res.send(`<p>Servidor levantado correctamente</p>`);
}

const login = async (req,res)=>{
  const{username,pass} = req.body;
  try {
    const exists = await User.findOne({
      where:{username:username}
    })
    if (exists === null) {
     res.status(404).json({message:'Usuario no encontrado'})
    }
    if (exists.pass !== pass) {
      res.status(404).json({ message: "Contraseña incorrecta" });
    }else{
      const tokenSession = await tokenSign(exists);
      res.json({data:exists,tokenSession})
    }

  } catch (error) {
    res.status(500).json({message:error.message});
  }
}
const getInfo = async(req,res)=>{
  const {id} = req.body;
  try {
      const userInfo = await sequelize.query(userInfoQuery + id,{type:QueryTypes.SELECT}) ;
      res.json(userInfo);
  } catch (error) {
    console.log(error);
  }

}

module.exports = {
  init,
 login,
 getInfo
};