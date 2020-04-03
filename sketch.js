const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,log3,pig3,box2,box3,box4;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(700,320,70,70);
    box2 = new Box(920,100,50,100);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);
    log3 = new Log(810,180,300,PI/2);
    
    ground=new Ground(600,height,1200,20);

    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig3.display();
    log1.display();
    log3.display();
    
} 