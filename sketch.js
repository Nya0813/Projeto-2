var navio, navioImg, marImg


function preload(){
  navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  marImg = loadAnimation("sea.png")
}

function setup(){
  
createCanvas(400,400);

mar = createSprite(200,200)
mar.addAnimation("background", marImg)
mar.scale = 0.3

navio = createSprite(150,240)
navio.addAnimation("floating", navioImg)
navio.scale = 0.2


}

function draw() {
  background("lightblue")
  drawSprites();
   
  

   mar.velocityX = -2;

   
  
if(mar.x <0){
  mar.x = mar.width/7
}



}