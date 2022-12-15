"use strict";

const { resolve } = require("path");
const { key } = require("./storageConfig.json");
const {
  getAllFromStorage,
  getOneFromStorage,
  insertIntoStorage,
  updateStorage,
  removeFromStorage,
} = require("./storageLayer");
const { CODES, MESSAGES } = require("./statusCodes");

module.exports = class DataStorage {
  get CODES() {
    return CODES;
  }

  getAll() {
    return getAllFromStorage();
  }

  getOne(keyValue) {
    return new Promise(async (resolve, reject) => {
      if (!keyValue) {
        reject(MESSAGES.INPUT_ERROR());
      } else {
        const item = await getOneFromStorage(keyValue);
        if (!item) {
          reject(MESSAGES.NOT_FOUND(keyValue));
        } else {
          resolve(item);
        }
      }
    });
  }

  insert(newItem) {
    return new Promise(async (resolve, reject) => {
      if (!newItem || !newItem[key]) {
        reject(MESSAGES.INPUT_ERROR());
      } else {
        const item = await getOneFromStorage(keyValue);
        if (item) {
          reject(MESSAGES.ALREADY_IN_USE(newItem.keyValue));
        } else {
          // Input is OK and key is not in use
          if (await insertIntoStorage(newItem)) {
            resolve(MESSAGES.INSERT_OK(newItem[key]));
          } else {
            reject(MESSAGES.NOT_INSERTED(newItem[key]));
          }
        }
      }
    });
  }

  update(updatedItem) {
    return new Promise(async (resolve, reject) => {
      if (!updatedItem || !updatedItem[key]) {
        reject(MESSAGES.INPUT_ERROR());
      } else {
        const item = await getOneFromStorage(keyValue);
        if (!item) {
          reject(MESSAGES.NOT_FOUND(updatedItem[key]));
        } else {
          // Input is OK and item with needed key is found
          if (await updateStorage(newItem)) {
            resolve(MESSAGES.UPDATE_OK(newItem[key]));
          } else {
            reject(MESSAGES.NOT_UPDATED(newItem[key]));
          }
        }
      }
    });
  }

  remove(keyValue) {
    return new Promise(async (resolve, reject) => {
      if (!keyValue) {
        reject(MESSAGES.INPUT_ERROR());
      } else {
        const item = await getOneFromStorage(keyValue);
        if (!item) {
          reject(MESSAGES.NOT_FOUND(keyValue));
        } else {
          if (await removeFromStorage(keyValue)) {
            resolve(MESSAGES.REMOVE_OK(keyValue));
          } else {
            reject(MESSAGES.NOT_REMOVED(keyValue));
          }
        }
      }
    });
  }
};
