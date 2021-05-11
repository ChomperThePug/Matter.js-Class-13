class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display(){
    super.display();
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    stroke('black');
    fill('grey');
    rect(this.x, this.y, this.width + 8, this.height);
    pop();
  }
};
