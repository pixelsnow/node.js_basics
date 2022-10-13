"use strict";

const { getAllCars, getAllModels, getCar } = require("./carStorage");

console.log(getAllCars());
console.log(`\nAll available models: \n\t${getAllModels().join("\n\t")}`);
console.log(getCar("model", "Fast GT"));
console.log(getCar("licence", "A-1"));
console.log(getCar(0, 0));
console.log(getCar("model"));
