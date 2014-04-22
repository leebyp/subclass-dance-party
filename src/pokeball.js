var Pokeball = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.setClass('pokeball');
  this.used = false;
  this.hit = false;
};

Pokeball.prototype = Object.create(Dancer.prototype);
Pokeball.prototype.constructor = Pokeball;
Pokeball.prototype.step = function(){
  //move upward, remove if it exceeds the top fo the page
  Dancer.prototype.step.call(this);
  if (!this.used){
    if (this.hit){    //if pokeball hits invaders, drops back down to earth
      this.top += 2;
    }
    else {
      this.top -= 10;
    }
    this.setPosition(this.top, this.left);
    if (this.top < 0 || this.top > window.innerHeight - 35){
      this.$node.remove();
      window.pokeballs.shift();
      this.used = true;
    }
    var pokeleft = this.left;
    var poketop = this.top;
    for (var j=0; j<window.enemies.length; j++){
      var enemyleft = window.enemies[j].left;
      var enemytop = window.enemies[j].top;
      if (Math.abs(pokeleft-enemyleft) < 35 && Math.abs(poketop-enemytop) < 35){
        // this.$node.remove();              //remove the pokeball node from the array and DOM
        // window.pokeballs.shift();
        window.enemies[j].$node.remove(); //remove the enemy node from the array and DOM
        window.enemies.splice(j, 1);
        // this.used = true;
        this.hit = true;
      }
    }
  }
};
