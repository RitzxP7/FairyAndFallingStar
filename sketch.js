var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
  
  var starFalling = {isStatic: true, restitution: 0.5};

	starBody = Bodies.circle(650 , 30 , 5 , starFalling);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if (keyWentDown(RIGHT_ARROW)) {
    fairy.x = fairy.x+40;
  }
  
  if (keyWentDown(LEFT_ARROW)) {
    fairy.x = fairy.x-40;
  }
  
  if (keyWentDown(DOWN_ARROW)) {
    star.velocityY = 6;
  }
  
  if (touching(star, fairy)) {
    star.velocityY = 0;
  }
  
  

  drawSprites();

}

function keyPressed() {
	//write code here
}

function touching(star, fairy) {
    if(star.x-fairy.x <= star.width/2 + fairy.width/2 &&
      fairy.x-star.x <= star.width/2 + fairy.width/2 &&
      star.y-fairy.y <= star.height/2 + fairy.height/2 &&
      fairy.y-star.y <= star.height/2 + fairy.height/2){
     return true;
    }
    else {
      return false
    }
  }
