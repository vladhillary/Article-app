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

/***/ "./scripts/fireBase.js":
/*!*****************************!*\
  !*** ./scripts/fireBase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig),\n/* harmony export */   \"fireBaseInit\": () => (/* binding */ fireBaseInit)\n/* harmony export */ });\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE\",\n  authDomain: \"leverxangular2021.firebaseapp.com\",\n  projectId: \"leverxangular2021\",\n  storageBucket: \"leverxangular2021.appspot.com\",\n  messagingSenderId: \"332942002633\",\n  appId: \"1:332942002633:web:02810808ceb15f2407c018\"\n};\nvar fireBaseInit = function fireBaseInit() {\n  firebase.initializeApp(firebaseConfig);\n};\n\n//# sourceURL=webpack://leverxangular2021/./scripts/fireBase.js?");

/***/ }),

/***/ "./scripts/singIn.js":
/*!***************************!*\
  !*** ./scripts/singIn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBase.js */ \"./scripts/fireBase.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n(0,_fireBase_js__WEBPACK_IMPORTED_MODULE_0__.fireBaseInit)();\nvar logoBackHome = document.querySelector('.logo');\nconsole.log(_typeof(logoBackHome));\n\nvar backToHome = function backToHome() {\n  window.location.href = './../index.html';\n};\n\nlogoBackHome.addEventListener('click', backToHome);\nvar checkbox = document.querySelector(\"input[type='checkbox']\");\n\nvar deleteWarningAcceptPolicy = function deleteWarningAcceptPolicy() {\n  var _document$querySelect;\n\n  (_document$querySelect = document.querySelector('.warning_policy')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();\n};\n\ncheckbox.addEventListener('click', deleteWarningAcceptPolicy);\nvar provider = new firebase.auth.GoogleAuthProvider();\n\nvar authWithGoogle = function authWithGoogle() {\n  firebase.auth().signInWithPopup(provider).then(function (res) {\n    var activeUserInfo = [];\n    var userInformation = {\n      displayName: res.user.displayName,\n      email: res.user.email,\n      photoURL: res.user.photoURL,\n      accessToken: res.credential.accessToken\n    };\n    activeUserInfo.push(userInformation);\n    window.localStorage.setItem('activeUser', JSON.stringify(activeUserInfo));\n    window.location.href = './../index.html';\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar checkMarkCheckBox = function checkMarkCheckBox() {\n  if (document.querySelector('.warning_policy')) return;\n  var warning = document.createElement('div');\n  warning.setAttribute('class', 'warning_policy');\n  warning.textContent = 'Accept to our Terms of Use and Privacy Policy';\n  var acceptTerms = document.querySelector('.sing_ing_wrapper');\n  acceptTerms.append(warning);\n};\n\nvar singInBtn = document.querySelector('.sing_in_btn');\nsingInBtn.addEventListener('click', function () {\n  if (!checkbox.checked) {\n    checkMarkCheckBox();\n    return;\n  }\n\n  authWithGoogle();\n});\n\n//# sourceURL=webpack://leverxangular2021/./scripts/singIn.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/singIn.js");
/******/ 	
/******/ })()
;