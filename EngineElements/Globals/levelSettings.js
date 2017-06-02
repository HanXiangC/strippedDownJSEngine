/*

Name: Han Xiang Choong
Date: 06/01/17
File:levelSettings.js

Description:

The purpose of this file is to contain the helper functions which increase gameplay difficulty and set initial
conditions.

Affects: scripts.js

Relies on: Nil

*/

var cash = 50;
var spawnLimit = 60;
var lives = 10;
var level = 1;

/* CurrentSpawn and initialSpawn are used to keep track of the creeps array */

var currentSpawn = 0;
var initialSpawn = currentSpawn + 11;
var spawnFrame = 45;

var creepEscapeIndex = 0;

var currentOgres = 0;
var currentGolems = 0;
var ogreLimit = 2;
var golemLimit = 1;


/* This function creates our creep objects and populates them in creeps array */

function increaseDifficulty(){


  if(frame % spawnFrame == 0 && currentSpawn < initialSpawn){

    /* creeps is contained in creepSettings.js */
    /* currentSpawn is contained in creepSettings.js and starts at 0 */
    /* initialSpawn is contained in creepSettings.js and starts at currentSpawn + 10 */

    if(creeps[currentSpawn] === undefined){
      if(currentSpawn % 3 == 0){
        creeps[currentSpawn] = new Creep(grotSettings);

      }else if(currentSpawn % 5 == 0 && currentOgres <= ogreLimit && level > 2){
        creeps[currentSpawn] = new Creep(ogreSettings);
        currentOgres += 1;
      }else if(currentSpawn % 7 == 0 && currentGolems <= golemLimit && level > 3){
        creeps[currentSpawn] = new Creep(golemSettings);
        currentGolems += 1;
      }else{
        creeps[currentSpawn] = new Creep(basicCreepSettings);
      }
        currentSpawn += 1;
      }
    }

  }


/* resetCreeps clears all creeps from the game, and calls clearTowerTargets to reset tower targeting.
  It then rewards the player with a cash bounty */

function resetCreeps(killCounter){
  var creepCount = creepsOnBoard();
  if(killCounter == initialSpawn && creepCount == 0){
    resetHelper();
  }else if(currentSpawn == initialSpawn && creepCount == 0){
    resetHelper();
  }
}


function resetHelper(){

  for(var i = 0; i < creeps.length; i++){
    cash += creeps[i].reward;
  }

  clearTowerTargets();

  currentSpawn = 0;
  level += 1;

  if(initialSpawn < spawnLimit && spawnFrame > 20){
    initialSpawn = initialSpawn + 4;

    currentOgres = 0;
    currentGolems = 0;

    ogreLimit += 1;

    if(level % 2 == 0){
      golemLimit += 1;
    }

    spawnFrame -= 3;
  }

  attackBugle.play();

}

function clearTowerTargets(){
  for(var i = 0; i < towers.length; i++){
    towers[i].chosenTarget = undefined;
    towers[i].chosenTargetID = null;
    creeps.length = 0;
    healthStatus.length = 0;
  }
}

/* checkDeadNumbers returns the number of creeps killed */

function checkDeadNumbers(){
  var killCounter = 0;
  for(var i = 0; i < creeps.length; i++){
    if(healthStatus[i] <= 0){
      killCounter += 1;
    }
  }
  return killCounter;
}

/* checkEscaped updates lives with the number of creeps which have escaped */

function checkEscaped(){

  var counter = 10;
  var creepsEscaped = 0;

  for(var i = 0; i < creeps.length; i++){
    if(creeps[i].x > 0 && creeps[i].x > canvasWidth && healthStatus[i] > 0){
        creeps[i].escaped = 1;
    }
  }

  for(var i = 0; i < creeps.length; i++){
    if(creeps[i].escaped == 1){
        creepsEscaped += 1;
    }
  }
  lives = counter - creepsEscaped;
}

/* creepsOnBoard checks the number of creeps currently on the game space */

function creepsOnBoard(){
  var counter = 0;
  for(var i = 0; i < creeps.length; i++){
    if(creeps[i] != undefined){
      if(creeps[i].x > 0 && creeps[i].x < canvasWidth && healthStatus[i] > 0){
          counter++;
      }
    }
  }
  return counter;
}



/* If the deathtoll equals the number of creeps spawned in a wave, then the next wave begins */

function nextWave(){
  var deathToll = checkDeadNumbers();
  resetCreeps(deathToll);
}
