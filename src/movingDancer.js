var ElectricBall = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
};

ElectricBall.prototype = Object.create(Dancer.prototype);
ElectricBall.prototype.constructor = Dancer;
ElectricBall.prototype.oldStep = Dancer.prototype.step;
ElectricBall.prototype.step = function(){
  this.oldStep();
  // this.$node.toggle();
  this.top -= 10;
  this.setPosition(this.top, this.left);
  // this.setPosition();
  if (this.top < 0){
    this.$node.hide();
  }
};
