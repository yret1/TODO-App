import render from "./logic/render"
import tasks from "./logic/tasks";
import menu from "./logic/menu";
import { taskFactory } from "./logic/tasks";


render();
tasks();
menu();




let button = document.querySelector('.add-task');

button.addEventListener('click', taskFactory("Today", "Work", "Earn Money", "High", "active"));
console.log("Hello from index.js")