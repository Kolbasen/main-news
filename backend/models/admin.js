const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Admin = sequelize.define('admin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
  })

module.exports = {
    Admin
}