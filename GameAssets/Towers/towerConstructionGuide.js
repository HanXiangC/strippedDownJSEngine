/*

Name: Han Xiang Choong
Date: 06/01/17
File:towerConstructionGuide.js

Description:

This file contains the declaration for the towerConstructionGuide object, with all of its associated helper functions.

*/
var ConstructionGuide = function(bluePrint) {

  var guideElement = {}

  function create(){
    guideElement.x = mouseX;
    guideElement.y = mouseY;
    guideElement.size = bluePrint.bodySize/2;
    guideElement.rangeSize = bluePrint.range;
  }

  function draw(){

    ctx.beginPath();
    ctx.arc(guideElement.x-guideElement.size, guideElement.y-guideElement.size, guideElement.size, 0, Math.PI*2);
    if(buildingRestriction(guideElement.x-guideElement.size, guideElement.y-guideElement.size, guideElement.size*2) || bluePrint.cost > cash){
      ctx.fillStyle = "red";
      restricted = true;
    }else{
      ctx.fillStyle = "green";
      restricted = false;
    }
    ctx.fill();
    ctx.closePath();

  }

  function drawRange(){
    ctx.save();
    ctx.beginPath();
    ctx.arc(guideElement.x-guideElement.size, guideElement.y-guideElement.size, guideElement.rangeSize, 0, Math.PI*2);
    ctx.fillStyle = "orange";
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  this.render = function(){
    guideElement.x = mouseX;
    guideElement.y = mouseY;
    draw();
    drawRange();
  }

  function init(){
    create();
    draw();
    drawRange();
  }

  init();
}
