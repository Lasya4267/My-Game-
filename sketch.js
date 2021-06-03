var bg;
var bgImg;
var rocket;
var rocketImg;
var alien;
var alienImg;
var alien1;
var alienImg1;
var alien2;
var alienImg2;

var mars;
var jupiter;
var uranus;
var neptune;

function preload() {
  bgImg = loadImage("Game.jpeg");
  rocketImg = loadImage("Rocket.png");
  alienImg = loadImage("alien.png");
  alienImg1 = loadImage("alien.png")
  alienImg2 = loadImage("alien.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rocket = createSprite(360, 275)
  alien = createSprite(425, 300)
  alien1 = createSprite(740, 280)
  alien2 = createSprite(925, 280)
  rocket.addImage("rocket",rocketImg);
  rocket.scale = 0.2;
  alien.addImage("alien", alienImg);
  alien.scale = 0.1;
  alien1.addImage("alien1", alienImg1)
  alien1.scale = 0.1;
  alien2.addImage("alien2", alienImg2)
  alien2.scale = 0.1;

  mars = createSprite
  
}

function draw() {
  background(bgImg);  
  text( "x:"+mouseX + "y:"+mouseY, mouseX, mouseY )
  drawSprites();
}