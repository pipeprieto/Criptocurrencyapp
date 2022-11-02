const app = require('../app');
const routes = app.Router();
const {getUser,getPaises,getCrypto,addGestora,login, addCrypto}  = require("../controllers/controllers");

routes
    .get("/cryptos",getCrypto)
    .get("/user",getUser)
    .get("/paises",getPaises)
    .post("/addcrypto",addCrypto)
    .post("/addgestora",addGestora)
    .post("/login",login)