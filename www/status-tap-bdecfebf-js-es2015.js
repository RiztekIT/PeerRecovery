(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-bdecfebf-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/status-tap-bdecfebf.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-bdecfebf.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(contentEl, resolve)).then(() => {
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};




/***/ })

}]);
//# sourceMappingURL=status-tap-bdecfebf-js-es2015.js.map