const db = require("../models");
const estudiantes = db.estudiantes;

exports.findAll = async (req, res) => {
  const respuesta = await estudiantes.findAll({
    where: { std_sexo: req.query.sexo },
    raw: true,
  });
  res.send(respuesta);
};

exports.create = async (req, res) => {
  try {
    const lista = {
      std_nombre: req.query.nombre,
      std_edad: req.query.edad,
      std_sexo: req.query.sexo,
    };
    const respuesta = await estudiantes.create(lista);
    res.send(respuesta);
  } catch (error) {
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
