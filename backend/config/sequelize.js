const Sequelize = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   // host: process.env.DB_HOST,
//   // port: process.env.DB_PORT,
//   dialect: "postgres",
//   protocol: "postgres",
//   ssl: false,
//   logging:  false, //false

// //   dialectOptions: {
// //     ssl: true
// // },

// pool: {
//     max: 20,
//     min: 0,
//     idle: 5000
// }
// });

const sequelize = new Sequelize('mainnews', 'postgres', '1234', {
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  dialect: "postgres",
  protocol: "postgres",
  ssl: false,
  logging:  false, //false

//   dialectOptions: {
//     ssl: true
// },

pool: {
    max: 20,
    min: 0,
    idle: 5000
}
});

module.exports = sequelize;