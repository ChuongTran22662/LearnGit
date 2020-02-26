function Cat() {
    this.dead = true;
}
Cat.prototype.die = function () {
    this.dead = false;
}

module.exports = Cat;