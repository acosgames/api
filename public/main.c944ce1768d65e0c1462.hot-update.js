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
___CSS_LOADER_EXPORT___.push([module.id, `.banner-section {
  background-color: var(--chakra-colors-gray-800);
}

.banner-section::before, .banner-section::after {
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
  /* animation: MoveUpDown 5s linear infinite alternate; */
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
  top: 10%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-section .btn-item a span, .banner-section .btn-item a i {
  color: var(--chakra-colors-gray-900);
  font-weight: 600;
  transition: all 0.5s ease;
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
}`, "",{"version":3,"sources":["webpack://./../client/src/pages/IndexPage.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n.banner-section {\r\n    background-color: var(--chakra-colors-gray-800);\r\n}\r\n.banner-section::before, .banner-section::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 100%;\r\n    bottom: 0;\r\n    background: var(--chakra-colors-brand-500);\r\n    transform: skew(-17deg);\r\n    /* z-index: -1; */\r\n}\r\n\r\n.banner-section::before {\r\n    right: 15%;\r\n    /* transform: skew(-17deg) translateY(100%); */\r\n    animation: MoveDownUp 5s linear alternate;\r\n}\r\n\r\n.banner-section::after {\r\n    width: 20px;\r\n    right: 12%;\r\n    animation: MoveUpDown 5s linear infinite alternate;\r\n}\r\n\r\n\r\n\r\n.banner-section .overlay {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.banner-section .overlay::before, .banner-section .overlay::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 395px;\r\n    height: 300px;\r\n    bottom: 0;\r\n    background: linear-gradient(179.33deg, rgba(9, 146, 106, 0) 5%, #09926A 90%);;\r\n    transform: skew(-17deg);\r\n    z-index: -1;\r\n}\r\n\r\n.banner-section .overlay::before {\r\n    left: 0;\r\n    animation: MoveDownUp 5s linear infinite alternate;\r\n}\r\n\r\n.banner-section .overlay::after {\r\n    width: 20px;\r\n    left: 22%;\r\n    \r\n    /* animation: MoveUpDown 5s linear infinite alternate; */\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.banner-section .banner-content {\r\n    padding-top: 160px;\r\n}\r\n\r\n\r\n.banner-section .ellipse-area {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation: stretch 5s linear infinite;\r\n    position:absolute;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-one {\r\n    top: 10%;\r\n    left: 15%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two {\r\n    top: 18%;\r\n    left: 0%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-three {\r\n    top: 40%;\r\n    left: 5%;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-four {\r\n    left: calc(50% + 50px);\r\n    bottom: calc(50% - 160px);\r\n}\r\n\r\n.banner-section .ellipse-area img {\r\n    position: absolute;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-1 {\r\n    right: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-2 {\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area .ellipse-3 {\r\n    bottom: 0;\r\n}\r\n\r\n.banner-section .ellipse-area.ellipse-two .ellipse-5 {\r\n    bottom: 0;\r\n    right: 25%;\r\n}\r\n\r\n\r\n.banner-section .btn-item a {\r\n    letter-spacing: 8px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    z-index: 0;\r\n    transition: all .3s;\r\n    position:relative;\r\n    padding-top:5.6rem;\r\n    padding-bottom:5.6rem;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.banner-section .btn-item a span, .banner-section .btn-item a i {\r\n    color: var(--chakra-colors-gray-900);\r\n    font-weight: 600;\r\n    transition: all .5s ease;\r\n    width:100%;\r\n}\r\n\r\n.banner-section .btn-item a::before, .banner-section .btn-item a::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    transition: all .3s;\r\n}\r\n\r\n.banner-section .btn-item a::after {\r\n    background-color: var(--chakra-colors-brand-500);\r\n    bottom: -100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.banner-section .btn-item a.second::before {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.banner-section .btn-item a:hover::before, .banner-section .btn-item a:hover::after {\r\n    bottom: 0;\r\n    height: 120%;\r\n    \r\n}\r\n\r\n.banner-section .btn-item a:hover::after {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: all .5s;\r\n    color: var(--chakra-colors-gray-0);\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes prixClipFix {\r\n    0% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\r\n    }\r\n    25% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\r\n    }\r\n    50% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\r\n    }\r\n    75% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\r\n    }\r\n    100% {\r\n      -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\r\n    }\r\n  }\r\n  @keyframes leftToRight {\r\n    0% {\r\n      transform: rotateY(0deg);\r\n    }\r\n    100% {\r\n      transform: rotateY(360deg);\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInOut {\r\n    0% {\r\n      transform: scale(0.9);\r\n    }\r\n    50% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n  @keyframes loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  @keyframes rotation {\r\n    100% {\r\n      transform: rotatey(360deg);\r\n    }\r\n  }\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes ripple2Ani {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(-5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes stretch {\r\n    0% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n    50% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(0.8, 0.8);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes rippleAni {\r\n    0% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n    33% {\r\n      transform: translate(5px, -5px);\r\n    }\r\n    66% {\r\n      transform: translate(-5px, 5px);\r\n    }\r\n    100% {\r\n      transform: translate(0px, 0px);\r\n    }\r\n  }\r\n  @keyframes MoveUpDown {\r\n    0% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    100% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n  @keyframes MoveDownUp {\r\n    100% {\r\n      transform: skew(-17deg) translateY(0);\r\n    }\r\n    0% {\r\n      transform: skew(-17deg) translateY(100%);\r\n    }\r\n  }\r\n\r\n\r\n  .box-items {\r\n    z-index: -1;\r\n    top: -35px;\r\n  }\r\n  .box-items .single-item {\r\n    width: 14.5rem;\r\n    height: 14.9rem;\r\n    border: 1px solid var(--chakra-colors-gray-700);\r\n    transition: 0.3s all;\r\n  }\r\n  .box-items .single-item.active-item {\r\n    background: var(--chakra-colors-brand-500);\r\n  }\r\n  .box-items .single-item:hover {\r\n    background: var(--chakra-colors-gray-500);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .display-one {\r\n    font-size: 8rem;\r\n    line-height: 9.68rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 3.2rem;\r\n    line-height: 3.84rem;\r\n}\r\nh3 span {\r\n    color: var(--chakra-colors-brand-300);\r\n}\r\n.display-one \r\n    {\r\n        /* font-family: var(--head-font); */\r\n        color: var(--chakra-colors-gray-0);\r\n        font-weight: 700;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize;\r\n        transition: all .3s;\r\n\r\n        span {\r\n            font-size: inherit;\r\n            font-family: inherit;\r\n            color: var(--chakra-colors-brand-300);\r\n            line-height: inherit;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\np {\r\n    margin: 0;\r\n    /* font-family: var(--body-font); */\r\n    color: var(--chakra-colors-gray-50);\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n}\r\n\r\n.box-style.btn-box {\r\n    padding: 13px 25px;\r\n    display: inline-flex;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    width: initial;\r\n    height: initial;\r\n    font-weight: 600;\r\n    border-radius: 16px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.box-style.btn-box:hover {\r\n    color: var(--chakra-colors-gray-0);\r\n    background-color: var(--chakra-colors-brand-500);\r\n}\r\n\r\n.box-style.btn-box:hover:before {\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n.box-style::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: var(--y);\r\n    left: var(--x);\r\n    transform: translate(-50%, -50%);\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 100%;\r\n    background-color: var(--chakra-colors-brand-300);\r\n    transition: all .7s ease;\r\n    z-index: -1;\r\n}\r\n\r\n.sub-title {\r\n    margin-bottom: 1.6rem;\r\n}\r\n  .opacity-25 {\r\n    opacity: .25 !important;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21dfa8277e0ca2711ebd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOTQ0Y2UxNzY4ZDY1ZTBjMTQ2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0g7QUFDakI7QUFDbkcsOEJBQThCLHVGQUEyQixDQUFDLGdHQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxL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QUssbUJBQW1CLGdDQUFnQyxLQUFLLDJCQUEyQjtBQUM3L1k7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDcmF2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uLi9jbGllbnQvc3JjL3BhZ2VzL0luZGV4UGFnZS5zY3NzIiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2FwaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vYXBpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJhbm5lci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTgwMCk7XG59XG5cbi5iYW5uZXItc2VjdGlvbjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzk1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTUwMCk7XG4gIHRyYW5zZm9ybTogc2tldygtMTdkZWcpO1xuICAvKiB6LWluZGV4OiAtMTsgKi9cbn1cblxuLmJhbm5lci1zZWN0aW9uOjpiZWZvcmUge1xuICByaWdodDogMTUlO1xuICAvKiB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpOyAqL1xuICBhbmltYXRpb246IE1vdmVEb3duVXAgNXMgbGluZWFyIGFsdGVybmF0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XG4gIHdpZHRoOiAyMHB4O1xuICByaWdodDogMTIlO1xuICBhbmltYXRpb246IE1vdmVVcERvd24gNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM5NXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzkuMzNkZWcsIHJnYmEoOSwgMTQ2LCAxMDYsIDApIDUlLCAjMDk5MjZBIDkwJSk7XG4gIHRyYW5zZm9ybTogc2tldygtMTdkZWcpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb246IE1vdmVEb3duVXAgNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5vdmVybGF5OjphZnRlciB7XG4gIHdpZHRoOiAyMHB4O1xuICBsZWZ0OiAyMiU7XG4gIC8qIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlOyAqL1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5iYW5uZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNjBweDtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGFuaW1hdGlvbjogc3RyZXRjaCA1cyBsaW5lYXIgaW5maW5pdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1vbmUge1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMTUlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byB7XG4gIHRvcDogMTglO1xuICBsZWZ0OiAwJTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10aHJlZSB7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1JTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS1mb3VyIHtcbiAgbGVmdDogY2FsYyg1MCUgKyA1MHB4KTtcbiAgYm90dG9tOiBjYWxjKDUwJSAtIDE2MHB4KTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0xIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIC5lbGxpcHNlLTIge1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0zIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYS5lbGxpcHNlLXR3byAuZWxsaXBzZS01IHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMjUlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEge1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB6LWluZGV4OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNS42cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHNwYW4sIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYSBpIHtcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS05MDApO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xuICBib3R0b206IC0xMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYS5zZWNvbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEyMCU7XG59XG5cbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YWZ0ZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDApO1xuICB9XG4gIDI1JSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcbiAgfVxuICA3NSUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRleSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUyQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJldGNoIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuOCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGVBbmkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNXB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1vdmVVcERvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1vdmVEb3duVXAge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG59XG4uYm94LWl0ZW1zIHtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogLTM1cHg7XG59XG5cbi5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtIHtcbiAgd2lkdGg6IDE0LjVyZW07XG4gIGhlaWdodDogMTQuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTcwMCk7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufVxuXG4uYm94LWl0ZW1zIC5zaW5nbGUtaXRlbS5hY3RpdmUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbn1cblxuLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTAwKTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZGlzcGxheS1vbmUge1xuICBmb250LXNpemU6IDhyZW07XG4gIGxpbmUtaGVpZ2h0OiA5LjY4cmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsaW5lLWhlaWdodDogMy44NHJlbTtcbn1cblxuaDMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG59XG5cbi5kaXNwbGF5LW9uZSB7XG4gIC8qIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkLWZvbnQpOyAqL1xuICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTApO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uZGlzcGxheS1vbmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgLyogZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7ICovXG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNTApO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uYm94LXN0eWxlLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAxM3B4IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHdpZHRoOiBpbml0aWFsO1xuICBoZWlnaHQ6IGluaXRpYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5ib3gtc3R5bGUuYnRuLWJveDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcbn1cblxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5ib3gtc3R5bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS15KTtcbiAgbGVmdDogdmFyKC0teCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xufVxuXG4ub3BhY2l0eS0yNSB7XG4gIG9wYWNpdHk6IDAuMjUgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NsaWVudC9zcmMvcGFnZXMvSW5kZXhQYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSwrQ0FBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7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Z0RBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXQTtFQUNJLHFCQUFBO0FBUko7O0FBVUU7RUFDRSx3QkFBQTtBQVBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5iYW5uZXItc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS04MDApO1xcclxcbn1cXHJcXG4uYmFubmVyLXNlY3Rpb246OmJlZm9yZSwgLmJhbm5lci1zZWN0aW9uOjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAzOTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZyk7XFxyXFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb246OmJlZm9yZSB7XFxyXFxuICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7ICovXFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZURvd25VcCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb246OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAxMiU7XFxyXFxuICAgIGFuaW1hdGlvbjogTW92ZVVwRG93biA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDM5NXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzkuMzNkZWcsIHJnYmEoOSwgMTQ2LCAxMDYsIDApIDUlLCAjMDk5MjZBIDkwJSk7O1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE3ZGVnKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBNb3ZlRG93blVwIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgbGVmdDogMjIlO1xcclxcbiAgICBcXHJcXG4gICAgLyogYW5pbWF0aW9uOiBNb3ZlVXBEb3duIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7ICovXFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJhbm5lci1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBzdHJldGNoIDVzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2Utb25lIHtcXHJcXG4gICAgdG9wOiAxMCU7XFxyXFxuICAgIGxlZnQ6IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28ge1xcclxcbiAgICB0b3A6IDE4JTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtdGhyZWUge1xcclxcbiAgICB0b3A6IDQwJTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhLmVsbGlwc2UtZm91ciB7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgNTBweCk7XFxyXFxuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAxNjBweCk7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuZWxsaXBzZS1hcmVhIGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMSB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmVsbGlwc2UtYXJlYSAuZWxsaXBzZS0yIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEgLmVsbGlwc2UtMyB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5lbGxpcHNlLWFyZWEuZWxsaXBzZS10d28gLmVsbGlwc2UtNSB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOjUuNnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206NS42cmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGEgc3BhbiwgLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhIGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTkwMCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lci1zZWN0aW9uIC5idG4taXRlbSBhOjpiZWZvcmUsIC5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6OmFmdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbiAgICBib3R0b206IC0xMDAlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYS5zZWNvbmQ6OmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXItc2VjdGlvbiAuYnRuLWl0ZW0gYTpob3Zlcjo6YmVmb3JlLCAuYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEyMCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyLXNlY3Rpb24gLmJ0bi1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb3RhdGUge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHByaXhDbGlwRml4IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMjUlIHtcXHJcXG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDAsIDEwMCUgMCk7XFxyXFxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMCwgMTAwJSAwLCAxMDAlIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICA3NSUge1xcclxcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xcclxcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZXkoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlMkFuaSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMzMlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICA2NiUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc3RyZXRjaCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC44KTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIHJpcHBsZUFuaSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMzMlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDY2JSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgcmlwcGxlQW5pIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAzMyUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNjYlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBNb3ZlVXBEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMTdkZWcpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBNb3ZlRG93blVwIHtcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBza2V3KC0xN2RlZykgdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmJveC1pdGVtcyB7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0b3A6IC0zNXB4O1xcclxcbiAgfVxcclxcbiAgLmJveC1pdGVtcyAuc2luZ2xlLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTQuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNC45cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktNzAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICB9XFxyXFxuICAuYm94LWl0ZW1zIC5zaW5nbGUtaXRlbS5hY3RpdmUtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtNTAwKTtcXHJcXG4gIH1cXHJcXG4gIC5ib3gtaXRlbXMgLnNpbmdsZS1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hha3JhLWNvbG9ycy1ncmF5LTUwMCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LW9uZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDkuNjhyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzLjg0cmVtO1xcclxcbn1cXHJcXG5oMyBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG59XFxyXFxuLmRpc3BsYXktb25lIFxcclxcbiAgICB7XFxyXFxuICAgICAgICAvKiBmb250LWZhbWlseTogdmFyKC0taGVhZC1mb250KTsgKi9cXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWdyYXktMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTMwMCk7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTsgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS01MCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGUuYnRuLWJveCB7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggMjVweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtYnJhbmQtMzAwKTtcXHJcXG4gICAgd2lkdGg6IGluaXRpYWw7XFxyXFxuICAgIGhlaWdodDogaW5pdGlhbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zdHlsZS5idG4tYm94OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYWtyYS1jb2xvcnMtZ3JheS0wKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC01MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXN0eWxlLmJ0bi1ib3g6aG92ZXI6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5ib3gtc3R5bGU6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogdmFyKC0teSk7XFxyXFxuICAgIGxlZnQ6IHZhcigtLXgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC0zMDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2U7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbn1cXHJcXG4gIC5vcGFjaXR5LTI1IHtcXHJcXG4gICAgb3BhY2l0eTogLjI1ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMWRmYTgyNzdlMGNhMjcxMWViZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==