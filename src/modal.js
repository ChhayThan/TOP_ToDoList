function renderModals() {
  const body = document.body;
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
}
