const input=  document.querySelector(".todo-input");
const button= document.querySelector(".todo-button");
const TodoList=document.querySelector(".todo-list")

button.addEventListener("click",addtodo);

function addtodo(event)
{
    event.preventDefault();
    const tododiv=document.createElement("div");
    tododiv.classList.add("todo");

    const todoitem=document.createElement("li");
    todoitem.classList.add("todoitem");
    todoitem.innerText="item 1";
    tododiv.appendChild(todoitem);
    
    const buttondone=document.createElement("button");
    const buttontrash=document.createElement("button");

    buttondone.classList.add("button-done");
    buttontrash.classList.add("button-trash");

    buttondone.innerHTML='<i class="fas fa-check"></i>';
    tododiv.appendChild(buttondone);
    buttontrash.innerHTML='<i class="fas fa-trash"></i>';
    tododiv.appendChild(buttontrash);
    TodoList.appendChild(tododiv);

}