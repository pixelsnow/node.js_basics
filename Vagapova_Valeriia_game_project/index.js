"use strict";

const path = require("path");

const {
  host,
  port,
  storage,
  pages,
  publicfiles,
  home,
} = require("./serverConfig.json");
const DataStorage = require(path.join(
  __dirname,
  storage.storageFolder,
  storage.dataLayer
));
const { item, key } = require("./storage/storageConfig.json");
const { sendErrorPage, sendStatusPage } = require("./helperFunctions");

const express = require("express");
const app = express();

const dataStorage = new DataStorage();

const pagesPath = path.join(__dirname, pages);
const publicPath = path.join(__dirname, publicfiles);
const homePath = path.join(__dirname, home);

app.set("view engine", "ejs");
app.set("views", pagesPath);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.get("/", (req, res) => res.sendFile(homePath));

app.get("/all", (req, res) => {
  dataStorage
    .getAll()
    .then((data) => res.render("getAllItemsPage", { result: data }));
});

app.get("/find_game", (req, res) => {
  res.render("getOneItemPage", {
    action: "/find_game",
  });
});

app.post("/find_game", (req, res) => {
  dataStorage
    .getOne(req.body[key])
    .then((data) =>
      res.render("gamePage", {
        result: data,
      })
    )
    .catch((err) => sendErrorPage(res, err));
});

app.get("/insert_game", (req, res) => {
  res.render("insertItemPage");
});

app.get("/update_game", (req, res) => {
  res.render("updateItemPage");
});

app.get("/delete_game", (req, res) => {
  res.render("deleteItemPage");
});

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
