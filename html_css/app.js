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

//Arrays - allows us to group data together.

let lottoNumbers = [1, 2, 3, 4, 5, 6];

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];
leaderboard[1] = "Luna"
leaderboard[3] = "Draco"

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift()
planets.push("Saturn")
planets.unshift("Mercury")


const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

const Person = {
    firstName: "nick",
    lastName: "trevor"
}

const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = restaurant.address + "," + restaurant.city +
    "," + restaurant.state + "," + restaurant.zipcode;

