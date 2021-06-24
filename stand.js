
class Stand{
    constuctor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        world.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        strokeWeight(2);
        fill("white");
        Push();
        Translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTRE);
        rect(0,0,this,width, this.height);
        pop();
    }
    }