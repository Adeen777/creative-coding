let planets = [];
let sun;
let speedMultiplier = 1;
let showTrails = true;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  sun = new Planet(0, 0, 60, color(50, 100, 100), 0);

  planets.push(new Planet(120, 0, 10, color(200, 80, 100), 0.02)); 
  planets.push(new Planet(170, 0, 14, color(30, 80, 100), 0.015)); 
  planets.push(new Planet(220, 0, 16, color(120, 80, 100), 0.01)); 
  planets.push(new Planet(270, 0, 12, color(0, 80, 100), 0.008));
  planets.push(new Planet(350, 0, 30, color(40, 80, 100), 0.006));
  planets.push(new Planet(430, 0, 26, color(220, 80, 100), 0.004));
  planets.push(new Planet(500, 0, 20, color(180, 80, 100), 0.003));
  planets.push(new Planet(570, 0, 18, color(250, 80, 100), 0.002));

  background(0);
}

function draw() {
  if (!showTrails) background(0, 0, 0, 100);

  translate(width / 2, height / 2);

  sun.display();

  for (let p of planets) {
    p.update();
    p.display();
  }
}

function mousePressed() {
  speedMultiplier += 0.5;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    speedMultiplier = 1;
  } else if (key === 't' || key === 'T') {
    showTrails = !showTrails;
    if (!showTrails) background(0);
  }
}

class Planet {
  constructor(distance, angle, size, col, speed) {
    this.distance = distance;
    this.angle = angle;
    this.size = size;
    this.col = col;
    this.speed = speed;
  }

  update() {
    this.angle += this.speed * speedMultiplier;
  }

  display() {
    let x = this.distance * cos(this.angle);
    let y = this.distance * sin(this.angle);

    fill(this.col);
    ellipse(x, y, this.size, this.size);
  }
}
