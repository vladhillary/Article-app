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

/***/ "./scripts/main_screen.js":
/*!********************************!*\
  !*** ./scripts/main_screen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBase.js */ \"./scripts/fireBase.js\");\n\n(0,_fireBase_js__WEBPACK_IMPORTED_MODULE_0__.fireBaseInit)();\nvar tagsListEl = document.querySelector('.tags');\nvar tagsListArray = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps'];\nvar btnArray = tagsListArray.map(function (el) {\n  var btn = document.createElement('button');\n  btn.classList.add('tags_btn');\n  btn.textContent = el;\n  return btn;\n});\nbtnArray.forEach(function (item) {\n  tagsListEl.append(item);\n});\nvar articleItem = document.querySelectorAll('.item');\narticleItem.forEach(function (el) {\n  el.addEventListener('click', function () {\n    el.style.cssText = \"box-shadow: 0px 12px 24px rgba(227, 232, 240, 0.5)\";\n    window.location.href = 'pages/article.html';\n  });\n});\nvar headerPanelBtn = document.querySelector('.header_panel_btn');\nvar userBtn = document.createElement('button');\nuserBtn.setAttribute('class', 'create_post');\nuserBtn.textContent = 'Sing in';\nheaderPanelBtn.append(userBtn);\n\nvar logOut = function logOut() {\n  firebase.auth().signOut().then(function () {\n    window.localStorage.removeItem('activeUser');\n    window.location.href = './../index.html';\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nif (window.localStorage.getItem('activeUser')) {\n  var logOutBtnWrapper = headerPanelBtn.cloneNode(true);\n  var logOutBtn = logOutBtnWrapper.querySelector('.create_post');\n  logOutBtn.textContent = 'Logout';\n  logOutBtn.addEventListener('click', logOut);\n  userBtn.textContent = 'Create a Post';\n  var activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'));\n  var headerPanelUser = document.createElement('div');\n  headerPanelUser.setAttribute('class', 'header_panel_user');\n  var userLogo = document.createElement('img');\n  userLogo.setAttribute('alt', 'user logo');\n  userLogo.setAttribute('src', activeUserInfo[0].photoURL);\n  headerPanelUser.append(userLogo);\n  headerPanelBtn.after(headerPanelUser);\n  headerPanelBtn.after(logOutBtnWrapper);\n  userBtn.addEventListener('click', function () {\n    window.location.href = '/pages/createArticle.html';\n  });\n} else {\n  userBtn.addEventListener('click', function () {\n    window.location.href = '/pages/singIn.html';\n  });\n}\n\nvar firestoreDatabase = firebase.firestore();\nvar articleArray = [];\nvar selectedTagArray = [];\n\nvar getDataFromFirestore = function getDataFromFirestore() {\n  articleArray.splice(0, articleArray.length);\n  firestoreDatabase.collection('article').get().then(function (querySnapshot) {\n    querySnapshot.forEach(function (doc) {\n      articleArray.push(doc.data());\n    });\n    renderItemOfArticle();\n  });\n};\n\ngetDataFromFirestore();\n\nvar getDataForArticle = function getDataForArticle(id) {\n  firestoreDatabase.collection('article').get().then(function (querySnapshot) {\n    querySnapshot.forEach(function (doc) {\n      if (doc.data().id == id) {\n        window.localStorage.setItem('currentArticle', JSON.stringify(doc.data()));\n        window.location.href = '../pages/article.html';\n      }\n    });\n  });\n};\n\nvar clickHandler = function clickHandler(event) {\n  if (event.target.id) getDataForArticle(event.target.id);\n\n  if (event.target.classList.contains('item_subtitle')) {\n    var IdOfArticle = event.target.parentElement.parentElement.id;\n    getDataForArticle(IdOfArticle);\n  }\n\n  if (event.target.hasAttribute('src')) {\n    var _IdOfArticle = event.target.parentElement.id;\n    getDataForArticle(_IdOfArticle);\n  }\n\n  if (event.target.classList.contains('item_title')) {\n    var _IdOfArticle2 = event.target.parentElement.parentElement.id;\n    getDataForArticle(_IdOfArticle2);\n  }\n\n  if (event.target.classList.contains('title_wrapper')) {\n    var _IdOfArticle3 = event.target.parentElement.id;\n    getDataForArticle(_IdOfArticle3);\n  }\n};\n\nvar renderItemOfArticle = function renderItemOfArticle() {\n  var articleSection = document.querySelector('.main_articles_selection');\n  var itemArray = document.querySelectorAll('.item');\n  itemArray.forEach(function (el) {\n    articleSection.removeChild(el);\n  });\n  var items = createElForArticle();\n  items.forEach(function (el) {\n    articleSection.append(el);\n  });\n};\n\nvar createElForArticle = function createElForArticle() {\n  var items = articleArray.map(function (el) {\n    var newItem = document.createElement('div');\n    newItem.setAttribute('id', el.id);\n    newItem.classList.add('item');\n    var img = document.createElement('img');\n    img.setAttribute('src', el.img);\n    img.setAttribute('alt', 'article item');\n    var titleWrapper = document.createElement('div');\n    titleWrapper.classList.add('title_wrapper');\n    var itemTitle = document.createElement('h6');\n    itemTitle.classList.add('item_title');\n    itemTitle.textContent = el.title;\n    var itemSubTitle = document.createElement('p');\n    itemSubTitle.classList.add('item_subtitle');\n    itemSubTitle.textContent = el.content[0].subtitle;\n    titleWrapper.append(itemTitle);\n    titleWrapper.append(itemSubTitle);\n    newItem.append(img);\n    newItem.append(titleWrapper);\n    newItem.addEventListener('click', clickHandler);\n    return newItem;\n  });\n  return items;\n};\n\nvar searchInput = document.querySelector(\".search input[type='text']\");\n\nvar searchArticleForTitle = function searchArticleForTitle() {\n  var value = searchInput.value;\n  articleArray = articleArray.filter(function (item) {\n    if (value == '') {\n      getDataFromFirestore();\n      return;\n    }\n\n    if (item.title.toLowerCase().includes(value.toLowerCase())) {\n      return item;\n    }\n  });\n  createElForArticle();\n  renderItemOfArticle();\n};\n\nsearchInput.addEventListener('input', searchArticleForTitle);\nvar tagsListBtn = document.querySelectorAll('.tags_btn');\n\nvar searchArticleForTag = function searchArticleForTag() {\n  var activeTag = getSelectedTags();\n  if (activeTag.length == 0) return;\n  articleArray = articleArray.filter(function (item) {\n    return item.tags.some(function (tag) {\n      return activeTag.includes(tag);\n    });\n  });\n  renderItemOfArticle();\n};\n\nvar getSelectedTags = function getSelectedTags() {\n  selectedTagArray.splice(0, selectedTagArray.length);\n  var activeTag = document.querySelectorAll('.tags_btn.active');\n  activeTag.forEach(function (el) {\n    selectedTagArray.push(el.textContent);\n  });\n  if (activeTag.length == 0) getDataFromFirestore();\n  return selectedTagArray;\n};\n\ntagsListBtn.forEach(function (el) {\n  el.addEventListener('click', function () {\n    el.classList.toggle('active');\n    searchArticleForTag();\n  });\n});\n\n//# sourceURL=webpack://leverxangular2021/./scripts/main_screen.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main_screen.js");
/******/ 	
/******/ })()
;