
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(100,600, 50);
	World.add(world, bob1);
	
	bob2 = new Bob(200,600, 50);
    World.add(world, bob2);
	
	bob3 = new Bob(300,600, 50);
	World.add(world, bob3);
	
	bob4 = new Bob(400,600, 50);
	World.add(world, bob4);
	
	bob5 = new Bob(500,600, 50);
	World.add(world, bob5);

	
	
	ground = new Ground(600,200,1200,50);
	World.add(world, ground);

	rope1 = new Rope(bob1.body,ground.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  drawSprites();
 
}



