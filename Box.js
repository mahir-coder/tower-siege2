class Box{
    
  constructor(x,y,width,height){
      this.image=loadImage("images/rect.png")
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
   //   this.x=x
     // this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
      this.visiblity=255
  }
  display(){
    
    if(this.body.speed<3){
      // rect(this.body.position.x,this.body.position.y,this.width,this.height)
      image(this.image,this.body.position.x-20,this.body.position.y-20,this.width,this.height)
    }
    else{ 
      
      World.remove(world,this.body)

      push()
      this.visiblity=this.visiblity-50
      //image(this.image,this.body.position.x-20,this.body.position.y-20,this.width,this.height)
      tint(255,this.visiblity)
      image(this.image,this.body.position.x-20,this.body.position.y-20,this.width,this.height)
      pop()
    }

  }
}
