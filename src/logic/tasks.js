import { addTask } from "./menu";

let activeTasks = [];
let completedTasks = [];

function tasks() {

    let taskWrapper = document.querySelector('.task-wrapper');

    let taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
    taskWrapper.appendChild(taskHeader);

    let taskHeaderInfo = document.createElement("ul");
    taskHeaderInfo.classList.add('task-header-info');
    taskHeader.appendChild(taskHeaderInfo);

    let headerContent = ["Title", "Description", "Date", "Priority", "Status", "Edit"];

    for (let j = 0; j < headerContent.length; j++) {
        let taskHeaderItem = document.createElement("li");
        taskHeaderItem.classList.add('task-header-item');
        taskHeaderItem.innerText = headerContent[j];
        taskHeaderInfo.appendChild(taskHeaderItem);
        console.log(headerContent[j]);
    }



    for(let i = 0; i < activeTasks.length; i++) {

        let task = document.createElement('div');
        task.classList.add('task');
        taskWrapper.appendChild(task);

        let taskTitle = document.createElement('h3');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = activeTasks[i].title;
        task.appendChild(taskTitle);

        let taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.textContent = activeTasks[i].description;
        task.appendChild(taskDescription);

        let taskDate = document.createElement('p');
        taskDate.classList.add('task-date');
        taskDate.textContent = activeTasks[i].date;
        task.appendChild(taskDate);

        let taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        taskPriority.textContent = activeTasks[i].priority;
        task.appendChild(taskPriority);

        let taskStatus = document.createElement('p');
        taskStatus.classList.add('task-status');
        taskStatus.textContent = activeTasks[i].status;
        task.appendChild(taskStatus);

        let taskKey = document.createElement('p');
        taskKey.classList.add('task-key');
        taskKey.textContent = activeTasks[i].key;
        task.appendChild(taskKey);

        let taskCompleted = document.createElement('button');
        taskCompleted.classList.add('task-completed');
        taskCompleted.textContent = "Completed";
        task.appendChild(taskCompleted);

        let taskEdit = document.createElement('button');
        taskEdit.classList.add('task-edit');
        taskEdit.textContent = "Edit";
        task.appendChild(taskEdit);

        let taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDelete.textContent = "Delete";
        task.appendChild(taskDelete);


        if(activeTasks[0].title ==="Work"){
            task.id = "work";
        }else if(activeTasks[0].title === "Health"){
            task.id = "health";
        }else if(activeTasks[0].title === "Finance"){
            task.id = "finance";
        }else if(activeTasks[0].title === "Social"){
            task.id = "social";
        }
    }



    
}




function newTask () {

    let newTaskWrapper = document.createElement("section");
    newTaskWrapper.classList.add('new-task-wrapper');
    document.body.appendChild(newTaskWrapper);
    newTaskWrapper.style.display = "flex";
    newTaskWrapper.style.position = "absolute";
}




function taskFactory (date, title, description, priority, status) {

    let task = {date, title, description, priority, status};

    taskTracker(task);

}

function taskTracker (task) {
    
        if (task.status === "active") {
            activeTasks.push(task);
        } else if (task.status === "completed") {
            completedTasks.push(task);
        }


        console.log(activeTasks);

    
        console.log(activeTasks);
        console.log(completedTasks);


        return task;


}




taskFactory("Today", "Work", "Earn Money", "High", "active");

export { taskFactory, tasks, newTask };



export default tasks;