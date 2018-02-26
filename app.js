drawGrid(16);

//--- FUNCTION DEFINITIONS --- //

function drawGrid(size) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let div = document.createElement("div");
      let cellSize = 680 / size;
      div.style.width     = cellSize + "px";
      div.style.height    = cellSize + "px";
      div.setAttribute('class', 'cell');
      let colorIndex = 255;
      let color = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex})`;
      div.style.backgroundColor = color;
      document.getElementById("container").appendChild(div);
      div.addEventListener('mouseover', function(e) {
        colorIndex = colorIndex > 0 ? colorIndex - 25 : 0;
        let color = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex})`;
        e.target.style.backgroundColor = color;
      });
    }
  }
}

function deleteCells() {
  let cells = document.getElementById("container");
  while (cells.hasChildNodes()) {
    cells.removeChild(cells.lastChild); 
  }
}

function updateGridSize() {
  let size = document.getElementById('gridSize').value;
  deleteCells();
  drawGrid(size);
}