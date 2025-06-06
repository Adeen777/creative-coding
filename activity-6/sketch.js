let angle = 0;
let hueValue = 0;

function setup() {
  createCanvas(1000, 1000);
  textSize(48);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  background(20, 25, 40);
}

function draw() {

  fill(240, 30, 10, 10); 
  rect(0, 0, width * 2, height * 2);

  hueValue = (hueValue + 1) % 360;

  push();
  translate(width / 2, height / 2);
  rotate(radians(angle));
  fill(hueValue, 100, 60);
  text("step on no pets", 0, 0);
  pop();

  angle += 0.5;
}
