require("dotenv").config();
const express = require("./app");
const app = express();
const sequelize = require('../../database/database');
const routes = require('./Routes/routes');
const User = require('./models/User');
const Gestora = require('./models/Gestora');
const Pais = require('./models/Pais');
const Crypto = require('./models/Crypto');

const PORT = process.env.PORT || 3002;

const main = async ()=>{
    try {
        await sequelize.sync({force:true})
        console.log("Todos los modelos fueron sincronizados correctamente");
    } catch (error) {
        console.log(`Ha ocurrido un error ${error}`);
    }
}

//Rutas
app.use("/",routes);

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

main();
