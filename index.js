const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
player = 0;
computer = 0;
result = 0;
paused = true;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    resultText.textContent = checkWinner();

  }));
function computerTurn() {
  const randomNUmber = Math.floor(Math.random() * 3) + 1;
  switch (randomNUmber) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
    if(player == computer){
        return "DRAW!";
    }
    else if(computer == "ROCK"){
        return player == "PAPER" ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return player == "SCISSORS" ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return player == "ROCK" ? "YOU WIN!" : "YOU LOSE!"
    }
}
