"use strict";

const cars = require("./cars.json");

console.log(cars);
console.log(cars[0]);
console.log(cars[0].model);
console.log(cars[cars.length - 1]);

for (const car of cars) {
  console.log(car.model);
}

console.log("----- task 1 - my solution -----");
cars
  .filter((car) => car.model === "Fast GT")
  .forEach((car) => console.log(car.licence));

console.log("----- Ilkka's solution -----");
for (const car of cars) {
  if (car.model === "Fast GT") console.log(car.licence);
}

console.log("----- Version that disregards case -----");
for (const car of cars) {
  if (car.model.toLowerCase() === "fast gt") console.log(car.licence);
}

console.log("----- Print all available models -----");
const models = [];
cars.forEach((car) => {
  if (!models.includes(car.model)) models.push(car.model);
});
console.log(`Available models: ${models.join(", ")}`);
