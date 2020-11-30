


const addButton = document.getElementById("Add");
const deleteButton = document.getElementById("delete")
const doneButton = document.getElementById("done")


function createtask () {
    const inputValue = document.getElementById("input").value;
    if(inputValue == "")
    return;
    const task = document.createElement("li");
    task.classList = "line"
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.id ="delete";
    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.id ="done"
    task.innerHTML = inputValue;
    document.getElementById("List").appendChild(task);
    task.appendChild(doneButton);
    task.appendChild(deleteButton);
    document.getElementById("input").value = "";
        return;    
}
function deleteTask(){
    const line = this.parentNode
    line.remove();
    return;    
};
function taskDone(){
    
}
    
addButton.addEventListener("click", createtask);
deleteButton.addEventListener("click",deleteTask);
doneButton.addEventListener("click",taskDone);
    
