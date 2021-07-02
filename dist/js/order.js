/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/order.scss":
/*!*****************************!*\
  !*** ./src/scss/order.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web/./src/scss/order.scss?");

/***/ }),

/***/ "./src/js/components/global.js":
/*!*************************************!*\
  !*** ./src/js/components/global.js ***!
  \*************************************/
/***/ (() => {

eval("$(function(){\n  $(window).on('resize', onResize);\n  onResize();\n\n  function onResize(){\n    let windowWidth = $(window).innerWidth();\n\n    if(windowWidth > 767){\n      $('header nav').removeClass('open');\n      $('header .hamburger').removeClass('open');\n    }\n  }\n\n  $('.hamburger').on('click', function(){\n    $('header nav').toggleClass('open');\n    $('header .hamburger').toggleClass('open');\n  });\n\n  // 訂閱成功\n  $('#subscribeModal .link-home').on('click', function(){\n    $('#subscribeModal').modal('hide');\n    location.href = 'home.html';\n    return false;\n  });\n});\n\n//# sourceURL=webpack://web/./src/js/components/global.js?");

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_order_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/order.scss */ \"./src/scss/order.scss\");\n/* harmony import */ var _js_components_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/global.js */ \"./src/js/components/global.js\");\n/* harmony import */ var _js_components_global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_global_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n$(function (){\n\n  // $('#repeatModal').modal('show');\n  $('body').on('keydown', function(e){\n    var code = e.keyCode || e.which;\n\n    if(code == 49) {\n      $('#successModal').modal('show');\n    }\n    if(code == 50) {\n      $('#repeatModal').modal('show');\n    }\n    if(code == 51) {\n      $('#successWaitModal').modal('show');\n    }\n    if(code == 52) {\n      $('#repeatWaitModal').modal('show');\n    }\n    if(code == 53) {\n      $('#changeWaitModal').modal('show');\n    }\n  });\n\n  $('.link-terms').on('click', function(){\n    $('#agreeModal').modal('show');\n    return false;\n  });\n\n  $('.link-privacy').on('click', function(){\n    $('#agreeModal').modal('show');\n    return false;\n  });\n\n  // 重要聲明\n  $('.link-agree').on('click', function(){\n    $('#agreeModal').modal('hide');\n    return false;\n  });\n\n  // 填單成功\n  $('#successModal .link-home').on('click', function(){\n    $('#successModal').modal('hide');\n    location.href = 'home.html';\n    return false;\n  });\n\n  // 重複填單\n  $('#repeatModal .link-home').on('click', function(){\n    $('#repeatModal').modal('hide');\n    location.href = 'home.html';\n    return false;\n  });\n\n  // 加入等候名單成功\n  $('#successWaitModal .link-home').on('click', function(){\n    $('#successWaitModal').modal('hide');\n    location.href = 'home.html';\n    return false;\n  });\n\n  // 重複加入等候名單\n  $('#repeatWaitModal .link-home').on('click', function(){\n    $('#repeatWaitModal').modal('hide');\n    location.href = 'home.html';\n    return false;\n  });\n\n  // 送出後截止是否轉為等候名單-不加入\n  $('#changeWaitModal .link-not-join').on('click', function(){\n    $('#changeWaitModal').modal('hide');\n    return false;\n  });\n\n  // 送出後截止是否轉為等候名單-加入\n  $('#changeWaitModal .link-join').on('click', function(){\n    $('#changeWaitModal').modal('hide');\n    return false;\n  });\n\n});\n\n\n//# sourceURL=webpack://web/./src/js/order.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/order.js");
/******/ 	
/******/ })()
;