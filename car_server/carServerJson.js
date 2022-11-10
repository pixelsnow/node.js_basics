"use strict";

const http = require("http");

const { port, host } = require("./config.json");

const storage = require("./carStorage");

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(
    `http://${req.headers.host}${req.url}`
  );

  // Decoding path
  const route = decodeURIComponent(pathname); // Decoding path

  let resultJson;
  if (route === "/cars") {
    resultJson = storage.getAllCars();
  } else if (route === "/cartypes") {
    resultJson = storage.getAllModels();
  } else if (route === "/search/bylicence") {
    const value = searchParams.get("value");
    resultJson = storage.getCar("licence", value);
  } else if (route === "/search/bymodel") {
    const value = searchParams.get("value");
    resultJson = storage.getCar("model", value);
  } else {
    resultJson = { message: "not found" };
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  // null - no filtering
  // 2 - indentation 2 spaces to make it look nice
  res.end(JSON.stringify(resultJson, null, 2));
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running...`)
);
