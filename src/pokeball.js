var Pokeball = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.setClass('pokeball');
};

Pokeball.prototype = Object.create(Dancer.prototype);
Pokeball.prototype.constructor = Dancer;
Pokeball.prototype.oldStep = Dancer.prototype.step;
Pokeball.prototype.step = function(){
  //move upward, remove if it exceeds the top fo the page
  this.oldStep();
  this.top -= 10;
  this.setPosition(this.top, this.left);
  if (this.top < 0){
    this.$node.remove();
    window.pokeballs.shift();
  }
};
