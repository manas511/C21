var moving, fixed;
var rect1, rect2, rect3,rect4;
var bound1 , bound2 , bound3 , bound4;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(200, 300, 50, 80);
  moving.shapeColor = "green";
  moving.debug = true;
  fixed = createSprite(400,200,80,30);
  fixed.shapeColor = "green";
  fixed.debug = true;

  rect1 = createSprite(200,50,50,90);
  rect1.shapeColor = "blue";
   
  rect2 = createSprite(100,60,50,90);
  rect2.shapeColor = "blue";

  rect3 = createSprite(300,100,90,40);
  rect3.shapeColor = "blue";

  rect4 = createSprite(130,200,90,50);
  rect4.shapeColor = "blue";

  rect1.velocityX = 2;
   rect1.velocityY = -5;

   rect2.velocityX = 2;
   rect2.velocityY = -2;

   rect3.velocityX = -5;
   rect3.velocityY = 2;

   rect4.velocityX = 3;
   rect4.velocityY = -4;




  rect1.debug = true ;
  rect2.debug = true ;
  rect3.debug = true ;
  rect4.debug = true ;

}

function draw() {
  background(0,0,0);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
   
  

  if(Touch(moving,rect1)){
    moving.shapeColor = "red";
    rect1.shapeColor = "red"
  }else{
    moving.shapeColor = "green";
    rect1.shapeColor = "blue"
  }
  
   boundary();
   bounceOff(rect1,rect2);
   bounceOff(rect1,rect3);
   bounceOff(rect1,rect4);
   bounceOff(rect2,rect3);
   bounceOff(rect2,rect4);
   bounceOff(rect3,rect4);
   bounceOff(rect1,bound1);
   bounceOff(rect2,bound1);
   bounceOff(rect3,bound1);
   bounceOff(rect4,bound1);
   bounceOff(rect1,bound2);
   bounceOff(rect2,bound2);
   bounceOff(rect3,bound2);
   bounceOff(rect4,bound2);
   bounceOff(rect1,bound3);
   bounceOff(rect2,bound3);
   bounceOff(rect3,bound3);
   bounceOff(rect4,bound3);
   bounceOff(rect1,bound4);
   bounceOff(rect2,bound4);
   bounceOff(rect3,bound4);
   bounceOff(rect4,bound4);

  drawSprites();
}

