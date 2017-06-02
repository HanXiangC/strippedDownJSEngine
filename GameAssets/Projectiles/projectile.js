

/* fireProjectile chooses the type of projectile to be fired based on the tower calling it, and passings in targeting parameters */

function fireProjectile(projectileType, originX, originY, originBodySize, target, targetID, targetingArray){

  if(projectileType == 1){
    laser(originX, originY, originBodySize, target, targetID, targetingArray);
  }

  if(projectileType == 2){
    bullet(originX, originY, originBodySize, target, targetID, targetingArray);
  }

  if(projectileType == 3){
    machinegunBullet(originX, originY, originBodySize, target, targetID, targetingArray);
  }

  if(projectileType == 4){
    cannonShell(originX, originY, originBodySize, target, targetID, targetingArray);
  }

  if(projectileType == 6){
    shotgunShell(originX, originY, originBodySize, target, targetID, targetingArray);
  }

}


/* damage decrements health from healthStatus */

function damage(targetID, damage){
  healthStatus[targetID] += -damage;
}

/* accuracyRoll determines where a shot lands */

function accuracyRoll(coordinate, accuracy){
  return coordinate += Math.floor(Math.random() * accuracy) - accuracy/2;
}

/* checkSplash determines if a shot hits multiple targets */

function checkSplash(originX, originY, targetX, targetY, targetSize, targetingArray, impact){
  for(var i = 0; i < targetingArray.length; i++){
    if(targetingArray[i] != undefined){
      if(checkHit(originX, originY, targetingArray[i].x, targetingArray[i].y, targetingArray[i].size)){
        damage(i, impact);
      }
    }
  }
}

/* checkSplash determines if a shot hits a single target */

function checkHit(originX, originY, targetX, targetY, targetSize){
  if(originX > targetX - targetSize && originX < targetX + targetSize &&
     originY > targetY - targetSize && originY < targetY + targetSize){
       return true;
   }
  return false;
}


/* These are the projectile types. Shots are drawn via canvas, and hits checked using the above helper functions. */


function laser(originX, originY, originBodySize, target, targetID, targetingArray){

  //laserReload.play();

    var impact = 0.05;

    var hitX = accuracyRoll(target.x, 5);
    var hitY = accuracyRoll(target.y, 5);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(originX + (originBodySize/2), originY + (originBodySize/2));
    ctx.lineTo(hitX, hitY);

    ctx.beginPath();
    ctx.arc(originX + (originBodySize/2), originY + (originBodySize/2), 5, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    for(var x=1;x<10;x++){
        for(var y=1;y<10;y++){
            var color= '#' + Math.floor (Math.random() * 16777215).toString(16);
            ctx.globalAlpha = 0.7;
            ctx.strokeStyle = color;
            ctx.lineWidth = 8;
            ctx.stroke();

        }
    }

    ctx.restore();
    ctx.closePath();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(originX + (originBodySize/2), originY + (originBodySize/2));
    ctx.lineTo(hitX, hitY);
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    laserFire.play();
    //laserFire2.play();

    checkSplash(hitX, hitY, target.x, target.y, target.size, targetingArray, impact);

}

function bullet(originX, originY, originBodySize, target, targetID, targetingArray){

  rifleReload.play();
  rifleReload2.play();

  var hitX = accuracyRoll(target.x,22);
  var hitY = accuracyRoll(target.y,22);

    var impact = 14;

    drawStar(originX + originBodySize/2, originY + originBodySize/2,8,4,2);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(originX + (originBodySize/2), originY + (originBodySize/2));
    ctx.lineTo(hitX, hitY);
    ctx.strokeStyle = "#e7b923";
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    drawStar(hitX, hitY,8,3,2);

    checkSplash(hitX, hitY, target.x, target.y, target.size, targetingArray, impact);

    rifleFire.play();
    rifleFire2.play();

}

function machinegunBullet(originX, originY, originBodySize, target, targetID, targetingArray){

    machineGunReload.play();


    var hitX = accuracyRoll(target.x, 65);
    var hitY = accuracyRoll(target.y, 65);

    var impact = 12;

    drawStar(originX + originBodySize/2, originY + originBodySize/2,8,8,3);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(originX + (originBodySize/2), originY + (originBodySize/2));
    ctx.lineTo(hitX, hitY);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    drawStar(hitX, hitY,8,4,2);

    checkSplash(hitX, hitY, target.x, target.y, target.size, targetingArray, impact);

    machineGunFire.play();
    machineGunFire2.play();
    machineGunFire3.play();
}

function cannonShell(originX, originY, originBodySize, target, targetID, targetingArray){


    cannonFire3.play();

    var hitX = accuracyRoll(target.x, 50);
    var hitY = accuracyRoll(target.y, 50);

    var impact = 80;


    drawStar(originX + originBodySize/2, originY + originBodySize/2,8,25,5);

    drawStar(hitX,hitY,10,25,15);

    ctx.beginPath();
    ctx.arc(hitX, hitY, 15, 0, Math.PI*2);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(hitX, hitY, 5, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    checkSplash(hitX, hitY, target.x, target.y, target.size, targetingArray, impact);


    cannonFire.play();
    //cannonFire2.play();
}

function shotgunShell(originX, originY, originBodySize, target, targetID, targetingArray){



  var impact = 10;
  var xArray = [];
  var yArray = [];



  shotgunShellFall.play();

  for(var i = 0; i < 6; i++){
    xArray.push(accuracyRoll(target.x, 28));
    yArray.push(accuracyRoll(target.y, 28));

  }



  drawStar(originX + originBodySize/2, originY + originBodySize/2,8,25,5);
  shotgunFire.play();
  shotgunReload.play();

  for(var j = 0; j < 6; j++){

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(originX + (originBodySize/2), originY + (originBodySize/2));
    ctx.lineTo(xArray[j], yArray[j]);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    drawStar(xArray[j],yArray[j],10,2,1);

    checkSplash(xArray[j], yArray[j], target.x, target.y, target.size, targetingArray, impact);


  }




}
