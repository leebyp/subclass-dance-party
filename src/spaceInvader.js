var SpaceInvader = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.movingRight = true;
  this.setClass('spaceInvader');
};

SpaceInvader.prototype = Object.create(Dancer.prototype);
SpaceInvader.prototype.constructor = Dancer;
SpaceInvader.prototype.oldStep = Dancer.prototype.step;
SpaceInvader.prototype.step = function(){
  this.oldStep();
  //move the dot in the current direction
  //if left > window width OR less than 0, flip the direction and move down
  if (this.left > window.innerWidth - 100 || this.left < 100){
    this.movingRight = !this.movingRight;
    this.top += 50;
    if (this.top > window.innerHeight - 200) {
      this.$node.remove();
    }
  }
  if (this.movingRight){
    this.left += 10;
    this.setPosition(this.top, this.left);
  }
  else {
    this.left -= 10;
    this.setPosition(this.top, this.left);
  }
};
