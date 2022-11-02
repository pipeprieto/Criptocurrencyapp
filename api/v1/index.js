require("dotenv").config();
const express = require("./app");
const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

