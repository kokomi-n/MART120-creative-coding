 var x = 50;
var y = 50;
var diameter = 25;

var s = 83;
var w = 87;
var a = 65;
var d = 68;

// obstacle arrays
var myXs = [];
var myYs = [];
var mySizes = [];
var myColors = [];

// exit
var exitX = 700;
var exitY = 500;
var exitSize = 80;

function setup() {
  createCanvas(800, 600);

  // create at least 5 obstacles
  for (var i = 0; i < 7; i++) {
    myXs[i] = random(width);
    myYs[i] = random(height);
    mySizes[i] = random(30, 100);

    // color array (requirement)
    myColors[i] = [
      random(255),
      random(255),
      random(255)
    ];
  }

  // count to 10 in console
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function draw() {
  background(214, 255, 240);

  // player
  fill(138, 206, 255);
  circle(x, y, diameter);

  movePlayer();

  // obstacles
  for (var i = 0; i < myXs.length; i++) {
    fill(myColors[i]); // using array for fill
    circle(myXs[i], myYs[i], mySizes[i]);
  }

  // exit
  fill(0, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);

  // win condition
  if (
    x > exitX &&
    x < exitX + exitSize &&
    y > exitY &&
    y < exitY + exitSize
  ) {
    fill(0);
    textSize(40);
    text("You win!", 300, 300);
  }
}

function movePlayer() {
  if (keyIsDown(w)) {
    y -= 5;
  }
  if (keyIsDown(s)) {
    y += 5;
  }
  if (keyIsDown(a)) {
    x -= 5;
  }
  if (keyIsDown(d)) {
    x += 5;
  }
}