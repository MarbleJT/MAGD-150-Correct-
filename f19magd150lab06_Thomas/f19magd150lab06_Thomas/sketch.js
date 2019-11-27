var ball= {
  x:300,
  y:200,
  xspeed: 4,
  yspeed: -3,
}

function setup() {
  createCanvas(500, 400);
}

//This code draws the paddles that are used to hit the ball around in the game pong. 
function draw() {
  background(0)
  look();
  contact();
  go();
  push();
  rect(20, 150, 15, 75)
  fill(66, 135, 245)
  pop();
  line(250, 0, 250, 400)
  
  translate(width / 2, height / 2);
  rotate(PI / 5.0); 
  rect(150, -200, 15, 75);

    }

// This is the code that makes the ball move. 
function go() {
 ball.x = ball.x + ball.xspeed;
 ball.y = ball.y +ball.yspeed

}

//This is the code that allows the ball when in contact with an edge on the cavas to bounce back on the the canvas. 
function contact() {
if (ball.x > width || ball.x < 0) { ball.xspeed = ball.xspeed * -1; 
  }
if (ball.y > height || ball.y < 0) { ball.yspeed = ball.yspeed * -1;  
  }
}

//This is the code that controls the look of the square that moves around.                        
function look() {
  stroke(255);
  strokeWeight(4);
  fill(66, 135, 245);
  rect(ball.x, ball.y, 24, 24);
  }