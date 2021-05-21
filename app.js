//selectors
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const TodoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
let todotemp=[];
//eventlisteners

button.addEventListener("click", addtodo);
TodoList.addEventListener("click", deleteitem);
filterOption.addEventListener("click", filterDisplay);


//functions

function addtodo(event) {
    event.preventDefault();
    if(input.value==="")
    {
    }
    else{
    
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    todotemp.push(tododiv);

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
}
//deleting

function deleteitem(event) {

    const item = event.target;
    if (item.classList[0] === "button-trash") {
        const todo = item.parentElement;
        item.parentElement.classList.add("fall");

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


// function filterDisplay(event) {

//     const todos = TodoList.children;
//     console.log(todos)
//     todotemp.forEach(function (item) {

//         switch (event.target.value) {
//             case "all":
//                 item.style.display = "flex";
//                 break;
//             case "completed":

//                 if (item.classlist.contains(completed)) {
//                     item.style.display = "flex";
//                 } else {
//                     item.className = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if (!item.className.contains(completed)) {
//                     item.style.display = "flex";
//                 } else {
//                     item.className = "";
//                 }
//         }
//     });
// }

function filterDisplay(event)
{
    console.log(TodoList.children);
    const todos=TodoList.children;
    for(item of todos)
    {
        switch(event.target.value)
        {
            case "all":
                item.style.display="flex";
                break;
            case "completed":
                console.log(item);
                if(item.classList.contains("completed"))
                {
                    item.style.display="flex";
                }
                else{
                    item.style.display="none";
                }
                break;
            case "uncompleted":
                if(!item.classList.contains("completed"))
                {
                    item.style.display="flex";
                }
                else{
                    item.style.display="none";
                }
                break;

        }
    }
}