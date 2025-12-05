let planets = [];

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  noStroke();

  // 惑星の定義（距離, サイズ, 色, 公転速度）
  planets.push(new Planet(0, 50, color(255, 204, 0), 0)); // 太陽
  planets.push(new Planet(80, 10, color(200, 100, 255), 1.6)); // 水星
  planets.push(new Planet(120, 14, color(255, 150, 100), 1.2)); // 金星
  planets.push(new Planet(160, 16, color(100, 200, 255), 1)); // 地球
  planets.push(new Planet(200, 12, color(255, 100, 100), 0.8)); // 火星
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let p of planets) {
    p.update();
    p.display();
  }
}

class Planet {
  constructor(distance, size, col, speed) {
    this.distance = distance;
    this.size = size;
    this.col = col;
    this.angle = random(360);
    this.speed = speed;
  }

  update() {
    this.angle += this.speed;
  }

  display() {
    let x = cos(this.angle) * this.distance;
    let y = sin(this.angle) * this.distance;

    fill(this.col);
    ellipse(x, y, this.size);
  }
}