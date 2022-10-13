const db = require("../models");
const productosFerreteria = db.productosFerreteria;

exports.findAll = async (req, res) => {
  const respuesta = await productosFerreteria.findAll({
    // where: { std_sexo: req.query.sexo },
    raw: true,
  });
  res.send(respuesta);
};

exports.create = async (req, res) => {
  try {
    const lista = {
      prf_nombre: req.body.nombre,
      prf_cantidad: req.body.cantidad,
      prf_descripcion: req.body.descripcion,
      prf_nombreCorto: req.body.nombreCorto,
    };
    const respuesta = await productosFerreteria.create(lista);
    res.send(respuesta);
  } catch (err) {
    res
      .status(500)
      .send({ mensaje: err.message || "Se presento error insertando" });
  }

  //   estudiantes.create(lista).then((data) => {
  //       res.send(data);
  //     }).catch((err) => {
  //       res.status(500).send({mensaje:err.message || "Se presento error insertando"});
  //     });
};
