export default function renderSideBar() {
  const sidebar = document.querySelector("div#sidebar");

  const title = document.createElement("div");
  title.classList.add("title");
  const h1 = document.createElement("h1");
  h1.innerText = "Eric's ";
  const specialDecoration = document.createElement("span");
  specialDecoration.setAttribute("id", "special_decoration");
  specialDecoration.innerText = "todolist";
  h1.appendChild(specialDecoration);
  title.appendChild(h1);
  sidebar.appendChild(title);

  const sidebarContent = document.createElement("div");
  sidebarContent.classList.add("sidebar_content");

  const tasksOptions = document.createElement("div");
  tasksOptions.classList.add("tasksOptions");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("data-modal-target", "#taskModal");
  addTaskBtn.classList.add("btn");
  addTaskBtn.innerText = "Add Task";

  const allTasksBtn = document.createElement("button");
  allTasksBtn.classList.add("btn", "allTasks");
  allTasksBtn.innerText = "All tasks";
  const todayTasksBtn = document.createElement("button");
  todayTasksBtn.classList.add("btn", "todayTasks");
  todayTasksBtn.innerText = "Today";
  const overdueBtn = document.createElement("button");
  overdueBtn.classList.add("btn", "overDue");
  overdueBtn.innerText = "Overdue";
  tasksOptions.appendChild(addTaskBtn);
  tasksOptions.appendChild(allTasksBtn);
  tasksOptions.appendChild(todayTasksBtn);
  tasksOptions.appendChild(overdueBtn);
  sidebarContent.appendChild(tasksOptions);

  const projectOptions = document.createElement("div");
  projectOptions.classList.add("projectOptions");
  const projectsTitle = document.createElement("h3");
  projectsTitle.innerText = "My Projects";
  const addProjectBtn = document.createElement("button");
  addProjectBtn.setAttribute("data-modal-target", "#projectModal");
  addProjectBtn.classList.add("btn");
  addProjectBtn.innerText = "Add Project";
  projectOptions.appendChild(projectsTitle);
  projectOptions.appendChild(addProjectBtn);
  sidebarContent.appendChild(projectOptions);

  sidebar.appendChild(sidebarContent);

  document.body.appendChild(sidebar);
}
