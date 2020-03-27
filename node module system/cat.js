function Cat() {
  this.eated = [];
}

Cat.prototype.eat = function(mouse) {
  this.eated.push(mouse);
  mouse.die();
};

module.exports = Cat;
