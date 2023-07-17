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
}

.hidescroll::-webkit-scrollbar-thumb {
  background-color: #fff;
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
}`, "",{"version":3,"sources":["webpack://./../client/src/app.scss"],"names":[],"mappings":"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","sourcesContent":["/* // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n// @import url(\"https://fonts.googleapis.com/css?family=Oswald:400,500,700\");\n// @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n// @import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\"); */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap\");\n\n\n* {\n  box-sizing: border-box;\n  margin:0;\n  padding:0;\n  \n}\n\n#root {\n  display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n    width: 100%;\n  /* background-color: red; */\n}\n\n\n\n* {\n  -webkit-tap-highlight-color: transparent;\n}\n\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  /* // overflow: hidden;\n  //   background-color: #333;\n  //   color: #fff;\n  //   font-size: 16px;\n  //   font-weight: 400;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n  //   -webkit-font-smoothing: antialiased;\n  //   -moz-osx-font-smoothing: grayscale; */\n}\n\n\na {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.simplebar-wrapper {\n  height:100%;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: #fff;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0;\n  overflow:visible;\n  \n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n  width:0;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  /* // background-color: rgb(136, 136, 136); */\n  border-radius:4px;\n  transition: background-color 1s ease;\n  background-color: #fff;\n  /* // rgb(14,16,20); */\n  width:0;\n}\n\n.showscroll::-webkit-scrollbar-thumb {\n  background-color: #fff;// rgb(80, 80, 80);\n}\n\n.hidescroll::-webkit-scrollbar-thumb {\n  background-color: #fff;///rgb(14,16,20);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n// #wrapper {\n//   display: flex;\n//   flex-direction: column;\n//   width: 100%;\n//   height: 100%;\n//   min-height: 100%;\n// }\n\n.chakra-ui-dark {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n.chakra-ui-light {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n#wrapper-content {\n  width: 100%;\n  height: 100%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n}\n\n#mainmenu {\n  width: 92%;\n  margin-left: 4%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  // align-items: center;\n}\n\n#mainmenu ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n#mainmenu ul.menu-nav {\n  flex: 4;\n}\n#mainmenu ul.menu-nav {\n  flex: 1;\n}\n\n#mainmenu ul li {\n  flex: auto;\n  display: flex;\n}\n\n#mainmenu .indicator-down {\n  color: #aaa;\n  margin-left: -8px;\n  margin-top: 5px;\n  // z-index: 10;\n  font-size: 1rem;\n}\n\n#mainmenu ul li.hasmenu {\n  flex: auto;\n  display: block;\n}\n\n#mainmenu ul li.actions {\n  flex: 1;\n}\n\n#mainmenu ul li ul.submenu {\n  display: block;\n  position: absolute;\n  // z-index: 999;\n  margin-left: -1rem;\n}\n\n#mainmenu ul li ul.submenu li {\n  display: block;\n}\n\n#mainmenu ul li a {\n  align-items: center;\n  line-height: normal;\n  height: 3rem;\n  display: flex;\n}\n\n#mainmenu a {\n  display: block;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: #202024;\n  // background-color: rgb(0, 52, 104);\n  text-decoration-thickness: auto;\n  text-size-adjust: 100%;\n  transition: background-color 200ms;\n}\n\n#mainmenu a.active {\n  border-bottom: 2px solid #94ff97;\n}\n#mainmenu a:hover {\n  // background-color: #001b47;\n  color: #94ff97;\n}\n\n.logo-txt {\n  background-color: #fff;\n  color: #111;\n  padding: 0.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  font-weight: 900;\n}\n\n.logo-txt:hover {\n  background-color: #94ff97;\n}\n\n@media screen and (max-width: 768px) {\n  html,\n  body {\n    font-size: 14px;\n  }\n  #game-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width: 500px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n\n  #wrapper {\n    position: relative;\n  }\n  \n  #game-grid-wrapper {\n    width: 80%;\n  }\n  #game-grid {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n\n#game-grid-wrapper {\n  width: 90%;\n  margin: 0 auto;\n  // z-index: 5;\n  position: relative;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-info {\n  display: flex;\n  justify-content: center;\n  // margin-top:-3rem;\n}\n\n#game-info-content {\n  background: #777;\n  padding: 2rem;\n}\n\n#game-info-content h3 span {\n  padding-left: 1rem;\n  color: #999;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n#game-grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  // grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;\n  // grid-column-gap: 1rem;\n  // grid-row-gap: 1rem;\n}\n\n@media screen and (max-width: 700px) {\n}\n@media screen and (max-width: 400px) {\n}\n\n.game-item {\n  // width: 100%;\n  // height: 100%;\n  width: 160px;\n  // height: 150px;\n  margin-top: 4px;\n  margin-bottom: 1rem;\n  padding: 0.3125rem;\n  // margin-left: 10px;\n  // margin-right: 10px;\n  position: relative;\n  cursor: pointer;\n\n  // display: flex;\n  // justify-content: center;\n  // align-items: center;\n  // flex-direction: column;\n\n  flex: 0 0 auto;\n}\n\n.game-item:hover img {\n  transform: scale(0.95, 0.95);\n}\n\n.game-item:hover > .game-title span {\n  color: rgb(148, 255, 151);\n}\n\n.game-item img {\n  width: 150px;\n  height: 150px;\n  display: block;\n  transition: transform 200ms;\n  // width: 100%;\n  // height: 100%;\n  // border-radius: 4px;\n}\n.game-title {\n  transition: background-color 400ms;\n  // display: block;\n  // position: absolute;\n  // bottom: 0px;\n  // left: 0px;\n  // margin-top: -24px;\n  // color: #6acd64;\n  width: 150px;\n  font-size: 18px;\n  // max-height: 128px;\n  font-weight: 700;\n\n  // background-color: rgb(0, 52, 104);\n  /* opacity: 0.2; */\n\n  overflow: hidden;\n  // border-radius: 3px;\n}\n\n.game-title span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 24px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n.game-attributes ul {\n  margin: 0;\n  margin-top: 0.2rem;\n  padding: 0;\n}\n\n.game-attributes ul li {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.game-attributes ul li span {\n  color: #ccc;\n}\n\n.imagebox {\n  width: 200px;\n  height: 200px;\n  margin-right: 0.5rem;\n  border: 1px solid #000;\n  display: inline-block;\n  position: relative;\n}\n.imagesrc {\n  width: 100%;\n  height: 100%;\n}\n.imageupload {\n  position: absolute;\n  height: 2rem;\n  line-height: 2rem;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n}\n.imageremove {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  line-height: 2rem;\n  bottom: 0;\n  text-align: center;\n}\n.imagebox-dragging {\n  border: 1px solid #f00;\n}\n.imagebox .imagesrc img {\n  width: 100%;\n  height: 100%;\n}\n\n// .gamescreen {\n//   width: 100%;\n//   height: 100%;\n//   border: 0;\n//   background-color: #fff;\n// }\n\n.btn-forfeit {\n  width: 50px;\n  height: 50px;\n}\n\n\n\n#gamepanel-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 99;\n}\n\n#gameloading-wrapper {\n  background-color: #eee;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 100;\n}\n\n#gameloading > * {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n#wrapper-freeform {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  // z-index: 4;\n}\n\n#queue-panel {\n  position: fixed;\n  width: 100%;\n  height: 200px;\n  bottom: 0;\n  left: 0;\n  z-index: 6;\n  // transition: height 500ms ease;\n  pointer-events: none;\n  user-select: none;\n  // transition: transform 0.5s ease;\n  // transform: translateY(60px);\n}\n\n#queue-header {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  pointer-events: none;\n}\n\n@-webkit-keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n@keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n#queue-loader {\n  top: 2px;\n  position: relative;\n}\n.line-scale-pulse-out-rapid > div {\n  background-color: #fff;\n  width: 2px;\n  height: 20px;\n  border-radius: 3px;\n  margin: 1px;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n}\n.line-scale-pulse-out-rapid > div:nth-child(2),\n.line-scale-pulse-out-rapid > div:nth-child(4) {\n  -webkit-animation-delay: -0.25s !important;\n  animation-delay: -0.25s !important;\n}\n.line-scale-pulse-out-rapid > div:nth-child(1),\n.line-scale-pulse-out-rapid > div:nth-child(5) {\n  -webkit-animation-delay: 0s !important;\n  animation-delay: 0s !important;\n}\n\n\n\n#queue-tab {\n  height: 41px;\n  border: 1px solid #aaa;\n  border-bottom: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  width: 200px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  pointer-events: auto;\n  cursor: grab;\n  bottom: -1px;\n  z-index: 101;\n}\n\n#queue-tab-divet {\n  position: absolute;\n  top: 4px;\n  left: 80px;\n  width: 40px;\n  height: 2px;\n  border-bottom: 1px solid #aaa;\n  background-color: #eee;\n}\n\n#queue-tab-cancel {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 20px;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 2rem;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n#queue-searching {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n\n#queue-content {\n  background-color: #ccc;\n  height: 160px;\n  position: relative;\n  z-index: 100;\n  pointer-events: auto;\n  border-top: 1px solid #aaa;\n}\n\n#queue-games ul {\n  margin: 0;\n  padding: 0;\n  height: 60px;\n}\n\n#queue-games ul li {\n  width: 150px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.queue-game-title {\n  display: inline-block;\n  padding: 0.3rem;\n  font-size: 1.2rem;\n}\n\n.queue-game-mode {\n  display: inline-block;\n  padding: 0.2rem;\n  background-color: #2c394b;\n  color: #eee;\n  border-radius: 4px;\n  margin-right: 0.2rem;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .form-row {\n  margin-bottom: 1rem;\n  display: block;\n  width: 100%;\n}\n\n.form-row > label {\n  margin: 0.5rem 0;\n  font-size: 0.8rem;\n  color: #94ff97;\n  display: block;\n}\n\n.form-row > input {\n  width: 15rem;\n  display: block;\n  padding-left: 0.5rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  border-style: double;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.form-row > textarea {\n  width: 15rem;\n  min-height: 15rem;\n  display: block;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.form-row > button {\n  // width: 10rem;\n  // height: 3rem;\n  border: 0;\n}\n.form-row > button.submit {\n  background-color: #63ed56;\n  \n  font-weight: bold;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n}\n.form-row > button.submit:hover {\n  background-color: #52c548;\n}\n.form-row > button.submit:active {\n  background-color: #94ff97;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n  font-size: 1.6rem;\n  font-weight:100;\n}\n\n#game-info-longdesc {\n  font-size: 1.6rem;\n  font-weight:500;\n  color: rgb(241, 249, 255);\n  padding:0;\n}\n\n\n#game-info-longdesc b, #game-info-longdesc strong {\n  font-weight:900;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n}\n\n.chakra-ui-dark {\n  .react-mde .mde-header {\n    background-color: #202024;\n  }\n  .mde-text {\n    background: var(--chakra-colors-gray-800);\n  }\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: #333;\n    // margin: 1rem 0;\n\n    p {\n      margin-top: 0.5rem;\n      margin-bottom:2rem;\n    }\n    table {\n      border: 1px solid --chakra-colors-gray-500;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n}\n\n// .chakra-ui-light {\n\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: 333;\n    // margin: 1rem 0;\n    padding: 1rem;\n    p {\n      margin-bottom: 2rem;\n    }\n    blockquote {\n      padding-left:2rem;\n      border-left:0.5rem solid #08225a;\n    }\n    a {\n      text-decoration: underline;\n      color:#f1f9ff;\n    }\n    code {\n      //background-color:#08225a;\n      border-radius: 0.2rem;\n      padding-left:0.5rem;\n      padding-right:0.5rem;\n    }\n    strong {\n      font-weight:bold;\n    }\n    em {\n      //font-weight:bold;\n      font-style: italic;\n    }\n    h1 { \n      font-weight:bold;\n      font-size:24px;\n    }\n    h2 {\n      font-weight:bold;\n      font-size:22px;\n    }\n    h3 {\n      font-weight:bold;\n      font-size:20px;\n    }\n    h4 {\n      font-weight:bold;\n      font-size:16px;\n    }\n    h5 {\n      font-size:14px;\n      font-weight:bold;\n    }\n    h6 {\n      font-size:12px;\n      font-weight:bold;\n    }\n    table {\n      border: 1px solid #000;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n// }\n\n.chakra-form-control {\n  margin-bottom: 2rem;\n}\n\n.blink_me {\n  animation: blinker 3s ease-in-out infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0.7;\n  }\n}\n\n.textShineBlack {\n  background: linear-gradient(to right, #fff 25%, #999 26%, #999 64%, #fff 65%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% auto;\n  animation: textShine 4s ease-in infinite alternate;\n}\n\n@keyframes textShine {\n  50% {\n    background-position: 300%;\n  }\n}\n\n.loadersDots,\n.loadersDots:before,\n.loadersDots:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.2s infinite ease-in-out;\n  animation: load7 1.2s infinite ease-in-out;\n}\n.loadersDots {\n  color: #63ed56;\n  font-size: 3px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loadersDots:before,\n.loadersDots:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.loadersDots:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loadersDots:after {\n  left: 3.5em;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n.loaderBars,\n.loaderBars:before,\n.loaderBars:after {\n  background: #fff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 0.5em;\n  height: 2em;\n}\n.loaderBars {\n  color: #fff;\n  text-indent: -9999em;\n  margin-left: 1rem;\n  position: relative;\n  font-size: 6px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loaderBars:before,\n.loaderBars:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loaderBars:before {\n  left: -1em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loaderBars:after {\n  left: 1em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n\n.loaderLineUp {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: block;\n  margin: 15px auto;\n  position: relative;\n  color: #94ff97;\n  left: -100px;\n  box-sizing: border-box;\n  animation: shadowRolling 2s linear infinite;\n}\n\n@keyframes shadowRolling {\n  0% {\n    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  12% {\n    box-shadow: 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  25% {\n    box-shadow: 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  36% {\n    box-shadow: 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97,\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  50% {\n    box-shadow: 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97,\n      100px 0 #94ff97;\n  }\n  62% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97,\n      110px 0 #94ff97;\n  }\n  75% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      130px 0 #94ff97, 120px 0 #94ff97;\n  }\n  87% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97;\n  }\n  100% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.shimmer {\n  margin: 0 auto;\n  padding: 0 140px 0 0;\n  display: inline;\n  margin-bottom: 0;\n  text-align: center;\n  color: rgba(148, 255, 151, 0.1);\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: -moz-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  -webkit-background-size: 125px 100%;\n  -moz-background-size: 125px 100%;\n  background-size: 125px 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  -webkit-animation-name: shimmer;\n  -moz-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-duration: 2s;\n  -moz-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-color: #222;\n}\n@-moz-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-webkit-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-o-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n\n/* LOADING SPINNER */\n\n.digitaltimer {\n  font-variant-numeric: tabular-nums;\n}\n\n@keyframes timerblink {\n  0% {\n    color: #E53E3E;\n  }\n  50% {\n    color: rgb(254,254,255);\n  }\n  100% {\n    color: #E53E3E;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca3d23f51ce90d62cb4f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDY4NzlmYmEzMjYwZGMyZTM0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUg7QUFDakI7QUFDaEcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRixxSEFBcUgsSUFBSSxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNyTTtBQUNBLG9IQUFvSCxJQUFJLElBQUk7QUFDNUg7QUFDQSx3RUFBd0UsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTs7QUFFcEcsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsVUFBVSxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcs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aUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL2FwcC5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6NDAwLDUwMCw3MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTsgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG5cbioge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLyogLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvLyAgIGNvbG9yOiAjZmZmO1xuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICBmb250LXdlaWdodDogNDAwO1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvLyAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICovXG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW1wbGViYXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbXBsZWJhci1zY3JvbGxiYXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGxlZnQ6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKiAvLyByZ2IoMTQsMTYsMjApOyAqL1xuICB3aWR0aDogMDtcbn1cblxuLnNob3dzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmhpZGVzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLmNoYWtyYS11aS1kYXJrICN3cmFwcGVyLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHotaW5kZXg6IDIwO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNykgMHB4IDFweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuOCkgMHB4IDBweCAycHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xufVxuXG4uY2hha3JhLXVpLWxpZ2h0ICN3cmFwcGVyLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHotaW5kZXg6IDIwO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDFweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDBweCAycHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xufVxuXG4jd3JhcHBlci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI21haW5tZW51IHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNtYWlubWVudSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xuICBmbGV4OiA0O1xufVxuXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xuICBmbGV4OiAxO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbWFpbm1lbnUgLmluZGljYXRvci1kb3duIHtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI21haW5tZW51IHVsIGxpLmhhc21lbnUge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21haW5tZW51IHVsIGxpLmFjdGlvbnMge1xuICBmbGV4OiAxO1xufVxuXG4jbWFpbm1lbnUgdWwgbGkgdWwuc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbn1cblxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21haW5tZW51IHVsIGxpIGEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNtYWlubWVudSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBhdXRvO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4jbWFpbm1lbnUgYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk0ZmY5Nztcbn1cblxuI21haW5tZW51IGE6aG92ZXIge1xuICBjb2xvcjogIzk0ZmY5Nztcbn1cblxuLmxvZ28tdHh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMTE7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmxvZ28tdHh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmY5Nztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNnYW1lLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAjd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICNnYW1lLWdyaWQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAjZ2FtZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICB9XG59XG4jZ2FtZS1ncmlkLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2dhbWUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2FtZS1pbmZvLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4jZ2FtZS1pbmZvLWNvbnRlbnQgaDMgc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuI2dhbWUtZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmdhbWUtaXRlbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLmdhbWUtaXRlbTpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDAuOTUpO1xufVxuXG4uZ2FtZS1pdGVtOmhvdmVyID4gLmdhbWUtdGl0bGUgc3BhbiB7XG4gIGNvbG9yOiByZ2IoMTQ4LCAyNTUsIDE1MSk7XG59XG5cbi5nYW1lLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XG4gIHdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICAvKiBvcGFjaXR5OiAwLjI7ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYW1lLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWUtYXR0cmlidXRlcyB1bCBsaSBzcGFuIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5pbWFnZWJveCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2VzcmMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2V1cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGJvdHRvbTogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZWJveC1kcmFnZ2luZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDA7XG59XG5cbi5pbWFnZWJveCAuaW1hZ2VzcmMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0bi1mb3JmZWl0IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuI2dhbWVwYW5lbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNnYW1lbG9hZGluZy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNnYW1lbG9hZGluZyA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3dyYXBwZXItZnJlZWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3F1ZXVlLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA2O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNxdWV1ZS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogNDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gIH1cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcbiAgfVxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XG4gIH1cbn1cbiNxdWV1ZS1sb2FkZXIge1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAxcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XG4gIGFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XG59XG5cbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMiksXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xufVxuXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDEpLFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7XG59XG5cbiNxdWV1ZS10YWIge1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBncmFiO1xuICBib3R0b206IC0xcHg7XG4gIHotaW5kZXg6IDEwMTtcbn1cblxuI3F1ZXVlLXRhYi1kaXZldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDgwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbiNxdWV1ZS10YWItY2FuY2VsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3F1ZXVlLXNlYXJjaGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbiNxdWV1ZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcbn1cblxuI3F1ZXVlLWdhbWVzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiNxdWV1ZS1nYW1lcyB1bCBsaSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVldWUtZ2FtZS10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4zcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnF1ZXVlLWdhbWUtbW9kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzOTRiO1xuICBjb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0gLmZvcm0tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1yb3cgPiBsYWJlbCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzk0ZmY5NztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXJvdyA+IGlucHV0IHtcbiAgd2lkdGg6IDE1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9ybS1yb3cgPiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2VkNTY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU0ODtcbn1cblxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xufVxuXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIC5tZGUtcHJldmlldy1jb250ZW50IHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiKDI0MSwgMjQ5LCAyNTUpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGIsICNnYW1lLWluZm8tbG9uZ2Rlc2Mgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyAubWRlLXByZXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLmNoYWtyYS11aS1kYXJrIC5yZWFjdC1tZGUgLm1kZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xufVxuLmNoYWtyYS11aS1kYXJrIC5tZGUtdGV4dCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS04MDApO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgcCxcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCBwIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAtLWNoYWtyYS1jb2xvcnMtZ3JheS01MDA7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyIHRkLFxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGJvZHkgdHIgdGQsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBwYWRkaW5nOiAwLjZyZW07XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0ciB0aCxcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGJvZHkgdHIsXG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0cixcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0Ym9keSB0cixcbi5jaGFrcmEtdWktZGFyayAubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2MsXG4ubWRlLXByZXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHAsXG4ubWRlLXByZXZpZXctY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgYmxvY2txdW90ZSxcbi5tZGUtcHJldmlldy1jb250ZW50IGJsb2NrcXVvdGUge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzA4MjI1YTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgYSxcbi5tZGUtcHJldmlldy1jb250ZW50IGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNmMWY5ZmY7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGNvZGUsXG4ubWRlLXByZXZpZXctY29udGVudCBjb2RlIHtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBzdHJvbmcsXG4ubWRlLXByZXZpZXctY29udGVudCBzdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgZW0sXG4ubWRlLXByZXZpZXctY29udGVudCBlbSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDEsXG4ubWRlLXByZXZpZXctY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGgyLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoMyxcbi5tZGUtcHJldmlldy1jb250ZW50IGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDQsXG4ubWRlLXByZXZpZXctY29udGVudCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGg1LFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoNixcbi5tZGUtcHJldmlldy1jb250ZW50IGg2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGJvZHkgdHIgdGQsXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyIHRoLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGJvZHkgdHIgdGQsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0cixcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0Ym9keSB0cixcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLmNoYWtyYS1mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uYmxpbmtfbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4udGV4dFNoaW5lQmxhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMjUlLCAjOTk5IDI2JSwgIzk5OSA2NCUsICNmZmYgNjUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgYW5pbWF0aW9uOiB0ZXh0U2hpbmUgNHMgZWFzZS1pbiBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgdGV4dFNoaW5lIHtcbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDAlO1xuICB9XG59XG4ubG9hZGVyc0RvdHMsXG4ubG9hZGVyc0RvdHM6YmVmb3JlLFxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ3IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogbG9hZDcgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmxvYWRlcnNEb3RzIHtcbiAgY29sb3I6ICM2M2VkNTY7XG4gIGZvbnQtc2l6ZTogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG4ubG9hZGVyc0RvdHM6YmVmb3JlLFxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi5sb2FkZXJzRG90czpiZWZvcmUge1xuICBsZWZ0OiAtMy41ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xuICBsZWZ0OiAzLjVlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ3IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcbiAgfVxuICA0MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ3IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcbiAgfVxuICA0MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xuICB9XG59XG4ubG9hZGVyQmFycyxcbi5sb2FkZXJCYXJzOmJlZm9yZSxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMmVtO1xufVxuXG4ubG9hZGVyQmFycyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA2cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG4ubG9hZGVyQmFyczpiZWZvcmUsXG4ubG9hZGVyQmFyczphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ubG9hZGVyQmFyczpiZWZvcmUge1xuICBsZWZ0OiAtMWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLmxvYWRlckJhcnM6YWZ0ZXIge1xuICBsZWZ0OiAxZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZDEge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICA0MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG59XG4ubG9hZGVyTGluZVVwIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5NGZmOTc7XG4gIGxlZnQ6IC0xMDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiBzaGFkb3dSb2xsaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzaGFkb3dSb2xsaW5nIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgMTIlIHtcbiAgICBib3gtc2hhZG93OiAxMDBweCAwICM5NGZmOTcsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICAzNiUge1xuICAgIGJveC1zaGFkb3c6IDEyMHB4IDAgIzk0ZmY5NywgMTEwcHggMCAjOTRmZjk3LCAxMDBweCAwICM5NGZmOTcsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NywgMTEwcHggMCAjOTRmZjk3LCAxMDBweCAwICM5NGZmOTc7XG4gIH1cbiAgNjIlIHtcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTc7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTc7XG4gIH1cbiAgODclIHtcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTc7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG59XG4uc2hpbW1lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE0MHB4IDAgMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDE0OCwgMjU1LCAxNTEsIDAuMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMyMjIpLCB0bygjMjIyKSwgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpKTtcbiAgYmFja2dyb3VuZDogLW1vei1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzIyMiksIHRvKCMyMjIpLCBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NykpO1xuICBiYWNrZ3JvdW5kOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzIyMiksIHRvKCMyMjIpLCBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gIH1cbn1cbi8qIExPQURJTkcgU1BJTk5FUiAqL1xuLmRpZ2l0YWx0aW1lciB7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbkBrZXlmcmFtZXMgdGltZXJibGluayB7XG4gIDAlIHtcbiAgICBjb2xvcjogI0U1M0UzRTtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICNFNTNFM0U7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NsaWVudC9zcmMvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7NEVBQUE7QUFTQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDRiwyQkFBQTtBQUhGOztBQVFBO0VBQ0Usd0NBQUE7QUFMRjs7QUFTQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0E7Ozs7Ozs7NENBQUE7QUFDRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFXQTtFQUNFLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQVJGOztBQVdBLFVBQUE7QUFDQTtFQUNFLFFBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVlBLFVBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsUUFBQTtBQVRGOztBQVlBLFdBQUE7QUFDQTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQSxvQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUFURjs7QUFZQTtFQUNFLCtFQUFBO0FBVEY7O0FBcUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7RUFFQSx5QkFBQTtBQW5CSjs7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNB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LGNBQUE7RUFuSEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcbi8vIEBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjQwMCw1MDAsNzAwXFxcIik7XFxuLy8gQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpOyAqL1xcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG4gIFxcbn1cXG5cXG4jcm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxufVxcblxcblxcblxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAvLyAgIGNvbG9yOiAjZmZmO1xcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XFxuICAvLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAvLyBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLy8gICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAqL1xcbn1cXG5cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uc2ltcGxlYmFyLXdyYXBwZXIge1xcbiAgaGVpZ2h0OjEwMCU7XFxufVxcblxcbi5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBsZWZ0OiAycHg7XFxuICByaWdodDogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIG92ZXJmbG93OnZpc2libGU7XFxuICBcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6MDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAvKiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7ICovXFxuICBib3JkZXItcmFkaXVzOjRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiAvLyByZ2IoMTQsMTYsMjApOyAqL1xcbiAgd2lkdGg6MDtcXG59XFxuXFxuLnNob3dzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7Ly8gcmdiKDgwLCA4MCwgODApO1xcbn1cXG5cXG4uaGlkZXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsvLy9yZ2IoMTQsMTYsMjApO1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuLy8gI3dyYXBwZXIge1xcbi8vICAgZGlzcGxheTogZmxleDtcXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuLy8gICB3aWR0aDogMTAwJTtcXG4vLyAgIGhlaWdodDogMTAwJTtcXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuLy8gfVxcblxcbi5jaGFrcmEtdWktZGFyayB7XFxuICAjd3JhcHBlci1oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpIDBweCAxcHggMnB4IDBweCxcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMHB4IDBweCAycHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDI0O1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7XFxuICB9XFxufVxcblxcbi5jaGFrcmEtdWktbGlnaHQge1xcbiAgI3dyYXBwZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMXB4IDJweCAwcHgsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpIDBweCAwcHggMnB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpO1xcbiAgfVxcbn1cXG5cXG4jd3JhcHBlci1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jbWFpbm1lbnUge1xcbiAgd2lkdGg6IDkyJTtcXG4gIG1hcmdpbi1sZWZ0OiA0JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jbWFpbm1lbnUgdWwubWVudS1uYXYge1xcbiAgZmxleDogNDtcXG59XFxuI21haW5tZW51IHVsLm1lbnUtbmF2IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaSB7XFxuICBmbGV4OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW5tZW51IC5pbmRpY2F0b3ItZG93biB7XFxuICBjb2xvcjogI2FhYTtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgLy8gei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNtYWlubWVudSB1bCBsaS5oYXNtZW51IHtcXG4gIGZsZXg6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW5tZW51IHVsIGxpLmFjdGlvbnMge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvLyB6LWluZGV4OiA5OTk7XFxuICBtYXJnaW4tbGVmdDogLTFyZW07XFxufVxcblxcbiNtYWlubWVudSB1bCBsaSB1bC5zdWJtZW51IGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkgYSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWlubWVudSBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XFxuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuI21haW5tZW51IGEuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTRmZjk3O1xcbn1cXG4jbWFpbm1lbnUgYTpob3ZlciB7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxYjQ3O1xcbiAgY29sb3I6ICM5NGZmOTc7XFxufVxcblxcbi5sb2dvLXR4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMxMTE7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ubG9nby10eHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmY5NztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbiAgI2dhbWUtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG5cXG4gICN3cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICAjZ2FtZS1ncmlkLXdyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgI2dhbWUtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcbiAgfVxcbn1cXG5cXG4jZ2FtZS1ncmlkLXdyYXBwZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLy8gei1pbmRleDogNTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLy8gbWFyZ2luLXRvcDotM3JlbTtcXG59XFxuXFxuI2dhbWUtaW5mby1jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICM3Nzc7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWNvbnRlbnQgaDMgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBjb2xvcjogIzk5OTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNnYW1lLWdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweCAxNjBweDtcXG4gIC8vIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gIC8vIGdyaWQtcm93LWdhcDogMXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG59XFxuXFxuLmdhbWUtaXRlbSB7XFxuICAvLyB3aWR0aDogMTAwJTtcXG4gIC8vIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIC8vIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC4zMTI1cmVtO1xcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1pdGVtOmhvdmVyIGltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDAuOTUpO1xcbn1cXG5cXG4uZ2FtZS1pdGVtOmhvdmVyID4gLmdhbWUtdGl0bGUgc3BhbiB7XFxuICBjb2xvcjogcmdiKDE0OCwgMjU1LCAxNTEpO1xcbn1cXG5cXG4uZ2FtZS1pdGVtIGltZyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XFxuICAvLyB3aWR0aDogMTAwJTtcXG4gIC8vIGhlaWdodDogMTAwJTtcXG4gIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmdhbWUtdGl0bGUge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcztcXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gYm90dG9tOiAwcHg7XFxuICAvLyBsZWZ0OiAwcHg7XFxuICAvLyBtYXJnaW4tdG9wOiAtMjRweDtcXG4gIC8vIGNvbG9yOiAjNmFjZDY0O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgLy8gbWF4LWhlaWdodDogMTI4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpO1xcbiAgLyogb3BhY2l0eTogMC4yOyAqL1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmdhbWUtdGl0bGUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5nYW1lLWF0dHJpYnV0ZXMgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmdhbWUtYXR0cmlidXRlcyB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmdhbWUtYXR0cmlidXRlcyB1bCBsaSBzcGFuIHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uaW1hZ2Vib3gge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmltYWdlc3JjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2V1cGxvYWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBib3R0b206IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmltYWdlcmVtb3ZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbWFnZWJveC1kcmFnZ2luZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjAwO1xcbn1cXG4uaW1hZ2Vib3ggLmltYWdlc3JjIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLy8gLmdhbWVzY3JlZW4ge1xcbi8vICAgd2lkdGg6IDEwMCU7XFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxuLy8gICBib3JkZXI6IDA7XFxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbi8vIH1cXG5cXG4uYnRuLWZvcmZlaXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcblxcblxcbiNnYW1lcGFuZWwtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAvLyB6LWluZGV4OiA5OTtcXG59XFxuXFxuI2dhbWVsb2FkaW5nLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIC8vIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuI2dhbWVsb2FkaW5nID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4jd3JhcHBlci1mcmVlZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvLyB6LWluZGV4OiA0O1xcbn1cXG5cXG4jcXVldWUtcGFuZWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDY7XFxuICAvLyB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpO1xcbn1cXG5cXG4jcXVldWUtaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XFxuICB9XFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICB9XFxufVxcblxcbiNxdWV1ZS1sb2FkZXIge1xcbiAgdG9wOiAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMXB4O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgMC45cyAtMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4xMSwgMC40OSwgMC4zOCwgMC43OCk7XFxuICBhbmltYXRpb246IGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIDAuOXMgLTAuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTEsIDAuNDksIDAuMzgsIDAuNzgpO1xcbn1cXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDIpLFxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNCkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjI1cyAhaW1wb3J0YW50O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXMgIWltcG9ydGFudDtcXG59XFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG5cXG4jcXVldWUtdGFiIHtcXG4gIGhlaWdodDogNDFweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBjdXJzb3I6IGdyYWI7XFxuICBib3R0b206IC0xcHg7XFxuICB6LWluZGV4OiAxMDE7XFxufVxcblxcbiNxdWV1ZS10YWItZGl2ZXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiA4MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuI3F1ZXVlLXRhYi1jYW5jZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcXVldWUtc2VhcmNoaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jcXVldWUtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XFxufVxcblxcbiNxdWV1ZS1nYW1lcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jcXVldWUtZ2FtZXMgdWwgbGkge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5xdWV1ZS1nYW1lLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucXVldWUtZ2FtZS1tb2RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzM5NGI7XFxuICBjb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybSAuZm9ybS1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtLXJvdyA+IGxhYmVsIHtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjOTRmZjk3O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb3JtLXJvdyA+IGlucHV0IHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcbi5mb3JtLXJvdyA+IHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgPiBidXR0b24ge1xcbiAgLy8gd2lkdGg6IDEwcmVtO1xcbiAgLy8gaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2VkNTY7XFxuICBcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLy8gZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NDg7XFxufVxcbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGZmOTc7XFxufVxcblxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDoxMDA7XFxufVxcblxcbiNnYW1lLWluZm8tbG9uZ2Rlc2Mge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDo1MDA7XFxuICBjb2xvcjogcmdiKDI0MSwgMjQ5LCAyNTUpO1xcbiAgcGFkZGluZzowO1xcbn1cXG5cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGIsICNnYW1lLWluZm8tbG9uZ2Rlc2Mgc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OjkwMDtcXG59XFxuXFxuI2dhbWUtaW5mby1sb25nZGVzYyAubWRlLXByZXZpZXctY29udGVudCB7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5jaGFrcmEtdWktZGFyayB7XFxuICAucmVhY3QtbWRlIC5tZGUtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcXG4gIH1cXG4gIC5tZGUtdGV4dCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS04MDApO1xcbiAgfVxcblxcbiAgI2dhbWUtaW5mby1sb25nZGVzYyxcXG4gIC5tZGUtcHJldmlldy1jb250ZW50IHtcXG4gICAgLy8gICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAvLyBtYXJnaW46IDFyZW0gMDtcXG5cXG4gICAgcCB7XFxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206MnJlbTtcXG4gICAgfVxcbiAgICB0YWJsZSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwO1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgICB0Ym9keSB0ciB0ZCxcXG4gICAgICB0aGVhZCB0ciB0aCB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICAgICAgfVxcblxcbiAgICAgIHRib2R5IHRyLFxcbiAgICAgIHRoZWFkIHRyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyAuY2hha3JhLXVpLWxpZ2h0IHtcXG5cXG5cXG4gICNnYW1lLWluZm8tbG9uZ2Rlc2MsXFxuICAubWRlLXByZXZpZXctY29udGVudCB7XFxuICAgIC8vICAgYmFja2dyb3VuZDogIzc3NztcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogMzMzO1xcbiAgICAvLyBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcbiAgICBibG9ja3F1b3RlIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6MnJlbTtcXG4gICAgICBib3JkZXItbGVmdDowLjVyZW0gc29saWQgIzA4MjI1YTtcXG4gICAgfVxcbiAgICBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICBjb2xvcjojZjFmOWZmO1xcbiAgICB9XFxuICAgIGNvZGUge1xcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjojMDgyMjVhO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6MC41cmVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6MC41cmVtO1xcbiAgICB9XFxuICAgIHN0cm9uZyB7XFxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgfVxcbiAgICBlbSB7XFxuICAgICAgLy9mb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbiAgICBoMSB7IFxcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgZm9udC1zaXplOjI0cHg7XFxuICAgIH1cXG4gICAgaDIge1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgZm9udC1zaXplOjIycHg7XFxuICAgIH1cXG4gICAgaDMge1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgZm9udC1zaXplOjIwcHg7XFxuICAgIH1cXG4gICAgaDQge1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgZm9udC1zaXplOjE2cHg7XFxuICAgIH1cXG4gICAgaDUge1xcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIH1cXG4gICAgaDYge1xcbiAgICAgIGZvbnQtc2l6ZToxMnB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIH1cXG4gICAgdGFibGUge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgICAgIHRib2R5IHRyIHRkLFxcbiAgICAgIHRoZWFkIHRyIHRoIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGVhZCB0ciB0aCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gICAgICB9XFxuXFxuICAgICAgdGJvZHkgdHIsXFxuICAgICAgdGhlYWQgdHIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuLy8gfVxcblxcbi5jaGFrcmEtZm9ybS1jb250cm9sIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5ibGlua19tZSB7XFxuICBhbmltYXRpb246IGJsaW5rZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtlciB7XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxufVxcblxcbi50ZXh0U2hpbmVCbGFjayB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMjUlLCAjOTk5IDI2JSwgIzk5OSA2NCUsICNmZmYgNjUlKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICBhbmltYXRpb246IHRleHRTaGluZSA0cyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0ZXh0U2hpbmUge1xcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAwJTtcXG4gIH1cXG59XFxuXFxuLmxvYWRlcnNEb3RzLFxcbi5sb2FkZXJzRG90czpiZWZvcmUsXFxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyLjVlbTtcXG4gIGhlaWdodDogMi41ZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ3IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IGxvYWQ3IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxufVxcbi5sb2FkZXJzRG90cyB7XFxuICBjb2xvcjogIzYzZWQ1NjtcXG4gIGZvbnQtc2l6ZTogM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbn1cXG4ubG9hZGVyc0RvdHM6YmVmb3JlLFxcbi5sb2FkZXJzRG90czphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuLmxvYWRlcnNEb3RzOmJlZm9yZSB7XFxuICBsZWZ0OiAtMy41ZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxufVxcbi5sb2FkZXJzRG90czphZnRlciB7XFxuICBsZWZ0OiAzLjVlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ3IHtcXG4gIDAlLFxcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XFxuICB9XFxuICA0MCUge1xcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkNyB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XFxuICB9XFxufVxcblxcbi5sb2FkZXJCYXJzLFxcbi5sb2FkZXJCYXJzOmJlZm9yZSxcXG4ubG9hZGVyQmFyczphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIHdpZHRoOiAwLjVlbTtcXG4gIGhlaWdodDogMmVtO1xcbn1cXG4ubG9hZGVyQmFycyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDZweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG59XFxuLmxvYWRlckJhcnM6YmVmb3JlLFxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG4ubG9hZGVyQmFyczpiZWZvcmUge1xcbiAgbGVmdDogLTFlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG59XFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xcbiAgbGVmdDogMWVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDEge1xcbiAgMCUsXFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAtMWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxvYWQxIHtcXG4gIDAlLFxcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMDtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgLTFlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG59XFxuXFxuLmxvYWRlckxpbmVVcCB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzk0ZmY5NztcXG4gIGxlZnQ6IC0xMDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHNoYWRvd1JvbGxpbmcgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWRvd1JvbGxpbmcge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICAxMiUge1xcbiAgICBib3gtc2hhZG93OiAxMDBweCAwICM5NGZmOTcsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGJveC1zaGFkb3c6IDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICAzNiUge1xcbiAgICBib3gtc2hhZG93OiAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3LFxcbiAgICAgIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3gtc2hhZG93OiAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NywgMTEwcHggMCAjOTRmZjk3LFxcbiAgICAgIDEwMHB4IDAgIzk0ZmY5NztcXG4gIH1cXG4gIDYyJSB7XFxuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsXFxuICAgICAgMTEwcHggMCAjOTRmZjk3O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTc7XFxuICB9XFxuICA4NyUge1xcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG59XFxuXFxuLnNoaW1tZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDE0MHB4IDAgMDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgxNDgsIDI1NSwgMTUxLCAwLjEpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcXG4gICAgbGluZWFyLFxcbiAgICBsZWZ0IHRvcCxcXG4gICAgcmlnaHQgdG9wLFxcbiAgICBmcm9tKCMyMjIpLFxcbiAgICB0bygjMjIyKSxcXG4gICAgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpXFxuICApO1xcbiAgYmFja2dyb3VuZDogLW1vei1ncmFkaWVudChcXG4gICAgbGluZWFyLFxcbiAgICBsZWZ0IHRvcCxcXG4gICAgcmlnaHQgdG9wLFxcbiAgICBmcm9tKCMyMjIpLFxcbiAgICB0bygjMjIyKSxcXG4gICAgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpXFxuICApO1xcbiAgYmFja2dyb3VuZDogZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hpbW1lcjtcXG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICBhbmltYXRpb24tbmFtZTogc2hpbW1lcjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcbkAtbW96LWtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQC1vLWtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICB9XFxufVxcblxcbi8qIExPQURJTkcgU1BJTk5FUiAqL1xcblxcbi5kaWdpdGFsdGltZXIge1xcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcXG59XFxuXFxuQGtleWZyYW1lcyB0aW1lcmJsaW5rIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6ICNFNTNFM0U7XFxuICB9XFxuICA1MCUge1xcbiAgICBjb2xvcjogcmdiKDI1NCwyNTQsMjU1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI0U1M0UzRTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhM2QyM2Y1MWNlOTBkNjJjYjRmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9