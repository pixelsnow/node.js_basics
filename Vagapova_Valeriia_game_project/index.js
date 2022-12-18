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
const { render } = require("ejs");
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
    title: "Find a game",
    header1: "Find a game",
    action: "/find_game_request",
  });
});

app.post("/find_game_request", (req, res) => {
  if (!req.body) return res.sendStatus(500);
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
  res.render("gameFormPage", {
    title: "Insert a new game",
    header1: "Insert a new game",
    action: "/insert_game_request",
    number: { value: "", readonly: "" },
    name: { value: "", readonly: "" },
    genre: { value: "", readonly: "" },
    rating: { value: "", readonly: "" },
    year: { value: "", readonly: "" },
  });
});

app.post("/insert_game_request", (req, res) => {
  if (!req.body) return res.sendStatus(500);
  dataStorage
    .insert(req.body)
    .then((status) => sendStatusPage(res, status))
    .catch((err) => sendErrorPage(res, err));
});

app.get("/update_game", (req, res) => {
  res.render("gameFormPage", {
    title: "Update a game",
    header1: "Update a game",
    action: "/load_game_to_update",
    number: { value: "", readonly: "" },
    name: { value: "", readonly: "readonly" },
    genre: { value: "", readonly: "readonly" },
    rating: { value: "", readonly: "readonly" },
    year: { value: "", readonly: "readonly" },
  });
});

app.post("/load_game_to_update", (req, res) => {
  if (!req.body) return res.sendStatus(500);
  dataStorage
    .getOne(req.body[key])
    .then((game) => {
      res.render("gameFormPage", {
        title: "Update a game",
        header1: "Update a game",
        action: "/update_game_request",
        number: { value: game[key], readonly: "readonly" },
        name: { value: game.name, readonly: "" },
        genre: { value: game.genre, readonly: "" },
        rating: { value: game.rating, readonly: "" },
        year: { value: game.year, readonly: "" },
      });
    })
    .catch((err) => sendErrorPage(res, err));
});

app.post("/update_game_request", (req, res) => {
  if (!req.body) return res.sendStatus(500);
  dataStorage
    .update(req.body)
    .then((status) => sendStatusPage(res, status))
    .catch((err) => sendErrorPage(res, err));
});

app.get("/delete_game", (req, res) => {
  res.render("getOneItemPage", {
    title: "Delete game",
    header1: "Delete game",
    action: "/delete_game_request",
  });
});

app.post("/delete_game_request", (req, res) => {
  if (!req.body) return res.sendStatus(500);
  dataStorage
    .remove(req.body[key])
    .then((status) => sendStatusPage(res, status))
    .catch((err) => sendErrorPage(res, err));
});

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
