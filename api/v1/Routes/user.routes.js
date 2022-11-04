const express = require('express');
const routes = express.Router();
const {login,init, getInfo}  = require("../controllers/user.controllers");
const {checkAuth} = require("../middleware/auth");

routes
  .get("/api/v1", init)
  .get("/api/v1/userInfo",checkAuth,getInfo)
  .post("/api/v1/login", login);

module.exports = routes;