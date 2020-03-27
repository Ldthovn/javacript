var readlineSync = require("readline-sync");
var fs = require("fs");

var data = {};
data.students = [];

while (true) {
  var options = readlineSync.question("what is your option?");
  if (options == 1) {
    console.log(fs.readFileSync("./data.json", { encoding: "utf8" }));
  }
  if (options == 2) {
    let myClassmates = {};

    myClassmates.name = readlineSync.question("name?");
    myClassmates.gender = readlineSync.question("gender?");
    myClassmates.age = readlineSync.question("age?");
    myClassmates.grade = readlineSync.question("grade?");

    data.students.push(myClassmates);
    fs.writeFileSync("./data.json", JSON.stringify(data));
  }
  if (options == 3) {
    break;
  }
}
