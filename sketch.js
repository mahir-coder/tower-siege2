const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  
  ground1 = new Ground(400,350,800,10)
  ground2 = new Ground(50,320,100,50)

  box1 = new Box(400,325,40,50)
  box2 = new Box(430,325,40,50)
  box3 = new Box(460,325,40,50)
  box4 = new Box(415,285,40,50)
  box5 = new Box(445,285,40,50)
  box6 = new Box(430,200,40,50)

  polygon = Bodies.circle(50,50,20)
  World.add(world,polygon)
  

  str = new SlingShot(polygon,{x:100,y:200})
 
 

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
  ellipse(polygon.position.x,polygon.position.y,20,20)
 
ground1.display();
ground2.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
str.display()




}
function mouseDragged(){
  console.log("Inside")
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
      console.log("In")
}


function mouseReleased(){
  str.fly();
  
}