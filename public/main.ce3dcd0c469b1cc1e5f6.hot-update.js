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
  color: var(--chakra-colors-gray-0);
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
}`, "",{"version":3,"sources":["webpack://./../client/src/pages/IndexPage.scss"],"names":[],"mappings":"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","sourcesContent":[".banner-section::before, .banner-section::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 100%;\r\n    bottom: 0;\r\n    background: var(--chakra-colors-brand-500);\r\n    transform: skew(-17deg);\r\n    /* z-index: -1; */\r\n}\r\n\r\n.banner-section::before {\r\n    right: 15%;\r\n    /* transform: skew(-17deg) translateY(100%); */\r\n    animation: MoveDownUp 5s linear alternate;\r\n}\r\n\r\n.banner-section::after {\r\n    width: 20px;\r\n    right: 12%;\r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\n\r\n\r\n.banner-section .overlay {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.banner-section .overlay::before, .banner-section .overlay::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 300px;\r\n    bottom: 0;\r\n    background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);;\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section .overlay::before {\r\n    left: 0;\r\n    animation: MoveDownUp 5s linear infinite alternate;\r\n}\r\n\r\n.banner-section .overlay::after {\r\n    width: 20px;\r\n    left: 22%;\r\n    \r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.banner-section .banner-content {\r\n    padding-top: 160px;\r\n}\r\n\r\n\r\n.banner-section .ellipse-area {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: stretch 5s linear infinite;\r\n    position:absolute;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-one {\r\n    top: 15%;\r\n    left: 15%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two {\r\n    top: 18%;\r\n    left: 0%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-three {\r\n    top: 40%;\r\n    left: 5%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-four {\r\n    left: calc(50% + 50px);\r\n    bottom: calc(50% - 160px);\r\n}\r\n\r\n.banner-section .ellipse-area img {\r\n    position: absolute;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-1 {\r\n    right: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-2 {\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-3 {\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two .ellipse-5 {\r\n    bottom: 0;\r\n    right: 25%;\r\n}\r\n\r\n\r\n.banner-section .btn-item a {\r\n    letter-spacing: 8px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    z-index: 0;\r\n    transition: all .3s;\r\n    position:relative;\r\n    padding-top:5.6rem;\r\n    padding-bottom:5.6rem;\r\n}\r\n\r\n.banner-section .btn-item a span, .banner-section .btn-item a i {\r\n    color: var(--chakra-colors-gray-900);\r\n    font-weight: 600;\r\n    transition: all .5s;\r\n    width:100%;\r\n}\r\n\r\n.banner-section .btn-item a::before, .banner-section .btn-item a::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    transition: all .3s;\r\n}\r\n\r\n.banner-section .btn-item a::after {\r\n    background-color: var(--chakra-colors-brand-500);\r\n    bottom: -100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.banner-section .btn-item a.second::before {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.banner-section .btn-item a:hover::before, .banner-section .btn-item a:hover::after {\r\n    bottom: 0;\r\n    height: 120%;\r\n}\r\n\r\n.banner-section .btn-item a:hover::after {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: all .5s;\r\n    color: var(--chakra-colors-gray-0);;\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes prixClipFix {\r\n    0% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n    }\r\n    25% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n    }\r\n    50% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n    }\r\n    75% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n    }\r\n    100% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n    }\r\n  }\r\n  @keyframes leftToRight {\r\n    0% {\r\n      transform: rotateY(0deg);\r\n    }\r\n    100% {\r\n      transform: rotateY(360deg);\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInOut {\r\n    0% {\r\n      transform: scale(0.9);\r\n    }\r\n    50% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n  @keyframes loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  @keyframes rotation {\r\n    100% {\r\n      transform: rotatey(360deg);\r\n    }\r\n  }\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes ripple2Ani {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(-5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes stretch {\r\n    0% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n    50% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes MoveUpDown {\r\n    0% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    100% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n  @keyframes MoveDownUp {\r\n    100% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    0% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n\r\n\r\n  .box-items {\r\n    z-index: -1;\r\n    top: -35px;\r\n  }\r\n  .box-items .single-item {\r\n    width: 14.5rem;\r\n    height: 14.9rem;\r\n    border: 1px solid var(--chakra-colors-gray-700);\r\n    transition: 0.3s all;\r\n  }\r\n  .box-items .single-item.active-item {\r\n    background: var(--chakra-colors-brand-500);\r\n  }\r\n  .box-items .single-item:hover {\r\n    background: var(--chakra-colors-gray-500);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .display-one {\r\n    font-size: 8rem;\r\n    line-height: 9.68rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 3.2rem;\r\n    line-height: 3.84rem;\r\n}\r\nh3 span {\r\n    color: var(--chakra-colors-brand-300);\r\n}\r\n.display-one \r\n    {\r\n        /* font-family: var(--head-font); */\r\n        color: var(--chakra-colors-gray-0);\r\n        font-weight: 700;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize;\r\n        transition: all .3s;\r\n\r\n        span {\r\n            font-size: inherit;\r\n            font-family: inherit;\r\n            color: var(--chakra-colors-brand-300);\r\n            line-height: inherit;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\np {\r\n    margin: 0;\r\n    /* font-family: var(--body-font); */\r\n    color: var(--chakra-colors-gray-50);\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n}\r\n\r\n.box-style.btn-box {\r\n    padding: 13px 25px;\r\n    display: inline-flex;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: initial;\r\n    height: initial;\r\n    font-weight: 600;\r\n    border-radius: 16px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.box-style.btn-box:hover {\r\n    color: var(--chakra-colors-gray-0);\r\n    background-color: var(--chakra-colors-brand-500);\r\n}\r\n\r\n.box-style.btn-box:hover:before {\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n.box-style::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: var(--y);\r\n    left: var(--x);\r\n    transform: translate(-50%, -50%);\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 100%;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    transition: all .7s ease;\r\n    z-index: -1;\r\n}\r\n\r\n.sub-title {\r\n    margin-bottom: 1.6rem;\r\n}\r\n  .opacity-25 {\r\n    opacity: .25 !important;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53bed9f41c71ece305c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZTNkY2QwYzQ2OWIxY2MxZTVmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0g7QUFDakI7QUFDbkcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcs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dC9zcmMvcGFnZXMvSW5kZXhQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9hcGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYmFubmVyLXNlY3Rpb246OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM5NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xuICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcbiAgLyogei1pbmRleDogLTE7ICovXG59XG5cbi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlIHtcbiAgcmlnaHQ6IDE1JTtcbiAgLyogdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTsgKi9cbiAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbjo6YWZ0ZXIge1xuICB3aWR0aDogMjBweDtcbiAgcmlnaHQ6IDEyJTtcbiAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzOTVweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc5LjMzZGVnLCByZ2JhKDksIDE0NiwgMTA2LCAwKSA1JSwgIzA5OTI2QSA5MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xuICB3aWR0aDogMjBweDtcbiAgbGVmdDogMjIlO1xuICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYmFubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IHN0cmV0Y2ggNXMgbGluZWFyIGluZmluaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2Utb25lIHtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28ge1xuICB0b3A6IDE4JTtcbiAgbGVmdDogMCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdGhyZWUge1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNSU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtZm91ciB7XG4gIGxlZnQ6IGNhbGMoNTAlICsgNTBweCk7XG4gIGJvdHRvbTogY2FsYyg1MCUgLSAxNjBweCk7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMSB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0yIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMyB7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28gLmVsbGlwc2UtNSB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgei1pbmRleDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDUuNnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDUuNnJlbTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHNwYW4sIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSBpIHtcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS05MDApO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbiAgYm90dG9tOiAtMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEuc2Vjb25kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOmhvdmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMjAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZXkoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlMkFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RyZXRjaCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBNb3ZlVXBEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBNb3ZlRG93blVwIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxufVxuLmJveC1pdGVtcyB7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IC0zNXB4O1xufVxuXG4uYm94LWl0ZW1zIC5zaW5nbGUtaXRlbSB7XG4gIHdpZHRoOiAxNC41cmVtO1xuICBoZWlnaHQ6IDE0LjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS03MDApO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0uYWN0aXZlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG59XG5cbi5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMCk7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmRpc3BsYXktb25lIHtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBsaW5lLWhlaWdodDogOS42OHJlbTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuODRyZW07XG59XG5cbmgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xufVxuXG4uZGlzcGxheS1vbmUge1xuICAvKiBmb250LWZhbWlseTogdmFyKC0taGVhZC1mb250KTsgKi9cbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmRpc3BsYXktb25lIHNwYW4ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpOyAqL1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmJveC1zdHlsZS5idG4tYm94IHtcbiAgcGFkZGluZzogMTNweCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICB3aWR0aDogaW5pdGlhbDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG59XG5cbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlcjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYm94LXN0eWxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogdmFyKC0teSk7XG4gIGxlZnQ6IHZhcigtLXgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcbn1cblxuLm9wYWNpdHktMjUge1xuICBvcGFjaXR5OiAwLjI1ICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9jbGllbnQvc3JjL3BhZ2VzL0luZGV4UGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrREFBQTtBQUNKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw0RUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0ksT0FBQTtFQUNBLGtEQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUVBLGtEQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksUUFBQTtFQUNBLFNBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxRQUFBO0FBSko7O0FBT0E7RUFDSSxRQUFBO0VBQ0EsUUFBQTtBQUpKOztBQU9BO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0FBSko7O0FBT0E7RUFDSSxTQUFBO0FBSko7O0FBT0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTEo7O0FBUUE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBTEo7O0FBUUE7RUFDSSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMSjs7QUFRQTtFQUNJLGtDQUFBO0FBTEo7O0FBUUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUxKOztBQVNBO0VBQ0k7SUFDRSx5QkFBQTtFQU5KO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsNERBQUE7SUFDUSxvREFBQTtFQU5aO0VBUUU7SUFDRSx3RUFBQTtJQUNRLGdFQUFBO0VBTlo7RUFRRTtJQUNFLGlGQUFBO0lBQ1EseUVBQUE7RUFOWjtFQVFFO0lBQ0UsMkVBQUE7SUFDUSxtRUFBQTtFQU5aO0VBUUU7SUFDRSx3RUFBQTtJQUNRLGdFQUFBO0VBTlo7QUFDRjtBQVFFO0VBQ0U7SUFDRSx3QkFBQTtFQU5KO0VBUUU7SUFDRSwwQkFBQTtFQU5KO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VBTko7RUFRRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBTko7QUFDRjtBQVFFO0VBQ0U7SUFDRSxxQkFBQTtFQU5KO0VBUUU7SUFDRSxtQkFBQTtFQU5KO0VBUUU7SUFDRSxxQkFBQTtFQU5KO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsdUJBQUE7RUFOSjtFQVFFO0lBQ0UseUJBQUE7RUFOSjtBQUNGO0FBUUU7RUFDRTtJQUNFLDBCQUFBO0VBTko7QUFDRjtBQVFFO0VBQ0U7SUFDRSx1QkFBQTtFQU5KO0VBUUU7SUFDRSx5QkFBQTtFQU5KO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsOEJBQUE7RUFOSjtFQVFFO0lBQ0UsZ0NBQUE7RUFOSjtFQVFFO0lBQ0UsOEJBQUE7RUFOSjtFQVFFO0lBQ0UsOEJBQUE7RUFOSjtBQUNGO0FBUUU7RUFDRTtJQUNFLDBCQUFBO0VBTko7RUFRRTtJQUNFLDBCQUFBO0VBTko7RUFRRTtJQUNFLDBCQUFBO0VBTko7QUFDRjtBQVFFO0VBQ0U7SUFDRSw4QkFBQTtFQU5KO0VBUUU7SUFDRSwrQkFBQTtFQU5KO0VBUUU7SUFDRSwrQkFBQTtFQU5KO0VBUUU7SUFDRSw4QkFBQTtFQU5KO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsOEJBQUE7RUFOSjtFQVFFO0lBQ0UsK0JBQUE7RUFOSjtFQVFFO0lBQ0UsK0JBQUE7RUFOSjtFQVFFO0lBQ0UsOEJBQUE7RUFOSjtBQUNGO0FBUUU7RUFDRTtJQUNFLHFDQUFBO0VBTko7RUFRRTtJQUNFLHdDQUFBO0VBTko7QUFDRjtBQVFFO0VBQ0U7SUFDRSxxQ0FBQTtFQU5KO0VBUUU7SUFDRSx3Q0FBQTtFQU5KO0FBQ0Y7QUFVRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBUko7O0FBVUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFTRTtFQUNFLDBDQUFBO0FBTko7O0FBUUU7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUxKOztBQU9BO0VBQ0kscUNBQUE7QUFKSjs7QUFNQTtFQUVRLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFKUjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUpaOztBQVFBO0VBQ0ksU0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFMSjs7QUFRQTtFQUNJLGtDQUFBO0VBQ0EsZ0RBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBU0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0E7RUFDSSxxQkFBQTtBQU5KOztBQVFFO0VBQ0Usd0JBQUE7QUFMSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmFubmVyLXNlY3Rpb246OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAzOTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XFxyXFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb246OmJlZm9yZSB7XFxyXFxuICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7ICovXFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAxMiU7XFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM5NXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzkuMzNkZWcsIHJnYmEoOSwgMTQ2LCAxMDYsIDApIDUlLCAjMDk5MjZBIDkwJSk7O1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgbGVmdDogMjIlO1xcclxcbiAgICBcXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJhbm5lci1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBzdHJldGNoIDVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2Utb25lIHtcXHJcXG4gICAgdG9wOiAxNSU7XFxyXFxuICAgIGxlZnQ6IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28ge1xcclxcbiAgICB0b3A6IDE4JTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdGhyZWUge1xcclxcbiAgICB0b3A6IDQwJTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtZm91ciB7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgNTBweCk7XFxyXFxuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAxNjBweCk7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMSB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0yIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMyB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28gLmVsbGlwc2UtNSB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOjUuNnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206NS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEgc3BhbiwgLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTkwMCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjphZnRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG4gICAgYm90dG9tOiAtMTAwJTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEuc2Vjb25kOjpiZWZvcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTs7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBwcml4Q2xpcEZpeCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDI1JSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgNzUlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGV5KDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHJpcHBsZTJBbmkge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDMzJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNjYlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHN0cmV0Y2gge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyByaXBwbGVBbmkge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDMzJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2NiUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMzMlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDY2JSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgTW92ZVVwRG93biB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgTW92ZURvd25VcCB7XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5ib3gtaXRlbXMge1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdG9wOiAtMzVweDtcXHJcXG4gIH1cXHJcXG4gIC5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDE0LjVyZW07XFxyXFxuICAgIGhlaWdodDogMTQuOXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTcwMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbiAgfVxcclxcbiAgLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0uYWN0aXZlLWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XFxyXFxuICB9XFxyXFxuICAuYm94LWl0ZW1zIC5zaW5nbGUtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS01MDApO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheS1vbmUge1xcclxcbiAgICBmb250LXNpemU6IDhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA5LjY4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMy44NHJlbTtcXHJcXG59XFxyXFxuaDMgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxufVxcclxcbi5kaXNwbGF5LW9uZSBcXHJcXG4gICAge1xcclxcbiAgICAgICAgLyogZm9udC1mYW1pbHk6IHZhcigtLWhlYWQtZm9udCk7ICovXFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7ICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTApO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlLmJ0bi1ib3gge1xcclxcbiAgICBwYWRkaW5nOiAxM3B4IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgIHdpZHRoOiBpbml0aWFsO1xcclxcbiAgICBoZWlnaHQ6IGluaXRpYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IHZhcigtLXkpO1xcclxcbiAgICBsZWZ0OiB2YXIoLS14KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC43cyBlYXNlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG59XFxyXFxuICAub3BhY2l0eS0yNSB7XFxyXFxuICAgIG9wYWNpdHk6IC4yNSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTNiZWQ5ZjQxYzcxZWNlMzA1YzVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=