"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pageTwo"],{

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

/***/ "./entryTwo.js":
/*!*********************!*\
  !*** ./entryTwo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _createElem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem.js */ "./createElem.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./shared.js");


(0,_createElem_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('h2', "Hia there I am Two")

;
console.log(_shared__WEBPACK_IMPORTED_MODULE_1__["default"])


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./entryTwo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZVR3by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSNEM7QUFDNUM7QUFDQSwwREFBVTtBQUNWO0FBQ0EsQ0FBMkI7QUFDM0IsWUFBWSwrQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NyZWF0ZUVsZW0uanMiLCJ3ZWJwYWNrOi8vLy4vZW50cnlUd28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW0odGFnLCB0ZXh0KSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZGVhZENvZGUoKSB7XHJcbi8vICAgICByZXR1cm4gJ2RlYWRDb2RlVHJlZVNoYWtpbmcnXHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbSB9IGZyb20gJy4vY3JlYXRlRWxlbS5qcydcclxuXHJcbmNyZWF0ZUVsZW0oJ2gyJywgXCJIaWEgdGhlcmUgSSBhbSBUd29cIilcclxuXHJcbmltcG9ydCBtc2cxIGZyb20gJy4vc2hhcmVkJ1xyXG5jb25zb2xlLmxvZyhtc2cxKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=