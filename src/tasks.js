export default function createTask(
  title,
  description,
  dueDate,
  priority,
  projectTitle,
  key
) {
  return {
    title,
    description,
    dueDate,
    priority,
    projectTitle,
    key,
    updateTask(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskProjectTitle = "main"
    ) {
      this.title = taskTitle;
      this.description = taskDescription;
      this.dueDate = taskDueDate;
      this.priority = taskPriority;
      this.projectTitle = taskProjectTitle;
    },
  };
}
