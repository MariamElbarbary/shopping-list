var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", appendToTheList);
input.addEventListener("keypress", appendToListWithKeyPress);

Array.from(ul.children, addActionsToArray);

function addActionsToArray(item) {
    item.addEventListener("click", toggleDone);
    addDeleteButton(item);
};

function inputLength() {
    return input.value.length;
}

function appendToListWithKeyPress(event) {
    if (event.keyCode === 13) {
        appendToTheList();
    }
}

function appendToTheList() {
    if (inputLength() > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.classList.add("list-group-item", 'd-flex', 'justify-content-between');
        li.addEventListener("click", toggleDone);

        addDeleteButton(li);

        ul.appendChild(li);
        input.value = "";
    }
}

function toggleDone(event) {
    console.log(event);
    if (!event.srcElement.classList.contains("delete")) {
        event.srcElement.classList.toggle("done");
    }
}

function addDeleteButton(item) {
    var deletebutton = document.createElement("button");
    deletebutton.appendChild(document.createTextNode("x"));
    deletebutton.classList.add("delete", "close");
    deletebutton.addEventListener("click", deleteItem);
    item.appendChild(deletebutton);
}


function deleteItem(event) {
    console.log("delete me!");
    ul.removeChild(event.srcElement.parentNode);
}