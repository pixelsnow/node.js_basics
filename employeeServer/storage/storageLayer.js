"use strict";

const path = require("path");

const { storageFile } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readerWriter.js");

const storageFilePath = path.join(__dirname, storageFile);

const { adapt } = require("./employeeAdapter.js");

// console.log(storageFilePath);

async function getAllFromStorage() {
  // it's an async function so it will be returning an async function
  return readStorage(storageFilePath);
}

async function getFromStorage(id) {
  const test = await readStorage(storageFilePath);
  return test.find((item) => item.id == id) || null;
}

async function addToStorage(newEmployee) {
  const storageData = await readStorage(storageFilePath);
  storageData.push(adapt(newEmployee));
  return await writeStorage(storageFilePath, storageData);
}

// TESTING

// getAllFromStorage().then(console.log).catch(console.log);
// DOESNT WORK
// getFromStorage(2).then(console.log).catch(console.log);

addToStorage({
  id: "6",
  firstname: "Jess",
  lastname: "River",
  department: "Marketing",
  salary: "2000",
})
  .then(console.log)
  .catch(console.log);
