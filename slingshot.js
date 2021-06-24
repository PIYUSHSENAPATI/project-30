class slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA
            pointB: pointB
            stiffness: 0.04,
            length: 20
        }
        this.pointB = this.pointB
        this.sling = constraint.create(options);
        world.add(world, this,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA.position);
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        fill("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
 

