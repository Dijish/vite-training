"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pageOne"],{

/***/ "./createElem.js":
/*!***********************!*\
  !*** ./createElem.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElem": () => (/* binding */ createElem)
/* harmony export */ });
function createElem(tag, text) {
    let element = document.createElement(tag)
    element.innerText = text
    document.body.append(element)
}

// export function deadCode() {
//     return 'deadCodeTreeShaking'
// }


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ "./info.js");
/* harmony import */ var _createElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElem.js */ "./createElem.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./shared.js");
/* harmony import */ var _mySideEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mySideEffect */ "./mySideEffect.js");



(0,_createElem_js__WEBPACK_IMPORTED_MODULE_1__.createElem)('h1', _info_js__WEBPACK_IMPORTED_MODULE_0__["default"])

;
console.log(_shared__WEBPACK_IMPORTED_MODULE_2__["default"])

;


/***/ }),

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./shared.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('Welcome Diji');

;
console.log(_shared__WEBPACK_IMPORTED_MODULE_0__["default"])

fetch('https://rt.freshaddress.biz/v7?service=react&format=json&callBack=jQuery36108480783705478125_1667837464549&token=0a14199215746798e9a837da6aab3c95a110e0801bc50fe9c3a67cce58135e111cbeca6be6dd3b8dbf0f6f50d5f01ab7&emps=false&rtc_timeout=1200&email=ad&_=1667837464550')

window.jQuery36108480783705478125_1667837464549 = function (data) {
    console.log(data)
}


/***/ }),

/***/ "./mySideEffect.js":
/*!*************************!*\
  !*** ./mySideEffect.js ***!
  \*************************/
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ('unneeded_export');

console.log('my_side_effect_component')


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./entry.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZU9uZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1IyQjtBQUNpQjtBQUM1QztBQUNBLDBEQUFVLE9BQU8sZ0RBQUc7QUFDcEI7QUFDQSxDQUEyQjtBQUMzQixZQUFZLCtDQUFJO0FBQ2hCO0FBQ0EsQ0FBdUM7Ozs7Ozs7Ozs7Ozs7OztBQ1J2QyxpRUFBZSxjQUFjO0FBQzdCO0FBQ0EsQ0FBMEI7QUFDMUIsWUFBWSwrQ0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQSxzRUFBZSxpQkFBaUI7QUFDaEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NyZWF0ZUVsZW0uanMiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9teVNpZGVFZmZlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW0odGFnLCB0ZXh0KSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZGVhZENvZGUoKSB7XHJcbi8vICAgICByZXR1cm4gJ2RlYWRDb2RlVHJlZVNoYWtpbmcnXHJcbi8vIH1cclxuIiwiaW1wb3J0IG1zZyBmcm9tICcuL2luZm8uanMnXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW0gfSBmcm9tICcuL2NyZWF0ZUVsZW0uanMnXHJcblxyXG5jcmVhdGVFbGVtKCdoMScsIG1zZylcclxuXHJcbmltcG9ydCBtc2cxIGZyb20gJy4vc2hhcmVkJ1xyXG5jb25zb2xlLmxvZyhtc2cxKVxyXG5cclxuaW1wb3J0IHNpZGVFZmZlY3QgZnJvbSAnLi9teVNpZGVFZmZlY3QnXHJcbiIsImV4cG9ydCBkZWZhdWx0ICdXZWxjb21lIERpamknXHJcblxyXG5pbXBvcnQgbXNnIGZyb20gJy4vc2hhcmVkJ1xyXG5jb25zb2xlLmxvZyhtc2cpXHJcblxyXG5mZXRjaCgnaHR0cHM6Ly9ydC5mcmVzaGFkZHJlc3MuYml6L3Y3P3NlcnZpY2U9cmVhY3QmZm9ybWF0PWpzb24mY2FsbEJhY2s9alF1ZXJ5MzYxMDg0ODA3ODM3MDU0NzgxMjVfMTY2NzgzNzQ2NDU0OSZ0b2tlbj0wYTE0MTk5MjE1NzQ2Nzk4ZTlhODM3ZGE2YWFiM2M5NWExMTBlMDgwMWJjNTBmZTljM2E2N2NjZTU4MTM1ZTExMWNiZWNhNmJlNmRkM2I4ZGJmMGY2ZjUwZDVmMDFhYjcmZW1wcz1mYWxzZSZydGNfdGltZW91dD0xMjAwJmVtYWlsPWFkJl89MTY2NzgzNzQ2NDU1MCcpXHJcblxyXG53aW5kb3cualF1ZXJ5MzYxMDg0ODA3ODM3MDU0NzgxMjVfMTY2NzgzNzQ2NDU0OSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0ICd1bm5lZWRlZF9leHBvcnQnXHJcblxyXG5jb25zb2xlLmxvZygnbXlfc2lkZV9lZmZlY3RfY29tcG9uZW50JylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9