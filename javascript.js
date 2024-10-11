const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");

console.log("hello", name, "welcome to our game");

const shouldWePlay = prompt('Do you want to play? ');

if (shouldWePlay.toLowerCase() === "yes") {
    // Game logic here 
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ")
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge...")
        const cross =  prompt("Do you want to cross the bridge? ").toLowerCase()
        if (cross === "yes") {
            console.log("you cross but the bridge was weak and broke and you fell. you lost...")
        } else {
            console.log("good choice... you win!")
        }
    } else {
        console.log("You go right and fall off a clift...")
    }
} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(")
} else {
    console.log("Invalid input...")
}



 