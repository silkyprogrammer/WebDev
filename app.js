console.log("Hello, from our first JS file")

console.log("Before condition")
if (1 + 1 == 2) {
    console.log("Math works")
}
console.log("after condition")

let random = Math.random();

if (random < 0.5) {
    console.log("It's less than 0.5")
}

const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {
    console.log("Monday Blues")
} else if (dayOfWeek === 'Friday') {
    console.log("TGIF")
}

const phrase = "go"
getColor(phrase)
function getColor(phrase) {
    if (phrase === 'stop') {
        console.log("red")
    } else if (phrase === "slow") {
        console.log("yellow")
    } else if (phrase === "go") {
        console.log("green")
    } else {
        console.log("purple")
    }
}

const password = prompt("Enter password");
if (password.length >= 6 && password.indexOf(' ') == -1) {
    console.log("Valid password")
}