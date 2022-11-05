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
const {checkAuth} = require("../middleware/auth");

routes
  .get("/api/v1", init)
  .get("/api/v1/userInfo", checkAuth, getInfo)
  .get("/api/v1/countryInfo", checkAuth, getCountryByCodInfo)
  .get("/api/v1/countries", checkAuth, getCountriesInfo)
  .get("/api/v1/allowedCryptos", checkAuth, getAllowedCryptos)
  .get("/api/v1/allowedUserCryptos", checkAuth, getAllowedUserCryptos)
  .post("/api/v1/addCrypto", checkAuth, addCrypto)
  .post("/api/v1/login", login);

module.exports = routes;