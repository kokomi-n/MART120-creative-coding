let playerX = 50;
let playerY = 50;
let playerSize = 30;

let exitX = 350;
let exitY = 350;
let exitSize = 50;

let obstacleX1 = 150;
let obstacleY1 = 100;
let obstacleW1 = 80;
let obstacleH1 = 40;

let obstacleX2 = 250;
let obstacleY2 = 200;
let obstacleW2 = 40;
let obstacleH2 = 100;

let clickObstacle = null;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(0, 0, 255);
  rect(playerX, playerY, playerSize, playerSize);

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 3;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= 3;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerY += 3;
  }

  
  fill(255, 0, 0);
  rect(obstacleX1, obstacleY1, obstacleW1, obstacleH1);


  fill(0, 255, 0);
  rect(obstacleX2, obstacleY2, obstacleW2, obstacleH2);


  if (clickObstacle != null) {
    fill(100);
    rect(clickObstacle.x, clickObstacle.y, 60, 60);
  }

  
  fill(255, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);

   if (
    playerX + playerSize > exitX &&
    playerX < exitX + exitSize &&
    playerY + playerSize > exitY &&
    playerY < exitY + exitSize
  ) {
    fill(0);
textSize(40);
text("YOU WIN!", 100, 200);
  }
}


function mousePressed() {
  clickObstacle = {
    x: mouseX,
    y: mouseY
  };
}