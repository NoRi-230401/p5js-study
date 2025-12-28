let speed = 7; //速度
let r = 5; //半径
let n = 20; // 数
let angle = (2 * Math.PI) / n; //角度
let g = 9.8 / 3.5; // 重力加速度
let balls = Array(n).fill(null);
const fr = 60; // フレームレート
let isDrawing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255, 255, 255);
  frameRate(fr);
}


function mousePressed() {
  isDrawing = false;
  fadeToBlack();

  speed = random(5, 8); //速度
  r = random(5, 20); //半径
  n = int(random(4, 16)); // 数
  angle = (2 * Math.PI) / n; //角度
  g = 9.8 / random(1, 4); // 重力加速度
  balls = Array(n).fill(null);
  balls = balls.map((ball, i) => {
    const addx = Math.cos(angle * i);
    const addy = Math.sin(angle * i);
    const vecLocation = createVector(mouseX + addx, mouseY + addy);
    const vecVelocity = createVector(speed + addx, -1 * speed + addy);
    const vecAcceleration = createVector(0, g / fr);
    return new Ball(vecLocation, vecVelocity, vecAcceleration);
  });

  isDrawing = true;
}


function draw() {
  if (isDrawing) {
    draw2();
  }
}

function draw2() {
  fadeToBlack();
  balls.forEach((ball) => {
    ball.move();
    ball.draw();
  });
}

function fadeToBlack() {
  noStroke();
  fill(0, 30);
  rect(0, 0, width, height);
}

class Ball {
  constructor(_location, _velocity, _vecAcceleration) {
    this.location = _location;
    this.velocity = _velocity;
    this.vecAcceleration = _vecAcceleration;
  }

  move() {
    this.velocity.add(this.vecAcceleration); //　加速度を速度に足す
    this.location.add(this.velocity); // 速度を位置に足す

    if (this.location.x - r <= 0) {
      this.location.x = r;
      this.velocity.x *= -1;
    }
    if (this.location.x + r >= width) {
      this.location.x = width - r;
      this.velocity.x *= -1;
    }
    if (this.location.y - r <= 0) {
      this.location.y = r;
      this.velocity.y *= -1;
    }
    if (this.location.y + r >= height) {
      this.location.y = height - r;
      this.velocity.y *= -1;
    }
  }

  draw() {
    const { x, y } = this.location;

    stroke(x, y, 100);
    ellipse(x, y, r * 2, r * 2);
  }
}
