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

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web/./src/scss/index.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/index.scss */ \"./src/scss/index.scss\");\n\n\n$(function(){\n\n  var selectYear = $('#selectYear');\n  var selectMonth = $('#selectMonth');\n  var selectDay = $('#selectDay');\n\n  var date = new Date();\n  var minYear = date.getFullYear() - 100;\n  var maxYear = date.getFullYear();\n  var minMonth = 1;\n  var maxMonth = 12;\n  var minDay = 1;\n  var maxDay = 31;\n  \n  var yearElements = ``;\n  var monthElements = ``;\n  var dayElements = ``;\n\n  while ( maxYear >= minYear ){\n    yearElements += `\n      <option value=\"${maxYear}\">${maxYear}</option>\n    `;\n    maxYear--;\n  }\n\n  while ( minMonth <= maxMonth ){\n    monthElements += `\n      <option value=\"${minMonth}\">${minMonth}</option>\n    `;\n    minMonth++;\n  }\n\n  while ( minDay <= maxDay ){\n    dayElements += `\n      <option value=\"${minDay}\">${minDay}</option>\n    `;\n    minDay++;\n  }\n\n  selectYear.empty().append(yearElements);\n  selectMonth.empty().append(monthElements);\n  selectDay.empty().append(dayElements);\n  \n  $('.link-basic').on('click', function(){\n    var birthStr = `${selectYear.val()}/${selectMonth.val()}/${selectDay.val()}`\n    var age = getAge(birthStr);\n    console.log(age);\n    \n    if(age >= 18){\n      location.href = 'home.html';\n    }else{\n      $('#ageModal').modal('show');\n    }\n\n    return false;\n  });\n\n  $('.link-back').on('click', function(){\n    $('#ageModal').modal('hide');\n    return false;\n  });\n\n  function getAge(dateString) { \n    var today = new Date(); \n    var birthDate = new Date(dateString); \n    var age = today.getFullYear() - birthDate.getFullYear(); \n    var m = today.getMonth() - birthDate.getMonth(); \n    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { \n     age--; \n    } \n    return age; \n  }\n});\n\n//# sourceURL=webpack://web/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;