function createProject(title) {
  return {
    title,
    taskList: [],
    addTask(task) {
      this.taskList.push(task);
    },
    removeTask(task) {
      const index = this.taskList.indexOf(task);

      if (index !== -1) {
        this.taskList.splice(index, 1);
      }
    },
  };
}
export default createProject;
