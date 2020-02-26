function Dog(){
    this.stomach =[];
}

Dog.prototype.est = function(mouse){
    this.stomach.push(mouse)
}

module.export = Dog;