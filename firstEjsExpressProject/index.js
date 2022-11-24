"use strict";

const path = require("path");

const express = require("express");
const app = express();

// First we must say what's our template engine
app.set("view engine", "ejs");
// Telling where to find these views
app.set("views", path.join(__dirname, "pageTemplates"));

const { port, host } = require("./config.json");

const homePath = path.join(__dirname, "home.html");

app.get("/", (req, res) => res.sendFile(homePath));

// The action was "/login"
// Now this page sends something back
/* app.post("/login", (req, res) => res.send(`<h1>body is ${req.body}</h1>`)); */
// Before the callback the second argument will be called,
// It needs to be there to decode the form (?)
app.post("/login", express.urlencoded({ extended: false }), (req, res) => {
  /* res.send(`<h1>user is ${req.body.username}</h1>`); */
  // render *.ejs file name, it will be recognised just by name
  res.render("result", {
    title: "Your data",
    header1: "You sent these:",
    data: req.body,
  });
  // This is the same as if you give as data an object like this
  /* res.render("result", {
    title: "Your data",
    header1: "You sent these:",
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  }); */
});

// EJS templates come in handy here

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
