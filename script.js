let canvas = document.getElementById("snake_game");
let context = canvas.getContext("2d");
let box = 32;

function criarBG(){
    context.fillStyle = "green";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();