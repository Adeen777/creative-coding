let mic;
let smoothedLevel = 0;

function setup() {
  createCanvas(600, 600);
  mic = new p5.AudioIn();

  mic.start(
    () => console.log("Mic started successfully."),
    (err) => console.error("Mic failed to start:", err)
  );
}

function draw() {
  background(lerpColor(color(220), color(100, 200, 255), smoothedLevel * 5));

  let level = mic.getLevel();
  smoothedLevel = lerp(smoothedLevel, level, 0.1);

  let size = map(smoothedLevel, 0, 0.3, 50, 300);
  size = constrain(size, 50, 300);

  fill(100, 150, 255, 200);
  noStroke();
  ellipse(width / 2, height / 2, size);

  fill(50);
  textSize(16);
  textAlign(CENTER);
  text("Mic Level: " + nf(smoothedLevel, 1, 3), width / 2, height - 30);
}
