(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rewards-rewards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Rewards</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-bottom\">\n    <h3 class=\"main_lbl ion-padding-start\">Rewards</h3>\n    <h5 class=\"submain_lbl ion-padding-start\">Meet your goals and get rewards!</h5>\n    <ion-list>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/chat.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Chat in the year</h2>\n                <p>Dec, 31 2021</p>\n                <p>\n                    <ion-progress-bar color=\"danger\" value=\".1\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/highway.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Clean the city</h2>\n                <p>Jan, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"success\" value=\"1\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/certificate.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Health course</h2>\n                <p>Feb, 25 2021</p>\n                <p>\n                    <ion-progress-bar color=\"warning\" value=\"0.8\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/dumbbells.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Go to gym</h2>\n                <p>Feb, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"danger\" value=\"0.10\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/stethoscope.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Medical Checkout</h2>\n                <p>Mar, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"success\" value=\"1\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/salad.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Eat fruit and vegetables</h2>\n                <p>Dec, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"warning\" value=\"0.5\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/no-smoking.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>No somking</h2>\n                <p>Dec, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"warning\" value=\"0.5\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/date.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Monthly date (February)</h2>\n                <p>Jan, 01 2021</p>\n                <p>\n                    <ion-progress-bar color=\"success\" value=\"1\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n        <ion-item (click)=\"openReward()\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/image_icon/video-call.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2>Monthly call (February)</h2>\n                <p>Jan, 02 2021</p>\n                <p>\n                    <ion-progress-bar color=\"success\" value=\"1\"></ion-progress-bar>\n                </p>\n            </ion-label>\n        </ion-item>\n\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rewards/rewards-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rewards/rewards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RewardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageRoutingModule", function() { return RewardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rewards.page */ "./src/app/pages/rewards/rewards.page.ts");




const routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_3__["RewardsPage"]
    }
];
let RewardsPageRoutingModule = class RewardsPageRoutingModule {
};
RewardsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RewardsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rewards/rewards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.module.ts ***!
  \*************************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewards-routing.module */ "./src/app/pages/rewards/rewards-routing.module.ts");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "./src/app/pages/rewards/rewards.page.ts");







let RewardsPageModule = class RewardsPageModule {
};
RewardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__["RewardsPageRoutingModule"]
        ],
        declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
    })
], RewardsPageModule);



/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\n.main_lbl {\n  font-size: 18px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n}\n.submain_lbl {\n  font-size: 12px;\n  color: var(--ion-color-step-600, #666666);\n  font-family: \"sfUi-m\";\n}\nion-avatar {\n  width: 55px;\n  height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0FSO0FESUE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxufVxuXG4ubWFpbl9sYmwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xufVxuXG4uc3VibWFpbl9sYmwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KTtcbiAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcbn0iLCJpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluX2xibCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbn1cblxuLnN1Ym1haW5fbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.ts ***!
  \***********************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let RewardsPage = class RewardsPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    openReward() {
        this.nav.navigateForward("/reward");
    }
};
RewardsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RewardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rewards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rewards.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rewards.page.scss */ "./src/app/pages/rewards/rewards.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RewardsPage);



/***/ })

}]);
//# sourceMappingURL=pages-rewards-rewards-module-es2015.js.map