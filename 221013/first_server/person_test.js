"use strict";

// Automatically transformed into a JS object
const person = require("./person.json");
// require makes the json static/constant while the program is executing

console.log(person);
console.log(
  `${person.firstname}, ${person.lastname}, ${person.age}, ${person.member}`
);
console.log(person["age"]);

let fieldname = "age";
console.log(person[fieldname]);
fieldname = "member";
console.log(person[fieldname]);
fieldname = "firstname";
console.log(person[fieldname]);

function print(fieldname) {
  console.log(person[fieldname]);
}
console.log("###########");
print("age");
print("firstname");

function print2(fieldname) {
  if (fieldname === "age") console.log(person.age);
  else if (fieldname === "firstname") console.log(person.firstname);
}

console.log("###########");
print2("age");
print2("firstname");
