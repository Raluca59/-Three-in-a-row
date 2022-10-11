const squares = document.querySelectorAll(".square");
const restartButton = document.querySelector("#restartButton");
const winningConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let choices =["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameRunning = false;

initializeGame();

// Adding event listener to each cell and restart button
function initializeGame(){
squares.forEach(square => square.addEventListener("click", squareClicked));
restartButton.addEventListener("click", restartGame);
gameRunning = true;

}

function squareClicked(){
const squareIndex = this.getAttribute("squareIndex");

if (choices[squareIndex] != "" || !gameRunning) {
    return;
}
uppdateSquare(this, squareIndex);
checkWinner();
}

function uppdateSquare(square, index){
choices[index] = player;
square.textContent = player;
}

function computerMove(){

}

function changePlayer(){

}

function checkWinner(){

}

function restartGame(){

}


