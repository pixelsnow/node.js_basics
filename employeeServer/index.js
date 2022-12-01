"use strict";

const path = require("path");

const express = require("express");
const app = express();

const { port, host, storage } = require("./serverConfig.json");

// There should ideally be error checking here
const DataStorage = require(path.join(
  __dirname,
  storage.storageFolder,
  storage.dataLayer
));

const dataStorage = new DataStorage();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// home page
const menuPath = path.join(__dirname, "menu.html");

app.get("/", (req, res) => res.sendFile(menuPath));

app.get("/all", (req, res) =>
  dataStorage
    .getAll()
    .then((data) => res.render("allPersons", { result: data }))
);

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
