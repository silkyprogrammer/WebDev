let myNumber = 10;
let herNumber = 11;
herNumber--;
print(herNumber)

const near = 1;
// near = 2 ERROR
// near += 1 ERROR

const pi = 3.141567

var acctBalance = 0.0; // dont use var anymore. It's the old way.
acctBalance += 1;

const boilingPointC = 100;
const boilingPointF = 212;

let iCare4U = true;
iCare4U = 1; // YOU CAN , BUT DON'T DO THIS.
iCare4U = false;

// Strings
let username = "Tommy"

let bestColor = "purple";
let quote = "You had me at \"hello\"";

let tommysColor = username + "-" + bestColor;

const message = "    TASTE THE RAINBOW!  ";
const whisper = message.toLowerCase().trim();

let tvShow = "catdog"

const word = "skateboard";
const facialHair = word.slice(5).replace("o", "e")

// Template literals are embedded expressions that evaluates to strings.

Math.PI;
Math.round(4.9);
Math.abs(-456);
Math.pow(2, 3)
Math.random()
Math.floor(Math.random() * 10) + 1 // To start the random numbers from 1 to 10

const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}` //TEMPLATE Literal


// == or === (Equals and Strictly equal)
//== will check both LHS and RHS , but not their type
