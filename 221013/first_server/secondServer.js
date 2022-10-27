"use strict";

// require http from Node
const http = require("http");

// 3306 - mysql
// 80 - apache
const port = 3001;
const host = "localhost";

const person = require("./person.json");

const server = http.createServer((request, response) => {
  /* response.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  }); */
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  /* response.write("<h1>Hello!</h1>");
  response.end(); */
  // Always must end response, otherwise the browser
  // will be waiting and will time out
  response.end(JSON.stringify(person));
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is serving...`)
);
