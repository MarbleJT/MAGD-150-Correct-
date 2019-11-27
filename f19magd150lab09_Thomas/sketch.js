var dog2;

function preload (){
	soundFormats('mp3', 'wav');
	birdSound = loadSound ('bird.mp3');
}

function setup() {
  createCanvas(1000, 1000);
  dog2 = loadImage("dog2.jpg");
  birdSound.setVolume(5);
  birdSound.play();
}

function draw() {
	image(dog2, 0, 0, 500, 500);
}