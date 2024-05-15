import "./style.css";
import renderSideBar from "./sideBar";
import { renderAllTaskContent, generateTaskItemArray } from "./allTaskContent";
import { renderModals, openModal, closeModal } from "./modal";

import createTask from "./tasks";
import createProject from "./projects";

const mainProject = createProject("main");
const tasks = [
  {
    title: "Task 1 with High priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "High",
    key: "999",
  },
  {
    title: "Task 2 with Medium priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "Medium",
    key: "9999",
  },
  {
    title: "Task 3 with Low priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "Low",
    key: "99999",
  },
];

tasks.forEach((task) => {
  const taskItem = createTask(
    task.title,
    task.description,
    task.dueDate,
    task.priority,
    mainProject.title,
    task.key
  );
  mainProject.addTask(taskItem);
});

function initializePage() {
  renderSideBar();
  renderAllTaskContent();
  generateTasks(mainProject);
  renderModals();

  setupTaskButtonEvents();
  setupProjectButtonEvents();
}

function setupTaskButtonEvents() {
  document
    .querySelector("div.tasksOptions button[data-modal-target]")
    .addEventListener("click", populateProjectSelect);
  document
    .querySelector("div.tasksOptions button.allTasks")
    .addEventListener("click", () => {
      updateContentTitle("All tasks");
      generateTasks(mainProject);
    });

  const addTaskBtn = document.querySelector("button.add_task");
  addTaskBtn.addEventListener("mouseover", toggleButtonState);
  addTaskBtn.addEventListener("click", addNewTask);
}

function setupProjectButtonEvents() {
  const addProjectBtn = document.querySelector("button.add_project");
  addProjectBtn.addEventListener("mouseover", toggleButtonState);
  addProjectBtn.addEventListener("click", addNewProject);
}

function populateProjectSelect() {
  const projectSelectAll = document.querySelectorAll("select#project");
  if (!projectSelectAll) return;

  console.log(projectSelectAll);

  projectSelectAll.forEach((projectSelect) => {
    projectSelect.innerHTML = "";
    const mainOption = document.createElement("option");
    mainOption.value = "main";
    mainOption.innerText = "None";
    projectSelect.appendChild(mainOption);
    mainProject.childProjectList.forEach((childProject) => {
      const option = document.createElement("option");
      option.value = childProject.title;
      option.innerText = childProject.title;
      projectSelect.appendChild(option);
    });
  });
}

function addNewTask() {
  const addTaskBtn = document.querySelector("button.add_task");
  if (!addTaskBtn.classList.contains("active")) return;

  const taskTitleInput = document.querySelector("input#taskTitle");
  const taskDescriptionInput = document.querySelector("textarea#description");
  const dueDateInput = document.querySelector("input#dueDate");
  const priorityClassInput = document.querySelector("select#priority");
  const projectInput = document.querySelector("select#project");

  const projectTitle =
    projectInput.value === "none" ? "main" : projectInput.value;
  const taskToAdd = createTask(
    taskTitleInput.value,
    taskDescriptionInput.value,
    dueDateInput.value,
    priorityClassInput.value,
    projectTitle,
    mainProject.taskList.length
  );

  mainProject.addTask(taskToAdd);
  if (projectTitle !== "main") {
    const childProject = mainProject.getChildProject(projectTitle);
    childProject.addTask(taskToAdd);
  }

  closeModal(document.querySelector("div#taskModal"));
  generateTasks(mainProject);
  updateContentTitle("All tasks");

  clearTaskInputs();
}

function addNewProject() {
  const addProjectBtn = document.querySelector("button.add_project");
  if (!addProjectBtn.classList.contains("active")) return;

  const projectTitleInput = document.querySelector("input#projectTitle");
  createNewChildProject(projectTitleInput.value);

  projectTitleInput.value = "";
  closeModal(document.querySelector("div#projectModal"));
}

function toggleButtonState(event) {
  const button = event.target;
  const inputId = button.classList.contains("add_task")
    ? "taskTitle"
    : "projectTitle";
  const inputValue = document.querySelector(`input#${inputId}`).value;

  button.classList.toggle("active", inputValue !== "");
}

function clearTaskInputs() {
  document.querySelector("input#taskTitle").value = "";
  document.querySelector("textarea#description").value = "";
  document.querySelector("input#dueDate").value = "";
  document.querySelector("select#priority").value = "High";
}

function updateContentTitle(title) {
  document.querySelector("div.contentTitle h1").innerText = title;
}

function generateTasks(project) {
  const contentTasks = document.querySelector("div.contentTasks");
  contentTasks.innerHTML = "";

  generateTaskItemArray(project).forEach((taskItem, index) => {
    contentTasks.appendChild(taskItem);
    const currentTask = project.getTask(project.taskList[index].key);
    const currentTaskContent = document.querySelector(
      `div[data-taskkey="${currentTask.key}"] div.taskContent`
    );

    if (currentTask.projectTitle !== "main") {
      const taskProject = document.createElement("p");
      taskProject.classList.add("taskProjectTitle");
      taskProject.innerText = `#${currentTask.projectTitle}`;
      taskProject.addEventListener("click", () => {
        const currentTaskProject = project.getChildProject(
          currentTask.projectTitle
        );
        updateContentTitle(`# ${currentTask.projectTitle}`);
        generateTasks(currentTaskProject);
      });
      currentTaskContent.appendChild(taskProject);
    }
  });

  setupTaskInteractionEvents();
}

function setupTaskInteractionEvents() {
  document.querySelectorAll(".checkBtn").forEach((button, index) => {
    button.addEventListener("click", () => toggleTaskCompletion(button, index));
  });

  document.querySelectorAll("div.taskItem").forEach((item, index) => {
    const keyIndex = item.dataset.taskkey;
    const itemBtns = document.querySelectorAll(
      `div[data-taskKey="${keyIndex}"] .taskOptions > button`
    );

    item.addEventListener("mouseenter", () =>
      toggleButtonVisibility(itemBtns, true)
    );
    item.addEventListener("mouseleave", () =>
      toggleButtonVisibility(itemBtns, false)
    );
  });

  document
    .querySelectorAll("div.taskOptions button.editTask")
    .forEach((editTaskBtn) => {
      editTaskBtn.addEventListener("click", () =>
        openEditTaskModal(editTaskBtn)
      );
    });

  document
    .querySelectorAll("div.taskOptions button.removeTask")
    .forEach((deleteTaskBtn, index) => {
      deleteTaskBtn.addEventListener("click", () => removeTask(deleteTaskBtn));
    });
}

function toggleTaskCompletion(button, index) {
  const keyIndex = button.closest("div.taskItem").dataset.taskkey;
  const taskTitle = document.querySelector(
    `div[data-taskKey="${keyIndex}"] h3`
  );
  button.classList.toggle("cancelled");
  taskTitle.classList.toggle("cancelled");
}

function toggleButtonVisibility(buttons, show) {
  buttons.forEach((button) => button.classList.toggle("showBtn", show));
}

function openEditTaskModal(editTaskBtn) {
  const modal = document.querySelector("#taskEditModal");
  openModal(modal);

  const taskItemDiv = editTaskBtn.closest("[data-taskkey]");
  if (!taskItemDiv) return;

  const taskKey = taskItemDiv.getAttribute("data-taskkey");
  const taskItem = mainProject.getTask(taskKey);
  if (!taskItem) return;

  populateProjectSelect(); // Ensure the project select options are updated
  populateTaskModal(taskItem);

  const updateTaskBtn = document.querySelector("button.update_task.active");
  updateTaskBtn.removeEventListener("click", handleUpdateTask);
  updateTaskBtn.addEventListener("click", () => handleUpdateTask(taskItem), {
    once: true,
  });
}

function populateTaskModal(taskItem) {
  document.querySelector(
    "div#taskEditModal div.modal-header div.modal-title input#taskTitle"
  ).value = taskItem.title;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem textarea#description"
  ).value = taskItem.description;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem input#dueDate"
  ).value = taskItem.dueDate;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#priority"
  ).value = taskItem.priority;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#project"
  ).value = taskItem.projectTitle;
}

function handleUpdateTask(taskItem) {
  const taskTitleInput = document.querySelector(
    "div#taskEditModal div.modal-header div.modal-title input#taskTitle"
  ).value;
  const taskDescriptionInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem textarea#description"
  ).value;
  const dueDateInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem input#dueDate"
  ).value;
  const priorityClassInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#priority"
  ).value;
  const projectInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#project"
  ).value;
  const oldProject = taskItem.projectTitle;

  taskItem.updateTask(
    taskTitleInput,
    taskDescriptionInput,
    dueDateInput,
    priorityClassInput,
    projectInput
  );

  if (oldProject !== "main" && projectInput !== "main") {
    mainProject.getChildProject(oldProject).removeTask(taskItem.key);
    mainProject.getChildProject(projectInput).addTask(taskItem);
  } else if (oldProject === "main" && projectInput !== oldProject) {
    mainProject.getChildProject(projectInput).addTask(taskItem);
  } else if (oldProject !== "main" && projectInput === "main") {
    mainProject.getChildProject(oldProject).removeTask(taskItem.key);
  }

  generateTasks(mainProject);
  closeModal(document.querySelector("#taskEditModal"));
}

function removeTask(deleteTaskBtn) {
  const taskItemDiv = deleteTaskBtn.closest("[data-taskkey]");
  if (!taskItemDiv) return;

  const taskKey = taskItemDiv.getAttribute("data-taskkey");
  mainProject.removeTask(taskKey);
  taskItemDiv.remove();
}

function createNewChildProject(projectTitle) {
  const newProject = mainProject.createChildProject(projectTitle);
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("btn");
  projectBtn.id = `#${projectTitle}`;
  projectBtn.innerText = `# ${projectTitle}`;

  projectBtn.addEventListener("click", () => {
    updateContentTitle(`# ${projectTitle}`);
    generateTasks(newProject);
  });

  document.querySelector("div.projectOptions").appendChild(projectBtn);
  return newProject;
}

initializePage();
