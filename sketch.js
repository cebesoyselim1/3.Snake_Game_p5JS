let snake;
let food;
let speed = 10;
let previousKeyPress;

function setup(){
    createCanvas(600,600);
    background(0);
    food = new Food();
    snake = new Snake();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        if(previousKeyPress != "down"){
            snake.ChangeDirection(createVector(0, -1));
            previousKeyPress = "up";
        }
    }else if(keyCode === DOWN_ARROW){
        if(previousKeyPress != "up"){
            snake.ChangeDirection(createVector(0, 1));
            previousKeyPress = "down";
        }
    }else if(keyCode === LEFT_ARROW){
        if(previousKeyPress != "right"){
            snake.ChangeDirection(createVector(-1, 0));
            previousKeyPress = "left";
        }
    }else if(keyCode === RIGHT_ARROW){
        if(previousKeyPress != "left"){
            snake.ChangeDirection(createVector(1, 0));
            previousKeyPress = "right";
        }
    }
}

function draw(){
    frameRate(speed)
    background(0);
    food.Show();
    snake.Move();
    snake.Show();
}