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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireBase.js */ \"./scripts/fireBase.js\");\n/* harmony import */ var _styles_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sass/style.sass */ \"./styles/sass/style.sass\");\n\n\n(0,_fireBase_js__WEBPACK_IMPORTED_MODULE_0__.fireBaseInit)();\nvar logoBackHome = document.querySelector('.logo');\n\nvar backToHome = function backToHome() {\n  window.localStorage.removeItem('activeUser');\n  window.location.href = './../index.html';\n};\n\nlogoBackHome.addEventListener('click', backToHome);\n\nvar showArticleTags = function showArticleTags() {\n  var tagsListEl = document.querySelector('.tags_article');\n  var tagsListArray = ['Angular', 'Programmer'];\n  var btnArray = tagsListArray.map(function (el) {\n    var btn = document.createElement('button');\n    btn.classList.add('tags_article_btn');\n    btn.textContent = el;\n    return btn;\n  });\n  btnArray.forEach(function (item) {\n    return tagsListEl.append(item);\n  });\n};\n\nshowArticleTags();\nvar headerPanelBtn = document.querySelector('.header_panel_btn');\nvar userBtn = document.createElement('button');\nuserBtn.setAttribute('class', 'create_post');\nuserBtn.textContent = 'Sing in';\nheaderPanelBtn.append(userBtn);\n\nvar logOut = function logOut() {\n  firebase.auth().signOut().then(function () {\n    window.localStorage.removeItem('activeUser');\n    window.location.href = './article.html';\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar showForActiveUser = function showForActiveUser() {\n  if (window.localStorage.getItem('activeUser')) {\n    var logOutBtnWrapper = headerPanelBtn.cloneNode(true);\n    var logOutBtn = logOutBtnWrapper.querySelector('.create_post');\n    logOutBtn.textContent = 'Logout';\n    logOutBtn.addEventListener('click', logOut);\n    userBtn.textContent = 'Create a Post';\n    var activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'));\n    var headerPanelUser = document.createElement('div');\n    headerPanelUser.setAttribute('class', 'header_panel_user');\n    var userLogo = document.createElement('img');\n    userLogo.setAttribute('alt', 'user logo');\n    userLogo.setAttribute('src', activeUserInfo[0].photoURL);\n    headerPanelUser.append(userLogo);\n    headerPanelBtn.after(headerPanelUser);\n    headerPanelBtn.after(logOutBtnWrapper);\n    userBtn.addEventListener('click', function () {\n      window.location.href = '/pages/createArticle.html';\n      window.localStorage.removeItem('activeUser');\n    });\n  } else {\n    userBtn.addEventListener('click', function () {\n      window.location.href = '/pages/singIn.html';\n      window.localStorage.removeItem('activeUser');\n    });\n  }\n};\n\nshowForActiveUser();\n\nvar closePreview = function closePreview() {\n  window.history.back();\n};\n\nvar showCurrentArticle = function showCurrentArticle() {\n  var currentTitle = document.querySelector('.article_title');\n  var authorName = document.querySelector('.author_info_name');\n  var dateOfWriting = document.querySelector('.author_info_date');\n  var currentImg = document.querySelector(\".article_pic_wrapper img[alt='article picture']\");\n  var contentBlock = document.querySelector('.content_block');\n  var articleTags = document.querySelector('.tags_article');\n  articleTags.innerHTML = '';\n\n  if (window.localStorage.getItem('preview')) {\n    var previewContent = JSON.parse(window.localStorage.getItem('preview'));\n    var currentHrefImg = JSON.parse(window.localStorage.getItem('srcImgFromFile'));\n    currentImg.setAttribute('src', currentHrefImg);\n    currentTitle.textContent = previewContent.title;\n    authorName.textContent = previewContent.user;\n    dateOfWriting.textContent = previewContent.date;\n    contentBlock.innerHTML = '';\n    var amoutContent = previewContent.content;\n    amoutContent.forEach(function (element) {\n      var subtitle = document.createElement('h5');\n      subtitle.textContent = element.subtitle;\n      contentBlock.append(subtitle);\n      var paragraph = document.createElement('p');\n      paragraph.textContent = element.text;\n      contentBlock.append(paragraph);\n    });\n    var tags = previewContent.tags;\n    tags.forEach(function (el) {\n      var btn = document.createElement('button');\n      btn.classList.add('tags_article_btn');\n      btn.textContent = el;\n      articleTags.append(btn);\n    });\n    var closePreviewEl = document.createElement('img');\n    closePreviewEl.setAttribute('src', '../img/close_preview.png');\n    closePreviewEl.setAttribute('alt', 'close preview');\n    closePreviewEl.classList.add('close_preview');\n    closePreviewEl.addEventListener('click', closePreview);\n    var body = document.querySelector('body');\n    body.append(closePreviewEl);\n    var createPost = document.querySelectorAll('.create_post');\n    createPost.forEach(function (el) {\n      el.setAttribute('disabled', 'disabled');\n    });\n    logoBackHome.removeEventListener('click', backToHome);\n    var home_link = document.querySelector(\".home_link\");\n    home_link.style.cssText = \"pointer-events: none\";\n  }\n\n  if (window.localStorage.getItem('currentArticle')) {\n    var currentContent = JSON.parse(window.localStorage.getItem('currentArticle'));\n    currentImg.setAttribute('src', currentContent.img);\n    currentTitle.textContent = currentContent.title;\n    authorName.textContent = currentContent.user;\n    dateOfWriting.textContent = currentContent.date;\n    contentBlock.innerHTML = '';\n    var _amoutContent = currentContent.content;\n\n    _amoutContent.forEach(function (element) {\n      var subtitle = document.createElement('h5');\n      subtitle.textContent = element.subtitle;\n      contentBlock.append(subtitle);\n      var paragraph = document.createElement('p');\n      paragraph.textContent = element.text;\n      contentBlock.append(paragraph);\n    });\n\n    var _tags = currentContent.tags;\n\n    _tags.forEach(function (el) {\n      var btn = document.createElement('button');\n      btn.classList.add('tags_article_btn');\n      btn.textContent = el;\n      articleTags.append(btn);\n    }); // window.localStorage.removeItem('currentArticle')\n\n  }\n};\n\nshowCurrentArticle();\n\n//# sourceURL=webpack://leverxangular2021/./scripts/article.js?");

/***/ }),

/***/ "./scripts/fireBase.js":
/*!*****************************!*\
  !*** ./scripts/fireBase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig),\n/* harmony export */   \"fireBaseInit\": () => (/* binding */ fireBaseInit)\n/* harmony export */ });\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE\",\n  authDomain: \"leverxangular2021.firebaseapp.com\",\n  projectId: \"leverxangular2021\",\n  storageBucket: \"leverxangular2021.appspot.com\",\n  messagingSenderId: \"332942002633\",\n  appId: \"1:332942002633:web:02810808ceb15f2407c018\"\n};\nvar fireBaseInit = function fireBaseInit() {\n  firebase.initializeApp(firebaseConfig);\n};\n\n//# sourceURL=webpack://leverxangular2021/./scripts/fireBase.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/style.sass":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/style.sass ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ \"./styles/fonts/Lato-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Semibold.ttf */ \"./styles/fonts/Lato-Semibold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Bold.ttf */ \"./styles/fonts/Lato-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/OpenSans-Regular.ttf */ \"./styles/fonts/OpenSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/about_us_bg.jpg */ \"./img/about_us_bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/check_mark.svg */ \"./img/check_mark.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/createArticle_bg.svg */ \"./img/createArticle_bg.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Lato\\\";\\n}\\n\\n.container {\\n  width: 90%;\\n  margin: 0 auto;\\n}\\n\\n.main .container {\\n  width: calc(90% - 140px);\\n}\\n\\n@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n}\\n@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: \\\"Open Sans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 400;\\n}\\n.header {\\n  background-color: #2F80ED;\\n  height: 80px;\\n}\\n.header .container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.logo img {\\n  margin: 5px 0px;\\n  cursor: pointer;\\n  outline: none;\\n}\\n\\n.header_panel {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.header_panel_btn {\\n  margin-right: 32px;\\n}\\n.header_panel_btn button {\\n  border-radius: 24px;\\n  padding: 12px 40px;\\n  border: 1px solid #fff;\\n  cursor: pointer;\\n  outline: none;\\n  background-color: #2F80ED;\\n  color: #fff;\\n  font-size: 16px;\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n\\n.header_panel_user img {\\n  width: 52px;\\n  height: 52px;\\n  border-radius: 50%;\\n}\\n\\n.main_about_us {\\n  height: 576px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  background-blend-mode: soft-light;\\n}\\n.main_about_us .container {\\n  padding-top: 80px;\\n}\\n.main_about_us .container h4 {\\n  color: #fff;\\n  font-size: 34px;\\n  font-weight: 600;\\n  font-style: normal;\\n  width: 270px;\\n  height: 44px;\\n}\\n.main_about_us .container h1 {\\n  color: #F2C94C;\\n  font-size: 60px;\\n  font-weight: bold;\\n  font-style: normal;\\n  margin-bottom: 24px;\\n}\\n.main_about_us .container p {\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n  color: #fff;\\n  margin-bottom: 50.62px;\\n  width: 621px;\\n  height: 120px;\\n}\\n.main_about_us .container button {\\n  font-size: 16px;\\n  font-weight: 700;\\n  font-style: normal;\\n  cursor: pointer;\\n  background-color: #F2C94C;\\n  font-size: 16px;\\n  font-weight: bold;\\n  font-style: normal;\\n  padding: 11.92px 33px;\\n  border-radius: 24px;\\n  width: 145px;\\n  height: 47.83px;\\n  outline: none;\\n  color: #333333;\\n}\\n\\n.main_articles {\\n  background-color: #E5E5E5;\\n  height: 100%;\\n}\\n.main_articles .container h4 {\\n  color: #333333;\\n  font-size: 34px;\\n  font-weight: 600;\\n  font-style: normal;\\n  padding-top: 68px;\\n  margin-bottom: 44px;\\n}\\n.main_articles .container .search {\\n  position: relative;\\n  height: 60px;\\n  margin-bottom: 44px;\\n}\\n.main_articles .container .search input {\\n  width: 920px;\\n  border-radius: 40px;\\n  background-color: #fff;\\n  box-shadow: 0px -6px 8px rgba(234, 237, 242, 0.5), 0px 6px 8px rgba(234, 237, 242, 0.5);\\n  border: none;\\n  outline: none;\\n  padding: 22px 716px 20px 76px;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n.main_articles .container .search input::placeholder {\\n  color: #BDBDBD;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n.main_articles .container .search img {\\n  position: absolute;\\n  top: 20px;\\n  left: 36px;\\n}\\n.main_articles .container .tags {\\n  width: 1102px;\\n  height: 36px;\\n  display: flex;\\n  margin-bottom: 44px;\\n}\\n.main_articles .container .tags .tags_btn {\\n  min-width: 76px;\\n  height: 36px;\\n  border-radius: 40px;\\n  background-color: #fff;\\n  box-shadow: 0px 6px 8px rgba(234, 237, 242, 0.5);\\n  color: #333333;\\n  cursor: pointer;\\n  outline: none;\\n  padding: 8px 24px;\\n  border: none;\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n.main_articles .container .tags .tags_btn:not(:last-child) {\\n  margin-right: 12px;\\n}\\n.main_articles .container .tags .tags_btn.active {\\n  background-color: #2F80ED;\\n  color: #fff;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 5% center;\\n}\\n.main_articles .container .main_articles_selection {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 1180px;\\n  padding-bottom: 80px;\\n}\\n.main_articles .container .main_articles_selection .item {\\n  width: 270px;\\n  min-height: 350px;\\n  margin-right: 25px;\\n  margin-bottom: 24px;\\n  box-shadow: 0px 6px 8px rgba(234, 237, 242, 0.5);\\n  cursor: pointer;\\n}\\n.main_articles .container .main_articles_selection .item:hover {\\n  box-shadow: 0px 12px 24px rgba(188, 201, 220, 0.4);\\n}\\n.main_articles .container .main_articles_selection .item img {\\n  border-radius: 15px 15px 0px 0px;\\n  height: 196px;\\n  width: 267px;\\n}\\n.main_articles .container .main_articles_selection .item::nth-child(4n) {\\n  margin-right: 0px;\\n}\\n.main_articles .container .main_articles_selection .item .title_wrapper {\\n  background-color: #fff;\\n  margin-top: -4px;\\n  border-radius: 0px 0px 15px 15px;\\n  width: 267px;\\n}\\n.main_articles .container .main_articles_selection .item .title_wrapper .item_title {\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n  color: #333333;\\n  padding: 16px 0px 8px 16px;\\n  height: 65px;\\n}\\n.main_articles .container .main_articles_selection .item .title_wrapper .item_subtitle {\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #4F4F4F;\\n  padding: 0px 16px 24px 16px;\\n  height: 90px;\\n}\\n\\n.article_main {\\n  background-color: #E5E5E5;\\n}\\n.article_main .nav {\\n  padding-top: 48px;\\n  margin-bottom: 52px;\\n}\\n.article_main .nav a {\\n  text-decoration: none;\\n  color: #828282;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n.article_main .nav a.active {\\n  color: #333333;\\n}\\n.article_main .nav img {\\n  margin: 0px 20px;\\n}\\n.article_main .article_pic_wrapper {\\n  margin-bottom: 52px;\\n}\\n.article_main .article_pic_wrapper img {\\n  object-fit: cover;\\n  width: 1152px;\\n  height: 468px;\\n}\\n.article_main .article_title {\\n  color: #333333;\\n  font-size: 42px;\\n  font-weight: 700;\\n  font-style: normal;\\n  margin-bottom: 44px;\\n}\\n.article_main .content_block h5 {\\n  font-size: 24px;\\n  font-weight: 700;\\n  font-style: normal;\\n  color: #4F4F4F;\\n  margin-bottom: 24px;\\n  text-align: justify;\\n}\\n.article_main .content_block p {\\n  margin-bottom: 44px;\\n  color: #4F4F4F;\\n  font-size: 16px;\\n  font-weight: 400;\\n  font-style: normal;\\n  font-feature-settings: \\\"tnum\\\" on, \\\"lnum\\\" on;\\n  text-align: justify;\\n  word-wrap: break-word;\\n}\\n.article_main .content_block p.other_margin {\\n  margin-bottom: 24px;\\n}\\n.article_main hr {\\n  margin-bottom: 23px;\\n}\\n.article_main .author_info {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  color: #333333;\\n  font-size: 16px;\\n  font-weight: 600;\\n  font-style: normal;\\n  font-feature-settings: \\\"tnum\\\" on, \\\"lnum\\\" on;\\n  margin-bottom: 52px;\\n}\\n.article_main .tags_article {\\n  padding-bottom: 80px;\\n}\\n.article_main .tags_article .tags_article_btn {\\n  height: 36px;\\n  padding: 8px 24px;\\n  background-color: #fff;\\n  color: #333333;\\n  border-radius: 40px;\\n  border: none;\\n}\\n.article_main .tags_article .tags_article_btn:not(:last-child) {\\n  margin-right: 16px;\\n}\\n\\n.close_preview {\\n  position: fixed;\\n  top: 100px;\\n  right: 100px;\\n  width: 100px;\\n  cursor: pointer;\\n}\\n.close_preview:hover {\\n  transform: scale(1.1);\\n}\\n\\n.main_form {\\n  background-color: #F2F2F2;\\n  padding-top: 64px;\\n  padding-bottom: 80px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 21% 62%;\\n}\\n\\n.upload_img {\\n  border: 1px dashed #2F80ED;\\n  width: 1152px;\\n  min-height: 116px;\\n  margin-bottom: 52px;\\n  cursor: pointer;\\n}\\n.upload_img label {\\n  font-size: 16px;\\n  font-weight: 700;\\n  font-style: normal;\\n  cursor: pointer;\\n  padding: 46px 519px;\\n  color: #2F80ED;\\n  display: inline-block;\\n}\\n.upload_img .plus_ico {\\n  width: 24px;\\n  height: 24px;\\n  position: relative;\\n  top: 6px;\\n  margin-right: 9px;\\n  cursor: pointer;\\n}\\n.upload_img .preview_img {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.upload_img .preview_img .preview_img_block {\\n  padding: 10px;\\n  position: relative;\\n}\\n.upload_img .preview_img .preview_img_block img {\\n  height: auto;\\n  width: 118px;\\n}\\n.upload_img .preview_img .preview_img_block .preview_remove {\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  background-color: #fff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n  border-radius: 50%;\\n  border: 2px solid #ededed;\\n}\\n.upload_img .preview_img .preview_img_block .preview_info {\\n  position: absolute;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 25px;\\n  background-color: #ededed;\\n  padding: 0px 5px;\\n  font-size: 10px;\\n}\\n\\n.description {\\n  border: none;\\n}\\n.description h6 {\\n  color: #333333;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n  margin-bottom: 24px;\\n}\\n.description input {\\n  width: 1152px;\\n  margin-bottom: 44px;\\n  background-color: transparent;\\n  border-color: #2F80ED;\\n  color: #333333;\\n}\\n.description input.title_input {\\n  height: 72px;\\n  padding: 25px 0px 20px 32px;\\n  font-size: 42px;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n.description input.title_input::placeholder {\\n  color: #828282;\\n  font-size: 42px;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n.description input.subtitle_input {\\n  height: 56px;\\n  padding: 16px 0px 12px 32px;\\n  font-size: 24px;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n.description input.subtitle_input::placeholder {\\n  color: #828282;\\n  font-size: 24px;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n\\n.text_article {\\n  border: none;\\n  margin-bottom: 32px;\\n}\\n.text_article p {\\n  color: #333333;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n  margin-bottom: 24px;\\n}\\n.text_article textarea {\\n  height: 288px;\\n  width: 1152px;\\n  resize: none;\\n  background-color: transparent;\\n  padding: 20px 32px 0px 32px;\\n  border-color: #2F80ED;\\n  font-size: 16px;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #4F4F4F;\\n}\\n\\n.add_block {\\n  cursor: pointer;\\n  color: #2F80ED;\\n  margin-bottom: 44px;\\n  font-size: 14px;\\n  font-weight: 600;\\n  font-style: normal;\\n  width: 130px;\\n}\\n.add_block span {\\n  cursor: pointer;\\n  position: relative;\\n  top: 7px;\\n  display: inline-block;\\n  margin-right: 12px;\\n}\\n\\n.add_tag {\\n  color: #333333;\\n  font-size: 18px;\\n  font-weight: 600;\\n  font-style: normal;\\n  margin-bottom: 24px;\\n}\\n\\n.select_tag {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin-bottom: 24px;\\n  height: 84px;\\n  width: 1034px;\\n}\\n.select_tag .tags_btn {\\n  height: 36px;\\n  background-color: #fff;\\n  padding: 4px 16px 10px 22px;\\n  box-shadow: 0px 6px 8px rgba(234, 237, 242, 0.5);\\n  border-radius: 40px;\\n  border: none;\\n  margin-bottom: 12px;\\n  cursor: pointer;\\n}\\n.select_tag .tags_btn:not(:last-child) {\\n  margin-right: 16px;\\n}\\n.select_tag .tags_btn .add_tag_plus {\\n  display: inline-block;\\n  padding-right: 11.83px;\\n  position: relative;\\n  top: 5px;\\n}\\n\\n.selected_tags {\\n  width: 1152px;\\n  min-height: 56px;\\n  border: 1px solid #2F80ED;\\n  color: #BDBDBD;\\n  padding: 16px 0px 16px 32px;\\n}\\n.selected_tags .tag_btn_chose {\\n  background-color: #2F80ED;\\n  color: #fff;\\n  @includes style(14px, 400, normal);\\n  padding: 8px 24px;\\n  border-radius: 40px;\\n  margin-bottom: 12px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  background-repeat: no-repeat;\\n  background-position: 5% center;\\n  cursor: pointer;\\n}\\n.selected_tags .tag_btn_chose:not(:last-child) {\\n  margin-right: 12px;\\n}\\n\\n.publish_article {\\n  background-color: #fff;\\n}\\n\\n.publish_article .container {\\n  width: calc(90% - 140px);\\n}\\n.publish_article .publish_btn_wrapper {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  margin: 16px 0px;\\n}\\n.publish_article .publish_btn_wrapper .publish_btn {\\n  height: 48px;\\n  color: #333333;\\n  padding: 12px 40px;\\n  background-color: #F2C94C;\\n  border-radius: 24px;\\n  border: none;\\n  cursor: pointer;\\n  outline: none;\\n  font-size: 16px;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n.publish_article .publish_btn_wrapper .preview_btn {\\n  height: 48px;\\n  color: #FFC513;\\n  border: 1px solid #F2C94C;\\n  border-radius: 24px;\\n  cursor: pointer;\\n  outline: none;\\n  padding: 12px 40px;\\n  margin-right: 16px;\\n  background-color: #fff;\\n}\\n\\n.main_singin {\\n  height: auto;\\n  background-color: #E5E5E5;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 81.8vh;\\n}\\n.main_singin .sing_ing_wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.main_singin .sing_ing_wrapper h2 {\\n  font-size: 60px;\\n  font-weight: 700;\\n  font-style: normal;\\n  color: #333333;\\n  margin-bottom: 64px;\\n}\\n.main_singin .sing_ing_wrapper .sing_in_btn {\\n  width: 342px;\\n  height: 56px;\\n  border-radius: 24px;\\n  background-color: #fff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n  margin-bottom: 32px;\\n}\\n.main_singin .sing_ing_wrapper .sing_in_btn img {\\n  width: 24px;\\n  height: 24px;\\n}\\n.main_singin .sing_ing_wrapper .sing_in_btn span {\\n  font-size: 16px;\\n  font-weight: 700;\\n  font-style: normal;\\n  display: inline-block;\\n  margin-left: 16px;\\n  color: #333333;\\n}\\n.main_singin .sing_ing_wrapper .privacy_policy span {\\n  color: #333333;\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-style: normal;\\n  display: inline-block;\\n  margin-left: 14px;\\n}\\n.main_singin .sing_ing_wrapper .privacy_policy input {\\n  cursor: pointer;\\n  width: 16px;\\n  height: 16px;\\n  border-color: #2F80ED;\\n}\\n.main_singin .sing_ing_wrapper .warning_policy {\\n  color: #f73333;\\n  margin-top: 20px;\\n  font-size: 12px;\\n  font-weight: 400;\\n  font-style: normal;\\n  transition: 2s;\\n}\\n\\n.footer {\\n  background-color: #333333;\\n  height: 80px;\\n}\\n.footer .footer_wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.footer .footer_wrapper .copyright {\\n  margin: 28px 0px;\\n  color: #fff;\\n}\\n.footer .footer_wrapper .links {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.footer .footer_wrapper .links .social {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-right: 41px;\\n}\\n.footer .footer_wrapper .links .social a {\\n  display: inline-block;\\n  width: 18px;\\n  height: 18px;\\n}\\n.footer .footer_wrapper .links .social a img {\\n  color: #fff;\\n}\\n.footer .footer_wrapper .links .social a:not(:last-child) {\\n  margin-right: 38px;\\n}\\n.footer .footer_wrapper .links .tech_support {\\n  margin: 24px 0px;\\n}\\n.footer .footer_wrapper .links .tech_support a {\\n  display: inline-block;\\n  text-decoration: none;\\n  width: 73px;\\n  color: #F2C94C;\\n  font-size: 16px;\\n  font-weight: 600;\\n  font-style: normal;\\n  font-feature-settings: \\\"tnum\\\" on, \\\"lnum\\\" on;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leverxangular2021/./styles/sass/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./img/about_us_bg.jpg":
/*!*****************************!*\
  !*** ./img/about_us_bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30eb3994180438be5850.jpg\";\n\n//# sourceURL=webpack://leverxangular2021/./img/about_us_bg.jpg?");

/***/ }),

/***/ "./img/check_mark.svg":
/*!****************************!*\
  !*** ./img/check_mark.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5abd8dfc5bbed37b6f51.svg\";\n\n//# sourceURL=webpack://leverxangular2021/./img/check_mark.svg?");

/***/ }),

/***/ "./img/createArticle_bg.svg":
/*!**********************************!*\
  !*** ./img/createArticle_bg.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af607a8992bf8af3ad0c.svg\";\n\n//# sourceURL=webpack://leverxangular2021/./img/createArticle_bg.svg?");

/***/ }),

/***/ "./styles/fonts/Lato-Bold.ttf":
/*!************************************!*\
  !*** ./styles/fonts/Lato-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e269ebe7abdc15d343b.ttf\";\n\n//# sourceURL=webpack://leverxangular2021/./styles/fonts/Lato-Bold.ttf?");

/***/ }),

/***/ "./styles/fonts/Lato-Regular.ttf":
/*!***************************************!*\
  !*** ./styles/fonts/Lato-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d58363fa914517a89ea.ttf\";\n\n//# sourceURL=webpack://leverxangular2021/./styles/fonts/Lato-Regular.ttf?");

/***/ }),

/***/ "./styles/fonts/Lato-Semibold.ttf":
/*!****************************************!*\
  !*** ./styles/fonts/Lato-Semibold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b548e191f421eb0692a.ttf\";\n\n//# sourceURL=webpack://leverxangular2021/./styles/fonts/Lato-Semibold.ttf?");

/***/ }),

/***/ "./styles/fonts/OpenSans-Regular.ttf":
/*!*******************************************!*\
  !*** ./styles/fonts/OpenSans-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edcb04362f838a40b599.ttf\";\n\n//# sourceURL=webpack://leverxangular2021/./styles/fonts/OpenSans-Regular.ttf?");

/***/ }),

/***/ "./styles/sass/style.sass":
/*!********************************!*\
  !*** ./styles/sass/style.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/sass/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://leverxangular2021/./styles/sass/style.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leverxangular2021/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"article": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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