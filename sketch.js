const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,box,ball;
var bottom,left,right,top;
var button1,button2;



function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var ball_options = {
  restitution:1.0
}
ball = Bodies.circle(200,10,40,ball_options);
World.add(world,ball)
bottom = new Ground(200,390,400,20);
right = new Ground(390,200,20,400)
left = new Ground(10,200,20,400);
top = new Ground(200,10,400,20);
button1 = createImg("right.png");
button1.position(220,30);
button1.size(50,50);
button1.mouseClicked(hForce);

button2 = createImg("up.png");
button2.position(20,30);
button2.size(50,50);
button2.mouseClicked(vForce);
}

function draw() {
  background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  bottom.display()
  right.display()
  left.display()
  //top.display()
  Engine.update(engine);
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}