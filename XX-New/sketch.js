
function setup(){
  createCanvas(500, 500);
  background(random(255),random(255),random(255));
  rectMode(CENTER);
}

function draw(){
  rect(width/2, height/2, min(width,height)/3);
}

