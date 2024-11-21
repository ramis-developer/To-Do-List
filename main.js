const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editButton.className = 'edit-btn';
    editButton.onclick = () => editTask(taskContent);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'COMPLETED';
    completeButton.className = 'complete-btn';
    completeButton.onclick = () => toggleComplete(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function editTask(taskContent) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null) {
        taskContent.textContent = newTaskText;  
    }
}

function toggleComplete(taskContent) {
    taskContent.classList.toggle('completed');
}