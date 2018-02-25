function mouseover(x) {
  x.style.background = "green";
}

function mouseout(x) {
  x.style.background = "green";
}

function changeCellColor(color) {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.background = color;
  }
}

var clearButton = document.createElement("button");
clearButton.setAttribute('onclick', "changeCellColor('lightgreen')");
clearButton.innerHTML = "Clear";
document.getElementById("container").appendChild(clearButton);

gridWidth = 8;
gridHeight = 8;

var div = [];
for (var i = 0; i < gridHeight; i++) {
  div[i] = [];
  div[i] = document.createElement("div");
  div[i].setAttribute('id', "div" + i);                              
  document.getElementById("container").appendChild(div[i]);
  for (var j = 0; j < gridWidth; j++) {
    div[i][j] = document.createElement("div");
    div[i][j].setAttribute('onmouseover', "mouseover(this)");
    div[i][j].setAttribute('onmouseout', "mouseout(this)");
    div[i][j].setAttribute('class', "cell");
    document.getElementById("div" + i).appendChild(div[i][j]);
  }
}
