(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"content-section\">\n        <h1 class=\"ion-text-center title\">Welcome</h1>\n        <p class=\"ion-text-center\">Login to your account</p>\n        <form>\n            <ion-input class=\"margin-top-33\" name=\"email\" placeholder=\"Email\" type=\"email\"></ion-input>\n            <ion-input class=\"margin-top-20\" placeholder=\"Password\" name=\"password\" type=\"password\"></ion-input>\n            <ion-button (click)=\"goToOnBoarding()\" class=\"margin-top-34 btn-login ion-text-capitalize\" mode=\"md\" expand=\"full\" shape=\"round\" fill=\"solid\">\n                Login\n            </ion-button>\n        </form>\n        <ion-button (click)=\"goToForgotPassword()\" class=\"btn-forgot\" expand=\"full\" fill=\"clear\">\n            Forgot your password?\n        </ion-button>\n        <div class=\"bottom-container padding-left-22 padding-right-22\">\n            <div class=\"social-btns margin-top-19\">\n                <ion-button (click)=\"signinGoogle()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/google.svg\"></ion-icon> Google</ion-button>\n                <ion-button>\n                    <ion-icon src=\"../../../assets/imgs/appicons/facebook.svg\"></ion-icon> Facebook</ion-button>\n            </div>\n        </div>\n\n        <p class=\"ion-text-center account-text margin-top-17\">Don’t have an account? <a (click)=\"goToSignUp()\"> Sign up</a></p>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/pages/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: url('signin_back.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: 100% 46vh;\n}\nion-content .content-section {\n  width: 100%;\n  padding: 4vh 24px 20px 20px;\n  margin-top: 27vh;\n  background-color: var(--ion-color-white);\n  border-radius: 20px 20px 0px 0px;\n}\nion-content .content-section .title {\n  font-family: \"sfUi-b\";\n  font-size: 36px;\n  margin-top: 0px;\n}\nion-content .content-section p {\n  color: var(--ion-color-gray);\n  margin: 0px;\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n}\nion-content .content-section ion-input {\n  --background: var(--ion-input-back);\n  height: 44px;\n  border-radius: 5px;\n  --padding-start: 24px;\n  font-family: \"sfUi-m\";\n  font-size: 15px;\n  --placeholder-color: var(--ion-color-primary-dark);\n  --placeholder-opacity: 1;\n}\nion-content .content-section .btn-login {\n  --color: var(--ion-color-white);\n  height: 44px;\n  font-size: 16px;\n  --box-shadow: none;\n  font-family: \"sfUi-sb\";\n  --border-radius: 5px;\n  --background: var(--ion-color-primary);\n  text-transform: initial;\n}\nion-content .content-section .btn-forgot {\n  --color: var(--ion-color-black-light);\n  text-transform: inherit;\n  font-family: \"sfUi-m\";\n}\nion-content .content-section .account-text a {\n  font-family: \"sfUi-b\";\n  color: var(--ion-color-primary);\n}\nion-content .social-btns {\n  display: flex;\n  justify-content: space-between;\n}\nion-content .social-btns ion-button {\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 46%;\n  height: 44px;\n  font-size: 16px;\n  font-family: \"sfUi-b\";\n  text-transform: capitalize;\n}\nion-content .social-btns ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FDRVI7QUREUTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNHWjtBRERRO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDR1o7QUREUTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0FDR1o7QUREUTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0FDR1o7QUREUTtFQUNJLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0daO0FEQVk7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0FDRWhCO0FERUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNBUjtBRENRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNDWjtBREFZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19pbWdzL3NpZ25pbl9iYWNrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDZ2aDtcclxuICAgIC5jb250ZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDR2aCAyNHB4IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyN3ZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taW5wdXQtYmFjayk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWxvZ2luIHtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXNiJztcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1mb3Jnb3Qge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2stbGlnaHQpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWNjb3VudC10ZXh0IHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktYic7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iYWNrX2ltZ3Mvc2lnbmluX2JhY2sucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDZ2aDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHZoIDI0cHggMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50LXNlY3Rpb24gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG59XG5pb24tY29udGVudCAuY29udGVudC1zZWN0aW9uIGlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWlucHV0LWJhY2spO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiAuYnRuLWxvZ2luIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1zYlwiO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiAuYnRuLWZvcmdvdCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjay1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50LXNlY3Rpb24gLmFjY291bnQtdGV4dCBhIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCAuc29jaWFsLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAuc29jaWFsLWJ0bnMgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiA0NiU7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLWJcIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudCAuc29jaWFsLWJ0bnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SignInPage = class SignInPage {
    constructor(util) {
        this.util = util;
    }
    ngOnInit() { }
    goToSignUp() {
        this.util.navCtrl.navigateForward("signUp");
    }
    goToForgotPassword() { }
    goToOnBoarding() {
        this.util.navCtrl.navigateForward("onBoarding");
    }
    signinGoogle() {
    }
};
SignInPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sign-in",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2015.js.map