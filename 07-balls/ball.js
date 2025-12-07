class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-2, 2);
    this.dy = random(-3, 3);
    this.col = color(random(255), random(255), random(255));
  }

  drawCircle() {
    fill(this.col);
    ellipse(this.x, this.y, 30, 30);
  }

  moveCircle() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  checkBoundary() {
    if (this.x > width || this.x < 0) {
      this.dx = this.dx * -1;
    }
    if (this.y > height || this.y < 0) {
      this.dy = this.dy * -1;
    }
  }
}

