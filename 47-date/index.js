// Date
// moment.js

var moment = require("moment");
// var now = new Date();
// var myBirthday = new Date(1998, 2, 8); // 8/3/1998

// // number of milliseconds from 1-1-1970 +7

// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment("2020-03-08 18:00");
console.log(now.fromNow());
