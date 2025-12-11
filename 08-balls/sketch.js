let b;
let balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundary();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
