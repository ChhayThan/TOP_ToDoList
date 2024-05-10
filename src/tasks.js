function tasks(title, description, dueDate, priority) {
  return { title, description, dueDate, priority };
}

function createTask(title, description, dueDate, priority) {
  const task = tasks(title, description, dueDate, priority);
  return task;
}

console.log(createTask("Workout", "Movati Gym", "2024-05-10", "high"));
