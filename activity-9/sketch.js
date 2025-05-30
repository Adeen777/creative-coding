let colors = [
  { name: "Blue", value: 42, col: "#0074D9" },
  { name: "Green", value: 14, col: "#2ECC40" },
  { name: "Purple", value: 14, col: "#B10DC9" },
  { name: "Red", value: 8, col: "#FF4136" },
  { name: "Black", value: 7, col: "#111111" },
  { name: "Orange", value: 5, col: "#FF851B" },
  { name: "Yellow", value: 3, col: "#FFDC00" },
  { name: "Brown", value: 3, col: "#8B4513" },
  { name: "White", value: 2, col: "#FFFFFF" },
  { name: "Grey", value: 2, col: "#AAAAAA" }
];

function setup() {
  let barWidth = 60;
  let spacing = 20;
  let canvasWidth = colors.length * (barWidth + spacing) + spacing;
  createCanvas(canvasWidth, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(255);
  fill(0);
  textSize(24);
  text("Favorite Colors Survey (%)", width / 2, 40);

  let barWidth = 60;
  let spacing = 20;
  let startX = spacing;
  let maxHeight = 300;

  for (let i = 0; i < colors.length; i++) {
    let barHeight = map(colors[i].value, 0, 42, 0, maxHeight);
    let x = startX + i * (barWidth + spacing);
    let y = height - barHeight - 100;

    fill(colors[i].col);
    rect(x, y, barWidth, barHeight);

    fill(0);
    textSize(14);
    text(colors[i].value + "%", x + barWidth / 2, y - 15);

    textSize(12);
    text(colors[i].name, x + barWidth / 2, height - 70);
  }

  noLoop();
}
