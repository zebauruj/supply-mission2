class Box{
constructor(x,y,w,h){
var options={
is Static:true,
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
fill("red");
rect(pos.x,pos.y,this.w,this.h);
}
}
