const input = document.querySelector("input")
const h1 = document.querySelector("h1")
input.addEventListener('input', function (e) {
    // console.log("Data!")
    let headerInfo = "Welcome,"
    h1.innerText = headerInfo + input.value;
    if (input.value) {
        let headerInfo = "Welcome, "
        h1.innerText = headerInfo + input.value;
    } else {
        h1.innerText = "Enter Your Username"
    }
})