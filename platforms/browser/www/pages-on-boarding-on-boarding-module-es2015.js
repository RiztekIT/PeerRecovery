(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-on-boarding-on-boarding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/on-boarding/on-boarding.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/on-boarding/on-boarding.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons class=\"margin-top-24\">\n            <ion-button>\n                <ion-back-button defaultHref=\"signIn\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-slides (ionSlideTransitionStart)=\"onSlideChange()\" #slides pager=\"true\">\n        <!--   <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../../assets/imgs/slides/slide1.svg\" />\n                <h2 class=\"margin-bottom-23\">Find Doctor and Book Appointment </h2>\n                <p>\n                    Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../../assets/imgs/slides/slide2.svg\" />\n                <h2 class=\"margin-bottom-23\">Search and Order Medicine</h2>\n                <p>\n                    Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed\n                </p>\n            </div>\n        </ion-slide> -->\n\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../../assets/imgs/slides/slide3.svg\" />\n                <h2 class=\"margin-bottom-23\">Mentoring Program</h2>\n                <p>\n                    Welcome!\n                </p>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n\n    <ion-button (click)=\"goToHome()\" class=\"start-btn\">\n        Start\n    </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/on-boarding/on-boarding-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OnBoardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPageRoutingModule", function() { return OnBoardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-boarding.page */ "./src/app/pages/on-boarding/on-boarding.page.ts");




const routes = [
    {
        path: '',
        component: _on_boarding_page__WEBPACK_IMPORTED_MODULE_3__["OnBoardingPage"]
    }
];
let OnBoardingPageRoutingModule = class OnBoardingPageRoutingModule {
};
OnBoardingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnBoardingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/on-boarding/on-boarding.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.module.ts ***!
  \*********************************************************/
/*! exports provided: OnBoardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPageModule", function() { return OnBoardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-boarding-routing.module */ "./src/app/pages/on-boarding/on-boarding-routing.module.ts");
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding.page */ "./src/app/pages/on-boarding/on-boarding.page.ts");







let OnBoardingPageModule = class OnBoardingPageModule {
};
OnBoardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnBoardingPageRoutingModule"]
        ],
        declarations: [_on_boarding_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingPage"]]
    })
], OnBoardingPageModule);



/***/ }),

/***/ "./src/app/pages/on-boarding/on-boarding.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: transparent;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button {\n  --icon-font-size: 27px;\n}\nion-content ion-slides {\n  height: 86%;\n}\nion-content ion-slides .swiper-slide {\n  display: block;\n}\nion-content ion-slides .swiper-slide h2 {\n  margin-top: 14vh;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n  font-size: 22px;\n}\nion-content ion-slides .swiper-slide p {\n  line-height: 1.5;\n  color: var(--ion-color-primary-light);\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n}\nion-content .start-btn {\n  position: absolute;\n  right: 0;\n  margin: 0;\n  --border-radius: 20px 0 0px 20px;\n  width: 105px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvb24tYm9hcmRpbmcvb24tYm9hcmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtBQ0FSO0FERVk7RUFDSSxrQkFBQTtBQ0FoQjtBRENnQjtFQUNJLHNCQUFBO0FDQ3BCO0FET0k7RUFDSSxXQUFBO0FDSlI7QURLUTtFQUNJLGNBQUE7QUNIWjtBRElZO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBRElZO0VBQ0ksZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0ZoQjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4NiU7XHJcbiAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZVaS1zYlwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RhcnQtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAwIDBweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24tYmFjay1idXR0b24ge1xuICAtLWljb24tZm9udC1zaXplOiAyN3B4O1xufVxuXG5pb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4NiU7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIC5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktc2JcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBmb250LXNpemU6IDIycHg7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIC5zd2lwZXItc2xpZGUgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG59XG5pb24tY29udGVudCAuc3RhcnQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHggMCAwcHggMjBweDtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/on-boarding/on-boarding.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.page.ts ***!
  \*******************************************************/
/*! exports provided: OnBoardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPage", function() { return OnBoardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OnBoardingPage = class OnBoardingPage {
    constructor(util) {
        this.util = util;
        this.activeIndex = 0;
        this.slideOpts = {
            speed: 400,
            autoplay: {
                delay: 200,
            },
        };
    }
    ngOnInit() {
    }
    onSlideChange() {
        this.slides.getActiveIndex().then((index) => {
            this.activeIndex = index;
        });
    }
    goToHome() {
        this.util.navCtrl.navigateRoot('/home');
    }
};
OnBoardingPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnBoardingPage.prototype, "slides", void 0);
OnBoardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-on-boarding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./on-boarding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/on-boarding/on-boarding.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./on-boarding.page.scss */ "./src/app/pages/on-boarding/on-boarding.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], OnBoardingPage);



/***/ })

}]);
//# sourceMappingURL=pages-on-boarding-on-boarding-module-es2015.js.map