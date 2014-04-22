var Pikachu = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.movingRight = true;
  this.setClass('pikachu');
};

Pikachu.prototype = Object.create(Dancer.prototype);
Pikachu.prototype.constructor = Dancer;
Pikachu.prototype.oldStep = Dancer.prototype.step;
Pikachu.prototype.step = function(){
  this.oldStep();
  //move the dot in the current direction
  //if left > window width OR less than 0, flip the direction
  if (this.left > window.innerWidth - 100 || this.left < 100){
    this.movingRight = !this.movingRight;
  }
  if (this.movingRight){
    this.left += 20;
    this.setPosition(this.top, this.left);
  }
  else {
    this.left -= 20;
    this.setPosition(this.top, this.left);
  }
};
