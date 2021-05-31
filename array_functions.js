const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]
numbers.forEach(function (el) {
    console.log(el);
})


const squares = numbers.map(function (el) {
    return el * el;
})

const names = ["Hari ", " Tom", "John", "  Doe", "ElizabethQueen"];

//To call you do clean(names) in console
const clean = function cleanNames(arr) {
    return arr.map(function (name) {
        return name.trim();
    })
}

const sum = (x, y) => {
    return x + y;
}

// greet('Coco')
const greet = (msg) => {
    return `Hey ${msg}!`;
}

const rollDice = () => (
    Math.floor(Math.random() * 6) + 1
);

const add = (a, b) => a + b;


// setTimeout(() => {
//     console.log("HELLO")
// }, 3000)


// setInterval(() => {
//     console.log(Math.random())
// }, 3000)

//Filter function
const odds = numbers.filter(n => {
    return n % 2 == 1;
})


function validUserNames(array) {
    return array.filter(arr => {
        return arr.length < 10;
    })

}

// allEvens([2,4,6]) - true
// allEvens([2,4,7]) - false
function allEvens(params) {
    return params.every(p => (p % 2 == 0))
}