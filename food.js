class Food{
    constructor() {
        this.foodstock=0
        this.lastfed
        this.image=loadImage("Milk.png")

    }

 Updatefoodstock(foodstock){
this.foodstock=foodstock
 }
Getfedtime(lastfed){

    this.lastfed=lastfed
}
Deductfood(){
    if(this.foodstock>0){
        this.foodstock=this.foodstock-1
    }
}
Getfoodstock(){
 return this.foodstock
}
display(){
   background(49,136,87)
   fill("black");
   textSize(15)
   if(lastfed>=12){
    text("lastfed: "+lastfed%12+"pm",350,30)
   }
   else if(lastfed==10){
     text("lastfed: 12am",350,30)
    }
    else{
     text("lastfed:"+lastfed+"am",350,30)
    }
    var x=70,y=100
imageMode(CENTER)
if(this.foodstock!=0){
   
    for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
            x=70;y=y+50
        }
        image(this.image,x,y,50,50);
        x=x+30
         
    }
}

}
bedroom(){
    background(bedroom,550,500)
}
washroom(){
    background(washroom,550,500)

}
garden(){
    background(garden,550,500)
}
}