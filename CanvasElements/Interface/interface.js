
/*

Name: Han Xiang Choong
Date: 06/01/17
File:interface.js

Description:

The purpose of this file is to populate the assets array with our interface assets.

Affects: assets[]
Relies on: InterfaceAssets
           interfaceSettings.js

*/

function populateInterface(){
  assets[interfaceIndex] = new Timer();
  assets[interfaceIndex + 1] = new CoordinateTracker();
  assets[interfaceIndex + 2] = new MoneyCounter();
}
