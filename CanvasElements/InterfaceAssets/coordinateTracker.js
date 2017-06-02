/*

Name: Han Xiang Choong
Date: 06/01/17
File:coordinateTracker.js

Description:

The purpose of this file is to declare the definition of the CoordinateTracker object, which provides the
coordinates used in turret construction, as well as providing a helpful app for monitoring the position
of the mouse.

Affects: towerConstructionGuide.js
         towerConstruction.js
         scripts.js

Relies on: Nil

*/


var mouseX = 0;
var mouseY = 0;

var CoordinateTracker = function(){

  var coordinateTracker = {};

  function create(){
    coordinateTracker.x = 0;
    coordinateTracker.y = 0;

  }

  function draw(){

    ctxInterface.font = '20px Arial';
    ctxInterface.fillStyle = 'black';
    coordinateTracker.x = mouseX;
    coordinateTracker.y = mouseY;
    ctxInterface.fillText("Mouse Position: " + coordinateTracker.x.toFixed(0) + ", " + coordinateTracker.y.toFixed(0), 100, 50);
  }

  function init(){
    create();
    draw();
  }

  this.render = function(){
    draw();
  }

  init();
}
