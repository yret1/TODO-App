/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/render */ \"./src/logic/render.js\");\n/* harmony import */ var _logic_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/tasks */ \"./src/logic/tasks.js\");\n/* harmony import */ var _logic_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/menu */ \"./src/logic/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_logic_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_logic_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_logic_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\r\n\r\n\r\nlet button = document.querySelector('.add-task');\r\n\r\nbutton.addEventListener('click', (0,_logic_tasks__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(\"Today\", \"Work\", \"Earn Money\", \"High\", \"active\"));\r\nconsole.log(\"Hello from index.js\")\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/logic/menu.js":
/*!***************************!*\
  !*** ./src/logic/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n\r\n    const navWrapper = document.querySelector('.nav-wrapper');\r\n\r\n    const header = document.createElement('h2');\r\n    header.classList.add('header');\r\n    header.textContent = \"My TODO List\";\r\n    navWrapper.appendChild(header);\r\n\r\n\r\n    const filterList = document.createElement('ul');\r\n    filterList.classList.add('filter-list');\r\n    navWrapper.appendChild(filterList);\r\n\r\n\r\n    const filterOptions = [\"Work\", \"Social\", \"Health\", \"Finance\", \"All Tasks\"];\r\n\r\n\r\n    for (let i = 0; i < filterOptions.length; i++) {\r\n\r\n        let filter = document.createElement('li');\r\n        let filterText = document.createElement('p');\r\n        let filterIcon = document.createElement('div');\r\n        filter.classList.add('filter');\r\n        filterText.textContent = filterOptions[i];\r\n        filterList.appendChild(filter);\r\n        filter.appendChild(filterText);\r\n        filter.appendChild(filterIcon);\r\n\r\n        if (filterText.textContent === \"All Tasks\"){\r\n            filter.id = \"all\";\r\n        }else if (filterText.textContent === \"Work\"){\r\n            filter.id = \"work\";\r\n        }else if (filterText.textContent === \"Social\"){\r\n            filter.id = \"social\";\r\n        }else if (filterText.textContent === \"Health\"){\r\n            filter.id = \"health\";\r\n        }else if (filterText.textContent === \"Finance\"){\r\n            filter.id = \"finance\";\r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n    const addTask = document.createElement('button');\r\n    addTask.classList.add('add-task');\r\n    addTask.textContent = \"Add Task\";\r\n    navWrapper.appendChild(addTask);\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://todo-app/./src/logic/menu.js?");

/***/ }),

/***/ "./src/logic/render.js":
/*!*****************************!*\
  !*** ./src/logic/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet body = document.querySelector('body');\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst render = () => {\r\n\r\n    let main = document.createElement('main');\r\n    main.classList.add('main');\r\n    body.appendChild(main);\r\n\r\n\r\n    let wrapper = document.createElement(\"section\");\r\n    wrapper.classList.add('todo-wrapper');\r\n    main.appendChild(wrapper);\r\n    wrapper.style.display = \"grid\";\r\n\r\n    let navWrapper = document.createElement(\"section\");\r\n    navWrapper.classList.add('nav-wrapper');\r\n    wrapper.appendChild(navWrapper);\r\n\r\n    let taskWrapper = document.createElement(\"section\");\r\n    taskWrapper.classList.add('task-wrapper');\r\n    wrapper.appendChild(taskWrapper);\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-app/./src/logic/render.js?");

/***/ }),

/***/ "./src/logic/tasks.js":
/*!****************************!*\
  !*** ./src/logic/tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   taskFactory: () => (/* binding */ taskFactory),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/logic/menu.js\");\n\r\n\r\nlet activeTasks = [];\r\nlet completedTasks = [];\r\n\r\nfunction tasks() {\r\n\r\n    let taskWrapper = document.querySelector('.task-wrapper');\r\n\r\n    let taskHeader = document.createElement('div');\r\n    taskHeader.classList.add('task-header');\r\n    taskWrapper.appendChild(taskHeader);\r\n\r\n    let taskHeaderInfo = document.createElement(\"ul\");\r\n    taskHeaderInfo.classList.add('task-header-info');\r\n    taskHeader.appendChild(taskHeaderInfo);\r\n\r\n    let headerContent = [\"Title\", \"Description\", \"Date\", \"Priority\", \"Status\", \"Edit\"];\r\n\r\n    for (let j = 0; j < headerContent.length; j++) {\r\n        let taskHeaderItem = document.createElement(\"li\");\r\n        taskHeaderItem.classList.add('task-header-item');\r\n        taskHeaderItem.innerText = headerContent[j];\r\n        taskHeaderInfo.appendChild(taskHeaderItem);\r\n        console.log(headerContent[j]);\r\n    }\r\n\r\n\r\n\r\n    for(let i = 0; i < activeTasks.length; i++) {\r\n\r\n        let task = document.createElement('div');\r\n        task.classList.add('task');\r\n        taskWrapper.appendChild(task);\r\n\r\n        let taskTitle = document.createElement('h3');\r\n        taskTitle.classList.add('task-title');\r\n        taskTitle.textContent = activeTasks[i].title;\r\n        task.appendChild(taskTitle);\r\n\r\n        let taskDescription = document.createElement('p');\r\n        taskDescription.classList.add('task-description');\r\n        taskDescription.textContent = activeTasks[i].description;\r\n        task.appendChild(taskDescription);\r\n\r\n        let taskDate = document.createElement('p');\r\n        taskDate.classList.add('task-date');\r\n        taskDate.textContent = activeTasks[i].date;\r\n        task.appendChild(taskDate);\r\n\r\n        let taskPriority = document.createElement('p');\r\n        taskPriority.classList.add('task-priority');\r\n        taskPriority.textContent = activeTasks[i].priority;\r\n        task.appendChild(taskPriority);\r\n\r\n        let taskStatus = document.createElement('p');\r\n        taskStatus.classList.add('task-status');\r\n        taskStatus.textContent = activeTasks[i].status;\r\n        task.appendChild(taskStatus);\r\n\r\n        let taskKey = document.createElement('p');\r\n        taskKey.classList.add('task-key');\r\n        taskKey.textContent = activeTasks[i].key;\r\n        task.appendChild(taskKey);\r\n\r\n        let taskCompleted = document.createElement('button');\r\n        taskCompleted.classList.add('task-completed');\r\n        taskCompleted.textContent = \"Completed\";\r\n        task.appendChild(taskCompleted);\r\n\r\n        let taskEdit = document.createElement('button');\r\n        taskEdit.classList.add('task-edit');\r\n        taskEdit.textContent = \"Edit\";\r\n        task.appendChild(taskEdit);\r\n\r\n        let taskDelete = document.createElement('button');\r\n        taskDelete.classList.add('task-delete');\r\n        taskDelete.textContent = \"Delete\";\r\n        task.appendChild(taskDelete);\r\n\r\n\r\n        if(activeTasks[0].title ===\"Work\"){\r\n            task.id = \"work\";\r\n        }else if(activeTasks[0].title === \"Health\"){\r\n            task.id = \"health\";\r\n        }else if(activeTasks[0].title === \"Finance\"){\r\n            task.id = \"finance\";\r\n        }else if(activeTasks[0].title === \"Social\"){\r\n            task.id = \"social\";\r\n        }\r\n    }\r\n\r\n\r\n\r\n    \r\n}\r\n\r\n\r\n\r\n\r\nfunction newTask () {\r\n\r\n    let newTaskWrapper = document.createElement(\"section\");\r\n    newTaskWrapper.classList.add('new-task-wrapper');\r\n    document.body.appendChild(newTaskWrapper);\r\n    newTaskWrapper.style.display = \"flex\";\r\n    newTaskWrapper.style.position = \"absolute\";\r\n}\r\n\r\n\r\n\r\n\r\nfunction taskFactory (date, title, description, priority, status) {\r\n\r\n    let task = {date, title, description, priority, status};\r\n\r\n    taskTracker(task);\r\n\r\n}\r\n\r\nfunction taskTracker (task) {\r\n    \r\n        if (task.status === \"active\") {\r\n            activeTasks.push(task);\r\n        } else if (task.status === \"completed\") {\r\n            completedTasks.push(task);\r\n        }\r\n\r\n\r\n        console.log(activeTasks);\r\n\r\n    \r\n        console.log(activeTasks);\r\n        console.log(completedTasks);\r\n\r\n\r\n        return task;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\ntaskFactory(\"Today\", \"Work\", \"Earn Money\", \"High\", \"active\");\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-app/./src/logic/tasks.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;