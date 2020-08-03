let canvas = document.getElementById("snake_game");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
    x: 7,
    y: 7,
}
let UP = 1;
let RIGHT = 2;
let DOWN = 3;
let LEFT = 4;
let direction = RIGHT;

function drawBG(){
    context.fillStyle = "green";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function drawSnake(){
    context.fillStyle = "black";
    snake.forEach(square => {
        context.fillRect(square.x * box, square.y * box, box, box)
    })
}

function drawFrame(){
    drawBG();
    drawSnake();

    let head = Object.assign({}, snake[0]);

    if(direction == RIGHT) head.x++;
    else if(direction == LEFT) head.x--;
    else if(direction == UP) head.y--;
    else if(direction == DOWN) head.y++;

    snake.pop();
    snake.unshift(head);


}

let game = setInterval(drawFrame, 1000)

