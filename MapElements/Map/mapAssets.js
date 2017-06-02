
/* This function draws a square grid on the canvas */

function drawGrid(){

  for(var j = 0; j < canvasHeight; j += canvasHeight/60){

    ctx.beginPath();
    ctx.save();
    ctx.moveTo(0,j);
    ctx.lineTo(canvasWidth,j);
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "#C4C4C4";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

  }

  for(var i = 0; i < canvasWidth; i += canvasWidth/60){

    ctx.beginPath();
    ctx.save();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasHeight);
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "#C4C4C4";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

  }

}

/* This function is used to retrieve our mouse coordinates */

function getMousePos(canvas, evt) {
  var rectangle = canvas.getBoundingClientRect();
  mouseX = evt.clientX - rectangle.left,
  mouseY = evt.clientY - rectangle.top

}
