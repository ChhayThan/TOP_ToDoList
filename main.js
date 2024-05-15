/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--textColor);

  --titleColor: rgb(51, 160, 255);
  --secondaryColor: aliceblue;
  --textColor: rgb(40, 40, 40);

  --priorityLow: rgb(51, 160, 255);
  --priorityLowSecondary: aliceblue;

  --priorityMedium: rgb(163, 89, 163);
  --priorityMediumSecondary: rgb(209, 177, 209);

  --priorityHigh: rgb(255, 101, 101);
  --priorityHighSecondary: rgb(255, 179, 179);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: grid;

  grid-template-columns: minmax(200px, 350px) minmax(500px, 1fr);
  grid-template-rows: 1fr;
}

#special_decoration {
  color: rgb(159, 166, 172);
  text-decoration: underline;
  text-decoration-color: var(--titleColor);
}

.title h1 {
  color: var(--titleColor);
}

#sidebar {
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 30px;

  height: 100vh;

  background-color: rgb(246, 251, 255);
}

#content {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 50px;
  width: 80%;

  align-items: flex-start;
}

#content,
#sidebar {
  padding-left: 20px;
  padding-top: 25px;
}

.sidebar_content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tasksOptions,
.projectOptions {
  display: flex;
  flex-direction: column;

  padding: 10px;
}

.tasksOptions h3,
.projectOptions h3 {
  color: var(--titleColor);
}
.tasksOptions,
.projectOptions,
.btn {
  background-color: rgb(246, 251, 255);
  border: none;
  font-size: 12pt;
  gap: 10px;
}
.tasksOptions .btn,
.projectOptions .btn {
  display: flex;
  flex-direction: row;
  justify-content: left;
  cursor: pointer;

  padding: 10px;
  border-radius: 10px;
}

.tasksOptions .btn:hover,
.projectOptions .btn:hover {
  background-color: aliceblue;
}

.tasksOptions .btn:active,
.projectOptions .btn:active {
  background-color: aliceblue;
  box-shadow: 0 1px rgb(224, 241, 255);
  transform: translateY(4px);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%) scale(0);
  transition: 200ms ease-in-out;

  border-radius: 10px;
  box-shadow: 5px 5px 5px rgb(210, 210, 210);
  z-index: 10;

  background-color: white;

  width: 500px;
  max-width: 80%;
}

.modal.active {
  transform: translate(-50%, -100%) scale(1);
}

.modal-header {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(210, 210, 210);
  border-width: 80%;
  width: 100%;
}

.modal-header .modal-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-header .close-modal {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: white;
  font-size: 1.25rem;

  color: rgb(175, 175, 175);
}

.modal-content {
  padding: 10px 15px;
}

#overlay {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}

input#taskTitle,
input#projectTitle {
  border: none;
  font-size: 1.25rem;
  padding: 10px;
  width: 300px;
}
input#projectTitle {
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  width: 100%;
}

textarea:focus,
input:focus {
  outline: none;
}

textarea {
  width: 100%;
  border: none;
  resize: none;
}

.custom-select {
  min-width: 100px;
  position: relative;
}

.modal-content {
  display: flex;
  flex-direction: column;
}
.projectName {
  display: flex;
  align-items: center;
}
.projectName label {
  font-size: 1.25rem;
  font-weight: lighter;
  margin-right: 10px;
}

.modal-content .inputItem {
  padding: 10px;
  font-weight: bold;
}

.modal-content .modalBtn {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modalBtn button {
  padding: 10px;
  width: 30%;
  border: none;
  border-radius: 10px;
}
.modalBtn button.close-modal:active,
.modalBtn button.add-task.active:active {
  background-color: aliceblue;
  box-shadow: 0 1px rgb(224, 241, 255);
  transform: translateY(4px);
}

button.close-modal {
  background-color: rgb(230, 230, 230);
}
button.close-modal:hover {
  background-color: rgb(244, 244, 244);
}

button.add_task,
button.add_project,
button.update_task {
  background-color: var(--titleColor);
  font-weight: bold;
  color: white;

  cursor: not-allowed;
}

button.add_task.active,
.modalBtn button.add_project.active,
button.update_task.active {
  cursor: pointer;
}

button.add_task.active:hover,
button.add_project.active:hover {
  background-color: rgb(99, 182, 255);
}

.modalBtn button.active:active {
  box-shadow: 0 1px rgb(224, 241, 255);
  transform: translateY(4px);
}

select,
input[type="date"] {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: auto;
  font-size: 1.15rem;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: rgb(139, 139, 139);
  cursor: pointer;
}

.custom-select::before,
.custom-select::after {
  --size: 0.3rem;
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.custom-select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid black;
  top: 40%;
}

.custom-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  top: 55%;
}

.contentTitle {
  color: var(--titleColor);
  margin-bottom: 30px;
}

.contentTasks {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.taskItem {
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 50px 1fr 120px;
  gap: 10px;
  width: 100%;

  border-top: 2px solid rgb(210, 210, 210);
  padding-top: 20px;
  padding-bottom: 20px;
}

.taskItem p.taskDueDate {
  margin-top: 10px;
  font-size: 0.8rem;
  color: rgb(80, 80, 80);
}
.taskItem p.taskProjectTitle {
  font-style: italic;
}
.taskItem p.taskProjectTitle:hover {
  font-weight: bold;
  color: var(--titleColor);
  cursor: pointer;
}
.taskItem .checkBtn {
  top: 50%;
  border: none;
  grid-row: span 2;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  cursor: pointer;
}

button.checkBtn.priorityHigh {
  border: 2px solid var(--priorityHigh);
  background-color: var(--priorityHighSecondary);
}
button.checkBtn.priorityHigh.cancelled {
  background-color: var(--priorityHigh);
}
button.checkBtn.priorityMedium {
  border: 2px solid var(--priorityMedium);
  background-color: var(--priorityMediumSecondary);
}
button.checkBtn.priorityMedium.cancelled {
  background-color: var(--priorityMedium);
}

button.checkBtn.priorityLow {
  border: 2px solid var(--priorityLow);
  background-color: var(--priorityLowSecondary);
}
button.checkBtn.priorityLow.cancelled {
  background-color: var(--priorityLow);
}

.taskItem .taskContent {
  grid-row: span 2;
}

.taskItem .taskContent h3.cancelled {
  text-decoration: line-through;
  text-decoration-color: var(--textColor);
  text-decoration-thickness: 2px;
}

.editTask,
.removeTask {
  border: none;
  border-radius: 10px;
  width: 50px;
  height: 50px;

  font-size: 0.75rem;
  font-weight: bold;
  color: var(--textColor);

  cursor: none;
  opacity: 0;
}

.removeTask {
  background-color: rgb(255, 101, 101);
  color: white;
}
.editTask.showBtn,
.removeTask.showBtn {
  cursor: pointer;
  opacity: 1;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--textColor);\n\n  --titleColor: rgb(51, 160, 255);\n  --secondaryColor: aliceblue;\n  --textColor: rgb(40, 40, 40);\n\n  --priorityLow: rgb(51, 160, 255);\n  --priorityLowSecondary: aliceblue;\n\n  --priorityMedium: rgb(163, 89, 163);\n  --priorityMediumSecondary: rgb(209, 177, 209);\n\n  --priorityHigh: rgb(255, 101, 101);\n  --priorityHighSecondary: rgb(255, 179, 179);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n\n  grid-template-columns: minmax(200px, 350px) minmax(500px, 1fr);\n  grid-template-rows: 1fr;\n}\n\n#special_decoration {\n  color: rgb(159, 166, 172);\n  text-decoration: underline;\n  text-decoration-color: var(--titleColor);\n}\n\n.title h1 {\n  color: var(--titleColor);\n}\n\n#sidebar {\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  height: 100vh;\n\n  background-color: rgb(246, 251, 255);\n}\n\n#content {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  margin-left: 100px;\n  margin-top: 50px;\n  width: 80%;\n\n  align-items: flex-start;\n}\n\n#content,\n#sidebar {\n  padding-left: 20px;\n  padding-top: 25px;\n}\n\n.sidebar_content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.tasksOptions,\n.projectOptions {\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px;\n}\n\n.tasksOptions h3,\n.projectOptions h3 {\n  color: var(--titleColor);\n}\n.tasksOptions,\n.projectOptions,\n.btn {\n  background-color: rgb(246, 251, 255);\n  border: none;\n  font-size: 12pt;\n  gap: 10px;\n}\n.tasksOptions .btn,\n.projectOptions .btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  cursor: pointer;\n\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.tasksOptions .btn:hover,\n.projectOptions .btn:hover {\n  background-color: aliceblue;\n}\n\n.tasksOptions .btn:active,\n.projectOptions .btn:active {\n  background-color: aliceblue;\n  box-shadow: 0 1px rgb(224, 241, 255);\n  transform: translateY(4px);\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -200%) scale(0);\n  transition: 200ms ease-in-out;\n\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgb(210, 210, 210);\n  z-index: 10;\n\n  background-color: white;\n\n  width: 500px;\n  max-width: 80%;\n}\n\n.modal.active {\n  transform: translate(-50%, -100%) scale(1);\n}\n\n.modal-header {\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid rgb(210, 210, 210);\n  border-width: 80%;\n  width: 100%;\n}\n\n.modal-header .modal-title {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.modal-header .close-modal {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: white;\n  font-size: 1.25rem;\n\n  color: rgb(175, 175, 175);\n}\n\n.modal-content {\n  padding: 10px 15px;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\ninput#taskTitle,\ninput#projectTitle {\n  border: none;\n  font-size: 1.25rem;\n  padding: 10px;\n  width: 300px;\n}\ninput#projectTitle {\n  border: 1px solid rgb(210, 210, 210);\n  border-radius: 10px;\n  width: 100%;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  width: 100%;\n  border: none;\n  resize: none;\n}\n\n.custom-select {\n  min-width: 100px;\n  position: relative;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n}\n.projectName {\n  display: flex;\n  align-items: center;\n}\n.projectName label {\n  font-size: 1.25rem;\n  font-weight: lighter;\n  margin-right: 10px;\n}\n\n.modal-content .inputItem {\n  padding: 10px;\n  font-weight: bold;\n}\n\n.modal-content .modalBtn {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.modalBtn button {\n  padding: 10px;\n  width: 30%;\n  border: none;\n  border-radius: 10px;\n}\n.modalBtn button.close-modal:active,\n.modalBtn button.add-task.active:active {\n  background-color: aliceblue;\n  box-shadow: 0 1px rgb(224, 241, 255);\n  transform: translateY(4px);\n}\n\nbutton.close-modal {\n  background-color: rgb(230, 230, 230);\n}\nbutton.close-modal:hover {\n  background-color: rgb(244, 244, 244);\n}\n\nbutton.add_task,\nbutton.add_project,\nbutton.update_task {\n  background-color: var(--titleColor);\n  font-weight: bold;\n  color: white;\n\n  cursor: not-allowed;\n}\n\nbutton.add_task.active,\n.modalBtn button.add_project.active,\nbutton.update_task.active {\n  cursor: pointer;\n}\n\nbutton.add_task.active:hover,\nbutton.add_project.active:hover {\n  background-color: rgb(99, 182, 255);\n}\n\n.modalBtn button.active:active {\n  box-shadow: 0 1px rgb(224, 241, 255);\n  transform: translateY(4px);\n}\n\nselect,\ninput[type=\"date\"] {\n  appearance: none;\n  /*  safari  */\n  -webkit-appearance: none;\n  /*  other styles for aesthetics */\n  width: auto;\n  font-size: 1.15rem;\n  padding: 5px;\n  background-color: #fff;\n  border: 1px solid #caced1;\n  border-radius: 0.25rem;\n  color: rgb(139, 139, 139);\n  cursor: pointer;\n}\n\n.custom-select::before,\n.custom-select::after {\n  --size: 0.3rem;\n  content: \"\";\n  position: absolute;\n  right: 1rem;\n  pointer-events: none;\n}\n\n.custom-select::before {\n  border-left: var(--size) solid transparent;\n  border-right: var(--size) solid transparent;\n  border-bottom: var(--size) solid black;\n  top: 40%;\n}\n\n.custom-select::after {\n  border-left: var(--size) solid transparent;\n  border-right: var(--size) solid transparent;\n  border-top: var(--size) solid black;\n  top: 55%;\n}\n\n.contentTitle {\n  color: var(--titleColor);\n  margin-bottom: 30px;\n}\n\n.contentTasks {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.taskItem {\n  display: grid;\n  grid-template-rows: 50px 1fr;\n  grid-template-columns: 50px 1fr 120px;\n  gap: 10px;\n  width: 100%;\n\n  border-top: 2px solid rgb(210, 210, 210);\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.taskItem p.taskDueDate {\n  margin-top: 10px;\n  font-size: 0.8rem;\n  color: rgb(80, 80, 80);\n}\n.taskItem p.taskProjectTitle {\n  font-style: italic;\n}\n.taskItem p.taskProjectTitle:hover {\n  font-weight: bold;\n  color: var(--titleColor);\n  cursor: pointer;\n}\n.taskItem .checkBtn {\n  top: 50%;\n  border: none;\n  grid-row: span 2;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n\n  cursor: pointer;\n}\n\nbutton.checkBtn.priorityHigh {\n  border: 2px solid var(--priorityHigh);\n  background-color: var(--priorityHighSecondary);\n}\nbutton.checkBtn.priorityHigh.cancelled {\n  background-color: var(--priorityHigh);\n}\nbutton.checkBtn.priorityMedium {\n  border: 2px solid var(--priorityMedium);\n  background-color: var(--priorityMediumSecondary);\n}\nbutton.checkBtn.priorityMedium.cancelled {\n  background-color: var(--priorityMedium);\n}\n\nbutton.checkBtn.priorityLow {\n  border: 2px solid var(--priorityLow);\n  background-color: var(--priorityLowSecondary);\n}\nbutton.checkBtn.priorityLow.cancelled {\n  background-color: var(--priorityLow);\n}\n\n.taskItem .taskContent {\n  grid-row: span 2;\n}\n\n.taskItem .taskContent h3.cancelled {\n  text-decoration: line-through;\n  text-decoration-color: var(--textColor);\n  text-decoration-thickness: 2px;\n}\n\n.editTask,\n.removeTask {\n  border: none;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: var(--textColor);\n\n  cursor: none;\n  opacity: 0;\n}\n\n.removeTask {\n  background-color: rgb(255, 101, 101);\n  color: white;\n}\n.editTask.showBtn,\n.removeTask.showBtn {\n  cursor: pointer;\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allTaskContent.js":
/*!*******************************!*\
  !*** ./src/allTaskContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTaskItemArray: () => (/* binding */ generateTaskItemArray),
/* harmony export */   renderAllTaskContent: () => (/* binding */ renderAllTaskContent)
/* harmony export */ });
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
    taskContent.appendChild(h3);
    taskContent.appendChild(p);
    taskContent.appendChild(dueDate);
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




/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   renderModals: () => (/* binding */ renderModals)
/* harmony export */ });
function renderModals() {
  const taskModal = createTaskModal();
  const taskEditModal = createTaskEditModal();
  const projectModal = createProjectModal();
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
  document.body.appendChild(taskModal);
  document.body.appendChild(projectModal);
  document.body.appendChild(taskEditModal);
  document.body.appendChild(overlay);

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-modal]");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.closeModal);
      closeModal(modal);
    });
  });
}

function createTaskModal() {
  const taskModal = document.createElement("div");
  taskModal.classList.add("modal");
  taskModal.setAttribute("id", "taskModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  modalHeader.appendChild(modalTitle);

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "taskTitle");
  taskTitleInput.setAttribute("Placeholder", "Task Name");
  taskTitleInput.required = true;

  modalTitle.appendChild(taskTitleInput);
  const closeTaskModalBtn = document.createElement("button");
  closeTaskModalBtn.classList.add("close-modal");
  closeTaskModalBtn.setAttribute("data-close-modal", "#taskModal");
  closeTaskModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeTaskModalBtn);
  taskModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const descriptionInput = document.createElement("div");
  descriptionInput.classList.add("inputItem");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("placeholder", "Description");
  descriptionInput.appendChild(descriptionTextArea);
  modalContent.appendChild(descriptionInput);

  const dueDateInput = document.createElement("div");
  dueDateInput.classList.add("inputItem");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.innerText = "Due Date:";
  dueDateInput.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("id", "dueDate");
  dueDate.required = true;
  dueDateInput.appendChild(dueDate);
  modalContent.appendChild(dueDateInput);

  const priorityInput = document.createElement("div");
  priorityInput.classList.add("inputItem");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Priority:";
  priorityInput.appendChild(priorityLabel);
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("custom-select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "priority");
  const priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "High");
  priorityHigh.innerText = "High";
  const priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "Medium");
  priorityMedium.innerText = "Medium";
  const priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "Low");
  priorityLow.innerText = "Low";
  prioritySelect.appendChild(priorityHigh);
  prioritySelect.appendChild(priorityMedium);
  prioritySelect.appendChild(priorityLow);
  priorityInput.appendChild(prioritySelect);
  modalContent.appendChild(priorityInput);

  const projectInput = document.createElement("div");
  projectInput.classList.add("inputItem");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.innerText = "Project:";
  projectInput.appendChild(projectLabel);
  const projectSelect = document.createElement("select");
  projectSelect.classList.add("custom-select");
  projectSelect.setAttribute("name", "project");
  projectSelect.setAttribute("id", "project");
  const defaultOption = document.createElement("option");
  defaultOption.setAttribute("value", "main");
  defaultOption.innerText = "None";
  projectSelect.appendChild(defaultOption);
  projectInput.appendChild(projectSelect);
  modalContent.appendChild(projectInput);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#taskModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add_task");
  addTaskBtn.innerText = "Add task";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addTaskBtn);
  modalContent.appendChild(modalBtn);

  taskModal.appendChild(modalContent);

  return taskModal;
}

function createTaskEditModal() {
  const taskEditModal = document.createElement("div");
  taskEditModal.classList.add("modal");
  taskEditModal.setAttribute("id", "taskEditModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  modalHeader.appendChild(modalTitle);

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "taskTitle");
  taskTitleInput.setAttribute("Placeholder", "Task Name");
  // taskTitleInput.value = taskTitle;
  modalTitle.appendChild(taskTitleInput);

  const closeTaskEditModalBtn = document.createElement("button");
  closeTaskEditModalBtn.classList.add("close-modal");
  closeTaskEditModalBtn.setAttribute("data-close-modal", "#taskEditModal");
  closeTaskEditModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeTaskEditModalBtn);
  taskEditModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const descriptionInput = document.createElement("div");
  descriptionInput.classList.add("inputItem");
  const descriptionTextArea = document.createElement("textarea");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("placeholder", "Description");
  // descriptionTextArea.innerText = `${taskDescription}`;
  descriptionInput.appendChild(descriptionTextArea);
  modalContent.appendChild(descriptionInput);

  const dueDateInput = document.createElement("div");
  dueDateInput.classList.add("inputItem");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.innerText = "Due Date:";
  dueDateInput.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("id", "dueDate");
  // dueDate.value = taskDueDate;
  dueDateInput.appendChild(dueDate);
  modalContent.appendChild(dueDateInput);

  const priorityInput = document.createElement("div");
  priorityInput.classList.add("inputItem");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Priority:";
  priorityInput.appendChild(priorityLabel);
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("custom-select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "priority");
  const priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "High");
  priorityHigh.innerText = "High";
  const priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("value", "Medium");
  priorityMedium.innerText = "Medium";
  const priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "Low");
  priorityLow.innerText = "Low";
  prioritySelect.appendChild(priorityHigh);
  prioritySelect.appendChild(priorityMedium);
  prioritySelect.appendChild(priorityLow);
  priorityInput.appendChild(prioritySelect);
  modalContent.appendChild(priorityInput);

  const projectInput = document.createElement("div");
  projectInput.classList.add("inputItem");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.innerText = "Project:";
  projectInput.appendChild(projectLabel);
  const projectSelect = document.createElement("select");
  projectSelect.classList.add("custom-select");
  projectSelect.setAttribute("name", "project");
  projectSelect.setAttribute("id", "project");
  const defaultOption = document.createElement("option");
  defaultOption.setAttribute("value", "main");
  defaultOption.innerText = "None";
  projectSelect.appendChild(defaultOption);
  projectInput.appendChild(projectSelect);
  modalContent.appendChild(projectInput);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#taskEditModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("update_task");
  addTaskBtn.classList.add("active");
  addTaskBtn.innerText = "Update task";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addTaskBtn);
  modalContent.appendChild(modalBtn);

  taskEditModal.appendChild(modalContent);

  return taskEditModal;
}

function createProjectModal() {
  const projectModal = document.createElement("div");
  projectModal.classList.add("modal");
  projectModal.setAttribute("id", "projectModal");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  const title = document.createElement("h1");
  title.innerText = "New project";
  modalTitle.appendChild(title);
  modalHeader.appendChild(modalTitle);

  const closeProjectModalBtn = document.createElement("button");
  closeProjectModalBtn.classList.add("close-modal");
  closeProjectModalBtn.setAttribute("data-close-modal", "#projectModal");
  closeProjectModalBtn.innerHTML = "&times;";
  modalHeader.appendChild(closeProjectModalBtn);
  projectModal.appendChild(modalHeader);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const inputItem = document.createElement("div");
  inputItem.classList.add("inputItem");
  const projectName = document.createElement("div");
  projectName.classList.add("projectName");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "projectTitle");
  projectLabel.innerText = "#";
  projectName.appendChild(projectLabel);
  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("type", "text");
  projectTitleInput.setAttribute("id", "projectTitle");
  projectTitleInput.setAttribute("placeholder", "Project Name");
  projectTitleInput.required = true;
  projectName.appendChild(projectTitleInput);
  inputItem.appendChild(projectName);
  modalContent.appendChild(inputItem);

  const modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("data-close-modal", "#projectModal");
  cancelBtn.classList.add("close-modal");
  cancelBtn.innerText = "Cancel";
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add_project");
  addProjectBtn.innerText = "Add";
  modalBtn.appendChild(cancelBtn);
  modalBtn.appendChild(addProjectBtn);
  modalContent.appendChild(modalBtn);

  projectModal.appendChild(modalContent);

  return projectModal;
}

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createProject(title) {
  return {
    title,
    taskList: [],
    childProjectList: [],
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
    createChildProject(projectTitle) {
      const childProject = createProject(projectTitle);
      this.childProjectList.push(childProject);

      return childProject;
    },
    getChildProject(projectTitle) {
      for (let i = 0; i < this.childProjectList.length; i++) {
        let childProject = this.childProjectList[i];
        if (childProject.title === projectTitle) {
          return childProject;
        }
      }
    },
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/sideBar.js":
/*!************************!*\
  !*** ./src/sideBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSideBar)
/* harmony export */ });
function renderSideBar() {
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


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tasks(title, description, dueDate, priority, projectTitle, key) {
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

function createTask(title, description, dueDate, priority, projectTitle, key) {
  const task = tasks(title, description, dueDate, priority, projectTitle, key);
  return task;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideBar */ "./src/sideBar.js");
/* harmony import */ var _allTaskContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTaskContent */ "./src/allTaskContent.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/projects.js");








const mainProject = (0,_projects__WEBPACK_IMPORTED_MODULE_5__["default"])("main");
const tasks = [
  {
    title: "Task 1 with High priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "High",
    key: "999",
  },
  {
    title: "Task 2 with Medium priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "Medium",
    key: "9999",
  },
  {
    title: "Task 3 with Low priority",
    description: "Description",
    dueDate: "2024-05-12",
    priority: "Low",
    key: "99999",
  },
];

tasks.forEach((task) => {
  const taskItem = (0,_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(
    task.title,
    task.description,
    task.dueDate,
    task.priority,
    mainProject.title,
    task.key
  );
  mainProject.addTask(taskItem);
});

function initializePage() {
  (0,_sideBar__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_allTaskContent__WEBPACK_IMPORTED_MODULE_2__.renderAllTaskContent)();
  generateTasks(mainProject);
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.renderModals)();

  setupTaskButtonEvents();
  setupProjectButtonEvents();
}

function setupTaskButtonEvents() {
  document
    .querySelector("div.tasksOptions button[data-modal-target]")
    .addEventListener("click", populateProjectSelect);
  document
    .querySelector("div.tasksOptions button.allTasks")
    .addEventListener("click", () => {
      updateContentTitle("All tasks");
      generateTasks(mainProject);
    });

  const addTaskBtn = document.querySelector("button.add_task");
  addTaskBtn.addEventListener("mouseover", toggleButtonState);
  addTaskBtn.addEventListener("click", addNewTask);
}

function setupProjectButtonEvents() {
  const addProjectBtn = document.querySelector("button.add_project");
  addProjectBtn.addEventListener("mouseover", toggleButtonState);
  addProjectBtn.addEventListener("click", addNewProject);
}

function populateProjectSelect() {
  const projectSelectAll = document.querySelectorAll("select#project");
  if (!projectSelectAll) return;

  console.log(projectSelectAll);

  projectSelectAll.forEach((projectSelect) => {
    projectSelect.innerHTML = "";
    const mainOption = document.createElement("option");
    mainOption.value = "main";
    mainOption.innerText = "None";
    projectSelect.appendChild(mainOption);
    mainProject.childProjectList.forEach((childProject) => {
      const option = document.createElement("option");
      option.value = childProject.title;
      option.innerText = childProject.title;
      projectSelect.appendChild(option);
    });
  });
}

function addNewTask() {
  const addTaskBtn = document.querySelector("button.add_task");
  if (!addTaskBtn.classList.contains("active")) return;

  const taskTitleInput = document.querySelector("input#taskTitle");
  const taskDescriptionInput = document.querySelector("textarea#description");
  const dueDateInput = document.querySelector("input#dueDate");
  const priorityClassInput = document.querySelector("select#priority");
  const projectInput = document.querySelector("select#project");

  const projectTitle =
    projectInput.value === "none" ? "main" : projectInput.value;
  const taskToAdd = (0,_tasks__WEBPACK_IMPORTED_MODULE_4__["default"])(
    taskTitleInput.value,
    taskDescriptionInput.value,
    dueDateInput.value,
    priorityClassInput.value,
    projectTitle,
    mainProject.taskList.length
  );

  mainProject.addTask(taskToAdd);
  if (projectTitle !== "main") {
    const childProject = mainProject.getChildProject(projectTitle);
    childProject.addTask(taskToAdd);
  }

  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(document.querySelector("div#taskModal"));
  generateTasks(mainProject);
  updateContentTitle("All tasks");

  clearTaskInputs();
}

function addNewProject() {
  const addProjectBtn = document.querySelector("button.add_project");
  if (!addProjectBtn.classList.contains("active")) return;

  const projectTitleInput = document.querySelector("input#projectTitle");
  createNewChildProject(projectTitleInput.value);

  projectTitleInput.value = "";
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(document.querySelector("div#projectModal"));
}

function toggleButtonState(event) {
  const button = event.target;
  const inputId = button.classList.contains("add_task")
    ? "taskTitle"
    : "projectTitle";
  const inputValue = document.querySelector(`input#${inputId}`).value;

  button.classList.toggle("active", inputValue !== "");
}

function clearTaskInputs() {
  document.querySelector("input#taskTitle").value = "";
  document.querySelector("textarea#description").value = "";
  document.querySelector("input#dueDate").value = "";
  document.querySelector("select#priority").value = "High";
}

function updateContentTitle(title) {
  document.querySelector("div.contentTitle h1").innerText = title;
}

function generateTasks(project) {
  const contentTasks = document.querySelector("div.contentTasks");
  contentTasks.innerHTML = "";

  (0,_allTaskContent__WEBPACK_IMPORTED_MODULE_2__.generateTaskItemArray)(project).forEach((taskItem, index) => {
    contentTasks.appendChild(taskItem);
    const currentTask = project.getTask(project.taskList[index].key);
    const currentTaskContent = document.querySelector(
      `div[data-taskkey="${currentTask.key}"] div.taskContent`
    );

    if (currentTask.projectTitle !== "main") {
      const taskProject = document.createElement("p");
      taskProject.classList.add("taskProjectTitle");
      taskProject.innerText = `#${currentTask.projectTitle}`;
      taskProject.addEventListener("click", () => {
        const currentTaskProject = project.getChildProject(
          currentTask.projectTitle
        );
        updateContentTitle(`# ${currentTask.projectTitle}`);
        generateTasks(currentTaskProject);
      });
      currentTaskContent.appendChild(taskProject);
    }
  });

  setupTaskInteractionEvents();
}

function setupTaskInteractionEvents() {
  document.querySelectorAll(".checkBtn").forEach((button, index) => {
    button.addEventListener("click", () => toggleTaskCompletion(button, index));
  });

  document.querySelectorAll("div.taskItem").forEach((item, index) => {
    const keyIndex = item.dataset.taskkey;
    const itemBtns = document.querySelectorAll(
      `div[data-taskKey="${keyIndex}"] .taskOptions > button`
    );

    item.addEventListener("mouseenter", () =>
      toggleButtonVisibility(itemBtns, true)
    );
    item.addEventListener("mouseleave", () =>
      toggleButtonVisibility(itemBtns, false)
    );
  });

  document
    .querySelectorAll("div.taskOptions button.editTask")
    .forEach((editTaskBtn) => {
      editTaskBtn.addEventListener("click", () =>
        openEditTaskModal(editTaskBtn)
      );
    });

  document
    .querySelectorAll("div.taskOptions button.removeTask")
    .forEach((deleteTaskBtn, index) => {
      deleteTaskBtn.addEventListener("click", () => removeTask(deleteTaskBtn));
    });
}

function toggleTaskCompletion(button, index) {
  const keyIndex = button.closest("div.taskItem").dataset.taskkey;
  const taskTitle = document.querySelector(
    `div[data-taskKey="${keyIndex}"] h3`
  );
  button.classList.toggle("cancelled");
  taskTitle.classList.toggle("cancelled");
}

function toggleButtonVisibility(buttons, show) {
  buttons.forEach((button) => button.classList.toggle("showBtn", show));
}

function openEditTaskModal(editTaskBtn) {
  const modal = document.querySelector("#taskEditModal");
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(modal);

  const taskItemDiv = editTaskBtn.closest("[data-taskkey]");
  if (!taskItemDiv) return;

  const taskKey = taskItemDiv.getAttribute("data-taskkey");
  const taskItem = mainProject.getTask(taskKey);
  if (!taskItem) return;

  populateProjectSelect(); // Ensure the project select options are updated
  populateTaskModal(taskItem);

  const updateTaskBtn = document.querySelector("button.update_task.active");
  updateTaskBtn.removeEventListener("click", handleUpdateTask);
  updateTaskBtn.addEventListener("click", () => handleUpdateTask(taskItem), {
    once: true,
  });
}

function populateTaskModal(taskItem) {
  document.querySelector(
    "div#taskEditModal div.modal-header div.modal-title input#taskTitle"
  ).value = taskItem.title;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem textarea#description"
  ).value = taskItem.description;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem input#dueDate"
  ).value = taskItem.dueDate;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#priority"
  ).value = taskItem.priority;
  document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#project"
  ).value = taskItem.projectTitle;
}

function handleUpdateTask(taskItem) {
  const taskTitleInput = document.querySelector(
    "div#taskEditModal div.modal-header div.modal-title input#taskTitle"
  ).value;
  const taskDescriptionInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem textarea#description"
  ).value;
  const dueDateInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem input#dueDate"
  ).value;
  const priorityClassInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#priority"
  ).value;
  const projectInput = document.querySelector(
    "div#taskEditModal div.modal-content div.inputItem select#project"
  ).value;
  const oldProject = taskItem.projectTitle;

  taskItem.updateTask(
    taskTitleInput,
    taskDescriptionInput,
    dueDateInput,
    priorityClassInput,
    projectInput
  );

  if (oldProject !== "main" && projectInput !== "main") {
    mainProject.getChildProject(oldProject).removeTask(taskItem.key);
    mainProject.getChildProject(projectInput).addTask(taskItem);
  } else if (oldProject === "main" && projectInput !== oldProject) {
    mainProject.getChildProject(projectInput).addTask(taskItem);
  } else if (oldProject !== "main" && projectInput === "main") {
    mainProject.getChildProject(oldProject).removeTask(taskItem.key);
  }

  generateTasks(mainProject);
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(document.querySelector("#taskEditModal"));
}

function removeTask(deleteTaskBtn) {
  const taskItemDiv = deleteTaskBtn.closest("[data-taskkey]");
  if (!taskItemDiv) return;

  const taskKey = taskItemDiv.getAttribute("data-taskkey");
  mainProject.removeTask(taskKey);
  taskItemDiv.remove();
}

function createNewChildProject(projectTitle) {
  const newProject = mainProject.createChildProject(projectTitle);
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("btn");
  projectBtn.id = `#${projectTitle}`;
  projectBtn.innerText = `# ${projectTitle}`;

  projectBtn.addEventListener("click", () => {
    updateContentTitle(`# ${projectTitle}`);
    generateTasks(newProject);
  });

  document.querySelector("div.projectOptions").appendChild(projectBtn);
  return newProject;
}

initializePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFB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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUV1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGtEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMsOEJBQThCLGFBQWE7O0FBRTNDO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvYWxsVGFza0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc2lkZUJhci5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcblxuICAtLXRpdGxlQ29sb3I6IHJnYig1MSwgMTYwLCAyNTUpO1xuICAtLXNlY29uZGFyeUNvbG9yOiBhbGljZWJsdWU7XG4gIC0tdGV4dENvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG5cbiAgLS1wcmlvcml0eUxvdzogcmdiKDUxLCAxNjAsIDI1NSk7XG4gIC0tcHJpb3JpdHlMb3dTZWNvbmRhcnk6IGFsaWNlYmx1ZTtcblxuICAtLXByaW9yaXR5TWVkaXVtOiByZ2IoMTYzLCA4OSwgMTYzKTtcbiAgLS1wcmlvcml0eU1lZGl1bVNlY29uZGFyeTogcmdiKDIwOSwgMTc3LCAyMDkpO1xuXG4gIC0tcHJpb3JpdHlIaWdoOiByZ2IoMjU1LCAxMDEsIDEwMSk7XG4gIC0tcHJpb3JpdHlIaWdoU2Vjb25kYXJ5OiByZ2IoMjU1LCAxNzksIDE3OSk7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzNTBweCkgbWlubWF4KDUwMHB4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuI3NwZWNpYWxfZGVjb3JhdGlvbiB7XG4gIGNvbG9yOiByZ2IoMTU5LCAxNjYsIDE3Mik7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLXRpdGxlQ29sb3IpO1xufVxuXG4udGl0bGUgaDEge1xuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XG59XG5cbiNzaWRlYmFyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG5cbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNTEsIDI1NSk7XG59XG5cbiNjb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG5cbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbiNjb250ZW50LFxuI3NpZGViYXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4uc2lkZWJhcl9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4udGFza3NPcHRpb25zLFxuLnByb2plY3RPcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGFza3NPcHRpb25zIGgzLFxuLnByb2plY3RPcHRpb25zIGgzIHtcbiAgY29sb3I6IHZhcigtLXRpdGxlQ29sb3IpO1xufVxuLnRhc2tzT3B0aW9ucyxcbi5wcm9qZWN0T3B0aW9ucyxcbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNTEsIDI1NSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBnYXA6IDEwcHg7XG59XG4udGFza3NPcHRpb25zIC5idG4sXG4ucHJvamVjdE9wdGlvbnMgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrc09wdGlvbnMgLmJ0bjpob3Zlcixcbi5wcm9qZWN0T3B0aW9ucyAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4udGFza3NPcHRpb25zIC5idG46YWN0aXZlLFxuLnByb2plY3RPcHRpb25zIC5idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBib3gtc2hhZG93OiAwIDFweCByZ2IoMjI0LCAyNDEsIDI1NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKSBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiKDIxMCwgMjEwLCAyMTApO1xuICB6LWluZGV4OiAxMDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4ubW9kYWwuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpIHNjYWxlKDEpO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIGJvcmRlci13aWR0aDogODAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZS1tb2RhbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4jb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jb3ZlcmxheS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5pbnB1dCN0YXNrVGl0bGUsXG5pbnB1dCNwcm9qZWN0VGl0bGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuaW5wdXQjcHJvamVjdFRpdGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb2plY3ROYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0TmFtZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgLmlucHV0SXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9kYWwtY29udGVudCAubW9kYWxCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubW9kYWxCdG4gYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1vZGFsQnRuIGJ1dHRvbi5jbG9zZS1tb2RhbDphY3RpdmUsXG4ubW9kYWxCdG4gYnV0dG9uLmFkZC10YXNrLmFjdGl2ZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IHJnYigyMjQsIDI0MSwgMjU1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbmJ1dHRvbi5jbG9zZS1tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbn1cbmJ1dHRvbi5jbG9zZS1tb2RhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcbn1cblxuYnV0dG9uLmFkZF90YXNrLFxuYnV0dG9uLmFkZF9wcm9qZWN0LFxuYnV0dG9uLnVwZGF0ZV90YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYnV0dG9uLmFkZF90YXNrLmFjdGl2ZSxcbi5tb2RhbEJ0biBidXR0b24uYWRkX3Byb2plY3QuYWN0aXZlLFxuYnV0dG9uLnVwZGF0ZV90YXNrLmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLmFkZF90YXNrLmFjdGl2ZTpob3ZlcixcbmJ1dHRvbi5hZGRfcHJvamVjdC5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE4MiwgMjU1KTtcbn1cblxuLm1vZGFsQnRuIGJ1dHRvbi5hY3RpdmU6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiKDIyNCwgMjQxLCAyNTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuc2VsZWN0LFxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAvKiAgc2FmYXJpICAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qICBvdGhlciBzdHlsZXMgZm9yIGFlc3RoZXRpY3MgKi9cbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjZWQxO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogcmdiKDEzOSwgMTM5LCAxMzkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tc2VsZWN0OjpiZWZvcmUsXG4uY3VzdG9tLXNlbGVjdDo6YWZ0ZXIge1xuICAtLXNpemU6IDAuM3JlbTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jdXN0b20tc2VsZWN0OjpiZWZvcmUge1xuICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXNpemUpIHNvbGlkIGJsYWNrO1xuICB0b3A6IDQwJTtcbn1cblxuLmN1c3RvbS1zZWxlY3Q6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiB2YXIoLS1zaXplKSBzb2xpZCBibGFjaztcbiAgdG9wOiA1NSU7XG59XG5cbi5jb250ZW50VGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jb250ZW50VGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2tJdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxMjBweDtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrSXRlbSBwLnRhc2tEdWVEYXRlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XG59XG4udGFza0l0ZW0gcC50YXNrUHJvamVjdFRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnRhc2tJdGVtIHAudGFza1Byb2plY3RUaXRsZTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YXNrSXRlbSAuY2hlY2tCdG4ge1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uY2hlY2tCdG4ucHJpb3JpdHlIaWdoIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpb3JpdHlIaWdoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlIaWdoU2Vjb25kYXJ5KTtcbn1cbmJ1dHRvbi5jaGVja0J0bi5wcmlvcml0eUhpZ2guY2FuY2VsbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlIaWdoKTtcbn1cbmJ1dHRvbi5jaGVja0J0bi5wcmlvcml0eU1lZGl1bSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW9yaXR5TWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlNZWRpdW1TZWNvbmRhcnkpO1xufVxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5TWVkaXVtLmNhbmNlbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5TWVkaXVtKTtcbn1cblxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5TG93IHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpb3JpdHlMb3cpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eUxvd1NlY29uZGFyeSk7XG59XG5idXR0b24uY2hlY2tCdG4ucHJpb3JpdHlMb3cuY2FuY2VsbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlMb3cpO1xufVxuXG4udGFza0l0ZW0gLnRhc2tDb250ZW50IHtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbn1cblxuLnRhc2tJdGVtIC50YXNrQ29udGVudCBoMy5jYW5jZWxsZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XG59XG5cbi5lZGl0VGFzayxcbi5yZW1vdmVUYXNrIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuXG4gIGN1cnNvcjogbm9uZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJlbW92ZVRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDEsIDEwMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5lZGl0VGFzay5zaG93QnRuLFxuLnJlbW92ZVRhc2suc2hvd0J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztFQUN6Qyx1QkFBdUI7O0VBRXZCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsNEJBQTRCOztFQUU1QixnQ0FBZ0M7RUFDaEMsaUNBQWlDOztFQUVqQyxtQ0FBbUM7RUFDbkMsNkNBQTZDOztFQUU3QyxrQ0FBa0M7RUFDbEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhOztFQUViLDhEQUE4RDtFQUM5RCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsYUFBYTs7RUFFYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7O0VBRVYsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixhQUFh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LCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG5cXG4gIC0tdGl0bGVDb2xvcjogcmdiKDUxLCAxNjAsIDI1NSk7XFxuICAtLXNlY29uZGFyeUNvbG9yOiBhbGljZWJsdWU7XFxuICAtLXRleHRDb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcblxcbiAgLS1wcmlvcml0eUxvdzogcmdiKDUxLCAxNjAsIDI1NSk7XFxuICAtLXByaW9yaXR5TG93U2Vjb25kYXJ5OiBhbGljZWJsdWU7XFxuXFxuICAtLXByaW9yaXR5TWVkaXVtOiByZ2IoMTYzLCA4OSwgMTYzKTtcXG4gIC0tcHJpb3JpdHlNZWRpdW1TZWNvbmRhcnk6IHJnYigyMDksIDE3NywgMjA5KTtcXG5cXG4gIC0tcHJpb3JpdHlIaWdoOiByZ2IoMjU1LCAxMDEsIDEwMSk7XFxuICAtLXByaW9yaXR5SGlnaFNlY29uZGFyeTogcmdiKDI1NSwgMTc5LCAxNzkpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzUwcHgpIG1pbm1heCg1MDBweCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jc3BlY2lhbF9kZWNvcmF0aW9uIHtcXG4gIGNvbG9yOiByZ2IoMTU5LCAxNjYsIDE3Mik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XFxufVxcblxcbi50aXRsZSBoMSB7XFxuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI1MSwgMjU1KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29udGVudCxcXG4jc2lkZWJhciB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMjVweDtcXG59XFxuXFxuLnNpZGViYXJfY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2tzT3B0aW9ucyxcXG4ucHJvamVjdE9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza3NPcHRpb25zIGgzLFxcbi5wcm9qZWN0T3B0aW9ucyBoMyB7XFxuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XFxufVxcbi50YXNrc09wdGlvbnMsXFxuLnByb2plY3RPcHRpb25zLFxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjUxLCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udGFza3NPcHRpb25zIC5idG4sXFxuLnByb2plY3RPcHRpb25zIC5idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2tzT3B0aW9ucyAuYnRuOmhvdmVyLFxcbi5wcm9qZWN0T3B0aW9ucyAuYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnRhc2tzT3B0aW9ucyAuYnRuOmFjdGl2ZSxcXG4ucHJvamVjdE9wdGlvbnMgLmJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiKDIyNCwgMjQxLCAyNTUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICB3aWR0aDogNTAwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xcbiAgYm9yZGVyLXdpZHRoOiA4MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIgLmNsb3NlLW1vZGFsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbmlucHV0I3Rhc2tUaXRsZSxcXG5pbnB1dCNwcm9qZWN0VGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuaW5wdXQjcHJvamVjdFRpdGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMsXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0IHtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdE5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TmFtZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgLmlucHV0SXRlbSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IC5tb2RhbEJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbEJ0biBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubW9kYWxCdG4gYnV0dG9uLmNsb3NlLW1vZGFsOmFjdGl2ZSxcXG4ubW9kYWxCdG4gYnV0dG9uLmFkZC10YXNrLmFjdGl2ZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiKDIyNCwgMjQxLCAyNTUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbmJ1dHRvbi5jbG9zZS1tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxufVxcbmJ1dHRvbi5jbG9zZS1tb2RhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxufVxcblxcbmJ1dHRvbi5hZGRfdGFzayxcXG5idXR0b24uYWRkX3Byb2plY3QsXFxuYnV0dG9uLnVwZGF0ZV90YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlQ29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG5idXR0b24uYWRkX3Rhc2suYWN0aXZlLFxcbi5tb2RhbEJ0biBidXR0b24uYWRkX3Byb2plY3QuYWN0aXZlLFxcbmJ1dHRvbi51cGRhdGVfdGFzay5hY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24uYWRkX3Rhc2suYWN0aXZlOmhvdmVyLFxcbmJ1dHRvbi5hZGRfcHJvamVjdC5hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxODIsIDI1NSk7XFxufVxcblxcbi5tb2RhbEJ0biBidXR0b24uYWN0aXZlOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDFweCByZ2IoMjI0LCAyNDEsIDI1NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuc2VsZWN0LFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogIHNhZmFyaSAgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qICBvdGhlciBzdHlsZXMgZm9yIGFlc3RoZXRpY3MgKi9cXG4gIHdpZHRoOiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNlZDE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgY29sb3I6IHJnYigxMzksIDEzOSwgMTM5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN1c3RvbS1zZWxlY3Q6OmJlZm9yZSxcXG4uY3VzdG9tLXNlbGVjdDo6YWZ0ZXIge1xcbiAgLS1zaXplOiAwLjNyZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0OjpiZWZvcmUge1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaXplKSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLXNpemUpIHNvbGlkIGJsYWNrO1xcbiAgdG9wOiA0MCU7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0OjphZnRlciB7XFxuICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZSkgc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IHZhcigtLXNpemUpIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tc2l6ZSkgc29saWQgYmxhY2s7XFxuICB0b3A6IDU1JTtcXG59XFxuXFxuLmNvbnRlbnRUaXRsZSB7XFxuICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY29udGVudFRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnIgMTIwcHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza0l0ZW0gcC50YXNrRHVlRGF0ZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbn1cXG4udGFza0l0ZW0gcC50YXNrUHJvamVjdFRpdGxlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnRhc2tJdGVtIHAudGFza1Byb2plY3RUaXRsZTpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2tJdGVtIC5jaGVja0J0biB7XFxuICB0b3A6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5SGlnaCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmlvcml0eUhpZ2gpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlIaWdoU2Vjb25kYXJ5KTtcXG59XFxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5SGlnaC5jYW5jZWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlIaWdoKTtcXG59XFxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5TWVkaXVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW9yaXR5TWVkaXVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5TWVkaXVtU2Vjb25kYXJ5KTtcXG59XFxuYnV0dG9uLmNoZWNrQnRuLnByaW9yaXR5TWVkaXVtLmNhbmNlbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eU1lZGl1bSk7XFxufVxcblxcbmJ1dHRvbi5jaGVja0J0bi5wcmlvcml0eUxvdyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmlvcml0eUxvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eUxvd1NlY29uZGFyeSk7XFxufVxcbmJ1dHRvbi5jaGVja0J0bi5wcmlvcml0eUxvdy5jYW5jZWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHlMb3cpO1xcbn1cXG5cXG4udGFza0l0ZW0gLnRhc2tDb250ZW50IHtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbi50YXNrSXRlbSAudGFza0NvbnRlbnQgaDMuY2FuY2VsbGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4uZWRpdFRhc2ssXFxuLnJlbW92ZVRhc2sge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG5cXG4gIGN1cnNvcjogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yZW1vdmVUYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMSwgMTAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmVkaXRUYXNrLnNob3dCdG4sXFxuLnJlbW92ZVRhc2suc2hvd0J0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlckFsbFRhc2tDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudFRpdGxlXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEuaW5uZXJUZXh0ID0gXCJBbGwgdGFza3NcIjtcbiAgY29udGVudFRpdGxlLmFwcGVuZENoaWxkKGgxKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gIGNvbnN0IGNvbnRlbnRUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRUYXNrcy5jbGFzc0xpc3QuYWRkKFwiY29udGVudFRhc2tzXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUYXNrcyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSXRlbUFycmF5KHByb2plY3QpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xuICBsZXQgdGFza0l0ZW1BcnJheSA9IFtdO1xuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2sgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrS2V5ID0gdGFzay5rZXk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFzay50aXRsZTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFzay5kdWVEYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBgcHJpb3JpdHkke3Rhc2sucHJpb3JpdHl9YDtcbiAgICBjb25zdCB0YXNrUHJvamVjdFRpdGxlID0gdGFzay5wcm9qZWN0VGl0bGU7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza0tleVwiLCB0YXNrS2V5KTtcbiAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFza0l0ZW1cIik7XG5cbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZChcImNoZWNrQnRuXCIsIHByaW9yaXR5Q2xhc3MpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcblxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIik7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMuaW5uZXJUZXh0ID0gdGFza1RpdGxlO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza19kZXNjcmlwdGlvblwiKTtcbiAgICBwLmlubmVyVGV4dCA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0R1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0YXNrRHVlRGF0ZTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoMyk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gICAgY29uc3QgdGFza09wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrT3B0aW9uc1wiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0VGFza1wiKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtdGFyZ2V0XCIsIFwiI3Rhc2tFZGl0TW9kYWxcIik7XG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcImVkaXRcIjtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlVGFza1wiKTtcbiAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gXCJkZWxldGVcIjtcbiAgICB0YXNrT3B0aW9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICB0YXNrT3B0aW9ucy5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tPcHRpb25zKTtcblxuICAgIHRhc2tJdGVtQXJyYXkucHVzaCh0YXNrSXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrSXRlbUFycmF5O1xufVxuXG5leHBvcnQgeyByZW5kZXJBbGxUYXNrQ29udGVudCwgZ2VuZXJhdGVUYXNrSXRlbUFycmF5IH07XG4iLCJmdW5jdGlvbiByZW5kZXJNb2RhbHMoKSB7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGNyZWF0ZVRhc2tNb2RhbCgpO1xuICBjb25zdCB0YXNrRWRpdE1vZGFsID0gY3JlYXRlVGFza0VkaXRNb2RhbCgpO1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBjcmVhdGVQcm9qZWN0TW9kYWwoKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5XCIpO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLmFjdGl2ZVwiKTtcbiAgICBtb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrTW9kYWwpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza0VkaXRNb2RhbCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RhbC10YXJnZXRdXCIpO1xuICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1tb2RhbF1cIik7XG5cbiAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldCk7XG4gICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgIH0pO1xuICB9KTtcblxuICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5jbG9zZU1vZGFsKTtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKCkge1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICB0YXNrTW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrTW9kYWxcIik7XG5cbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrVGl0bGVcIik7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIlBsYWNlaG9sZGVyXCIsIFwiVGFzayBOYW1lXCIpO1xuICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgbW9kYWxUaXRsZS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gIGNvbnN0IGNsb3NlVGFza01vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VUYXNrTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICBjbG9zZVRhc2tNb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsb3NlLW1vZGFsXCIsIFwiI3Rhc2tNb2RhbFwiKTtcbiAgY2xvc2VUYXNrTW9kYWxCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlVGFza01vZGFsQnRuKTtcbiAgdGFza01vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0SXRlbVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dEl0ZW1cIik7XG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG4gIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOlwiO1xuICBkdWVEYXRlSW5wdXQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVEYXRlXCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gIGR1ZURhdGVJbnB1dC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0SXRlbVwiKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5OlwiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tc2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIHByaW9yaXR5SGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcbiAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgcHJpb3JpdHlNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgcHJpb3JpdHlMb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dEl0ZW1cIik7XG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RcIik7XG4gIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3Q6XCI7XG4gIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNlbGVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RcIik7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWFpblwiKTtcbiAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSBcIk5vbmVcIjtcbiAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcbiAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJ0blwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2xvc2UtbW9kYWxcIiwgXCIjdGFza01vZGFsXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZF90YXNrXCIpO1xuICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9IFwiQWRkIHRhc2tcIjtcbiAgbW9kYWxCdG4uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgbW9kYWxCdG4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJ0bik7XG5cbiAgdGFza01vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgcmV0dXJuIHRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0VkaXRNb2RhbCgpIHtcbiAgY29uc3QgdGFza0VkaXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tFZGl0TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICB0YXNrRWRpdE1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0VkaXRNb2RhbFwiKTtcblxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XG5cbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tUaXRsZVwiKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiUGxhY2Vob2xkZXJcIiwgXCJUYXNrIE5hbWVcIik7XG4gIC8vIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gdGFza1RpdGxlO1xuICBtb2RhbFRpdGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcblxuICBjb25zdCBjbG9zZVRhc2tFZGl0TW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZVRhc2tFZGl0TW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICBjbG9zZVRhc2tFZGl0TW9kYWxCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1jbG9zZS1tb2RhbFwiLCBcIiN0YXNrRWRpdE1vZGFsXCIpO1xuICBjbG9zZVRhc2tFZGl0TW9kYWxCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlVGFza0VkaXRNb2RhbEJ0bik7XG4gIHRhc2tFZGl0TW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRJdGVtXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIC8vIGRlc2NyaXB0aW9uVGV4dEFyZWEuaW5uZXJUZXh0ID0gYCR7dGFza0Rlc2NyaXB0aW9ufWA7XG4gIGRlc2NyaXB0aW9uSW5wdXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0SXRlbVwiKTtcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XG4gIGR1ZURhdGVJbnB1dC5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICAvLyBkdWVEYXRlLnZhbHVlID0gdGFza0R1ZURhdGU7XG4gIGR1ZURhdGVJbnB1dC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0SXRlbVwiKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5OlwiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tc2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIHByaW9yaXR5SGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcbiAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgcHJpb3JpdHlNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgcHJpb3JpdHlMb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dEl0ZW1cIik7XG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RcIik7XG4gIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3Q6XCI7XG4gIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNlbGVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RcIik7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZWZhdWx0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWFpblwiKTtcbiAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSBcIk5vbmVcIjtcbiAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcbiAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJ0blwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2xvc2UtbW9kYWxcIiwgXCIjdGFza0VkaXRNb2RhbFwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1tb2RhbFwiKTtcbiAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJ1cGRhdGVfdGFza1wiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9IFwiVXBkYXRlIHRhc2tcIjtcbiAgbW9kYWxCdG4uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgbW9kYWxCdG4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJ0bik7XG5cbiAgdGFza0VkaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIHJldHVybiB0YXNrRWRpdE1vZGFsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIHByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RNb2RhbFwiKTtcblxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiTmV3IHByb2plY3RcIjtcbiAgbW9kYWxUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xuXG4gIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VQcm9qZWN0TW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICBjbG9zZVByb2plY3RNb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsb3NlLW1vZGFsXCIsIFwiI3Byb2plY3RNb2RhbFwiKTtcbiAgY2xvc2VQcm9qZWN0TW9kYWxCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdE1vZGFsQnRuKTtcbiAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgaW5wdXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXRJdGVtLmNsYXNzTGlzdC5hZGQoXCJpbnB1dEl0ZW1cIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lXCIpO1xuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSBcIiNcIjtcbiAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIik7XG4gIHByb2plY3RUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlSW5wdXQpO1xuICBpbnB1dEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRJdGVtKTtcblxuICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJ0blwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2xvc2UtbW9kYWxcIiwgXCIjcHJvamVjdE1vZGFsXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZF9wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gIG1vZGFsQnRuLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIG1vZGFsQnRuLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCdG4pO1xuXG4gIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIHJldHVybiBwcm9qZWN0TW9kYWw7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBpZiAobW9kYWwgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVybjtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJNb2RhbHMsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tMaXN0OiBbXSxcbiAgICBjaGlsZFByb2plY3RMaXN0OiBbXSxcbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVRhc2sodGFza0tleSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGhpcy50YXNrTGlzdFtpXTtcbiAgICAgICAgaWYgKHRhc2tJdGVtLmtleSA9PT0gdGFza0tleSkge1xuICAgICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRUYXNrKHRhc2tLZXkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRoaXMudGFza0xpc3RbaV07XG4gICAgICAgIGlmICh0YXNrSXRlbS5rZXkgPT09IHRhc2tLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdGFza0l0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZUNoaWxkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkUHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgIHRoaXMuY2hpbGRQcm9qZWN0TGlzdC5wdXNoKGNoaWxkUHJvamVjdCk7XG5cbiAgICAgIHJldHVybiBjaGlsZFByb2plY3Q7XG4gICAgfSxcbiAgICBnZXRDaGlsZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRQcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGRQcm9qZWN0ID0gdGhpcy5jaGlsZFByb2plY3RMaXN0W2ldO1xuICAgICAgICBpZiAoY2hpbGRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9qZWN0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTaWRlQmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEuaW5uZXJUZXh0ID0gXCJFcmljJ3MgXCI7XG4gIGNvbnN0IHNwZWNpYWxEZWNvcmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwZWNpYWxEZWNvcmF0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3BlY2lhbF9kZWNvcmF0aW9uXCIpO1xuICBzcGVjaWFsRGVjb3JhdGlvbi5pbm5lclRleHQgPSBcInRvZG9saXN0XCI7XG4gIGgxLmFwcGVuZENoaWxkKHNwZWNpYWxEZWNvcmF0aW9uKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoaDEpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2NvbnRlbnRcIik7XG5cbiAgY29uc3QgdGFza3NPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza3NPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc09wdGlvbnNcIik7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtdGFyZ2V0XCIsIFwiI3Rhc2tNb2RhbFwiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcblxuICBjb25zdCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFsbFRhc2tzQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJhbGxUYXNrc1wiKTtcbiAgYWxsVGFza3NCdG4uaW5uZXJUZXh0ID0gXCJBbGwgdGFza3NcIjtcbiAgY29uc3QgdG9kYXlUYXNrc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZGF5VGFza3NCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInRvZGF5VGFza3NcIik7XG4gIHRvZGF5VGFza3NCdG4uaW5uZXJUZXh0ID0gXCJUb2RheVwiO1xuICBjb25zdCBvdmVyZHVlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgb3ZlcmR1ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwib3ZlckR1ZVwiKTtcbiAgb3ZlcmR1ZUJ0bi5pbm5lclRleHQgPSBcIk92ZXJkdWVcIjtcbiAgdGFza3NPcHRpb25zLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICB0YXNrc09wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3NCdG4pO1xuICB0YXNrc09wdGlvbnMuYXBwZW5kQ2hpbGQodG9kYXlUYXNrc0J0bik7XG4gIHRhc2tzT3B0aW9ucy5hcHBlbmRDaGlsZChvdmVyZHVlQnRuKTtcbiAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NPcHRpb25zKTtcblxuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0T3B0aW9uc1wiKTtcbiAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvamVjdHNUaXRsZS5pbm5lclRleHQgPSBcIk15IFByb2plY3RzXCI7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtdGFyZ2V0XCIsIFwiI3Byb2plY3RNb2RhbFwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiQWRkIFByb2plY3RcIjtcbiAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9ucyk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cbiIsImZ1bmN0aW9uIHRhc2tzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSwga2V5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAga2V5LFxuICAgIHVwZGF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGUsXG4gICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgIHRhc2tQcm9qZWN0VGl0bGUgPSBcIm1haW5cIlxuICAgICkge1xuICAgICAgdGhpcy50aXRsZSA9IHRhc2tUaXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHRhc2tQcm9qZWN0VGl0bGU7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUsIGtleSkge1xuICBjb25zdCB0YXNrID0gdGFza3ModGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFRpdGxlLCBrZXkpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcmVuZGVyU2lkZUJhciBmcm9tIFwiLi9zaWRlQmFyXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxUYXNrQ29udGVudCwgZ2VuZXJhdGVUYXNrSXRlbUFycmF5IH0gZnJvbSBcIi4vYWxsVGFza0NvbnRlbnRcIjtcbmltcG9ydCB7IHJlbmRlck1vZGFscywgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcblxuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IG1haW5Qcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIm1haW5cIik7XG5jb25zdCB0YXNrcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlRhc2sgMSB3aXRoIEhpZ2ggcHJpb3JpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICAgIGR1ZURhdGU6IFwiMjAyNC0wNS0xMlwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICBrZXk6IFwiOTk5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDIgd2l0aCBNZWRpdW0gcHJpb3JpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICAgIGR1ZURhdGU6IFwiMjAyNC0wNS0xMlwiLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIGtleTogXCI5OTk5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUYXNrIDMgd2l0aCBMb3cgcHJpb3JpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICAgIGR1ZURhdGU6IFwiMjAyNC0wNS0xMlwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgIGtleTogXCI5OTk5OVwiLFxuICB9LFxuXTtcblxudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2soXG4gICAgdGFzay50aXRsZSxcbiAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgIHRhc2suZHVlRGF0ZSxcbiAgICB0YXNrLnByaW9yaXR5LFxuICAgIG1haW5Qcm9qZWN0LnRpdGxlLFxuICAgIHRhc2sua2V5XG4gICk7XG4gIG1haW5Qcm9qZWN0LmFkZFRhc2sodGFza0l0ZW0pO1xufSk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICByZW5kZXJTaWRlQmFyKCk7XG4gIHJlbmRlckFsbFRhc2tDb250ZW50KCk7XG4gIGdlbmVyYXRlVGFza3MobWFpblByb2plY3QpO1xuICByZW5kZXJNb2RhbHMoKTtcblxuICBzZXR1cFRhc2tCdXR0b25FdmVudHMoKTtcbiAgc2V0dXBQcm9qZWN0QnV0dG9uRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwVGFza0J1dHRvbkV2ZW50cygpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcImRpdi50YXNrc09wdGlvbnMgYnV0dG9uW2RhdGEtbW9kYWwtdGFyZ2V0XVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVQcm9qZWN0U2VsZWN0KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcImRpdi50YXNrc09wdGlvbnMgYnV0dG9uLmFsbFRhc2tzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVDb250ZW50VGl0bGUoXCJBbGwgdGFza3NcIik7XG4gICAgICBnZW5lcmF0ZVRhc2tzKG1haW5Qcm9qZWN0KTtcbiAgICB9KTtcblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRfdGFza1wiKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRvZ2dsZUJ1dHRvblN0YXRlKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUHJvamVjdEJ1dHRvbkV2ZW50cygpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkX3Byb2plY3RcIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0b2dnbGVCdXR0b25TdGF0ZSk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gIGNvbnN0IHByb2plY3RTZWxlY3RBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0I3Byb2plY3RcIik7XG4gIGlmICghcHJvamVjdFNlbGVjdEFsbCkgcmV0dXJuO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RTZWxlY3RBbGwpO1xuXG4gIHByb2plY3RTZWxlY3RBbGwuZm9yRWFjaCgocHJvamVjdFNlbGVjdCkgPT4ge1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtYWluT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtYWluT3B0aW9uLnZhbHVlID0gXCJtYWluXCI7XG4gICAgbWFpbk9wdGlvbi5pbm5lclRleHQgPSBcIk5vbmVcIjtcbiAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG1haW5PcHRpb24pO1xuICAgIG1haW5Qcm9qZWN0LmNoaWxkUHJvamVjdExpc3QuZm9yRWFjaCgoY2hpbGRQcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gY2hpbGRQcm9qZWN0LnRpdGxlO1xuICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGNoaWxkUHJvamVjdC50aXRsZTtcbiAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZF90YXNrXCIpO1xuICBpZiAoIWFkZFRhc2tCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG5cbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGFza1RpdGxlXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYSNkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZURhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5Q2xhc3NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QjcHJpb3JpdHlcIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QjcHJvamVjdFwiKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPVxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9PT0gXCJub25lXCIgPyBcIm1haW5cIiA6IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgY29uc3QgdGFza1RvQWRkID0gY3JlYXRlVGFzayhcbiAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgcHJpb3JpdHlDbGFzc0lucHV0LnZhbHVlLFxuICAgIHByb2plY3RUaXRsZSxcbiAgICBtYWluUHJvamVjdC50YXNrTGlzdC5sZW5ndGhcbiAgKTtcblxuICBtYWluUHJvamVjdC5hZGRUYXNrKHRhc2tUb0FkZCk7XG4gIGlmIChwcm9qZWN0VGl0bGUgIT09IFwibWFpblwiKSB7XG4gICAgY29uc3QgY2hpbGRQcm9qZWN0ID0gbWFpblByb2plY3QuZ2V0Q2hpbGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgY2hpbGRQcm9qZWN0LmFkZFRhc2sodGFza1RvQWRkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN0YXNrTW9kYWxcIikpO1xuICBnZW5lcmF0ZVRhc2tzKG1haW5Qcm9qZWN0KTtcbiAgdXBkYXRlQ29udGVudFRpdGxlKFwiQWxsIHRhc2tzXCIpO1xuXG4gIGNsZWFyVGFza0lucHV0cygpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRfcHJvamVjdFwiKTtcbiAgaWYgKCFhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Byb2plY3RUaXRsZVwiKTtcbiAgY3JlYXRlTmV3Q2hpbGRQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcblxuICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNwcm9qZWN0TW9kYWxcIikpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVCdXR0b25TdGF0ZShldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGlucHV0SWQgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkX3Rhc2tcIilcbiAgICA/IFwidGFza1RpdGxlXCJcbiAgICA6IFwicHJvamVjdFRpdGxlXCI7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2lucHV0SWR9YCkudmFsdWU7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgaW5wdXRWYWx1ZSAhPT0gXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0cygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Rhc2tUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYSNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVEYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdCNwcmlvcml0eVwiKS52YWx1ZSA9IFwiSGlnaFwiO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50VGl0bGUodGl0bGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb250ZW50VGl0bGUgaDFcIikuaW5uZXJUZXh0ID0gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza3MocHJvamVjdCkge1xuICBjb25zdCBjb250ZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNvbnRlbnRUYXNrc1wiKTtcbiAgY29udGVudFRhc2tzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZ2VuZXJhdGVUYXNrSXRlbUFycmF5KHByb2plY3QpLmZvckVhY2goKHRhc2tJdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnRlbnRUYXNrcy5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBwcm9qZWN0LmdldFRhc2socHJvamVjdC50YXNrTGlzdFtpbmRleF0ua2V5KTtcbiAgICBjb25zdCBjdXJyZW50VGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGRpdltkYXRhLXRhc2trZXk9XCIke2N1cnJlbnRUYXNrLmtleX1cIl0gZGl2LnRhc2tDb250ZW50YFxuICAgICk7XG5cbiAgICBpZiAoY3VycmVudFRhc2sucHJvamVjdFRpdGxlICE9PSBcIm1haW5cIikge1xuICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJvamVjdFRpdGxlXCIpO1xuICAgICAgdGFza1Byb2plY3QuaW5uZXJUZXh0ID0gYCMke2N1cnJlbnRUYXNrLnByb2plY3RUaXRsZX1gO1xuICAgICAgdGFza1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2tQcm9qZWN0ID0gcHJvamVjdC5nZXRDaGlsZFByb2plY3QoXG4gICAgICAgICAgY3VycmVudFRhc2sucHJvamVjdFRpdGxlXG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnRUaXRsZShgIyAke2N1cnJlbnRUYXNrLnByb2plY3RUaXRsZX1gKTtcbiAgICAgICAgZ2VuZXJhdGVUYXNrcyhjdXJyZW50VGFza1Byb2plY3QpO1xuICAgICAgfSk7XG4gICAgICBjdXJyZW50VGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2V0dXBUYXNrSW50ZXJhY3Rpb25FdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBUYXNrSW50ZXJhY3Rpb25FdmVudHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tCdG5cIikuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlVGFza0NvbXBsZXRpb24oYnV0dG9uLCBpbmRleCkpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnRhc2tJdGVtXCIpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3Qga2V5SW5kZXggPSBpdGVtLmRhdGFzZXQudGFza2tleTtcbiAgICBjb25zdCBpdGVtQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgZGl2W2RhdGEtdGFza0tleT1cIiR7a2V5SW5kZXh9XCJdIC50YXNrT3B0aW9ucyA+IGJ1dHRvbmBcbiAgICApO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PlxuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShpdGVtQnRucywgdHJ1ZSlcbiAgICApO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cbiAgICAgIHRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoaXRlbUJ0bnMsIGZhbHNlKVxuICAgICk7XG4gIH0pO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYudGFza09wdGlvbnMgYnV0dG9uLmVkaXRUYXNrXCIpXG4gICAgLmZvckVhY2goKGVkaXRUYXNrQnRuKSA9PiB7XG4gICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgb3BlbkVkaXRUYXNrTW9kYWwoZWRpdFRhc2tCdG4pXG4gICAgICApO1xuICAgIH0pO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYudGFza09wdGlvbnMgYnV0dG9uLnJlbW92ZVRhc2tcIilcbiAgICAuZm9yRWFjaCgoZGVsZXRlVGFza0J0biwgaW5kZXgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbW92ZVRhc2soZGVsZXRlVGFza0J0bikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGlvbihidXR0b24sIGluZGV4KSB7XG4gIGNvbnN0IGtleUluZGV4ID0gYnV0dG9uLmNsb3Nlc3QoXCJkaXYudGFza0l0ZW1cIikuZGF0YXNldC50YXNra2V5O1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBkaXZbZGF0YS10YXNrS2V5PVwiJHtrZXlJbmRleH1cIl0gaDNgXG4gICk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FuY2VsbGVkXCIpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImNhbmNlbGxlZFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShidXR0b25zLCBzaG93KSB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dCdG5cIiwgc2hvdykpO1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdFRhc2tNb2RhbChlZGl0VGFza0J0bikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0VkaXRNb2RhbFwiKTtcbiAgb3Blbk1vZGFsKG1vZGFsKTtcblxuICBjb25zdCB0YXNrSXRlbURpdiA9IGVkaXRUYXNrQnRuLmNsb3Nlc3QoXCJbZGF0YS10YXNra2V5XVwiKTtcbiAgaWYgKCF0YXNrSXRlbURpdikgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2tLZXkgPSB0YXNrSXRlbURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2trZXlcIik7XG4gIGNvbnN0IHRhc2tJdGVtID0gbWFpblByb2plY3QuZ2V0VGFzayh0YXNrS2V5KTtcbiAgaWYgKCF0YXNrSXRlbSkgcmV0dXJuO1xuXG4gIHBvcHVsYXRlUHJvamVjdFNlbGVjdCgpOyAvLyBFbnN1cmUgdGhlIHByb2plY3Qgc2VsZWN0IG9wdGlvbnMgYXJlIHVwZGF0ZWRcbiAgcG9wdWxhdGVUYXNrTW9kYWwodGFza0l0ZW0pO1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnVwZGF0ZV90YXNrLmFjdGl2ZVwiKTtcbiAgdXBkYXRlVGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVXBkYXRlVGFzayk7XG4gIHVwZGF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZVVwZGF0ZVRhc2sodGFza0l0ZW0pLCB7XG4gICAgb25jZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza01vZGFsKHRhc2tJdGVtKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJkaXYjdGFza0VkaXRNb2RhbCBkaXYubW9kYWwtaGVhZGVyIGRpdi5tb2RhbC10aXRsZSBpbnB1dCN0YXNrVGl0bGVcIlxuICApLnZhbHVlID0gdGFza0l0ZW0udGl0bGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJkaXYjdGFza0VkaXRNb2RhbCBkaXYubW9kYWwtY29udGVudCBkaXYuaW5wdXRJdGVtIHRleHRhcmVhI2Rlc2NyaXB0aW9uXCJcbiAgKS52YWx1ZSA9IHRhc2tJdGVtLmRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZGl2I3Rhc2tFZGl0TW9kYWwgZGl2Lm1vZGFsLWNvbnRlbnQgZGl2LmlucHV0SXRlbSBpbnB1dCNkdWVEYXRlXCJcbiAgKS52YWx1ZSA9IHRhc2tJdGVtLmR1ZURhdGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJkaXYjdGFza0VkaXRNb2RhbCBkaXYubW9kYWwtY29udGVudCBkaXYuaW5wdXRJdGVtIHNlbGVjdCNwcmlvcml0eVwiXG4gICkudmFsdWUgPSB0YXNrSXRlbS5wcmlvcml0eTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdiN0YXNrRWRpdE1vZGFsIGRpdi5tb2RhbC1jb250ZW50IGRpdi5pbnB1dEl0ZW0gc2VsZWN0I3Byb2plY3RcIlxuICApLnZhbHVlID0gdGFza0l0ZW0ucHJvamVjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVUYXNrKHRhc2tJdGVtKSB7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdiN0YXNrRWRpdE1vZGFsIGRpdi5tb2RhbC1oZWFkZXIgZGl2Lm1vZGFsLXRpdGxlIGlucHV0I3Rhc2tUaXRsZVwiXG4gICkudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdiN0YXNrRWRpdE1vZGFsIGRpdi5tb2RhbC1jb250ZW50IGRpdi5pbnB1dEl0ZW0gdGV4dGFyZWEjZGVzY3JpcHRpb25cIlxuICApLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZGl2I3Rhc2tFZGl0TW9kYWwgZGl2Lm1vZGFsLWNvbnRlbnQgZGl2LmlucHV0SXRlbSBpbnB1dCNkdWVEYXRlXCJcbiAgKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHlDbGFzc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdiN0YXNrRWRpdE1vZGFsIGRpdi5tb2RhbC1jb250ZW50IGRpdi5pbnB1dEl0ZW0gc2VsZWN0I3ByaW9yaXR5XCJcbiAgKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdiN0YXNrRWRpdE1vZGFsIGRpdi5tb2RhbC1jb250ZW50IGRpdi5pbnB1dEl0ZW0gc2VsZWN0I3Byb2plY3RcIlxuICApLnZhbHVlO1xuICBjb25zdCBvbGRQcm9qZWN0ID0gdGFza0l0ZW0ucHJvamVjdFRpdGxlO1xuXG4gIHRhc2tJdGVtLnVwZGF0ZVRhc2soXG4gICAgdGFza1RpdGxlSW5wdXQsXG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5Q2xhc3NJbnB1dCxcbiAgICBwcm9qZWN0SW5wdXRcbiAgKTtcblxuICBpZiAob2xkUHJvamVjdCAhPT0gXCJtYWluXCIgJiYgcHJvamVjdElucHV0ICE9PSBcIm1haW5cIikge1xuICAgIG1haW5Qcm9qZWN0LmdldENoaWxkUHJvamVjdChvbGRQcm9qZWN0KS5yZW1vdmVUYXNrKHRhc2tJdGVtLmtleSk7XG4gICAgbWFpblByb2plY3QuZ2V0Q2hpbGRQcm9qZWN0KHByb2plY3RJbnB1dCkuYWRkVGFzayh0YXNrSXRlbSk7XG4gIH0gZWxzZSBpZiAob2xkUHJvamVjdCA9PT0gXCJtYWluXCIgJiYgcHJvamVjdElucHV0ICE9PSBvbGRQcm9qZWN0KSB7XG4gICAgbWFpblByb2plY3QuZ2V0Q2hpbGRQcm9qZWN0KHByb2plY3RJbnB1dCkuYWRkVGFzayh0YXNrSXRlbSk7XG4gIH0gZWxzZSBpZiAob2xkUHJvamVjdCAhPT0gXCJtYWluXCIgJiYgcHJvamVjdElucHV0ID09PSBcIm1haW5cIikge1xuICAgIG1haW5Qcm9qZWN0LmdldENoaWxkUHJvamVjdChvbGRQcm9qZWN0KS5yZW1vdmVUYXNrKHRhc2tJdGVtLmtleSk7XG4gIH1cblxuICBnZW5lcmF0ZVRhc2tzKG1haW5Qcm9qZWN0KTtcbiAgY2xvc2VNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tFZGl0TW9kYWxcIikpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGRlbGV0ZVRhc2tCdG4pIHtcbiAgY29uc3QgdGFza0l0ZW1EaXYgPSBkZWxldGVUYXNrQnRuLmNsb3Nlc3QoXCJbZGF0YS10YXNra2V5XVwiKTtcbiAgaWYgKCF0YXNrSXRlbURpdikgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2tLZXkgPSB0YXNrSXRlbURpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2trZXlcIik7XG4gIG1haW5Qcm9qZWN0LnJlbW92ZVRhc2sodGFza0tleSk7XG4gIHRhc2tJdGVtRGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdDaGlsZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBtYWluUHJvamVjdC5jcmVhdGVDaGlsZFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgcHJvamVjdEJ0bi5pZCA9IGAjJHtwcm9qZWN0VGl0bGV9YDtcbiAgcHJvamVjdEJ0bi5pbm5lclRleHQgPSBgIyAke3Byb2plY3RUaXRsZX1gO1xuXG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVDb250ZW50VGl0bGUoYCMgJHtwcm9qZWN0VGl0bGV9YCk7XG4gICAgZ2VuZXJhdGVUYXNrcyhuZXdQcm9qZWN0KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5wcm9qZWN0T3B0aW9uc1wiKS5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmluaXRpYWxpemVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=