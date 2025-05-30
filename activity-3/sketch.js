function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(30, 30, 60);
  translate(width / 2, height / 2);

  drawSimpleAlien();
}

function drawSimpleAlien() {

  push();
  fill(0, 255, 150);
  ellipse(0, 40, 100, 120);
  pop();

  push();
  fill(0, 200, 255);
  ellipse(0, -40, 80, 80);
  pop();

  push();
  fill(255);
  ellipse(-15, -45, 20, 20);
  ellipse(15, -45, 20, 20);
  fill(0);
  ellipse(-15, -45, 8, 8);
  ellipse(15, -45, 8, 8);
  pop();

  push();
  stroke(0, 255, 200);
  strokeWeight(4);
  line(-20, -80, -30, -100);
  line(20, -80, 30, -100);
  fill(255, 100, 200);
  ellipse(-30, -100, 10, 10);
  ellipse(30, -100, 10, 10);
  pop();

  push();
  stroke(0, 255, 150);
  strokeWeight(6);
  line(-50, 40, -80, 60);
  line(50, 40, 80, 60);
  pop();

  push();
  fill(0, 255, 150);
  ellipse(-20, 100, 20, 10);
  ellipse(20, 100, 20, 10);
  pop();
}
