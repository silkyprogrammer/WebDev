// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const prod = form.elements.product.value;
    const qty = form.elements.qty.value;
    const itemsContainer = document.querySelector("#list");
    const newItem = document.createElement("li");
    newItem.append(qty);
    newItem.append(` ${prod}`);
    itemsContainer.append(newItem);

});