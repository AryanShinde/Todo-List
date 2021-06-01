//selector
const username = prompt("what is your name: ")
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const TodoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const user = document.querySelector("#name")
user.innerText = username;
let todotemp = [];
//eventlisteners
document.addEventListener("DOMContentLoaded", updateUi);
button.addEventListener("click", addtodo);
TodoList.addEventListener("click", deleteitem);
filterOption.addEventListener("click", filterDisplay);


//functions

function addtodo(event) {
    event.preventDefault();
    if (input.value === "") {} else {

        const tododiv = document.createElement("div");
        tododiv.classList.add("todo");
        todotemp.push(tododiv);

        const todoitem = document.createElement("li");
        todoitem.classList.add("todoitem");
        todoitem.innerText = input.value;
        tododiv.appendChild(todoitem);

        //calling function of local storage
        localStoragefun(input.value);

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
}
//deleting

function deleteitem(event) {

    const item = event.target;
    if (item.classList.contains("button-trash")) {
        const todo = item.parentElement;
        item.parentElement.classList.add("fall");
        RemoveLocalTodos(todo);


        //prevents directly delteting the element before transition
        item.parentElement.addEventListener("transitionend", () => {
            item.parentElement.remove();

        });

    }

    //check
    else if (item.classList[0] === "button-done") {
        const todo = item.parentElement;
        item.parentElement.classList.toggle("completed");
        item.parentElement.addEventListener("transitionend", () => {
            item.classList.remove("button-done-1");
        });


    }
}


function filterDisplay(event) {
    console.log(event.target.value);
    var todos = TodoList.children;
    console.log(todos);
    for (item of todos) {
        // switch (event.target.value) {
        //     case "all":
        //         item.style.display = "flex";
        //         break;
        //     case "completed":

        //         if (item.classlist[0] === "completed") {
        //             item.style.display = "flex";
        //         } else {
        //             item.className = "none";
        //         }
        //         break;
        //     case "uncompleted":
        //         if (!item.className[0] === "completed") {
        //             item.style.display = "flex";
        //         } else {
        //             item.className = "";
        //         }
        // }


        if (event.target.value === "all") {
            item.style.display = "flex";

        }
        if (event.target.value === "completed") {
            if (item.classList.contains("completed")) {
                item.style.display = "flex";
            
            } else {
                item.style.display = "none";
                

            }

        }
        if (event.target.value === "uncompleted") {
            if (!item.classList.contains("completed")) {
                item.style.display = "flex";
                
            } else {
                item.style.display = "none";
                
            }
        }
    }
}

// function filterDisplay(event) {
//     console.log(TodoList.children);
//     const todos = TodoList.children;
//     for (item of todos) {
//         switch (event.target.value) {
//             case "all":
//                 item.style.display = "flex";
//                 break;
//             case "completed":
//                 console.log(item);
//                 if (item.classList.contains("completed")) {
//                     item.style.display = "flex";
//                 } else {
//                     item.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if (!item.classList.contains("completed")) {
//                     item.style.display = "flex";
//                 } else {
//                     item.style.display = "none";
//                 }
//                 break;

//         }
//     }
// }


function localStoragefun(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateUi(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    for (todo of todos) {
        const tododiv = document.createElement("div");
        tododiv.classList.add("todo");
        todotemp.push(tododiv);

        const todoitem = document.createElement("li");
        todoitem.classList.add("todoitem");
        todoitem.innerText = todo;
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
    }

}

function RemoveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const selectedTodo = todo.children[0].innerText;

    console.log(todos.indexOf(selectedTodo));
    todos.splice(todos.indexOf(selectedTodo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

};