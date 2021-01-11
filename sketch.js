const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var man;
var world,engine;

function preload(){
 
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 man = new Man(50,200,50)
  
}
function draw() {
  background(10,80,203)
Engine.update(engine)



if(keyDown("space")){
  player.velocityY = -12;
  }

Grounds();


man.display();
drawSprites();

}

function Grounds(){
if(frameCount % 100 === 0){
var ground = createSprite(900,350,300,10)
ground.velocityX = -5;
}








}
