/*

Name: Han Xiang Choong
Date: 06/01/17
File:towerConstruction.js

Description:

This file contains the functions which allow us to construct a new turret on the board.

*/

var killGuide = false;

var towerIndex = 0;

var currentBlueprint = undefined;


function approveConstruction(towerElement){

  killGuide = false;
  currentBlueprint = towerElement;

  canvas.addEventListener('mousemove', function(event) {
      createGuideArray(towerElement);
      }, false);

  }

canvas.addEventListener('click', function(event) {
  if(currentBlueprint != undefined){
    build(currentBlueprint);
    }
    }, false);

function cancelConstruction(){
  canvas.addEventListener('click', function(event) {
    currentBlueprint = undefined;
      }, false);
    }


function build(towerElement){
  if(!restricted){

    cash -= towerElement.cost;

    position(towerElement);

    towers[towerIndex] = new Tower(towerElement);
    towerIndex += 1;
    killGuide = true;

    currentBlueprint = undefined;
    guideArray[0] = undefined;
  }
}


function position(towerElement){
  towerElement.x = mouseX - towerElement.bodySize;
  towerElement.y = mouseY - towerElement.bodySize;
}


function createGuideArray(towerElement){
  if(!killGuide){
    guideArray[0] = new ConstructionGuide(towerElement);
  }else{
    guideArray[0] = undefined;
  }
}
