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

/***/ "./scripts/createArticle.js":
/*!**********************************!*\
  !*** ./scripts/createArticle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBase.js */ \"./scripts/fireBase.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n(0,_fireBase_js__WEBPACK_IMPORTED_MODULE_0__.fireBaseInit)();\nvar img;\nvar firestoreDatabase = firebase.firestore();\nvar fireStorage = firebase.storage();\nvar logoBackHome = document.querySelector('.logo');\n\nvar backToHome = function backToHome() {\n  window.location.href = './../index.html';\n};\n\nlogoBackHome.addEventListener('click', backToHome);\nvar inputTitle = document.querySelector('.title_input');\n\nvar removeWarningForTitle = function removeWarningForTitle() {\n  var warningForTitle = document.querySelector('.warning');\n  if (inputTitle.value !== '') warningForTitle === null || warningForTitle === void 0 ? void 0 : warningForTitle.remove();\n};\n\ninputTitle.addEventListener('input', removeWarningForTitle);\n\nvar showUserPhoto = function showUserPhoto() {\n  var userPhoto = document.querySelector(\"img[alt='user logo']\");\n  var activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'));\n  userPhoto.setAttribute('src', activeUserInfo[0].photoURL);\n};\n\nif (window.localStorage.getItem('activeUser')) {\n  showUserPhoto();\n}\n\nvar addTagInfo = ['Angular', 'Design', 'SAP ABAP', 'Product Development', 'Web Disign', 'SAP TM Consultant', 'DevOps', 'UX/UI Design', 'Android', 'Frontend', 'Java', 'Programmer', 'Python'];\nvar chooseTag = document.querySelector('.select_tag');\n\nvar selectTagForArticle = function selectTagForArticle() {\n  var btnArray = addTagInfo.map(function (el) {\n    var btn = document.createElement('button');\n    btn.classList.add('tags_btn');\n    var span = document.createElement('span');\n    span.classList.add('add_tag_plus');\n    btn.textContent = el;\n    var plusIco = document.createElement('img');\n    plusIco.setAttribute('src', '../img/add_tag_plus.svg');\n    plusIco.setAttribute('alt', 'plus icon');\n    span.append(plusIco);\n    btn.prepend(span);\n    return btn;\n  });\n  btnArray.forEach(function (item) {\n    chooseTag.append(item);\n  });\n};\n\nselectTagForArticle();\nvar addTagsListBtn = document.querySelectorAll('.tags_btn');\nvar addedTagsBtn = [];\nvar blockChoseTag = document.querySelector('.selected_tags');\n\nvar deleteChosedTag = function deleteChosedTag(e) {\n  var btnContent = e.target.textContent;\n  e.target.remove();\n  addedTagsBtn.forEach(function (el, index) {\n    if (btnContent == el) {\n      addedTagsBtn.splice(index, 1);\n    }\n  });\n};\n\nvar showSelectedTagForArticle = function showSelectedTagForArticle() {\n  var btnArray = addedTagsBtn.map(function (el) {\n    var btn = document.createElement('button');\n    btn.classList.add('tag_btn_chose');\n    btn.textContent = el;\n    return btn;\n  });\n  blockChoseTag.innerHTML = '';\n  btnArray.forEach(function (item) {\n    item.addEventListener('click', deleteChosedTag);\n    blockChoseTag.append(item);\n  });\n};\n\nvar checkMouseTarget = function checkMouseTarget(event) {\n  if (event.target.classList.contains('tags_btn')) {\n    var textOfTag = event.target.textContent;\n\n    if (addedTagsBtn.indexOf(textOfTag) == -1) {\n      addedTagsBtn.push(textOfTag);\n    }\n  }\n\n  if (event.target.hasAttribute('src')) {\n    var _textOfTag = event.target.parentElement.parentElement.textContent;\n\n    if (addedTagsBtn.indexOf(_textOfTag) == -1) {\n      addedTagsBtn.push(_textOfTag);\n    }\n  }\n\n  if (event.target.classList.contains('add_tag_plus')) {\n    var _textOfTag2 = event.target.parentElement.textContent;\n\n    if (addedTagsBtn.indexOf(_textOfTag2) == -1) {\n      addedTagsBtn.push(_textOfTag2);\n    }\n  }\n\n  showSelectedTagForArticle();\n};\n\naddTagsListBtn.forEach(function (el) {\n  el.addEventListener('click', checkMouseTarget);\n});\nvar inputFile = document.querySelector('#show');\nvar preview = document.querySelector('.preview_img');\n\nvar bytesToSize = function bytesToSize(bytes) {\n  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n  if (!bytes) return '0 Byte';\n  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));\n  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];\n};\n\nvar removeWarningForImg = function removeWarningForImg() {\n  var warningForTitle = document.querySelector('.warning_img');\n  warningForTitle === null || warningForTitle === void 0 ? void 0 : warningForTitle.remove();\n};\n\ninputFile.addEventListener('change', function (event) {\n  var files = [];\n  if (!event.target.files.length) return;\n  files = Array.from(event.target.files);\n  preview.innerHTML = '';\n  img = files[0];\n  if (img) removeWarningForImg();\n  files.forEach(function (el) {\n    if (!el.type.match('image')) return;\n    var reader = new FileReader();\n\n    reader.onload = function (e) {\n      var src = e.target.result;\n      preview.insertAdjacentHTML('afterbegin', \"\\n            <div class=\\\"preview_img_block\\\">\\n            <div class='preview_remove' data-name='\".concat(el.name, \"'>&times;</div>\\n            <img src='\").concat(src, \"' alt='\").concat(el.name, \"'/>\\n            <div class='preview_info'>\\n            <span>\").concat(el.name, \"</span>\\n            \").concat(bytesToSize(el.size), \"\\n            </div>\\n            </div>\\n            \"));\n      window.localStorage.setItem('srcImgFromFile', JSON.stringify(src));\n    };\n\n    reader.readAsDataURL(el);\n  });\n\n  var removeHandler = function removeHandler(e) {\n    if (!e.target.dataset.name) return;\n    var name = e.target.dataset.name;\n    files = files.filter(function (el) {\n      return el.name !== name;\n    });\n    var block = preview.querySelector(\"[data-name='\".concat(name, \"']\")).closest('.preview_img_block');\n    block.remove();\n  };\n\n  preview.addEventListener('click', removeHandler);\n});\nvar newBlockArticle = document.querySelector('.add_block');\n\nvar addNewBlockArticle = function addNewBlockArticle() {\n  var addNewBlockInputs = document.querySelector('.add_new_block_wrapper');\n  var newBlock = addNewBlockInputs.cloneNode(true);\n  var newSubTitleInput = newBlock.querySelector('.subtitle_input');\n  var newTextarea = newBlock.querySelector('textarea');\n  newSubTitleInput.value = '';\n  newTextarea.value = '';\n  newBlockArticle.before(newBlock);\n};\n\nnewBlockArticle.addEventListener('click', addNewBlockArticle);\n\nvar getCurrentDate = function getCurrentDate() {\n  var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  var currentDate = new Date();\n  var dateString = '';\n  dateString = \"\".concat(monthNames[currentDate.getMonth() + 1], \" \").concat(currentDate.getDate(), \", \").concat(currentDate.getFullYear());\n  return dateString;\n};\n\nvar checkImg = function checkImg() {\n  if (!img) {\n    var warningForImg = document.createElement('p');\n    warningForImg.classList.add('warning_img');\n    warningForImg.textContent = 'Article must have some picture';\n    warningForImg.style.cssText = \"color: red; margin-bottom: 10px; font-weight: bold\";\n    document.querySelector('.upload_img').before(warningForImg);\n    return;\n  }\n\n  return true;\n};\n\nvar uploadImgToFirestorage = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newArticle) {\n    var _img, _img2;\n\n    var warningImg;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            warningImg = checkImg();\n\n            if (warningImg) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 3:\n            _context.next = 5;\n            return fireStorage.ref((_img = img) === null || _img === void 0 ? void 0 : _img.name).put(img);\n\n          case 5:\n            _context.next = 7;\n            return fireStorage.ref((_img2 = img) === null || _img2 === void 0 ? void 0 : _img2.name).put(img).snapshot.ref.getDownloadURL().then(function (url) {\n              var getArticleForUpdate = firestoreDatabase.collection('article').doc(newArticle.title);\n              getArticleForUpdate.update({\n                title: newArticle.title,\n                content: newArticle.content,\n                tags: newArticle.tags,\n                user: newArticle.user,\n                date: newArticle.date,\n                id: newArticle.id,\n                img: url\n              })[\"catch\"](function (error) {\n                console.error(\"Error updating document: \", error);\n              });\n            });\n\n          case 7:\n            backToHome();\n            window.localStorage.removeItem('srcImgFromFile');\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function uploadImgToFirestorage(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar checkInputTitle = function checkInputTitle() {\n  if (!inputTitle.value) {\n    var warningForTitle = document.createElement('p');\n    warningForTitle.classList.add('warning');\n    warningForTitle.textContent = 'Article must have some title';\n    warningForTitle.style.cssText = \"color: red; margin-bottom: 10px; font-weight: bold\";\n    document.querySelector('.title_input').before(warningForTitle);\n    return;\n  }\n\n  return true;\n};\n\nvar getContentForNewArticle = function getContentForNewArticle() {\n  var warningTitle = checkInputTitle();\n  if (!warningTitle) return;\n  var contentArticle = [];\n  var textareas = document.querySelectorAll(\"textarea[name='article_text']\");\n  var userName = JSON.parse(window.localStorage.getItem('activeUser'))[0].displayName;\n  var subtitles = document.querySelectorAll('.subtitle_input');\n  var currentDate = getCurrentDate();\n  var id = Date.now();\n  var subtitlesLength = subtitles.length;\n\n  for (var i = 0; subtitlesLength > i; i++) {\n    var contentBlock = {\n      subtitle: subtitles[i].value,\n      text: textareas[i].value\n    };\n    contentArticle.push(contentBlock);\n  }\n\n  var newArticle = {\n    title: inputTitle.value,\n    content: contentArticle,\n    tags: addedTagsBtn,\n    user: userName,\n    date: currentDate,\n    id: id\n  };\n  return newArticle;\n};\n\nvar addNewArticleToFirestoreDatabase = function addNewArticleToFirestoreDatabase() {\n  var newArticle = getContentForNewArticle();\n  uploadImgToFirestorage(newArticle);\n  if (!newArticle) return;\n  firestoreDatabase.collection(\"article\").doc(newArticle === null || newArticle === void 0 ? void 0 : newArticle.title).set(newArticle)[\"catch\"](function (error) {\n    console.error(\"Error adding document: \", error);\n  });\n};\n\nvar publishBtn = document.querySelector('.publish_btn');\npublishBtn.addEventListener('click', addNewArticleToFirestoreDatabase);\nvar previewBtn = document.querySelector('.preview_btn');\n\nvar showPreview = function showPreview() {\n  var warningImg = checkImg();\n  if (!warningImg) return;\n  var warningTitle = checkInputTitle();\n  if (!warningTitle) return;\n  var contentForPreview = getContentForNewArticle();\n  window.localStorage.setItem('preview', JSON.stringify(contentForPreview));\n  window.location.href = '../pages/article.html';\n};\n\npreviewBtn.addEventListener('click', showPreview);\n\nvar setValueAfterPreview = function setValueAfterPreview() {\n  if (window.localStorage.getItem('preview')) {\n    var previewContent = JSON.parse(window.localStorage.getItem('preview'));\n    var amoutContent = previewContent.content;\n\n    if (amoutContent.length > 1) {\n      amoutContent.forEach(function (el, index) {\n        if (index !== 0) {\n          var addNewBlockInputs = document.querySelector('.add_new_block_wrapper');\n          var newBlock = addNewBlockInputs.cloneNode(true);\n          var newSubTitleInput = newBlock.querySelector('.subtitle_input');\n          var newTextarea = newBlock.querySelector('textarea');\n          newSubTitleInput.value = el.subtitle;\n          newTextarea.value = el.text;\n          newBlockArticle.before(newBlock);\n        }\n      });\n    }\n\n    var tagsArray = previewContent.tags;\n    var addTagsBack = tagsArray.map(function (el) {\n      var btn = document.createElement('button');\n      btn.classList.add('tag_btn_chose');\n      btn.textContent = el;\n      addedTagsBtn.push(el);\n      return btn;\n    });\n    blockChoseTag.innerHTML = '';\n    addTagsBack.forEach(function (item) {\n      blockChoseTag.append(item);\n    });\n    window.localStorage.removeItem('preview');\n    window.localStorage.removeItem('srcImgFromFile');\n  }\n};\n\nsetValueAfterPreview();\n\n//# sourceURL=webpack://leverxangular2021/./scripts/createArticle.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/createArticle.js");
/******/ 	
/******/ })()
;