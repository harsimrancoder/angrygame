class SLINGSHOT {
    constructor(bodyA,bodyB){
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           length:100,
           stiffness:0.1,
            } 
this.slingshot=Matter.Constraint.create(options)
World.add(world,this.slingshot)
    }
    display(){
        var pointA=this.slingshot.bodyA.position
        var pointB=this.slingshot.bodyB.position
       line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}