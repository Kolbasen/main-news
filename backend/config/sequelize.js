const Sequelize = require("sequelize");
const sequelize = new Sequelize("mainnews", "postgres", "1234", {
  dialect: "postgres"
});

module.exports = sequelize;