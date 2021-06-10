


//For one dice, what if we want 6 times, to avoid duplication we use functions.

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice)
}
for (let i = 0; i < 10; i++) {
    rollDice();
}


function printHeart() {
    console.log("<3")
}

printHeart()


function rant(message) {
    let msg = message.toUpperCase();
    console.log(msg)
    console.log(msg)
    console.log(msg)
}


function isSnakeEyes(roll1, roll2) {
    if (parseInt(roll1) === 1 && parseInt(roll2) === 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

function multiply(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
        return false
    }
    let result = arg1 * arg2;
    return result;

}


function isShortsWeather(num) {
    if (parseInt(num) < 75) {
        return false;

    }
    return true;
}

//DID NOT CLEAR THE CHECKS - Work on it again.
function lastElement(arr) {
    if (arr.length === 0) {
        return null
    }
    console.log(arr[arr.length - 1]);
}

// var variables can be accessed outside blocks.

// Function expression
const squareq = function (x) {
    return x * x;
}

const square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function (side) {
        return 4 * side;
    }
}


const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount += 1;
        // console.log("EGG");
        return "EGG"
    }
}

