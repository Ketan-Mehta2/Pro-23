const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var zombieImg, zombie;
var medKitBody, clothesBody;
var medKit, medKitImg;
var clothes, clothesImg;
var engine, world;
var box1, box2, box3;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
	medKitImg = loadImage("FirstAidKit.png");
	clothesImg = loadImage("Clothes (1).png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;


	box1 = new Box(250,600,20,130);
	box2 = new Box(500,600,20,130);
	box3 = new Box(375,640,230,50);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	medKit = createSprite(380, 80, 10, 10);
	medKit.addImage(medKitImg);
	medKit.scale = 0.05;

	clothes = createSprite(420, 80, 10, 10);
	clothes.addImage(clothesImg);
	clothes.scale = 0.3;

	helicopterSprite = createSprite(width / 2, 195, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.7;

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);



	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 1.0, isStatic: true });
	World.add(world, packageBody);


	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	medKitBody = Bodies.circle((width / 2) - 30, 208, 5, { restitution: 1.0, isStatic: true });
	World.add(world, medKitBody);

	clothesBody = Bodies.circle((width / 2) + 40, 220, 5, { restitution: 1.0, isStatic: true });
	World.add(world, clothesBody);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	Engine.update(engine);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	medKit.x = medKitBody.position.x;
	medKit.y = medKitBody.position.y;
	clothes.x = clothesBody.position.x;
	clothes.y = clothesBody.position.y;
	textSize(30);
	textStyle("bold");
	fill("cyan");
	noStroke();
	text("Press 'P' To drop the Food package", 20, 30);
	fill("limegreen")
	text("Press 'M' To drop the medical kit", 20, 80);
	fill("yellow");
	text("Press 'C' To drop Clothes", 20, 130);
	textSize(25);
	fill("magenta");
	textStyle("bold");
	text("REMEMBER - You must not let the supplies fall out of the red cage",10,350);
	box1.display("red");	
	box2.display("red");	
	box3.display("red");	
	drawSprites();
	keyPressed();
}

function keyPressed() {
	if (keyDown("p")) {
		Matter.Body.setStatic(packageBody, false)
	}
	if (keyDown("m")) {
		Matter.Body.setStatic(medKitBody, false);
	}
	if (keyDown("c")) {
		Matter.Body.setStatic(clothesBody, false);
	}
}



