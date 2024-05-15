function renderModals() {
  const taskModal = createTaskModal();
  const taskEditModal = createTaskEditModal();
  const projectModal = createProjectModal();
  const overlay = createOverlay();

  document.body.append(taskModal, taskEditModal, projectModal, overlay);

  setupModalEventListeners();
}

function createTaskModal() {
  const taskModal = createModal(
    "taskModal",
    `
    <div class="modal-header">
      <div class="modal-title">
        <input type="text" id="taskTitle" placeholder="Task Name" required />
      </div>
      <button class="close-modal" data-close-modal="#taskModal">&times;</button>
    </div>
    <div class="modal-content">
      ${createInputItem("description", "textarea", "Description")}
      ${createDateInputItem("dueDate", "Due Date:")}
      ${createSelectInputItem("priority", "Priority:", [
        "High",
        "Medium",
        "Low",
      ])}
      ${createSelectInputItem("project", "Project:", ["main"], "None")}
      <div class="modalBtn">
        <button class="close-modal" data-close-modal="#taskModal">Cancel</button>
        <button class="add_task">Add task</button>
      </div>
    </div>
  `
  );

  return taskModal;
}

function createTaskEditModal() {
  const taskEditModal = createModal(
    "taskEditModal",
    `
    <div class="modal-header">
      <div class="modal-title">
        <input type="text" id="taskTitle" placeholder="Task Name" required />
      </div>
      <button class="close-modal" data-close-modal="#taskEditModal">&times;</button>
    </div>
    <div class="modal-content">
      ${createInputItem("description", "textarea", "Description")}
      ${createDateInputItem("dueDate", "Due Date:")}
      ${createSelectInputItem("priority", "Priority:", [
        "High",
        "Medium",
        "Low",
      ])}
      ${createSelectInputItem("project", "Project:", ["main"], "None")}
      <div class="modalBtn">
        <button class="close-modal" data-close-modal="#taskEditModal">Cancel</button>
        <button class="update_task active">Update task</button>
      </div>
    </div>
  `
  );

  return taskEditModal;
}

function createProjectModal() {
  const projectModal = createModal(
    "projectModal",
    `
    <div class="modal-header">
      <div class="modal-title">
        <h1>New project</h1>
      </div>
      <button class="close-modal" data-close-modal="#projectModal">&times;</button>
    </div>
    <div class="modal-content">
      ${createInputItem("projectTitle", "text", "Project Name", "#")}
      <div class="modalBtn">
        <button class="close-modal" data-close-modal="#projectModal">Cancel</button>
        <button class="add_project">Add</button>
      </div>
    </div>
  `
  );

  return projectModal;
}

function createModal(id, innerHTML) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", id);
  modal.innerHTML = innerHTML;
  return modal;
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  overlay.addEventListener("click", closeAllModals);
  return overlay;
}

function closeAllModals() {
  document.querySelectorAll(".modal.active").forEach(closeModal);
}

function setupModalEventListeners() {
  document.querySelectorAll("[data-modal-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.closeModal);
      closeModal(modal);
    });
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("active");
  document.querySelector("#overlay").classList.add("active");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active");
  document.querySelector("#overlay").classList.remove("active");
}

function createInputItem(id, type, placeholder, prefix = "") {
  return `
    <div class="inputItem">
      ${prefix ? `<label for="${id}">${prefix}</label>` : ""}
      ${
        type === "textarea"
          ? `<textarea id="${id}" placeholder="${placeholder}"></textarea>`
          : `<input type="${type}" id="${id}" placeholder="${placeholder}" required />`
      }
    </div>
  `;
}

function createDateInputItem(id, label) {
  return `
    <div class="inputItem">
      <label for="${id}">${label}</label>
      <input type="date" id="${id}" required />
    </div>
  `;
}

function createSelectInputItem(id, label, options, defaultOptionText = "") {
  return `
    <div class="inputItem">
      <label for="${id}">${label}</label>
      <select id="${id}" class="custom-select">
        ${
          defaultOptionText
            ? `<option value="main">${defaultOptionText}</option>`
            : ""
        }
        ${options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
      </select>
    </div>
  `;
}

export { renderModals, openModal, closeModal };
