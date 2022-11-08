const User = require('../models/User');
const UsersCryptos = require('../models/UsersCryptos');
const {tokenSign} = require('../helpers/generateToken');
const {
  userInfoQuery,
  allowedCryptosByCountry,
  countryByCodeInfo,
  countriesInfo,
  allowedUserCryptos,
} = require("../../../database/querys");
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
  const {username} = req.headers;
  try {
      const userInfo = await sequelize.query(userInfoQuery + `'${username}'`, {
        type: QueryTypes.SELECT,
      }); ;
      if (userInfo !== null) {
        res.json(userInfo);
      }else{
        res.status(404).json({ message: "Usuario no encontrado" });
      }
      
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

const getCountryByCodInfo = async(req,res)=>{
  const {paisCod} = req.body;
  try {
    const countryInfo = await sequelize.query(countryByCodeInfo + paisCod, {
      type: QueryTypes.SELECT,
    });
    if (countryInfo !== null) {
      res.json(countryInfo);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getCountriesInfo = async(req,res)=>{
  try {
    const countries = await sequelize.query(countriesInfo,{type:QueryTypes.SELECT});
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllowedCryptos = async(req,res)=>{
  const {pais_id} = req.body
  try {
    const cryptos = await sequelize.query(allowedCryptosByCountry + pais_id, {
      type: QueryTypes.SELECT,
    });
    res.json(cryptos)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllowedUserCryptos = async(req,res)=>{
  const {pais_id,username} = req.headers;
  const query = allowedUserCryptos(pais_id,username);
  try {
  const allowed = await sequelize.query(query,{type:QueryTypes.SELECT});
  res.json(allowed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const addCrypto = async(req,res)=>{
  const{id,username,cod,crypto_id} = req.body;
  try {
    const created = await UsersCryptos.create({
      id,
      username,
      cod,
      crypto_id
    })
    res.json({message:"Cryptomoneda agregada correctamente"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  init,
  login,
  getInfo,
  getCountryByCodInfo,
  getCountriesInfo,
  getAllowedCryptos,
  addCrypto,
  getAllowedUserCryptos,
};