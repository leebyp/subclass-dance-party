var DiscoDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.angle = 10;
};

DiscoDancer.prototype = Object.create(Dancer.prototype);
DiscoDancer.prototype.constructor = Dancer;
DiscoDancer.prototype.oldStep = DiscoDancer.prototype.step;
DiscoDancer.prototype.step = function(){
  this.oldStep();
  this.angle += 5;
  this.$node.css({transform: 'rotate('+this.angle+'deg)'});
  this.$node.className = this.$node.className + ' dancer2';
};
