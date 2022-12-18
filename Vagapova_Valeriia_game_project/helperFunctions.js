"use strict";

const capitaliseFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length);

const sendErrorPage = (res, error, title = "Error", header1 = "Error") =>
  sendStatusPage(res, error, title, header1);

const sendStatusPage = (res, status, title = "Status", header1 = "Status") =>
  res.render("statusPage", { status, title, header1 });

module.exports = { capitaliseFirstLetter, sendErrorPage, sendStatusPage };
