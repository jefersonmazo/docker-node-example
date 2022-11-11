module.exports = (app) => {
  const productosFerreteria = require("../controllers/productosFerreteria.controller");
  const router = require("express").Router();
  router.get("/productosFerreteria/consultar", productosFerreteria.findAll);
  router.post("/productosFerreteria/crear", productosFerreteria.create);
  router.get("/test", function (req, res) {
    res.send({
        nodo: process.env.MY_NODE_NAME,
        pod: process.env.MY_POD_NAME
    });
  });
  app.use("/api", router);

};
