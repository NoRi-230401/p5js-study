let r = 0;
let axisLen;
let thetaMaxSlider, phiMaxSlider;
let densitySlider;
let radiusSlider;
let radius;
let thetaMax, phiMax;
let density;


function setup(){
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();

  r = width/4;
  axisLen = width/2.6;

  //Create slider!
  radius = createDiv();
  radius.class("valueDisplay");
  radiusSlider = createSlider(0, width/3, width/4, 1);
  radiusSlider.class("Slider");

  phiMax = createDiv();
  phiMax.class("valueDisplay");
  phiMaxSlider = createSlider(0, 180, 180, 5);
  phiMaxSlider.class("Slider");

  thetaMax = createDiv();
  thetaMax.class("valueDisplay");
  thetaMaxSlider = createSlider(0, 360, 360, 10);
  thetaMaxSlider.class("Slider");

  density = createDiv();
  density.class("valueDisplay");
  densitySlider = createSlider(13, 72, 36, 1);
  densitySlider.class("Slider");

}

function draw(){
  background(0);
  orbitControl(4, 4);//Mouse control
  stroke(321, 38, 80);
  strokeWeight(2);
  rotateZ(23.4);
  rotateX(-30);
   rotateY(-30);

  // rotateX(-30);
  // rotateY(-30);
  r = radiusSlider.value();

  for(let phi = 0; phi < phiMaxSlider.value(); phi += 360/densitySlider.value()){
    beginShape(POINTS);
    for(let theta = 0; theta < thetaMaxSlider.value(); theta += 360/densitySlider.value()){
      let y = -r * cos(phi);
      let x = r * sin(phi) * sin(theta);
      let z = r * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }

  strokeWeight(5);
  stroke('red');
  line(0,0,0,axisLen,0,0);  // x-axis
  stroke('green');
  line(0,0,0,0,-axisLen,0);  // y-axis
  stroke('blue');
  line(0,0,0,0,0,axisLen);  // z-axis

  thetaMax.html("theta max value: " + thetaMaxSlider.value());
  phiMax.html("phi max value: " + phiMaxSlider.value());
  radius.html("radius value: " + radiusSlider.value());
  let mappedDensity = int(map(densitySlider.value(), 13, 72, 1, 60));
  density.html("Density: " + mappedDensity);

}
