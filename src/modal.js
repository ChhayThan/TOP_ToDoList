function renderModals() {
  const taskModal = createTaskModal();
  const taskEditModal = createTaskEditModal();
  const projectModal = createProjectModal();
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");

  document.body.appendChild(taskModal);
  document.body.appendChild(projectModal);
  document.body.appendChild(taskEditModal);
  document.body.appendChild(overlay);

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-modal]");

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
}

function createTaskModal() {
  const taskModal = document.createElement("div");
  taskModal.classList.add("modal");
  taskModal.setAttribute("id", "taskModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  modalHeader.appendChild(modalTitle);

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "taskTitle");
  taskTitleInput.setAttribute("Placeholder", "Task Name");
  taskTitleInput.required = true;

  modalTitle.appendChild(taskTitleInput);
  const closeTaskModalBtn = document.createElement("button");
  closeTaskModalBtn.classList.add("close-modal");
  closeTaskModalBtn.setAttribute("data-close-modal", "#taskModal");
  closeTaskModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeTaskModalBtn);
  taskModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const descriptionInput = document.createElement("div");
  descriptionInput.classList.add("inputItem");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("placeholder", "Description");
  descriptionInput.appendChild(descriptionTextArea);
  modalContent.appendChild(descriptionInput);

  const dueDateInput = document.createElement("div");
  dueDateInput.classList.add("inputItem");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.innerText = "Due Date:";
  dueDateInput.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("id", "dueDate");
  dueDate.required = true;
  dueDateInput.appendChild(dueDate);
  modalContent.appendChild(dueDateInput);

  const priorityInput = document.createElement("div");
  priorityInput.classList.add("inputItem");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Priority:";
  priorityInput.appendChild(priorityLabel);
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("custom-select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "priority");
  const priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "High");
  priorityHigh.innerText = "High";
  const priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "Medium");
  priorityMedium.innerText = "Medium";
  const priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "Low");
  priorityLow.innerText = "Low";
  prioritySelect.appendChild(priorityHigh);
  prioritySelect.appendChild(priorityMedium);
  prioritySelect.appendChild(priorityLow);
  priorityInput.appendChild(prioritySelect);
  modalContent.appendChild(priorityInput);

  const projectInput = document.createElement("div");
  projectInput.classList.add("inputItem");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.innerText = "Project:";
  projectInput.appendChild(projectLabel);
  const projectSelect = document.createElement("select");
  projectSelect.classList.add("custom-select");
  projectSelect.setAttribute("name", "project");
  projectSelect.setAttribute("id", "project");
  const defaultOption = document.createElement("option");
  defaultOption.setAttribute("value", "main");
  defaultOption.innerText = "None";
  projectSelect.appendChild(defaultOption);
  projectInput.appendChild(projectSelect);
  modalContent.appendChild(projectInput);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#taskModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add_task");
  addTaskBtn.innerText = "Add task";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addTaskBtn);
  modalContent.appendChild(modalBtn);

  taskModal.appendChild(modalContent);

  return taskModal;
}

function createTaskEditModal() {
  const taskEditModal = document.createElement("div");
  taskEditModal.classList.add("modal");
  taskEditModal.setAttribute("id", "taskEditModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  modalHeader.appendChild(modalTitle);

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "taskTitle");
  taskTitleInput.setAttribute("Placeholder", "Task Name");
  // taskTitleInput.value = taskTitle;
  modalTitle.appendChild(taskTitleInput);

  const closeTaskEditModalBtn = document.createElement("button");
  closeTaskEditModalBtn.classList.add("close-modal");
  closeTaskEditModalBtn.setAttribute("data-close-modal", "#taskEditModal");
  closeTaskEditModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeTaskEditModalBtn);
  taskEditModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const descriptionInput = document.createElement("div");
  descriptionInput.classList.add("inputItem");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("placeholder", "Description");
  // descriptionTextArea.innerText = `${taskDescription}`;
  descriptionInput.appendChild(descriptionTextArea);
  modalContent.appendChild(descriptionInput);

  const dueDateInput = document.createElement("div");
  dueDateInput.classList.add("inputItem");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.innerText = "Due Date:";
  dueDateInput.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("id", "dueDate");
  // dueDate.value = taskDueDate;
  dueDateInput.appendChild(dueDate);
  modalContent.appendChild(dueDateInput);

  const priorityInput = document.createElement("div");
  priorityInput.classList.add("inputItem");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Priority:";
  priorityInput.appendChild(priorityLabel);
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("custom-select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "priority");
  const priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "High");
  priorityHigh.innerText = "High";
  const priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "Medium");
  priorityMedium.innerText = "Medium";
  const priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "Low");
  priorityLow.innerText = "Low";
  prioritySelect.appendChild(priorityHigh);
  prioritySelect.appendChild(priorityMedium);
  prioritySelect.appendChild(priorityLow);
  priorityInput.appendChild(prioritySelect);
  modalContent.appendChild(priorityInput);

  const projectInput = document.createElement("div");
  projectInput.classList.add("inputItem");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.innerText = "Project:";
  projectInput.appendChild(projectLabel);
  const projectSelect = document.createElement("select");
  projectSelect.classList.add("custom-select");
  projectSelect.setAttribute("name", "project");
  projectSelect.setAttribute("id", "project");
  const defaultOption = document.createElement("option");
  defaultOption.setAttribute("value", "main");
  defaultOption.innerText = "None";
  projectSelect.appendChild(defaultOption);
  projectInput.appendChild(projectSelect);
  modalContent.appendChild(projectInput);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#taskEditModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("update_task");
  addTaskBtn.classList.add("active");
  addTaskBtn.innerText = "Update task";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addTaskBtn);
  modalContent.appendChild(modalBtn);

  taskEditModal.appendChild(modalContent);

  return taskEditModal;
}

function createProjectModal() {
  const projectModal = document.createElement("div");
  projectModal.classList.add("modal");
  projectModal.setAttribute("id", "projectModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  const title = document.createElement("h1");
  title.innerText = "New project";
  modalTitle.appendChild(title);
  modalHeader.appendChild(modalTitle);

  const closeProjectModalBtn = document.createElement("button");
  closeProjectModalBtn.classList.add("close-modal");
  closeProjectModalBtn.setAttribute("data-close-modal", "#projectModal");
  closeProjectModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeProjectModalBtn);
  projectModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const inputItem = document.createElement("div");
  inputItem.classList.add("inputItem");
  const projectName = document.createElement("div");
  projectName.classList.add("projectName");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "projectTitle");
  projectLabel.innerText = "#";
  projectName.appendChild(projectLabel);
  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("type", "text");
  projectTitleInput.setAttribute("id", "projectTitle");
  projectTitleInput.setAttribute("placeholder", "Project Name");
  projectTitleInput.required = true;
  projectName.appendChild(projectTitleInput);
  inputItem.appendChild(projectName);
  modalContent.appendChild(inputItem);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#projectModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add_task");
  addProjectBtn.innerText = "Add";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addProjectBtn);
  modalContent.appendChild(modalBtn);

  projectModal.appendChild(modalContent);

  return projectModal;
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

export { renderModals, openModal, closeModal };
