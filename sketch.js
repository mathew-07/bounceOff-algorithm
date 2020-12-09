var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100, 200, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(200, 200, 50, 80);
  gameobject2.shapeColor = "green";
  gameobject3 = createSprite(300, 200, 50, 80);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(400, 200, 50, 80);
  gameobject4.shapeColor = "green";
  movingRect.velocityY = -5
  fixedRect.velocityY = 5
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

