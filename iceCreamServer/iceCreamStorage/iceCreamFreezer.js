"use strict";

const path = require("path");

// Not nice to hard code this path, a better way would be to parametrise
const { read } = require("../library/utilities");

const jsonPath = path.join(__dirname, "iceCreams.json");

const getAllFlavours = async () => {
  try {
    // try to read data from json
    const data = await read(jsonPath);
    // we gave the name fileData outselves so it will be there
    const iceCreams = await JSON.parse(data.fileData);
    return Object.keys(iceCreams);
  } catch (err) {
    return [];
  }
};

const hasFlavour = async (flavour) => {
  try {
    const data = await read(jsonPath);
    const iceCreams = await JSON.parse(data.fileData);
    return Object.keys(iceCreams).includes(flavour);
  } catch (err) {
    return false;
  }
};

const getIceCream = async (flavour) => {
  try {
    const data = await read(jsonPath);
    const iceCreams = await JSON.parse(data.fileData);
    return iceCreams[flavour] || null;
  } catch (err) {
    return null;
  }
};

module.exports = { getAllFlavours, hasFlavour, getIceCream };
