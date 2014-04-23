$(document).ready(function(){
  window.pikachu = [];
  window.pokeballs = [];
  window.enemies = [];
  window.pokeballsused = 0;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var DancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new DancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1
    );
    $('body').append(dancer.$node);
  });

  //add additional enemies
  $(".addInvaderButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var DancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new DancerMakerFunction(
      ($("body").height() - 400) * Math.random() + 100,
      ($("body").width() - 200) * Math.random() + 100,
      500
    );
    $('body').append(dancer.$node);
    window.enemies.push(dancer);
  });

  //start button, adding one pikachu and 50 enemies at random locations
  $(".addPikachuButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var DancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new DancerMakerFunction(
      $("body").height() - 150,
      ($("body").width() - 300) * Math.random() + 100,
      100
    );
    $('body').append(dancer.$node);
    window.pikachu.push(dancer);
    this.remove();

    for (var i=0; i<50; i++){
      $('.addInvaderButton').trigger('click');
    }

  });

  //fire pokeball at enemies, by clicking button/mouseover/spacebar
  $(".addPokeballButton").click(function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var DancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new DancerMakerFunction(
      $("body").height() - 200,
      window.pikachu[0].left + (96 / 2) - (35 / 2), //should be equal to pikachus current .left
      10
    );
    $('body').append(dancer.$node);
    window.pokeballs.push(dancer);
  });

  $("body").on("mouseover", ".pikachu", function(){
    $(".addPokeballButton").trigger("click");
  });

  $(window).on("keydown", function(event){
    if (event.keyCode === 32) {
      $(".addPokeballButton").trigger("click");
    }
  });

  //line up enemies at top of screen
  $(".lineup").click(function(event){
    //set constant gap based on window width so that there are 10 enemies per line
    var increment = (window.innerWidth - 200) / 10;
    //set starting position of the queue
    var left = 100;
    var top = 100;
    var movingRight = true;
    //loop through all of the enemies and assign them to the starting position
    for (var i = 0; i < window.enemies.length; i ++) {
      window.enemies[i].left = left;
      window.enemies[i].top = top;
      window.enemies[i].movingRight = movingRight;
      //increment/decrement the starting position based on the direction of the enemy
      movingRight ? left += increment : left -= increment;
      //if the enemy is at an edge, change the queue direction and start the next row down
      if(left >= (window.innerWidth - 100)|| left <= 100) {
        movingRight = !movingRight;
        top += 50;
      }
    }
  });


});

