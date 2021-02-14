var jerry,jerryImg1,jerryImg2,jerryImg3;             
var tom,tomImg1,tomImg2,tomImg3;
var background,background_Image





function preload() {
   tomImg1 = loadAnimation("images/tomOne.png")
   tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png")
   tomImg3 = loadAnimation("images/tomFour.png")
   jerryImg1 = loadAnimation("images/jerryOne.png")
   jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
   jerryImg3 = loadAnimation("images/jerryFour.png")
   background_Image = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);

     
  background = createSprite(200, 180, 400, 10);
  background.addImage(background_Image)
  background.scale=3

   tom = createSprite(870,600)
   tom.addAnimation("standing",tomImg1)
   tom.scale=0.2

   jerry = createSprite(200,600);
   jerry.addAnimation("standing",jerryImg1)
   jerry.scale = 0.2
}

function draw() {

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0
      tom.addAnimation("tomLastImage",tomImg3)
      tom.x = 300
      tom.scale = 0.2
      tom.changeAnimation("tomLastImage")

      jerry.addAnimation("jerryLastImage",jerryImg3)
      jerry.scale = 0.15
      jerry.changeAnimation("jerryLastImage")

    }
   
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomImg2)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerryTeasing",jerryImg2)
    jerry.changeAnimation("jerryTeasing")
  }


}
