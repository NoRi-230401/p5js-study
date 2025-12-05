let minRe = -2.0;
let maxRe = 0.5;
let minIm = -1.0;
let maxIm = 1.0;
let maxIterations = 1000;

let dragging = false;
let startMouseX, startMouseY;
let startMinRe, startMaxRe, startMinIm, startMaxIm;

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
  colorMode(HSB, 255);
  noLoop();
  drawMandelbrot();
}

function drawMandelbrot() {
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, minRe, maxRe);
      let b = map(y, 0, height, minIm, maxIm);

      let ca = a;
      let cb = b;

      let n = 0;
      while (n < maxIterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

      // カラフルで明るい色付け
      let hue = (n * 10) % 255;
      let saturation = 220;
      let brightness = (n === maxIterations) ? 50 : map(n, 0, maxIterations, 200, 255);

      let col = color(hue, saturation, brightness);

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = red(col);
      pixels[pix + 1] = green(col);
      pixels[pix + 2] = blue(col);
      pixels[pix + 3] = 255;
    }
  }

  updatePixels();
}

// 左クリックでズームイン、右クリックでズームアウト
function mousePressed() {
  if (mouseButton === LEFT || mouseButton === RIGHT) {
    let centerRe = map(mouseX, 0, width, minRe, maxRe);
    let centerIm = map(mouseY, 0, height, minIm, maxIm);

    let zoomFactor;
    if (mouseButton === LEFT) {
      zoomFactor = 0.5; // ズームイン
    } else if (mouseButton === RIGHT) {
      zoomFactor = 2.0; // ズームアウト
    }

    let rangeRe = (maxRe - minRe) * zoomFactor;
    let rangeIm = (maxIm - minIm) * zoomFactor;

    minRe = centerRe - rangeRe / 2;
    maxRe = centerRe + rangeRe / 2;
    minIm = centerIm - rangeIm / 2;
    maxIm = centerIm + rangeIm / 2;

    redraw();
    drawMandelbrot();
  } else {
    // ドラッグ開始
    dragging = true;
    startMouseX = mouseX;
    startMouseY = mouseY;
    startMinRe = minRe;
    startMaxRe = maxRe;
    startMinIm = minIm;
    startMaxIm = maxIm;
  }
}

function mouseDragged() {
  if (dragging) {
    let dx = mouseX - startMouseX;
    let dy = mouseY - startMouseY;

    let rangeRe = startMaxRe - startMinRe;
    let rangeIm = startMaxIm - startMinIm;

    let offsetRe = map(dx, 0, width, 0, rangeRe);
    let offsetIm = map(dy, 0, height, 0, rangeIm);

    minRe = startMinRe - offsetRe;
    maxRe = startMaxRe - offsetRe;
    minIm = startMinIm - offsetIm;
    maxIm = startMaxIm - offsetIm;

    redraw();
    drawMandelbrot();
  }
}

function mouseReleased() {
  dragging = false;
}

// キー操作で制御
function keyPressed() {
  if (key === 's') {
    noLoop(); // 停止
    console.log("描画停止");
  } else if (key === 'r') {
    loop();   // 再開
    console.log("描画再開");
  } else if (key === 'n') {
    // 初期範囲にリセット
    minRe = -2.0;
    maxRe = 0.5;
    minIm = -1.0;
    maxIm = 1.0;
    redraw();
    drawMandelbrot();
    console.log("リセットして再描画");
  }
}