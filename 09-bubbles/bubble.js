
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = random(width/20-15,width/20+40);
    
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    // noStroke();
    fill(0,200,200,100)
    ellipse(this.x, this.y, this.r, this.r);
  }
}
