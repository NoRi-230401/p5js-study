let r;
let radiusSlider,thetaMaxSlider, phiMaxSlider,densitySlider;
let radius,thetaMax, phiMax, density;

function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  noFill();

  //Create slider!
  radius = createDiv();
  radius.class("valueDisplay");
  radiusSlider = createSlider(0, width / 2.5, width / 3, 1);
  radiusSlider.class("Slider");

  phiMax = createDiv();
  phiMax.class("valueDisplay");
  phiMaxSlider = createSlider(0, 180, 180, 1);
  phiMaxSlider.class("Slider");

  thetaMax = createDiv();
  thetaMax.class("valueDisplay");
  thetaMaxSlider = createSlider(0, 360, 360, 1);
  thetaMaxSlider.class("Slider");

  density = createDiv();
  density.class("valueDisplay");
  densitySlider = createSlider(6, 90, 36, 1);
  densitySlider.class("Slider");
}

function draw() {
  background(0);
  orbitControl();

  strokeWeight(1);
  stroke("yellow");
  debugMode(r * 2, 8, 0, 0, 0, r / 5, 0, -r, 0);

  push();
  rotateZ(23.4);
  rotateY(frameCount * 0.25);

  r = radiusSlider.value();

  strokeWeight(1);
  stroke("orange");
  line(0, r * 1.2, 0, 0, -r * 1.2, 0); // y-axis

  stroke("skyblue");
  strokeWeight(3);
  for (let phi = 0; phi < phiMaxSlider.value(); phi += 360 / densitySlider.value()) {
    beginShape(POINTS);
    for (let theta = 0;theta < thetaMaxSlider.value(); theta += 360 / densitySlider.value()) {
      let y = -r * cos(phi);
      let x = r * sin(phi) * sin(theta);
      let z = r * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }

  pop();

  radius.html("radius: " + radiusSlider.value());
  thetaMax.html("theta max: " + thetaMaxSlider.value());
  phiMax.html("phi max: " + phiMaxSlider.value());
  density.html("Density: " + densitySlider.value());
}
