"use strict";

const cars = require("./cars.json");

const getAllCars = () => cars;

const getAllModels = () => {
  const models = [];
  for (const car of cars) {
    if (!models.includes(car.model)) models.push(car.model);
  }
  return models;
};

const getCar = (key, value) => cars.filter((car) => car[key] === value);

module.exports = { getAllCars, getAllModels, getCar };
