
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

var seconds = 0;
var minutes = 0;



var Timer = function() {

  var timerElement = {};

  function create(){
    timerElement.time = 0;
  }

  function init(){
    create();
    draw();
  }

  function draw(){
    ctxInterface.font = "20px Arial";
    ctxInterface.fillStyle = "black";
    ctxInterface.fillText("Frames: "+ frame, 320, 20);
    ctxInterface.fillText("Time: "+ minutes + ":" + seconds, 490, 20);
    ctxInterface.fillText("Lives: "+ lives, 620, 20);
  }

  this.render = function(){
    frame += 1;
    getTime();
    draw();
  }

  init();

}

function getTime(){
  seconds = (frame / 60).toFixed(0);

  if(frame/3600 == 1){
    minutes += 1;
  }

  minuteLength = ("" + minutes).length;
  secondsLength = ("" + seconds).length;

  if(secondsLength == 1){
    seconds = "" + "0"+ seconds;
  }
  if(minuteLength == 1){
    minutes = "" + "0"+ minutes;
  }

  if(seconds == 60){
    seconds = 0;
    seconds = "" + "0"+ seconds;
  }
}
