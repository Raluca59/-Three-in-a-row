const squares = document.querySelectorAll(".square");
const restartButton = document.querySelector("#restartButton");
const updateText = document.querySelector("#uppdateText");

//Restart button and click sound
const newGameSound = new Audio("sounds/restartButton.wav");
const clickSound = new Audio("sounds/click.wav");
const winGame = new Audio("sounds/winning.wav");

//Winning combinations
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
updateText.textContent = `${player}'s turn`;
gameRunning = true;
}



function squareClicked(){
const squareIndex = this.getAttribute("data-squareIndex");

if (choices[squareIndex] != "" || !gameRunning) {
    return;
}
clickSound.play();
updateSquare(this, squareIndex);
checkWinner();
}


function updateSquare(square, index){
choices[index] = player;
square.textContent = player;
}

//Changing player 
function changePlayer(){
player = (player == "X") ? "O" : "X";
updateText.textContent = `${player}'s turn`;

}


// Determine the winner
function checkWinner(){

let roundWon = false;

for (let i = 0; i < winningConditions.length; i++){
    const condition = winningConditions[i];
    const squareX = choices[condition[0]];
    const squareY = choices[condition[1]];
    const squareZ = choices[condition[2]];

    if (squareX == "" || squareY == "" || squareZ == "") {
        continue;
    }
    if (squareX == squareY && squareY == squareZ) {
        roundWon = true;
        break;
    }
}
if (roundWon){
    updateText.textContent = `${player} won!`;
    winGame.play();
    gameRunning = false;
 }
 else if(!choices.includes("")){
    updateText.textContent = `Draw!`;
    gameRunning = false;
 }
 else{
    changePlayer();
 }

}

//Restart button
function restartGame(){
player = "X";
choices =["", "", "", "", "", "", "", "", ""];
updateText.textContent = `${player}'s turn`;
squares.forEach(square => square.textContent = "");
gameRunning = true;

newGameSound.play();

}

