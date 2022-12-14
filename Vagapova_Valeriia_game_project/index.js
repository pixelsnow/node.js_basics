"use strict";

const path = require("path");

const express = require("express");
const app = express();

const { host, port } = require("./serverConfig.json");

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
