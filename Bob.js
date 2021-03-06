class Bob{
    constructor(x,y,r){
      var option={
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, option);
      World.add(world, this.body);
    }
    display(){
      var paperPos = this.body.position;
 
      push()
      ellipseMode(RADIUS);
      translate(paperPos.x, paperPos.y);
      strokeWeight(3);
      fill(255,0,255);
      ellipse(0,0,this.r);
      pop()
    }
 }