"use strict";

const http = require("http");

const { host, port } = require("./config.json");

const server = http.createServer((req, res) => {
  let { searchParams } = new URL(`http://${req.headers.host}${req.url}`);
  // My original version
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  let userName = "stranger";
  if (searchParams.has("name")) {
    userName = searchParams.get("name");
  }
  res.end(`<h1>Hi ${userName}!</h1>`);
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running...`)
);
