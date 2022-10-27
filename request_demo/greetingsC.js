"use strict";

const http = require("http");

const { host, port } = require("./config.json");

const server = http.createServer((req, res) => {
  // Without curly brackets it would take the whole object,
  // like this it takes only searchParams
  let { searchParams } = new URL(`http://${req.headers.host}${req.url}`);
  // Version with ternary operator
  const message = searchParams.has("name")
    ? searchParams.get("name")
    : "stranger";
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>Hi ${userName}!</h1>`);
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running...`)
);
