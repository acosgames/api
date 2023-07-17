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
  border-radius: 4px;
  transition: background-color 1s ease;
  background-color: #fff;
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
}`, "",{"version":3,"sources":["webpack://./../client/src/app.scss"],"names":[],"mappings":"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","sourcesContent":["/* // @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n// @import url(\"https://fonts.googleapis.com/css?family=Oswald:400,500,700\");\n// @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n// @import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\"); */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap\");\n\n\n* {\n  box-sizing: border-box;\n  margin:0;\n  padding:0;\n  \n}\n\n#root {\n  display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n    width: 100%;\n  /* background-color: red; */\n}\n\n\n\n* {\n  -webkit-tap-highlight-color: transparent;\n}\n\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  /* // overflow: hidden;\n  //   background-color: #333;\n  //   color: #fff;\n  //   font-size: 16px;\n  //   font-weight: 400;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n  //   -webkit-font-smoothing: antialiased;\n  //   -moz-osx-font-smoothing: grayscale; */\n}\n\n\na {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.simplebar-wrapper {\n  height:100%;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: #fff;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0;\n  overflow:visible;\n  \n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n  width:0;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  // background-color: rgb(136, 136, 136);\n  border-radius:4px;\n  transition: background-color 1s ease;\n  background-color: #fff;// rgb(14,16,20);\n  width:0;\n}\n\n.showscroll::-webkit-scrollbar-thumb {\n  background-color: #fff;// rgb(80, 80, 80);\n}\n\n.hidescroll::-webkit-scrollbar-thumb {\n  background-color: #fff;///rgb(14,16,20);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n// #wrapper {\n//   display: flex;\n//   flex-direction: column;\n//   width: 100%;\n//   height: 100%;\n//   min-height: 100%;\n// }\n\n.chakra-ui-dark {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.7) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n.chakra-ui-light {\n  #wrapper-header {\n    width: 100%;\n    height: 64px;\n    z-index: 20;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px,\n      rgba(0, 0, 0, 0.5) 0px 0px 2px 0px;\n    background-color: #202024;\n    // background-color: rgb(0, 52, 104);\n  }\n}\n\n#wrapper-content {\n  width: 100%;\n  height: 100%;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1rem;\n}\n\n#mainmenu {\n  width: 92%;\n  margin-left: 4%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  // align-items: center;\n}\n\n#mainmenu ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n#mainmenu ul.menu-nav {\n  flex: 4;\n}\n#mainmenu ul.menu-nav {\n  flex: 1;\n}\n\n#mainmenu ul li {\n  flex: auto;\n  display: flex;\n}\n\n#mainmenu .indicator-down {\n  color: #aaa;\n  margin-left: -8px;\n  margin-top: 5px;\n  // z-index: 10;\n  font-size: 1rem;\n}\n\n#mainmenu ul li.hasmenu {\n  flex: auto;\n  display: block;\n}\n\n#mainmenu ul li.actions {\n  flex: 1;\n}\n\n#mainmenu ul li ul.submenu {\n  display: block;\n  position: absolute;\n  // z-index: 999;\n  margin-left: -1rem;\n}\n\n#mainmenu ul li ul.submenu li {\n  display: block;\n}\n\n#mainmenu ul li a {\n  align-items: center;\n  line-height: normal;\n  height: 3rem;\n  display: flex;\n}\n\n#mainmenu a {\n  display: block;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: #202024;\n  // background-color: rgb(0, 52, 104);\n  text-decoration-thickness: auto;\n  text-size-adjust: 100%;\n  transition: background-color 200ms;\n}\n\n#mainmenu a.active {\n  border-bottom: 2px solid #94ff97;\n}\n#mainmenu a:hover {\n  // background-color: #001b47;\n  color: #94ff97;\n}\n\n.logo-txt {\n  background-color: #fff;\n  color: #111;\n  padding: 0.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  font-weight: 900;\n}\n\n.logo-txt:hover {\n  background-color: #94ff97;\n}\n\n@media screen and (max-width: 768px) {\n  html,\n  body {\n    font-size: 14px;\n  }\n  #game-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width: 500px) {\n  html,\n  body {\n    font-size: 12px;\n  }\n\n  #wrapper {\n    position: relative;\n  }\n  \n  #game-grid-wrapper {\n    width: 80%;\n  }\n  #game-grid {\n    grid-template-columns: repeat(1, 1fr);\n    padding-bottom: 6rem;\n  }\n}\n\n#game-grid-wrapper {\n  width: 90%;\n  margin: 0 auto;\n  // z-index: 5;\n  position: relative;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-info {\n  display: flex;\n  justify-content: center;\n  // margin-top:-3rem;\n}\n\n#game-info-content {\n  background: #777;\n  padding: 2rem;\n}\n\n#game-info-content h3 span {\n  padding-left: 1rem;\n  color: #999;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n#game-grid {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  // grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;\n  // grid-column-gap: 1rem;\n  // grid-row-gap: 1rem;\n}\n\n@media screen and (max-width: 700px) {\n}\n@media screen and (max-width: 400px) {\n}\n\n.game-item {\n  // width: 100%;\n  // height: 100%;\n  width: 160px;\n  // height: 150px;\n  margin-top: 4px;\n  margin-bottom: 1rem;\n  padding: 0.3125rem;\n  // margin-left: 10px;\n  // margin-right: 10px;\n  position: relative;\n  cursor: pointer;\n\n  // display: flex;\n  // justify-content: center;\n  // align-items: center;\n  // flex-direction: column;\n\n  flex: 0 0 auto;\n}\n\n.game-item:hover img {\n  transform: scale(0.95, 0.95);\n}\n\n.game-item:hover > .game-title span {\n  color: rgb(148, 255, 151);\n}\n\n.game-item img {\n  width: 150px;\n  height: 150px;\n  display: block;\n  transition: transform 200ms;\n  // width: 100%;\n  // height: 100%;\n  // border-radius: 4px;\n}\n.game-title {\n  transition: background-color 400ms;\n  // display: block;\n  // position: absolute;\n  // bottom: 0px;\n  // left: 0px;\n  // margin-top: -24px;\n  // color: #6acd64;\n  width: 150px;\n  font-size: 18px;\n  // max-height: 128px;\n  font-weight: 700;\n\n  // background-color: rgb(0, 52, 104);\n  /* opacity: 0.2; */\n\n  overflow: hidden;\n  // border-radius: 3px;\n}\n\n.game-title span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 24px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n.game-attributes ul {\n  margin: 0;\n  margin-top: 0.2rem;\n  padding: 0;\n}\n\n.game-attributes ul li {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.game-attributes ul li span {\n  color: #ccc;\n}\n\n.imagebox {\n  width: 200px;\n  height: 200px;\n  margin-right: 0.5rem;\n  border: 1px solid #000;\n  display: inline-block;\n  position: relative;\n}\n.imagesrc {\n  width: 100%;\n  height: 100%;\n}\n.imageupload {\n  position: absolute;\n  height: 2rem;\n  line-height: 2rem;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n}\n.imageremove {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  line-height: 2rem;\n  bottom: 0;\n  text-align: center;\n}\n.imagebox-dragging {\n  border: 1px solid #f00;\n}\n.imagebox .imagesrc img {\n  width: 100%;\n  height: 100%;\n}\n\n// .gamescreen {\n//   width: 100%;\n//   height: 100%;\n//   border: 0;\n//   background-color: #fff;\n// }\n\n.btn-forfeit {\n  width: 50px;\n  height: 50px;\n}\n\n\n\n#gamepanel-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 99;\n}\n\n#gameloading-wrapper {\n  background-color: #eee;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  // z-index: 100;\n}\n\n#gameloading > * {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n#wrapper-freeform {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  // z-index: 4;\n}\n\n#queue-panel {\n  position: fixed;\n  width: 100%;\n  height: 200px;\n  bottom: 0;\n  left: 0;\n  z-index: 6;\n  // transition: height 500ms ease;\n  pointer-events: none;\n  user-select: none;\n  // transition: transform 0.5s ease;\n  // transform: translateY(60px);\n}\n\n#queue-header {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n  pointer-events: none;\n}\n\n@-webkit-keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n@keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3);\n  }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1);\n  }\n}\n\n#queue-loader {\n  top: 2px;\n  position: relative;\n}\n.line-scale-pulse-out-rapid > div {\n  background-color: #fff;\n  width: 2px;\n  height: 20px;\n  border-radius: 3px;\n  margin: 1px;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n}\n.line-scale-pulse-out-rapid > div:nth-child(2),\n.line-scale-pulse-out-rapid > div:nth-child(4) {\n  -webkit-animation-delay: -0.25s !important;\n  animation-delay: -0.25s !important;\n}\n.line-scale-pulse-out-rapid > div:nth-child(1),\n.line-scale-pulse-out-rapid > div:nth-child(5) {\n  -webkit-animation-delay: 0s !important;\n  animation-delay: 0s !important;\n}\n\n\n\n#queue-tab {\n  height: 41px;\n  border: 1px solid #aaa;\n  border-bottom: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  width: 200px;\n  background-color: #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  pointer-events: auto;\n  cursor: grab;\n  bottom: -1px;\n  z-index: 101;\n}\n\n#queue-tab-divet {\n  position: absolute;\n  top: 4px;\n  left: 80px;\n  width: 40px;\n  height: 2px;\n  border-bottom: 1px solid #aaa;\n  background-color: #eee;\n}\n\n#queue-tab-cancel {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 20px;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 2rem;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n#queue-searching {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n\n#queue-content {\n  background-color: #ccc;\n  height: 160px;\n  position: relative;\n  z-index: 100;\n  pointer-events: auto;\n  border-top: 1px solid #aaa;\n}\n\n#queue-games ul {\n  margin: 0;\n  padding: 0;\n  height: 60px;\n}\n\n#queue-games ul li {\n  width: 150px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.queue-game-title {\n  display: inline-block;\n  padding: 0.3rem;\n  font-size: 1.2rem;\n}\n\n.queue-game-mode {\n  display: inline-block;\n  padding: 0.2rem;\n  background-color: #2c394b;\n  color: #eee;\n  border-radius: 4px;\n  margin-right: 0.2rem;\n}\n\n.form {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .form-row {\n  margin-bottom: 1rem;\n  display: block;\n  width: 100%;\n}\n\n.form-row > label {\n  margin: 0.5rem 0;\n  font-size: 0.8rem;\n  color: #94ff97;\n  display: block;\n}\n\n.form-row > input {\n  width: 15rem;\n  display: block;\n  padding-left: 0.5rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  border-style: double;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.form-row > textarea {\n  width: 15rem;\n  min-height: 15rem;\n  display: block;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.form-row > button {\n  // width: 10rem;\n  // height: 3rem;\n  border: 0;\n}\n.form-row > button.submit {\n  background-color: #63ed56;\n  \n  font-weight: bold;\n  // font-family: \"Inter\", \"Oswald\", sans-serif;\n}\n.form-row > button.submit:hover {\n  background-color: #52c548;\n}\n.form-row > button.submit:active {\n  background-color: #94ff97;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n  font-size: 1.6rem;\n  font-weight:100;\n}\n\n#game-info-longdesc {\n  font-size: 1.6rem;\n  font-weight:500;\n  color: rgb(241, 249, 255);\n  padding:0;\n}\n\n\n#game-info-longdesc b, #game-info-longdesc strong {\n  font-weight:900;\n}\n\n#game-info-longdesc .mde-preview-content {\n  padding: 0 2rem;\n}\n\n.chakra-ui-dark {\n  .react-mde .mde-header {\n    background-color: #202024;\n  }\n  .mde-text {\n    background: var(--chakra-colors-gray-800);\n  }\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: #333;\n    // margin: 1rem 0;\n\n    p {\n      margin-top: 0.5rem;\n      margin-bottom:2rem;\n    }\n    table {\n      border: 1px solid --chakra-colors-gray-500;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n}\n\n// .chakra-ui-light {\n\n\n  #game-info-longdesc,\n  .mde-preview-content {\n    //   background: #777;\n    // background-color: 333;\n    // margin: 1rem 0;\n    padding: 1rem;\n    p {\n      margin-bottom: 2rem;\n    }\n    blockquote {\n      padding-left:2rem;\n      border-left:0.5rem solid #08225a;\n    }\n    a {\n      text-decoration: underline;\n      color:#f1f9ff;\n    }\n    code {\n      //background-color:#08225a;\n      border-radius: 0.2rem;\n      padding-left:0.5rem;\n      padding-right:0.5rem;\n    }\n    strong {\n      font-weight:bold;\n    }\n    em {\n      //font-weight:bold;\n      font-style: italic;\n    }\n    h1 { \n      font-weight:bold;\n      font-size:24px;\n    }\n    h2 {\n      font-weight:bold;\n      font-size:22px;\n    }\n    h3 {\n      font-weight:bold;\n      font-size:20px;\n    }\n    h4 {\n      font-weight:bold;\n      font-size:16px;\n    }\n    h5 {\n      font-size:14px;\n      font-weight:bold;\n    }\n    h6 {\n      font-size:12px;\n      font-weight:bold;\n    }\n    table {\n      border: 1px solid #000;\n      border-color: #000;\n      border-collapse: collapse;\n      border-spacing: 0px;\n      margin-bottom: 1rem;\n\n      tbody tr td,\n      thead tr th {\n        border: 1px solid #000;\n        border-spacing: 0px;\n        padding: 0.6rem;\n      }\n\n      thead tr th {\n        border-bottom: 2px solid #000;\n      }\n\n      tbody tr,\n      thead tr {\n        border: 1px solid #000;\n        border-spacing: 0px;\n      }\n    }\n  }\n// }\n\n.chakra-form-control {\n  margin-bottom: 2rem;\n}\n\n.blink_me {\n  animation: blinker 3s ease-in-out infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0.7;\n  }\n}\n\n.textShineBlack {\n  background: linear-gradient(to right, #fff 25%, #999 26%, #999 64%, #fff 65%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% auto;\n  animation: textShine 4s ease-in infinite alternate;\n}\n\n@keyframes textShine {\n  50% {\n    background-position: 300%;\n  }\n}\n\n.loadersDots,\n.loadersDots:before,\n.loadersDots:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.2s infinite ease-in-out;\n  animation: load7 1.2s infinite ease-in-out;\n}\n.loadersDots {\n  color: #63ed56;\n  font-size: 3px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loadersDots:before,\n.loadersDots:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n.loadersDots:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loadersDots:after {\n  left: 3.5em;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n.loaderBars,\n.loaderBars:before,\n.loaderBars:after {\n  background: #fff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 0.5em;\n  height: 2em;\n}\n.loaderBars {\n  color: #fff;\n  text-indent: -9999em;\n  margin-left: 1rem;\n  position: relative;\n  font-size: 6px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loaderBars:before,\n.loaderBars:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loaderBars:before {\n  left: -1em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loaderBars:after {\n  left: 1em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 1.5em;\n  }\n  40% {\n    box-shadow: 0 -1em;\n    height: 1.5em;\n  }\n}\n\n.loaderLineUp {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: block;\n  margin: 15px auto;\n  position: relative;\n  color: #94ff97;\n  left: -100px;\n  box-sizing: border-box;\n  animation: shadowRolling 2s linear infinite;\n}\n\n@keyframes shadowRolling {\n  0% {\n    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  12% {\n    box-shadow: 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  25% {\n    box-shadow: 110px 0 #94ff97, 100px 0 #94ff97, 0px 0 rgba(255, 255, 255, 0),\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  36% {\n    box-shadow: 120px 0 #94ff97, 110px 0 #94ff97, 100px 0 #94ff97,\n      0px 0 rgba(255, 255, 255, 0);\n  }\n  50% {\n    box-shadow: 130px 0 #94ff97, 120px 0 #94ff97, 110px 0 #94ff97,\n      100px 0 #94ff97;\n  }\n  62% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97, 120px 0 #94ff97,\n      110px 0 #94ff97;\n  }\n  75% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      130px 0 #94ff97, 120px 0 #94ff97;\n  }\n  87% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 130px 0 #94ff97;\n  }\n  100% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),\n      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);\n  }\n}\n\n.shimmer {\n  margin: 0 auto;\n  padding: 0 140px 0 0;\n  display: inline;\n  margin-bottom: 0;\n  text-align: center;\n  color: rgba(148, 255, 151, 0.1);\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: -moz-gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  background: gradient(\n    linear,\n    left top,\n    right top,\n    from(#222),\n    to(#222),\n    color-stop(0.5, #94ff97)\n  );\n  -webkit-background-size: 125px 100%;\n  -moz-background-size: 125px 100%;\n  background-size: 125px 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  -webkit-animation-name: shimmer;\n  -moz-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-duration: 2s;\n  -moz-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-color: #222;\n}\n@-moz-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-webkit-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@-o-keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: top left;\n  }\n  100% {\n    background-position: top right;\n  }\n}\n\n/* LOADING SPINNER */\n\n.digitaltimer {\n  font-variant-numeric: tabular-nums;\n}\n\n@keyframes timerblink {\n  0% {\n    color: #E53E3E;\n  }\n  50% {\n    color: rgb(254,254,255);\n  }\n  100% {\n    color: #E53E3E;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d6879fba3260dc2e34f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MjI5ZjkxYTM5ZTU4NDRmYzI1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUg7QUFDakI7QUFDaEcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRixxSEFBcUgsSUFBSSxJQUFJLElBQUksMEJBQTBCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNyTTtBQUNBLG9IQUFvSCxJQUFJLElBQUk7QUFDNUg7QUFDQSx3RUFBd0UsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTs7QUFFcEcsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxP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bGllbnQvc3JjL2FwcC5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6NDAwLDUwMCw3MDBcIik7XG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8vIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTsgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG5cbioge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgLyogLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAvLyAgIGNvbG9yOiAjZmZmO1xuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICBmb250LXdlaWdodDogNDAwO1xuICAvLyBmb250LWZhbWlseTogXCJJbnRlclwiLCBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvLyAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICovXG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaW1wbGViYXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbXBsZWJhci1zY3JvbGxiYXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGxlZnQ6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDA7XG59XG5cbi5zaG93c2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5oaWRlc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG5cbmNvZGUge1xuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5jaGFrcmEtdWktZGFyayAjd3JhcHBlci1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpIDBweCAxcHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjgpIDBweCAwcHggMnB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbn1cblxuLmNoYWtyYS11aS1saWdodCAjd3JhcHBlci1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB6LWluZGV4OiAyMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAxcHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjUpIDBweCAwcHggMnB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbn1cblxuI3dyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNtYWlubWVudSB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jbWFpbm1lbnUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI21haW5tZW51IHVsLm1lbnUtbmF2IHtcbiAgZmxleDogNDtcbn1cblxuI21haW5tZW51IHVsLm1lbnUtbmF2IHtcbiAgZmxleDogMTtcbn1cblxuI21haW5tZW51IHVsIGxpIHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW5tZW51IC5pbmRpY2F0b3ItZG93biB7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbiNtYWlubWVudSB1bCBsaS5oYXNtZW51IHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNtYWlubWVudSB1bCBsaS5hY3Rpb25zIHtcbiAgZmxleDogMTtcbn1cblxuI21haW5tZW51IHVsIGxpIHVsLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTFyZW07XG59XG5cbiNtYWlubWVudSB1bCBsaSB1bC5zdWJtZW51IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNtYWlubWVudSB1bCBsaSBhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbWFpbm1lbnUgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogYXV0bztcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuI21haW5tZW51IGEuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NGZmOTc7XG59XG5cbiNtYWlubWVudSBhOmhvdmVyIHtcbiAgY29sb3I6ICM5NGZmOTc7XG59XG5cbi5sb2dvLXR4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTExO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5sb2dvLXR4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGZmOTc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjZ2FtZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgI3dyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjZ2FtZS1ncmlkLXdyYXBwZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgI2dhbWUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxufVxuI2dhbWUtZ3JpZC13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNnYW1lLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dhbWUtaW5mby1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzc3NztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuI2dhbWUtaW5mby1jb250ZW50IGgzIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbiNnYW1lLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nYW1lLWl0ZW0ge1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMC4zMTI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi5nYW1lLWl0ZW06aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcbn1cblxuLmdhbWUtaXRlbTpob3ZlciA+IC5nYW1lLXRpdGxlIHNwYW4ge1xuICBjb2xvcjogcmdiKDE0OCwgMjU1LCAxNTEpO1xufVxuXG4uZ2FtZS1pdGVtIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcbn1cblxuLmdhbWUtdGl0bGUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zO1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLyogb3BhY2l0eTogMC4yOyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FtZS10aXRsZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdhbWUtYXR0cmlidXRlcyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkgc3BhbiB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uaW1hZ2Vib3gge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlc3JjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdldXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBib3R0b206IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZXJlbW92ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Vib3gtZHJhZ2dpbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjAwO1xufVxuXG4uaW1hZ2Vib3ggLmltYWdlc3JjIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idG4tZm9yZmVpdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNnYW1lcGFuZWwtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jZ2FtZWxvYWRpbmctd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jZ2FtZWxvYWRpbmcgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN3cmFwcGVyLWZyZWVmb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNxdWV1ZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jcXVldWUtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xuICB9XG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDAuMyk7XG4gIH1cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xuICB9XG59XG4jcXVldWUtbG9hZGVyIHtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIDAuOXMgLTAuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTEsIDAuNDksIDAuMzgsIDAuNzgpO1xuICBhbmltYXRpb246IGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIDAuOXMgLTAuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTEsIDAuNDksIDAuMzgsIDAuNzgpO1xufVxuXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDIpLFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXMgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXMgIWltcG9ydGFudDtcbn1cblxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCgxKSxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xufVxuXG4jcXVldWUtdGFiIHtcbiAgaGVpZ2h0OiA0MXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGN1cnNvcjogZ3JhYjtcbiAgYm90dG9tOiAtMXB4O1xuICB6LWluZGV4OiAxMDE7XG59XG5cbiNxdWV1ZS10YWItZGl2ZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA4MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4jcXVldWUtdGFiLWNhbmNlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNxdWV1ZS1zZWFyY2hpbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuXG4jcXVldWUtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGhlaWdodDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XG59XG5cbiNxdWV1ZS1nYW1lcyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jcXVldWUtZ2FtZXMgdWwgbGkge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnF1ZXVlLWdhbWUtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5xdWV1ZS1nYW1lLW1vZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzk0YjtcbiAgY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIC5mb3JtLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tcm93ID4gbGFiZWwge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM5NGZmOTc7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1yb3cgPiBpbnB1dCB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmZvcm0tcm93ID4gdGV4dGFyZWEge1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9ybS1yb3cgPiBidXR0b24ge1xuICBib3JkZXI6IDA7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNlZDU2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NDg7XG59XG5cbi5mb3JtLXJvdyA+IGJ1dHRvbi5zdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmY5Nztcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyAubWRlLXByZXZpZXctY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2Mge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYigyNDEsIDI0OSwgMjU1KTtcbiAgcGFkZGluZzogMDtcbn1cblxuI2dhbWUtaW5mby1sb25nZGVzYyBiLCAjZ2FtZS1pbmZvLWxvbmdkZXNjIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5jaGFrcmEtdWktZGFyayAucmVhY3QtbWRlIC5tZGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcbn1cbi5jaGFrcmEtdWktZGFyayAubWRlLXRleHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktODAwKTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHAsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwO1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2hha3JhLXVpLWRhcmsgI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0Ym9keSB0ciB0ZCxcbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyIHRoLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyIHRkLFxuLmNoYWtyYS11aS1kYXJrIC5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIgdGgsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbn1cbi5jaGFrcmEtdWktZGFyayAjZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyLFxuLmNoYWtyYS11aS1kYXJrICNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGhlYWQgdHIsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGJvZHkgdHIsXG4uY2hha3JhLXVpLWRhcmsgLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG4jZ2FtZS1pbmZvLWxvbmdkZXNjLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBwLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGJsb2NrcXVvdGUsXG4ubWRlLXByZXZpZXctY29udGVudCBibG9ja3F1b3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICMwODIyNWE7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGEsXG4ubWRlLXByZXZpZXctY29udGVudCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjZjFmOWZmO1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBjb2RlLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgY29kZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2Mgc3Ryb25nLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGVtLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgZW0ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGgxLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoMixcbi5tZGUtcHJldmlldy1jb250ZW50IGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDMsXG4ubWRlLXByZXZpZXctY29udGVudCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIGg0LFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuI2dhbWUtaW5mby1sb25nZGVzYyBoNSxcbi5tZGUtcHJldmlldy1jb250ZW50IGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgaDYsXG4ubWRlLXByZXZpZXctY29udGVudCBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRib2R5IHRyIHRkLFxuI2dhbWUtaW5mby1sb25nZGVzYyB0YWJsZSB0aGVhZCB0ciB0aCxcbi5tZGUtcHJldmlldy1jb250ZW50IHRhYmxlIHRib2R5IHRyIHRkLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBwYWRkaW5nOiAwLjZyZW07XG59XG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyIHRoLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGhlYWQgdHIgdGgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbn1cbiNnYW1lLWluZm8tbG9uZ2Rlc2MgdGFibGUgdGJvZHkgdHIsXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHRhYmxlIHRoZWFkIHRyLFxuLm1kZS1wcmV2aWV3LWNvbnRlbnQgdGFibGUgdGJvZHkgdHIsXG4ubWRlLXByZXZpZXctY29udGVudCB0YWJsZSB0aGVhZCB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi5jaGFrcmEtZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmJsaW5rX21lIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuLnRleHRTaGluZUJsYWNrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDI1JSwgIzk5OSAyNiUsICM5OTkgNjQlLCAjZmZmIDY1JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGFuaW1hdGlvbjogdGV4dFNoaW5lIDRzIGVhc2UtaW4gaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHRleHRTaGluZSB7XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAwJTtcbiAgfVxufVxuLmxvYWRlcnNEb3RzLFxuLmxvYWRlcnNEb3RzOmJlZm9yZSxcbi5sb2FkZXJzRG90czphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGxvYWQ3IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2FkZXJzRG90cyB7XG4gIGNvbG9yOiAjNjNlZDU2O1xuICBmb250LXNpemU6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuLmxvYWRlcnNEb3RzOmJlZm9yZSxcbi5sb2FkZXJzRG90czphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4ubG9hZGVyc0RvdHM6YmVmb3JlIHtcbiAgbGVmdDogLTMuNWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLmxvYWRlcnNEb3RzOmFmdGVyIHtcbiAgbGVmdDogMy41ZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNyB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkNyB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgfVxufVxuLmxvYWRlckJhcnMsXG4ubG9hZGVyQmFyczpiZWZvcmUsXG4ubG9hZGVyQmFyczphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuLmxvYWRlckJhcnMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuLmxvYWRlckJhcnM6YmVmb3JlLFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmxvYWRlckJhcnM6YmVmb3JlIHtcbiAgbGVmdDogLTFlbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5sb2FkZXJCYXJzOmFmdGVyIHtcbiAgbGVmdDogMWVtO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDEge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICA0MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQxIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwO1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbiAgNDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxufVxuLmxvYWRlckxpbmVVcCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjOTRmZjk3O1xuICBsZWZ0OiAtMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogc2hhZG93Um9sbGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2hhZG93Um9sbGluZyB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDEyJSB7XG4gICAgYm94LXNoYWRvdzogMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMTEwcHggMCAjOTRmZjk3LCAxMDBweCAwICM5NGZmOTcsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgMzYlIHtcbiAgICBib3gtc2hhZG93OiAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NywgMTAwcHggMCAjOTRmZjk3O1xuICB9XG4gIDYyJSB7XG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTcsIDEyMHB4IDAgIzk0ZmY5NywgMTEwcHggMCAjOTRmZjk3O1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3O1xuICB9XG4gIDg3JSB7XG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMTMwcHggMCAjOTRmZjk3O1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxufVxuLnNoaW1tZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxNDBweCAwIDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxNDgsIDI1NSwgMTUxLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMjIyKSwgdG8oIzIyMiksIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KSk7XG4gIGJhY2tncm91bmQ6IC1tb3otZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMyMjIpLCB0bygjMjIyKSwgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpKTtcbiAgYmFja2dyb3VuZDogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMyMjIpLCB0bygjMjIyKSwgY29sb3Itc3RvcCgwLjUsICM5NGZmOTcpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xuICBhbmltYXRpb24tbmFtZTogc2hpbW1lcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG59XG5cbkAtbW96LWtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG59XG4vKiBMT0FESU5HIFNQSU5ORVIgKi9cbi5kaWdpdGFsdGltZXIge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG5Aa2V5ZnJhbWVzIHRpbWVyYmxpbmsge1xuICAwJSB7XG4gICAgY29sb3I6ICNFNTNFM0U7XG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTUpO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjRTUzRTNFO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9jbGllbnQv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O0lBQ0UsMkZBQUE7RUF2RkY7RUEwRkE7SUFDRSw4RUFBQTtFQXhGRjtFQTJGQTtJQUNFLDZGQUFBO0VBekZGO0VBNEZBO0lBQ0UsNEdBQUE7RUExRkY7RUE2RkE7SUFDRSwySEFBQTtFQTNGRjtFQThGQTtJQUNFLDBJQUFBO0VBNUZGO0FBQ0Y7QUFnR0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUdBQUE7RUFRQSxzR0FBQTtFQVFBLGlHQUFBO0VBUUEsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBbkhGOztBQXFIQTtFQUNFO0lBQ0UsNkJBQUE7RUFsSEY7RUFvSEE7SUFDRSw4QkFBQTtFQWxIRjtBQUNGO0FBb0hBO0VBQ0U7SUFDRSw2QkFBQTtFQWxIRjtFQW9IQTtJQUNFLDhCQUFBO0VBbEhGO0FBQ0Y7QUFvSEE7RUFDRTtJQUNFLDZCQUFBO0VBbEhGO0VBb0hBO0lBQ0UsOEJBQUE7RUFsSEY7QUFDRjtBQW9IQTtFQUNFO0lBQ0UsNkJBQUE7RUFsSEY7RUFvSEE7SUFDRSw4QkFBQTtFQWxIRjtBQUNGO0FBcUhBLG9CQUFBO0FBRUE7RUFDRSxrQ0FBQTtBQXBIRjs7QUF1SEE7RUFDRTtJQUNFLGNBQUE7RUFwSEY7RUFzSEE7SUFDRSx5QkFBQTtFQXBIRjtFQXNIQTtJQUNFLGNBQUE7RUFwSEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcbi8vIEBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjQwMCw1MDAsNzAwXFxcIik7XFxuLy8gQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpOyAqL1xcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNoYWtyYStQZXRjaDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PUludGVyOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG4gIFxcbn1cXG5cXG4jcm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxufVxcblxcblxcblxcbioge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAvLyAgIGNvbG9yOiAjZmZmO1xcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XFxuICAvLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAvLyBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLy8gICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAqL1xcbn1cXG5cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uc2ltcGxlYmFyLXdyYXBwZXIge1xcbiAgaGVpZ2h0OjEwMCU7XFxufVxcblxcbi5zaW1wbGViYXItc2Nyb2xsYmFyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBsZWZ0OiAycHg7XFxuICByaWdodDogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIG92ZXJmbG93OnZpc2libGU7XFxuICBcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6MDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBib3JkZXItcmFkaXVzOjRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7Ly8gcmdiKDE0LDE2LDIwKTtcXG4gIHdpZHRoOjA7XFxufVxcblxcbi5zaG93c2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy8vIHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuLmhpZGVzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7Ly8vcmdiKDE0LDE2LDIwKTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcbiAgICBtb25vc3BhY2U7XFxufVxcbi8vICN3cmFwcGVyIHtcXG4vLyAgIGRpc3BsYXk6IGZsZXg7XFxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbi8vICAgd2lkdGg6IDEwMCU7XFxuLy8gICBoZWlnaHQ6IDEwMCU7XFxuLy8gICBtaW4taGVpZ2h0OiAxMDAlO1xcbi8vIH1cXG5cXG4uY2hha3JhLXVpLWRhcmsge1xcbiAgI3dyYXBwZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43KSAwcHggMXB4IDJweCAwcHgsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjgpIDBweCAwcHggMnB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyNDtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxMDQpO1xcbiAgfVxcbn1cXG5cXG4uY2hha3JhLXVpLWxpZ2h0IHtcXG4gICN3cmFwcGVyLWhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDFweCAycHggMHB4LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSAwcHggMHB4IDJweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTtcXG4gIH1cXG59XFxuXFxuI3dyYXBwZXItY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI21haW5tZW51IHtcXG4gIHdpZHRoOiA5MiU7XFxuICBtYXJnaW4tbGVmdDogNCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW5tZW51IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI21haW5tZW51IHVsLm1lbnUtbmF2IHtcXG4gIGZsZXg6IDQ7XFxufVxcbiNtYWlubWVudSB1bC5tZW51LW5hdiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkge1xcbiAgZmxleDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWlubWVudSAuaW5kaWNhdG9yLWRvd24ge1xcbiAgY29sb3I6ICNhYWE7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIC8vIHotaW5kZXg6IDEwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkuaGFzbWVudSB7XFxuICBmbGV4OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaS5hY3Rpb25zIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNtYWlubWVudSB1bCBsaSB1bC5zdWJtZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gei1pbmRleDogOTk5O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xcbn1cXG5cXG4jbWFpbm1lbnUgdWwgbGkgdWwuc3VibWVudSBsaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI21haW5tZW51IHVsIGxpIGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbm1lbnUgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDAuODEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTIsIDEwNCk7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBhdXRvO1xcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbiNtYWlubWVudSBhLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk0ZmY5NztcXG59XFxuI21haW5tZW51IGE6aG92ZXIge1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMWI0NztcXG4gIGNvbG9yOiAjOTRmZjk3O1xcbn1cXG5cXG4ubG9nby10eHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMTExO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmxvZ28tdHh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGZmOTc7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gICNnYW1lLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIFxcbiAgI2dhbWUtZ3JpZC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG4gICNnYW1lLWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG4gIH1cXG59XFxuXFxuI2dhbWUtZ3JpZC13cmFwcGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8vIHotaW5kZXg6IDU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8vIG1hcmdpbi10b3A6LTNyZW07XFxufVxcblxcbiNnYW1lLWluZm8tY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI2dhbWUtaW5mby1jb250ZW50IGgzIHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4jZ2FtZS1ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHggMTYwcHg7XFxuICAvLyBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxuICAvLyBncmlkLXJvdy1nYXA6IDFyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxufVxcblxcbi5nYW1lLWl0ZW0ge1xcbiAgLy8gd2lkdGg6IDEwMCU7XFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTYwcHg7XFxuICAvLyBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgLy8gZGlzcGxheTogZmxleDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaXRlbTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcXG59XFxuXFxuLmdhbWUtaXRlbTpob3ZlciA+IC5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgY29sb3I6IHJnYigxNDgsIDI1NSwgMTUxKTtcXG59XFxuXFxuLmdhbWUtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xcbiAgLy8gd2lkdGg6IDEwMCU7XFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxuICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5nYW1lLXRpdGxlIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XFxuICAvLyBkaXNwbGF5OiBibG9jaztcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIGJvdHRvbTogMHB4O1xcbiAgLy8gbGVmdDogMHB4O1xcbiAgLy8gbWFyZ2luLXRvcDogLTI0cHg7XFxuICAvLyBjb2xvcjogIzZhY2Q2NDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIC8vIG1heC1oZWlnaHQ6IDEyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTA0KTtcXG4gIC8qIG9wYWNpdHk6IDAuMjsgKi9cXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvLyBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uZ2FtZS1hdHRyaWJ1dGVzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5nYW1lLWF0dHJpYnV0ZXMgdWwgbGkgc3BhbiB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmltYWdlYm94IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWFnZXNyYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmltYWdldXBsb2FkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbWFnZXJlbW92ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW1hZ2Vib3gtZHJhZ2dpbmcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcXG59XFxuLmltYWdlYm94IC5pbWFnZXNyYyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8vIC5nYW1lc2NyZWVuIHtcXG4vLyAgIHdpZHRoOiAxMDAlO1xcbi8vICAgaGVpZ2h0OiAxMDAlO1xcbi8vICAgYm9yZGVyOiAwO1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4vLyB9XFxuXFxuLmJ0bi1mb3JmZWl0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5cXG5cXG4jZ2FtZXBhbmVsLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLy8gei1pbmRleDogOTk7XFxufVxcblxcbiNnYW1lbG9hZGluZy13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAvLyB6LWluZGV4OiAxMDA7XFxufVxcblxcbiNnYW1lbG9hZGluZyA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuI3dyYXBwZXItZnJlZWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLy8gei1pbmRleDogNDtcXG59XFxuXFxuI3F1ZXVlLXBhbmVsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA2O1xcbiAgLy8gdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2U7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KTtcXG59XFxuXFxuI3F1ZXVlLWhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgwLjMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxleSgxKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZXkoMC4zKTtcXG4gIH1cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGV5KDEpO1xcbiAgfVxcbn1cXG5cXG4jcXVldWUtbG9hZGVyIHtcXG4gIHRvcDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDFweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkIDAuOXMgLTAuNXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMTEsIDAuNDksIDAuMzgsIDAuNzgpO1xcbiAgYW5pbWF0aW9uOiBsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCAwLjlzIC0wLjVzIGluZmluaXRlIGN1YmljLWJlemllcigwLjExLCAwLjQ5LCAwLjM4LCAwLjc4KTtcXG59XFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCgyKSxcXG4ubGluZS1zY2FsZS1wdWxzZS1vdXQtcmFwaWQgPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXMgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzICFpbXBvcnRhbnQ7XFxufVxcbi5saW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZCA+IGRpdjpudGgtY2hpbGQoMSksXFxuLmxpbmUtc2NhbGUtcHVsc2Utb3V0LXJhcGlkID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuXFxuI3F1ZXVlLXRhYiB7XFxuICBoZWlnaHQ6IDQxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgei1pbmRleDogMTAxO1xcbn1cXG5cXG4jcXVldWUtdGFiLWRpdmV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogODBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbiNxdWV1ZS10YWItY2FuY2VsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3F1ZXVlLXNlYXJjaGluZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3F1ZXVlLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGhlaWdodDogMTYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xcbn1cXG5cXG4jcXVldWUtZ2FtZXMgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3F1ZXVlLWdhbWVzIHVsIGxpIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucXVldWUtZ2FtZS10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnF1ZXVlLWdhbWUtbW9kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzOTRiO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0gLmZvcm0tcm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1yb3cgPiBsYWJlbCB7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzk0ZmY5NztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9ybS1yb3cgPiBpbnB1dCB7XFxuICB3aWR0aDogMTVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cgPiB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTVyZW07XFxuICBtaW4taGVpZ2h0OiAxNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0tcm93ID4gYnV0dG9uIHtcXG4gIC8vIHdpZHRoOiAxMHJlbTtcXG4gIC8vIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNlZDU2O1xcbiAgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC8vIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmZvcm0tcm93ID4gYnV0dG9uLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTQ4O1xcbn1cXG4uZm9ybS1yb3cgPiBidXR0b24uc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRmZjk3O1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIC5tZGUtcHJldmlldy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6MTAwO1xcbn1cXG5cXG4jZ2FtZS1pbmZvLWxvbmdkZXNjIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6NTAwO1xcbiAgY29sb3I6IHJnYigyNDEsIDI0OSwgMjU1KTtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuXFxuI2dhbWUtaW5mby1sb25nZGVzYyBiLCAjZ2FtZS1pbmZvLWxvbmdkZXNjIHN0cm9uZyB7XFxuICBmb250LXdlaWdodDo5MDA7XFxufVxcblxcbiNnYW1lLWluZm8tbG9uZ2Rlc2MgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4uY2hha3JhLXVpLWRhcmsge1xcbiAgLnJlYWN0LW1kZSAubWRlLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjQ7XFxuICB9XFxuICAubWRlLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktODAwKTtcXG4gIH1cXG5cXG4gICNnYW1lLWluZm8tbG9uZ2Rlc2MsXFxuICAubWRlLXByZXZpZXctY29udGVudCB7XFxuICAgIC8vICAgYmFja2dyb3VuZDogIzc3NztcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOjJyZW07XFxuICAgIH1cXG4gICAgdGFibGUge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMDtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDA7XFxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgdGJvZHkgdHIgdGQsXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgICAgfVxcblxcbiAgICAgIHRoZWFkIHRyIHRoIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgICAgIH1cXG5cXG4gICAgICB0Ym9keSB0cixcXG4gICAgICB0aGVhZCB0ciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gLmNoYWtyYS11aS1saWdodCB7XFxuXFxuXFxuICAjZ2FtZS1pbmZvLWxvbmdkZXNjLFxcbiAgLm1kZS1wcmV2aWV3LWNvbnRlbnQge1xcbiAgICAvLyAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDMzMztcXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG4gICAgYmxvY2txdW90ZSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OjJyZW07XFxuICAgICAgYm9yZGVyLWxlZnQ6MC41cmVtIHNvbGlkICMwODIyNWE7XFxuICAgIH1cXG4gICAgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgY29sb3I6I2YxZjlmZjtcXG4gICAgfVxcbiAgICBjb2RlIHtcXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IzA4MjI1YTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OjAuNXJlbTtcXG4gICAgfVxcbiAgICBzdHJvbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIH1cXG4gICAgZW0ge1xcbiAgICAgIC8vZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gICAgaDEgeyBcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyNHB4O1xcbiAgICB9XFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xcbiAgICB9XFxuICAgIGgzIHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICB9XFxuICAgIGg0IHtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xcbiAgICB9XFxuICAgIGg1IHtcXG4gICAgICBmb250LXNpemU6MTRweDtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB9XFxuICAgIGg2IHtcXG4gICAgICBmb250LXNpemU6MTJweDtcXG4gICAgICBmb250LXdlaWdodDpib2xkO1xcbiAgICB9XFxuICAgIHRhYmxlIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgICB0Ym9keSB0ciB0ZCxcXG4gICAgICB0aGVhZCB0ciB0aCB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhlYWQgdHIgdGgge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICAgICAgfVxcblxcbiAgICAgIHRib2R5IHRyLFxcbiAgICAgIHRoZWFkIHRyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbi8vIH1cXG5cXG4uY2hha3JhLWZvcm0tY29udHJvbCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uYmxpbmtfbWUge1xcbiAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4udGV4dFNoaW5lQmxhY2sge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDI1JSwgIzk5OSAyNiUsICM5OTkgNjQlLCAjZmZmIDY1JSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xcbiAgYW5pbWF0aW9uOiB0ZXh0U2hpbmUgNHMgZWFzZS1pbiBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgdGV4dFNoaW5lIHtcXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCU7XFxuICB9XFxufVxcblxcbi5sb2FkZXJzRG90cyxcXG4ubG9hZGVyc0RvdHM6YmVmb3JlLFxcbi5sb2FkZXJzRG90czphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMi41ZW07XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbn1cXG4ubG9hZGVyc0RvdHMge1xcbiAgY29sb3I6ICM2M2VkNTY7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG59XFxuLmxvYWRlcnNEb3RzOmJlZm9yZSxcXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcbi5sb2FkZXJzRG90czpiZWZvcmUge1xcbiAgbGVmdDogLTMuNWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbn1cXG4ubG9hZGVyc0RvdHM6YWZ0ZXIge1xcbiAgbGVmdDogMy41ZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNyB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbG9hZDcge1xcbiAgMCUsXFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xcbiAgfVxcbn1cXG5cXG4ubG9hZGVyQmFycyxcXG4ubG9hZGVyQmFyczpiZWZvcmUsXFxuLmxvYWRlckJhcnM6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuLmxvYWRlckJhcnMge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiA2cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxufVxcbi5sb2FkZXJCYXJzOmJlZm9yZSxcXG4ubG9hZGVyQmFyczphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmxvYWRlckJhcnM6YmVmb3JlIHtcXG4gIGxlZnQ6IC0xZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxufVxcbi5sb2FkZXJCYXJzOmFmdGVyIHtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcXG4gIDAlLFxcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMDtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgLTFlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMSB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDA7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxuICA0MCUge1xcbiAgICBib3gtc2hhZG93OiAwIC0xZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICB9XFxufVxcblxcbi5sb2FkZXJMaW5lVXAge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICM5NGZmOTc7XFxuICBsZWZ0OiAtMTAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYW5pbWF0aW9uOiBzaGFkb3dSb2xsaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFkb3dSb2xsaW5nIHtcXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMTIlIHtcXG4gICAgYm94LXNoYWRvdzogMTAwcHggMCAjOTRmZjk3LCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBib3gtc2hhZG93OiAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NywgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgYm94LXNoYWRvdzogMTIwcHggMCAjOTRmZjk3LCAxMTBweCAwICM5NGZmOTcsIDEwMHB4IDAgIzk0ZmY5NyxcXG4gICAgICAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm94LXNoYWRvdzogMTMwcHggMCAjOTRmZjk3LCAxMjBweCAwICM5NGZmOTcsIDExMHB4IDAgIzk0ZmY5NyxcXG4gICAgICAxMDBweCAwICM5NGZmOTc7XFxuICB9XFxuICA2MiUge1xcbiAgICBib3gtc2hhZG93OiAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3LFxcbiAgICAgIDExMHB4IDAgIzk0ZmY5NztcXG4gIH1cXG4gIDc1JSB7XFxuICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxcbiAgICAgIDEzMHB4IDAgIzk0ZmY5NywgMTIwcHggMCAjOTRmZjk3O1xcbiAgfVxcbiAgODclIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwICM5NGZmOTc7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgICAgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxufVxcblxcbi5zaGltbWVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAxNDBweCAwIDA7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTQ4LCAyNTUsIDE1MSwgMC4xKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otZ3JhZGllbnQoXFxuICAgIGxpbmVhcixcXG4gICAgbGVmdCB0b3AsXFxuICAgIHJpZ2h0IHRvcCxcXG4gICAgZnJvbSgjMjIyKSxcXG4gICAgdG8oIzIyMiksXFxuICAgIGNvbG9yLXN0b3AoMC41LCAjOTRmZjk3KVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IGdyYWRpZW50KFxcbiAgICBsaW5lYXIsXFxuICAgIGxlZnQgdG9wLFxcbiAgICByaWdodCB0b3AsXFxuICAgIGZyb20oIzIyMiksXFxuICAgIHRvKCMyMjIpLFxcbiAgICBjb2xvci1zdG9wKDAuNSwgIzk0ZmY5NylcXG4gICk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTI1cHggMTAwJTtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjVweCAxMDAlO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbn1cXG5ALW1vei1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoaW1tZXIge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICB9XFxufVxcbkAtby1rZXlmcmFtZXMgc2hpbW1lciB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGltbWVyIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgfVxcbn1cXG5cXG4vKiBMT0FESU5HIFNQSU5ORVIgKi9cXG5cXG4uZGlnaXRhbHRpbWVyIHtcXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XFxufVxcblxcbkBrZXlmcmFtZXMgdGltZXJibGluayB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiAjRTUzRTNFO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgY29sb3I6IHJnYigyNTQsMjU0LDI1NSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICNFNTNFM0U7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZDY4NzlmYmEzMjYwZGMyZTM0ZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==