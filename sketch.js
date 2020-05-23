const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function preload(){
    polygon_img = loadImage("polygon.png");
}



function setup() {
 var canvas = createCanvas(800,400);
 
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(400,400,800,20);

 stand = new Ground(600,270,200,5);

 polygon = Bodies.circle(500,200,20);
 World.add(world,polygon);

 slingShot = new SlingShot(this.polygon,{x:100,y:200});

 /*box1 = new Box();
 box2 = new Box();
 box3 = new Box();
 box4 = new Box();
 box5 = new Box();
 box6 = new Box();
 box7 = new Box();
 box8 = new Box();
 box9 = new Box();
 box10 = new Box();*/

}

function draw() {
  background(0);  
 
  ground.display();
  stand.display();
 
  polygon.x = mouseX
  polygon.y = mouseY

  /*box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box1.display();*/

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}