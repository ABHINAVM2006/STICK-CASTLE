const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1;

function setup() {
 var canvas = createCanvas(1600,1200);
    engine = Engine.create(180,200,15,70);
    world = engine.world;
    createSprite(400, 200, 50, 50);

  rect1 = new Rectangle()
}

function draw() {
  background(0);  
  rect1.display();
  Engine.update(engine);
  drawSprites();
}