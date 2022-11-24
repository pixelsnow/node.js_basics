"use strict";

// First bring in express
const express = require("express");
// Create our app calling hte express function
const app = express();
// We need host and port
const port = 3000;
const host = "localhost";

// Parameters: root route, callback function. No need for content types
app.get("/", (req, res) => res.send("<h1>Hello world!</h1>"));

// Rather than rutting routes in if-elses we will put them in a structure

// The only thing left is futting the app to listen mode
app.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running...`)
);

// It's a bit cleaner than pure Node, no need to do res.end()
