"use strict";

const { read } = require("./library/utilities");

// Printing info about ice cream storage
read("./iceCreamStorage/iceCreams.json")
  .then((result) => console.log(result.fileData, result.mime))
  .catch((err) => console.log(err));

// Printing this file
const filePath = "./testUtilities.js";
read(filePath).then(console.log).catch(console.log);
