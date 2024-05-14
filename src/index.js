import "./style.css";
import renderSideBar from "./sideBar";
import { renderAllTaskContent, generateTaskItemArray } from "./allTaskContent";
import { renderModals, openModal, closeModal } from "./modal";

import createTask from "./tasks";
import createProject from "./projects";

const mainProject = createProject("main");
const taskItem1 = createTask(
  "Task 1 with High priority",
  "Description",
  "2024-05-12",
  "High",
  mainProject.title,
  0
);

mainProject.addTask(taskItem1);
const taskItem2 = createTask(
  "Task 2 with Medium priority",
  "Description",
  "2024-05-12",
  "Medium",
  mainProject.title,
  1
);
mainProject.addTask(taskItem2);
const taskItem3 = createTask(
  "Task 3 with Low priority",
  "Description",
  "2024-05-12",
  "Low",
  mainProject.title,
  2
);
mainProject.addTask(taskItem3);

function initializePage() {
  renderSideBar();
  renderAllTaskContent();
  generateTasks(mainProject);
  renderModals();

  const allTaskBtn = document.querySelector("div.tasksOptions button.allTasks");

  allTaskBtn.addEventListener("click", () => {
    const contentTitle = document.querySelector("div.contentTitle h1");
    contentTitle.innerText = `All tasks`;
    generateTasks(mainProject);
  });

  const taskTitle = document.querySelector("input#taskTitle");
  const addTaskBtn = document.querySelector("button.add_task");

  addTaskBtn.addEventListener("mouseover", () => {
    if (taskTitle.value !== "") {
      addTaskBtn.classList.add("active");
    } else if (taskTitle.value === "") {
      addTaskBtn.classList.remove("active");
    }
  });

  addTaskBtn.addEventListener("click", () => {
    if (addTaskBtn.classList.contains("active")) {
      const taskTitle = document.querySelector("input#taskTitle").value;
      const taskDescription = document.querySelector(
        "textarea#description"
      ).value;
      const dueDate = document.querySelector("input#dueDate").value;
      const priorityClass = document.querySelector("select#priority").value;
      const project = document.querySelector("select#project").value;

      const taskToAdd = createTask(
        taskTitle,
        taskDescription,
        dueDate,
        priorityClass,
        mainProject.title,
        mainProject.taskList.length
      );
      mainProject.addTask(taskToAdd);
      const taskModal = document.querySelector("div#taskModal");
      closeModal(taskModal);
      generateTasks(mainProject);
    }
  });

  const projectTitle = document.querySelector("input#projectTitle");
  const addProjectBtn = document.querySelector("button.add_project");

  addProjectBtn.addEventListener("mouseover", () => {
    if (projectTitle.value !== "") {
      addProjectBtn.classList.add("active");
    } else if (projectTitle.value === "") {
      addProjectBtn.classList.remove("active");
    }
  });

  addProjectBtn.addEventListener("click", () => {
    if (addProjectBtn.classList.contains("active")) {
      const projectTitle = document.querySelector("input#projectTitle").value;

      const newProject = createNewChildProject(projectTitle);
      console.log(newProject);
      console.log(mainProject.childProjectList);
      const projectModal = document.querySelector("div#projectModal");
      closeModal(projectModal);
    }
  });
}

function clearContent() {
  const content = document.querySelector("div#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

function updateTaskInfo(task) {
  const taskItemTitle = document.querySelector(
    `div[data-taskkey="${task.key}"] div.taskContent h3`
  );
  taskItemTitle.innerText = task.title;
  const taskItemDescription = document.querySelector(
    `div[data-taskkey="${task.key}"] div.taskContent p#task_description`
  );
  taskItemDescription.innerText = task.description;
  const taskItemDueDate = document.querySelector(
    `div[data-taskkey="${task.key}"] div.taskContent p.taskDueDate`
  );
  taskItemDueDate.innerText = task.dueDate;
  const taskItemProjectTitle = document.querySelector(
    `div[data-taskkey="${task.key}"] div.taskContent p.taskProjectTitle`
  );
  if (task.projectTitle !== "main") {
    taskItemProjectTitle.innerText = task.projectTitle;
  }
  const taskItemCheckBtn = document.querySelector(
    `div[data-taskkey="${task.key}"] button.checkBtn`
  );
  taskItemCheckBtn.className = `checkBtn priority${task.priority}`;
}

function generateTasks(project) {
  const contentTasks = document.querySelector("div.contentTasks");
  contentTasks.innerHTML = "";
  const taskItems = generateTaskItemArray(project);
  taskItems.forEach((taskItem) => {
    contentTasks.appendChild(taskItem);
  });

  const checkTaskBtn = document.querySelectorAll(".checkBtn");
  const taskItemsSelector = document.querySelectorAll("div.taskItem");

  checkTaskBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      const h3 = document.querySelector(`div[data-taskKey="${index}"] h3`);
      console.log(index);
      if (button.classList.contains("cancelled")) {
        button.classList.remove("cancelled");
        h3.classList.remove("cancelled");
      } else {
        button.classList.add("cancelled");
        h3.classList.add("cancelled");
      }
    });
  });

  taskItemsSelector.forEach((item, index) => {
    const itemBtns = document.querySelectorAll(
      `div[data-taskKey="${index}"] .taskOptions > button`
    );
    item.addEventListener("mouseenter", () => {
      itemBtns.forEach((button) => {
        button.classList.add("showBtn");
      });
    });

    item.addEventListener("mouseleave", () => {
      itemBtns.forEach((button) => {
        button.classList.remove("showBtn");
      });
    });
  });

  const editTaskBtns = document.querySelectorAll(
    "div.taskOptions button.editTask"
  );
  editTaskBtns.forEach((editTaskBtn, index) => {
    editTaskBtn.addEventListener("click", () => {
      const modal = document.querySelector("#taskEditModal");
      openModal(modal);
      const taskItem = mainProject.getTask(index);
      const taskItemTitle = document.querySelector(
        "div#taskEditModal div.modal-header div.modal-title input#taskTitle"
      );

      const taskItemDescription = document.querySelector(
        "div#taskEditModal div.modal-content div.inputItem textarea#description"
      );
      const taskItemDueDate = document.querySelector(
        "div#taskEditModal div.modal-content div.inputItem input#dueDate"
      );
      const taskItemPriority = document.querySelector(
        "div#taskEditModal div.modal-content div.inputItem select#priority"
      );

      taskItemTitle.value = taskItem.title;
      taskItemDescription.value = taskItem.description;
      taskItemDueDate.value = taskItem.dueDate;
      taskItemPriority.value = taskItem.priority;

      const updateTaskBtn = document.querySelector("button.update_task.active");
      updateTaskBtn.addEventListener("click", () => {
        taskItem.updateTask(
          taskItemTitle.value,
          taskItemDescription.value,
          taskItemDueDate.value,
          taskItemPriority.value
        );
        updateTaskInfo(taskItem);
        const modal = document.querySelector("#taskEditModal");
        closeModal(modal);
      });
    });
  });

  const deleteTaskBtns = document.querySelectorAll(
    "div.taskOptions button.removeTask"
  );
  deleteTaskBtns.forEach((deleteTaskBtn, index) => {
    deleteTaskBtn.addEventListener("click", () => {
      mainProject.removeTask(index);
      const contentTasks = document.querySelector(
        "div#content div.contentTasks"
      );
      const taskItemToBeRemoved = document.querySelector(
        `div.taskItem[data-taskkey="${index}"]`
      );
      contentTasks.removeChild(taskItemToBeRemoved);
    });
  });
}

initializePage();

function createNewChildProject(projectTitle) {
  const newProject = mainProject.createChildProject(projectTitle);
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("btn");
  projectBtn.setAttribute("id", `# ${projectTitle}`);
  projectBtn.innerText = `#${projectTitle}`;

  projectBtn.addEventListener("click", () => {
    const contentTitle = document.querySelector("div.contentTitle h1");
    contentTitle.innerText = `# ${projectTitle}`;
    generateTasks(newProject);
  });

  const projectOptions = document.querySelector("div.projectOptions");
  projectOptions.appendChild(projectBtn);

  return newProject;
}
