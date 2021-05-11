const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var Boxes = [];

var ball;
var rope;

function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 700, 1300, 40);
    ball = new Ball(600, 200, 50, 50);
    rope = new SlingShot(ball.body, {
        x: 600,
        y: 200
    });
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 5; i++) {
            Boxes.push(new Box((i*11),j*10, 20, 10));
        }
    }
}

function draw() {
    background("white");
    Engine.update(engine);
    ground.display();
    for (let i = 0; i < Boxes.length; i++) {
        Boxes[i].display();
    }
    ball.display();
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {
        x: mouseX,
        y: mouseY
    });
}