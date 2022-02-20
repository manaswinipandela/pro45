var bgImg,balloonImg,topGround,bottomGround,balloon
var obsTop1,obsTop2,obsBottom1,obsBottom2,obsBottom3
var obsTop,obsBottom
function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsTop1=loadImage("assets/obsTop1.png")
obsTop2=loadImage("assets/obsTop2.png")
obsBottom1=loadImage("assets/obsBottom1.png")
obsBottom2=loadImage("assets/obsBottom2.png")
obsBottom3=loadImage("assets/obsBottom3.png")
}

function setup(){

//background image
createCanvas(800,400)


//creating top and bottom grounds
topGround=createSprite(400,10,800,20)
bottomGround=createSprite(400,390,800,20)
topGround.visible=false
bottomGround.visible=false

      
//creating balloon     
balloon=createSprite(200,200,20,20)
balloon.addAnimation("balloonAni",balloonImg)
balloon.scale=0.2

}

function draw() {
  
  background(bgImg);
       drawSprites() ;
       if(keyDown("space")){
         balloon.velocityY=-6
       }
       balloon.velocityY+=1
       spawnObstaclesTop();
       spawnObstaclesBottom();
      
      // balloon.collide(bottomGround)
          //making the hot air balloon jump
       
}
function spawnObstaclesTop(){
  if (frameCount%80===0){
    obsTop=createSprite(800,Math.round(random(10,100)),20,20)
    obsTop.velocityX=-3
    obsTop.scale=0.1
    rand=Math.round(random(1,2))
    switch(rand){
      case 1:
        obsTop.addImage(obsTop1);
        break;
        case 2:
        obsTop.addImage(obsTop2);
        break;
        default :break

        

    }
    obsTop.lifeTime=300
    balloon.depth+=1
  }
}
function spawnObstaclesBottom(){
  if (frameCount%100===0){
    obsBottom=createSprite(800,310,20,20)
    obsBottom.velocityX=-3
    obsBottom.scale=0.1
    rand=Math.round(random(1,3))
    switch(rand){
      case 1:
        obsBottom.addImage(obsBottom1);
        break;
        case 2:
        obsBottom.addImage(obsBottom2);
        break;
        case 3:
          obsBottom.addImage(obsBottom3);
          break;
        default :break

        

    }
    obsBottom.lifeTime=300
    balloon.depth+=1
  }
}