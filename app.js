for (y = 0; y < 16; y++) {
  for (x = 0; x < 16; x++) {
    let div = document.createElement("div");
    div.style.width     = "20px";
    div.style.height    = "20px";
    div.style.float     = "left";
    div.style.border    = "1px solid black";
    div.style.boxSizing = "border-box";
    document.getElementById("container").appendChild(div);
    div.addEventListener('mouseover', changeColor);
  }
}

function changeColor(e) {
  e.target.style.background = "black";
}
