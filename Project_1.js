// Project #1: Choose your own adventure game
const prompt = require("prompt-sync")();
const name = prompt("What is your name, please? ");
console.log("Hello,", name, "welcome to the game!");

const shouldweplay = prompt("Do you want to play now? ");

if (shouldweplay.toLowerCase() === "yes") {
  // Game Logic
  const leftOrRight = prompt(
    "You're now in a maze. Do you want to go left or right? "
  );
  if (leftOrRight === "left") {
    console.log("You go left & see a bridge...");
    const cross = prompt("Do you want to cross the bridge? ");
    if (cross.toLowerCase() === "yes") {
      console.log(
        "You've crossed the bridge, but the bridge was weak & the bridge broke. You then fell off the bridge. You lost the game."
      );
    } else {
      console.log("Good choice.. You win the game!");
    }
  } else {
    console.log("You go right & fall off a cliff...");
  }
} else if (shouldweplay.toLowerCase() === "no") {
  console.log("Okay :(");
} else {
  console.log("Invalid input...");
}
