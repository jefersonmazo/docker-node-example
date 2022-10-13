module.exports = (app) => {
  const productosFerreteria = require("../controllers/productosFerreteria.controller");
  const router = require("express").Router();
  router.get("/productosFerreteria/consultar", productosFerreteria.findAll);
  router.post("/productosFerreteria/crear", productosFerreteria.create);
  app.use("/api", router);
};
