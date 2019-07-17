let saveButton = document.getElementById("saveButton")
let taskName = document.getElementById('taskName')
let priorityLevel = document.getElementById("priorityLevel")

// vacation div is empty and this is where we will inject other HTML elements
let taskListDiv = document.getElementById("not-completed-tasks")

saveButton.addEventListener('click', function() {
    
    let task = taskName.value
    taskName.value = ""
    let priority = priorityLevel.value
    priorityLevel.value = ""
    
    // create a DIV element 
    let taskDiv = document.createElement("div")
    
    // create a span tag 
    let taskTitleSpan = document.createElement("span")
    taskTitleSpan.innerHTML = task
    taskTitleSpan.className = "title-span"
    
    let priorityTitleSpan = document.createElement("span")
    priorityTitleSpan.innerHTML = priority
    taskTitleSpan.className = "priority-span"
    
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.className = "check"

    let newlabel = document.createElement("Label");
    newlabel.setAttribute("for", "check");
    newlabel.innerHTML = "Incomplete";
    checkBox.appendChild(newlabel);
    
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "REMOVE"
    removeButton.className = "remove"

    
    taskDiv.appendChild(checkBox)
    taskDiv.appendChild(taskTitleSpan)
    taskDiv.appendChild(priorityTitleSpan)
    taskDiv.appendChild(removeButton)
    
    taskDiv.className = "task-list"

    taskDiv.draggable = "true"
    
    taskListDiv.appendChild(taskDiv)

    checkBox.onclick = function() {
        if(this.checked) {
            this.parentNode.style.order = 3;
            document.getElementById("completed-tasks").appendChild(this.parentNode) 
        } else {
            this.parentNode.style.order = 1;
            document.getElementById("not-completed-tasks").appendChild(this.parentNode)
        }
    }

    removeButton.addEventListener('click', function () {
        this.parentNode.parentNode.removeChild(this.parentNode)
    })

})

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("div", ev.target.class);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}