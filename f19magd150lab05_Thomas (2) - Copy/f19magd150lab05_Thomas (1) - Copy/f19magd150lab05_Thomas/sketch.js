var tvscreen = (255, 255, 255)

//big tv
var x1 = 100;
var y1 = 350;
var h1 = 25;
var w1 = 75;

//channel button
var x2 = 250
var y2 = 360
var w2 = 50
var h2 = 40

//power button 
var x3 = 50
var y3 = 50
var w3 = 300
var h3 = 280
var r3 = 20

var x4,y4;

function setup() {
  createCanvas(400, 400);
   background(225, 225, 225);
  
  x4 = 75
  y4 = height/2
}

//labels
function draw() {
  push()
  fill(tvscreen)
  rect(x3, y3, w3, h3, r3)
  pop();
  
  rect (x1, y1, w1, h1)
  fill(168, 50, 117);
  
  ellipse(x2, y2, w2, h2)
  fill(237, 50, 21)
  
  push();
  fill(0, 0, 0)
  c= "Channel"
  text(c, 115, 365)
  pop();
  
  push();
  fill(0, 0, 0)
  p= "Power"
  text(p, 233, 363)
  pop();
  
  ellipse(x4, y4, 50, 50)
  x4++
  
  if(x4-75>width){
    x4++

}

//buttons
  function mousePressed(){
    if(mouseX>x1 && mouseX<x1+w1 && mouseY>y1-h1/2 &&mouseY <y1+h1/2 && tvscreen == (255, 255, 255)){
      tvscreen = (225, 225, 225)
    }  else { 
    if(mouseX>x1 && mouseX<x1+w1 && mouseY>y1-h1/2 &&mouseY<y1+h1/2 && tvscreen == (225, 225, 225));
      tvscreen = (255, 255, 255)
      
      if(mouseX>x2 && mouseX<x2+w2/2 && mouseY>y2-h2 &&mouseY <y2+h2 && tvscreen == (255, 255, 255)){
      tvscreen = (0,0,0)
    }  else { 
    if(mouseX>x2 && mouseX<x2+w2/2 && mouseY>y2-h2 &&mouseY<y2+h2 && tvscreen == (0, 0, 0));
      tvscreen = (255, 255, 255)
    }
  }
  }
}