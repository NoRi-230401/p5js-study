// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let DigiTimeDisp;

function setup() {
  createCanvas(500, 500);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
  DigiTimeDisp = radius-2;

  describe("Functioning pink clock on a grey background.");
}

function draw() {
  background(230);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  noStroke();
  fill(244, 122, 158); // pink
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill(0); // black
  ellipse(0, 0, clockDiameter, clockDiameter);

  let SECON = second();
  let MINUT = minute();
  let HOURS = hour();

  // Calculate angle for each hand
  let secondAngle = map(SECON, 0, 60, 0, 360);
  let minuteAngle = map(MINUT + SECON / 60, 0, 60, 0, 360);
  let hourAngle = map((HOURS % 12) + MINUT / 60 + SECON / 3600, 0, 12, 0, 360);
  stroke(255);  // white default

  // Second hand
  push();
  rotate(secondAngle);
  stroke(255, 0, 0);
  strokeWeight(1);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(2);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();

  // 各時刻の位置に印をつける（時針用）
  push();
  strokeWeight(10);
  for (let ticks = 0; ticks < 12; ticks += 1) {
    point(0, -secondsRadius * 1.1);
    rotate(30);
  }
  pop();

  // デジタル時刻の表示
  fill(100); // 文字色を黒に設定
  textSize(32);
  textAlign(LEFT, TOP); // 中心に揃える
  text(
    HOURS.toString().padStart(2, "0") + ":" +
      MINUT.toString().padStart(2, "0") + ":" +
      SECON.toString().padStart(2, "0"),
      -DigiTimeDisp, -DigiTimeDisp );

}
