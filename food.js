class Food{
    constructor(){
        this.scale = createVector(10, 10);
        this.x = floor(random(0, width / this.scale.x)) * this.scale.x;
        this.y = floor(random(0,height / this.scale.y)) * this.scale.y;
    }

    Generate(){
        this.x = floor(random(0, width / this.scale.x)) * this.scale.x;
        this.y = floor(random(0,height / this.scale.y)) * this.scale.y;
    }

    Show(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,this.scale.x,this.scale.y);
    }
}