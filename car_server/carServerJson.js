"use strict";

const http = require("http");

const { port, host } = require("./config.json");

const storage = require("./carStorage");

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(
    `http://${req.headers.host}${req.url}`
  );
  let resultJson = "";
  if (pathname === "/cars") {
    resultJson = storage.getAllCars();
  } else if (pathname === "/cartypes") {
    resultJson = storage.getAllModels();
  } else if (pathname === "/search/bylicence") {
    const value = searchParams.get("value");
    resultJson = storage.getCar("licence", value);
  } else if (pathname === "/search/bymodel") {
    const value = searchParams.get("value");
    resultJson = storage.getCar("model", value);
  } else {
    resultJson = "Error";
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(resultJson));
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running...`)
);
