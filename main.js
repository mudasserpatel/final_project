document.addEventListener('DOMContentLoaded', function () {
    const todos = [];

    const form = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTodo(taskText);
            taskInput.value = '';
        }
    });

    function addTodo(taskText) {
        const todo = { text: taskText, complete: false };
        todos.push(todo);
        renderTodos();
    }

    function renderTodos() {
        taskList.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.text;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete Task';
            completeButton.addEventListener('click', function () {
                todos[index].complete = !todos[index].complete;
                renderTodos();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Task';
            deleteButton.addEventListener('click', function () {
                todos.splice(index, 1);
                renderTodos();
            });

            if (todo.complete) {
                todoItem.classList.add('completed');
                todoItem.style.textDecoration = 'line-through';
            }

            todoItem.appendChild(completeButton);
            todoItem.appendChild(deleteButton);
            taskList.appendChild(todoItem);
        });
    }

    renderTodos();
});