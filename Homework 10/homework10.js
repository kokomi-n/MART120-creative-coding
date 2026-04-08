let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;

let dirX1 = 1;
let dirY2 = 1;
let dirX3 = 1;
let dirY3 = 1;

let speed1 = 2;
let speed2 = 3;
let speed3 = 1.5;

function setup() {
  createCanvas(400,400);
}

function draw() {

    x1 += speed1 * dirX1;
if (x1 > 50 || x1 < -50) dirX1 *= -1;

// y方向（上下）
y2 += speed2 * dirY2;
if (y2 > 50 || y2 < -50) dirY2 *= -1;

// 斜め
x3 += speed3 * dirX3;
y3 += speed3 * dirY3;

if (x3 > 50 || x3 < -50) dirX3 *= -1;
if (y3 > 50 || y3 < -50) dirY3 *= -1;

  background(185, 237, 251);
noStroke();
fill(112, 59, 11);
rect(100, 160, 200, 220);
circle(200, 170, 200);

fill(255, 239, 203);
 circle(200,200,200);
ellipse(100,200 + y2 ,40,50);
ellipse(300,200 + y2 ,40,50);

fill(112, 59, 11);
rect(128, 100, 144, 80);


fill(0);
circle(150 + x1 ,200,20);
circle(250 + x1 ,200,20);

fill(255, 0, 0);
triangle(170 + x3, 250 + y3, 230 + x3, 250 + y3, 200 + x3, 280 + y3);

fill(255, 230, 138);
triangle(190 + x3, 230 + y3, 210 + x3, 230 + y3, 200 + x3, 200 + y3);

stroke(0);
line(130 , 170 , 170 , 170 );
line(230 , 170 , 270 , 170 );

stroke(255);
point(150, 200);
point(250, 200)



}
