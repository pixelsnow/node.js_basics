"use strict";

const path = require("path");

const { readStorage, writeStorage } = require("./fileReaderAndWriter");

const { key, adapterFile, storageFile } = require("./storageConfig");

const { adapt } = require(adapterFile);

const storageFilePath = path.join(__dirname, storageFile);

const getAllFromStorage = async () => readStorage(storageFilePath);

const getOneFromStorage = async (keyValue) => {
  const allData = await readStorage(storageFilePath);
  return allData.find((item) => item[key] == keyValue) || null;
};

const insertIntoStorage = async (newObject) => {
  const allData = await readStorage(storageFilePath);
  allData.push(newObject);
  return await writeStorage(storageFilePath, allData);
};

const updateStorage = async (updatedObject) => {
  const allData = await readStorage(storageFilePath);
  const object = allData.find((item) => item[key] == updatedObject[key]);
  if (!object) return false;
  else {
    Object.assign(object, adapt(updatedObject));
    return await writeStorage(storageFilePath, allData);
  }
};

const removeFromStorage = async (keyValue) => {
  const allData = await readStorage(storageFilePath);
  const objectIndex = allData.findIndex((item) => item[key] == keyValue);
  if (objectIndex < 0) return false;
  allData.splice(objectIndex, 1);
  return await writeStorage(storageFilePath, allData);
};

module.exports = {
  getAllFromStorage,
  getOneFromStorage,
  insertIntoStorage,
  updateStorage,
  removeFromStorage,
};
