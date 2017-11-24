
var assets = [];
var frame = 0;
var gameRunning = false;

var Game = function(){

/* The render function is the heart of the game. It calls all of the object creating
  functions and composes the order in which the game is initialized */

  function render(){

    ctxInterface.clearRect(0, 0, canvas.width, canvas.height);

    populateInterface();

    canvas.addEventListener('mousemove', function(event) {
        getMousePos(canvas, event);
    }, false);

    if(gameRunning){

    /* Clears the canvas frame. DO NOT SCREW WITH. */

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* This for loop renders all of our static objects */
/*
    for(var i=0; i < assets.length; i++){
      assets[i].render();
    }
      */
  }
}
/* This marks the end of our render function */

/* This is the animation engine. DO NOT SCREW WITH */

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
          })();
          (function animloop(){
            requestAnimFrame(animloop);
            render();
          })();
}

/*
Useful start functions.
var game = undefined;

function startGame(){

    gameRunning = true;
    game = new Game();
    gameStart.play();

}

function pauseGame(){
  if(gameRunning){

    gameRunning = false;

  }
}

function resumeGame(){
  if(!gameRunning){

    gameRunning = true;

  }
}
*/
