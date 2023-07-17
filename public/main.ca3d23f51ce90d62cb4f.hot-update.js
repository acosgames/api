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

.chakra-ui-dark #wrapper-header {
  width: 100%;
  height: 64px;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px, rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;
  background-color: #202024;
}

.chakra-ui-light #wrapper-header {
  width: 100%;
  height: 64px;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px, rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;
  background-color: #202024;
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
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  transition: background-color 200ms;
}

#mainmenu a.active {
  border-bottom: 2px solid #94ff97;
}

#mainmenu a:hover {
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
}

.game-item {
  width: 160px;
  margin-top: 4px;
  margin-bottom: 1rem;
  padding: 0.3125rem;
  position: relative;
  cursor: pointer;
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
}

.game-title {
  transition: background-color 400ms;
  width: 150px;
  font-size: 18px;
  font-weight: 700;
  /* opacity: 0.2; */
  overflow: hidden;
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
}

#gameloading-wrapper {
  background-color: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
}

#queue-panel {
  position: fixed;
  width: 100%;
  height: 200px;
  bottom: 0;
  left: 0;
  z-index: 6;
  pointer-events: none;
  user-select: none;
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
  border: 0;
}

.form-row > button.submit {
  background-color: #63ed56;
  font-weight: bold;
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

#game-info-longdesc,
.mde-preview-content {
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
  background: -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #94ff97));
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
}`, "",{"version":3,"sources":["webpack://./../client/src/app.scss"],"names":[],"mappings":"AAAA;;;;4EAAA;AASA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAFF;;AAMA;EACE,aAAA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACF,2BAAA;AAHF;;AAQA;EACE,wCAAA;AALF;;AASA;;EAEE,YAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA;;;;;;;4CAAA;AACF;;AAUA;EACE,WAAA;EACA,qBAAA;EACA,eAAA;AAPF;;AAWA;EACE,YAAA;AARF;;AAWA;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,+BAAA;AARF;;AAWA,UAAA;AACA;EACE,QAAA;EACA,iBAAA;AARF;;AAYA,UAAA;AACA;EACE,uBAAA;EACA,QAAA;AATF;;AAYA,WAAA;AACA;EACE,6CAAA;EACA,kBAAA;EACA,oCAAA;EACA,sBAAA;EACA,sBAAA;EACA,QAAA;AATF;;AAYA;EACE,sBAAA;EACA,wBAAA;AATF;;AAYA;EACE,sBAAA;EACA,sBAAA;AATF;;AAYA,oBAAA;AACA;EACE,sBAAA;AATF;;AAYA;EACE,+EAAA;AATF;;AAqBE;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,kFAAA;EAEA,yBAAA;AAnBJ;;AAyBE;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,kFAAA;EAEA,yBAAA;AAvBJ;;AA4BA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AAzBF;;AA4BA;EACE,UAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,8BAAA;AAzBF;;AA6BA;EACE,aAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AA1BF;;AA4BA;EACE,OAAA;AAzBF;;AA2BA;EACE,OAAA;AAxBF;;AA2BA;EACE,UAAA;EACA,aAAA;AAxBF;;AA2BA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EAEA,eAAA;AAzBF;;AA4BA;EACE,UAAA;EACA,cAAA;AAzBF;;AA4BA;EACE,OAAA;AAzBF;;AA4BA;EACE,cAAA;EACA,kBAAA;EAEA,kBAAA;AA1BF;;AA6BA;EACE,cAAA;AA1BF;;AA6BA;EACE,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AA1BF;;AA6BA;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,WAAA;EACA,yBAAA;EAEA,+BAAA;EACA,sBAAA;EACA,kCAAA;AA3BF;;AA8BA;EACE,gCAAA;AA3BF;;AA6BA;EAEE,cAAA;AA3BF;;AA8BA;EACE,sBAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AA3BF;;AA8BA;EACE,yBAAA;AA3BF;;AA8BA;EACE;;IAEE,eAAA;EA3BF;EA6BA;IACE,qCAAA;EA3BF;AACF;AA8BA;EACE;;IAEE,eAAA;EA5BF;EA+BA;IACE,kBAAA;EA7BF;EAgCA;IACE,UAAA;EA9BF;EAgCA;IACE,qCAAA;IACA,oBAAA;EA9BF;AACF;AAiCA;EACE,UAAA;EACA,cAAA;EAEA,kBAAA;AAhCF;;AAmCA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAhCF;;AAmCA;EACE,aAAA;EACA,uBAAA;AAhCF;;AAoCA;EACE,gBAAA;EACA,aAAA;AAjCF;;AAoCA;EACE,kBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAjCF;;AAoCA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;AAjCF;;AA4CA;EAGE,YAAA;EAEA,eAAA;EACA,mBAAA;EACA,kBAAA;EAGA,kBAAA;EACA,eAAA;EAOA,cAAA;AApDF;;AAuDA;EACE,4BAAA;AApDF;;AAuDA;EACE,yBAAA;AApDF;;AAuDA;EACE,YAAA;EACA,aAAA;EACA,cAAA;EACA,2BAAA;AApDF;;AAyDA;EACE,kCAAA;EAOA,YAAA;EACA,eAAA;EAEA,gBAAA;EAGA,kBAAA;EAEA,gBAAA;AAhEF;;AAoEA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;AAjEF;;AAqEA;EACE,SAAA;EACA,kBAAA;EACA,UAAA;AAlEF;;AAqEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAlEF;;AAsEA;EACE,WAAA;AAnEF;;AAsEA;EACE,YAAA;EACA,aAAA;EACA,oBAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;AAnEF;;AAqEA;EACE,WAAA;EACA,YAAA;AAlEF;;AAoEA;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AAjEF;;AAmEA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,SAAA;EACA,kBAAA;AAhEF;;AAkEA;EACE,sBAAA;AA/DF;;AAiEA;EACE,WAAA;EACA,YAAA;AA9DF;;AAwEA;EACE,WAAA;EACA,YAAA;AArEF;;AA0EA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;AAvEF;;AA2EA;EACE,sBAAA;EAEA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;AAzEF;;AA6EA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AA1EF;;AA8EA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AA3EF;;AA+EA;EACE,eAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EAEA,oBAAA;EACA,iBAAA;AA7EF;;AAkFA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,oBAAA;AA/EF;;AAkFA;EACE;IACE,4BAAA;IACA,oBAAA;EA/EF;EAiFA;IACE,8BAAA;IACA,sBAAA;EA/EF;EAiFA;IACE,4BAAA;IACA,oBAAA;EA/EF;AACF;AAkFA;EACE;IACE,4BAAA;IACA,oBAAA;EAhFF;EAkFA;IACE,8BAAA;IACA,sBAAA;EAhFF;EAkFA;IACE,4BAAA;IACA,oBAAA;EAhFF;AACF;AAmFA;EACE,QAAA;EACA,kBAAA;AAjFF;;AAmFA;EACE,sBAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,iCAAA;EACA,yBAAA;EACA,qBAAA;EACA,sBAAA;EACA,sGAAA;EACA,8FAAA;AAhFF;;AAkFA;;EAEE,0CAAA;EACA,kCAAA;AA/EF;;AAiFA;;EAEE,sCAAA;EACA,8BAAA;AA9EF;;AAmFA;EACE,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,oBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;AAhFF;;AAmFA;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;AAhFF;;AAmFA;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,oBAAA;EACA,eAAA;AAhFF;;AAmFA;EACE,iBAAA;EACA,qBAAA;AAhFF;;AAmFA;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,0BAAA;AAhFF;;AAmFA;EACE,SAAA;EACA,UAAA;EACA,YAAA;AAhFF;;AAmFA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;AAhFF;;AAmFA;EACE,qBAAA;EACA,eAAA;EACA,iBAAA;AAhFF;;AAmFA;EACE,qBAAA;EACA,eAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;AAhFF;;AAmFA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;AAhFF;;AAmFA;EACE,mBAAA;EACA,cAAA;EACA,WAAA;AAhFF;;AAmFA;EACE,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;AAhFF;;AAmFA;EACE,YAAA;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;EACA,6BAAA;EACA,gCAAA;AAhFF;;AAkFA;EACE,YAAA;EACA,iBAAA;EACA,cAAA;EACA,6BAAA;EACA,gCAAA;AA/EF;;AAkFA;EAGE,SAAA;AAjFF;;AAmFA;EACE,yBAAA;EAEA,iBAAA;AAjFF;;AAoFA;EACE,yBAAA;AAjFF;;AAmFA;EACE,yBAAA;AAhFF;;AAmFA;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;AAhFF;;AAmFA;EACE,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,UAAA;AAhFF;;AAoFA;EACE,gBAAA;AAjFF;;AAoFA;EACE,eAAA;AAjFF;;AAqFE;EACE,yBAAA;AAlFJ;AAoFE;EACE,yCAAA;AAlFJ;AA2FI;;EACE,kBAAA;EACA,mBAAA;AAxFN;AA0FI;;EACE,0CAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;AAvFN;AAyFM;;;;EAEE,sBAAA;EACA,mBAAA;EACA,eAAA;AArFR;AAwFM;;EACE,6BAAA;AArFR;AAwFM;;;;EAEE,sBAAA;EACA,mBAAA;AApFR;;AA6FE;;EAKE,aAAA;AA7FJ;AA8FI;;EACE,mBAAA;AA3FN;AA6FI;;EACE,kBAAA;EACA,iCAAA;AA1FN;AA4FI;;EACE,0BAAA;EACA,cAAA;AAzFN;AA2FI;;EAEE,qBAAA;EACA,oBAAA;EACA,qBAAA;AAzFN;AA2FI;;EACE,iBAAA;AAxFN;AA0FI;;EAEE,kBAAA;AAxFN;AA0FI;;EACE,iBAAA;EACA,eAAA;AAvFN;AAyFI;;EACE,iBAAA;EACA,eAAA;AAtFN;AAwFI;;EACE,iBAAA;EACA,eAAA;AArFN;AAuFI;;EACE,iBAAA;EACA,eAAA;AApFN;AAsFI;;EACE,eAAA;EACA,iBAAA;AAnFN;AAqFI;;EACE,eAAA;EACA,iBAAA;AAlFN;AAoFI;;EACE,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;AAjFN;AAmFM;;;;EAEE,sBAAA;EACA,mBAAA;EACA,eAAA;AA/ER;AAkFM;;EACE,6BAAA;AA/ER;AAkFM;;;;EAEE,sBAAA;EACA,mBAAA;AA9ER;;AAoFA;EACE,mBAAA;AAjFF;;AAoFA;EACE,0CAAA;AAjFF;;AAoFA;EACE;IACE,YAAA;EAjFF;AACF;AAoFA;EACE,6EAAA;EACA,6BAAA;EACA,qBAAA;EACA,oCAAA;EACA,0BAAA;EACA,kDAAA;AAlFF;;AAqFA;EACE;IACE,yBAAA;EAlFF;AACF;AAqFA;;;EAGE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,yBAAA;EACA,kDAAA;EACA,0CAAA;AAnFF;;AAqFA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gCAAA;EACA,4BAAA;EACA,wBAAA;EACA,+BAAA;EACA,uBAAA;AAlFF;;AAoFA;;EAEE,WAAA;EACA,kBAAA;EACA,MAAA;AAjFF;;AAmFA;EACE,YAAA;EACA,+BAAA;EACA,uBAAA;AAhFF;;AAkFA;EACE,WAAA;AA/EF;;AAiFA;EACE;IAGE,4BAAA;EAhFF;EAkFA;IACE,uBAAA;EAhFF;AACF;AAkFA;EACE;IAGE,4BAAA;EAlFF;EAoFA;IACE,uBAAA;EAlFF;AACF;AAqFA;;;EAGE,gBAAA;EACA,gDAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;AAnFF;;AAqFA;EACE,WAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,gCAAA;EACA,4BAAA;EACA,wBAAA;EACA,+BAAA;EACA,uBAAA;AAlFF;;AAoFA;;EAEE,kBAAA;EACA,MAAA;EACA,WAAA;AAjFF;;AAmFA;EACE,UAAA;EACA,+BAAA;EACA,uBAAA;AAhFF;;AAkFA;EACE,SAAA;AA/EF;;AAiFA;EACE;IAGE,eAAA;IACA,aAAA;EAhFF;EAkFA;IACE,kBAAA;IACA,aAAA;EAhFF;AACF;AAkFA;EACE;IAGE,eAAA;IACA,aAAA;EAlFF;EAoFA;IACE,kBAAA;IACA,aAAA;EAlFF;AACF;AAqFA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,sBAAA;EACA,2CAAA;AAnFF;;AAsFA;EACE;IACE,kIAAA;EAnFF;EAsFA;IACE,qHAAA;EApFF;EAuFA;IACE,wGAAA;EArFF;EAwFA;IACE,2FAAA;EAtFF;EAyFA;IACE,8EAAA;EAvFF;EA0FA;IACE,6FAAA;EAxFF;EA2FA;IACE,4GAAA;EAzFF;EA4FA;IACE,2HAAA;EA1FF;EA6FA;IACE,0IAAA;EA3FF;AACF;AA+FA;EACE,cAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,+BAAA;EACA,yGAAA;EAQA,sGAAA;EAQA,iGAAA;EAQA,mCAAA;EACA,gCAAA;EACA,2BAAA;EACA,6BAAA;EACA,0BAAA;EACA,qBAAA;EACA,+BAAA;EACA,4BAAA;EACA,uBAAA;EACA,8BAAA;EACA,2BAAA;EACA,sBAAA;EACA,2CAAA;EACA,wCAAA;EACA,mCAAA;EACA,4BAAA;EACA,wBAAA;EACA,sBAAA;AAlHF;;AAoHA;EACE;IACE,6BAAA;EAjHF;EAmHA;IACE,8BAAA;EAjHF;AACF;AAmHA;EACE;IACE,6BAAA;EAjHF;EAmHA;IACE,8BAAA;EAjHF;AACF;AAmHA;EACE;IACE,6BAAA;EAjHF;EAmHA;IACE,8BAAA;EAjHF;AACF;AAmHA;EACE;IACE,6BAAA;EAjHF;EAmHA;IACE,8BAAA;EAjHF;AACF;AAoHA,oBAAA;AAEA;EACE,kCAAA;AAnHF;;AAsHA;EACE;IACE,cAAA;EAnHF;EAqHA;IACE,yBAAA;EAnHF;EAqHA;IACE,cAAA;EAnHF;AACF","sourcesContent":["/* // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n// @import url(\"https://fonts.googleapis.com/css?family=Oswald:400,500,700\");\n// @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n// @import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\"); */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap\");\n\n\n* {\n  box-sizing: border-box;\n  margin:0;\n  padding:0;\n  \n}\n\n#root {\n  display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n    width: 100%;\n  /* background-color: red; */\n}\n\n\n\n* {\n  -webkit-tap-highlight-color: transparent;\n}\n\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  /* // overflow: hidden;\n  //   background-color: #333;\n  //   color: #fff;\n  //   font-size: 16px;\n  //   font-weight: 400;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n  //   -webkit-font-smoothing: antialiased;\n  //   -moz-osx-font-smoothing: grayscale; */\n}\n\n\na {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.simplebar-wrapper {\n  height:100%;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: #fff;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0;\n  overflow:visible;\n  \n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n  width:0;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  /* // background-color: rgb(136, 136, 136); */\n  border-radius:4px;\n  transition: background-color 1s ease;\n  background-color: #fff;\n  /* // rgb(14,16,20); */\n  width:0;\n}\n\n.showscroll::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  /* // rgb(80, 80, 80); */\n}\n\n.hidescroll::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  /* ///rgb(14,16,20); */\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n// #wrapper {\n//   display: flex;\n//   flex-direction: column;\n//   width: 100%;\n//   height: 100%;\n//   min-height: 100%;\n// }\n\n.chakra-ui-dark {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n.chakra-ui-light {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n#wrapper-content {\n  width: 100%;\n  height: 100%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n}\n\n#mainmenu {\n  width: 92%;\n  margin-left: 4%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  // align-items: center;\n}\n\n#mainmenu ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n#mainmenu ul.menu-nav {\n  flex: 4;\n}\n#mainmenu ul.menu-nav {\n  flex: 1;\n}\n\n#mainmenu ul li {\n  flex: auto;\n  display: flex;\n}\n\n#mainmenu .indicator-down {\n  color: #aaa;\n  margin-left: -8px;\n  margin-top: 5px;\n  // z-index: 10;\n  font-size: 1rem;\n}\n\n#mainmenu ul li.hasmenu {\n  flex: auto;\n  display: block;\n}\n\n#mainmenu ul li.actions {\n  flex: 1;\n}\n\n#mainmenu ul li ul.submenu {\n  display: block;\n  position: absolute;\n  // z-index: 999;\n  margin-left: -1rem;\n}\n\n#mainmenu ul li ul.submenu li {\n  display: block;\n}\n\n#mainmenu ul li a {\n  align-items: center;\n  line-height: normal;\n  height: 3rem;\n  display: flex;\n}\n\n#mainmenu a {\n  display: block;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: #202024;\n  // background-color: rgb(0, 52, 104);\n  text-decoration-thickness: auto;\n  text-size-adjust: 100%;\n  transition: background-color 200ms;\n}\n\n#mainmenu a.active {\n  border-bottom: 2px solid #94ff97;\n}\n#mainmenu a:hover {\n  // background-color: #001b47;\n  color: #94ff97;\n}\n\n.logo-txt {\n  background-color: #fff;\n  color: #111;\n  padding: 0.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  font-weight: 900;\n}\n\n.logo-txt:hover {\n  background-color: #94ff97;\n}\n\n@media screen and (max-width: 768px) {\n  html,\n  body {\n    font-size: 14px;\n  }\n  #game-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width: 500px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n\n  #wrapper {\n    position: relative;\n  }\n  \n  #game-grid-wrapper {\n    width: 80%;\n  }\n  #game-grid {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n\n#game-grid-wrapper {\n  width: 90%;\n  margin: 0 auto;\n  // z-index: 5;\n  position: relative;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-info {\n  display: flex;\n  justify-content: center;\n  // margin-top:-3rem;\n}\n\n#game-info-content {\n  background: #777;\n  padding: 2rem;\n}\n\n#game-info-content h3 span {\n  padding-left: 1rem;\n  color: #999;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n#game-grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  // grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;\n  // grid-column-gap: 1rem;\n  // grid-row-gap: 1rem;\n}\n\n@media screen and (max-width: 700px) {\n}\n@media screen and (max-width: 400px) {\n}\n\n.game-item {\n  // width: 100%;\n  // height: 100%;\n  width: 160px;\n  // height: 150px;\n  margin-top: 4px;\n  margin-bottom: 1rem;\n  padding: 0.3125rem;\n  // margin-left: 10px;\n  // margin-right: 10px;\n  position: relative;\n  cursor: pointer;\n\n  // display: flex;\n  // justify-content: center;\n  // align-items: center;\n  // flex-direction: column;\n\n  flex: 0 0 auto;\n}\n\n.game-item:hover img {\n  transform: scale(0.95, 0.95);\n}\n\n.game-item:hover > .game-title span {\n  color: rgb(148, 255, 151);\n}\n\n.game-item img {\n  width: 150px;\n  height: 150px;\n  display: block;\n  transition: transform 200ms;\n  // width: 100%;\n  // height: 100%;\n  // border-radius: 4px;\n}\n.game-title {\n  transition: background-color 400ms;\n  // display: block;\n  // position: absolute;\n  // bottom: 0px;\n  // left: 0px;\n  // margin-top: -24px;\n  // color: #6acd64;\n  width: 150px;\n  font-size: 18px;\n  // max-height: 128px;\n  font-weight: 700;\n\n  // background-color: rgb(0, 52, 104);\n  /* opacity: 0.2; */\n\n  overflow: hidden;\n  // border-radius: 3px;\n}\n\n.game-title span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 24px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n.game-attributes ul {\n  margin: 0;\n  margin-top: 0.2rem;\n  padding: 0;\n}\n\n.game-attributes ul li {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.game-attributes ul li span {\n  color: #ccc;\n}\n\n.imagebox {\n  width: 200px;\n  height: 200px;\n  margin-right: 0.5rem;\n  border: 1px solid #000;\n  display: inline-block;\n  position: relative;\n}\n.imagesrc {\n  width: 100%;\n  height: 100%;\n}\n.imageupload {\n  position: absolute;\n  height: 2rem;\n  line-height: 2rem;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n}\n.imageremove {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  line-height: 2rem;\n  bottom: 0;\n  text-align: center;\n}\n.imagebox-dragging {\n  border: 1px solid #f00;\n}\n.imagebox .imagesrc img {\n  width: 100%;\n  height: 100%;\n}\n\n// .gamescreen {\n//   width: 100%;\n//   height: 100%;\n//   border: 0;\n//   background-color: #fff;\n// }\n\n.btn-forfeit {\n  width: 50px;\n  height: 50px;\n}\n\n\n\n#gamepanel-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 99;\n}\n\n#gameloading-wrapper {\n  background-color: #eee;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 100;\n}\n\n#gameloading > * {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n#wrapper-freeform {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  // z-index: 4;\n}\n\n#queue-panel {\n  position: fixed;\n  width: 100%;\n  height: 200px;\n  bottom: 0;\n  left: 0;\n  z-index: 6;\n  // transition: height 500ms ease;\n  pointer-events: none;\n  user-select: none;\n  // transition: transform 0.5s ease;\n  // transform: translateY(60px);\n}\n\n#queue-header {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  pointer-events: none;\n}\n\n@-webkit-keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n@keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n#queue-loader {\n  top: 2px;\n  position: relative;\n}\n.line-scale-pulse-out-rapid > div {\n  background-color: #fff;\n  width: 2px;\n  height: 20px;\n  border-radius: 3px;\n  margin: 1px;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n}\n.line-scale-pulse-out-rapid > div:nth-child(2),\n.line-scale-pulse-out-rapid > div:nth-child(4) {\n  -webkit-animation-delay: -0.25s !important;\n  animation-delay: -0.25s !important;\n}\n.line-scale-pulse-out-rapid > div:nth-child(1),\n.line-scale-pulse-out-rapid > div:nth-child(5) {\n  -webkit-animation-delay: 0s !important;\n  animation-delay: 0s !important;\n}\n\n\n\n#queue-tab {\n  height: 41px;\n  border: 1px solid #aaa;\n  border-bottom: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  width: 200px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  pointer-events: auto;\n  cursor: grab;\n  bottom: -1px;\n  z-index: 101;\n}\n\n#queue-tab-divet {\n  position: absolute;\n  top: 4px;\n  left: 80px;\n  width: 40px;\n  height: 2px;\n  border-bottom: 1px solid #aaa;\n  background-color: #eee;\n}\n\n#queue-tab-cancel {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 20px;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 2rem;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n#queue-searching {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n\n#queue-content {\n  background-color: #ccc;\n  height: 160px;\n  position: relative;\n  z-index: 100;\n  pointer-events: auto;\n  border-top: 1px solid #aaa;\n}\n\n#queue-games ul {\n  margin: 0;\n  padding: 0;\n  height: 60px;\n}\n\n#queue-games ul li {\n  width: 150px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.queue-game-title {\n  display: inline-block;\n  padding: 0.3rem;\n  font-size: 1.2rem;\n}\n\n.queue-game-mode {\n  display: inline-block;\n  padding: 0.2rem;\n  background-color: #2c394b;\n  color: #eee;\n  border-radius: 4px;\n  margin-right: 0.2rem;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .form-row {\n  margin-bottom: 1rem;\n  display: block;\n  width: 100%;\n}\n\n.form-row > label {\n  margin: 0.5rem 0;\n  font-size: 0.8rem;\n  color: #94ff97;\n  display: block;\n}\n\n.form-row > input {\n  width: 15rem;\n  display: block;\n  padding-left: 0.5rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  border-style: double;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.form-row > textarea {\n  width: 15rem;\n  min-height: 15rem;\n  display: block;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.form-row > button {\n  // width: 10rem;\n  // height: 3rem;\n  border: 0;\n}\n.form-row > button.submit {\n  background-color: #63ed56;\n  \n  font-weight: bold;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n}\n.form-row > button.submit:hover {\n  background-color: #52c548;\n}\n.form-row > button.submit:active {\n  background-color: #94ff97;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n  font-size: 1.6rem;\n  font-weight:100;\n}\n\n#game-info-longdesc {\n  font-size: 1.6rem;\n  font-weight:500;\n  color: rgb(241, 249, 255);\n  padding:0;\n}\n\n\n#game-info-longdesc b, #game-info-longdesc strong {\n  font-weight:900;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n}\n\n.chakra-ui-dark {\n  .react-mde .mde-header {\n    background-color: #202024;\n  }\n  .mde-text {\n    background: var(--chakra-colors-gray-800);\n  }\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: #333;\n    // margin: 1rem 0;\n\n    p {\n      margin-top: 0.5rem;\n      margin-bottom:2rem;\n    }\n    table {\n      border: 1px solid --chakra-colors-gray-500;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n}\n\n// .chakra-ui-light {\n\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: 333;\n    // margin: 1rem 0;\n    padding: 1rem;\n    p {\n      margin-bottom: 2rem;\n    }\n    blockquote {\n      padding-left:2rem;\n      border-left:0.5rem solid #08225a;\n    }\n    a {\n      text-decoration: underline;\n      color:#f1f9ff;\n    }\n    code {\n      //background-color:#08225a;\n      border-radius: 0.2rem;\n      padding-left:0.5rem;\n      padding-right:0.5rem;\n    }\n    strong {\n      font-weight:bold;\n    }\n    em {\n      //font-weight:bold;\n      font-style: italic;\n    }\n    h1 { \n      font-weight:bold;\n      font-size:24px;\n    }\n    h2 {\n      font-weight:bold;\n      font-size:22px;\n    }\n    h3 {\n      font-weight:bold;\n      font-size:20px;\n    }\n    h4 {\n      font-weight:bold;\n      font-size:16px;\n    }\n    h5 {\n      font-size:14px;\n      font-weight:bold;\n    }\n    h6 {\n      font-size:12px;\n      font-weight:bold;\n    }\n    table {\n      border: 1px solid #000;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n// }\n\n.chakra-form-control {\n  margin-bottom: 2rem;\n}\n\n.blink_me {\n  animation: blinker 3s ease-in-out infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0.7;\n  }\n}\n\n.textShineBlack {\n  background: linear-gradient(to right, #fff 25%, #999 26%, #999 64%, #fff 65%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% auto;\n  animation: textShine 4s ease-in infinite alternate;\n}\n\n@keyframes textShine {\n  50% {\n    background-position: 300%;\n  }\n}\n\n.loadersDots,\n.loadersDots:before,\n.loadersDots:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.2s infinite ease-in-out;\n  animation: load7 1.2s infinite ease-in-out;\n}\n.loadersDots {\n  color: #63ed56;\n  font-size: 3px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loadersDots:before,\n.loadersDots:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.loadersDots:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loadersDots:after {\n  left: 3.5em;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n.loaderBars,\n.loaderBars:before,\n.loaderBars:after {\n  background: #fff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 0.5em;\n  height: 2em;\n}\n.loaderBars {\n  color: #fff;\n  text-indent: -9999em;\n  margin-left: 1rem;\n  position: relative;\n  font-size: 6px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loaderBars:before,\n.loaderBars:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loaderBars:before {\n  left: -1em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loaderBars:after {\n  left: 1em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n\n.loaderLineUp {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: block;\n  margin: 15px auto;\n  position: relative;\n  color: #94ff97;\n  left: -100px;\n  box-sizing: border-box;\n  animation: shadowRolling 2s linear infinite;\n}\n\n@keyframes shadowRolling {\n  0% {\n    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  12% {\n    box-shadow: 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  25% {\n    box-shadow: 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  36% {\n    box-shadow: 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97,\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  50% {\n    box-shadow: 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97,\n      100px 0 #94ff97;\n  }\n  62% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97,\n      110px 0 #94ff97;\n  }\n  75% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      130px 0 #94ff97, 120px 0 #94ff97;\n  }\n  87% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97;\n  }\n  100% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.shimmer {\n  margin: 0 auto;\n  padding: 0 140px 0 0;\n  display: inline;\n  margin-bottom: 0;\n  text-align: center;\n  color: rgba(148, 255, 151, 0.1);\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: -moz-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  -webkit-background-size: 125px 100%;\n  -moz-background-size: 125px 100%;\n  background-size: 125px 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  -webkit-animation-name: shimmer;\n  -moz-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-duration: 2s;\n  -moz-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-color: #222;\n}\n@-moz-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-webkit-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-o-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n\n/* LOADING SPINNER */\n\n.digitaltimer {\n  font-variant-numeric: tabular-nums;\n}\n\n@keyframes timerblink {\n  0% {\n    color: #E53E3E;\n  }\n  50% {\n    color: rgb(254,254,255);\n  }\n  100% {\n    color: #E53E3E;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c54ebc4cab08652c5ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYTNkMjNmNTFjZTkwZDYyY2I0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUg7QUFDakI7QUFDaEcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRixxSEFBcUgsSUFBSSxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNyTTtBQUNBLG9IQUFvSCxJQUFJLElBQUk7QUFDNUg7QUFDQSx3RUFBd0UsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTs7QUFFcEcsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFX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QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUM3aUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL2FwcC5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6NDAwLDUwMCw3MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTsgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG5cbioge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLyogLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvLyAgIGNvbG9yOiAjZmZmO1xuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICBmb250LXdlaWdodDogNDAwO1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvLyAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICovXG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW1wbGViYXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbXBsZWJhci1zY3JvbGxiYXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGxlZnQ6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiAvLyByZ2IoMTQsMTYsMjApOyAqL1xuICB3aWR0aDogMDtcbn1cblxuLnNob3dzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogLy8gcmdiKDgwLCA4MCwgODApOyAqL1xufVxuXG4uaGlkZXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiAvLy9yZ2IoMTQsMTYsMjApOyAqL1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuXG5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4uY2hha3JhLXVpLWRhcmsgI3dyYXBwZXItaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgei1pbmRleDogMjA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43KSAwcHggMXB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC44KSAwcHggMHB4IDJweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XG59XG5cbi5jaGFrcmEtdWktbGlnaHQgI3dyYXBwZXItaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgei1pbmRleDogMjA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMXB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC41KSAwcHggMHB4IDJweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XG59XG5cbiN3cmFwcGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jbWFpbm1lbnUge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI21haW5tZW51IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNtYWlubWVudSB1bC5tZW51LW5hdiB7XG4gIGZsZXg6IDQ7XG59XG5cbiNtYWlubWVudSB1bC5tZW51LW5hdiB7XG4gIGZsZXg6IDE7XG59XG5cbiNtYWlubWVudSB1bCBsaSB7XG4gIGZsZXg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNtYWlubWVudSAuaW5kaWNhdG9yLWRvd24ge1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkuaGFzbWVudSB7XG4gIGZsZXg6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkuYWN0aW9ucyB7XG4gIGZsZXg6IDE7XG59XG5cbiNtYWlubWVudSB1bCBsaSB1bC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkgdWwuc3VibWVudSBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW5tZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbiNtYWlubWVudSBhLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTRmZjk3O1xufVxuXG4jbWFpbm1lbnUgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTRmZjk3O1xufVxuXG4ubG9nby10eHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4ubG9nby10eHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2dhbWUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICN3cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI2dhbWUtZ3JpZC13cmFwcGVyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gICNnYW1lLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gIH1cbn1cbiNnYW1lLWdyaWQtd3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZ2FtZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNnYW1lLWluZm8tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbiNnYW1lLWluZm8tY29udGVudCBoMyBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jZ2FtZS1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ2FtZS1pdGVtIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4uZ2FtZS1pdGVtOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMC45NSk7XG59XG5cbi5nYW1lLWl0ZW06aG92ZXIgPiAuZ2FtZS10aXRsZSBzcGFuIHtcbiAgY29sb3I6IHJnYigxNDgsIDI1NSwgMTUxKTtcbn1cblxuLmdhbWUtaXRlbSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcztcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC8qIG9wYWNpdHk6IDAuMjsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbWUtdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lLWF0dHJpYnV0ZXMgdWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdhbWUtYXR0cmlidXRlcyB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIGxpIHNwYW4ge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmltYWdlYm94IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZXNyYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZXVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgYm90dG9tOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2VyZW1vdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlYm94LWRyYWdnaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcbn1cblxuLmltYWdlYm94IC5pbWFnZXNyYyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuLWZvcmZlaXQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jZ2FtZXBhbmVsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuI2dhbWVsb2FkaW5nLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuI2dhbWVsb2FkaW5nID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jd3JhcHBlci1mcmVlZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcXVldWUtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI3F1ZXVlLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcbiAgfVxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xuICB9XG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgfVxufVxuI3F1ZXVlLWxvYWRlciB7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDFweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCAwLjlzIC0wLjVzIGluZmluaXRlIGN1YmljLWJlemllcigwLjExLCAwLjQ5LCAwLjM4LCAwLjc4KTtcbiAgYW5pbWF0aW9uOiBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCAwLjlzIC0wLjVzIGluZmluaXRlIGN1YmljLWJlemllcigwLjExLCAwLjQ5LCAwLjM4LCAwLjc4KTtcbn1cblxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCgyKSxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMjVzICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzICFpbXBvcnRhbnQ7XG59XG5cbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMSksXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcbn1cblxuI3F1ZXVlLXRhYiB7XG4gIGhlaWdodDogNDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IGdyYWI7XG4gIGJvdHRvbTogLTFweDtcbiAgei1pbmRleDogMTAxO1xufVxuXG4jcXVldWUtdGFiLWRpdmV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogODBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuI3F1ZXVlLXRhYi1jYW5jZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAycmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcXVldWUtc2VhcmNoaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuI3F1ZXVlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xufVxuXG4jcXVldWUtZ2FtZXMgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNjBweDtcbn1cblxuI3F1ZXVlLWdhbWVzIHVsIGxpIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5xdWV1ZS1nYW1lLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucXVldWUtZ2FtZS1tb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzM5NGI7XG4gIGNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybSAuZm9ybS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLXJvdyA+IGxhYmVsIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjOTRmZjk3O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm0tcm93ID4gaW5wdXQge1xuICB3aWR0aDogMTVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLXJvdyA+IHRleHRhcmVhIHtcbiAgd2lkdGg6IDE1cmVtO1xuICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmZvcm0tcm93ID4gYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzZWQ1NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTQ4O1xufVxuXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGZmOTc7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2IoMjQxLCAyNDksIDI1NSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgYiwgI2dhbWUtaW5mby1sb25nZGVzYyBzdHJvbmcge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIC5tZGUtcHJldmlldy1jb250ZW50IHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG4uY2hha3JhLXVpLWRhcmsgLnJlYWN0LW1kZSAubWRlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XG59XG4uY2hha3JhLXVpLWRhcmsgLm1kZS10ZXh0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTgwMCk7XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyBwLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSxcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGJvZHkgdHIgdGQsXG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0ciB0aCxcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0Ym9keSB0ciB0ZCxcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0cixcbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyxcbi5tZGUtcHJldmlldy1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgcCxcbi5tZGUtcHJldmlldy1jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBibG9ja3F1b3RlLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgYmxvY2txdW90ZSB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjMDgyMjVhO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBhLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2YxZjlmZjtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgY29kZSxcbi5tZGUtcHJldmlldy1jb250ZW50IGNvZGUge1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHN0cm9uZyxcbi5tZGUtcHJldmlldy1jb250ZW50IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBlbSxcbi5tZGUtcHJldmlldy1jb250ZW50IGVtIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoMSxcbi5tZGUtcHJldmlldy1jb250ZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDIsXG4ubWRlLXByZXZpZXctY29udGVudCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGgzLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoNCxcbi5tZGUtcHJldmlldy1jb250ZW50IGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDUsXG4ubWRlLXByZXZpZXctY29udGVudCBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGg2LFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0ciB0ZCxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0Ym9keSB0ciB0ZCxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0ciB0aCxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyLFxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0cixcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG4uY2hha3JhLWZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ibGlua19tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbi50ZXh0U2hpbmVCbGFjayB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAyNSUsICM5OTkgMjYlLCAjOTk5IDY0JSwgI2ZmZiA2NSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBhbmltYXRpb246IHRleHRTaGluZSA0cyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyB0ZXh0U2hpbmUge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCU7XG4gIH1cbn1cbi5sb2FkZXJzRG90cyxcbi5sb2FkZXJzRG90czpiZWZvcmUsXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDcgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9hZGVyc0RvdHMge1xuICBjb2xvcjogIzYzZWQ1NjtcbiAgZm9udC1zaXplOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbi5sb2FkZXJzRG90czpiZWZvcmUsXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmxvYWRlcnNEb3RzOmJlZm9yZSB7XG4gIGxlZnQ6IC0zLjVlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5sb2FkZXJzRG90czphZnRlciB7XG4gIGxlZnQ6IDMuNWVtO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDcge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDcge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gIH1cbn1cbi5sb2FkZXJCYXJzLFxuLmxvYWRlckJhcnM6YmVmb3JlLFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5sb2FkZXJCYXJzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbi5sb2FkZXJCYXJzOmJlZm9yZSxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5sb2FkZXJCYXJzOmJlZm9yZSB7XG4gIGxlZnQ6IC0xZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4ubG9hZGVyQmFyczphZnRlciB7XG4gIGxlZnQ6IDFlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkMSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbn1cbi5sb2FkZXJMaW5lVXAge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzk0ZmY5NztcbiAgbGVmdDogLTEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHNoYWRvd1JvbGxpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWRvd1JvbGxpbmcge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICAxMiUge1xuICAgIGJveC1zaGFkb3c6IDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDM2JSB7XG4gICAgYm94LXNoYWRvdzogMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA2MiUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NztcbiAgfVxuICA4NyUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NztcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbn1cbi5zaGltbWVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMTQwcHggMCAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTQ4LCAyNTUsIDE1MSwgMC4xKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzIyMiksIHRvKCMyMjIpLCBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NykpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMjIyKSwgdG8oIzIyMiksIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KSk7XG4gIGJhY2tncm91bmQ6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMjIyKSwgdG8oIzIyMiksIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hpbW1lcjtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogc2hpbW1lcjtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgfVxufVxuLyogTE9BRElORyBTUElOTkVSICovXG4uZGlnaXRhbHRpbWVyIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuQGtleWZyYW1lcyB0aW1lcmJsaW5rIHtcbiAgMCUge1xuICAgIGNvbG9yOiAjRTUzRTNFO1xuICB9XG4gIDUwJSB7XG4gICAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU1KTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogI0U1M0UzRTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vY2xpZW50L3NyYy9hcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs0RUFBQTtBQVNBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNGLDJCQUFBO0FBSEY7O0FBUUE7RUFDRSx3Q0FBQTtBQUxGOztBQVNBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQTs7Ozs7Ozs0Q0FBQTtBQUNGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVdBO0VBQ0UsWUFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FBUkY7O0FBV0EsVUFBQTtBQUNBO0VBQ0UsUUFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBWUEsVUFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSxRQUFBO0FBVEY7O0FBWUEsV0FBQTtBQUNBO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFURjs7QUFZQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFURjs7QUFZQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7QUFURjs7QUFZQSxvQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUFURjs7QUFZ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RSw4QkFBQTtFQWpIRjtBQUNGO0FBb0hBLG9CQUFBO0FBRUE7RUFDRSxrQ0FBQTtBQW5IRjs7QUFzSEE7RUFDRTtJQUNFLGNBQUE7RUFuSEY7RUFxSEE7SUFDRSx5QkFBQTtFQW5IRjtFQXFIQTtJQUNFLGNBQUE7RUFuSEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcbi8vIEBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjQwMCw1MDAsNzAwXFxcIik7XFxuLy8gQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpOyAqL1xcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG4gIFxcbn1cXG5cXG4jcm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxufVxcblxcblxcblxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAvLyAgIGNvbG9yOiAjZmZmO1xcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XFxuICAvLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAvLyBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLy8gICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAqL1xcbn1cXG5cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uc2ltcGxlYmFyLXdyYXBwZXIge1xcbiAgaGVpZ2h0OjEwMCU7XFxufVxcblxcbi5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBsZWZ0OiAycHg7XFxuICByaWdodDogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIG92ZXJmbG93OnZpc2libGU7XFxuICBcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6MDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7ICovXFxuICBib3JkZXItcmFkaXVzOjRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiAvLyByZ2IoMTQsMTYsMjApOyAqL1xcbiAgd2lkdGg6MDtcXG59XFxuXFxuLnNob3dzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiAvLyByZ2IoODAsIDgwLCA4MCk7ICovXFxufVxcblxcbi5oaWRlc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogLy8vcmdiKDE0LDE2LDIwKTsgKi9cXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcbiAgICBtb25vc3BhY2U7XFxufVxcbi8vICN3cmFwcGVyIHtcXG4vLyAgIGRpc3BsYXk6IGZsZXg7XFxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbi8vICAgd2lkdGg6IDEwMCU7XFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxuLy8gICBtaW4taGVpZ2h0OiAxMDAlO1xcbi8vIH1cXG5cXG4uY2hha3JhLXVpLWRhcmsge1xcbiAgI3dyYXBwZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43KSAwcHggMXB4IDJweCAwcHgsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjgpIDBweCAwcHggMnB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpO1xcbiAgfVxcbn1cXG5cXG4uY2hha3JhLXVpLWxpZ2h0IHtcXG4gICN3cmFwcGVyLWhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDFweCAycHggMHB4LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSAwcHggMHB4IDJweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTtcXG4gIH1cXG59XFxuXFxuI3dyYXBwZXItY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI21haW5tZW51IHtcXG4gIHdpZHRoOiA5MiU7XFxuICBtYXJnaW4tbGVmdDogNCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW5tZW51IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI21haW5tZW51IHVsLm1lbnUtbmF2IHtcXG4gIGZsZXg6IDQ7XFxufVxcbiNtYWlubWVudSB1bC5tZW51LW5hdiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkge1xcbiAgZmxleDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWlubWVudSAuaW5kaWNhdG9yLWRvd24ge1xcbiAgY29sb3I6ICNhYWE7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIC8vIHotaW5kZXg6IDEwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkuaGFzbWVudSB7XFxuICBmbGV4OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaS5hY3Rpb25zIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaSB1bC5zdWJtZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gei1pbmRleDogOTk5O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkgdWwuc3VibWVudSBsaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW5tZW51IHVsIGxpIGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbm1lbnUgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDAuODEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBhdXRvO1xcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbiNtYWlubWVudSBhLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk0ZmY5NztcXG59XFxuI21haW5tZW51IGE6aG92ZXIge1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMWI0NztcXG4gIGNvbG9yOiAjOTRmZjk3O1xcbn1cXG5cXG4ubG9nby10eHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMTExO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmxvZ28tdHh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGZmOTc7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gICNnYW1lLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIFxcbiAgI2dhbWUtZ3JpZC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gICNnYW1lLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG4gIH1cXG59XFxuXFxuI2dhbWUtZ3JpZC13cmFwcGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8vIHotaW5kZXg6IDU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8vIG1hcmdpbi10b3A6LTNyZW07XFxufVxcblxcbiNnYW1lLWluZm8tY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI2dhbWUtaW5mby1jb250ZW50IGgzIHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jZ2FtZS1ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHg7XFxuICAvLyBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxuICAvLyBncmlkLXJvdy1nYXA6IDFyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxufVxcblxcbi5nYW1lLWl0ZW0ge1xcbiAgLy8gd2lkdGg6IDEwMCU7XFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTYwcHg7XFxuICAvLyBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgLy8gZGlzcGxheTogZmxleDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaXRlbTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcXG59XFxuXFxuLmdhbWUtaXRlbTpob3ZlciA+IC5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgY29sb3I6IHJnYigxNDgsIDI1NSwgMTUxKTtcXG59XFxuXFxuLmdhbWUtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xcbiAgLy8gd2lkdGg6IDEwMCU7XFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxuICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5nYW1lLXRpdGxlIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XFxuICAvLyBkaXNwbGF5OiBibG9jaztcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIGJvdHRvbTogMHB4O1xcbiAgLy8gbGVmdDogMHB4O1xcbiAgLy8gbWFyZ2luLXRvcDogLTI0cHg7XFxuICAvLyBjb2xvcjogIzZhY2Q2NDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIC8vIG1heC1oZWlnaHQ6IDEyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTtcXG4gIC8qIG9wYWNpdHk6IDAuMjsgKi9cXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvLyBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkgc3BhbiB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmltYWdlYm94IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWFnZXNyYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmltYWdldXBsb2FkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbWFnZXJlbW92ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW1hZ2Vib3gtZHJhZ2dpbmcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcXG59XFxuLmltYWdlYm94IC5pbWFnZXNyYyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8vIC5nYW1lc2NyZWVuIHtcXG4vLyAgIHdpZHRoOiAxMDAlO1xcbi8vICAgaGVpZ2h0OiAxMDAlO1xcbi8vICAgYm9yZGVyOiAwO1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4vLyB9XFxuXFxuLmJ0bi1mb3JmZWl0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5cXG5cXG4jZ2FtZXBhbmVsLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLy8gei1pbmRleDogOTk7XFxufVxcblxcbiNnYW1lbG9hZGluZy13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAvLyB6LWluZGV4OiAxMDA7XFxufVxcblxcbiNnYW1lbG9hZGluZyA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuI3dyYXBwZXItZnJlZWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLy8gei1pbmRleDogNDtcXG59XFxuXFxuI3F1ZXVlLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA2O1xcbiAgLy8gdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2U7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KTtcXG59XFxuXFxuI3F1ZXVlLWhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gIH1cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbn1cXG5cXG4jcXVldWUtbG9hZGVyIHtcXG4gIHRvcDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDFweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIDAuOXMgLTAuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTEsIDAuNDksIDAuMzgsIDAuNzgpO1xcbiAgYW5pbWF0aW9uOiBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCAwLjlzIC0wLjVzIGluZmluaXRlIGN1YmljLWJlemllcigwLjExLCAwLjQ5LCAwLjM4LCAwLjc4KTtcXG59XFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCgyKSxcXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXMgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzICFpbXBvcnRhbnQ7XFxufVxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMSksXFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuXFxuI3F1ZXVlLXRhYiB7XFxuICBoZWlnaHQ6IDQxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgei1pbmRleDogMTAxO1xcbn1cXG5cXG4jcXVldWUtdGFiLWRpdmV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogODBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbiNxdWV1ZS10YWItY2FuY2VsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3F1ZXVlLXNlYXJjaGluZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3F1ZXVlLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGhlaWdodDogMTYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xcbn1cXG5cXG4jcXVldWUtZ2FtZXMgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3F1ZXVlLWdhbWVzIHVsIGxpIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucXVldWUtZ2FtZS10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnF1ZXVlLWdhbWUtbW9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzOTRiO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0gLmZvcm0tcm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1yb3cgPiBsYWJlbCB7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzk0ZmY5NztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9ybS1yb3cgPiBpbnB1dCB7XFxuICB3aWR0aDogMTVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cgPiB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTVyZW07XFxuICBtaW4taGVpZ2h0OiAxNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0tcm93ID4gYnV0dG9uIHtcXG4gIC8vIHdpZHRoOiAxMHJlbTtcXG4gIC8vIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNlZDU2O1xcbiAgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC8vIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTQ4O1xcbn1cXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIC5tZGUtcHJldmlldy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6MTAwO1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6NTAwO1xcbiAgY29sb3I6IHJnYigyNDEsIDI0OSwgMjU1KTtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuXFxuI2dhbWUtaW5mby1sb25nZGVzYyBiLCAjZ2FtZS1pbmZvLWxvbmdkZXNjIHN0cm9uZyB7XFxuICBmb250LXdlaWdodDo5MDA7XFxufVxcblxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4uY2hha3JhLXVpLWRhcmsge1xcbiAgLnJlYWN0LW1kZSAubWRlLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICB9XFxuICAubWRlLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktODAwKTtcXG4gIH1cXG5cXG4gICNnYW1lLWluZm8tbG9uZ2Rlc2MsXFxuICAubWRlLXByZXZpZXctY29udGVudCB7XFxuICAgIC8vICAgYmFja2dyb3VuZDogIzc3NztcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOjJyZW07XFxuICAgIH1cXG4gICAgdGFibGUge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMDtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgdGJvZHkgdHIgdGQsXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgICAgfVxcblxcbiAgICAgIHRoZWFkIHRyIHRoIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgICAgIH1cXG5cXG4gICAgICB0Ym9keSB0cixcXG4gICAgICB0aGVhZCB0ciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gLmNoYWtyYS11aS1saWdodCB7XFxuXFxuXFxuICAjZ2FtZS1pbmZvLWxvbmdkZXNjLFxcbiAgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgICAvLyAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDMzMztcXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG4gICAgYmxvY2txdW90ZSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OjJyZW07XFxuICAgICAgYm9yZGVyLWxlZnQ6MC41cmVtIHNvbGlkICMwODIyNWE7XFxuICAgIH1cXG4gICAgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgY29sb3I6I2YxZjlmZjtcXG4gICAgfVxcbiAgICBjb2RlIHtcXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IzA4MjI1YTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OjAuNXJlbTtcXG4gICAgfVxcbiAgICBzdHJvbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIH1cXG4gICAgZW0ge1xcbiAgICAgIC8vZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgaDEgeyBcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyNHB4O1xcbiAgICB9XFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xcbiAgICB9XFxuICAgIGgzIHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICB9XFxuICAgIGg0IHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xcbiAgICB9XFxuICAgIGg1IHtcXG4gICAgICBmb250LXNpemU6MTRweDtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB9XFxuICAgIGg2IHtcXG4gICAgICBmb250LXNpemU6MTJweDtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB9XFxuICAgIHRhYmxlIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgICB0Ym9keSB0ciB0ZCxcXG4gICAgICB0aGVhZCB0ciB0aCB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICAgICAgfVxcblxcbiAgICAgIHRib2R5IHRyLFxcbiAgICAgIHRoZWFkIHRyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbi8vIH1cXG5cXG4uY2hha3JhLWZvcm0tY29udHJvbCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uYmxpbmtfbWUge1xcbiAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4udGV4dFNoaW5lQmxhY2sge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDI1JSwgIzk5OSAyNiUsICM5OTkgNjQlLCAjZmZmIDY1JSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xcbiAgYW5pbWF0aW9uOiB0ZXh0U2hpbmUgNHMgZWFzZS1pbiBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgdGV4dFNoaW5lIHtcXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCU7XFxuICB9XFxufVxcblxcbi5sb2FkZXJzRG90cyxcXG4ubG9hZGVyc0RvdHM6YmVmb3JlLFxcbi5sb2FkZXJzRG90czphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMi41ZW07XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbn1cXG4ubG9hZGVyc0RvdHMge1xcbiAgY29sb3I6ICM2M2VkNTY7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG59XFxuLmxvYWRlcnNEb3RzOmJlZm9yZSxcXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcbi5sb2FkZXJzRG90czpiZWZvcmUge1xcbiAgbGVmdDogLTMuNWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbn1cXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xcbiAgbGVmdDogMy41ZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNyB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbG9hZDcge1xcbiAgMCUsXFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xcbiAgfVxcbn1cXG5cXG4ubG9hZGVyQmFycyxcXG4ubG9hZGVyQmFyczpiZWZvcmUsXFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuLmxvYWRlckJhcnMge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiA2cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxufVxcbi5sb2FkZXJCYXJzOmJlZm9yZSxcXG4ubG9hZGVyQmFyczphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmxvYWRlckJhcnM6YmVmb3JlIHtcXG4gIGxlZnQ6IC0xZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxufVxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcXG4gIDAlLFxcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMDtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgLTFlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMSB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDA7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxuICA0MCUge1xcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxufVxcblxcbi5sb2FkZXJMaW5lVXAge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICM5NGZmOTc7XFxuICBsZWZ0OiAtMTAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYW5pbWF0aW9uOiBzaGFkb3dSb2xsaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFkb3dSb2xsaW5nIHtcXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMTIlIHtcXG4gICAgYm94LXNoYWRvdzogMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBib3gtc2hhZG93OiAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgYm94LXNoYWRvdzogMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NyxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm94LXNoYWRvdzogMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NyxcXG4gICAgICAxMDBweCAwICM5NGZmOTc7XFxuICB9XFxuICA2MiUge1xcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LFxcbiAgICAgIDExMHB4IDAgIzk0ZmY5NztcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3O1xcbiAgfVxcbiAgODclIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTc7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxufVxcblxcbi5zaGltbWVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAxNDBweCAwIDA7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTQ4LCAyNTUsIDE1MSwgMC4xKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IGdyYWRpZW50KFxcbiAgICBsaW5lYXIsXFxuICAgIGxlZnQgdG9wLFxcbiAgICByaWdodCB0b3AsXFxuICAgIGZyb20oIzIyMiksXFxuICAgIHRvKCMyMjIpLFxcbiAgICBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NylcXG4gICk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbn1cXG5ALW1vei1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoaW1tZXIge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICB9XFxufVxcbkAtby1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5cXG4vKiBMT0FESU5HIFNQSU5ORVIgKi9cXG5cXG4uZGlnaXRhbHRpbWVyIHtcXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XFxufVxcblxcbkBrZXlmcmFtZXMgdGltZXJibGluayB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiAjRTUzRTNFO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgY29sb3I6IHJnYigyNTQsMjU0LDI1NSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICNFNTNFM0U7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYzU0ZWJjNGNhYjA4NjUyYzVlY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==