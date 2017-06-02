
/*

Name: Han Xiang Choong
Date: 06/01/17
File:canvasSettings.js

Description:

In this file, we declare our canvas elements, which are drawn via id from index.html in the main folder.
Using these, we declare useful helper variables with which to manipulate the canvas and viewport.

*/

/* Canvas and ctx refer to the main game board canvas */

var canvas = document.getElementById("myGameBoard");
var ctx = canvas.getContext("2d");

/* These variables contain the dimensions of the game board canvas */

var canvasWidth = ctx.canvas.clientWidth;
var canvasHeight = ctx.canvas.clientHeight;

canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;

/* The interface canvas is distinct from the game board canvas */

var interfaceBoard = document.getElementById("interfaceBoard");
var ctxInterface = interfaceBoard.getContext("2d");

/* These variables contain the dimensions of the interface */

var interfaceCanvasWidth = ctxInterface.canvas.clientWidth;
var interfaceCanvasHeight = ctxInterface.canvas.clientHeight;

interfaceBoard.style.width = window.innerWidth;
interfaceBoard.style.height = window.innerHeight;



/* Function below is NOT MY CODE */

/* This function draws a star in canvas. It was taken from stackOverflow */


function drawStar(cx,cy,spikes,outerRadius,innerRadius){
      var rot=Math.PI/2*3;
      var x=cx;
      var y=cy;
      var step=Math.PI/spikes;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx,cy-outerRadius)
      for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(cx,cy-outerRadius);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle='orange';
      ctx.stroke();
      ctx.fillStyle='yellow';
      ctx.fill();
      ctx.restore();
    }
