const w = 500;
const h = 700;
const frate = 10;
const nGear = 20;
const bGear = 1.12;
const gSpeed = 15; // sec/1回転
const mulGear = 2;
let rGear;
let rSpace;
let radGear;

function setup() {
  createCanvas(w, h);
  rGear = min(w, h) / 8;
  rSpace = rGear + rGear * bGear;
  radGear = TWO_PI / nGear;
  frameRate(frate);
  strokeWeight(2);
  // noLoop();
}

// function mousePressed(){
//   redraw();
// }

function draw() {
  background(0);
  let radRotate = (TWO_PI / gSpeed) * (frameCount / frate );

  // Red
  push();
  translate(w / 2, h / 2);
  rotate(radRotate);
  stroke("red");
  drawGear(nGear, rGear);
  pop();

  // Blue
  push();
  translate(w / 2 - rSpace, h / 2);
  rotate(-radRotate);
  stroke("Blue");
  drawGear(nGear, rGear);
  pop();

  //Green
  push();
  // stroke(color(0, 0, 200));
  translate(w / 2, h / 2 - rGear*(bGear+mulGear));
  rotate(-radRotate/2);
  stroke("Green");
  drawGear2(mulGear);
  pop();

  //Sky Blue
  push();
  stroke(color(0, 255, 255));
  translate(w / 2 + rSpace / Math.sqrt(2), h / 2 + rSpace / Math.sqrt(2));
  rotate(-radRotate + PI/2);
  drawGear(nGear, rGear);
  pop();
}

function drawGear(n, r) {
  for (i = 0; i < TWO_PI; i += 0.01) {
    let y1 = 0;
    if (sin(i * n) >= 0) {
      y1 = r;
    } else {
      y1 = r * bGear;
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }

  fill("white");
  ellipse(0, 0, 10);
  fill("yellow");
  ellipse(0, r*4/5, 10);
}

function drawGear2(mul) {
  const n = mul * nGear;
  const r = mul * rGear;

  for (i = 0; i < TWO_PI; i += 0.01) {
    let y1 = 0;
    if (sin(i * n) >= 0) {
      y1 = r;
    } else {
      y1 = r + rGear*(bGear-1);
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }

  fill("white");
  ellipse(0, 0, 10);
  fill("yellow");
  ellipse(-r*4/5,0, 10);
  ellipse(r*4/5,0, 10);
  
}


