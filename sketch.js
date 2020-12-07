var mrect,frect;


function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor="green";
  mrect=createSprite(600,250,50,50)
  mrect.shapeColor="green";
}

function draw() {
  background(0);  
  drawSprites();

  mrect.x=mouseX;
  mrect.y=mouseY;

  if(mrect.x-frect.x < mrect.width/2+frect.width/2&&
    frect.x-mrect.x < mrect.width/2+frect.width/2&&
    mrect.y-frect.y <mrect.height/2+frect.height/2&&
    frect.y-mrect.y<mrect.height/2+frect.height/2){
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }else{
    mrect.shapeColor="green";
    frect.shapeColor="green";
  }
}