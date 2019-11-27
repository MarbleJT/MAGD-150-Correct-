function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#ddb9eb');
  
  //orbit ring
  line(0, 395, 400, 20)

  //triangle ship.... The Darkness?
  c = color(31, 237, 48);
  fill(c)
  triangle(50, 350, 75, 300, 110, 365);
  
  //Quad planet
  colorMode(HSB, 90); // Use HSB with scale of 0-100
  c = color(50, 55, 100); // Update 'c' with new color
  fill(c)
  quad( 165, 190, 240, 170, 230, 230, 160, 260);
  
  //arc
  c= color(252, 53, 176);
  fill(c);
  arc(320, 75, 80, 80, 0, PI + QUARTER_PI);
  
  //square stars
  c = color(235, 227, 14)
  fill(c);
  beginShape();
  vertex(50, 50);
  vertex(100, 50);
  vertex(100, 100);
  vertex(50, 100);
  endShape();
  
    c = color(14, 32, 235)
  fill(c);
  beginShape();
  vertex(350, 350);
  vertex(300, 350);
  vertex(300, 300);
  vertex(350, 300);
  endShape();
}