(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctor-card-view-doctor-card-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-card-view/doctor-card-view.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-card-view/doctor-card-view.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>Patrick Stanley\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>46 Park Avenue 98 Station Road, Wembley London</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-input placeholder=\"Search Doctor...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-row>\n        <ion-col (click)=\"goToDoctorDetail()\" size=\"6\" *ngFor=\"let i of specialist\" class=\"margin-bottom-26\">\n            <div class=\"specialist \">\n                <img class=\"margin-bottom-4\" [src]=\"i?.img\">\n                <h2>{{i?.name}}</h2>\n                <h3 class=\"padding-bottom-10\">{{i?.specialist}}</h3>\n            </div>\n        </ion-col>\n    </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/doctor-card-view/doctor-card-view-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/doctor-card-view/doctor-card-view-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DoctorCardViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCardViewPageRoutingModule", function() { return DoctorCardViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doctor_card_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-card-view.page */ "./src/app/pages/doctor-card-view/doctor-card-view.page.ts");




const routes = [
    {
        path: '',
        component: _doctor_card_view_page__WEBPACK_IMPORTED_MODULE_3__["DoctorCardViewPage"]
    }
];
let DoctorCardViewPageRoutingModule = class DoctorCardViewPageRoutingModule {
};
DoctorCardViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorCardViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/doctor-card-view/doctor-card-view.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/doctor-card-view/doctor-card-view.module.ts ***!
  \*******************************************************************/
/*! exports provided: DoctorCardViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCardViewPageModule", function() { return DoctorCardViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _doctor_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-card-view-routing.module */ "./src/app/pages/doctor-card-view/doctor-card-view-routing.module.ts");
/* harmony import */ var _doctor_card_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-card-view.page */ "./src/app/pages/doctor-card-view/doctor-card-view.page.ts");







let DoctorCardViewPageModule = class DoctorCardViewPageModule {
};
DoctorCardViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doctor_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorCardViewPageRoutingModule"]
        ],
        declarations: [_doctor_card_view_page__WEBPACK_IMPORTED_MODULE_6__["DoctorCardViewPage"]]
    })
], DoctorCardViewPageModule);



/***/ }),

/***/ "./src/app/pages/doctor-card-view/doctor-card-view.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/doctor-card-view/doctor-card-view.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .specialist {\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\nion-content .specialist img {\n  width: 136px;\n  height: 127px;\n  border-radius: 5px;\n}\nion-content .specialist h2 {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .specialist h3 {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-primary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvZG9jdG9yLWNhcmQtdmlldy9kb2N0b3ItY2FyZC12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdG9yLWNhcmQtdmlldy9kb2N0b3ItY2FyZC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EseUNBQUE7QUNBUjtBRENRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdG9yLWNhcmQtdmlldy9kb2N0b3ItY2FyZC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5zcGVjaWFsaXN0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTM2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IC5zcGVjaWFsaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0IGltZyB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiAxMjdweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAuc3BlY2lhbGlzdCBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/doctor-card-view/doctor-card-view.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/doctor-card-view/doctor-card-view.page.ts ***!
  \*****************************************************************/
/*! exports provided: DoctorCardViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCardViewPage", function() { return DoctorCardViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DoctorCardViewPage = class DoctorCardViewPage {
    constructor(util) {
        this.util = util;
        this.specialist = [
            {
                name: "Dr.Janice Bailey",
                specialist: "Gynaecology",
                img: "../../../assets/imgs/data/specialists/specialist1.png",
            },
            {
                name: "Dr.Matthew Willis",
                specialist: "General Surgeon",
                img: "../../../assets/imgs/data/specialists/specialist2.png",
            },
            {
                name: "Dr.Jasmine Smith",
                specialist: "Pediatric",
                img: "../../../assets/imgs/data/specialists/specialist3.png",
            },
            {
                name: "Dr.Rose Ortiz",
                specialist: "Orthopedics",
                img: "../../../assets/imgs/data/specialists/specialist4.png",
            },
            {
                name: "Dr.Nancy Riley",
                specialist: "Gastroenterologists",
                img: "../../../assets/imgs/data/specialists/specialist5.png",
            },
            {
                name: "Dr.Bruce Hart",
                specialist: "Endoscopies ",
                img: "../../../assets/imgs/data/specialists/specialist6.png",
            },
        ];
    }
    ngOnInit() { }
    goToDoctorDetail() { }
};
DoctorCardViewPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
DoctorCardViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-doctor-card-view",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-card-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-card-view/doctor-card-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-card-view.page.scss */ "./src/app/pages/doctor-card-view/doctor-card-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], DoctorCardViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-doctor-card-view-doctor-card-view-module-es2015.js.map