"use strict";

const {
  getAllFlavours,
  hasFlavour,
  getIceCream,
} = require("./iceCreamStorage/iceCreamFreezer");

getAllFlavours().then(console.log).catch(console.log);
hasFlavour("vanilla").then(console.log).catch(console.log);
getIceCream("x").then(console.log).catch(console.log);

// async option
async function test() {
  try {
    const result = await getIceCream("vanilla");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

test();
