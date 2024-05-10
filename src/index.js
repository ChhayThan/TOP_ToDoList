import "./style.css";
function tasks(title, description, dueDate, priority) {
  return { title, description, dueDate, priority };
}

function createTask(title, description, dueDate, priority) {
  const task = tasks(title, description, dueDate, priority);
  return task;
}

const task1 = createTask("Workout", "Movati Gym", "2024-05-10", "high");

function createProject(title) {
  return {
    title,
    taskList: [],
    addTask(task) {
      this.taskList.push(task);
    },
    removeTask(task) {
      const index = this.taskList.indexOf(task);

      if (index !== -1) {
        this.taskList.splice(index, 1);
      }
    },
  };
}

const workProject = createProject("Work");
workProject.addTask(task1);

console.log(workProject);
console.log(workProject.taskList);

workProject.removeTask(task1);

console.log(workProject);
