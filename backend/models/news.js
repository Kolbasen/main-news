const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      shortHeader: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      header: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tags: {
        type: Sequelize.TEXT,
        allowNull: false
      }
})

const Photo = sequelize.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  filename: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

News.hasOne(Photo, { onDelete: "cascade"})

module.exports = {
    News,
    Photo
}