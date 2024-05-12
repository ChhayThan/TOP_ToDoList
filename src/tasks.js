function tasks(title, description, dueDate, priority, projectTitle, key) {
  return { title, description, dueDate, priority, projectTitle, key };
}

function createTask(title, description, dueDate, priority, projectTitle, key) {
  const task = tasks(title, description, dueDate, priority, projectTitle, key);
  return task;
}

export default createTask;
