const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const productosFerreteria = sequelize.define(
    "productosFerreteria",
    {
      prf_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      prf_nombre: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      prf_cantidad: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      prf_descripcion: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      prf_nombreCorto: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      underscored: false,
      updatedAt: "prf_updated",
      createdAt: "prf_created",
    }
  );
  return productosFerreteria;
};
