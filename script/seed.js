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
    imageUrl:
      "https://imgs.mongabay.com/wp-content/uploads/sites/20/2018/10/26103708/1024px-Crocodylus_cataphractus_faux-gavial_dAfrique2.jpg",
    description:
      "It was once lumped into the same species as the West African slender-snouted crocodile, but two studies led to it being separated. There is little conservation data, though it was considered critically endangered when part of the other species. It feeds mostly on fish.",
    location: "Central Africa and South Sudan",
    familyId: croc.id,
  });
  const americanCroc = await Species.create({
    name: "American Crocodile",
    scientificName: "Crocodylus acutus",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg",
    description:
      "It is one of the largest crocodile species. It is the only species other than the saltwater crocodile to be found living and thriving in saltwater. They can be found in places without freshwater sources, but can also be found in freshwater.",
    location: "Southern Florida, the Carribbean, and northern South America",
    familyId: croc.id,
  });
  const halls = await Species.create({
    name: "Hall's New Guinea Crocodile",
    scientificName: "Crocodylus halli",
    imageUrl:
      "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CrocodileSpeciesField_0927.jpg?itok=99XdboPK",
    description:
      "It was originally thought to be a population of the New Guinea crocodile, but it was ultimately found to be a distinct species. Crocodiles at a zoo in Florida were thought to be of the species novaeguinae, but were actually found to be halli during research on the two species.",
    location: "Southern half of New Guinea",
    familyId: croc.id,
  });
  const orinoco = await Species.create({
    name: "Orinoco Crocodile",
    scientificName: "Crocodylus intermedius",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/OrinocoCrocodile.jpg",
    description:
      "It has a long snout that is narrower than the similar looking American crocodile. It is the largest predator in the Americas. It is an apex predator, and has even been found to eat caimans. It is closely related to the Nile crocodile despite the large difference in range.",
    location: "Orinoco river basin in Colombia and Venezuela",
    familyId: croc.id,
  });
  const fresh = await Species.create({
    name: "Freshwater Crocodile",
    scientificName: "Crocodylus johnstoni",
    imageUrl:
      "https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/full/1.25x1/freshwater-crocodile-at-lone-pine-koala-sanctuary.webp",
    description:
      "It is much less aggressive than its saltwater counterpart. Though it is tolerant to saltwater, it cannot compete with saltwater crocodiles. With this, freshwater crocodiles are often found in locations saltwater crocodiles cannot, or will not, go, like arid and rocky areas.",
    location: "Northern Australia",
    familyId: croc.id,
  });
  const philippine = await Species.create({
    name: "Philippine Crocodile",
    scientificName: "Crocodylus mindorensis",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f95e07565cf981a7d24ed98/1638768119404-27EADYN4XQ10L7MEKEK3/10.+Recent+Philippine+crocodile+natural+breeding++for+next+repatriation+-+mother+Mindo+with+four+young%2C+July+2021.+A.+Rauhaus.jpg",
    description:
      "It was considered a subspecies of the New Guinea crocodile until 1989. It is a small, freshwater crocodile. It eats ailing fish more often than healthy fish. It is critically endangered partly due to unsafe fishing methods. The most notable fishing method is blast fishing.",
    location: "The Philippines",
    familyId: croc.id,
  });
  const morelet = await Species.create({
    name: "Morelet's Crocodile",
    scientificName: "Crocodylus moreletii",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Crocodile_de_Morelet.jpeg",
    description:
      "It is smaller than other species of crocodiles, but are very fast runners. Despite the smaller size, it is very strong and very aggressive. There are documented attacks on humans. These attacks are thought to have been predatory rather than defensive in nature.",
    location: "Eastern Mexico",
    familyId: croc.id,
  });
  const nile = await Species.create({
    name: "Nile Crocodile",
    scientificName: "Crocodylus niloticus",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NileCrocodile.jpg/1200px-NileCrocodile.jpg",
    description:
      "It is the second largest crocodile and is usually found in freshwater habitats. It is a social species and have been known to share basking spots and large prey. It is one of the most dangerous species of crocodiles and is responsible for hundreds of human deaths yearly.",
    location: "Sub-saharan Africa",
    familyId: croc.id,
  });
  const newguinea = await Species.create({
    name: "New Guinea Crocodile",
    scientificName: "Crocodylus novaeguineae",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Buaya_Irian_Crocodylus_novaeguineae_Bandung_Zoo.JPG",
    description:
      "It is usually found in freshwater. If it is in salt or brackish water, it never competes with the saltwater crocodile. It is agile and can lunge upwards into the air to catch bats and flying birds. Once overhunted for its skin, conservation measures have since been put in place.",
    location: "Northern half of New Guinea",
    familyId: croc.id,
  });
  const mugger = await Species.create({
    name: "Mugger Crocodile",
    scientificName: "Crocodylus palustris",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/PK_Kirthar_NP_asv2020-02_img25.jpg",
    description:
      "It has the broadest snout of all living crocodiles. When faced with extreme temperatures, it digs burrows to retreat into. It has been documented using lures to hunt birds. It is among the the first reptile species recorded using tools.",
    location: "Iran, Pakistan, Nepal, India, and Sri Lanka",
    familyId: croc.id,
  });
  const saltwater = await Species.create({
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    imageUrl:
      "https://cdn.britannica.com/55/234355-050-6B07C130/Saltwater-crocodile.jpg",
    description:
      "It is the largest living reptile. It is a large hypercarnivorous apex predator. It is known to prey on any animal that enters their territory, including humans. It has the strongest bite of any living animal. It was hunted for its meat, eggs, and skin, but is now a protected species in many countries.",
    location: "Northern Australia coastline and southern Asia coastline",
    familyId: croc.id,
  });
  const cuban = await Species.create({
    name: "Cuban Crocodile",
    scientificName: "Crocodylus rhombifer",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Crocodylus_Rhombifer.JPG",
    description:
      "It is a critically endanger species and is only found in two locations in Cuba. It has been observed to exhibit pack hunting behavior. Due to this, it is usually kept singly in captivity, as they predated on prehistoric megafauna. It has exhibit signs of highly intelligent behavior.",
    location: "Cuba",
    familyId: croc.id,
  });
  const siamese = await Species.create({
    name: "Siamese Crocodile",
    scientificName: "Crocodylus siamensis",
    imageUrl:
      "https://www.panamleathers.com/hs-fs/hub/152878/file-3136363162-jpg/images/siamese_croc_1.jpg",
    description:
      "It is criticaly endangered due to habitat loss and illegal capture. It is a less aggressive species of crocodile, with only 4 confirmed attacks on humans. It is heavily bred in captivity, but reported to have fewer than 1000 adults remaining in the wild.",
    location: "Indonesia, Cambodia, and other south Asian countries",
    familyId: croc.id,
  });
  const westafrican = await Species.create({
    name: "West African Crocodile",
    scientificName: "Crocodylus suchus",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Bazoule_sacred_crocodiles_MS_6709cropped.JPG",
    description:
      'It is notably less aggressive than the Nile crocodile. Attacks on humans, including fatal ones, have been recorded nonetheless. It received wide recognition as its own valid species in 2011. In 2015, a study found that some "Nile Crocodiles" in US zoos were actually West African crocodiles.',
    location: "West and central Africa",
    familyId: croc.id,
  });
  const westslender = await Species.create({
    name: "West African Slender-Snouted Crocodile",
    scientificName: "Mecistops cataphractus",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Crocodylus_cataphractus_faux-gavial_d%27Afrique2.JPG",
    description:
      "It is considered Critically Endangered, as it is grouped with the Central African species. It became its own species separate from the Central African slender-snouted crocodile after studies in 2014 and 2018. They diverged 6.5-7.5 million years ago.",
    location: "West Africa",
    familyId: croc.id,
  });
  const dwarf = await Species.create({
    name: "Dwarf Crocodile",
    scientificName: "Osteolaemus tetraspis",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Crocodile_nain_aquarium_porte_dor%C3%A9e_Paris.JPG",
    description:
      "It is the smallest true crocodile. Unlike other crocodiles, it is not known to bask in the sun. It is timid and mainly nocturnal. It is a generalist predator and has been recorder feeding on a variety of small animals. It burrows during the day to hide and rest.",
    location: "Western central Africa",
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
