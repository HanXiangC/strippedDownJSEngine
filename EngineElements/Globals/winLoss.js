

/* Check loss ends the game if lives reach 0 */

function checkLoss(){
  if(lives <= 0){

    ctx.fillStyle = "red";
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();
    ctx.save();
    ctxInterface.font="50px Arial";
    ctxInterface.fillText("You lose",0,0);
    ctxInterface.strokeStyle = "black";
    ctxInterface.fill;
    gameRunning = false;


  }
}
