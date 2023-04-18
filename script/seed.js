"use strict";

const { db, Family, Species } = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const alligator = await Family.create({
    name: "Alligatoroidea",
    about:
      "They have a broad snout. The fourth tooth of the lower jaw cannot be seen when the mouth is closed.",
  });
  const croc = await Family.create({
    name: "Crocodylidae",
    about:
      "They have a variety of snout shapes, but the fourth tooth of the lower jaw is visible when the mouth is closed.",
  });
  const gharial = await Family.create({
    name: "Gavialidae",
    about: "They have a long narrow snout, with an enlarged boss at the tip.",
  });
  const americanAlligator = await Species.create({
    name: "American Alligator",
    imageUrl:
      "https://npr.brightspotcdn.com/legacy/sites/wgcu/files/201504/american_alligators.jpg",
    description:
      "It is the largest reptile in North America. They can sometimes be found in brackish water (not as salty as true salt water, but not freshwater).",
    location: "Southeastern part of the United States",
    familyId: alligator.id,
  });

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
