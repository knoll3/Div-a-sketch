var div = [];
for (var i = 0; i < 16; i++) {
  div[i] = [];
  div[i] = document.createElement("div");
  div[i].setAttribute('id', "div" + i);                              
  document.getElementById("container").appendChild(div[i]);
  for (var j = 0; j < 16; j++) {
    div[i][j] = document.createElement("div");
    div[i][j].innerHTML = "X"; 
    div[i][j].style.display = "inline-block";
    document.getElementById("div" + i).appendChild(div[i][j]);
  }
}
