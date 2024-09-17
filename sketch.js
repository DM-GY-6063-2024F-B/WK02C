function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  background(200);


  let centerX = 100;
  let centerY = 100;

  fill(20, 120, 220);
  ellipse(centerX, centerY, 100);

  fill(0);
  ellipse(centerX - 20, centerY - 16, 30);
  ellipse(centerX + 20, centerY - 16, 30);

  fill(255);
  ellipse(centerX - 30, centerY - 22, 10);
  ellipse(centerX + 10, centerY - 22, 10);

  push();
  fill(200, 20, 20);
  noStroke();
  ellipse(centerX, centerY + 20, 20, 30);
  pop();

  // face 2
  centerX = 250;
  centerY = 100;

  fill(20, 120, 220);
  ellipse(centerX, centerY, 100);

  fill(0);
  ellipse(centerX - 20, centerY - 16, 30);
  ellipse(centerX + 20, centerY - 16, 30);

  fill(255);
  ellipse(centerX - 30, centerY - 22, 10);
  ellipse(centerX + 10, centerY - 22, 10);

  push();
  fill(200, 20, 20);
  noStroke();
  ellipse(centerX, centerY + 20, 20, 30);
  pop();

  // face 3
  centerX = 400;
  centerY = 100;

  push();
  translate(centerX, centerY);
  rotate(45);

  fill(20, 120, 220);
  ellipse(0, 0, 100);

  fill(0);
  ellipse(-20, -16, 30);
  ellipse(20, -16, 30);

  fill(255);
  ellipse(-30, -22, 10);
  ellipse(10, -22, 10);

  fill(200, 20, 20);
  noStroke();
  ellipse(0, 20, 20, 30);
  pop();

  // face 4
  centerX = 550;
  centerY = 100;

  push();
  translate(centerX, centerY);
  rotate(65);

  fill(20, 120, 220);
  ellipse(0, 0, 100);

  fill(0);
  ellipse(-20, -16, 30);
  ellipse(20, -16, 30);

  fill(255);
  ellipse(-30, -22, 10);
  ellipse(10, -22, 10);

  fill(200, 20, 20);
  noStroke();
  ellipse(0, 20, 20, 30);
  pop();

  // face 5
  centerX = width/2;
  centerY = height/2;

  push();
  translate(centerX, centerY);
  rotate(115);

  fill(20, 120, 220);
  ellipse(0, 0, 100);

  fill(0);
  ellipse(-20, -16, 30);
  ellipse(20, -16, 30);

  fill(255);
  ellipse(-30, -22, 10);
  ellipse(10, -22, 10);

  fill(200, 20, 20);
  noStroke();
  ellipse(0, 20, 20, 30);
  pop();

}

function draw() {
}
