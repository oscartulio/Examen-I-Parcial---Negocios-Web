const express = require("express");

const app = express();


const routes = require("./routes");


app.use("/", routes());

app.listen(9000, () =>{
    console.log('Servidor Ejucutandose satisfactoriamente en el puerto 9000');
});

