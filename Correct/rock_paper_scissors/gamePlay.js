import { compareHands } from "./helper.js";

export const startGame = () => {
  const playBtn = document.querySelector(".intro-button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");

  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
    match.classList.remove("fadeOut");
  });
};

export const playMatch = () => {
  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const computerOptions = ["rock", "paper", "scissors"];

  const hands = document.querySelectorAll(".hands img");
  hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
      playerHand.src = `./img/rock.png`;
      computerHand.src = `./img/rock.png`;

      setTimeout(() => {
        compareHands(this.textContent, computerChoice);
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
      }, 1000);

      playerHand.style.animation = "shakePlayer 1s ease";
      computerHand.style.animation = "shakeComputer 1s ease";
    });
  });
};
