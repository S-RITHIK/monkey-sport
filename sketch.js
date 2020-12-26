var ground;
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var gameover, gameoverImage;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameoverImage = loadImage("gameover.png");

}



function setup() {
  createCanvas(550, 400);
  background("lightblue");

  




  ground = createSprite(10, 400, 2000, 20);
  ground.shapeColor = "lightgreen";
  ground.velocityX = -1;



  monkey = createSprite(70, 400);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  

  bananaGroup = createGroup();    
  obstacleGroup = createGroup();
  
  
 
  
  
}


function draw() {
  background("lightblue");

  
  
  text("score : " + score, 450, 50);
  

  monkey.collide(ground); 


  if (keyWentDown("space")) {
    monkey.velocityY = -5;
  }

  if (monkey.y < 70) {
    monkey.velocityY = 100;

  }


  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  createobstacles();
  
  createbananas();
  
  stop();
  
  if(monkey.isTouching(bananaGroup)) {
    score = score + 1;
    bananaGroup.destroyEach();
}
  

  

  
  

  drawSprites();
}






function createobstacles() {
  if(frameCount % 170 === 0) {
  obstacle = createSprite(1090, 400);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.3;
  obstacle.velocityX = -5;
  obstacle.lifetime = 800;
  obstacleGroup.add(obstacle);
}
}

function createbananas() {
  if(frameCount % 130 === 0) {
  banana = createSprite(1090,220);
  banana.y = Math.round(random(100,150));
  banana.addImage(bananaImage);
  banana.scale = 0.08;
  banana.velocityX = -5;    
  banana.lifetime = 800;
  bananaGroup.add(banana);
}
}



function stop() {
if(obstacleGroup.isTouching(monkey)) {
 gameover = createSprite(275, 200);
 gameover.addImage(gameoverImage);
 obstacleGroup.lifetime = 0.1;
 bananaGroup.lifetime = 0.1;
 gameover.depth = score.depth;
 score.depth = score.depth + 1;
  
}
}








