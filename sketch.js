var paper,Bin1,Bin2,ground;
var Bin3;
var Bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
  createCanvas(1438, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper = new Paper(400,670,50,50);
  ground = new Ground(719,690,1438,10)

  Bin1 = new DustBin(1180,680,150,10,PI);
  Bin2 = new DustBin(1105,635,10,100,PI/2);
  Bin3 = new DustBin(1259,635,10,100,PI/2);

  Bin = new Binimage(1180,585,180,200,PI);

}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  Bin1.display();
  Bin2.display();
  Bin3.display();
  Bin.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-195});
}
}

