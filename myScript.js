"use strict"; //https://www.w3schools.com/js/js_strict.asp
var boxToggle = true;
var myDemoElement = document.getElementById("demo");
document.getElementById("changeMe").classList.add("maxW");
console.log("from console.log");

//------------------- functions section --------------------------------------------------------------------

function createDivInsideDemo(addClassCss) {
  var myBlock = document.createElement("div");
  myBlock.classList.add(addClassCss);

  myDemoElement.appendChild(myBlock);

  if (addClassCss === "blueBlock") {
    boxToggle = false;
  } else {
    boxToggle = true;
  }
}

//-------------------- Event Listeners ----------------------------------------------------------------------

document.getElementById("toggleBox").addEventListener("wheel", (event) => {
  event.preventDefault();
  console.log(event);
  createDivInsideDemo(boxToggle ? "blueBlock" : "redBlock");
});

//-------------------- workshop --------------------------------------------

var ticTacToeArray = [
  ["blueBlock", "redBlock", "blueBlock"],
  ["redBlock", "blueBlock", "redBlock"],
  ["blueBlock", "redBlock", "blueBlock"],
];

function createMap(mapArray) {
  console.log("map length", mapArray[0].length);
  myDemoElement.style.height = 50 * mapArray.length + "px";
  myDemoElement.style.width = 50 * mapArray[0].length + "px";

  for (let y = 0; y < mapArray.length; y++) {
    for (let x = 0; x < mapArray[y].length; x++) {
      let myBlock = document.createElement("div");
      myBlock.classList.add(mapArray[y][x]);
      myBlock.id = "y" + y + "x" + x;
      myDemoElement.appendChild(myBlock);
    }
  }
}

createMap(ticTacToeArray);
