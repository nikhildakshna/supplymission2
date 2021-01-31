var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	
	box1 = new box(400,655,200,20);
	box2 = new box(300,615,20,100);
	box3 = new box(500,615,20,100);
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.6, isStatic:true});
	//matter.body.restitution = 0.5;
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
	var translation;
if(keyCode === RIGHT_ARROW){
helicopterSprite.x += 20;
translation = 20;
Matter.Body.translate(packageBody,{x: translation,y: 0});
}

else if(keyCode === LEFT_ARROW){
helicopterSprite.x -= 20;
translation = {x: -20,y: 0};
Matter.Body.translate(packageBody,translation);
}

else if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
  }
}



