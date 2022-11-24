"use strict";

// Node path module
const path = require("path");

const express = require("express");
const app = express();

// Using an environment variable
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Creating the path that we need using Node path module
const homePath = path.join(__dirname, "home.html");
// Route for the second page
const pageBPath = path.join(__dirname, "pageB.html");
const pageCPath = path.join(__dirname, "pageC.html");

// Giving public the right to use these
// Marks the root folder for static resources,
// so now we can use it without writing "public"
app.use(express.static(path.join(__dirname, "public")));
// You can have multiple of these with different folders

// Sends our file back to the browser
app.get("/", (req, res) => res.sendFile(homePath));
app.get("/pageb", (req, res) => res.sendFile(pageBPath));
app.get("/pagec", (req, res) => res.sendFile(pageCPath));

app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is listening...`)
);
