/*

Name: Han Xiang Choong
Date: 06/01/17
File:moneyCounter.js

Description:

The purpose of this file is to declare the definition of the MoneyCounter object, which merely writes
the current amount of cash available to the player at the top of the game interface.

It draws this cash amount from levelSettings.js

Affects: interface.js

Relies on: levelSettings.js

*/


var MoneyCounter = function() {


  function init(){
    draw();
  }

  function draw(){
    ctxInterface.font = "20px Arial";
    ctxInterface.fillStyle = "black";
    ctxInterface.fillText("Level: "+ level, 500, 50);
    ctxInterface.fillText("Cash: $"+ cash, 700, 50);
  //  scoreCounterElement.score += 1;
  }

  this.render = function(){
    draw();
  }

  init();

}
