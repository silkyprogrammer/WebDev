let input = prompt("What would you like to do");
const todos = ["Collect Pens", "Get Groceries"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("****************************")
        for (let i = 0; i < todos.length; i++) {
            const element = todos[i];
            console.log(`${i}: ${element}`)
        }
        console.log("****************************")
    } else if (input === "new") {
        const newTodo = prompt("Enter new Todo");
        todos.push(newTodo)
        console.log(`${newTodo} todo added to list`);
    } else if (input === "delete") {
        const indexString = prompt("OK, enter the index to delete");
        const index = parseInt(indexString)
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`${deleted} - deleted from the list`)
        } else {
            console.log("Invalid Index")
        }

    }
    input = prompt("What would you like to do");
}
console.log("OK! Quitting Todo");



