"use strict";

const { item, key } = require("./storageConfig.json");

const { capitaliseFirstLetter } = require("./helperFunctions");

const CODES = {
  PROGRAM_ERROR: 0,
  NOT_FOUND: 1,
  INSERT_OK: 2,
  NOT_INSERTED: 3,
  ALREADY_IN_USE: 4,
  UPDATE_OK: 5,
  NOT_UPDATED: 6,
  REMOVE_OK: 7,
  NOT_REMOVED: 8,
  INPUT_ERROR: 9,
};

const MESSAGES = {
  PROGRAM_ERROR: () => ({
    message: "Sorry! Error in our program",
    code: CODES.PROGRAM_ERROR,
    type: "error",
  }),
  NOT_FOUND: (keyValue) => ({
    message: `No ${item} found with ${key} ${keyValue}`,
    code: CODES.NOT_FOUND,
    type: "error",
  }),
  INSERT_OK: (keyValue) => ({
    message: `${capitaliseFirstLetter(item)} ${keyValue} was inserted`,
    code: CODES.INSERT_OK,
    type: "info",
  }),
  NOT_INSERTED: (keyValue) => ({
    message: `${capitaliseFirstLetter(item)} ${keyValue} was not inserted`,
    code: CODES.NOT_INSERTED,
    type: "error",
  }),
  ALREADY_IN_USE: (keyValue) => ({
    message: `${capitaliseFirstLetter(item)} ${keyValue} was already in use`,
    code: CODES.ALREADY_IN_USE,
    type: "error",
  }),
  UPDATE_OK: (keyValue) => ({
    message: `${capitaliseFirstLetter(item)} ${keyValue} was updated`,
    code: CODES.UPDATE_OK,
    type: "info",
  }),
  NOT_UPDATED: (keyValue) => ({
    message: `Data for ${item} ${keyValue} was not updated`,
    code: CODES.NOT_UPDATED,
    type: "error",
  }),
  REMOVE_OK: (keyValue) => ({
    message: `${capitaliseFirstLetter(item)} ${keyValue} was removed`,
    code: CODES.REMOVE_OK,
    type: "info",
  }),
  NOT_REMOVED: (keyValue) => ({
    message: `No ${item} found with ${key} ${keyValue}. Nothing removed`,
    code: CODES.NOT_REMOVED,
    type: "error",
  }),
  INPUT_ERROR: () => ({
    message: `Input error, please make sure that ${key} is not empty. No ${item} found.`,
    code: CODES.INPUT_ERROR,
    type: "error",
  }),
};

module.exports = { CODES, MESSAGES };
