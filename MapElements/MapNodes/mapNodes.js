
/* These MapNode objects function as way points and nothing more */

var MapNode = function(nodeSettings){

  var mapNodeElement = {};

  function create(){
    mapNodeElement.x = nodeSettings.x;
    mapNodeElement.y = nodeSettings.y;
    mapNodeElement.size = nodeSettings.size;
    mapNodeElement.directionalTrigger = nodeSettings.directionalTrigger;
  }

  function draw(){
    ctx.beginPath();
    ctx.arc(mapNodeElement.x, mapNodeElement.y, mapNodeElement.size, 0, Math.PI*2);
    ctx.fillStyle = "#B5B5B5";
    ctx.fill();
    ctx.closePath();
  }

  function init(){
    create();
    draw();
  }

  this.render = function(){
    init();
  }

}

/* populateNodes places our nodes in the static object array and is called in scripts.js */

function populateNodes(){

  var mapNodeIndex = 0;

  /* mapNodes array contains our waypoints, and holds them */

  for(var assetIndex = numberOfInterfaceElements; assetIndex < numberOfInterfaceElements + numberOfNodes; assetIndex++){
    if(mapNodeIndex < numberOfNodes){
      assets[assetIndex] = new MapNode(mapNodes[mapNodeIndex]);
      mapNodeIndex += 1;

    }

  }
}
