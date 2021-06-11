const franc = require('franc')
const lang = require('langs')
const colors = require('colors')
const input = process.argv[2];

const code = franc(input);
console.log(code);
if (code === 'und' || 'uzn') {
    console.log("Can you try another sentence!")
} else {
    const language = lang.where("3", code);
    console.log(language.name.rainbow);
}