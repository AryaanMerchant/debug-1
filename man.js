class Man{

    constructor(x,y,radius){
        var Man_options={
            restitution:0.9
          }
        
          this.Man = Bodies.ellipse(450,390,50,Man_options)
          World.add(world,this.Man);
    }
    display(){
        noStroke();
        fill(188,67,67);
        ellipseMode(CENTER);
        ellipse(this.Man.position.x,this.Man.position.y,900,20);
    }
}