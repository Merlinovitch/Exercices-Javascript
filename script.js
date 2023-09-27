const taskList = document.getElementById('taskList')

function createNewTask() {
    let task = document.createElement('li')
    task.innerText = document.getElementById('addTask').value
    taskList.appendChild(task)
    document.getElementById('addTask').value = ''
}

