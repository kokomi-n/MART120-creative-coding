var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var s = 83;
var w = 87;
var a = 65;
var d = 68;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

 drawPlayer();
  movePlayer();
  drawMouseObject();
  drawObstacles();
  drawExit();
  drawBorder();
  checkWin();
}

function drawPlayer() {
  fill(24, 200, 29);
  circle(x, y, diameter);
}

function movePlayer() {
  controlCircle();
}

function drawMouseObject() {
  ellipse(mousex, mousey, 15, 50);
}


function drawObstacles() {
  ConcentricCircle(110, 120, 100, 50, 50, 120, 120, 120, 50, 120);
  ConcentricCircle(210, 220, 100, 50, 50, 120, 120, 120, 50, 120);
}


/* This function controls all the variables of the circle */
function controlCircle() {
  

  if (keyIsDown(s)) {
    y += 10;
  } else if (keyIsDown(w)) {
    y -= 10;
  }

  if (keyIsDown(d)) {
    x += 10;
  } else if (keyIsDown(a)) {
    x -= 10;
  }

  // we call the function here.
  changeDiameter();
}

// This function updates the size of the circle
function changeDiameter() {
  if (diameter < 200) {
    diameter += 2;
  } else if (diameter >= 200) {
    diameter = 25;
  }
}

function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}

// define ConcentricCircle function
function ConcentricCircle(
  x,
  y,
  outer_diameter,
  inner_diameter,
  outer_red,
  outer_green,
  outer_blue,
  inner_red,
  inner_green,
  inner_blue
) {
  fill(outer_red, outer_green, outer_blue);
  circle(x, y, outer_diameter);
  fill(inner_red, inner_green, inner_blue);
  circle(x, y, inner_diameter);
}

var exitX = 700;
var exitY = 500;
var exitSize = 50;

function drawExit() {
  fill(255, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);
}

function drawBorder() {
  noFill();
  stroke(255);
  rect(0, 0, width, height);
}

function checkWin() {
  if (
    x > exitX &&
    x < exitX + exitSize &&
    y > exitY &&
    y < exitY + exitSize
  ) {
    fill(255);
    textSize(40);
    text("YOU WIN", 300, 300);
  }
}