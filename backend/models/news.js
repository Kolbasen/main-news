const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false
      }
})
sequelize.sync().then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));

module.exports = {
    News,
}