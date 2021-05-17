const input=  document.querySelector(".todo-input");
const button= document.querySelector(".todo-button");
const TodoList=document.querySelector(".todo-list")

button.addEventListener("click",addtodo);

function addtodo(event)
{
    event.preventDefault();
}