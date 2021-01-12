var PLAY = 1;
var END = 0;
var gameState = PLAY;

var step;
var back,backImg,invisibleGround, invisibleSky;
var gameOver,gameOverImg;
var restart,restartImg;


var score;


function preload(){
   

harryImg = loadImage("HP-left.png");
voldImg = loadImage("Voldemort.png");



keyImg = loadImage("key.png");

yellowImg = loadImage("yellowbook.png");
redImg = loadImage("redbook.png");
greenImg = loadImage("greenbook.png");
blueImg = loadImage("bluebook.png");

RedB = new Group();
GreenB = new Group();
BlueB = new Group();
YellowB = new Group();
KeyGroup = new Group();

backImg = loadImage("forest.png");
  

  
  gameOverImg = loadImage("gameover3.png");
  restartImg = loadImage("restart.png");
}
function setup() {
  createCanvas(1400, 750);
  
  
  back=createSprite(700,400,1400,700);
  back.addImage(backImg);

  back.scale = 2.0;

  harry = createSprite(1250,490,20,50);
  harry.addImage(harryImg)
  harry.scale = 0.20 ;

  voldemort = createSprite(-110, 490,20,50);
  voldemort.addImage(voldImg);
  voldemort.scale = 0.5;
  voldemort.visible = false; 

  
  gameOver = createSprite(700,150);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(700,350);
  restart.addImage(restartImg);
  restart.scale = 1.2;
  
  gameOver.scale = 0.3;
  restart.scale = 1.2;
  
  invisibleGround = createSprite(730,710,1500,10);
  invisibleGround.visible = true;

  invisibleSky = createSprite(730,-0,1500,10);
  invisibleSky.visible = true;
  
  score = 0;
}

function draw() {
   background("black");

  
  
   if(gameState === PLAY){
    
    gameOver.visible = false;
    restart.visible = false;
    

  if (harry.isTouching(KeyGroup)){
   KeyGroup.destroyEach();
   score = score+3; 
  }
 
  if (score === 27){
    voldemort.visible = true;
    voldemort.velocityX = 5;

  }
 
 
  
 if(keyDown("space") ){
  harry.velocityY = -15;

}
    
   
     }
     if (harry.isTouching(voldemort)){
     
      gameState = END;
     
  
    }

    if(gameState===END){
      gameOver.visible=true;
       restart.visible=true;
       score = 0;
       RedB.destroyEach();
       YellowB.destroyEach();
       BlueB.destroyEach();
       GreenB.destroyEach();
       KeyGroup.destroyEach();
   
       voldemort.destroy();
    
    
      }

  
  harry.velocityY = harry.velocityY + 1;
  
  var select_book = Math.round(random(1,5));
  
  if (World.frameCount % 200 == 0){
    if (select_book ==1) {
      red_Book();
    } else if (select_book == 2){
      yellow_Book();
    } else if (select_book == 3){
      blue_Book();
    } else {
      green_Book();
    }
  }
  
  if (World.frameCount % 400 == 0){
    keys();
  }

  harry.collide(invisibleGround);
  harry.collide(invisibleSky);

  drawSprites();
  textSize(30);
  fill("white");
  text("SCORE : " + score,1200,50);

  
}



function keys() 
{
   var key = createSprite(0, Math.round(random(100,600)), 10, 10)
  key.addImage(keyImg);
  key.velocityX = 4;
  key.lifetime = 1500;
  key.scale = 0.1;
  KeyGroup.add(key);
}

function red_Book() 
{
   var red = createSprite(0, Math.round(random(100,700)), 10, 10)
  red.addImage(redImg);
  red.velocityX = 4;
  red.lifetime = 1500;
  red.scale = 0.4;
  RedB.add(red);
}

function yellow_Book() 
{
   var yellow = createSprite(0, Math.round(random(100,700)), 10, 10)
  yellow.addImage(yellowImg);
  yellow.velocityX = 4;
  yellow.lifetime = 1500;
  yellow.scale = 0.4;
  YellowB.add(yellow);
}

function green_Book() 
{
   var green = createSprite(0, Math.round(random(100,700)), 10, 10)
  green.addImage(greenImg);
  green.velocityX = 4;
  green.lifetime = 1500;
  green.scale = 0.4;
  GreenB.add(green);
}

function blue_Book() 
{
   var blue = createSprite(0, Math.round(random(100,700)), 10, 10)
  blue.addImage(blueImg);
  blue.velocityX = 4;
  blue.lifetime = 1500;
  blue.scale = 0.4;
  BlueB.add(blue);
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;

  

  score = 0;
}
