export default function createProject(title) {
  return {
    title,
    taskList: [],
    childProjectList: [],
    addTask(task) {
      this.taskList.push(task);
    },
    removeTask(taskKey) {
      this.taskList = this.taskList.filter((task) => task.key !== taskKey);
    },
    getTask(taskKey) {
      return this.taskList.find((task) => task.key === taskKey);
    },
    createChildProject(projectTitle) {
      const childProject = createProject(projectTitle);
      this.childProjectList.push(childProject);
      return childProject;
    },
    getChildProject(projectTitle) {
      return this.childProjectList.find(
        (childProject) => childProject.title === projectTitle
      );
    },
  };
}
