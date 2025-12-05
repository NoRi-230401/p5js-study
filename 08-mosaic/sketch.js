// mosaic
//  fill the mosaic grid with color pattern

function drawGrid(cols, rows, callback) {
  let w = width / cols;
  let h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      callback(x, y, w, h); // ← ここでcallback関数が呼ばれる
    }
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(1);
}

const arGrid = [2, 3, 5, 10, 20, 30, 50];
const arLen = arGrid.length;
let findex;

function draw() {
  findex = frameCount - 1;
  let gridLen = arGrid[findex % arLen];
  
  drawGrid(gridLen, gridLen, (x, y, w, h) => {
    rectFill();
    rect(x, y, w, h);
  });
}

function rectFill() {
  let fcnt01 = Math.floor(findex / arLen);
  let fcnt02 = fcnt01 % 5;

  switch (fcnt02) {
    case 0:
      fill(random(255));
      break;

    case 1:
      fill(random(255), 0, 0);
      break;

    case 2:
      fill(0, random(255), 0);
      break;

    case 3:
      fill(0, 0, random(255));
      break;

    case 4:
      fill(random(255), random(255), random(255));
      break;

    default:
      break;
  }
}
