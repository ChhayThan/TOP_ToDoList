import "./style.css";
import createTask from "./tasks";
import createProject from "./projects";

const task1 = createTask("Workout", "Movati Gym", "2024-05-10", "high", 1);

const workProject = createProject("Work");
workProject.addTask(task1);

console.log(workProject);
console.log(workProject.taskList[0]);

workProject.removeTask(task1);

console.log(workProject);
