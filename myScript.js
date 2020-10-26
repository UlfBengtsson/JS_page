console.log("from console.log");
//alert("don´t you unless you must");
//var name = "<h1>Ulf</h1>";

var myDemoElement = document.getElementById("demo");

//myDemoElement.innerHTML = name;
//myDemoElement.style.color = "blue";

document.getElementById("changeMe").classList.add("maxW");

//document.write("this is write");

function createDivInsideDemo(addClassCss) {
  var myBlock = document.createElement("div");
  myBlock.classList.add(addClassCss);

  myDemoElement.appendChild(myBlock);
}

createDivInsideDemo("blueBlock");
createDivInsideDemo("redBlock");
