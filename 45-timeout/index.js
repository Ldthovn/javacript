// setTimeout
// clearTimeout
// setTimeOut(fn, ms); // milliseconds

var done = function() {
  console.log("Finish");
};
console.log("Start");
var timeoutId = setTimeout(done, 1000);
console.log("Done");
clearTimeout(timeoutId);
