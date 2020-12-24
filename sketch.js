//Create variables here
var dog1,dog2,happyDog; 
var database;
var foodS,foodStock; 
function preload(){
dog2=loadImage("Dog.png")
happyDog=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog1=createSprite(250,250,50,50)
  dog1.addImage(dog2);
  dog1.scale=0.3;
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,136,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog1.addImage(happyDog)
}  
drawSprites();
  //add styles here
textSize(50)
fill("blue")
text("Milk :"+foodS,150,50)
}
function readStock(data){
foodS=data.val();  
}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
 x=x-1;
  }
  database.ref('/').update({
  food:x
  })
}


