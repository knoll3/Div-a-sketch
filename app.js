function mouseover(x) {
  x.style.background = "green";
}

function mouseout(x) {
  x.style.background = "green";
}

var gridWidth = 16;
var gridHeight = 10;

var div = [];
for (var i = 0; i < gridHeight; i++) {
  div[i] = [];
  div[i] = document.createElement("div");
  div[i].setAttribute('id', "div" + i);                              
  document.getElementById("container").appendChild(div[i]);
  for (var j = 0; j < gridWidth; j++) {
    div[i][j] = document.createElement("div");
    div[i][j].style.display = "inline-block";
    div[i][j].style.background = "lightgreen";
    div[i][j].style.margin = "2px";
    div[i][j].style.height = "30px";
    div[i][j].style.width = "30px";
    div[i][j].setAttribute('onmouseover', "mouseover(this)");
    div[i][j].setAttribute('onmouseout', "mouseout(this)");
    document.getElementById("div" + i).appendChild(div[i][j]);
  }
}
