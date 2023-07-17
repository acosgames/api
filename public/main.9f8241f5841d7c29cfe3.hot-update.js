"use strict";
self["webpackHotUpdateapi"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../client/src/app.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../client/src/app.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
// @import url("https://fonts.googleapis.com/css?family=Oswald:400,500,700");
// @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

// @import url("https://fonts.googleapis.com/icon?family=Material+Icons"); */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
  /* background-color: red; */
}

* {
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  /* // overflow: hidden;
  //   background-color: #333;
  //   color: #fff;
  //   font-size: 16px;
  //   font-weight: 400;
  // font-family: "Inter", "Oswald", sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale; */
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.simplebar-wrapper {
  height: 100%;
}

.simplebar-scrollbar:before {
  position: absolute;
  content: "";
  background: #fff;
  border-radius: 7px;
  left: 2px;
  right: 2px;
  opacity: 0;
  transition: opacity 0.2s linear;
}

/* width */
::-webkit-scrollbar {
  width: 0;
  overflow: visible;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  width: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  /* // background-color: rgb(136, 136, 136); */
  border-radius: 4px;
  transition: background-color 1s ease;
  background-color: #fff;
  /* // rgb(14,16,20); */
  width: 0;
}

.showscroll::-webkit-scrollbar-thumb {
  background-color: #fff;
  /* // rgb(80, 80, 80); */
}

.hidescroll::-webkit-scrollbar-thumb {
  background-color: #fff;
  /* ///rgb(14,16,20); */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

/* // #wrapper {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   min-height: 100%;
// } */
.chakra-ui-dark #wrapper-header {
  width: 100%;
  height: 64px;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px, rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;
  background-color: #202024;
  /* // background-color: rgb(0, 52, 104); */
}

.chakra-ui-light #wrapper-header {
  width: 100%;
  height: 64px;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px, rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;
  background-color: #202024;
  /* // background-color: rgb(0, 52, 104); */
}

#wrapper-content {
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
}

#mainmenu {
  width: 92%;
  margin-left: 4%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* // align-items: center; */
}

#mainmenu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

#mainmenu ul.menu-nav {
  flex: 4;
}

#mainmenu ul.menu-nav {
  flex: 1;
}

#mainmenu ul li {
  flex: auto;
  display: flex;
}

#mainmenu .indicator-down {
  color: #aaa;
  margin-left: -8px;
  margin-top: 5px;
  /* // z-index: 10; */
  font-size: 1rem;
}

#mainmenu ul li.hasmenu {
  flex: auto;
  display: block;
}

#mainmenu ul li.actions {
  flex: 1;
}

#mainmenu ul li ul.submenu {
  display: block;
  position: absolute;
  /* // z-index: 999; */
  margin-left: -1rem;
}

#mainmenu ul li ul.submenu li {
  display: block;
}

#mainmenu ul li a {
  align-items: center;
  line-height: normal;
  height: 3rem;
  display: flex;
}

#mainmenu a {
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: #fff;
  background-color: #202024;
  /* // background-color: rgb(0, 52, 104); */
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  transition: background-color 200ms;
}

#mainmenu a.active {
  border-bottom: 2px solid #94ff97;
}

#mainmenu a:hover {
  /* // background-color: #001b47; */
  color: #94ff97;
}

.logo-txt {
  background-color: #fff;
  color: #111;
  padding: 0.2rem;
  padding-bottom: 0.4rem;
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 900;
}

.logo-txt:hover {
  background-color: #94ff97;
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 14px;
  }
  #game-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 500px) {
  html,
  body {
    font-size: 12px;
  }
  #wrapper {
    position: relative;
  }
  #game-grid-wrapper {
    width: 80%;
  }
  #game-grid {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 6rem;
  }
}
#game-grid-wrapper {
  width: 90%;
  margin: 0 auto;
  /* // z-index: 5; */
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

#game-info {
  display: flex;
  justify-content: center;
  /* // margin-top:-3rem; */
}

#game-info-content {
  background: #777;
  padding: 2rem;
}

#game-info-content h3 span {
  padding-left: 1rem;
  color: #999;
  font-size: 1rem;
  font-weight: normal;
}

#game-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* // grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;
  // grid-column-gap: 1rem;
  // grid-row-gap: 1rem; */
}

.game-item {
  /* // width: 100%;
  // height: 100%; */
  width: 160px;
  /* // height: 150px; */
  margin-top: 4px;
  margin-bottom: 1rem;
  padding: 0.3125rem;
  /* // margin-left: 10px;
  // margin-right: 10px; */
  position: relative;
  cursor: pointer;
  /* // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column; */
  flex: 0 0 auto;
}

.game-item:hover img {
  transform: scale(0.95, 0.95);
}

.game-item:hover > .game-title span {
  color: rgb(148, 255, 151);
}

.game-item img {
  width: 150px;
  height: 150px;
  display: block;
  transition: transform 200ms;
  /* // width: 100%;
  // height: 100%;
  // border-radius: 4px; */
}

.game-title {
  transition: background-color 400ms;
  /* // display: block;
  // position: absolute;
  // bottom: 0px;
  // left: 0px;
  // margin-top: -24px;
  // color: #6acd64; */
  width: 150px;
  font-size: 18px;
  /* // max-height: 128px; */
  font-weight: 700;
  /* // background-color: rgb(0, 52, 104); */
  /* opacity: 0.2; */
  overflow: hidden;
  /* // border-radius: 3px; */
}

.game-title span {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  text-align: center;
}

.game-attributes ul {
  margin: 0;
  margin-top: 0.2rem;
  padding: 0;
}

.game-attributes ul li {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-attributes ul li span {
  color: #ccc;
}

.imagebox {
  width: 200px;
  height: 200px;
  margin-right: 0.5rem;
  border: 1px solid #000;
  display: inline-block;
  position: relative;
}

.imagesrc {
  width: 100%;
  height: 100%;
}

.imageupload {
  position: absolute;
  height: 2rem;
  line-height: 2rem;
  bottom: 2rem;
  width: 100%;
  text-align: center;
}

.imageremove {
  position: absolute;
  height: 2rem;
  width: 100%;
  line-height: 2rem;
  bottom: 0;
  text-align: center;
}

.imagebox-dragging {
  border: 1px solid #f00;
}

.imagebox .imagesrc img {
  width: 100%;
  height: 100%;
}

/* // .gamescreen {
//   width: 100%;
//   height: 100%;
//   border: 0;
//   background-color: #fff;
// } */
.btn-forfeit {
  width: 50px;
  height: 50px;
}

#gamepanel-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* // z-index: 99; */
}

#gameloading-wrapper {
  background-color: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* // z-index: 100; */
}

#gameloading > * {
  display: flex;
  align-items: center;
  justify-content: center;
}

#wrapper-freeform {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* // z-index: 4; */
}

#queue-panel {
  position: fixed;
  width: 100%;
  height: 200px;
  bottom: 0;
  left: 0;
  z-index: 6;
  /* // transition: height 500ms ease; */
  pointer-events: none;
  user-select: none;
  /* // transition: transform 0.5s ease; */
  /* // transform: translateY(60px); */
}

#queue-header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  pointer-events: none;
}

@-webkit-keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  80% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  90% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}
@keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  80% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  90% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}
#queue-loader {
  top: 2px;
  position: relative;
}

.line-scale-pulse-out-rapid > div {
  background-color: #fff;
  width: 2px;
  height: 20px;
  border-radius: 3px;
  margin: 1px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
}

.line-scale-pulse-out-rapid > div:nth-child(2),
.line-scale-pulse-out-rapid > div:nth-child(4) {
  -webkit-animation-delay: -0.25s !important;
  animation-delay: -0.25s !important;
}

.line-scale-pulse-out-rapid > div:nth-child(1),
.line-scale-pulse-out-rapid > div:nth-child(5) {
  -webkit-animation-delay: 0s !important;
  animation-delay: 0s !important;
}

#queue-tab {
  height: 41px;
  border: 1px solid #aaa;
  border-bottom: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  width: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: auto;
  cursor: grab;
  bottom: -1px;
  z-index: 101;
}

#queue-tab-divet {
  position: absolute;
  top: 4px;
  left: 80px;
  width: 40px;
  height: 2px;
  border-bottom: 1px solid #aaa;
  background-color: #eee;
}

#queue-tab-cancel {
  position: absolute;
  top: 3px;
  left: 10px;
  width: 20px;
  height: 2rem;
  line-height: 2rem;
  font-size: 2rem;
  pointer-events: auto;
  cursor: pointer;
}

#queue-searching {
  font-weight: bold;
  padding-right: 0.5rem;
}

#queue-content {
  background-color: #ccc;
  height: 160px;
  position: relative;
  z-index: 100;
  pointer-events: auto;
  border-top: 1px solid #aaa;
}

#queue-games ul {
  margin: 0;
  padding: 0;
  height: 60px;
}

#queue-games ul li {
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
}

.queue-game-title {
  display: inline-block;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.queue-game-mode {
  display: inline-block;
  padding: 0.2rem;
  background-color: #2c394b;
  color: #eee;
  border-radius: 4px;
  margin-right: 0.2rem;
}

.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form .form-row {
  margin-bottom: 1rem;
  display: block;
  width: 100%;
}

.form-row > label {
  margin: 0.5rem 0;
  font-size: 0.8rem;
  color: #94ff97;
  display: block;
}

.form-row > input {
  width: 15rem;
  display: block;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  height: 2.5rem;
  border-style: double;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.form-row > textarea {
  width: 15rem;
  min-height: 15rem;
  display: block;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.form-row > button {
  /* // width: 10rem;
  // height: 3rem; */
  border: 0;
}

.form-row > button.submit {
  background-color: #63ed56;
  font-weight: bold;
  /* // font-family: "Inter", "Oswald", sans-serif; */
}

.form-row > button.submit:hover {
  background-color: #52c548;
}

.form-row > button.submit:active {
  background-color: #94ff97;
}

#game-info-longdesc .mde-preview-content {
  padding: 0 2rem;
  font-size: 1.6rem;
  font-weight: 100;
}

#game-info-longdesc {
  font-size: 1.6rem;
  font-weight: 500;
  color: rgb(241, 249, 255);
  padding: 0;
}

#game-info-longdesc b, #game-info-longdesc strong {
  font-weight: 900;
}

#game-info-longdesc .mde-preview-content {
  padding: 0 2rem;
}

.chakra-ui-dark .react-mde .mde-header {
  background-color: #202024;
}
.chakra-ui-dark .mde-text {
  background: var(--chakra-colors-gray-800);
}
.chakra-ui-dark #game-info-longdesc,
.chakra-ui-dark .mde-preview-content {
  /* //   background: #777;
  // background-color: #333;
  // margin: 1rem 0; */
}
.chakra-ui-dark #game-info-longdesc p,
.chakra-ui-dark .mde-preview-content p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
.chakra-ui-dark #game-info-longdesc table,
.chakra-ui-dark .mde-preview-content table {
  border: 1px solid --chakra-colors-gray-500;
  border-color: #000;
  border-collapse: collapse;
  border-spacing: 0px;
  margin-bottom: 1rem;
}
.chakra-ui-dark #game-info-longdesc table tbody tr td,
.chakra-ui-dark #game-info-longdesc table thead tr th,
.chakra-ui-dark .mde-preview-content table tbody tr td,
.chakra-ui-dark .mde-preview-content table thead tr th {
  border: 1px solid #000;
  border-spacing: 0px;
  padding: 0.6rem;
}
.chakra-ui-dark #game-info-longdesc table thead tr th,
.chakra-ui-dark .mde-preview-content table thead tr th {
  border-bottom: 2px solid #000;
}
.chakra-ui-dark #game-info-longdesc table tbody tr,
.chakra-ui-dark #game-info-longdesc table thead tr,
.chakra-ui-dark .mde-preview-content table tbody tr,
.chakra-ui-dark .mde-preview-content table thead tr {
  border: 1px solid #000;
  border-spacing: 0px;
}

/* // .chakra-ui-light { */
#game-info-longdesc,
.mde-preview-content {
  /* //   background: #777;
  // background-color: 333;
  // margin: 1rem 0; */
  padding: 1rem;
}
#game-info-longdesc p,
.mde-preview-content p {
  margin-bottom: 2rem;
}
#game-info-longdesc blockquote,
.mde-preview-content blockquote {
  padding-left: 2rem;
  border-left: 0.5rem solid #08225a;
}
#game-info-longdesc a,
.mde-preview-content a {
  text-decoration: underline;
  color: #f1f9ff;
}
#game-info-longdesc code,
.mde-preview-content code {
  /* //background-color:#08225a; */
  border-radius: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
#game-info-longdesc strong,
.mde-preview-content strong {
  font-weight: bold;
}
#game-info-longdesc em,
.mde-preview-content em {
  /* //font-weight:bold; */
  font-style: italic;
}
#game-info-longdesc h1,
.mde-preview-content h1 {
  font-weight: bold;
  font-size: 24px;
}
#game-info-longdesc h2,
.mde-preview-content h2 {
  font-weight: bold;
  font-size: 22px;
}
#game-info-longdesc h3,
.mde-preview-content h3 {
  font-weight: bold;
  font-size: 20px;
}
#game-info-longdesc h4,
.mde-preview-content h4 {
  font-weight: bold;
  font-size: 16px;
}
#game-info-longdesc h5,
.mde-preview-content h5 {
  font-size: 14px;
  font-weight: bold;
}
#game-info-longdesc h6,
.mde-preview-content h6 {
  font-size: 12px;
  font-weight: bold;
}
#game-info-longdesc table,
.mde-preview-content table {
  border: 1px solid #000;
  border-color: #000;
  border-collapse: collapse;
  border-spacing: 0px;
  margin-bottom: 1rem;
}
#game-info-longdesc table tbody tr td,
#game-info-longdesc table thead tr th,
.mde-preview-content table tbody tr td,
.mde-preview-content table thead tr th {
  border: 1px solid #000;
  border-spacing: 0px;
  padding: 0.6rem;
}
#game-info-longdesc table thead tr th,
.mde-preview-content table thead tr th {
  border-bottom: 2px solid #000;
}
#game-info-longdesc table tbody tr,
#game-info-longdesc table thead tr,
.mde-preview-content table tbody tr,
.mde-preview-content table thead tr {
  border: 1px solid #000;
  border-spacing: 0px;
}

/* // } */
.chakra-form-control {
  margin-bottom: 2rem;
}

.blink_me {
  animation: blinker 3s ease-in-out infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.7;
  }
}
.textShineBlack {
  background: linear-gradient(to right, #fff 25%, #999 26%, #999 64%, #fff 65%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 4s ease-in infinite alternate;
}

@keyframes textShine {
  50% {
    background-position: 300%;
  }
}
.loadersDots,
.loadersDots:before,
.loadersDots:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.2s infinite ease-in-out;
  animation: load7 1.2s infinite ease-in-out;
}

.loadersDots {
  color: #63ed56;
  font-size: 3px;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.loadersDots:before,
.loadersDots:after {
  content: "";
  position: absolute;
  top: 0;
}

.loadersDots:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loadersDots:after {
  left: 3.5em;
}

@-webkit-keyframes load7 {
  0%, 80%, 100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%, 80%, 100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
.loaderBars,
.loaderBars:before,
.loaderBars:after {
  background: #fff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 0.5em;
  height: 2em;
}

.loaderBars {
  color: #fff;
  text-indent: -9999em;
  margin-left: 1rem;
  position: relative;
  font-size: 6px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.loaderBars:before,
.loaderBars:after {
  position: absolute;
  top: 0;
  content: "";
}

.loaderBars:before {
  left: -1em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loaderBars:after {
  left: 1em;
}

@-webkit-keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 1.5em;
  }
  40% {
    box-shadow: 0 -1em;
    height: 1.5em;
  }
}
@keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 1.5em;
  }
  40% {
    box-shadow: 0 -1em;
    height: 1.5em;
  }
}
.loaderLineUp {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #94ff97;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
.shimmer {
  margin: 0 auto;
  padding: 0 140px 0 0;
  display: inline;
  margin-bottom: 0;
  text-align: center;
  color: rgba(148, 255, 151, 0.1);
  background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #94ff97));
  background: -moz-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #94ff97));
  background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #94ff97));
  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: shimmer;
  -moz-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #222;
}

@-moz-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-webkit-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-o-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
/* LOADING SPINNER */
.digitaltimer {
  font-variant-numeric: tabular-nums;
}

@keyframes timerblink {
  0% {
    color: #E53E3E;
  }
  50% {
    color: rgb(254, 254, 255);
  }
  100% {
    color: #E53E3E;
  }
}`, "",{"version":3,"sources":["webpack://./../client/src/app.scss"],"names":[],"mappings":"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","sourcesContent":["/* // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n// @import url(\"https://fonts.googleapis.com/css?family=Oswald:400,500,700\");\n// @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n// @import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\"); */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap\");\n\n\n* {\n  box-sizing: border-box;\n  margin:0;\n  padding:0;\n  \n}\n\n#root {\n  display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n    width: 100%;\n  /* background-color: red; */\n}\n\n\n\n* {\n  -webkit-tap-highlight-color: transparent;\n}\n\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  /* // overflow: hidden;\n  //   background-color: #333;\n  //   color: #fff;\n  //   font-size: 16px;\n  //   font-weight: 400;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n  //   -webkit-font-smoothing: antialiased;\n  //   -moz-osx-font-smoothing: grayscale; */\n}\n\n\na {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.simplebar-wrapper {\n  height:100%;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: #fff;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0;\n  overflow:visible;\n  \n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n  width:0;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  /* // background-color: rgb(136, 136, 136); */\n  border-radius:4px;\n  transition: background-color 1s ease;\n  background-color: #fff;\n  /* // rgb(14,16,20); */\n  width:0;\n}\n\n.showscroll::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  /* // rgb(80, 80, 80); */\n}\n\n.hidescroll::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  /* ///rgb(14,16,20); */\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n/* // #wrapper {\n//   display: flex;\n//   flex-direction: column;\n//   width: 100%;\n//   height: 100%;\n//   min-height: 100%;\n// } */\n\n.chakra-ui-dark {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;\n    background-color: #202024;\n    /* // background-color: rgb(0, 52, 104); */\n  }\n}\n\n.chakra-ui-light {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;\n    background-color: #202024;\n    /* // background-color: rgb(0, 52, 104); */\n  }\n}\n\n#wrapper-content {\n  width: 100%;\n  height: 100%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n}\n\n#mainmenu {\n  width: 92%;\n  margin-left: 4%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  /* // align-items: center; */\n}\n\n#mainmenu ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n#mainmenu ul.menu-nav {\n  flex: 4;\n}\n#mainmenu ul.menu-nav {\n  flex: 1;\n}\n\n#mainmenu ul li {\n  flex: auto;\n  display: flex;\n}\n\n#mainmenu .indicator-down {\n  color: #aaa;\n  margin-left: -8px;\n  margin-top: 5px;\n  /* // z-index: 10; */\n  font-size: 1rem;\n}\n\n#mainmenu ul li.hasmenu {\n  flex: auto;\n  display: block;\n}\n\n#mainmenu ul li.actions {\n  flex: 1;\n}\n\n#mainmenu ul li ul.submenu {\n  display: block;\n  position: absolute;\n  /* // z-index: 999; */\n  margin-left: -1rem;\n}\n\n#mainmenu ul li ul.submenu li {\n  display: block;\n}\n\n#mainmenu ul li a {\n  align-items: center;\n  line-height: normal;\n  height: 3rem;\n  display: flex;\n}\n\n#mainmenu a {\n  display: block;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: #202024;\n  /* // background-color: rgb(0, 52, 104); */\n  text-decoration-thickness: auto;\n  text-size-adjust: 100%;\n  transition: background-color 200ms;\n}\n\n#mainmenu a.active {\n  border-bottom: 2px solid #94ff97;\n}\n#mainmenu a:hover {\n  /* // background-color: #001b47; */\n  color: #94ff97;\n}\n\n.logo-txt {\n  background-color: #fff;\n  color: #111;\n  padding: 0.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  font-weight: 900;\n}\n\n.logo-txt:hover {\n  background-color: #94ff97;\n}\n\n@media screen and (max-width: 768px) {\n  html,\n  body {\n    font-size: 14px;\n  }\n  #game-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width: 500px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n\n  #wrapper {\n    position: relative;\n  }\n  \n  #game-grid-wrapper {\n    width: 80%;\n  }\n  #game-grid {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n\n#game-grid-wrapper {\n  width: 90%;\n  margin: 0 auto;\n  /* // z-index: 5; */\n  position: relative;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-info {\n  display: flex;\n  justify-content: center;\n  /* // margin-top:-3rem; */\n}\n\n#game-info-content {\n  background: #777;\n  padding: 2rem;\n}\n\n#game-info-content h3 span {\n  padding-left: 1rem;\n  color: #999;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n#game-grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  /* // grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;\n  // grid-column-gap: 1rem;\n  // grid-row-gap: 1rem; */\n}\n\n@media screen and (max-width: 700px) {\n}\n@media screen and (max-width: 400px) {\n}\n\n.game-item {\n  /* // width: 100%;\n  // height: 100%; */\n  width: 160px;\n  /* // height: 150px; */\n  margin-top: 4px;\n  margin-bottom: 1rem;\n  padding: 0.3125rem;\n  /* // margin-left: 10px;\n  // margin-right: 10px; */\n  position: relative;\n  cursor: pointer;\n\n  /* // display: flex;\n  // justify-content: center;\n  // align-items: center;\n  // flex-direction: column; */\n\n  flex: 0 0 auto;\n}\n\n.game-item:hover img {\n  transform: scale(0.95, 0.95);\n}\n\n.game-item:hover > .game-title span {\n  color: rgb(148, 255, 151);\n}\n\n.game-item img {\n  width: 150px;\n  height: 150px;\n  display: block;\n  transition: transform 200ms;\n  /* // width: 100%;\n  // height: 100%;\n  // border-radius: 4px; */\n}\n.game-title {\n  transition: background-color 400ms;\n  /* // display: block;\n  // position: absolute;\n  // bottom: 0px;\n  // left: 0px;\n  // margin-top: -24px;\n  // color: #6acd64; */\n  width: 150px;\n  font-size: 18px;\n  /* // max-height: 128px; */\n  font-weight: 700;\n\n  /* // background-color: rgb(0, 52, 104); */\n  /* opacity: 0.2; */\n\n  overflow: hidden;\n  /* // border-radius: 3px; */\n}\n\n.game-title span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 24px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n.game-attributes ul {\n  margin: 0;\n  margin-top: 0.2rem;\n  padding: 0;\n}\n\n.game-attributes ul li {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.game-attributes ul li span {\n  color: #ccc;\n}\n\n.imagebox {\n  width: 200px;\n  height: 200px;\n  margin-right: 0.5rem;\n  border: 1px solid #000;\n  display: inline-block;\n  position: relative;\n}\n.imagesrc {\n  width: 100%;\n  height: 100%;\n}\n.imageupload {\n  position: absolute;\n  height: 2rem;\n  line-height: 2rem;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n}\n.imageremove {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  line-height: 2rem;\n  bottom: 0;\n  text-align: center;\n}\n.imagebox-dragging {\n  border: 1px solid #f00;\n}\n.imagebox .imagesrc img {\n  width: 100%;\n  height: 100%;\n}\n\n/* // .gamescreen {\n//   width: 100%;\n//   height: 100%;\n//   border: 0;\n//   background-color: #fff;\n// } */\n\n.btn-forfeit {\n  width: 50px;\n  height: 50px;\n}\n\n\n\n#gamepanel-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* // z-index: 99; */\n}\n\n#gameloading-wrapper {\n  background-color: #eee;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* // z-index: 100; */\n}\n\n#gameloading > * {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n#wrapper-freeform {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* // z-index: 4; */\n}\n\n#queue-panel {\n  position: fixed;\n  width: 100%;\n  height: 200px;\n  bottom: 0;\n  left: 0;\n  z-index: 6;\n  /* // transition: height 500ms ease; */\n  pointer-events: none;\n  user-select: none;\n  /* // transition: transform 0.5s ease; */\n  /* // transform: translateY(60px); */\n}\n\n#queue-header {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  pointer-events: none;\n}\n\n@-webkit-keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n@keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n#queue-loader {\n  top: 2px;\n  position: relative;\n}\n.line-scale-pulse-out-rapid > div {\n  background-color: #fff;\n  width: 2px;\n  height: 20px;\n  border-radius: 3px;\n  margin: 1px;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n}\n.line-scale-pulse-out-rapid > div:nth-child(2),\n.line-scale-pulse-out-rapid > div:nth-child(4) {\n  -webkit-animation-delay: -0.25s !important;\n  animation-delay: -0.25s !important;\n}\n.line-scale-pulse-out-rapid > div:nth-child(1),\n.line-scale-pulse-out-rapid > div:nth-child(5) {\n  -webkit-animation-delay: 0s !important;\n  animation-delay: 0s !important;\n}\n\n\n\n#queue-tab {\n  height: 41px;\n  border: 1px solid #aaa;\n  border-bottom: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  width: 200px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  pointer-events: auto;\n  cursor: grab;\n  bottom: -1px;\n  z-index: 101;\n}\n\n#queue-tab-divet {\n  position: absolute;\n  top: 4px;\n  left: 80px;\n  width: 40px;\n  height: 2px;\n  border-bottom: 1px solid #aaa;\n  background-color: #eee;\n}\n\n#queue-tab-cancel {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 20px;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 2rem;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n#queue-searching {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n\n#queue-content {\n  background-color: #ccc;\n  height: 160px;\n  position: relative;\n  z-index: 100;\n  pointer-events: auto;\n  border-top: 1px solid #aaa;\n}\n\n#queue-games ul {\n  margin: 0;\n  padding: 0;\n  height: 60px;\n}\n\n#queue-games ul li {\n  width: 150px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.queue-game-title {\n  display: inline-block;\n  padding: 0.3rem;\n  font-size: 1.2rem;\n}\n\n.queue-game-mode {\n  display: inline-block;\n  padding: 0.2rem;\n  background-color: #2c394b;\n  color: #eee;\n  border-radius: 4px;\n  margin-right: 0.2rem;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .form-row {\n  margin-bottom: 1rem;\n  display: block;\n  width: 100%;\n}\n\n.form-row > label {\n  margin: 0.5rem 0;\n  font-size: 0.8rem;\n  color: #94ff97;\n  display: block;\n}\n\n.form-row > input {\n  width: 15rem;\n  display: block;\n  padding-left: 0.5rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  border-style: double;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.form-row > textarea {\n  width: 15rem;\n  min-height: 15rem;\n  display: block;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.form-row > button {\n  /* // width: 10rem;\n  // height: 3rem; */\n  border: 0;\n}\n.form-row > button.submit {\n  background-color: #63ed56;\n  \n  font-weight: bold;\n  /* // font-family: \"Inter\", \"Oswald\", sans-serif; */\n}\n.form-row > button.submit:hover {\n  background-color: #52c548;\n}\n.form-row > button.submit:active {\n  background-color: #94ff97;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n  font-size: 1.6rem;\n  font-weight:100;\n}\n\n#game-info-longdesc {\n  font-size: 1.6rem;\n  font-weight:500;\n  color: rgb(241, 249, 255);\n  padding:0;\n}\n\n\n#game-info-longdesc b, #game-info-longdesc strong {\n  font-weight:900;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n}\n\n.chakra-ui-dark {\n  .react-mde .mde-header {\n    background-color: #202024;\n  }\n  .mde-text {\n    background: var(--chakra-colors-gray-800);\n  }\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    /* //   background: #777;\n    // background-color: #333;\n    // margin: 1rem 0; */\n\n    p {\n      margin-top: 0.5rem;\n      margin-bottom:2rem;\n    }\n    table {\n      border: 1px solid --chakra-colors-gray-500;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n}\n\n/* // .chakra-ui-light { */\n\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    /* //   background: #777;\n    // background-color: 333;\n    // margin: 1rem 0; */\n    padding: 1rem;\n    p {\n      margin-bottom: 2rem;\n    }\n    blockquote {\n      padding-left:2rem;\n      border-left:0.5rem solid #08225a;\n    }\n    a {\n      text-decoration: underline;\n      color:#f1f9ff;\n    }\n    code {\n      /* //background-color:#08225a; */\n      border-radius: 0.2rem;\n      padding-left:0.5rem;\n      padding-right:0.5rem;\n    }\n    strong {\n      font-weight:bold;\n    }\n    em {\n      /* //font-weight:bold; */\n      font-style: italic;\n    }\n    h1 { \n      font-weight:bold;\n      font-size:24px;\n    }\n    h2 {\n      font-weight:bold;\n      font-size:22px;\n    }\n    h3 {\n      font-weight:bold;\n      font-size:20px;\n    }\n    h4 {\n      font-weight:bold;\n      font-size:16px;\n    }\n    h5 {\n      font-size:14px;\n      font-weight:bold;\n    }\n    h6 {\n      font-size:12px;\n      font-weight:bold;\n    }\n    table {\n      border: 1px solid #000;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n/* // } */\n\n.chakra-form-control {\n  margin-bottom: 2rem;\n}\n\n.blink_me {\n  animation: blinker 3s ease-in-out infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0.7;\n  }\n}\n\n.textShineBlack {\n  background: linear-gradient(to right, #fff 25%, #999 26%, #999 64%, #fff 65%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% auto;\n  animation: textShine 4s ease-in infinite alternate;\n}\n\n@keyframes textShine {\n  50% {\n    background-position: 300%;\n  }\n}\n\n.loadersDots,\n.loadersDots:before,\n.loadersDots:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.2s infinite ease-in-out;\n  animation: load7 1.2s infinite ease-in-out;\n}\n.loadersDots {\n  color: #63ed56;\n  font-size: 3px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loadersDots:before,\n.loadersDots:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.loadersDots:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loadersDots:after {\n  left: 3.5em;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n.loaderBars,\n.loaderBars:before,\n.loaderBars:after {\n  background: #fff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 0.5em;\n  height: 2em;\n}\n.loaderBars {\n  color: #fff;\n  text-indent: -9999em;\n  margin-left: 1rem;\n  position: relative;\n  font-size: 6px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loaderBars:before,\n.loaderBars:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loaderBars:before {\n  left: -1em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loaderBars:after {\n  left: 1em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n\n.loaderLineUp {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: block;\n  margin: 15px auto;\n  position: relative;\n  color: #94ff97;\n  left: -100px;\n  box-sizing: border-box;\n  animation: shadowRolling 2s linear infinite;\n}\n\n@keyframes shadowRolling {\n  0% {\n    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  12% {\n    box-shadow: 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  25% {\n    box-shadow: 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  36% {\n    box-shadow: 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97,\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  50% {\n    box-shadow: 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97,\n      100px 0 #94ff97;\n  }\n  62% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97,\n      110px 0 #94ff97;\n  }\n  75% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      130px 0 #94ff97, 120px 0 #94ff97;\n  }\n  87% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97;\n  }\n  100% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.shimmer {\n  margin: 0 auto;\n  padding: 0 140px 0 0;\n  display: inline;\n  margin-bottom: 0;\n  text-align: center;\n  color: rgba(148, 255, 151, 0.1);\n  background: gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: -moz-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  -webkit-background-size: 125px 100%;\n  -moz-background-size: 125px 100%;\n  background-size: 125px 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  -webkit-animation-name: shimmer;\n  -moz-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-duration: 2s;\n  -moz-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-color: #222;\n}\n@-moz-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-webkit-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-o-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n\n/* LOADING SPINNER */\n\n.digitaltimer {\n  font-variant-numeric: tabular-nums;\n}\n\n@keyframes timerblink {\n  0% {\n    color: #E53E3E;\n  }\n  50% {\n    color: rgb(254,254,255);\n  }\n  100% {\n    color: #E53E3E;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe05346bd7c7827e067d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjgyNDFmNTg0MWQ3YzI5Y2ZlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUg7QUFDakI7QUFDaEcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRixxSEFBcUgsSUFBSSxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNyTTtBQUNBLG9IQUFvSCxJQUFJLElBQUk7QUFDNUg7QUFDQSx3RUFBd0UsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTs7QUFFcEcsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQ0FBMkM7QUFDM0MsbUJBQW1CO0FBQ25CO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE9BQU8sTUFBTSxXQUFXLFNBQVMsTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxNQUFNLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssU0FBUyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLFFBQVEsV0FBVyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFlBQVksS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxtR0FBbUcsSUFBSSxJQUFJLG1CQUFtQixpRkFBaUYsMkVBQTJFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksb0JBQW9CLGlGQUFpRixtRkFBbUYsSUFBSSxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLG9CQUFvQixTQUFTLDJCQUEyQixhQUFhLGNBQWMsT0FB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dXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL2FwcC5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6NDAwLDUwMCw3MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTsgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG5cbioge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLyogLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvLyAgIGNvbG9yOiAjZmZmO1xuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICBmb250LXdlaWdodDogNDAwO1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvLyAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICovXG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW1wbGViYXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbXBsZWJhci1zY3JvbGxiYXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGxlZnQ6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiAvLyByZ2IoMTQsMTYsMjApOyAqL1xuICB3aWR0aDogMDtcbn1cblxuLnNob3dzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogLy8gcmdiKDgwLCA4MCwgODApOyAqL1xufVxuXG4uaGlkZXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiAvLy9yZ2IoMTQsMTYsMjApOyAqL1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuXG5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4vKiAvLyAjd3JhcHBlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4vLyB9ICovXG4uY2hha3JhLXVpLWRhcmsgI3dyYXBwZXItaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgei1pbmRleDogMjA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43KSAwcHggMXB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC44KSAwcHggMHB4IDJweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XG4gIC8qIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTsgKi9cbn1cblxuLmNoYWtyYS11aS1saWdodCAjd3JhcHBlci1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAxcHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjUpIDBweCAwcHggMnB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbiAgLyogLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpOyAqL1xufVxuXG4jd3JhcHBlci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI21haW5tZW51IHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG5cbiNtYWlubWVudSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xuICBmbGV4OiA0O1xufVxuXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xuICBmbGV4OiAxO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbWFpbm1lbnUgLmluZGljYXRvci1kb3duIHtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8qIC8vIHotaW5kZXg6IDEwOyAqL1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbiNtYWlubWVudSB1bCBsaS5oYXNtZW51IHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNtYWlubWVudSB1bCBsaS5hY3Rpb25zIHtcbiAgZmxleDogMTtcbn1cblxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiAvLyB6LWluZGV4OiA5OTk7ICovXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbn1cblxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21haW5tZW51IHVsIGxpIGEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNtYWlubWVudSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7ICovXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbiNtYWlubWVudSBhLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTRmZjk3O1xufVxuXG4jbWFpbm1lbnUgYTpob3ZlciB7XG4gIC8qIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDFiNDc7ICovXG4gIGNvbG9yOiAjOTRmZjk3O1xufVxuXG4ubG9nby10eHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4ubG9nby10eHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2dhbWUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICN3cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI2dhbWUtZ3JpZC13cmFwcGVyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gICNnYW1lLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gIH1cbn1cbiNnYW1lLWdyaWQtd3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAvKiAvLyB6LWluZGV4OiA1OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZ2FtZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIC8vIG1hcmdpbi10b3A6LTNyZW07ICovXG59XG5cbiNnYW1lLWluZm8tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbiNnYW1lLWluZm8tY29udGVudCBoMyBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jZ2FtZS1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKiAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4O1xuICAvLyBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gIC8vIGdyaWQtcm93LWdhcDogMXJlbTsgKi9cbn1cblxuLmdhbWUtaXRlbSB7XG4gIC8qIC8vIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDEwMCU7ICovXG4gIHdpZHRoOiAxNjBweDtcbiAgLyogLy8gaGVpZ2h0OiAxNTBweDsgKi9cbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW07XG4gIC8qIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi5nYW1lLWl0ZW06aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcbn1cblxuLmdhbWUtaXRlbTpob3ZlciA+IC5nYW1lLXRpdGxlIHNwYW4ge1xuICBjb2xvcjogcmdiKDE0OCwgMjU1LCAxNTEpO1xufVxuXG4uZ2FtZS1pdGVtIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcbiAgLyogLy8gd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNHB4OyAqL1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XG4gIC8qIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGJvdHRvbTogMHB4O1xuICAvLyBsZWZ0OiAwcHg7XG4gIC8vIG1hcmdpbi10b3A6IC0yNHB4O1xuICAvLyBjb2xvcjogIzZhY2Q2NDsgKi9cbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8qIC8vIG1heC1oZWlnaHQ6IDEyOHB4OyAqL1xuICBmb250LXdlaWdodDogNzAwO1xuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7ICovXG4gIC8qIG9wYWNpdHk6IDAuMjsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogLy8gYm9yZGVyLXJhZGl1czogM3B4OyAqL1xufVxuXG4uZ2FtZS10aXRsZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdhbWUtYXR0cmlidXRlcyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkgc3BhbiB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uaW1hZ2Vib3gge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlc3JjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdldXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBib3R0b206IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZXJlbW92ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Vib3gtZHJhZ2dpbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjAwO1xufVxuXG4uaW1hZ2Vib3ggLmltYWdlc3JjIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIC8vIC5nYW1lc2NyZWVuIHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gfSAqL1xuLmJ0bi1mb3JmZWl0IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuI2dhbWVwYW5lbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC8qIC8vIHotaW5kZXg6IDk5OyAqL1xufVxuXG4jZ2FtZWxvYWRpbmctd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAvKiAvLyB6LWluZGV4OiAxMDA7ICovXG59XG5cbiNnYW1lbG9hZGluZyA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3dyYXBwZXItZnJlZWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogLy8gei1pbmRleDogNDsgKi9cbn1cblxuI3F1ZXVlLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA2O1xuICAvKiAvLyB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZTsgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiAvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlOyAqL1xuICAvKiAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCk7ICovXG59XG5cbiNxdWV1ZS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogNDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gIH1cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcbiAgfVxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbn1cbiNxdWV1ZS1sb2FkZXIge1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAxcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XG4gIGFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XG59XG5cbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMiksXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xufVxuXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDEpLFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XG59XG5cbiNxdWV1ZS10YWIge1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBncmFiO1xuICBib3R0b206IC0xcHg7XG4gIHotaW5kZXg6IDEwMTtcbn1cblxuI3F1ZXVlLXRhYi1kaXZldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDgwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbiNxdWV1ZS10YWItY2FuY2VsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3F1ZXVlLXNlYXJjaGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbiNxdWV1ZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcbn1cblxuI3F1ZXVlLWdhbWVzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiNxdWV1ZS1nYW1lcyB1bCBsaSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVldWUtZ2FtZS10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4zcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnF1ZXVlLWdhbWUtbW9kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzOTRiO1xuICBjb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0gLmZvcm0tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1yb3cgPiBsYWJlbCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzk0ZmY5NztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXJvdyA+IGlucHV0IHtcbiAgd2lkdGg6IDE1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9ybS1yb3cgPiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbiB7XG4gIC8qIC8vIHdpZHRoOiAxMHJlbTtcbiAgLy8gaGVpZ2h0OiAzcmVtOyAqL1xuICBib3JkZXI6IDA7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNlZDU2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogLy8gZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjsgKi9cbn1cblxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NDg7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmY5Nztcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyAubWRlLXByZXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2Mge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYigyNDEsIDI0OSwgMjU1KTtcbiAgcGFkZGluZzogMDtcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyBiLCAjZ2FtZS1pbmZvLWxvbmdkZXNjIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5jaGFrcmEtdWktZGFyayAucmVhY3QtbWRlIC5tZGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbn1cbi5jaGFrcmEtdWktZGFyayAubWRlLXRleHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktODAwKTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHtcbiAgLyogLy8gICBiYWNrZ3JvdW5kOiAjNzc3O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvLyBtYXJnaW46IDFyZW0gMDsgKi9cbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHAsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwO1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0ciB0ZCxcbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyIHRkLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyLFxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGJvZHkgdHIsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG4vKiAvLyAuY2hha3JhLXVpLWxpZ2h0IHsgKi9cbiNnYW1lLWluZm8tbG9uZ2Rlc2MsXG4ubWRlLXByZXZpZXctY29udGVudCB7XG4gIC8qIC8vICAgYmFja2dyb3VuZDogIzc3NztcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogMzMzO1xuICAvLyBtYXJnaW46IDFyZW0gMDsgKi9cbiAgcGFkZGluZzogMXJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgcCxcbi5tZGUtcHJldmlldy1jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBibG9ja3F1b3RlLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgYmxvY2txdW90ZSB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjMDgyMjVhO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBhLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2YxZjlmZjtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgY29kZSxcbi5tZGUtcHJldmlldy1jb250ZW50IGNvZGUge1xuICAvKiAvL2JhY2tncm91bmQtY29sb3I6IzA4MjI1YTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBzdHJvbmcsXG4ubWRlLXByZXZpZXctY29udGVudCBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgZW0sXG4ubWRlLXByZXZpZXctY29udGVudCBlbSB7XG4gIC8qIC8vZm9udC13ZWlnaHQ6Ym9sZDsgKi9cbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoMSxcbi5tZGUtcHJldmlldy1jb250ZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDIsXG4ubWRlLXByZXZpZXctY29udGVudCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGgzLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoNCxcbi5tZGUtcHJldmlldy1jb250ZW50IGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDUsXG4ubWRlLXByZXZpZXctY29udGVudCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGg2LFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0ciB0ZCxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0Ym9keSB0ciB0ZCxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0ciB0aCxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyLFxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0cixcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG4vKiAvLyB9ICovXG4uY2hha3JhLWZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ibGlua19tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbi50ZXh0U2hpbmVCbGFjayB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAyNSUsICM5OTkgMjYlLCAjOTk5IDY0JSwgI2ZmZiA2NSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBhbmltYXRpb246IHRleHRTaGluZSA0cyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyB0ZXh0U2hpbmUge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCU7XG4gIH1cbn1cbi5sb2FkZXJzRG90cyxcbi5sb2FkZXJzRG90czpiZWZvcmUsXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDcgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9hZGVyc0RvdHMge1xuICBjb2xvcjogIzYzZWQ1NjtcbiAgZm9udC1zaXplOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbi5sb2FkZXJzRG90czpiZWZvcmUsXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmxvYWRlcnNEb3RzOmJlZm9yZSB7XG4gIGxlZnQ6IC0zLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5sb2FkZXJzRG90czphZnRlciB7XG4gIGxlZnQ6IDMuNWVtO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDcge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDcge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gIH1cbn1cbi5sb2FkZXJCYXJzLFxuLmxvYWRlckJhcnM6YmVmb3JlLFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5sb2FkZXJCYXJzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbi5sb2FkZXJCYXJzOmJlZm9yZSxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5sb2FkZXJCYXJzOmJlZm9yZSB7XG4gIGxlZnQ6IC0xZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4ubG9hZGVyQmFyczphZnRlciB7XG4gIGxlZnQ6IDFlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkMSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbn1cbi5sb2FkZXJMaW5lVXAge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzk0ZmY5NztcbiAgbGVmdDogLTEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHNoYWRvd1JvbGxpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWRvd1JvbGxpbmcge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICAxMiUge1xuICAgIGJveC1zaGFkb3c6IDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDM2JSB7XG4gICAgYm94LXNoYWRvdzogMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA2MiUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA4NyUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NztcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbn1cbi5zaGltbWVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMTQwcHggMCAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTQ4LCAyNTUsIDE1MSwgMC4xKTtcbiAgYmFja2dyb3VuZDogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMyMjIpLCB0bygjMjIyKSwgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpKTtcbiAgYmFja2dyb3VuZDogLW1vei1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzIyMiksIHRvKCMyMjIpLCBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NykpO1xuICBiYWNrZ3JvdW5kOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzIyMiksIHRvKCMyMjIpLCBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbi8qIExPQURJTkcgU1BJTk5FUiAqL1xuLmRpZ2l0YWx0aW1lciB7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbkBrZXlmcmFtZXMgdGltZXJibGluayB7XG4gIDAlIHtcbiAgICBjb2xvcjogI0U1M0UzRTtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICNFNTNFM0U7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NsaWVudC9zcmMvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7NEVBQUE7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDRiwyQkFBQTtBQUhGOztBQVFBO0VBQ0Usd0NBQUE7QUFMRjs7QUFTQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0E7Ozs7Ozs7NENBQUE7QUFDRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFXQTtFQUNFLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQVJGOztBQVdBLFVBQUE7QUFDQTtFQUNFLFFBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVlBLFVBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsUUFBQTtBQVRGOztBQVlBLFdBQUE7QUFDQTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBVEY7O0FB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QkFBQTtFQUNBLGlHQUFBO0VBUUEsc0dBQUE7RUFRQSxpR0FBQTtFQVFBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQTlDRjs7QUFnREE7RUFDRTtJQUNFLDZCQUFBO0VBN0NGO0VBK0NBO0lBQ0UsOEJBQUE7RUE3Q0Y7QUFDRjtBQStDQTtFQUNFO0lBQ0UsNkJBQUE7RUE3Q0Y7RUErQ0E7SUFDRSw4QkFBQTtFQTdDRjtBQUNGO0FBK0NBO0VBQ0U7SUFDRSw2QkFBQTtFQTdDRjtFQStDQTtJQUNFLDhCQUFBO0VBN0NGO0FBQ0Y7QUErQ0E7RUFDRTtJQUNFLDZCQUFBO0VBN0NGO0VBK0NBO0lBQ0UsOEJBQUE7RUE3Q0Y7QUFDRjtBQWdEQSxvQkFBQTtBQUVBO0VBQ0Usa0NBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0U7SUFDRSxjQUFBO0VBL0NGO0VBaURBO0lBQ0UseUJBQUE7RUEvQ0Y7RUFpREE7SUFDRSxjQUFBO0VBL0NGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG4vLyBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDo0MDAsNTAwLDcwMFxcXCIpO1xcbi8vIEBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLy8gQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcXFwiKTsgKi9cXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DaGFrcmErUGV0Y2g6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1JbnRlcjp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOjA7XFxuICBcXG59XFxuXFxuI3Jvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG5cXG5cXG5cXG4qIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiAvLyBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgLy8gICBjb2xvcjogI2ZmZjtcXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xcbiAgLy8gICBmb250LXdlaWdodDogNDAwO1xcbiAgLy8gZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC8vICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgKi9cXG59XFxuXFxuXFxuYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnNpbXBsZWJhci13cmFwcGVyIHtcXG4gIGhlaWdodDoxMDAlO1xcbn1cXG5cXG4uc2ltcGxlYmFyLXNjcm9sbGJhcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbGVmdDogMnB4O1xcbiAgcmlnaHQ6IDJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDA7XFxuICBvdmVyZmxvdzp2aXNpYmxlO1xcbiAgXFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOjA7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgLyogLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpOyAqL1xcbiAgYm9yZGVyLXJhZGl1czo0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogLy8gcmdiKDE0LDE2LDIwKTsgKi9cXG4gIHdpZHRoOjA7XFxufVxcblxcbi5zaG93c2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogLy8gcmdiKDgwLCA4MCwgODApOyAqL1xcbn1cXG5cXG4uaGlkZXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC8qIC8vL3JnYigxNCwxNiwyMCk7ICovXFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIixcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG4vKiAvLyAjd3JhcHBlciB7XFxuLy8gICBkaXNwbGF5OiBmbGV4O1xcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4vLyAgIHdpZHRoOiAxMDAlO1xcbi8vICAgaGVpZ2h0OiAxMDAlO1xcbi8vICAgbWluLWhlaWdodDogMTAwJTtcXG4vLyB9ICovXFxuXFxuLmNoYWtyYS11aS1kYXJrIHtcXG4gICN3cmFwcGVyLWhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNykgMHB4IDFweCAycHggMHB4LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44KSAwcHggMHB4IDJweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICAgIC8qIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTsgKi9cXG4gIH1cXG59XFxuXFxuLmNoYWtyYS11aS1saWdodCB7XFxuICAjd3JhcHBlci1oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAxcHggMnB4IDBweCxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDBweCAycHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xcbiAgICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7ICovXFxuICB9XFxufVxcblxcbiN3cmFwcGVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbiNtYWlubWVudSB7XFxuICB3aWR0aDogOTIlO1xcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC8qIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbiNtYWlubWVudSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNtYWlubWVudSB1bC5tZW51LW5hdiB7XFxuICBmbGV4OiA0O1xcbn1cXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI21haW5tZW51IHVsIGxpIHtcXG4gIGZsZXg6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbm1lbnUgLmluZGljYXRvci1kb3duIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICAvKiAvLyB6LWluZGV4OiAxMDsgKi9cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI21haW5tZW51IHVsIGxpLmhhc21lbnUge1xcbiAgZmxleDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkuYWN0aW9ucyB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkgdWwuc3VibWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIC8vIHotaW5kZXg6IDk5OTsgKi9cXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcXG59XFxuXFxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaSBhIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW5tZW51IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xcbiAgLyogLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpOyAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogYXV0bztcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4jbWFpbm1lbnUgYS5hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NGZmOTc7XFxufVxcbiNtYWlubWVudSBhOmhvdmVyIHtcXG4gIC8qIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDFiNDc7ICovXFxuICBjb2xvcjogIzk0ZmY5NztcXG59XFxuXFxuLmxvZ28tdHh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzExMTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5sb2dvLXR4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuICAjZ2FtZS1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgI3dyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gICNnYW1lLWdyaWQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICAjZ2FtZS1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxuICB9XFxufVxcblxcbiNnYW1lLWdyaWQtd3JhcHBlciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKiAvLyB6LWluZGV4OiA1OyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiAvLyBtYXJnaW4tdG9wOi0zcmVtOyAqL1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogIzc3NztcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbiNnYW1lLWluZm8tY29udGVudCBoMyBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI2dhbWUtZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4IDE2MHB4O1xcbiAgLy8gZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgLy8gZ3JpZC1yb3ctZ2FwOiAxcmVtOyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbn1cXG5cXG4uZ2FtZS1pdGVtIHtcXG4gIC8qIC8vIHdpZHRoOiAxMDAlO1xcbiAgLy8gaGVpZ2h0OiAxMDAlOyAqL1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgLyogLy8gaGVpZ2h0OiAxNTBweDsgKi9cXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAwLjMxMjVyZW07XFxuICAvKiAvLyBtYXJnaW4tbGVmdDogMTBweDtcXG4gIC8vIG1hcmdpbi1yaWdodDogMTBweDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIC8qIC8vIGRpc3BsYXk6IGZsZXg7XFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcblxcbiAgZmxleDogMCAwIGF1dG87XFxufVxcblxcbi5nYW1lLWl0ZW06aG92ZXIgaW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMC45NSk7XFxufVxcblxcbi5nYW1lLWl0ZW06aG92ZXIgPiAuZ2FtZS10aXRsZSBzcGFuIHtcXG4gIGNvbG9yOiByZ2IoMTQ4LCAyNTUsIDE1MSk7XFxufVxcblxcbi5nYW1lLWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcXG4gIC8qIC8vIHdpZHRoOiAxMDAlO1xcbiAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgLy8gYm9yZGVyLXJhZGl1czogNHB4OyAqL1xcbn1cXG4uZ2FtZS10aXRsZSB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zO1xcbiAgLyogLy8gZGlzcGxheTogYmxvY2s7XFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvLyBib3R0b206IDBweDtcXG4gIC8vIGxlZnQ6IDBweDtcXG4gIC8vIG1hcmdpbi10b3A6IC0yNHB4O1xcbiAgLy8gY29sb3I6ICM2YWNkNjQ7ICovXFxuICB3aWR0aDogMTUwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICAvKiAvLyBtYXgtaGVpZ2h0OiAxMjhweDsgKi9cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7ICovXFxuICAvKiBvcGFjaXR5OiAwLjI7ICovXFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogLy8gYm9yZGVyLXJhZGl1czogM3B4OyAqL1xcbn1cXG5cXG4uZ2FtZS10aXRsZSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmdhbWUtYXR0cmlidXRlcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIGxpIHNwYW4ge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5pbWFnZWJveCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW1hZ2VzcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWFnZXVwbG9hZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW1hZ2VyZW1vdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmltYWdlYm94LWRyYWdnaW5nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA7XFxufVxcbi5pbWFnZWJveCAuaW1hZ2VzcmMgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAvLyAuZ2FtZXNjcmVlbiB7XFxuLy8gICB3aWR0aDogMTAwJTtcXG4vLyAgIGhlaWdodDogMTAwJTtcXG4vLyAgIGJvcmRlcjogMDtcXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuLy8gfSAqL1xcblxcbi5idG4tZm9yZmVpdCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuXFxuXFxuI2dhbWVwYW5lbC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIC8qIC8vIHotaW5kZXg6IDk5OyAqL1xcbn1cXG5cXG4jZ2FtZWxvYWRpbmctd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLyogLy8gei1pbmRleDogMTAwOyAqL1xcbn1cXG5cXG4jZ2FtZWxvYWRpbmcgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbiN3cmFwcGVyLWZyZWVmb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIC8vIHotaW5kZXg6IDQ7ICovXFxufVxcblxcbiNxdWV1ZS1wYW5lbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogNjtcXG4gIC8qIC8vIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlOyAqL1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7ICovXFxuICAvKiAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCk7ICovXFxufVxcblxcbiNxdWV1ZS1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogNDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gIH1cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XFxuICB9XFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gIH1cXG59XFxuXFxuI3F1ZXVlLWxvYWRlciB7XFxuICB0b3A6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAxcHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCAwLjlzIC0wLjVzIGluZmluaXRlIGN1YmljLWJlemllcigwLjExLCAwLjQ5LCAwLjM4LCAwLjc4KTtcXG4gIGFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XFxufVxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMiksXFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg0KSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMjVzICFpbXBvcnRhbnQ7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xcbn1cXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDEpLFxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNSkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XFxufVxcblxcblxcblxcbiNxdWV1ZS10YWIge1xcbiAgaGVpZ2h0OiA0MXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJvdHRvbTogLTFweDtcXG4gIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuI3F1ZXVlLXRhYi1kaXZldCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDRweDtcXG4gIGxlZnQ6IDgwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4jcXVldWUtdGFiLWNhbmNlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDNweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNxdWV1ZS1zZWFyY2hpbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNxdWV1ZS1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcXG59XFxuXFxuI3F1ZXVlLWdhbWVzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNxdWV1ZS1nYW1lcyB1bCBsaSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnF1ZXVlLWdhbWUtdGl0bGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5xdWV1ZS1nYW1lLW1vZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzk0YjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtIC5mb3JtLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tcm93ID4gbGFiZWwge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICM5NGZmOTc7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcm0tcm93ID4gaW5wdXQge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuLmZvcm0tcm93ID4gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWluLWhlaWdodDogMTVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JtLXJvdyA+IGJ1dHRvbiB7XFxuICAvKiAvLyB3aWR0aDogMTByZW07XFxuICAvLyBoZWlnaHQ6IDNyZW07ICovXFxuICBib3JkZXI6IDA7XFxufVxcbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzZWQ1NjtcXG4gIFxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAvKiAvLyBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7ICovXFxufVxcbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU0ODtcXG59XFxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmY5NztcXG59XFxuXFxuI2dhbWUtaW5mby1sb25nZGVzYyAubWRlLXByZXZpZXctY29udGVudCB7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OjEwMDtcXG59XFxuXFxuI2dhbWUtaW5mby1sb25nZGVzYyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OjUwMDtcXG4gIGNvbG9yOiByZ2IoMjQxLCAyNDksIDI1NSk7XFxuICBwYWRkaW5nOjA7XFxufVxcblxcblxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgYiwgI2dhbWUtaW5mby1sb25nZGVzYyBzdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6OTAwO1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIC5tZGUtcHJldmlldy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLmNoYWtyYS11aS1kYXJrIHtcXG4gIC5yZWFjdC1tZGUgLm1kZS1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xcbiAgfVxcbiAgLm1kZS10ZXh0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTgwMCk7XFxuICB9XFxuXFxuICAjZ2FtZS1pbmZvLWxvbmdkZXNjLFxcbiAgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgICAvKiAvLyAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIC8vIG1hcmdpbjogMXJlbSAwOyAqL1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbToycmVtO1xcbiAgICB9XFxuICAgIHRhYmxlIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAtLWNoYWtyYS1jb2xvcnMtZ3JheS01MDA7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgICAgIHRib2R5IHRyIHRkLFxcbiAgICAgIHRoZWFkIHRyIHRoIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGVhZCB0ciB0aCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gICAgICB9XFxuXFxuICAgICAgdGJvZHkgdHIsXFxuICAgICAgdGhlYWQgdHIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIC8vIC5jaGFrcmEtdWktbGlnaHQgeyAqL1xcblxcblxcbiAgI2dhbWUtaW5mby1sb25nZGVzYyxcXG4gIC5tZGUtcHJldmlldy1jb250ZW50IHtcXG4gICAgLyogLy8gICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAzMzM7XFxuICAgIC8vIG1hcmdpbjogMXJlbSAwOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuICAgIGJsb2NrcXVvdGUge1xcbiAgICAgIHBhZGRpbmctbGVmdDoycmVtO1xcbiAgICAgIGJvcmRlci1sZWZ0OjAuNXJlbSBzb2xpZCAjMDgyMjVhO1xcbiAgICB9XFxuICAgIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIGNvbG9yOiNmMWY5ZmY7XFxuICAgIH1cXG4gICAgY29kZSB7XFxuICAgICAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiMwODIyNWE7ICovXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDowLjVyZW07XFxuICAgICAgcGFkZGluZy1yaWdodDowLjVyZW07XFxuICAgIH1cXG4gICAgc3Ryb25nIHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB9XFxuICAgIGVtIHtcXG4gICAgICAvKiAvL2ZvbnQtd2VpZ2h0OmJvbGQ7ICovXFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICAgIGgxIHsgXFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXNpemU6MjRweDtcXG4gICAgfVxcbiAgICBoMiB7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXNpemU6MjJweDtcXG4gICAgfVxcbiAgICBoMyB7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXNpemU6MjBweDtcXG4gICAgfVxcbiAgICBoNCB7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXNpemU6MTZweDtcXG4gICAgfVxcbiAgICBoNSB7XFxuICAgICAgZm9udC1zaXplOjE0cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgfVxcbiAgICBoNiB7XFxuICAgICAgZm9udC1zaXplOjEycHg7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgfVxcbiAgICB0YWJsZSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgdGJvZHkgdHIgdGQsXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgICAgfVxcblxcbiAgICAgIHRoZWFkIHRyIHRoIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgICAgIH1cXG5cXG4gICAgICB0Ym9keSB0cixcXG4gICAgICB0aGVhZCB0ciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4vKiAvLyB9ICovXFxuXFxuLmNoYWtyYS1mb3JtLWNvbnRyb2wge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmJsaW5rX21lIHtcXG4gIGFuaW1hdGlvbjogYmxpbmtlciAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2VyIHtcXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG59XFxuXFxuLnRleHRTaGluZUJsYWNrIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAyNSUsICM5OTkgMjYlLCAjOTk5IDY0JSwgI2ZmZiA2NSUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGFuaW1hdGlvbjogdGV4dFNoaW5lIDRzIGVhc2UtaW4gaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRleHRTaGluZSB7XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDAlO1xcbiAgfVxcbn1cXG5cXG4ubG9hZGVyc0RvdHMsXFxuLmxvYWRlcnNEb3RzOmJlZm9yZSxcXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDcgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbG9hZDcgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG59XFxuLmxvYWRlcnNEb3RzIHtcXG4gIGNvbG9yOiAjNjNlZDU2O1xcbiAgZm9udC1zaXplOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxufVxcbi5sb2FkZXJzRG90czpiZWZvcmUsXFxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4ubG9hZGVyc0RvdHM6YmVmb3JlIHtcXG4gIGxlZnQ6IC0zLjVlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG59XFxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcXG4gIGxlZnQ6IDMuNWVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDcge1xcbiAgMCUsXFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxvYWQ3IHtcXG4gIDAlLFxcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XFxuICB9XFxuICA0MCUge1xcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcXG4gIH1cXG59XFxuXFxuLmxvYWRlckJhcnMsXFxuLmxvYWRlckJhcnM6YmVmb3JlLFxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgd2lkdGg6IDAuNWVtO1xcbiAgaGVpZ2h0OiAyZW07XFxufVxcbi5sb2FkZXJCYXJzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogNnB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbn1cXG4ubG9hZGVyQmFyczpiZWZvcmUsXFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5sb2FkZXJCYXJzOmJlZm9yZSB7XFxuICBsZWZ0OiAtMWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbn1cXG4ubG9hZGVyQmFyczphZnRlciB7XFxuICBsZWZ0OiAxZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDA7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxuICA0MCUge1xcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbG9hZDEge1xcbiAgMCUsXFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAtMWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgfVxcbn1cXG5cXG4ubG9hZGVyTGluZVVwIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjOTRmZjk3O1xcbiAgbGVmdDogLTEwMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFuaW1hdGlvbjogc2hhZG93Um9sbGluZyAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hhZG93Um9sbGluZyB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG4gIDEyJSB7XFxuICAgIGJveC1zaGFkb3c6IDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgYm94LXNoYWRvdzogMTEwcHggMCAjOTRmZjk3LCAxMDBweCAwICM5NGZmOTcsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG4gIDM2JSB7XFxuICAgIGJveC1zaGFkb3c6IDEyMHB4IDAgIzk0ZmY5NywgMTEwcHggMCAjOTRmZjk3LCAxMDBweCAwICM5NGZmOTcsXFxuICAgICAgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJveC1zaGFkb3c6IDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsXFxuICAgICAgMTAwcHggMCAjOTRmZjk3O1xcbiAgfVxcbiAgNjIlIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NyxcXG4gICAgICAxMTBweCAwICM5NGZmOTc7XFxuICB9XFxuICA3NSUge1xcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NztcXG4gIH1cXG4gIDg3JSB7XFxuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2hpbW1lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTQwcHggMCAwO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE0OCwgMjU1LCAxNTEsIDAuMSk7XFxuICBiYWNrZ3JvdW5kOiBncmFkaWVudChcXG4gICAgbGluZWFyLFxcbiAgICBsZWZ0IHRvcCxcXG4gICAgcmlnaHQgdG9wLFxcbiAgICBmcm9tKCMyMjIpLFxcbiAgICB0bygjMjIyKSxcXG4gICAgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpXFxuICApO1xcbiAgYmFja2dyb3VuZDogLW1vei1ncmFkaWVudChcXG4gICAgbGluZWFyLFxcbiAgICBsZWZ0IHRvcCxcXG4gICAgcmlnaHQgdG9wLFxcbiAgICBmcm9tKCMyMjIpLFxcbiAgICB0bygjMjIyKSxcXG4gICAgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpXFxuICApO1xcbiAgYmFja2dyb3VuZDogZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hpbW1lcjtcXG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICBhbmltYXRpb24tbmFtZTogc2hpbW1lcjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcbkAtbW96LWtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQC1vLWtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICB9XFxufVxcblxcbi8qIExPQURJTkcgU1BJTk5FUiAqL1xcblxcbi5kaWdpdGFsdGltZXIge1xcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcXG59XFxuXFxuQGtleWZyYW1lcyB0aW1lcmJsaW5rIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6ICNFNTNFM0U7XFxuICB9XFxuICA1MCUge1xcbiAgICBjb2xvcjogcmdiKDI1NCwyNTQsMjU1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI0U1M0UzRTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZlMDUzNDZiZDdjNzgyN2UwNjdkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9