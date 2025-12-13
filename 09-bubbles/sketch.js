let bubbles = [];
let bubbLen=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mouseClicked(){
  bubbles[bubbLen++] = new Bubble(mouseX,mouseY);
}