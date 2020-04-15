const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var pole1,pole2,pole3,pole4;
var ground;
var body;
var engine,world
function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

 pole1= createSprite(50, 230, 50, 300);
 pole2= createSprite(110, 250, 50, 260);
 pole3= createSprite(750, 230, 50, 300);
 pole4= createSprite(690, 250, 50, 260);
ground= createSprite(400,380,800,20);
 body=createSprite(400,250,250,250)
 
}

function draw() {
  background(0);  
  triangle(280, 130, 400, 20, 520, 130);
  triangle(25, 75, 54, 20, 78, 75);
  triangle(85, 115, 110, 60, 135, 115);
  triangle(725, 75, 750, 20, 775, 75);
  triangle(665, 115, 690, 60, 715, 115);
  drawSprites();
}