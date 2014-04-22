$(document).ready(function(){
  window.pikachu = [];
  window.pokeballs = [];
  window.enemies = [];

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

  $(".addPikachuButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var DancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new DancerMakerFunction(
      $("body").height() - 200,
      ($("body").width() - 200) * Math.random() + 100,
      100
    );
    $('body').append(dancer.$node);
    window.pikachu.push(dancer);
    this.remove();
  });

  $(".addPokeballButton").click(function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);
    var DancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new DancerMakerFunction(
      $("body").height() - 200,
      window.pikachu[0].left, //should be equal to pikachus current .left
      Math.random() * 1
    );
    $('body').append(dancer.$node);
    window.pokeballs.push(dancer);
  });


});

