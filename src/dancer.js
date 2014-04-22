var Dancer = function(top, left, timeBetweenSteps){
  console.log(this); //remove later
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps =  timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){
    that.step();
  }, that._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setClass = function(newClass) {
  this.$node.addClass(newClass);
};
