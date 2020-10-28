"use strict";
console.log("from console.log");
//alert("don´t you unless you must");
//var name = "<h1>Ulf</h1>";

var myDemoElement = document.getElementById("demo");

//myDemoElement.innerHTML = name;
//myDemoElement.style.color = "blue";

document.getElementById("changeMe").classList.add("maxW");

//document.write("this is write");

var boxToggle = true;

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

createDivInsideDemo("blueBlock");
createDivInsideDemo("redBlock");

let a = "bad way to make a varible";
console.log("var a:", a);

document.getElementById("toggleBox").addEventListener("wheel", (event) => {
  event.preventDefault();
  createDivInsideDemo(boxToggle ? "blueBlock" : "redBlock");
});
