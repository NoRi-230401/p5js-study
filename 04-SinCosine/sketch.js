let circleX = 300;
let circleY = 200;
let circleRadius = 120;

let graphX = 70;
let graphY = 450;
let graphAmplitude = 80;
let graphPeriod = 460;
let speed=15  // sec/1sycle


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(360/speed);
  background(1);
}

let angle = 0;

function draw() {
  background(0);
  angle %= 360;

  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(`angle: ${angle} degrees`, 25, 25);

  // Draw circle and diameters
  push();
  noFill();
  // stroke(128);
  strokeWeight(3);
  translate(circleX, circleY);

  // Draw moving points(1)
  stroke(200);
  let pointX = circleRadius * cos(angle);
  let pointY = -circleRadius * sin(angle);
  line(0, 0, pointX, pointY);
  stroke(128);

  // Draw circle 
  circle(0, 0, 2 * circleRadius);
  line(0, -circleRadius, 0, circleRadius);
  line(-circleRadius, 0, circleRadius, 0);

  // Draw moving points(2)
  // let pointX = circleRadius * cos(angle);
  // let pointY = -circleRadius * sin(angle);
  // line(0, 0, pointX, pointY);
  noStroke();
  fill("white");
  circle(pointX, pointY, 10);

  // Draw cosine point
  fill("orange");
  circle(pointX, 0, 10);

  // Draw sine point
  fill("red");
  circle(0, pointY, 10);
  pop();

  // Draw graph
  stroke("grey");
  strokeWeight(3);
  line(graphX, graphY, graphX + graphPeriod, graphY);
  line(graphX, graphY - graphAmplitude, graphX, graphY + graphAmplitude);
  line(graphX + graphPeriod,graphY - graphAmplitude,graphX + graphPeriod,graphY + graphAmplitude);

  fill("grey");
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  text("0", graphX, graphY + graphAmplitude + 20);
  text("360", graphX + graphPeriod, graphY + graphAmplitude + 20);
  text("1", graphX / 2, graphY - graphAmplitude);
  text("0", graphX / 2, graphY);
  text("-1", graphX / 2, graphY + graphAmplitude);

  fill("orange");
  text("cos", graphX + graphPeriod + graphX / 2, graphY - graphAmplitude);
  fill("red");
  text("sin", graphX + graphPeriod + graphX / 2, graphY);

  // Draw cosine curve
  noFill();
  stroke("orange");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - graphAmplitude * cos(t);
    vertex(x, y);
  }
  endShape();

  // Draw sine curve
  noFill();
  stroke("red");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - graphAmplitude * sin(t);
    vertex(x, y);
  }
  endShape();

  // Draw moving line
  let lineX = map(angle, 0, 360, graphX, graphX + graphPeriod);
  stroke("grey");
  line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);

  // Draw moving points on graph
  let orangeY = graphY - graphAmplitude * cos(angle);
  let redY = graphY - graphAmplitude * sin(angle);
  noStroke();
  fill("orange");
  circle(lineX, orangeY, 10);

  fill("red");
  circle(lineX, redY, 10);

  angle += 1;
}
