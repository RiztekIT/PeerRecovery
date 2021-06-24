(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons class=\"margin-top-24\">\n            <ion-button>\n                <ion-back-button defaultHref=\"signIn\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <h1 class=\"title ion-text-center margin-top-20\">Create an Account</h1>\n    <form [formGroup]=\"myForm\">\n        <ion-input formControlName=\"username\" name=\"username\" type=\"text\" class=\"margin-top-25\" placeholder=\"User name\"></ion-input>\n        <p class=\"err\" *ngIf=\"myForm.controls.username.hasError('required') && myForm.controls.username.touched\">\n            Username is required!\n        </p>\n        <p class=\"err\" *ngIf=\"myForm.controls.username.hasError('minlength') && myForm.controls.username.touched\">\n            Username is greater than 4 characters!\n        </p>\n        <p class=\"err\" *ngIf=\"myForm.controls.username.hasError('maxLength') && myForm.controls.username.touched\">\n            Username does not greater than 10 characters!\n        </p>\n\n        <ion-input formControlName=\"email\" name=\"email\" type=\"email\" class=\"margin-top-20\" placeholder=\"Email address\"></ion-input>\n        <p class=\"err\" *ngIf=\"myForm.controls.email.hasError('required') && myForm.controls.email.touched\">\n            Email is required!\n        </p>\n        <p class=\"err\" *ngIf=\"myForm.controls.email.hasError('email') && myForm.controls.email.touched && !myForm.controls.email.hasError('required')\" color=\"danger\">\n            Email is invalid!\n        </p>\n\n        <ion-input formControlName=\"phoneNumber\" name=\"phoneNumber\" type=\"tel\" class=\"margin-top-20\" placeholder=\"Phone number\"></ion-input>\n        <p class=\"err\" *ngIf=\"myForm.controls.phoneNumber.hasError('required') && myForm.controls.phoneNumber.touched\">\n            Phone Number is required!\n        </p>\n\n        <ion-datetime formControlName=\"birthDate\" name=\"birthDate\" type=\"text\" class=\"date_picker margin-top-20\" placeholder=\"Date of Birth\" displayFormat=\"DD-MM-YYYY\"></ion-datetime>\n        <p class=\"err\" *ngIf=\"myForm.controls.birthDate.hasError('required') && myForm.controls.birthDate.touched\">\n            Date Of Birth is required!\n        </p>\n\n        <ion-item class=\"margin-top-20\">\n            <ion-select [interfaceOptions]=\"{header: 'Gender'}\" formControlName=\"gender\" name=\"gender\" placeholder=\"Gender\">\n                <ion-select-option value=\"f\">Female</ion-select-option>\n                <ion-select-option value=\"m\">Male</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <p class=\"err\" *ngIf=\"myForm.controls.gender.hasError('required') && myForm.controls.gender.touched\">\n            Gender is required!\n        </p>\n\n        <ion-input formControlName=\"password\" name=\"password\" class=\"margin-top-20\" placeholder=\"Password\" type=\"password\"></ion-input>\n        <p class=\"err\" *ngIf=\"myForm.controls.password.hasError('required') && myForm.controls.password.touched\">\n            Password is required!\n        </p>\n        <p class=\"err\" *ngIf=\"myForm.controls.password.hasError('minlength') && myForm.controls.password.touched\">\n            Password is greater than 5 characters!\n        </p>\n\n        <ion-button (click)=\"goToVerification()\" class=\"btn-SignUp margin-top-39\" mode=\"md\" expand=\"full\" shape=\"round\" fill=\"solid\">\n            Sign up\n        </ion-button>\n    </form>\n    <p class=\"terms-text ion-text-center margin-top-14\">By continuing Sign up you agree to the following\n        <br> Terms & Conditions without reservation.\n    </p>\n    <p class=\"ion-text-center account-text margin-top-17 margin-bottom-20\">Already have an account? <a (click)=\"goToSignIn()\"> Sign in</a></p>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/pages/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/pages/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/pages/sign-up/sign-up.page.ts");







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: transparent;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button {\n  --icon-font-size: 27px;\n}\nion-content {\n  --padding-end: 24px;\n  --padding-start: 24px;\n}\nion-content .title {\n  font-family: \"sfUi-b\";\n  font-size: 30px;\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-input,\nion-content ion-item,\nion-content ion-select,\nion-content .date_picker {\n  --highlight-color-invalid: #0000;\n  --background: var(--ion-input-back);\n  height: 44px;\n  border-radius: 5px;\n  --padding-start: 24px;\n  font-family: \"sfUi-m\";\n  font-size: 15px;\n  --placeholder-color: var(--ion-color-primary-dark);\n  --placeholder-opacity: 1;\n}\nion-content ion-input ion-label,\nion-content ion-item ion-label,\nion-content ion-select ion-label,\nion-content .date_picker ion-label {\n  font-family: \"sfUi-m\";\n  font-size: 15px;\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-select {\n  padding: 0;\n}\nion-content ion-datetime {\n  background: var(--ion-input-back);\n  --padding-top: 13px;\n  --placeholder-color: var(--ion-color-primary-dark);\n}\nion-content .btn-SignUp {\n  --color: var(--ion-color-white);\n  height: 44px;\n  font-size: 16px;\n  --box-shadow: none;\n  font-family: \"sfUi-sb\";\n  --border-radius: 5px;\n  text-transform: initial;\n  --background: var(--ion-color-primary);\n}\nion-content .terms-text {\n  font-size: 11px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-r\";\n}\nion-content .account-text {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n}\nion-content .account-text a {\n  font-family: \"sfUi-b\";\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FDQVI7QURFWTtFQUNJLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksc0JBQUE7QUNDcEI7QURNQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUNISjtBRElJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNGUjtBRElJOzs7O0VBSUksZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtBQ0ZSO0FER1E7Ozs7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0VaO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7QURDSTtFQUNJLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQ0NSO0FEQ0k7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNDUjtBREFRO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24taXRlbSxcclxuICAgIGlvbi1zZWxlY3QsXHJcbiAgICAuZGF0ZV9waWNrZXIge1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICMwMDAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWlucHV0LWJhY2spO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWlucHV0LWJhY2spO1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICB9XHJcbiAgICAuYnRuLVNpZ25VcCB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktc2InO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgLnRlcm1zLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgfVxyXG4gICAgLmFjY291bnQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0taWNvbi1mb250LXNpemU6IDI3cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWVuZDogMjRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xufVxuaW9uLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0LFxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0sXG5pb24tY29udGVudCBpb24tc2VsZWN0LFxuaW9uLWNvbnRlbnQgLmRhdGVfcGlja2VyIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogIzAwMDA7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWlucHV0LWJhY2spO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IGlvbi1sYWJlbCxcbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCxcbmlvbi1jb250ZW50IGlvbi1zZWxlY3QgaW9uLWxhYmVsLFxuaW9uLWNvbnRlbnQgLmRhdGVfcGlja2VyIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWRhdGV0aW1lIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWlucHV0LWJhY2spO1xuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5idG4tU2lnblVwIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1zYlwiO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLnRlcm1zLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG59XG5pb24tY29udGVudCAuYWNjb3VudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbn1cbmlvbi1jb250ZW50IC5hY2NvdW50LXRleHQgYSB7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktYlwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SignUpPage = class SignUpPage {
    constructor(util, formBuilder) {
        this.util = util;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            username: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10),
                ]),
            ],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            birthDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            ],
        });
    }
    ngOnInit() { }
    goToVerification() {
        this.util.navCtrl.navigateForward("signIn");
    }
    goToSignIn() {
        this.util.navCtrl.navigateBack("signIn");
    }
};
SignUpPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sign-up",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/pages/sign-up/sign-up.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map