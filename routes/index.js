const express = require("express");

const routes = express.Router();

const proyectosController = require("../controllers/proyectosController");


module.exports = function () {
    routes.get("/", proyectosController.home);
  
    routes.get("/otro", proyectosController.otro);
  
    return routes;
  };