"use strict";

const fs = require("fs").promises;

const readStorage = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const writeStorage = async (fileName, data) => {
  try {
    // Space argument in JSON.stringify is set to 4 spaces indentation
    // Replacer argument is null, so all properties will be included in json
    // Specifying 'w' flag and 'utf8' encoding
    // is not necessary since it's the default for writeFile()
    await fs.writeFile(fileName, JSON.stringify(data, null, 4));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { readStorage, writeStorage };
