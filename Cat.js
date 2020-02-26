<<<<<<< HEAD
function Cat() {
    this.dead = true;
    this.stomach = [];
}

Cat.prototype.die = function () {
    this.dead = false;
=======
function Cat(){
    console.log('This is a cat');
>>>>>>> parent of 7144199... add function die for cat
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}

module.exports = Cat;