var ball,img,paddle,img2,edges;
function preload() {

  /* preload your images here of the ball and the paddle */
  img2 = loadImage("paddle.png")
  img = loadImage("ball.png")
  

}
function setup() {
 

  createCanvas(500,500);

  /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50, 250, 10, 10);
  ball.addImage("ball",img)
  ball.scale = 0.8

  paddle = createSprite(470,250,10,110);
  paddle.addImage("paddle",img2)
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9
  ball.velocityY = Math.random(1,9)

}

function draw() {
  background(205,153,0);

  
/* create Edge Sprites here */
  edges = createEdgeSprites();

 
 
  
  
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle)

  if(ball.bounceOff(paddle)){
  randomVelocity();
  }
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */


  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])|| ball.isTouching(edges[0])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[0]);
  }
//Prevent the paddle from going out of the edges */
  

  
  if (keyDown("DOWN_ARROW")) {
    paddle.velocityX = 0;
    paddle.velocityY = 7;
  }
  
  if (keyDown("UP_ARROW")) {
    paddle.velocityX = 0;
    paddle.velocityY = -7;
  }
  

  
  if (keyWentUp("DOWN_ARROW")) {
    paddle.velocityX = 0;
    paddle.velocityY = 0;
  }
  
  if (keyWentUp("UP_ARROW")) {
    paddle.velocityX = 0;
    paddle.velocityY = 0;
}

if(ball.x > 500){
  ball.x = 50
}
  
  drawSprites();
 
  
}

function randomVelocity()
{

  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = Math.random(1,9)
  }

