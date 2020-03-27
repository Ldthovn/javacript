var Mouse = require("./mouse");
var Cat = require("./cat");

var jerry = new Mouse("Orange");
var mikey = new Mouse("White-Black");

console.log("jerry :", jerry);
console.log("mikey :", mikey);

var tom = new Cat();
tom.eat(jerry);
tom.eat(mikey);
console.log("tom :", tom);
