function setup() {
  createCanvas(400, 200);
  background(220);

  drawSimpleCar(100, 100);
}

function drawSimpleCar(x, y) {
  noStroke();


  fill(0, 102, 204);
  rect(x, y, 120, 30);
  rect(x + 20, y - 20, 80, 20);


  fill(0);
  ellipse(x + 25, y + 30, 20, 20);
  ellipse(x + 95, y + 30, 20, 20);
}
