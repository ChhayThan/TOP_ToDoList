function renderAllTaskContent() {
  const content = document.querySelector("div#content");

  const contentTitle = document.createElement("div");
  contentTitle.classList.add("contentTitle");
  const h1 = document.createElement("h1");
  h1.innerText = "All tasks";
  contentTitle.appendChild(h1);
  content.appendChild(contentTitle);

  const contentTasks = document.createElement("div");
  contentTasks.classList.add("contentTasks");
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
    const taskDueDate = task.dueDate;
    const priorityClass = `priority${task.priority}`;
    const taskProjectTitle = task.projectTitle;
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
    p.setAttribute("id", "task_description");
    p.innerText = taskDescription;
    const dueDate = document.createElement("p");
    dueDate.classList.add("taskDueDate");
    dueDate.innerText = taskDueDate;
    // const taskProject = document.createElement("p");
    // taskProject.classList.add("taskProjectTitle");
    // if (taskProjectTitle !== "main") {
    //   taskProject.innerText = `#${taskProjectTitle}`;
    // }
    taskContent.appendChild(h3);
    taskContent.appendChild(p);
    taskContent.appendChild(dueDate);
    // taskContent.appendChild(taskProject);
    taskItem.appendChild(taskContent);

    const taskOptions = document.createElement("div");
    taskOptions.classList.add("taskOptions");
    const editBtn = document.createElement("button");
    editBtn.classList.add("editTask");
    editBtn.setAttribute("data-modal-target", "#taskEditModal");
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

export { renderAllTaskContent, generateTaskItemArray };
