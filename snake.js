class Snake{
    constructor(){
        this.head = createVector(80, 80);
        this.tails = [];
        this.vectorMovement = createVector(10,0);
        this.scale = createVector(10,10);
    }

    Eat(x,y){
        this.tails.push(createVector(x,y));
        food.Generate();
    }

    ChangeDirection(vectorMovement){
        this.vectorMovement.x = vectorMovement.x * 10;
        this.vectorMovement.y = vectorMovement.y * 10;
    }

    Move(){
        let prevHead = createVector(this.head.x,this.head.y);
        
        //Head
        this.head.x += this.vectorMovement.x;
        this.head.y += this.vectorMovement.y;
        
        //Tails for length >= 2
        //Change every thails exept first tail
        for(let ct = this.tails.length - 1; ct > 0; ct--){
            this.tails[ct].x = this.tails[ct - 1].x;
            this.tails[ct].y = this.tails[ct - 1].y;
        }
        //Change first tail with head
        if(this.tails.length >= 2){
            this.tails[0].x = prevHead.x;
            this.tails[0].y = prevHead.y;
        }
        //Tails for length == 1
        if(this.tails.length == 1){
            this.tails[0].x = prevHead.x;
            this.tails[0].y = prevHead.y;
        }

        if(this.head.x == food.x && this.head.y == food.y){
            if(this.tails.length == 0) this.Eat(prevHead.x,prevHead.y);
            else this.Eat(this.tails[this.tails.length - 1].x,this.tails[this.tails.length - 1].y);
        }
        
        //Check whether head collide with any part of the tails or pass the borders
        for(let ct = 0; ct < this.tails.length; ct++){
            if(this.tails[ct].x == this.head.x && this.tails[ct].y == this.head.y){
                this.Initialize();
                break;
            }
        }

        if(this.head.x > 600 || this.head.x < 0 || this.head.y > 600 || this.head.y < 0){
            this.Initialize();
        }

    }

    Initialize(){
        this.head = createVector(80,80);
        this.tails = [];
        this.vectorMovement = createVector(10,0);
    }

    Show(){
        noStroke()
        fill(255,100);
        //Head
        rect(this.head.x,this.head.y,this.scale.x,this.scale.y);

        //Tails
        for(let tail of this.tails){
            rect(tail.x,tail.y,this.scale.x,this.scale.y);
        }
    }
}