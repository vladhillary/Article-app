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

/***/ "./scripts/article.js":
/*!****************************!*\
  !*** ./scripts/article.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBase.js */ \"./scripts/fireBase.js\");\n\n(0,_fireBase_js__WEBPACK_IMPORTED_MODULE_0__.fireBaseInit)();\nvar logoBackHome = document.querySelector('.logo');\n\nvar backToHome = function backToHome() {\n  window.location.href = './../index.html';\n};\n\nlogoBackHome.addEventListener('click', backToHome);\n\nvar showArticleTags = function showArticleTags() {\n  var tagsListEl = document.querySelector('.tags_article');\n  var tagsListArray = ['Angular', 'Programmer'];\n  var btnArray = tagsListArray.map(function (el) {\n    var btn = document.createElement('button');\n    btn.classList.add('tags_article_btn');\n    btn.textContent = el;\n    return btn;\n  });\n  btnArray.forEach(function (item) {\n    return tagsListEl.append(item);\n  });\n};\n\nshowArticleTags();\nvar headerPanelBtn = document.querySelector('.header_panel_btn');\nvar userBtn = document.createElement('button');\nuserBtn.setAttribute('class', 'create_post');\nuserBtn.textContent = 'Sing in';\nheaderPanelBtn.append(userBtn);\n\nvar logOut = function logOut() {\n  firebase.auth().signOut().then(function () {\n    window.localStorage.removeItem('activeUser');\n    window.location.href = './article.html';\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar showForActiveUser = function showForActiveUser() {\n  if (window.localStorage.getItem('activeUser')) {\n    var logOutBtnWrapper = headerPanelBtn.cloneNode(true);\n    var logOutBtn = logOutBtnWrapper.querySelector('.create_post');\n    logOutBtn.textContent = 'Logout';\n    logOutBtn.addEventListener('click', logOut);\n    userBtn.textContent = 'Create a Post';\n    var activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'));\n    var headerPanelUser = document.createElement('div');\n    headerPanelUser.setAttribute('class', 'header_panel_user');\n    var userLogo = document.createElement('img');\n    userLogo.setAttribute('alt', 'user logo');\n    userLogo.setAttribute('src', activeUserInfo[0].photoURL);\n    headerPanelUser.append(userLogo);\n    headerPanelBtn.after(headerPanelUser);\n    headerPanelBtn.after(logOutBtnWrapper);\n    userBtn.addEventListener('click', function () {\n      window.location.href = '/pages/createArticle.html';\n    });\n  } else {\n    userBtn.addEventListener('click', function () {\n      window.location.href = '/pages/singIn.html';\n    });\n  }\n};\n\nshowForActiveUser();\n\nvar closePreview = function closePreview() {\n  window.history.back();\n};\n\nvar showCurrentArticle = function showCurrentArticle() {\n  var currentTitle = document.querySelector('.article_title');\n  var authorName = document.querySelector('.author_info_name');\n  var dateOfWriting = document.querySelector('.author_info_date');\n  var currentImg = document.querySelector(\".article_pic_wrapper img[alt='article picture']\");\n  var contentBlock = document.querySelector('.content_block');\n  var articleTags = document.querySelector('.tags_article');\n  articleTags.innerHTML = '';\n\n  if (window.localStorage.getItem('preview')) {\n    var previewContent = JSON.parse(window.localStorage.getItem('preview'));\n    var currentHrefImg = JSON.parse(window.localStorage.getItem('srcImgFromFile'));\n    currentImg.setAttribute('src', currentHrefImg);\n    currentTitle.textContent = previewContent.title;\n    authorName.textContent = previewContent.user;\n    dateOfWriting.textContent = previewContent.date;\n    contentBlock.innerHTML = '';\n    var amoutContent = previewContent.content;\n    amoutContent.forEach(function (element) {\n      var subtitle = document.createElement('h5');\n      subtitle.textContent = element.subtitle;\n      contentBlock.append(subtitle);\n      var paragraph = document.createElement('p');\n      paragraph.textContent = element.text;\n      contentBlock.append(paragraph);\n    });\n    var tags = previewContent.tags;\n    tags.forEach(function (el) {\n      var btn = document.createElement('button');\n      btn.classList.add('tags_article_btn');\n      btn.textContent = el;\n      articleTags.append(btn);\n    });\n    var closePreviewEl = document.createElement('img');\n    closePreviewEl.setAttribute('src', '../img/close_preview.png');\n    closePreviewEl.setAttribute('alt', 'close preview');\n    closePreviewEl.classList.add('close_preview');\n    closePreviewEl.addEventListener('click', closePreview);\n    var body = document.querySelector('body');\n    body.append(closePreviewEl);\n    var createPost = document.querySelectorAll('.create_post');\n    createPost.forEach(function (el) {\n      el.setAttribute('disabled', 'disabled');\n    });\n    logoBackHome.removeEventListener('click', backToHome);\n    var home_link = document.querySelector(\".home_link\");\n    home_link.style.cssText = \"pointer-events: none\";\n  }\n\n  if (window.localStorage.getItem('currentArticle')) {\n    var currentContent = JSON.parse(window.localStorage.getItem('currentArticle'));\n    currentImg.setAttribute('src', currentContent.img);\n    currentTitle.textContent = currentContent.title;\n    authorName.textContent = currentContent.user;\n    dateOfWriting.textContent = currentContent.date;\n    contentBlock.innerHTML = '';\n    var _amoutContent = currentContent.content;\n\n    _amoutContent.forEach(function (element) {\n      var subtitle = document.createElement('h5');\n      subtitle.textContent = element.subtitle;\n      contentBlock.append(subtitle);\n      var paragraph = document.createElement('p');\n      paragraph.textContent = element.text;\n      contentBlock.append(paragraph);\n    });\n\n    var _tags = currentContent.tags;\n\n    _tags.forEach(function (el) {\n      var btn = document.createElement('button');\n      btn.classList.add('tags_article_btn');\n      btn.textContent = el;\n      articleTags.append(btn);\n    });\n\n    window.localStorage.removeItem('currentArticle');\n  }\n};\n\nshowCurrentArticle();\n\n//# sourceURL=webpack://leverxangular2021/./scripts/article.js?");

/***/ }),

/***/ "./scripts/fireBase.js":
/*!*****************************!*\
  !*** ./scripts/fireBase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig),\n/* harmony export */   \"fireBaseInit\": () => (/* binding */ fireBaseInit)\n/* harmony export */ });\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE\",\n  authDomain: \"leverxangular2021.firebaseapp.com\",\n  projectId: \"leverxangular2021\",\n  storageBucket: \"leverxangular2021.appspot.com\",\n  messagingSenderId: \"332942002633\",\n  appId: \"1:332942002633:web:02810808ceb15f2407c018\"\n};\nvar fireBaseInit = function fireBaseInit() {\n  firebase.initializeApp(firebaseConfig);\n};\n\n//# sourceURL=webpack://leverxangular2021/./scripts/fireBase.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/article.js");
/******/ 	
/******/ })()
;