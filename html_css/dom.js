// DOM manipulations

const image = document.getElementById("unicorn")
const heading = document.getElementById("mainheading")


const doneTodos = document.querySelectorAll("li.done")
const checkbox = document.querySelector("input[type='checkbox']")

// document.querySelector("h1 span").innerHTML = "Disgusting"
document.querySelector("div#container").style.textAlign = "center"
document.querySelector("div#container img").style.width = "150px"
document.querySelector("div#container img").style.borderRadius = "50%"

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letters = document.querySelectorAll("h1 span")
for (let i = 0; i < colors.length; i++) {
    letters.item(i).style.color = colors[i];
}

const listed = document.querySelectorAll("ul li")
// listed[0].toggleAttribute('class', 'highlight');
listed[0].setAttribute('class', 'highlight')
listed[1].removeAttribute('class', 'highlight')
listed[2].setAttribute('class', 'highlight')
listed[3].setAttribute('class', 'highlight')
listed[4].removeAttribute('class', 'highlight')
listed[5].setAttribute('class', 'highlight')

// for (let index = 0; index < 100; index++) {

//     const btn = document.createElement("button")
//     btn.innerText = "Hello!";
//     btn.type = "button"
//     const b = document.querySelector('body')
//     b.appendChild(btn)
// }


const helloBtn = document.querySelector("#hello")
helloBtn.addEventListener('click', () => {
    console.log("hello")
})

const gbBtn = document.querySelector("#goodbye")
gbBtn.addEventListener('click', () => {
    console.log("goodbye")
})