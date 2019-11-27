function setup() {
  createCanvas(300, 300);
  background(14, 40, 237)
  frameRate(30);
  
  //rocks
  push();
  let a = 105;
  let z = 150;
  let c = lerp(a, z, 2.0);
  let d = lerp(a, z, -1.5);
  let e = lerp(a, z, 3.0);
  let y = 300;
  strokeWeight(20);
  stroke(195, 245, 247); // 
  point(a, y);
  point(z, y);

  stroke(195, 245, 247); 
  point(c, y);
  point(d, y);
  point(e, y);
  
  pop();
}

function draw() {
  //bubbles
  push();
  fill(15, 197, 247);
  ellipse(mouseX, mouseY, 20,20);
  print(pmouseX + ' -> ' + mouseX);
  print(pmouseY + ' -> ' + mouseY);
  print(frameCount)
  pop();
  
  //small bubble aka 8
  push()
  fill(255)
  ellipse(pmouseX, pmouseY, 8, 8);
  pop();
  
  print(5*5)
  print(1+1)
  print(6/3)
  print(4-1)
  
}