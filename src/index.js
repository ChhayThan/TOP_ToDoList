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

  const sideBarAddTaskBtn = document.querySelector(
    "div.tasksOptions button[data-modal-target]"
  );

  sideBarAddTaskBtn.addEventListener("click", () => {
    const projectSelect = document.querySelector("select#project");
    projectSelect.innerHTML = "";
    const mainOption = document.createElement("option");
    mainOption.setAttribute("value", "main");
    mainOption.innerText = "None";
    projectSelect.appendChild(mainOption);

    const childProjectList = mainProject.childProjectList;
    if (childProjectList.length < 1) {
      return;
    }
    childProjectList.forEach((childProject) => {
      const option = document.createElement("option");
      option.setAttribute("value", `${childProject.title}`);
      option.innerText = `${childProject.title}`;

      projectSelect.appendChild(option);
    });
  });

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
      let taskTitleInput = document.querySelector("input#taskTitle");
      let taskDescriptionInput = document.querySelector("textarea#description");
      let dueDateInput = document.querySelector("input#dueDate");
      let priorityClassInput = document.querySelector("select#priority");
      let projectInput = document.querySelector("select#project");
      let projectTitle = "";
      if (projectInput.value === "none") {
        projectTitle = "main";
      } else {
        projectTitle = projectInput.value;
      }

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
      const taskModal = document.querySelector("div#taskModal");
      closeModal(taskModal);
      generateTasks(mainProject);

      const contentTitle = document.querySelector("div.contentTitle h1");
      contentTitle.innerText = `All Task`;

      taskTitleInput.value = "";
      taskDescriptionInput.value = "";
      dueDateInput.value = "";
      priorityClassInput.value = "High";
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
      let projectTitleInput = document.querySelector("input#projectTitle");

      const newProject = createNewChildProject(projectTitleInput.value);
      projectTitleInput.value = "";
      const projectModal = document.querySelector("div#projectModal");
      closeModal(projectModal);
    }
  });
}

function generateTasks(project) {
  const contentTasks = document.querySelector("div.contentTasks");
  contentTasks.innerHTML = "";
  const taskItems = generateTaskItemArray(project);
  const taskList = project.taskList;
  let keyIndex = [];
  taskList.forEach((taskItem) => {
    keyIndex.push(taskItem.key);
  });
  taskItems.forEach((taskItem, index) => {
    contentTasks.appendChild(taskItem);
    const currentTask = mainProject.getTask(keyIndex[index]);

    const currentTaskContent = document.querySelector(
      `div[data-taskkey="${currentTask.key}"] div.taskContent`
    );
    const taskProject = document.createElement("p");
    taskProject.classList.add("taskProjectTitle");
    taskProject.addEventListener("click", () => {
      const currentTaskProject = mainProject.getChildProject(
        currentTask.projectTitle
      );

      const contentTitle = document.querySelector("div.contentTitle h1");
      contentTitle.innerText = `# ${currentTask.projectTitle}`;
      generateTasks(currentTaskProject);
    });
    if (currentTask.projectTitle !== "main") {
      taskProject.innerText = `#${currentTask.projectTitle}`;
      currentTaskContent.appendChild(taskProject);
    }
  });
  const checkTaskBtn = document.querySelectorAll(".checkBtn");
  const taskItemsSelector = document.querySelectorAll("div.taskItem");

  checkTaskBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      const h3 = document.querySelector(
        `div[data-taskKey="${keyIndex[index]}"] h3`
      );
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
      `div[data-taskKey="${keyIndex[index]}"] .taskOptions > button`
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
  editTaskBtns.forEach((editTaskBtn) => {
    editTaskBtn.addEventListener("click", () => {
      const projectSelect = document.querySelector(
        "div#taskEditModal div.modal-content div.inputItem select#project"
      );
      if (!projectSelect) return;

      // Clear the project select options
      projectSelect.innerHTML = "";

      // Add the default option
      const mainOption = document.createElement("option");
      mainOption.setAttribute("value", "main");
      mainOption.innerText = "None";
      projectSelect.appendChild(mainOption);

      // Populate project options
      const childProjectList = mainProject.childProjectList;
      if (childProjectList.length > 0) {
        childProjectList.forEach((childProject) => {
          const option = document.createElement("option");
          option.setAttribute("value", childProject.title);
          option.innerText = childProject.title;
          projectSelect.appendChild(option);
        });
      }

      // Open the modal
      const modal = document.querySelector("#taskEditModal");
      openModal(modal);

      // Get task item data
      const taskItemDiv = editTaskBtn.closest("[data-taskkey]");
      if (!taskItemDiv) return; // Check if the element exists

      const taskKey = taskItemDiv.getAttribute("data-taskkey");
      const taskItem = mainProject.getTask(taskKey);
      if (!taskItem) return; // Check if the task item exists

      // Populate the modal with task item data
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
      const taskItemProject = document.querySelector(
        "div#taskEditModal div.modal-content div.inputItem select#project"
      );

      taskItemTitle.value = taskItem.title;
      taskItemDescription.value = taskItem.description;
      taskItemDueDate.value = taskItem.dueDate;
      taskItemPriority.value = taskItem.priority;
      taskItemProject.value = taskItem.projectTitle;

      const oldProject = taskItem.projectTitle;

      // Update task button event listener
      const updateTaskBtn = document.querySelector("button.update_task.active");
      updateTaskBtn.removeEventListener("click", handleUpdateTask); // Remove any previous event listener
      updateTaskBtn.addEventListener("click", handleUpdateTask, { once: true });

      function handleUpdateTask() {
        taskItem.updateTask(
          taskItemTitle.value,
          taskItemDescription.value,
          taskItemDueDate.value,
          taskItemPriority.value,
          taskItemProject.value
        );

        if (oldProject !== "main" && taskItemProject.value !== "main") {
          const taskOldProject = mainProject.getChildProject(oldProject);
          taskOldProject.removeTask(taskItem.key);
          const taskNewProject = mainProject.getChildProject(
            taskItemProject.value
          );
          taskNewProject.addTask(taskItem);
        }
        if (oldProject === "main" && taskItemProject.value !== oldProject) {
          const taskNewProject = mainProject.getChildProject(
            taskItemProject.value
          );
          taskNewProject.addTask(taskItem);
        }
        if (oldProject !== "main" && taskItemProject.value === "main") {
          const taskOldProject = mainProject.getChildProject(oldProject);
          taskOldProject.removeTask(taskItem.key);
        }

        generateTasks(project);
        closeModal(modal);
      }
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

function createNewChildProject(projectTitle) {
  const newProject = mainProject.createChildProject(projectTitle);
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("btn");
  projectBtn.setAttribute("id", `#${projectTitle}`);
  projectBtn.innerText = `# ${projectTitle}`;

  projectBtn.addEventListener("click", () => {
    const contentTitle = document.querySelector("div.contentTitle h1");
    contentTitle.innerText = `# ${projectTitle}`;
    generateTasks(newProject);
  });

  const projectOptions = document.querySelector("div.projectOptions");
  projectOptions.appendChild(projectBtn);

  return newProject;
}

initializePage();
