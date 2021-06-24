
class Block{
    constructor(x,y,width,height) {
        var options = {
            restitution :0.4,
            friction :1.0,
        }
        this.Body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
    }
    display(){

        if (this.speed<3) {
        var angle = this.Body.angle;
        var pos = this.Body.position;
        Push();
        Translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTRE);
        rect(0,0,this.width, this.height);
        Pop();
        }
        else{
            World.remove(world, this.body);
            Push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility)
            rect(999,999,this,this.width, this.height);
            pop();
        }

    }
}