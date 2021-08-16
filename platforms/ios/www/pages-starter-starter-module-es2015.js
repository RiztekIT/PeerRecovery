(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-starter-starter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main-container\">\n        <div class=\"bottom-container padding-left-22 padding-right-22\">\n            <h2 class=\"title2 margin-top-22\">Welcome</h2>\n            <br>\n            <br>\n            <img class=\"app-logo\" src=\"../../../assets/imgs/app-icon.png\">\n            <h2 class=\"title margin-top-22\">A Digital Solution For Substance Use Disorder</h2>\n            <br>\n            <br>\n            <br>\n            <br>\n            <h2 class=\"title margin-top-22\">Sign in</h2>\n            <div class=\"social-btns margin-top-19\">\n\n                <!-- <ion-button (click)=\"login()\"> -->\n                <!-- <ion-button (click)=\"login()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/google.svg\"></ion-icon> Google</ion-button> -->\n                <ion-button (click)=\"signinGoogle()\">\n                    <img src=\"https://img.icons8.com/color/48/000000/google-logo.png\">\n\n                </ion-button>\n                <ion-button (click)=\"login()\">\n                    <img src=\"https://img.icons8.com/color/48/000000/facebook.png\">\n\n                </ion-button>\n\n                <!-- <ion-button (click)=\"signinGoogle()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/facebook.svg\"></ion-icon> Facebook</ion-button> -->\n            </div>\n            <!-- <p class=\"sign-up-line margin-top-30\">Already have an account? <a (click)=\"goToSignIn()\">Sign in</a></p> -->\n        </div>\n    </div>\n</ion-content>\n\n\n\n<!-- \n    ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.1014351207922-0muovvg9f1rq8nga7a4kleonar7e4pr9 --variable WEB_APPLICATION_CLIENT_ID=1014351207922-0muovvg9f1rq8nga7a4kleonar7e4pr9.apps.googleusercontent.com\n -->");

/***/ }),

/***/ "./src/app/pages/starter/starter-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/starter/starter-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StarterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterPageRoutingModule", function() { return StarterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _starter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starter.page */ "./src/app/pages/starter/starter.page.ts");




const routes = [
    {
        path: '',
        component: _starter_page__WEBPACK_IMPORTED_MODULE_3__["StarterPage"]
    }
];
let StarterPageRoutingModule = class StarterPageRoutingModule {
};
StarterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StarterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/starter/starter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/starter/starter.module.ts ***!
  \*************************************************/
/*! exports provided: StarterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterPageModule", function() { return StarterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _starter_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starter-routing.module */ "./src/app/pages/starter/starter-routing.module.ts");
/* harmony import */ var _starter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter.page */ "./src/app/pages/starter/starter.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let StarterPageModule = class StarterPageModule {
};
StarterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _starter_routing_module__WEBPACK_IMPORTED_MODULE_4__["StarterPageRoutingModule"]
        ],
        declarations: [_starter_page__WEBPACK_IMPORTED_MODULE_5__["StarterPage"]]
    })
], StarterPageModule);



/***/ }),

/***/ "./src/app/pages/starter/starter.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/starter/starter.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('starter_back.png') top/contain no-repeat fixed;\n}\nion-content .main-container {\n  height: 100%;\n  width: 100%;\n}\nion-content .main-container .bottom-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 55%;\n  transform: translateY(-50%);\n  text-align: center;\n}\nion-content .main-container .bottom-container .app-logo {\n  width: 99px;\n  height: 108px;\n  text-align: center;\n}\nion-content .main-container .bottom-container .title {\n  font-size: 22px;\n  color: #3666b0;\n  font-family: \"sfUi-b\";\n  text-align: center;\n}\nion-content .main-container .bottom-container .title2 {\n  font-size: 36px;\n  color: #3666b0;\n  font-family: \"sfUi-b\";\n  text-align: center;\n}\nion-content .main-container .bottom-container .social-btns {\n  display: flex;\n  justify-content: space-between;\n}\nion-content .main-container .bottom-container .social-btns ion-button {\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 46%;\n  height: 44px;\n  font-size: 16px;\n  font-family: \"sfUi-b\";\n  text-transform: capitalize;\n  --background: transparent;\n}\nion-content .main-container .bottom-container .social-btns ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 16px;\n}\nion-content .main-container .bottom-container .sign-up-line {\n  font-size: 14px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-r\";\n  text-align: center;\n}\nion-content .main-container .bottom-container .sign-up-line a {\n  font-family: \"sfUi-b\";\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlFQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRVI7QURBUTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FERFk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR2hCO0FERFk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNHaEI7QUREWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBREFZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDRWhCO0FERGdCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFLQSx5QkFBQTtBQ0RwQjtBREhvQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0t4QjtBREFZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7QUNHcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFydGVyL3N0YXJ0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2tfaW1ncy9zdGFydGVyX2JhY2sucG5nJykgdG9wL2NvbnRhaW4gbm8tcmVwZWF0IGZpeGVkO1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmxhY2tXaGl0ZS1ncmFkaWVudHMpO1xyXG4gICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1NSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAuYXBwLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM2NjZiMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzY2NmIwO1xyXG4gICAgICAgICAgICAgICAgLy8zODgwZmZcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc29jaWFsLWJ0bnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpZ24tdXAtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19pbWdzL3N0YXJ0ZXJfYmFjay5wbmdcIikgdG9wL2NvbnRhaW4gbm8tcmVwZWF0IGZpeGVkO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuYXBwLWxvZ28ge1xuICB3aWR0aDogOTlweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMzNjY2YjA7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktYlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMzNjY2YjA7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktYlwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNvY2lhbC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5zb2NpYWwtYnRucyBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktYlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuc29jaWFsLWJ0bnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5zaWduLXVwLWxpbmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5zaWduLXVwLWxpbmUgYSB7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktYlwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/starter/starter.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/starter/starter.page.ts ***!
  \***********************************************/
/*! exports provided: StarterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterPage", function() { return StarterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");







/* import { AngularFireAuth } from '@angular/fire/auth'; */
let StarterPage = class StarterPage {
    constructor(util, authSVC, router, google) {
        this.util = util;
        this.authSVC = authSVC;
        this.router = router;
        this.google = google;
    }
    ngOnInit() {
        this.obtenerTokenGoogle();
    }
    ionViewWillEnter() {
        this.util.menuCtrl.enable(false);
    }
    goToSignIn() {
        this.util.navCtrl.navigateForward('signIn');
    }
    signinGoogle() {
        this.authSVC.loginGoogle().then(res => {
            console.log(res, 'user2');
            this.obtenerTokenGoogle();
            this.authSVC.user = res;
        });
    }
    login() {
        //this.router.navigate(['/home'])
        this.util.navCtrl.navigateForward("/onBoarding");
        /*     this.authSVC.usersign = JSON.parse('{"uid":"2ZrxjV7h9yNEQNOEv41Pn0Oaedr2","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"tenantId":null,"providerData":[{"uid":"102916484924080225541","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","phoneNumber":null,"providerId":"google.com"}],"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","appName":"[DEFAULT]","authDomain":"peerrecovery-app.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","refreshToken":"AOvuKvQR5C8EhjW3WN8gtzBQFd1XQmsU1-dNcsOsHwX_35trAYLG_UWASni_Of73U9RzQ8DPqdNXyRVMBXp6AA-miYHxgLXIBWYwF3P58AfVZB_ZW86I8RllD5Z7p0YEBnp0wzhX_i4WMQA76eAvjrJyob7OdmUo_3HsicPG5YTSaO7atuUDLUcTIfjSMv4bBh3kBfh750ILXhIxPzHO4azE5XarpWZ6xWQVHcSCTODEkUHvNEh6DLr4EZT4UVH2nSwtEdXABJgPyGqCl0D49CkhKlUCF2vaEfXopgfXVgxSKv1xiCUUtlntjtv4VAmbIjRwIbjodEfv3PHSi1sfl91GbkcsvWZxlv31x0jQnsW9JL706Q5c4eH0ZxpxOrHMiRV5LR9UOLLcC-ZMBb143uHz1828GcEfR_XFF4GDxffj4iQyaeG9QhJ06ftyXev_kJgvIsQ4Q4osdaFO9eF6OG8bPHhbqcpHaQ","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXZhbiBUYWxhbWFudGVzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tUUMtUVA2aUhJRTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbHhYYkNsVk9IQWQxSmc1QzB3QzI5a3k0SGRkQS9zOTYtYy9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGVlcnJlY292ZXJ5LWFwcCIsImF1ZCI6InBlZXJyZWNvdmVyeS1hcHAiLCJhdXRoX3RpbWUiOjE2MTc0MDA3MDQsInVzZXJfaWQiOiIyWnJ4alY3aDl5TkVRTk9FdjQxUG4wT2FlZHIyIiwic3ViIjoiMlpyeGpWN2g5eU5FUU5PRXY0MVBuME9hZWRyMiIsImlhdCI6MTYxNzQwMDcwNCwiZXhwIjoxNjE3NDA0MzA0LCJlbWFpbCI6InJpenRla3RpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAyOTE2NDg0OTI0MDgwMjI1NTQxIl0sImVtYWlsIjpbInJpenRla3RpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.ETG1-BqBhePWKSQ89e7zu0YwEMlkIm3FlhJAqdbrXCy2lcA30tqVdq7XyQhHQwfyao8JFV3pyHXSp3fW20PEJfZUe0u2OXRtiCY3quGYE-oQB1qxL-VkvziFyEqzpQ3uGjfrqSc8qHzyVwmUQaEHLorooY5kuel2cPBVuJBz7IsGF7KVoU_GF3p5F9tLaRTGKxpyepzEOftTIXfSaR6u09Reqct15zSI9VNWTKU9NuFO8B00alrK1RhwwFRMFDQ12Ivf070Cpd13-Rcy3kda5wx0J89X7xRfdSAcSTxmg4CEB25dG9gRQUoCYIJ9LNdDBHB197yyyHOYxcBw5agZwA","expirationTime":1617404304214},"redirectEventId":null,"lastLoginAt":"1617400704170","createdAt":"1609375217824","multiFactor":{"enrolledFactors":[]}}')
            
            this.router.navigate(['/onBoarding']) */
        /*   this.google.login({}).then(res=>{
            console.log(res); */
        /* this.router.navigate(['/home']) */
        //this.router.navigate(['/onBoarding'])
        //this.authSVC.usersign = res;
        //this.authSVC.user = res.email;
        //console.log(this.authSVC.usersign,'1');
        //console.log('2',this.authSVC.user);
        /* }) */
        /*    let params = {};
           this.google.login(params)
             .then((response) => {
               const { idToken, accessToken } = response;
               this.onLoginSuccess(idToken, accessToken);
             }).catch((error) => {
               console.log(error);
               alert('error:' + JSON.stringify(error));
             }); */
    }
    onLoginSuccess(accessToken, accessSecret) {
        const credential = accessSecret ? firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth.GoogleAuthProvider
            .credential(accessToken, accessSecret) : firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth.GoogleAuthProvider
            .credential(accessToken);
        this.authSVC.loginwithCredential(credential).then((success) => {
            alert('successfully');
            //this.isGoogleLogin = true;
            this.authSVC.user = success.user.email;
            this.authSVC.usersign = success.user;
            sessionStorage.setItem('user', JSON.stringify(this.authSVC.usersign));
            //this.util.navCtrl.navigateForward("onBoarding");
            this.router.navigate(['/onBoarding']);
            //this.loading.dismiss();
        });
    }
    obtenerTokenGoogle() {
        console.log('entro a obtener');
        this.authSVC.obtenerToken().then(result => {
            console.log(result, 'result');
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                let token = result.credential;
                // ...
                console.log(token);
            }
            // The signed-in user info.
            if (result.user) {
                console.log(result.user);
                this.authSVC.user = result.user.email;
                this.authSVC.usersign = result.user;
                this.user = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoUrl: result.user.photoURL,
                    type: 'User',
                    password: '',
                    created: new Date(),
                    updated: new Date(),
                    uid: result.user.uid
                };
                this.authSVC.addUser(this.user);
            }
            console.log(this.authSVC.usersign);
            if (this.authSVC.user) {
                console.log('antes de guardar');
                sessionStorage.setItem('user', JSON.stringify(this.authSVC.usersign));
                //this.util.navCtrl.navigateForward("onBoarding");
                /* this.router.navigate(['/home']) */
                this.router.navigate(['/onBoarding']);
            }
            else {
                this.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
                this.authSVC.user = this.authSVC.usersign.email;
                if (this.authSVC.user) {
                    //this.util.navCtrl.navigateForward("onBoarding");
                    this.router.navigate(['/onBoarding']);
                }
            }
        });
    }
};
StarterPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"] }
];
StarterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-starter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starter.page.scss */ "./src/app/pages/starter/starter.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]])
], StarterPage);



/***/ })

}]);
//# sourceMappingURL=pages-starter-starter-module-es2015.js.map