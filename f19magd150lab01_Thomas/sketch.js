function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  
  //main building
  point(50, 300);
  point(50, 100);
  point(250, 300);
  point(250, 100);
  
  line(50, 300, 50, 100);
  line(50, 100, 250, 100);
  line(250, 100, 250, 300); 
  line(250, 300, 50, 300)
  
  //windows
  noFill();
  rect(80, 135, 40, 40);
  noFill();
  rect(180, 135, 40, 40);
  
  //door
  fill(1);
  rect(130, 225, 40, 75);
   
  //Balloons
  point(50, 100);
  point(50, 60);
  line(50, 100, 50, 60);
  point(250, 100);
  point(250, 60);
  line(250, 100, 250, 60);
  point(150, 100)
  point(150, 60)
  line(150, 100, 150, 60)
  ellipse(50, 60, 30, 30);
  ellipse(250, 60, 30, 30);
  
  ellipseMode(RADIUS);
  fill(1)
  ellipse(150, 50, 35, 35);
  
  ellipseMode(CENTER);
  fill(150);
  ellipse(150, 50, 15, 30); 
}