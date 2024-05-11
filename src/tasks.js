function tasks(title, description, dueDate, priority, key) {
  return { title, description, dueDate, priority, key };
}

function createTask(title, description, dueDate, priority, key) {
  const task = tasks(title, description, dueDate, priority, key);
  return task;
}

export default createTask;
