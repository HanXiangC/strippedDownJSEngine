/*

Name: Han Xiang Choong
Date: 06/01/17
File:timer.js

Description:

The purpose of this file is to declare the definition of the MoneyCounter object, which merely writes
the current amount of cash available to the player at the top of the game interface.

It draws this cash amount from levelSettings.js.

It also displays the frames run since the game began, and draws this variable from globalSettings.js

Affects: interface.js

Relies on: levelSettings.js
           globalSettings.js

*/

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




    drawGrid();
    drawPath();
    populateNodes();

    checkEscaped();
    nextWave();
    gameStart2.play();
    themeSong.play();
    increaseDifficulty();




    /* This for loop renders all of our static objects */

    for(var i=0; i < assets.length; i++){
      assets[i].render();
    }

    /* This for loop renders our tower objects */

    for(var j=0; j < towers.length; j++){
      towers[j].render();
    }

    /* This for loop renders our creep objects if they are alive */

    for(var k=0; k < creeps.length; k++){
      if(healthStatus[k] > 0){
        creeps[k].render();
      }

    }

    /* This for loop's only purpose is to render the guideArray which assists building */

    for(var l=0; l < guideArray.length; l++){
      if(guideArray[l] != undefined){
        guideArray[l].render();
      }
    }

    checkLoss();


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

/* REITERATING DO NOT SCREW WITH */

}

/* This marks the end of our game object */
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
