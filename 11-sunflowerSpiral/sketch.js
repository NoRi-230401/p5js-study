/*
  Tutorial by me :)
    https://www.youtube.com/watch?v=RrSOv9FH6uo

  inspiration + explanation for golden ratio: 
    Numberphile - The Golden Ratio (why it is so irrational)
    https://www.youtube.com/watch?v=sj8Sg8qnjOg
*/

function setup() {
  const size = min(window.innerWidth, window.innerHeight);
  createCanvas(size, size);
  noStroke();
  colorMode(HSL, 1);
}

function cosn(v) {
  return cos(v * TWO_PI) * 0.5 + 0.5;
}

function invCosn(v) {
  return 1 - cosn(v);
}

const radius =  Math.sqrt(0.5);
const dotSize = 0.1;
const PHI = (1 + Math.sqrt(5)) / 2;

// const frames = 1000;
const frames = 1000;

let t;
function draw() {
  scale(width, height);
  background(0);
  
  // t = mouseX / width; 
  t = fract(frameCount / frames);
  const count = 2000 * invCosn(t);
  
  
  for (let i=1; i< count; i++) {
    const f = i / count;
    const angle = i * PHI;
    const dist = f * radius;
    
    const x = 0.5 + cos(angle * TWO_PI) * dist;
    const y = 0.5 + sin(angle * TWO_PI) * dist;
    
    const sig = pow(cosn(f - t * 6), 2);
    // const sig = 1;
    const r =  f * sig * dotSize;
    
    const hue = fract(t + f * 0.5);
    const sat = 1;
    const light = 0.6 * sig + 0.25;
    const clr = color(hue, sat, light);
    fill(clr);
  
    circle(x, y , r);
  }
}