import "./style.css";
import createTask from "./tasks";
import createProject from "./projects";

import renderSideBar from "./sideBar";
import { renderAllTaskContent } from "./allTaskContent";
import renderModals from "./modal";
import generateButtonFunctions from "./buttonFunction";

const mainProject = createProject("main");
const taskItem1 = createTask(
  "Task 1 with High priority",
  "Description",
  "2024-05-12",
  "High",
  mainProject.taskList.length
);

mainProject.addTask(taskItem1);

renderSideBar();
renderAllTaskContent();
renderModals();
generateButtonFunctions();

export default mainProject;
