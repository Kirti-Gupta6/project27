class Rope{
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var option={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX, y: this.offsetY.y}
      }
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    display(){

    }
}