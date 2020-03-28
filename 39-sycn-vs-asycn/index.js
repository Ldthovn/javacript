// Sync vs Async (Synchoronous vs Asynchronous)

var fs = require("fs");

// Sycn
console.log("Start");
var song1 = fs.readFileSync("./song1.txt", { encoding: "utf8" });
console.log(song1);
var song2 = fs.readFileSync("./song2.txt", { encoding: "utf8" });
console.log(song2);
console.log("End");

// Make coffee -> 5 minutes
// Wear clothes
// Making bed

// Sync (Dong bo hoa)
// |----------------------|---------------------|--------------|---->
// ^                      ^                     ^              ^
// Make coffe          Coffe done            Wear done        Done
//                     Wear clothes         Make bed
// Async (Khong dong bo)
// |---|----|--------------|------------------------------------------>
// ^   ^    ^              ^
// Make coffe             Done
//    Wear clothes        Done
//          Make bed      Done

// Async
console.log("Start");
fs.readFile("./song1.txt", { encoding: "utf8" }, function(err, data) {
  console.log(data);
});
console.log("End");
