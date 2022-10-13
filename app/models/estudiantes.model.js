const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const estudiantes = sequelize.define(
    "estudiantes",
    {
      std_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      std_nombre: {
        type: Sequelize.STRING(20),
      },
      std_edad: {
        type: Sequelize.INTEGER,
      },
      std_sexo: {
        type: Sequelize.STRING(1),
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      updatedAt: "std_updated",
      createdAt: "std_created",
    }
  );
  return estudiantes;
};
