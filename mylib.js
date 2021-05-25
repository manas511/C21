function Touch(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
     return true;
  }
  else {
      return false;
  }
  }
  
  function bounceOff(obj1,obj2){
    
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
    obj1.velocityX = obj1.velocityX * (-1);
    obj2.velocityX = obj2.velocityX * (-1);
  }
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
  }
  
  }
  
  function boundary(){
    bound1 = createSprite(400, 0, 800, 5);
    bound2 = createSprite(795, 200, 5, 400);
    bound3 = createSprite(400, 395, 800, 5);
    bound4 = createSprite(0, 200, 5, 400);
  }