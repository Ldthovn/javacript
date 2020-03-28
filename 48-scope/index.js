// scope
// 1. Global scope
// 2. Local scope

var a = 1;
var b = 2;

function ramdom() {
  var b = Math.ramdom();
  a = 3;
  console.log(b);
}

console.log(b);

ramdom();
console.log(a);
