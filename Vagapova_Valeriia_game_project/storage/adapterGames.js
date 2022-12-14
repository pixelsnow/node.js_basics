"use strict";

const adapt = (item) =>
  Object.assign(item, { number: +item.number, year: +item.year });

module.exports = { adapt };
