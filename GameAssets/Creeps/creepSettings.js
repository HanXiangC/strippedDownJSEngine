/*

Name: Han Xiang Choong
Date: 06/01/17
File: creepSettings.js

Description:

In this file, we control the number of creeps which spawn in a given wave. We creep track of the actual
array containing our creep objects, and maintain a healthStatus array which tracks their health.

*/


/* spawnFrame is used to declare the delay in between the spawning of creeps */



/* creeps contains all of our creeps */

var creeps = [];

/* healthStatus contains our creep health statuses */

var healthStatus = [];

var escaped = [];

/* These are the settings for the various creeps */

var basicCreepSettings = {
  x: -20,
  y: canvasHeight*0.1,
  size: 10,
  health: 200,
  speedX:1,
  speedY:0,
  speedModifier: 1,
  direction: 3,
  bodyColor: "#54A624",
  hatColor: "#2E3828",
  reward: 3
}

var grotSettings = {
  x: -20,
  y: canvasHeight*0.1,
  size: 5,
  health: 30,
  speedX:1,
  speedY:0,
  speedModifier: 2,
  direction: 3,
  bodyColor: "#7CBF75",
  hatColor: "#FFFB00",
  reward: 1
}

var ogreSettings = {
  x: -20,
  y: canvasHeight*0.1,
  size: 15,
  health: 480,
  speedX:1,
  speedY:0,
  speedModifier: 1,
  direction: 3,
  bodyColor: "#BAB850",
  hatColor: "#61330E",
  reward: 10
}

var golemSettings = {
  x: -20,
  y: canvasHeight*0.1,
  size: 18,
  health: 1000,
  speedX:0.4,
  speedY:0,
  speedModifier: 1,
  direction: 3,
  bodyColor: "#191519",
  hatColor: "#a80000",
  reward: 30
}
