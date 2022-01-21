function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,130);
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(3);
  ellipse(200,200, 150, 150);
  fill(255,0,0);
 beginShape();
  vertex(200, 125);
  vertex(220, 180);
  vertex(275,180);
  vertex(230, 220);
  vertex(250, 265);
  vertex(200, 240);
  vertex(150, 265);
  vertex(170, 220);
  vertex(125, 180);
  vertex(180,180);
  endShape(CLOSE);
}