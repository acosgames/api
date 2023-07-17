"use strict";
self["webpackHotUpdateapi"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../client/src/pages/IndexPage.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../client/src/pages/IndexPage.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _api_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_api_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.banner-section::before, .banner-section::after {
  position: absolute;
  content: "";
  width: 395px;
  height: 100%;
  bottom: 0;
  background: var(--chakra-colors-brand-500);
  transform: skew(-17deg);
  z-index: -1;
}

.banner-section::before {
  right: 15%;
  /* transform: skew(-17deg) translateY(100%); */
  animation: MoveDownUp 5s linear alternate;
}

.banner-section::after {
  width: 20px;
  right: 12%;
  animation: MoveUpDown 5s linear infinite alternate;
}

.banner-section .overlay {
  position: relative;
  z-index: 1;
}

.banner-section .overlay::before, .banner-section .overlay::after {
  position: absolute;
  content: "";
  width: 395px;
  height: 300px;
  bottom: 0;
  background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);
  transform: skew(-17deg);
  z-index: -1;
}

.banner-section .overlay::before {
  left: 0;
  animation: MoveDownUp 5s linear infinite alternate;
}

.banner-section .overlay::after {
  width: 20px;
  left: 22%;
  animation: MoveUpDown 5s linear infinite alternate;
}

img {
  max-width: 100%;
  height: auto;
}

.banner-section .banner-content {
  padding-top: 160px;
}

.banner-section .ellipse-area {
  width: 100px;
  height: 100px;
  animation: stretch 5s linear infinite;
  position: absolute;
}

.banner-section .ellipse-area.ellipse-one {
  top: 15%;
  left: 15%;
}

.banner-section .ellipse-area.ellipse-two {
  top: 18%;
  left: 0%;
}

.banner-section .ellipse-area.ellipse-three {
  top: 40%;
  left: 5%;
}

.banner-section .ellipse-area.ellipse-four {
  left: calc(50% + 50px);
  bottom: calc(50% - 160px);
}

.banner-section .ellipse-area img {
  position: absolute;
}

.banner-section .ellipse-area .ellipse-1 {
  right: 0;
}

.banner-section .ellipse-area .ellipse-2 {
  right: 0;
  bottom: 0;
}

.banner-section .ellipse-area .ellipse-3 {
  bottom: 0;
}

.banner-section .ellipse-area.ellipse-two .ellipse-5 {
  bottom: 0;
  right: 25%;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes prixClipFix {
  0% {
    -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
@keyframes leftToRight {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInOut {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes rotation {
  100% {
    transform: rotatey(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes ripple2Ani {
  0% {
    transform: translate(0px, 0px);
  }
  33% {
    transform: translate(-5px, -5px);
  }
  66% {
    transform: translate(5px, 5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes stretch {
  0% {
    transform: scale(0.8, 0.8);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
}
@keyframes rippleAni {
  0% {
    transform: translate(0px, 0px);
  }
  33% {
    transform: translate(5px, -5px);
  }
  66% {
    transform: translate(-5px, 5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes rippleAni {
  0% {
    transform: translate(0px, 0px);
  }
  33% {
    transform: translate(5px, -5px);
  }
  66% {
    transform: translate(-5px, 5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes MoveUpDown {
  0% {
    transform: skew(-17deg) translateY(0);
  }
  100% {
    transform: skew(-17deg) translateY(100%);
  }
}
@keyframes MoveDownUp {
  100% {
    transform: skew(-17deg) translateY(0);
  }
  0% {
    transform: skew(-17deg) translateY(100%);
  }
}
.box-items {
  z-index: -1;
  top: -35px;
}

.box-items .single-item {
  width: 14.5rem;
  height: 14.9rem;
  border: 1px solid var(--chakra-colors-gray-700);
  transition: 0.3s all;
}

.box-items .single-item.active-item {
  background: var(--chakra-colors-brand-500);
}

.box-items .single-item:hover {
  background: var(--chakra-colors-gray-500);
  opacity: 0.3;
}

.display-one {
  font-size: 8rem;
  line-height: 9.68rem;
}

h3 {
  font-size: 3.2rem;
  line-height: 3.84rem;
}

h3 span {
  color: var(--chakra-colors-brand-300);
}

.display-one {
  /* font-family: var(--head-font); */
  color: var(--chakra-colors-gray-0);
  font-weight: 700;
  padding: 0;
  margin: 0;
  display: block;
  text-transform: capitalize;
  transition: all 0.3s;
}
.display-one span {
  font-size: inherit;
  font-family: inherit;
  color: var(--chakra-colors-brand-300);
  line-height: inherit;
  font-weight: inherit;
}

p {
  margin: 0;
  /* font-family: var(--body-font); */
  color: var(--chakra-colors-gray-50);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.box-style.btn-box {
  padding: 13px 25px;
  display: inline-flex;
  background-color: var(--chakra-colors-brand-300);
  width: initial;
  height: initial;
  font-weight: 600;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.box-style.btn-box:hover {
  color: var(--chakra-colors-gray-0);
  background-color: var(--chakra-colors-brand-500);
}

.box-style.btn-box:hover:before {
  border-radius: 15px;
}

.box-style::before {
  content: "";
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 100%;
  background-color: var(--chakra-colors-brand-300);
  transition: all 0.7s ease;
  z-index: -1;
}

.sub-title {
  margin-bottom: 1.6rem;
}

.opacity-25 {
  opacity: 0.25 !important;
}`, "",{"version":3,"sources":["webpack://./../client/src/pages/IndexPage.scss"],"names":[],"mappings":"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","sourcesContent":[".banner-section::before, .banner-section::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 100%;\r\n    bottom: 0;\r\n    background: var(--chakra-colors-brand-500);\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section::before {\r\n    right: 15%;\r\n    /* transform: skew(-17deg) translateY(100%); */\r\n    animation: MoveDownUp 5s linear alternate;\r\n}\r\n\r\n.banner-section::after {\r\n    width: 20px;\r\n    right: 12%;\r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\n\r\n\r\n.banner-section .overlay {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.banner-section .overlay::before, .banner-section .overlay::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 300px;\r\n    bottom: 0;\r\n    background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);;\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section .overlay::before {\r\n    left: 0;\r\n    animation: MoveDownUp 5s linear infinite alternate;\r\n}\r\n\r\n.banner-section .overlay::after {\r\n    width: 20px;\r\n    left: 22%;\r\n    \r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.banner-section .banner-content {\r\n    padding-top: 160px;\r\n}\r\n\r\n\r\n.banner-section .ellipse-area {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: stretch 5s linear infinite;\r\n    position:absolute;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-one {\r\n    top: 15%;\r\n    left: 15%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two {\r\n    top: 18%;\r\n    left: 0%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-three {\r\n    top: 40%;\r\n    left: 5%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-four {\r\n    left: calc(50% + 50px);\r\n    bottom: calc(50% - 160px);\r\n}\r\n\r\n.banner-section .ellipse-area img {\r\n    position: absolute;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-1 {\r\n    right: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-2 {\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-3 {\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two .ellipse-5 {\r\n    bottom: 0;\r\n    right: 25%;\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes prixClipFix {\r\n    0% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n    }\r\n    25% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n    }\r\n    50% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n    }\r\n    75% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n    }\r\n    100% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n    }\r\n  }\r\n  @keyframes leftToRight {\r\n    0% {\r\n      transform: rotateY(0deg);\r\n    }\r\n    100% {\r\n      transform: rotateY(360deg);\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInOut {\r\n    0% {\r\n      transform: scale(0.9);\r\n    }\r\n    50% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n  @keyframes loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  @keyframes rotation {\r\n    100% {\r\n      transform: rotatey(360deg);\r\n    }\r\n  }\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes ripple2Ani {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(-5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes stretch {\r\n    0% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n    50% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes MoveUpDown {\r\n    0% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    100% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n  @keyframes MoveDownUp {\r\n    100% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    0% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n\r\n\r\n  .box-items {\r\n    z-index: -1;\r\n    top: -35px;\r\n  }\r\n  .box-items .single-item {\r\n    width: 14.5rem;\r\n    height: 14.9rem;\r\n    border: 1px solid var(--chakra-colors-gray-700);\r\n    transition: 0.3s all;\r\n  }\r\n  .box-items .single-item.active-item {\r\n    background: var(--chakra-colors-brand-500);\r\n  }\r\n  .box-items .single-item:hover {\r\n    background: var(--chakra-colors-gray-500);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .display-one {\r\n    font-size: 8rem;\r\n    line-height: 9.68rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 3.2rem;\r\n    line-height: 3.84rem;\r\n}\r\nh3 span {\r\n    color: var(--chakra-colors-brand-300);\r\n}\r\n.display-one \r\n    {\r\n        /* font-family: var(--head-font); */\r\n        color: var(--chakra-colors-gray-0);\r\n        font-weight: 700;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize;\r\n        transition: all .3s;\r\n\r\n        span {\r\n            font-size: inherit;\r\n            font-family: inherit;\r\n            color: var(--chakra-colors-brand-300);\r\n            line-height: inherit;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\np {\r\n    margin: 0;\r\n    /* font-family: var(--body-font); */\r\n    color: var(--chakra-colors-gray-50);\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n}\r\n\r\n.box-style.btn-box {\r\n    padding: 13px 25px;\r\n    display: inline-flex;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: initial;\r\n    height: initial;\r\n    font-weight: 600;\r\n    border-radius: 16px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.box-style.btn-box:hover {\r\n    color: var(--chakra-colors-gray-0);\r\n    background-color: var(--chakra-colors-brand-500);\r\n}\r\n\r\n.box-style.btn-box:hover:before {\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n.box-style::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: var(--y);\r\n    left: var(--x);\r\n    transform: translate(-50%, -50%);\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 100%;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    transition: all .7s ease;\r\n    z-index: -1;\r\n}\r\n\r\n.sub-title {\r\n    margin-bottom: 1.6rem;\r\n}\r\n  .opacity-25 {\r\n    opacity: .25 !important;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("273568efcdcb42b4d706")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kY2QzOGViMzg0MTgwY2Y0ZjYzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0g7QUFDakI7QUFDbkcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUdBQXFHLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUss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eURBQXlELGlDQUFpQyxvQkFBb0IsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssbUJBQW1CLGdDQUFnQyxLQUFLLDJCQUEyQjtBQUM5a1Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDM1d2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL3BhZ2VzL0luZGV4UGFnZS5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJhbm5lci1zZWN0aW9uOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzOTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmFubmVyLXNlY3Rpb246OmJlZm9yZSB7XG4gIHJpZ2h0OiAxNSU7XG4gIC8qIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7ICovXG4gIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHJpZ2h0OiAxMiU7XG4gIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzk1cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OS4zM2RlZywgcmdiYSg5LCAxNDYsIDEwNiwgMCkgNSUsICMwOTkyNkEgOTAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGxlZnQ6IDIyJTtcbiAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJhbm5lci1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYW5pbWF0aW9uOiBzdHJldGNoIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLW9uZSB7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAxNSU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIHtcbiAgdG9wOiAxOCU7XG4gIGxlZnQ6IDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXRocmVlIHtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLWZvdXIge1xuICBsZWZ0OiBjYWxjKDUwJSArIDUwcHgpO1xuICBib3R0b206IGNhbGMoNTAlIC0gMTYwcHgpO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTEge1xuICByaWdodDogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMiB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTMge1xuICBib3R0b206IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIC5lbGxpcHNlLTUge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZXkoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlMkFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RyZXRjaCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBNb3ZlVXBEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBNb3ZlRG93blVwIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxufVxuLmJveC1pdGVtcyB7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IC0zNXB4O1xufVxuXG4uYm94LWl0ZW1zIC5zaW5nbGUtaXRlbSB7XG4gIHdpZHRoOiAxNC41cmVtO1xuICBoZWlnaHQ6IDE0LjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS03MDApO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0uYWN0aXZlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG59XG5cbi5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMCk7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmRpc3BsYXktb25lIHtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBsaW5lLWhlaWdodDogOS42OHJlbTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuODRyZW07XG59XG5cbmgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xufVxuXG4uZGlzcGxheS1vbmUge1xuICAvKiBmb250LWZhbWlseTogdmFyKC0taGVhZC1mb250KTsgKi9cbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmRpc3BsYXktb25lIHNwYW4ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpOyAqL1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmJveC1zdHlsZS5idG4tYm94IHtcbiAgcGFkZGluZzogMTNweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICB3aWR0aDogaW5pdGlhbDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG59XG5cbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlcjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYm94LXN0eWxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogdmFyKC0teSk7XG4gIGxlZnQ6IHZhcigtLXgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcbn1cblxuLm9wYWNpdHktMjUge1xuICBvcGFjaXR5OiAwLjI1ICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9jbGllbnQvc3JjL3BhZ2VzL0luZGV4UGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtEQUFBO0FBQ0o7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDRFQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxPQUFBO0VBQ0Esa0RBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBRUEsa0RBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQUpKOztBQU9BO0VBQ0ksUUFBQTtFQUNBLFFBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxRQUFB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LGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0FBTEo7O0FBT0U7RUFDRSx3QkFBQTtBQUpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM5NXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgLyogdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTsgKi9cXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDEyJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMzk1cHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OS4zM2RlZywgcmdiYSg5LCAxNDYsIDEwNiwgMCkgNSUsICMwOTkyNkEgOTAlKTs7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBhbmltYXRpb246IE1vdmVEb3duVXAgNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMiU7XFxyXFxuICAgIFxcclxcbiAgICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYmFubmVyLWNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBhbmltYXRpb246IHN0cmV0Y2ggNXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1vbmUge1xcclxcbiAgICB0b3A6IDE1JTtcXHJcXG4gICAgbGVmdDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byB7XFxyXFxuICAgIHRvcDogMTglO1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10aHJlZSB7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1mb3VyIHtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgKyA1MHB4KTtcXHJcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDE2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0xIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTIge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0zIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byAuZWxsaXBzZS01IHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcHJpeENsaXBGaXgge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDc1JSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgZmFkZUluT3V0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRleSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByaXBwbGUyQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDY2JSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzdHJldGNoIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNjYlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByaXBwbGVBbmkge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDMzJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2NiUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIE1vdmVEb3duVXAge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYm94LWl0ZW1zIHtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHRvcDogLTM1cHg7XFxyXFxuICB9XFxyXFxuICAuYm94LWl0ZW1zIC5zaW5nbGUtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxNC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDE0LjlyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS03MDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gIH1cXHJcXG4gIC5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtLmFjdGl2ZS1pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgfVxcclxcbiAgLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwKTtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktb25lIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogOS42OHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMuODRyZW07XFxyXFxufVxcclxcbmgzIHNwYW4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbn1cXHJcXG4uZGlzcGxheS1vbmUgXFxyXFxuICAgIHtcXHJcXG4gICAgICAgIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkLWZvbnQpOyAqL1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpOyAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZS5idG4tYm94IHtcXHJcXG4gICAgcGFkZGluZzogMTNweCAyNXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB3aWR0aDogaW5pdGlhbDtcXHJcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlcjpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS15KTtcXHJcXG4gICAgbGVmdDogdmFyKC0teCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuN3MgZWFzZTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxufVxcclxcbiAgLm9wYWNpdHktMjUge1xcclxcbiAgICBvcGFjaXR5OiAuMjUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3MzU2OGVmY2RjYjQyYjRkNzA2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9