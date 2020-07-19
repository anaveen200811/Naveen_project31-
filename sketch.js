const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var world,engine,ground;
var particles = [];
var plinkos = [];
var divitions = [];
var divitionHight = 300;


function setup() {
  createCanvas(520,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
    divitions.push(new Division(k,height-divitionHight/2,10,divitionHight));
   }
   for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
   }
   for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
   }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,275));
   }
    for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,375));
   }
}
function draw() {
  background(255);  
  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }
  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for (var j = 0;j<particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0;k<divitions.length; k++) {
    divitions[k].display();
  }
  drawSprites();
}