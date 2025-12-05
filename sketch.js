// 2D graphic function

const starMax = 200;
let arStarx = {};
let arStary = {};
const toumei = 255;
const minCSize = 5;
let maxCSize;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(0);
  frameRate(10);
  maxCSize = min(width, height) / 4;

  for (let i = 0; i < starMax; i++) {
    arStarx[i] = random(width);
    arStary[i] = random(height);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < starMax; i++) {
    stroke(255);
    strokeWeight(2);
    point(arStarx[i], arStary[i]);
  }

  let cSize = random(minCSize, maxCSize);
  noStroke();

  // circle
  fill(random(255), random(255), random(255), toumei);
  circle(random(width), random(height), cSize);

  // rect
  push();
  fill(random(255), random(255), random(255), toumei);
  rotate(random(90));
  rect(random(width), random(height), cSize, cSize);
  pop();

  // traiangle
  push();
  fill(random(255), random(255), random(255), toumei);
  let x = random(width);
  let y = random(height);
  rotate(random(120));
  triangle(
    x - cSize / 2,
    y,
    x + cSize / 2,
    y,
    x,
    y - (cSize * Math.sqrt(3)) / 2
  );
  pop();

  // line
  push();
  stroke(random(255), random(255), random(255), toumei);
  strokeWeight(4);
  const x1 = random(width);
  const y1 = random(height);
  rotate(random(360));
  line(x1 - cSize/2, y1, x1 + cSize/2, y1);
  pop();
}
