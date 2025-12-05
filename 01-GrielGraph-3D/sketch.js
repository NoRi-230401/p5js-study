// Gabriel Graph (3D)

const NUM_POINTS = 360;
const BOX_THICKNESS = 4;

let points = [];
let edges = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // generate random 3D points on the surface of a sphere
  for (let i = 0; i < NUM_POINTS; i++) {
    const p = p5.Vector.random3D().mult(300);
    points.push(p);
  }

  // build Gabriel Graph edges
  buildGabrielGraph();
}

function draw() {
  background(255);
  orbitControl();
  rotateY(frameCount * -0.001);

  // draw connecting boxes
  fill(255);
  stroke(0);
  for (const e of edges) {
    boxLine(e.a, e.b);
  }
}

// Build edges for a Gabriel Graph in 3D.
function buildGabrielGraph() {
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i];
      const b = points[j];
      const mid = p5.Vector.add(a, b).mult(0.5);
      const radiusSq = p5.Vector.sub(a, mid).magSq();

      // Check if any other point is inside the sphere
      let ok = true;
      for (let k = 0; k < points.length; k++) {
        if (k === i || k === j) continue;
        const distSq = p5.Vector.sub(points[k], mid).magSq();
        if (distSq < radiusSq) {
          ok = false;
          break;
        }
      }
      if (ok) edges.push({ a, b });
    }
  }
}

// Draw a thin box connecting two 3D points
function boxLine(p1, p2) {
  // Compute midpoint and direction vector
  const mid = p5.Vector.add(p1, p2).div(2);
  const dir = p5.Vector.sub(p2, p1);
  const len = dir.mag();
  const angleY = atan2(dir.x, dir.z);
  const angleX = acos(constrain(dir.y / len, -1, 1));

  push();
  translate(mid.x, mid.y, mid.z);
  rotateY(angleY);
  rotateX(angleX);
  box( BOX_THICKNESS, len,  BOX_THICKNESS);
  pop();
}
