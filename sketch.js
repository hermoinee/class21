function setup() {
  createCanvas(800,800);
fixRect=createSprite(600,200,50,80);
fixRect.shapeColor="blue";
fixRect.debug=true;

movingRect=createSprite(600,400,50,80);
movingRect.shapeColor="blue";
movingRect.debug=true;

gameObject1=createSprite(200,100,50,80);
gameObject1.shapeColor="yellow";
gameObject1.debug=true;

gameObject2 = createSprite(400, 100, 50, 80);
gameObject2.shapeColor = "green";
gameObject2.debug = true;
gameObject3 = createSprite(400, 800,80,30);
gameObject3.shapeColor = "green";
gameObject3.debug = true;

gameObject3.velocityY = -5;
gameObject2.velocityY = +5;

}

function draw() {
  background("black"); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  bounceOff(gameObject3,gameObject2);

 // isTouching();
 if (isTouching(movingRect,gameObject1)) {

  gameObject1.shapeColor="red";
  movingRect.shapeColor="red";

 }
 else{

  gameObject1.shapeColor="yellow";
  movingRect.shapeColor="blue";

 } 


  drawSprites();
}

