let angle =0;

function setup() {
  createCanvas(500, 500,WEBGL);
}

function draw() {
  
  // ambientLight(0,0,255);
  pointLight(0,0,255,-200,0,200);
  pointLight(255,0,0,200,0,200);
  background(175);
  
  // rectMode(CENTER);
  rotateX(angle);
  rotateY(angle*0.3);
  rotateZ(angle*1.2);

  
  noStroke();
  // normalMaterial();
  ambientMaterial(255);
 
  
  // box(10,100,50);
  torus(80,30);
  // sphere(100);
  angle += 0.03;
  
}