"use strict";

const path = require("path");

const { readStorage, writeStorage } = require("./fileReaderAndWriter");

const { key, adapterFile, storageFile } = require("./storageConfig");

const { adapt } = require(adapterFile);

const storageFilePath = path.join(__dirname, storageFile);

const getAllFromStorage = async () => readStorage(storageFile);

getAllFromStorage().then(console.log).catch(console.log);
