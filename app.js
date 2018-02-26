function drawGrid(size) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let div = document.createElement("div");
      let cellSize = 320 / size;
      div.style.width     = cellSize + "px";
      div.style.height    = cellSize + "px";
      div.style.float     = "left";
      div.style.boxSizing = "border-box";
      div.style.backgroundColor = 'rgb(255, 255, 255)'
      document.getElementById("container").appendChild(div);
      div.addEventListener('mouseover', changeColor);
    }
  }
}

function changeColor(e) {
  let color = e.target.style.backgroundColor;
  let colorIndex = getFirstColorIndex(color);
  colorIndex -= 25;
  e.target.style.backgroundColor = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex}`;
}

function getFirstColorIndex(str) {
  let regex = /.*?(\d+)/;
  let colorIndex = regex.exec(str)[1]
  return colorIndex;
}

function deleteCells() {
  let cells = document.getElementById("container");
  while (cells.hasChildNodes()) {
    cells.removeChild(cells.lastChild); 
  }
  let size = prompt("Input grid size:");
  drawGrid(size);
}

drawGrid(16);