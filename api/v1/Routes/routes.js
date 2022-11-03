const app = require('../app');
const routes = app.Router();
const {getUser,getPaises,getCrypto,addGestora,login, addCrypto,init}  = require("../controllers/controllers");

routes
    .get("/",init)
    .get("/cryptos",getCrypto)
    .get("/user",getUser)
    .get("/paises",getPaises)
    .post("/addcrypto",addCrypto)
    .post("/addgestora",addGestora)
    .post("/login",login)

module.exports = routes;