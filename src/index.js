import "./style.css";
import renderSideBar from "./sideBar";
import { renderAllTaskContent } from "./allTaskContent";
import renderModals from "./modal";

import createTask from "./tasks";
import createProject from "./projects";

const mainProject = createProject("main");
const taskItem1 = createTask(
  "Task 1 with High priority",
  "Description",
  "2024-05-12",
  "High",
  mainProject.title,
  mainProject.taskList.length
);

mainProject.addTask(taskItem1);
const taskItem2 = createTask(
  "Task 2 with Medium priority",
  "Description",
  "2024-05-12",
  "Medium",
  mainProject.title,
  mainProject.taskList.length
);
mainProject.addTask(taskItem2);
const taskItem3 = createTask(
  "Task 3 with Low priority",
  "Description",
  "2024-05-12",
  "Low",
  mainProject.title,
  mainProject.taskList.length
);
mainProject.addTask(taskItem3);

function initializePage() {
  renderSideBar();
  renderAllTaskContent(mainProject);
  renderModals();
  generateButton();
}

function clearContent() {
  const content = document.querySelector("div#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

function generateButton() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-modal]");
  const checkTaskBtn = document.querySelectorAll(".checkBtn");
  const taskItems = document.querySelectorAll("div.taskItem");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.closeModal);
      closeModal(modal);
    });
  });

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

  taskItems.forEach((item, index) => {
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

  const taskTitle = document.querySelector("input#taskTitle");
  const addTaskBtn = document.querySelector("button.add_task");

  addTaskBtn.addEventListener("mouseover", () => {
    if (taskTitle.value !== "") {
      addTaskBtn.classList.add("active");
      const activeAddTaskBtn = document.querySelector("button.add_task.active");
      activeAddTaskBtn.addEventListener("click", () => {
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
        clearContent();
        renderAllTaskContent(mainProject);
        const taskModal = document.querySelector("div#taskModal");
        closeModal(taskModal);
        generateButton();
      });
    } else if (taskTitle.value === "") {
      addTaskBtn.classList.remove("active");
    }
  });
}

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

initializePage();
