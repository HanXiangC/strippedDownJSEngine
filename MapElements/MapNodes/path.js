
/* This draws the path */

var pathCoords = [];
var pathPadding = 5;

/* buildingRestriction  prevents the building of turrets on the path or on top of each other */

function buildingRestriction(x, y, limit){

  for(var i = 0; i < mapNodes.length - 1; i++){

    /* Condition variables declared here to save space */

    var pathBoundaryX1 = mapNodes[i + 1].x - ctx.lineWidth/2 - limit - pathPadding;
    var pathBoundaryX2 = mapNodes[i].x + ctx.lineWidth/2 + limit + pathPadding;

    var pathBoundaryY1 = mapNodes[i + 1].y - ctx.lineWidth/2 - limit - pathPadding;
    var pathBoundaryY2 = mapNodes[i].y + ctx.lineWidth/2  + limit + pathPadding;

    /* ---------------- */

      if(x > pathBoundaryX1 && x < pathBoundaryX2
        && y > pathBoundaryY1 && y < pathBoundaryY2){
          return true;
      }
    }

  for(var i = 1; i < mapNodes.length; i++){

    /* Condition variables declared here to save space */

    var pathBoundaryX12 = mapNodes[i - 1].x - ctx.lineWidth/2 - limit - pathPadding;
    var pathBoundaryX22 = mapNodes[i].x + ctx.lineWidth/2 + limit + pathPadding;

    var pathBoundaryY12 = mapNodes[i - 1].y - ctx.lineWidth/2 - limit - pathPadding;
    var pathBoundaryY22 = mapNodes[i].y + ctx.lineWidth/2  + limit + pathPadding;

    /* ---------------- */

    if(x > pathBoundaryX12 && x < pathBoundaryX22
      && y > pathBoundaryY12 && y < pathBoundaryY22){
        return true;
    }
  }

 for(var i = 0; i < towers.length; i++){

   /* Condition variables declared here to save space */

   var towerBoundaryX1 = towers[i].x  - limit/2;
   var towerBoundaryX2 = towers[i].x + towers[i].bodySize/2 + limit;

   var towerBoundaryY1 = towers[i].y - limit/2;
   var towerBoundaryY2 = towers[i].y + towers[i].bodySize/2  + limit;

   /* ---------------- */

   if(x > towerBoundaryX1 && x < towerBoundaryX2
     && y > towerBoundaryY1 && y < towerBoundaryY2){
       return true;
     }
   }
   return false;
}

function drawPath(){
  for(var i = 1; i < mapNodes.length; i++){

    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = 25;

    if(mapNodes[i - 1].y == mapNodes[i].y){
      ctx.moveTo(mapNodes[i - 1].x - ctx.lineWidth/2, mapNodes[i - 1].y);
      ctx.lineTo(mapNodes[i].x + ctx.lineWidth/2, mapNodes[i].y);
    }

    else if(mapNodes[i - 1].x == mapNodes[i].x){
      ctx.moveTo(mapNodes[i - 1].x, mapNodes[i - 1].y - ctx.lineWidth/2);
      ctx.lineTo(mapNodes[i].x, mapNodes[i].y + ctx.lineWidth/2);
    }

    ctx.strokeStyle = "brown";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    }
  }
