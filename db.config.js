module.exports = {
  HOST: process.env.SECRET_HOST_DB,
  USER: process.env.SECRET_DATABASE_DB,
  PASSWORD: process.env.SECRET_USERNAME_DB,
  DB: process.env.SECRET_PASSWORD_DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
};
