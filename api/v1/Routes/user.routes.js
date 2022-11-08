const express = require('express');
const routes = express.Router();
const {
  login,
  init,
  getInfo,
  getCountryByCodInfo,
  getCountriesInfo,
  getAllowedCryptos,
  addCrypto,
  getAllowedUserCryptos,
} = require("../controllers/user.controllers");
//const {checkAuth} = require("../middleware/auth");

routes
  .get("/api/v1", init)
  .get("/api/v1/userInfo", getInfo)
  .get("/api/v1/countryInfo", getCountryByCodInfo)
  .get("/api/v1/countries", getCountriesInfo)
  .get("/api/v1/allowedCryptos",  getAllowedCryptos)
  .get("/api/v1/allowedUserCryptos",  getAllowedUserCryptos)
  .post("/api/v1/addCrypto",  addCrypto)
  .post("/api/v1/login", login);

module.exports = routes;