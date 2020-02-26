
function Cat() {
    this.dead = true;
    this.stomach = [];
}

Cat.prototype.die = function () {
    this.dead = false;
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
}

module.export = Cat;