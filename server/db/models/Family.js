const Sequelize = require("sequelize");
const db = require("../db");

const Family = db.define("family", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  about: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Family;
