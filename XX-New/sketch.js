const w = 600;
const h = 800;
const frate = 60;
const nGear = 30;
const bGear = 1.12;
let rGear;
let rSpace;
let radGear;

function setup() {
  createCanvas(w, h);
  rGear = min(w, h) / 8;
  rSpace = rGear + rGear * bGear;
  radGear = TWO_PI / nGear;
  frameRate(frate);
}

function draw() {
  background(0);
  let radRotate = (TWO_PI / 30) * (frameCount / frate );

  // Red
  push();
  stroke(color(200, 0, 0));
  translate(w / 2, h / 2);
  rotate(radRotate);
  drawGear(nGear, rGear);
  pop();

  // Green
  push();
  stroke(color(0, 200, 0));
  translate(w / 2 - rSpace, h / 2);
  rotate(-radRotate);
  drawGear(nGear, rGear);
  pop();

  //Blue
  push();
  stroke(color(0, 0, 200));
  translate(w / 2, h / 2 - rGear*(2+bGear));
  rotate(-radRotate/2 - radGear/4);
  drawGear2(2*nGear, 2*rGear);
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
    var y1 = 0;
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

function drawGear2(n, r) {
  for (i = 0; i < TWO_PI; i += 0.01) {
    var y1 = 0;
    if (sin(i * n) >= 0) {
      y1 = r;
    } else {
      // y1 = r * bGear;
      y1 = r + rGear*(bGear-1);
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }

  fill("white");
  ellipse(0, 0, 10);
  fill("yellow");
  // ellipse(0, r*4/5, 10);
  // ellipse(0, -r*4/5, 10);
  ellipse(-r*4/5,0, 10);
  ellipse(r*4/5,0, 10);
  
}


