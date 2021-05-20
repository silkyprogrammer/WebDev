let max = parseInt(prompt("enter the maximum number"));

while (!max) {
    max = parseInt(prompt("enter a valid number"));
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum)

let guess = parseInt(prompt("enter your first guess!"));

let attempts = 1;
while (parseInt(guess) != targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}


if (guess === "q") {
    console.log("Break!")
} else {
    console.log("Game Over!")
    console.log(`You got it! It took you ${attempts} guesses`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
    console.log(num * num);
}

