"use strict";

const persons = require("./person.json");

function search(key, value) {
  if (key && value) {
    return persons.filter((person) => person[key] == value);
  } else return persons;
}

module.exports = { search };
