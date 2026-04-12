function createTodo() {
  const inputVal = document.querySelector(".input>input").value;

  // create an li element
  const todoItem = document.createElement("li");

  // adding input value in todoitem and icons
  todoItem.innerHTML = `<span> ${inputVal}</span><div> 
  <input type="text"/><i onClick="editTodo(event)" class="fa-solid fa-floppy-disk"></i>
  <i class = "fa-solid fa-pen-to-square"></i> <i onClick="deleteTodo(event)"class="fa-solid fa-delete-left"></i></div>`;

  // adding item to DOM
  const todocontainer = document.querySelector(".todo-container");
  todocontainer.append(todoItem);

  // clearing input value
  document.querySelector(".input>input").value = "";
}

function deleteTodo(e) {
  //e.target.remove()
  e.target.parentElement.parentElement.parentElement.remove();
}

function editTodo(e) {
  let editValue = e.target.previousElementSibling.value;
  if (editValue == "") return;
  e.target.parentElement.previousElementSibling.innerText = editValue;
  e.target.previousElementSibling.value = "";
}
