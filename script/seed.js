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
  const american = await Species.create({
    name: "American Alligator",
    scientificName: "Alligator mississippiensis",
    imageUrl:
      "https://npr.brightspotcdn.com/legacy/sites/wgcu/files/201504/american_alligators.jpg",
    description:
      "It is the largest reptile in North America. They can sometimes be found in brackish water. It is the second largest species in the family Alligatoridae. They are apex predators.",
    location: "Southeastern United States",
    familyId: alligator.id,
  });
  const chinese = await Species.create({
    name: "Chinese Alligator",
    scientificName: "Alligator sinensis",
    imageUrl:
      "https://www.peoriazoo.org/wp-content/uploads/2014/04/99chinesealligator.jpg",
    description:
      "It is among the smallest species of crocodilians. They brumate in burrows in the winter. It is a critically endangered species, partially because of habitate destruction. The population was about 300 as of 2017.",
    location: "A small set of regions in eastern China",
    familyId: alligator.id,
  });
  const spectacled = await Species.create({
    name: "Spectacled Caiman",
    scientificName: "Caiman crocodilus",
    imageUrl:
      "https://www.activewild.com/wp-content/uploads/2018/05/spectacled-caiman.jpg",
    description:
      "It has 4 subspecies. It is considered small to medium sized. The name 'spectacled' comes from a bony ridge between its eyes, making it look like it is wearing spectacles.",
    location: "Northern South America",
    familyId: alligator.id,
  });
  const broad = await Species.create({
    name: "Broad-snouted Caiman",
    scientificName: "Caiman latirostris",
    imageUrl:
      "https://animalcorner.org/wp-content/uploads/2015/02/broad-snouted-caiman-1.jpg",
    description:
      "As the name suggests, they have a broad snout, which is used to rip through vegetation of marshes to reach its food source. It is usually found in marshes, swamps, and mangroves.",
    location: "Eastern and central South America",
    familyId: alligator.id,
  });
  const yacare = await Species.create({
    name: "Yacare Caiman",
    scientificName: "Caiman yacare",
    imageUrl: "https://pbs.twimg.com/media/FcudYiNWAAIFcUE.jpg:large",
    description:
      "It was thought to be a subspecies of the Spectacled Caiman, but are now considered separate due to geographical differences. It was heavily hunted in the 1980s, but trading regulations ensured its survival.",
    location: "Argentina, Bolivia, Brazil, and Paraguay",
    familyId: alligator.id,
  });
  const black = await Species.create({
    name: "Black Caiman",
    scientificName: "Melanosuchus niger",
    imageUrl:
      "https://cdn.britannica.com/72/127372-050-32EDFCAB/Black-caiman.jpg",
    description:
      "It is the largest species in the family Alligatoridae. It has dark coloration as an adult, as the name implies. It is an apex predator and potentially a keystone species.",
    location: "Brazil, Peru, Bolivia, and Colombia",
    familyId: alligator.id,
  });
  const cuvier = await Species.create({
    name: "Cuvier's Dwarf Caiman",
    scientificName: "Paleosuchus palpebrosus",
    imageUrl:
      "https://capronparkzoo.com/wp-content/uploads/2019/02/caiman-1-900x500.jpg",
    description:
      "It is the smallest species of Crocodilian. An adult typically only weighs 10-15 pounds. It is suggested that different populations of this species are genetically different, which may make them a cryptic species complex.",
    location: "Northeastern South America",
    familyId: alligator.id,
  });
  const smooth = await Species.create({
    name: "Smooth-fronted Caiman",
    scientificName: "Paleosuchus trigonatus",
    imageUrl:
      "https://www.nature-myview.com/uploads/2/8/3/6/28363143/8404942_orig.jpg",
    description:
      "It is similar in looks to the spectacled caiman, but lacks the bony ridge between the eyes. It eats terrestrial animals, such as porcupines and lizards, rather than fish like other caiman species.",
    location: "Amazon and Orinoco Basins in South America",
    familyId: alligator.id,
  });
  const ghar = await Species.create({
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Indian_Gharial_Crocodile_Digon3.JPG/800px-Indian_Gharial_Crocodile_Digon3.JPG",
    description:
      "It is among the longest of all crocodilians. It is critically endangered because of habitat loss and depletion of fish resources. It is locally instinct in Pakistan, Bhutan, and Myanmar. Its long, narrow snout makes it well adapted to catching fish.",
    location: "India, Nepal, and Bangladesh",
    familyId: gharial.id,
  });
  const falseGhar = await Species.create({
    name: "False Gharial",
    scientificName: "Tomistoma schlegelii",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Tomistoma_schlegelii_fg01.JPG",
    description:
      "Its snout broadens towards the base and is more similar to true crocodiles rather than gharials. Despite this, according to their DNA, they are a part of the family Gavialidae. It has the largest skull of any living crocodilian.",
    location: "Malaysia, Borneo, Sumatra, and Java",
    familyId: gharial.id,
  });
  const slender = await Species.create({
    name: "Central African Slender-Snouted Crocodile",
    scientificName: "Mecistops leptorhynchus",
    imageUrl: "",
    description:
      "It was once lumped into the same species as the West African slender-snouted crocodile, but two studies led to it being separated. There is little conservation data, though it was considered critically endangered when part of the other species. It feeds mostly on fish.",
    location: "Central Africa and South Sudan",
    familyId: croc.id,
  });
  const americanCroc = await Species.create({
    name: "American Crocodile",
    scientificName: "Crocodylus acutus",
    imageUrl: "",
    description:
      "It is one of the largest crocodile species. It is the only species other than the saltwater crocodile to be found living and thriving in saltwater. They can be found in places without freshwater sources, but can also be found in freshwater.",
    location: "Southern Florida, the Carribbean, and northern South America",
    familyId: croc.id,
  });
  const australian = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const cuban = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const dwarf = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const morelet = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const mugger = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const halls = await Species.create({
    name: "Hall's New Guinea Crocodile",
    scientificName: "Crocodylus halli",
    imageUrl: "",
    description: "",
    location: "Southern half of New Guinea",
    familyId: croc.id,
  });
  const newguinea = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "Southern half of New Guinea",
    familyId: croc.id,
  });
  const nile = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const west = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const orinoco = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const philippine = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const saltwater = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  const siamese = await Species.create({
    name: "",
    scientificName: "",
    imageUrl: "",
    description: "",
    location: "",
    familyId: croc.id,
  });
  console.log(`seeded successfully`);
}
//gharial
// const name = await Species.create({
//   name: "",
//   scientificName: "",
//   imageUrl: "",
//   description: "",
//   location: "",
//   familyId: alligator.id,
// });
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
