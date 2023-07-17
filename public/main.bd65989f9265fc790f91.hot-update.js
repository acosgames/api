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
  position: relative;
  padding-top: 5.6rem;
  padding-bottom: 5.6rem;
}

.banner-section .btn-item a span, .banner-section .btn-item a i {
  color: var(--chakra-colors-gray-900);
  font-weight: 600;
  transition: all 0.5s;
  width: 100%;
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

.banner-section .btn-item a::after {
  background-color: var(--chakra-colors-brand-500);
  bottom: -100%;
  visibility: hidden;
  opacity: 0;
}

.banner-section .btn-item a.second::before {
  background-color: rgba(0, 0, 0, 0);
}

.banner-section .btn-item a:hover::before, .banner-section .btn-item a:hover::after {
  bottom: 0;
  height: 120%;
}

.banner-section .btn-item a:hover::after {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
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
}`, "",{"version":3,"sources":["webpack://./../client/src/pages/IndexPage.scss"],"names":[],"mappings":"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","sourcesContent":[".banner-section::before, .banner-section::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 100%;\r\n    bottom: 0;\r\n    background: var(--chakra-colors-brand-500);\r\n    transform: skew(-17deg);\r\n    /* z-index: -1; */\r\n}\r\n\r\n.banner-section::before {\r\n    right: 15%;\r\n    /* transform: skew(-17deg) translateY(100%); */\r\n    animation: MoveDownUp 5s linear alternate;\r\n}\r\n\r\n.banner-section::after {\r\n    width: 20px;\r\n    right: 12%;\r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\n\r\n\r\n.banner-section .overlay {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.banner-section .overlay::before, .banner-section .overlay::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 300px;\r\n    bottom: 0;\r\n    background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);;\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section .overlay::before {\r\n    left: 0;\r\n    animation: MoveDownUp 5s linear infinite alternate;\r\n}\r\n\r\n.banner-section .overlay::after {\r\n    width: 20px;\r\n    left: 22%;\r\n    \r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.banner-section .banner-content {\r\n    padding-top: 160px;\r\n}\r\n\r\n\r\n.banner-section .ellipse-area {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: stretch 5s linear infinite;\r\n    position:absolute;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-one {\r\n    top: 15%;\r\n    left: 15%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two {\r\n    top: 18%;\r\n    left: 0%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-three {\r\n    top: 40%;\r\n    left: 5%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-four {\r\n    left: calc(50% + 50px);\r\n    bottom: calc(50% - 160px);\r\n}\r\n\r\n.banner-section .ellipse-area img {\r\n    position: absolute;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-1 {\r\n    right: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-2 {\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-3 {\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two .ellipse-5 {\r\n    bottom: 0;\r\n    right: 25%;\r\n}\r\n\r\n\r\n.banner-section .btn-item a {\r\n    letter-spacing: 8px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    z-index: 0;\r\n    transition: all .3s;\r\n    position:relative;\r\n    padding-top:5.6rem;\r\n    padding-bottom:5.6rem;\r\n}\r\n\r\n.banner-section .btn-item a span, .banner-section .btn-item a i {\r\n    color: var(--chakra-colors-gray-900);\r\n    font-weight: 600;\r\n    transition: all .5s;\r\n    width:100%;\r\n}\r\n\r\n.banner-section .btn-item a::before, .banner-section .btn-item a::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    transition: all .3s;\r\n}\r\n\r\n.banner-section .btn-item a::after {\r\n    background-color: var(--chakra-colors-brand-500);\r\n    bottom: -100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.banner-section .btn-item a.second::before {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.banner-section .btn-item a:hover::before, .banner-section .btn-item a:hover::after {\r\n    bottom: 0;\r\n    height: 120%;\r\n}\r\n\r\n.banner-section .btn-item a:hover::after {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: all .5s;\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes prixClipFix {\r\n    0% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n    }\r\n    25% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n    }\r\n    50% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n    }\r\n    75% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n    }\r\n    100% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n    }\r\n  }\r\n  @keyframes leftToRight {\r\n    0% {\r\n      transform: rotateY(0deg);\r\n    }\r\n    100% {\r\n      transform: rotateY(360deg);\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInOut {\r\n    0% {\r\n      transform: scale(0.9);\r\n    }\r\n    50% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n  @keyframes loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  @keyframes rotation {\r\n    100% {\r\n      transform: rotatey(360deg);\r\n    }\r\n  }\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes ripple2Ani {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(-5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes stretch {\r\n    0% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n    50% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes MoveUpDown {\r\n    0% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    100% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n  @keyframes MoveDownUp {\r\n    100% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    0% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n\r\n\r\n  .box-items {\r\n    z-index: -1;\r\n    top: -35px;\r\n  }\r\n  .box-items .single-item {\r\n    width: 14.5rem;\r\n    height: 14.9rem;\r\n    border: 1px solid var(--chakra-colors-gray-700);\r\n    transition: 0.3s all;\r\n  }\r\n  .box-items .single-item.active-item {\r\n    background: var(--chakra-colors-brand-500);\r\n  }\r\n  .box-items .single-item:hover {\r\n    background: var(--chakra-colors-gray-500);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .display-one {\r\n    font-size: 8rem;\r\n    line-height: 9.68rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 3.2rem;\r\n    line-height: 3.84rem;\r\n}\r\nh3 span {\r\n    color: var(--chakra-colors-brand-300);\r\n}\r\n.display-one \r\n    {\r\n        /* font-family: var(--head-font); */\r\n        color: var(--chakra-colors-gray-0);\r\n        font-weight: 700;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize;\r\n        transition: all .3s;\r\n\r\n        span {\r\n            font-size: inherit;\r\n            font-family: inherit;\r\n            color: var(--chakra-colors-brand-300);\r\n            line-height: inherit;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\np {\r\n    margin: 0;\r\n    /* font-family: var(--body-font); */\r\n    color: var(--chakra-colors-gray-50);\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n}\r\n\r\n.box-style.btn-box {\r\n    padding: 13px 25px;\r\n    display: inline-flex;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: initial;\r\n    height: initial;\r\n    font-weight: 600;\r\n    border-radius: 16px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.box-style.btn-box:hover {\r\n    color: var(--chakra-colors-gray-0);\r\n    background-color: var(--chakra-colors-brand-500);\r\n}\r\n\r\n.box-style.btn-box:hover:before {\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n.box-style::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: var(--y);\r\n    left: var(--x);\r\n    transform: translate(-50%, -50%);\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 100%;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    transition: all .7s ease;\r\n    z-index: -1;\r\n}\r\n\r\n.sub-title {\r\n    margin-bottom: 1.6rem;\r\n}\r\n  .opacity-25 {\r\n    opacity: .25 !important;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12f0e2c0be66af8e50b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZDY1OTg5ZjkyNjVmYzc5MGY5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0g7QUFDakI7QUFDbkcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxR0FBcUcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUss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UGFnZS5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJhbm5lci1zZWN0aW9uOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzOTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XG4gIC8qIHotaW5kZXg6IC0xOyAqL1xufVxuXG4uYmFubmVyLXNlY3Rpb246OmJlZm9yZSB7XG4gIHJpZ2h0OiAxNSU7XG4gIC8qIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7ICovXG4gIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHJpZ2h0OiAxMiU7XG4gIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzk1cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OS4zM2RlZywgcmdiYSg5LCAxNDYsIDEwNiwgMCkgNSUsICMwOTkyNkEgOTAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGxlZnQ6IDIyJTtcbiAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJhbm5lci1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYW5pbWF0aW9uOiBzdHJldGNoIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLW9uZSB7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAxNSU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIHtcbiAgdG9wOiAxOCU7XG4gIGxlZnQ6IDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXRocmVlIHtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLWZvdXIge1xuICBsZWZ0OiBjYWxjKDUwJSArIDUwcHgpO1xuICBib3R0b206IGNhbGMoNTAlIC0gMTYwcHgpO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTEge1xuICByaWdodDogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMiB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTMge1xuICBib3R0b206IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdHdvIC5lbGxpcHNlLTUge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSB7XG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA1LjZyZW07XG4gIHBhZGRpbmctYm90dG9tOiA1LjZyZW07XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSBzcGFuLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEgaSB7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktOTAwKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhLnNlY29uZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOmhvdmVyOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTIwJTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOmhvdmVyOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJpeENsaXBGaXgge1xuICAwJSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XG4gIH1cbiAgMjUlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICB9XG4gIDc1JSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGV5KDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZTJBbmkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cmV0Y2gge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGVBbmkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgTW92ZVVwRG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgTW92ZURvd25VcCB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbn1cbi5ib3gtaXRlbXMge1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAtMzVweDtcbn1cblxuLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0ge1xuICB3aWR0aDogMTQuNXJlbTtcbiAgaGVpZ2h0OiAxNC45cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNzAwKTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbi5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtLmFjdGl2ZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xufVxuXG4uYm94LWl0ZW1zIC5zaW5nbGUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS01MDApO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5kaXNwbGF5LW9uZSB7XG4gIGZvbnQtc2l6ZTogOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDkuNjhyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjg0cmVtO1xufVxuXG5oMyBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcbn1cblxuLmRpc3BsYXktb25lIHtcbiAgLyogZm9udC1mYW1pbHk6IHZhcigtLWhlYWQtZm9udCk7ICovXG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5kaXNwbGF5LW9uZSBzcGFuIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICAvKiBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTsgKi9cbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS01MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5ib3gtc3R5bGUuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDEzcHggMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcbiAgd2lkdGg6IGluaXRpYWw7XG4gIGhlaWdodDogaW5pdGlhbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xufVxuXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXI6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJveC1zdHlsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IHZhcigtLXkpO1xuICBsZWZ0OiB2YXIoLS14KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zdWItdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XG59XG5cbi5vcGFjaXR5LTI1IHtcbiAgb3BhY2l0eTogMC4yNSAhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vY2xpZW50L3NyYy9wYWdlcy9JbmRleFBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLDhDQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7QUFDSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsNEVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNJLE9BQUE7RUFDQSxrREFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFFQSxrREFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxT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QUFBO0FBTEo7O0FBT0E7RUFDSSxxQ0FBQTtBQUpKOztBQU1BO0VBRVEsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUpSO0FBTVE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBSlo7O0FBUUE7RUFDSSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksa0NBQUE7RUFDQSxnREFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLHFCQUFBO0FBTko7O0FBUUU7RUFDRSx3QkFBQTtBQUxKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM5NXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcXHJcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgLyogdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTsgKi9cXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDEyJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMzk1cHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OS4zM2RlZywgcmdiYSg5LCAxNDYsIDEwNiwgMCkgNSUsICMwOTkyNkEgOTAlKTs7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBhbmltYXRpb246IE1vdmVEb3duVXAgNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMiU7XFxyXFxuICAgIFxcclxcbiAgICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYmFubmVyLWNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBhbmltYXRpb246IHN0cmV0Y2ggNXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1vbmUge1xcclxcbiAgICB0b3A6IDE1JTtcXHJcXG4gICAgbGVmdDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byB7XFxyXFxuICAgIHRvcDogMTglO1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10aHJlZSB7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1mb3VyIHtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgKyA1MHB4KTtcXHJcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDE2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0xIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTIge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0zIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byAuZWxsaXBzZS01IHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6NS42cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTo1LjZyZW07XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSBzcGFuLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEgaSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktOTAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgICBib3R0b206IC0xMDAlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYS5zZWNvbmQ6OmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEyMCU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcHJpeENsaXBGaXgge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDc1JSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgZmFkZUluT3V0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRleSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByaXBwbGUyQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDY2JSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzdHJldGNoIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNjYlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByaXBwbGVBbmkge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDMzJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2NiUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIE1vdmVEb3duVXAge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYm94LWl0ZW1zIHtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHRvcDogLTM1cHg7XFxyXFxuICB9XFxyXFxuICAuYm94LWl0ZW1zIC5zaW5nbGUtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxNC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDE0LjlyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS03MDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gIH1cXHJcXG4gIC5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtLmFjdGl2ZS1pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgfVxcclxcbiAgLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwKTtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktb25lIHtcXHJcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogOS42OHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMuODRyZW07XFxyXFxufVxcclxcbmgzIHNwYW4ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbn1cXHJcXG4uZGlzcGxheS1vbmUgXFxyXFxuICAgIHtcXHJcXG4gICAgICAgIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkLWZvbnQpOyAqL1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpOyAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZS5idG4tYm94IHtcXHJcXG4gICAgcGFkZGluZzogMTNweCAyNXB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB3aWR0aDogaW5pdGlhbDtcXHJcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlcjpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiB2YXIoLS15KTtcXHJcXG4gICAgbGVmdDogdmFyKC0teCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuN3MgZWFzZTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxufVxcclxcbiAgLm9wYWNpdHktMjUge1xcclxcbiAgICBvcGFjaXR5OiAuMjUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyZjBlMmMwYmU2NmFmOGU1MGIzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9