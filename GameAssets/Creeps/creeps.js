
/*

Name: Han Xiang Choong
Date: 06/01/17
File:creeps.js

Description:

This file contains the declaration for the creep object, with all of its associated helper functions.

*/

/* Creep Object Section - Constructor Definition and Functions */

var Creep = function(creepSettings){

  var creepElement = {};

/* Section 1: The create function sets the object attributes using creepSettings */

  function create(){
    creepElement.x = creepSettings.x;
    creepElement.y = creepSettings.y;

    creepElement.speedX = creepSettings.speedX;
    creepElement.speedY = creepSettings.speedY;

    creepElement.size = creepSettings.size;
    creepElement.bodyColor = creepSettings.bodyColor;
    creepElement.hatColor = creepSettings.hatColor;

    creepElement.direction = creepSettings.direction;
    creepElement.health = creepSettings.health;
    creepElement.speedModifier = creepSettings.speedModifier;
    creepElement.reward = creepSettings.reward;
    creepElement.escaped = 0;
  }

/* Section 2: The draw function draws the actual creep on the canvas */

  function draw(){
    
    /* This section creates the creep's body */

    ctx.beginPath();
    ctx.arc(creepElement.x , creepElement.y, creepElement.size, 0, Math.PI*2);
    ctx.fillStyle = creepElement.bodyColor;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(creepElement.x , creepElement.y, creepElement.size/2, 0, Math.PI*2);
    ctx.fillStyle = creepElement.hatColor;
    ctx.fill();
    ctx.closePath();
  }

/* Section 3: The directionalChange function modifies movement based on creep's current direction */

  function directionalChange(){
    if(creepElement.direction == 1){
      creepElement.speedX = 0;
      creepElement.speedY = 1 * creepElement.speedModifier;
    }
    if(creepElement.direction == 2){
      creepElement.speedX = 0;
      creepElement.speedY = -1 * creepElement.speedModifier;
    }
    if(creepElement.direction == 3){
      creepElement.speedX = 1 * creepElement.speedModifier;
      creepElement.speedY = 0;
    }
    if(creepElement.direction == 4){
      creepElement.speedX = -1 * creepElement.speedModifier;
      creepElement.speedY = 0;
    }
  }

/* Section 4: The compass function sets the collision detection with waypoints */

  function calculateDistance(node){
    return (Math.sqrt(((node.x - creepElement.x)**2) + ((node.y - creepElement.y)**2)));
  }

  function compass(){

    for(var j = 0; j<mapNodes.length; j++){
      var node = mapNodes[j];
    //  var nodeDistance = calculateDistance(node);
      if(creepElement.x == node.x && creepElement.y == node.y){
        creepElement.direction = node.directionalTrigger;
      }

    }
  }


/* Section 5: The pathFinder function uses compass and speed to modulate movement */

  function pathFinder(){
   compass();
   directionalChange();
   creepElement.y += creepElement.speedY;
   creepElement.x += creepElement.speedX;
  }

/* Section 6: The move function uses draws the creep and updates its movement with
              pathFinder */

  function move(){
    draw();
    pathFinder();
  }

/* Section 7: Declare healthStatus is used to keep track of a creep's living status */

  function declareStatus(health){
    healthStatus.push(health);
  }

  function escapeMap(){
      if(creepElement.y > 0 && creepElement.y < canvas.height){
        if(creepElement.x > canvas.width){
          creepElement.escaped = 1;
      }
    }
  }

/* Render is called in scripts.js */
/* It declares characteristics that can be used globally */

  this.render = function(){

    this.x = creepElement.x;
    this.y = creepElement.y;
    this.speedX = creepElement.speedX;
    this.speedY = creepElement.speedY;
    this.speedModifier = creepElement.speedModifier;

    this.bodyColor = creepElement.bodyColor;
    this.hatColor = creepElement.hatColor;

    this.size = creepElement.size;
    this.direction = creepElement.direction;
    this.health = creepElement.health;
    this.reward = creepElement.reward;
    this.escaped = creepElement.escaped;

    move();
    escapeMap();

  }

/* This is the initial initialization function */

  function init(){
    create();
    this.health = creepElement.health;
    declareStatus(this.health);
    draw();
  }

  init();
}
