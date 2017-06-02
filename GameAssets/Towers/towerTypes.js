var laserTower = {

  cost: 60,

  x: 0,
  y: 0,
  targetAngle: 0,

  bodySize: 20,
  turretSize: 10,

  projectileType: 1,

  bodyColor: "red",
  turretColor: "#333333",

  range: 250,
  rateOfFire: 1,

  target: undefined,
  engaged: false,
  chosenTarget: undefined,
  chosenTargetID: null
}

var gunTower = {

  cost: 10,

  x: 0,
  y: 0,

  bodySize: 25,
  turretSize: 10,

  projectileType: 2,

  bodyColor: "#43536E",
  turretColor: "#FFE11F",

  range: 120,
  rateOfFire: 30,

  target: undefined,
  engaged: false,
  chosenTarget: undefined,
  chosenTargetID: null
}

var machineGunTower = {

  cost: 30,

  x: 0,
  y: 0,

  bodySize: 25,
  turretSize: 10,

  projectileType: 3,

  bodyColor: "black",
  turretColor: "#FF8400",

  range: 220,
  rateOfFire: 8,

  target: undefined,
  engaged: false,
  chosenTarget: undefined,
  chosenTargetID: null
}

var cannonTower = {

  cost: 55,

  x: 0,
  y: 0,

  bodySize: 30,
  turretSize: 20,

  projectileType: 4,

  bodyColor: "#4A4A4A",
  turretColor: "#D4D4D4",

  range: 350,
  rateOfFire: 120,

  target: undefined,
  engaged: false,
  chosenTarget: undefined,
  chosenTargetID: null
}

var shotgunTurret = {

  cost: 20,

  x: 0,
  y: 0,

  bodySize: 25,
  turretSize: 10,

  projectileType: 6,

  bodyColor: "#648F9E",
  turretColor: "#C92626",

  range: 95,
  rateOfFire: 120,

  target: undefined,
  engaged: false,
  chosenTarget: undefined,
  chosenTargetID: null
}
