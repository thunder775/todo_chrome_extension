let iterator = 1;

// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list')

// event listeners
todoButton.addEventListener('click', addTodo)

// functions
function addTodo(event) {
  event.preventDefault();
  const currentId = iterator
  if (todoInput.value === '')
    return
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo-div');

  const todoListItem = document.createElement('li')
  todoListItem.innerText = todoInput.value;
  todoListItem.classList.add("todo-list");
  todoInput.value = '';
  todoDiv.appendChild(todoListItem)

  const completeTask = document.createElement("button");
  completeTask.innerHTML = `<i class="fas fa-check"></i>`;
  completeTask.classList.add("complete-btn");
  todoDiv.appendChild(completeTask);

  const removeTask = document.createElement("button");
  removeTask.innerHTML = `<i class="fas fa-trash"></i>`;
  removeTask.classList.add("trash-btn");
  removeTask.addEventListener('click', () => removeTodo(currentId))
  todoDiv.appendChild(removeTask);

  todoDiv.setAttribute('id', `${currentId}`);
  iterator++;
  todoList.appendChild(todoDiv)
}

function removeTodo(id) {
  document.querySelector(`.todo-list .todo-div[id="${id}"]`).remove()
}
