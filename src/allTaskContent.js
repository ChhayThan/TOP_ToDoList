import createTask from "./tasks";
import createProject from "./projects";

const mainProject = createProject("main");
const taskItem1 = createTask(
  "Task 1 with High priority",
  "Description",
  "2024-05-12",
  "High",
  mainProject.taskList.length
);

mainProject.addTask(taskItem1);
const taskItem2 = createTask(
  "Task 2 with Medium priority",
  "Description",
  "2024-05-12",
  "Medium",
  mainProject.taskList.length
);
mainProject.addTask(taskItem2);
const taskItem3 = createTask(
  "Task 3 with Low priority",
  "Description",
  "2024-05-12",
  "Low",
  mainProject.taskList.length
);
mainProject.addTask(taskItem3);

function renderAllTaskContent() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const contentTitle = document.createElement("div");
  contentTitle.classList.add("contentTitle");
  const h1 = document.createElement("h1");
  h1.innerText = "All tasks";
  contentTitle.appendChild(h1);
  content.appendChild(contentTitle);

  const contentTasks = document.createElement("div");
  contentTasks.classList.add("contentTasks");

  const taskItems = generateTaskItemArray(mainProject);
  taskItems.forEach((taskItem) => {
    contentTasks.appendChild(taskItem);
  });

  // generateTaskItem(mainProject);
  // contentTasks.appendChild(taskItem);

  content.appendChild(contentTasks);

  document.body.appendChild(content);
}

function generateTaskItemArray(project) {
  const taskList = project.taskList;
  let taskItemArray = [];
  taskList.forEach((task) => {
    if (task === null) {
      return;
    }

    const taskKey = task.key;
    const taskTitle = task.title;
    const taskDescription = task.description;
    const priorityClass = `priority${task.priority}`;
    const taskItem = document.createElement("div");
    taskItem.setAttribute("data-taskKey", taskKey);
    taskItem.classList.add("taskItem");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checkBtn", priorityClass);
    taskItem.appendChild(checkBtn);

    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const h3 = document.createElement("h3");
    h3.innerText = taskTitle;
    const p = document.createElement("p");
    p.innerText = taskDescription;
    taskContent.appendChild(h3);
    taskContent.appendChild(p);
    taskItem.appendChild(taskContent);

    const taskOptions = document.createElement("div");
    taskOptions.classList.add("taskOptions");
    const editBtn = document.createElement("button");
    editBtn.classList.add("editTask");
    editBtn.innerText = "edit";
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeTask");
    removeBtn.innerText = "delete";
    taskOptions.appendChild(editBtn);
    taskOptions.appendChild(removeBtn);
    taskItem.appendChild(taskOptions);

    taskItemArray.push(taskItem);
  });

  return taskItemArray;
}

export { renderAllTaskContent };
