"use strict";

const path = require("path");

const { adapterFile, storageFile } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readerWriter.js");

const storageFilePath = path.join(__dirname, storageFile);

const { adapt } = require(path.join(__dirname, adapterFile));

// console.log(storageFilePath);

async function getAllFromStorage() {
  // it's an async function so it will be returning an async function
  return readStorage(storageFilePath);
}

async function getFromStorage(id) {
  /* const test = await readStorage(storageFilePath);
  return test.find((item) => item.id == id) || null; */
  return (
    (await readStorage(storageFilePath)).find((item) => item.id == id) || null
  );
}

async function addToStorage(newEmployee) {
  const storageData = await readStorage(storageFilePath);
  storageData.push(adapt(newEmployee));
  return await writeStorage(storageFilePath, storageData);
}

async function updateStorage(modifiedObject) {
  const storageData = await readStorage(storageFilePath);
  const oldObject = storageData.find((item) => item.id == modifiedObject.id);
  if (oldObject) {
    // if object found, update
    Object.assign(oldObject, adapt(modifiedObject));
    return await writeStorage(storageFilePath, storageData);
  } else {
    return false;
  }
}

// TESTING

// getAllFromStorage().then(console.log).catch(console.log);

//getFromStorage(2).then(console.log).catch(console.log);

/* addToStorage({
  id: "7",
  firstname: "Jess",
  lastname: "River",
  department: "Marketing",
  salary: "2000",
})
  .then(console.log)
  .catch(console.log);
 */

updateStorage({
  id: "3",
  firstname: "Jesse",
  lastname: "River",
  department: "Marketing",
  salary: "2000",
})
  .then(console.log)
  .catch(console.log);
