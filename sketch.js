// Engine, World & Bodies are 3 main componenets of Physics Library
// create 3 constants for these so that their value cannot be changed later
const Engine = Matter.Engine; // Classes Engine => World
const World = Matter.World;
const Bodies = Matter.Bodies;


//create engine & world objects variables
var engine,world;   /// Objects  Engine => engine          engine =>world
var box;
var ground,ball;

function setup(){
   createCanvas(400,400);
   //create engine object
   engine = Engine.create();
   //create world for Engine
   world = engine.world;

   // create options for box
   var options = {
       isStatic: true
    }; // Json Object

   // create box from Bodies.rectangle & use options 
   box = Bodies.rectangle(200,200,50,50,options);
   //add box to world
   World.add(world,box);

   // create options for ground
   var ground_options={isStatic:true};
   // create ground from Bodies.rectangle & use options 
   ground=Bodies.rectangle(200,390,400,20,ground_options);
  //add ground to world
   World.add(world,ground);

   // create options for ball
   var ball_options={restitution:1.0};
   // create ball from Bodies.circle & use options 
   ball=Bodies.circle(300,200,30,ball_options);
   //add ball to world
   World.add(world,ball);
}

function draw(){
    background(0);
    // update the ENgine with engine object
    Engine.update(engine);
    //rcetangle mode is center
    rectMode(CENTER);
    // create rectangle with positions of box
    rect(box.position.x,box.position.y,50,50);
    // create rectangle with positions of ground
    rect(ground.position.x,ground.position.y,400,20);

    // ellipse mode is radius
    ellipseMode(RADIUS);
    //creating an ellipse with positions of ball
    ellipse(ball.position.x,ball.position.y,30,30);
}