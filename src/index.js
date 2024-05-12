import "./style.css";
import createTask from "./tasks";
import createProject from "./projects";

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const overlay = document.getElementById("overlay");

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

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  console.log(modals);
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

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

const checkBtn = document.querySelectorAll(".checkBtn");

checkBtn.forEach((button, index) => {
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

const taskItems = document.querySelectorAll("div.taskItem");

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
