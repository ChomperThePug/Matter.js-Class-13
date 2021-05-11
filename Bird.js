class Ball {
  constructor(x, y, width, height) {
    var options = {
      'density': 3.0,
      'frictionAir': 0.02
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.circle(x,y,width,options)
    World.add(world,this.body);
  }

  display() {
  push();
  translate(this.body.position);
  ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
  }
}