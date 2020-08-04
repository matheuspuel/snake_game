let canvas = document.getElementById("snake_game");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
    x: 7,
    y: 7,
}
let UP = 38;
let RIGHT = 39;
let DOWN = 40;
let LEFT = 37;
let direction = RIGHT;
let food = {
    x: Math.floor(Math.random() * 16),
    y: Math.floor(Math.random() * 16),
}

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

function drawFood(){
    context.fillStyle = 'darkred';
    context.fillRect(food.x * box, food.y * box, box, box)
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == RIGHT && direction != LEFT) direction = RIGHT;
    else if(event.keyCode == LEFT && direction != RIGHT) direction = LEFT;
    else if(event.keyCode == UP && direction != DOWN) direction = UP;
    else if(event.keyCode == DOWN && direction != UP) direction = DOWN;
}

function drawFrame(){
    let head = Object.assign({}, snake[0]);

    if(direction == RIGHT) head.x++;
    else if(direction == LEFT) head.x--;
    else if(direction == UP) head.y--;
    else if(direction == DOWN) head.y++;

    if(head.x > 15) head.x = 0
    if(head.y > 15) head.y = 0
    if(head.x < 0) head.x = 15
    if(head.y < 0) head.y = 15
    
    if (head.x == food.x && head.y == food.y){
        food.x = Math.floor(Math.random() * 16)
        food.y = Math.floor(Math.random() * 16)
    } else {
        snake.pop();
    }
    
    if (snake.some(square => square.x == head.x && square.y == head.y)) {
        clearInterval(game);
        alert('Game Over');
    }

    snake.unshift(head);

    drawBG();
    drawSnake();
    drawFood();
}

let game = setInterval(drawFrame, 200)

