function createProject(title) {
  return {
    title,
    taskList: [],
    addTask(task) {
      this.taskList.push(task);
    },
    removeTask(taskKey) {
      for (let i = 0; i < this.taskList.length; i++) {
        const taskItem = this.taskList[i];
        if (taskItem.key === taskKey) {
          this.taskList.splice(i, 1);
        }
      }
    },
    getTask(taskKey) {
      for (let i = 0; i < this.taskList.length; i++) {
        const taskItem = this.taskList[i];
        if (taskItem.key === taskKey) {
          return taskItem;
        }
      }
    },
  };
}
export default createProject;
