let pScore = 0;
let cScore = 0;

const updateScore = () => {
  document.querySelector(".player-score p").textContent = pScore;
  document.querySelector(".computer-score p").textContent = cScore;
};

const playerWins = () => {
  const winner = document.querySelector(".winner");
  pScore++;
  updateScore();
  winner.textContent = "Player wins!";
};

const computerWins = () => {
  const winner = document.querySelector(".winner");
  cScore++;
  updateScore();
  winner.textContent = "Computer wins!";
};

const tieGame = () => {
  const winner = document.querySelector(".winner");
  winner.textContent = "It is a tie!";
};

export const compareHands = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return tieGame();

  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winMap[playerChoice] === computerChoice) {
    playerWins();
  } else {
    computerWins();
  }
};
