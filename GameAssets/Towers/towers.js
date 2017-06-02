/*

Name: Han Xiang Choong
Date: 06/01/17
File:towers.js

Description:

This file contains the declaration for the tower object, with all of its associated helper functions.

*/
var Tower = function(towerSettings){

  var towerElement = {};


/* These create function declares the towers settings using towerSettings */

  function create(){

    /* Coordinates */

    towerElement.x = towerSettings.x;
    towerElement.y = towerSettings.y;
    towerElement.targetAngle = towerSettings.targetAngle;

    /* Dimensions */

    towerElement.bodySize = towerSettings.bodySize;
    towerElement.turretSize = towerSettings.turretSize;


    towerElement.bodyColor = towerSettings.bodyColor;
    towerElement.turretColor = towerSettings.turretColor;

    /* Gameplay stats */

    towerElement.range = towerSettings.range;
    towerElement.rateOfFire = towerSettings.rateOfFire;
    towerElement.cost = towerSettings.cost;

    towerElement.engaged = towerSettings.engaged;
    towerElement.target = towerSettings.target;
    towerElement.projectileType = towerSettings.projectileType;

    /* Targetingarray keeps track of viable targets */

    towerElement.targetingArray = [];

    towerElement.internalTime = 0;
    towerElement.internalTimeIncrementer = 1;

  }

  function draw(){

    /* This section creates the tower body */

    ctx.beginPath();
    ctx.rect(towerElement.x, towerElement.y, towerElement.bodySize, towerElement.bodySize);
    ctx.fillStyle = towerElement.bodyColor;
    ctx.fill();
    ctx.closePath();

    /* This section creates the tower turret */

    var turretX = towerElement.x + (towerElement.bodySize/2);
    var turretY = towerElement.y + (towerElement.bodySize/2);
    var turretRadius = towerElement.turretSize;

    ctx.beginPath();
    ctx.arc(turretX, turretY, turretRadius, 0, Math.PI*2);
    ctx.fillStyle = towerElement.turretColor;
    ctx.fill();
    ctx.closePath();




  }

  /* RangeFinder works */

  function checkRange(target){
    if((Math.sqrt(((target.x - towerElement.x)**2) + ((target.y - towerElement.y)**2))) < towerElement.range){
      return true;
    }else{
      return false;
    }
  }

  /* Targeting array is fixed */

  function formTargetingArray(){
    var targetingIndex = 0;
    towerElement.targetingArray = [];
      for(var i = 0; i < creeps.length; i++){
        if(targetingIndex <= i){
          var target = creeps[i];
          if(checkRange(target) && healthStatus[i] >= 0){
            towerElement.targetingArray[i] = target;
          }else{
            towerElement.targetingArray[i] = undefined;
          }
        }
      }
    }

    function target(){

      formTargetingArray();

      for(var i = 0; i < towerElement.targetingArray.length; i++){
        if(towerElement.chosenTargetID == null){
          if(towerElement.targetingArray[i] != undefined && towerElement.engaged == false){
            towerElement.chosenTarget = towerElement.targetingArray[i];
            towerElement.chosenTargetID = i;
            towerElement.engaged == true;
          }
        }
      }

    }



  function acquireTarget(){
    if(towerElement.chosenTarget == undefined && towerElement.chosenTargetID == null){
      target();
    }
  }

  function resetTarget(){
    if(healthStatus[towerElement.chosenTargetID] <= 0){
      towerElement.chosenTarget = undefined;
      towerElement.chosenTargetID = null;
      towerElement.engaged == false;
    }else if(towerElement.chosenTarget != undefined && !checkRange(towerElement.chosenTarget)){
      towerElement.chosenTarget = undefined;
      towerElement.chosenTargetID = null;
      towerElement.engaged == false;
      resetFiringTimer();
    }
  }



  function resetFiringTimer(){
    if(towerElement.internalTime != 0){
      towerElement.internalTime = 0;
    }
  }

  function fire(){
    if(towerElement.chosenTarget != undefined && towerElement.chosenTargetID != null && healthStatus[towerElement.chosenTargetID] >= 0){
      towerElement.internalTime += towerElement.internalTimeIncrementer;
      if(towerElement.internalTime == 1 || towerElement.internalTime % towerElement.rateOfFire == 0){
        fireProjectile(towerElement.projectileType, towerElement.x, towerElement.y, towerElement.bodySize, towerElement.chosenTarget, towerElement.chosenTargetID, towerElement.targetingArray);
      }
    }
  }

  function attack(){

    acquireTarget();
    if(towerElement.chosenTarget != undefined){
      if(checkRange(towerElement.chosenTarget)){
        fire();
      }
    }
    resetTarget();
  }

  /* The render is called in scripts.js */

  this.render = function(){

    this.cost = towerElement.cost;

    this.x = towerElement.x;
    this.y = towerElement.y;
    this.range = towerElement.range;
    this.engaged = towerElement.engaged;
    this.rateOfFire = towerElement.rateOfFire;
    this.targetingArray = towerElement.targetingArray;
    this.bodyColor = towerElement.bodyColor;
    this.bodySize = towerElement.bodySize;
    this.turretColor = towerElement.turretColor;
    this.internalTime = towerElement.internalTime;
    this.chosenTarget = towerElement.chosenTarget;
    this.chosenTargetID = towerElement.chosenTargetID;
    this.projectileType = towerElement.projectileType;
    this.targetAngle = towerElement.targetAngle;

    draw();

    attack();
  }



/* Initialization functions */

  function init(){
    create();
    draw();
  }

  init();
}
