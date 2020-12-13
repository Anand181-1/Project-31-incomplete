const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10;
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(688,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 683, 880, 20);

  d1 = new Divisions(-15, 350, 5, 1000);
  d2 = new Divisions(75, 590, 5, 230);
  d3 = new Divisions(150, 590, 5, 230);
  d4 = new Divisions(225, 590, 5, 230);
  d5 = new Divisions(300, 590, 5, 230);
  d6 = new Divisions(375, 590, 5, 230);
  d7 = new Divisions(450, 590, 5, 230);
  d8 = new Divisions(525, 590, 5, 230);
  d9 = new Divisions(600, 590, 5, 230);
  d10 = new Divisions(705, 350, 5, 1000);

  for (var i = 40; i <= width; i = i + 50){
       plinkos.push(new Plinko(i, 75, 10));
  }

  for (var i = 20; i <= width; i = i + 50){
       plinkos.push(new Plinko(i, 175, 10))
  }

  for (var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 275, 10))
}

  for (var i = 20; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 375, 10))
  }

}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }

 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
  d10.display();

  drawSprites();
}

function keyPressed() {

  if (keyCode === 32) {
    particles.push(new Particle(random(50, 650), 10,10));
  }

}