//selectors
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const TodoList = document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

//eventlisteners

button.addEventListener("click", addtodo);
TodoList.addEventListener("click", deleteitem);


//functions

function addtodo(event) {
    event.preventDefault();
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    const todoitem = document.createElement("li");
    todoitem.classList.add("todoitem");
    todoitem.innerText = input.value;
    tododiv.appendChild(todoitem);

    const buttondone = document.createElement("button");
    const buttontrash = document.createElement("button");

    buttondone.classList.add("button-done");
    buttontrash.classList.add("button-trash");

    buttondone.innerHTML = '<i class="fas fa-check"></i>';
    tododiv.appendChild(buttondone);
    buttontrash.innerHTML = '<i class="fas fa-trash"></i>';
    tododiv.appendChild(buttontrash);
    TodoList.appendChild(tododiv);
    input.value = ""
}
//deleting

function deleteitem(event) {

    const item = event.target;
    if (item.classList[0] === "button-trash") {
        item.parentElement.classList.add("fall");

        //prevents directly delteting the element before transition
        item.parentElement.addEventListener("transitionend", function()
        {
            item.parentElement.remove();
        });

    }

    //check
    else if (item.classList[0] === "button-done") {

        item.parentElement.classList.toggle("completed");
        item.parentElement.addEventListener("transitionend", function()
        {
            item.classList.remove("button-done-1");
        });
        
        
    }
}