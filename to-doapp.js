function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class='delete' onclick='deleteTask(this)'>Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}
function deleteTask(button) {
    button.parentElement.remove();
}