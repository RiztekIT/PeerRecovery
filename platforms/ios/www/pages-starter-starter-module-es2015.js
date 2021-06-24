(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-starter-starter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main-container\">\n        <div class=\"bottom-container padding-left-22 padding-right-22\">\n            <img class=\"app-logo\" src=\"../../../assets/imgs/app-icon.png\">\n            <h2 class=\"title margin-top-22\">A Digital Solution For Substance Use Disorder</h2>\n            <div class=\"social-btns margin-top-19\">\n                <!-- <ion-button (click)=\"login()\"> -->\n                <ion-button (click)=\"login()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/google.svg\"></ion-icon> Google</ion-button>\n\n                <ion-button (click)=\"signinGoogle()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/facebook.svg\"></ion-icon> Facebook</ion-button>\n            </div>\n            <!-- <p class=\"sign-up-line margin-top-30\">Already have an account? <a (click)=\"goToSignIn()\">Sign in</a></p> -->\n        </div>\n    </div>\n</ion-content>\n\n\n\n<!-- \n    ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.1014351207922-0muovvg9f1rq8nga7a4kleonar7e4pr9 --variable WEB_APPLICATION_CLIENT_ID=1014351207922-0muovvg9f1rq8nga7a4kleonar7e4pr9.apps.googleusercontent.com\n -->");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter-routing.module */ "./src/app/pages/starter/starter-routing.module.ts");
/* harmony import */ var _starter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter.page */ "./src/app/pages/starter/starter.page.ts");







let StarterPageModule = class StarterPageModule {
};
StarterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarterPageRoutingModule"]
        ],
        declarations: [_starter_page__WEBPACK_IMPORTED_MODULE_6__["StarterPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('starter_back.png') top/cover fixed;\n}\nion-content .main-container {\n  height: 100%;\n  width: 100%;\n  background: var(--ion-blackWhite-gradients);\n}\nion-content .main-container .bottom-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 68%;\n  transform: translateY(-50%);\n}\nion-content .main-container .bottom-container .app-logo {\n  width: 99px;\n  height: 108px;\n}\nion-content .main-container .bottom-container .title {\n  font-size: 22px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-b\";\n}\nion-content .main-container .bottom-container .social-btns {\n  display: flex;\n  justify-content: space-between;\n}\nion-content .main-container .bottom-container .social-btns ion-button {\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 46%;\n  height: 44px;\n  font-size: 16px;\n  font-family: \"sfUi-b\";\n  text-transform: capitalize;\n}\nion-content .main-container .bottom-container .social-btns ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 16px;\n}\nion-content .main-container .bottom-container .sign-up-line {\n  font-size: 14px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-r\";\n  text-align: center;\n}\nion-content .main-container .bottom-container .sign-up-line a {\n  font-family: \"sfUi-b\";\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFEQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUNFUjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0loQjtBREZZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNJaEI7QURGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0loQjtBREhnQjtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDS3BCO0FESm9CO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTXhCO0FERlk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSWhCO0FESGdCO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0ZXIvc3RhcnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19pbWdzL3N0YXJ0ZXJfYmFjay5wbmcnKSB0b3AvY292ZXIgZml4ZWQ7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmxhY2tXaGl0ZS1ncmFkaWVudHMpO1xyXG4gICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA2OCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgLmFwcC1sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5OXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktYic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1idG5zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2lnbi11cC1saW5lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iYWNrX2ltZ3Mvc3RhcnRlcl9iYWNrLnBuZ1wiKSB0b3AvY292ZXIgZml4ZWQ7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmxhY2tXaGl0ZS1ncmFkaWVudHMpO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA2OCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuYXBwLWxvZ28ge1xuICB3aWR0aDogOTlweDtcbiAgaGVpZ2h0OiAxMDhweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJzZlVpLWJcIjtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuc29jaWFsLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNvY2lhbC1idG5zIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5zb2NpYWwtYnRucyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNpZ24tdXAtbGluZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNpZ24tdXAtbGluZSBhIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

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
            console.log(res);
            this.obtenerTokenGoogle();
            this.authSVC.user = res;
        });
    }
    login() {
        /*  this.authSVC.usersign = JSON.parse('{"uid":"2ZrxjV7h9yNEQNOEv41Pn0Oaedr2","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"tenantId":null,"providerData":[{"uid":"102916484924080225541","displayName":"Ivan Talamantes","photoURL":"https://lh4.googleusercontent.com/-QC-QP6iHIE8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxXbClVOHAd1Jg5C0wC29ky4HddA/s96-c/photo.jpg","email":"riztekti@gmail.com","phoneNumber":null,"providerId":"google.com"}],"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","appName":"[DEFAULT]","authDomain":"peerrecovery-app.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs","refreshToken":"AOvuKvQR5C8EhjW3WN8gtzBQFd1XQmsU1-dNcsOsHwX_35trAYLG_UWASni_Of73U9RzQ8DPqdNXyRVMBXp6AA-miYHxgLXIBWYwF3P58AfVZB_ZW86I8RllD5Z7p0YEBnp0wzhX_i4WMQA76eAvjrJyob7OdmUo_3HsicPG5YTSaO7atuUDLUcTIfjSMv4bBh3kBfh750ILXhIxPzHO4azE5XarpWZ6xWQVHcSCTODEkUHvNEh6DLr4EZT4UVH2nSwtEdXABJgPyGqCl0D49CkhKlUCF2vaEfXopgfXVgxSKv1xiCUUtlntjtv4VAmbIjRwIbjodEfv3PHSi1sfl91GbkcsvWZxlv31x0jQnsW9JL706Q5c4eH0ZxpxOrHMiRV5LR9UOLLcC-ZMBb143uHz1828GcEfR_XFF4GDxffj4iQyaeG9QhJ06ftyXev_kJgvIsQ4Q4osdaFO9eF6OG8bPHhbqcpHaQ","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXZhbiBUYWxhbWFudGVzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tUUMtUVA2aUhJRTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbHhYYkNsVk9IQWQxSmc1QzB3QzI5a3k0SGRkQS9zOTYtYy9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGVlcnJlY292ZXJ5LWFwcCIsImF1ZCI6InBlZXJyZWNvdmVyeS1hcHAiLCJhdXRoX3RpbWUiOjE2MTc0MDA3MDQsInVzZXJfaWQiOiIyWnJ4alY3aDl5TkVRTk9FdjQxUG4wT2FlZHIyIiwic3ViIjoiMlpyeGpWN2g5eU5FUU5PRXY0MVBuME9hZWRyMiIsImlhdCI6MTYxNzQwMDcwNCwiZXhwIjoxNjE3NDA0MzA0LCJlbWFpbCI6InJpenRla3RpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAyOTE2NDg0OTI0MDgwMjI1NTQxIl0sImVtYWlsIjpbInJpenRla3RpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.ETG1-BqBhePWKSQ89e7zu0YwEMlkIm3FlhJAqdbrXCy2lcA30tqVdq7XyQhHQwfyao8JFV3pyHXSp3fW20PEJfZUe0u2OXRtiCY3quGYE-oQB1qxL-VkvziFyEqzpQ3uGjfrqSc8qHzyVwmUQaEHLorooY5kuel2cPBVuJBz7IsGF7KVoU_GF3p5F9tLaRTGKxpyepzEOftTIXfSaR6u09Reqct15zSI9VNWTKU9NuFO8B00alrK1RhwwFRMFDQ12Ivf070Cpd13-Rcy3kda5wx0J89X7xRfdSAcSTxmg4CEB25dG9gRQUoCYIJ9LNdDBHB197yyyHOYxcBw5agZwA","expirationTime":1617404304214},"redirectEventId":null,"lastLoginAt":"1617400704170","createdAt":"1609375217824","multiFactor":{"enrolledFactors":[]}}')
         
         this.router.navigate(['/onBoarding']) */
        let params = {};
        this.google.login(params)
            .then((response) => {
            const { idToken, accessToken } = response;
            this.onLoginSuccess(idToken, accessToken);
        }).catch((error) => {
            console.log(error);
            alert('error:' + JSON.stringify(error));
        });
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
        this.authSVC.obtenerToken().then(result => {
            console.log(result);
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
                sessionStorage.setItem('user', JSON.stringify(this.authSVC.usersign));
                //this.util.navCtrl.navigateForward("onBoarding");
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