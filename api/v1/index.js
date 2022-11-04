require("dotenv").config();
const app = require("./app");
const sequelize = require('../../database/database');
const userroutes = require('./Routes/user.routes');

const PORT = process.env.PORT || 3002;



const main = async ()=>{
    try {
        await sequelize.sync({force:false})
        console.log("Todos los modelos fueron sincronizados correctamente");
    } catch (error) {
        console.log(`Ha ocurrido un error ${error}`);
    }
}

//Rutas
app.use(userroutes);

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

main();
