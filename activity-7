let trail = [];

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(15, 15, 30, 30);

  trail.push({ x: mouseX, y: mouseY, t: frameCount });
  
  if (trail.length > 40) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let age = frameCount - pos.t;
    let size = map(i, 0, trail.length, 5, 30);
    let angle = frameCount * 0.5 + i * 10;

    push();
    translate(pos.x, pos.y);
    rotate(radians(angle));
    fill(255 - i * 5, 100 + i * 3, 255, 150);
    rect(0, 0, size, size);
    pop();
  }
}
