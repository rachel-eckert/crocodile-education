const Sequelize = require("sequelize");
const db = require("../db");

const Species = db.define("species", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  scientificName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Species;
