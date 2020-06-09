const Proyecto = require("../models/Proyecto");

exports.home = (req, res, next) => {
    res.send("Principal");
  };

  exports.otro = (req, res, next) => {
    res.send(" Endpoint Secundario");
  };