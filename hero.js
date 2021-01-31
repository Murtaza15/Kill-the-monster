class Hero {
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:1
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        this.image=loadImage("Superhero-01.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}
