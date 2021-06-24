(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-menu-button></ion-menu-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header class=\"margin-bottom-20\">\n            Settings\n        </ion-list-header>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>Health Tips for you</h2>\n                <p>Get information & tips for healthy lifestyle</p>\n            </ion-label>\n            <div slot=\"end\">\n                <label class=\"switch\">\n                <input type=\"checkbox\" checked>\n                <span class=\"slider round\"></span>\n            </label>\n            </div>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>Notification</h2>\n            </ion-label>\n            <div slot=\"end\">\n                <label class=\"switch\">\n              <input type=\"checkbox\" checked>\n              <span class=\"slider round\"></span>\n          </label>\n            </div>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header class=\"margin-bottom-20\">\n            Reminder Setting\n        </ion-list-header>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>Vibrate</h2>\n            </ion-label>\n            <div slot=\"end\">\n                <label class=\"switch\">\n              <input type=\"checkbox\" checked>\n              <span class=\"slider round\"></span>\n          </label>\n            </div>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>Snooze Duration</h2>\n                <p>5 Minutes</p>\n            </ion-label>\n            <div slot=\"end\">\n                <ion-button fill=\"clear\">\n                    <ion-icon name=\"ellipsis-vertical-sharp\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header class=\"margin-bottom-20\">\n            Reminder Setting\n        </ion-list-header>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>About Medicator</h2>\n            </ion-label>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h2>Privacy Policy</h2>\n            </ion-label>\n        </ion-item>\n\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/setting/setting-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/pages/setting/setting-routing.module.ts");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button,\nion-header ion-toolbar ion-buttons ion-button ion-menu-button {\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list ion-list-header {\n  background: var(--ion-color-primary-dull);\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list ion-label {\n  margin: 0;\n}\nion-content ion-list ion-label h2 {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list ion-label p {\n  font-size: 12px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-primary-light);\n}\nion-content ion-list ion-button {\n  margin: 0;\n  height: auto;\n  width: auto;\n  color: var(--ion-color-primary-dark);\n  --padding-end: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDRFo7QURJWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURHZ0I7O0VBRUksb0NBQUE7QUNEcEI7QURVUTtFQUNJLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNQWjtBRFNRO0VBQ0ksU0FBQTtBQ1BaO0FEUVk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ05oQjtBRFFZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNOaEI7QURTUTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXNiJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWNrLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1zYlwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWJhY2stYnV0dG9uLFxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingPage = class SettingPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module-es2015.js.map