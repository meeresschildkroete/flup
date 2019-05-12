let ground;
let box;
let bird;
let world, engine;



function setup() {
  createCanvas(600, 400);
  engine = Matter.Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 20);
  box = new Box(450,300,50,75);
  bird = new Bird(50,300,25);
  //console.log(Matter);
}

function draw() {
  background(0);
  Matter.Engine.update(engine); //update Fkt für Abgleich mit p5
  ground.show();
  box.show();
  bird.show();
}