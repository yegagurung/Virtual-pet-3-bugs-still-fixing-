var sit, down
var dog
var food 
var foodstock
var database 
var lastfed
var Feed, addfood, fedtime
var gamestate;
var bedroom, washroom, garden;

function preload(){
sit=loadImage("images/dogImg.png")	
down=loadImage("images/dogImg1.png")
bedroom=loadImage("Bed Room.png")	
washroom=loadImage("Wash Room.png")
garden=loadImage("Garden.png")
}

function setup() {
	createCanvas(400,500);
  database=firebase.database()
  dog=createSprite(200,400,150,150);
  dog.addImage(sit)
  dog.scale= 0.15
  foodstock =database.ref('Food')
  foodstock.on("value",readstock)
food1=new Food()
feed=createButton("Feed the dog")
feed.position(700,95)
feed.mousePressed(feeddog)

Addfood=createButton("Addfood")
Addfood.position(800,95)
Addfood.mousePressed(addfoods)

fedtime=database.ref('fedtime')
 fedtime.on("value",function(data){
   lastfed=data.val()
   readstate=database.ref('gamestate')
   readstate.on("value",function(data){
     gamestate=data.val()
   })
 })
}



function draw() {  
currenttime=hour()
if(currenttime==lastfed+1){
  Update("play")
  food1.garden()
}
else if(currenttime==lastfed+2){
  Update("sleeping")
  food1.bedroom()
}
else if(currenttime>(lastfed+2)&&currenttime<=(lastfed+4)){
  Update("bathing")
  food1.washroom()
}
else{
  Update("hungry")
  food1.display();
}
if(gamestate!="hungry"){
feed.hide()
Addfood.hide()
dog.remove()
}
else{
  feed.show()
  Addfood.show()
  dog.addImage(sit)

}
drawSprites();
 



}
function readstock(data){
  food=data.val()
  food1.Updatefoodstock(food)

}

function feeddog(){
  dog.addImage(down)
  food1.Updatefoodstock(food1.Getfoodstock()-1)
  
  database.ref('/').update({
    Food:food1.Getfoodstock(),
    fedtime:hour(),
    gamestate:"hungry"
  })

}
function addfoods(){
  food++
  database.ref('/').update({
    Food:food
  })
  


}
function Update(state){
  database.ref('/').update({
    gamestate:state
  })
}