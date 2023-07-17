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
  /* z-index: -1; */
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

.banner-section .btn-item a {
  letter-spacing: 8px;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 0;
  transition: all 0.3s;
}

.banner-section .btn-item a::before, .banner-section .btn-item a::after {
  position: absolute;
  content: "";
  background-color: var(--chakra-colors-brand-300);
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
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
}`, "",{"version":3,"sources":["webpack://./../client/src/pages/IndexPage.scss"],"names":[],"mappings":"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","sourcesContent":[".banner-section::before, .banner-section::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 100%;\r\n    bottom: 0;\r\n    background: var(--chakra-colors-brand-500);\r\n    transform: skew(-17deg);\r\n    /* z-index: -1; */\r\n}\r\n\r\n.banner-section::before {\r\n    right: 15%;\r\n    /* transform: skew(-17deg) translateY(100%); */\r\n    animation: MoveDownUp 5s linear alternate;\r\n}\r\n\r\n.banner-section::after {\r\n    width: 20px;\r\n    right: 12%;\r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\n\r\n\r\n.banner-section .overlay {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.banner-section .overlay::before, .banner-section .overlay::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 300px;\r\n    bottom: 0;\r\n    background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);;\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section .overlay::before {\r\n    left: 0;\r\n    animation: MoveDownUp 5s linear infinite alternate;\r\n}\r\n\r\n.banner-section .overlay::after {\r\n    width: 20px;\r\n    left: 22%;\r\n    \r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.banner-section .banner-content {\r\n    padding-top: 160px;\r\n}\r\n\r\n\r\n.banner-section .ellipse-area {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: stretch 5s linear infinite;\r\n    position:absolute;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-one {\r\n    top: 15%;\r\n    left: 15%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two {\r\n    top: 18%;\r\n    left: 0%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-three {\r\n    top: 40%;\r\n    left: 5%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-four {\r\n    left: calc(50% + 50px);\r\n    bottom: calc(50% - 160px);\r\n}\r\n\r\n.banner-section .ellipse-area img {\r\n    position: absolute;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-1 {\r\n    right: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-2 {\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-3 {\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two .ellipse-5 {\r\n    bottom: 0;\r\n    right: 25%;\r\n}\r\n\r\n\r\n.banner-section .btn-item a {\r\n    letter-spacing: 8px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    z-index: 0;\r\n    transition: all .3s;\r\n}\r\n\r\n.banner-section .btn-item a::before, .banner-section .btn-item a::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    transition: all .3s;\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes prixClipFix {\r\n    0% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n    }\r\n    25% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n    }\r\n    50% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n    }\r\n    75% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n    }\r\n    100% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n    }\r\n  }\r\n  @keyframes leftToRight {\r\n    0% {\r\n      transform: rotateY(0deg);\r\n    }\r\n    100% {\r\n      transform: rotateY(360deg);\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInOut {\r\n    0% {\r\n      transform: scale(0.9);\r\n    }\r\n    50% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n  @keyframes loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  @keyframes rotation {\r\n    100% {\r\n      transform: rotatey(360deg);\r\n    }\r\n  }\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes ripple2Ani {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(-5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes stretch {\r\n    0% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n    50% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes MoveUpDown {\r\n    0% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    100% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n  @keyframes MoveDownUp {\r\n    100% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    0% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n\r\n\r\n  .box-items {\r\n    z-index: -1;\r\n    top: -35px;\r\n  }\r\n  .box-items .single-item {\r\n    width: 14.5rem;\r\n    height: 14.9rem;\r\n    border: 1px solid var(--chakra-colors-gray-700);\r\n    transition: 0.3s all;\r\n  }\r\n  .box-items .single-item.active-item {\r\n    background: var(--chakra-colors-brand-500);\r\n  }\r\n  .box-items .single-item:hover {\r\n    background: var(--chakra-colors-gray-500);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .display-one {\r\n    font-size: 8rem;\r\n    line-height: 9.68rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 3.2rem;\r\n    line-height: 3.84rem;\r\n}\r\nh3 span {\r\n    color: var(--chakra-colors-brand-300);\r\n}\r\n.display-one \r\n    {\r\n        /* font-family: var(--head-font); */\r\n        color: var(--chakra-colors-gray-0);\r\n        font-weight: 700;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize;\r\n        transition: all .3s;\r\n\r\n        span {\r\n            font-size: inherit;\r\n            font-family: inherit;\r\n            color: var(--chakra-colors-brand-300);\r\n            line-height: inherit;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\np {\r\n    margin: 0;\r\n    /* font-family: var(--body-font); */\r\n    color: var(--chakra-colors-gray-50);\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n}\r\n\r\n.box-style.btn-box {\r\n    padding: 13px 25px;\r\n    display: inline-flex;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: initial;\r\n    height: initial;\r\n    font-weight: 600;\r\n    border-radius: 16px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.box-style.btn-box:hover {\r\n    color: var(--chakra-colors-gray-0);\r\n    background-color: var(--chakra-colors-brand-500);\r\n}\r\n\r\n.box-style.btn-box:hover:before {\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n.box-style::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: var(--y);\r\n    left: var(--x);\r\n    transform: translate(-50%, -50%);\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 100%;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    transition: all .7s ease;\r\n    z-index: -1;\r\n}\r\n\r\n.sub-title {\r\n    margin-bottom: 1.6rem;\r\n}\r\n  .opacity-25 {\r\n    opacity: .25 !important;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fcb87671b51269b3de40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYTE2MTAwZTYxZDQzYzMzMGNkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0g7QUFDakI7QUFDbkcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUdBQXFHLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUss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QUFzQixtQ0FBbUMscUNBQXFDLHNEQUFzRCxxQ0FBcUMscUNBQXFDLGFBQWEsU0FBUyxXQUFXLGtCQUFrQiwwQ0FBMEMsOENBQThDLHdCQUF3Qix5QkFBeUIsMEJBQTBCLEtBQUssNEJBQTRCLDJCQUEyQiw2QkFBNkIseURBQXlELHVCQUF1Qix3QkFBd0IseUJBQXlCLDRCQUE0QixrQ0FBa0MsS0FBSyxrQ0FBa0MsMkNBQTJDLHlEQUF5RCxLQUFLLHlDQUF5Qyw0QkFBNEIsYUFBYSw0QkFBNEIsc0JBQXNCLDJCQUEyQixzQkFBc0IsdUJBQXVCLHlDQUF5QyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix5REFBeUQsaUNBQWlDLG9CQUFvQixLQUFLLG9CQUFvQiw4QkFBOEIsS0FBSyxtQkFBbUIsZ0NBQWdDLEtBQUssMkJBQTJCO0FBQ3ZyVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUM3WHZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLy4uL2NsaWVudC9zcmMvcGFnZXMvSW5kZXhQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9hcGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYmFubmVyLXNlY3Rpb246OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM5NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xuICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcbiAgLyogei1pbmRleDogLTE7ICovXG59XG5cbi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlIHtcbiAgcmlnaHQ6IDE1JTtcbiAgLyogdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTsgKi9cbiAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xuICB3aWR0aDogMjBweDtcbiAgcmlnaHQ6IDEyJTtcbiAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzOTVweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc5LjMzZGVnLCByZ2JhKDksIDE0NiwgMTA2LCAwKSA1JSwgIzA5OTI2QSA5MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xuICB3aWR0aDogMjBweDtcbiAgbGVmdDogMjIlO1xuICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYmFubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IHN0cmV0Y2ggNXMgbGluZWFyIGluZmluaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2Utb25lIHtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28ge1xuICB0b3A6IDE4JTtcbiAgbGVmdDogMCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdGhyZWUge1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtZm91ciB7XG4gIGxlZnQ6IGNhbGMoNTAlICsgNTBweCk7XG4gIGJvdHRvbTogY2FsYyg1MCUgLSAxNjBweCk7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMSB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0yIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMyB7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28gLmVsbGlwc2UtNSB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xuICB9XG4gIDI1JSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcbiAgfVxuICA3NSUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRleSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUyQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJldGNoIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGVBbmkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1vdmVEb3duVXAge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG59XG4uYm94LWl0ZW1zIHtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogLTM1cHg7XG59XG5cbi5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtIHtcbiAgd2lkdGg6IDE0LjVyZW07XG4gIGhlaWdodDogMTQuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTcwMCk7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufVxuXG4uYm94LWl0ZW1zIC5zaW5nbGUtaXRlbS5hY3RpdmUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbn1cblxuLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwKTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZGlzcGxheS1vbmUge1xuICBmb250LXNpemU6IDhyZW07XG4gIGxpbmUtaGVpZ2h0OiA5LjY4cmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMy44NHJlbTtcbn1cblxuaDMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG59XG5cbi5kaXNwbGF5LW9uZSB7XG4gIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkLWZvbnQpOyAqL1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uZGlzcGxheS1vbmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgLyogZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7ICovXG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTApO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uYm94LXN0eWxlLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAxM3B4IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHdpZHRoOiBpbml0aWFsO1xuICBoZWlnaHQ6IGluaXRpYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbn1cblxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5ib3gtc3R5bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS15KTtcbiAgbGVmdDogdmFyKC0teCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xufVxuXG4ub3BhY2l0eS0yNSB7XG4gIG9wYWNpdHk6IDAuMjUgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NsaWVudC9zcmMvcGFnZXMvSW5kZXhQYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtEQUFBO0FBQ0o7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDRFQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxPQUFBO0VBQ0Esa0RBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBRUEsa0RBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQUpKOztBQU9BO0VBQ0ksUUFBQTtFQUNBLFFBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxRQUFBO0FBSko7O0FBT0E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksUUFBQTtBQUpKOztBQU9BO0VBQ0ksUUFBQTtFQUNBLFNBQUE7QUFKSjs7QUFPQTtFQUNJLFNBQUE7QUFKSjs7QUFPQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBSko7O0FBUUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VB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QTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0kscUJBQUE7QUFOSjs7QUFRRTtFQUNFLHdCQUFBO0FBTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhbm5lci1zZWN0aW9uOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMzk1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpO1xcclxcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uOjpiZWZvcmUge1xcclxcbiAgICByaWdodDogMTUlO1xcclxcbiAgICAvKiB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpOyAqL1xcclxcbiAgICBhbmltYXRpb246IE1vdmVEb3duVXAgNXMgbGluZWFyIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICByaWdodDogMTIlO1xcclxcbiAgICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAzOTVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc5LjMzZGVnLCByZ2JhKDksIDE0NiwgMTA2LCAwKSA1JSwgIzA5OTI2QSA5MCUpOztcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDIyJTtcXHJcXG4gICAgXFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5iYW5uZXItY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGFuaW1hdGlvbjogc3RyZXRjaCA1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLW9uZSB7XFxyXFxuICAgIHRvcDogMTUlO1xcclxcbiAgICBsZWZ0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIHtcXHJcXG4gICAgdG9wOiAxOCU7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXRocmVlIHtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLWZvdXIge1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDUwcHgpO1xcclxcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMTYwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSBpbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTEge1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTMge1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIC5lbGxpcHNlLTUge1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAyNSU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb3RhdGUge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMjUlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICA3NSUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZXkoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlMkFuaSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMzMlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2NiUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc3RyZXRjaCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMzMlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDY2JSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNjYlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBNb3ZlVXBEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBNb3ZlRG93blVwIHtcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmJveC1pdGVtcyB7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0b3A6IC0zNXB4O1xcclxcbiAgfVxcclxcbiAgLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTQuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNC45cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNzAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICB9XFxyXFxuICAuYm94LWl0ZW1zIC5zaW5nbGUtaXRlbS5hY3RpdmUtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG4gIH1cXHJcXG4gIC5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LW9uZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDkuNjhyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzLjg0cmVtO1xcclxcbn1cXHJcXG5oMyBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG59XFxyXFxuLmRpc3BsYXktb25lIFxcclxcbiAgICB7XFxyXFxuICAgICAgICAvKiBmb250LWZhbWlseTogdmFyKC0taGVhZC1mb250KTsgKi9cXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTsgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS01MCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGUuYnRuLWJveCB7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggMjVweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG4gICAgd2lkdGg6IGluaXRpYWw7XFxyXFxuICAgIGhlaWdodDogaW5pdGlhbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXI6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGU6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogdmFyKC0teSk7XFxyXFxuICAgIGxlZnQ6IHZhcigtLXgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2U7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbn1cXHJcXG4gIC5vcGFjaXR5LTI1IHtcXHJcXG4gICAgb3BhY2l0eTogLjI1ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmY2I4NzY3MWI1MTI2OWIzZGU0MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==