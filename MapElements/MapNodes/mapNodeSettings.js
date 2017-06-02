
/* These are the directionalTriggers which alter our creep direction */

var south = 1;
var north = 2;
var east = 3;
var west = 4;

/* This is the number of waypoints, including the start and end node */

var numberOfNodes = 16;

var startNode = {
  x: 0,
  y: canvasHeight*0.1,
  size: 5,
  directionalTrigger: 3
}

var mapNode1 = {
  x: canvasWidth*0.05,
  y: canvasHeight*0.1,
  size: 5,
  directionalTrigger: 1
}

var mapNode2 = {
  x: canvasWidth*0.05,
  y: canvasHeight*0.9,
  size: 5,
  directionalTrigger: 3
}

var mapNode3 = {
  x: canvasWidth*0.25,
  y: canvasHeight*0.9,
  size: 5,
  directionalTrigger: 2
}

var mapNode4 = {
  x: canvasWidth*0.25,
  y: canvasHeight*0.35,
  size: 5,
  directionalTrigger: 3
}

var mapNode7 = {
  x: canvasWidth*0.45,
  y: canvasHeight*0.35,
  size: 5,
  directionalTrigger: 2
}

var mapNode8 = {
  x: canvasWidth*0.45,
  y: canvasHeight*0.02,
  size: 5,
  directionalTrigger: 3
}

var mapNode9 = {
  x: canvasWidth*0.92,
  y: canvasHeight*0.02,
  size: 5,
  directionalTrigger: 1
}


var mapNode11 = {
  x: canvasWidth*0.92,
  y: canvasHeight*0.3,
  size: 5,
  directionalTrigger: 4
}

var mapNode12 = {
  x: canvasWidth*0.6,
  y: canvasHeight*0.3,
  size: 5,
  directionalTrigger: 1
}


var mapNode13 = {
  x: canvasWidth*0.6,
  y: canvasHeight*0.5,
  size: 5,
  directionalTrigger: 4
}

var mapNode14 = {
  x: canvasWidth*0.45,
  y: canvasHeight*0.5,
  size: 5,
  directionalTrigger: 1
}


var mapNode18 = {
  x: canvasWidth*0.45,
  y: canvasHeight*0.8,
  size: 5,
  directionalTrigger: 3
}

var mapNode19 = {
  x: canvasWidth*0.7,
  y: canvasHeight*0.8,
  size: 5,
  directionalTrigger: 2
}



var mapNode20 = {
  x: canvasWidth*0.7,
  y: canvasHeight*0.6,
  size: 5,
  directionalTrigger: 3
}

var mapNode21 = {
  x: canvasWidth*0.85,
  y: canvasHeight*0.6,
  size: 5,
  directionalTrigger: 1
}

var mapNode22 = {
  x: canvasWidth*0.85,
  y: canvasHeight*0.9,
  size: 5,
  directionalTrigger: 3
}


var endNode = {
  x: canvasWidth,
  y: canvasHeight*0.9,
  size: 5,
  directionalTrigger: 3
}

/* This array contains our waypoints, which are static and unchanging */

var mapNodes = [startNode, mapNode1, mapNode2, mapNode3, mapNode4,
                mapNode7, mapNode8, mapNode9, mapNode11, mapNode12, mapNode13,
                mapNode14, mapNode18, mapNode19, mapNode20,
                mapNode21, mapNode22, endNode];
