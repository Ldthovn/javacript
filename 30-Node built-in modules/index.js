var fs = require("fs");

var text = fs.readFileSync("song.txt", { encoding: "utf8" });
console.log("text :", text);

fs.writeFileSync("song-2.txt", "I am Tho");