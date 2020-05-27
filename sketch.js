const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var PLAY = 1;
var END = 0;
var gameState = PLAY; 
var rez = 20;
var snake,food ;
var snake1,food1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  X  = random(0,800)
  Y  =  random(0,400)

snake1 = createSprite(400,200,20,20)

food1 =  createSprite(X,Y,20,20)

w = floor(width / rez);
h = floor(height / rez);

snake = new Snake(400,200,20,20)
foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}


function draw() {
  background("black");  
  Engine.update(engine);
 // food.display();
 
  if (snake1.isTouching(food1)){


grow();
touch();


  }


  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);

  
  snake.display();
  drawSprites();
}




  
  














function touch(){


  //food1.visible = false;
var count = 0
count = count + 1
food.count = createSprite(random(0,800),random(0,400),20,20)
//food.count.collide(snake1)

}






function grow ( ){


  snake1.width = snake1.width + 5/5
  
  //snake1.height = snake1.height + 5/5
}











function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //snake1.setDir(-1, 0);
    snake1.velocityX = -2
    snake1.velocityY = 0
  } else if (keyCode === RIGHT_ARROW) {
    //snake1.setDir(1, 0);
    snake1.velocityX = 2
    snake1.velocityY = 0
  } else if (keyCode === DOWN_ARROW) {
   // snake1.setDir(0, 1);
   snake1.velocityY = 2
   snake1.velocityX = 0
  } else if (keyCode === UP_ARROW) {
   // snake1.setDir(0, -1);
   snake1.velocityY = -2
   snake1.velocityX = 0
  }

}