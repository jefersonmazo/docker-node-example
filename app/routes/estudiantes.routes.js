module.exports = (app) => {
  const estudiantes = require("../controllers/estudiantes.controller");
  const router = require("express").Router();
  router.get("/consultar", estudiantes.findAll);
  router.get("/create", estudiantes.create);
  app.use("/api", router);
};
