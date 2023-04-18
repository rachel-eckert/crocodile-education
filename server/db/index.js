//this is the access point for all things database related!

const db = require("./db");
const Family = require("./models/Family");
const Species = require("./models/Species");
//associations could go here!
Family.hasMany(Species);
Species.belongsTo(Family);
module.exports = {
  db,
  Family,
  Species,
};
