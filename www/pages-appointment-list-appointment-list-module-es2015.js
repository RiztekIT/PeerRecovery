(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-appointment-list-appointment-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment-list/appointment-list.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment-list/appointment-list.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-menu-button></ion-menu-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">Appointment</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <h2 class=\"heading margin-bottom-15\">Upcoming Appointment </h2>\n\n    <ion-card (click)=\"goToAppointmentDetail()\" *ngFor=\"let i of data.upcoming\">\n        <ion-item class=\"doctor-detail\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"i?.img\">\n            </ion-avatar>\n            <ion-label>\n                <h2 class=\"doctor-name margin-bottom-4 margin-top-11\">{{i?.doctorName}}</h2>\n                <h3 class=\"specialist margin-bottom-4\">{{i?.specialistIn}}</h3>\n                <p class=\"location\">\n                    {{i?.location}}\n                </p>\n                <ion-button (click)=\"handleButtonClick($event)\" class=\"more-btn\" fill=\"clear\">\n                    <ion-icon name=\"ellipsis-vertical-sharp\"></ion-icon>\n                </ion-button>\n            </ion-label>\n        </ion-item>\n        <div class=\"other-info margin-top-10 margin-bottom-13\">\n            <div>\n                <h2>Date & Time</h2>\n                <h3> {{i?.date}}</h3>\n            </div>\n            <div>\n                <h2>Patient Name</h2>\n                <h3> {{i?.patientName}}</h3>\n            </div>\n        </div>\n    </ion-card>\n\n    <h2 class=\"heading margin-bottom-15 margin-top-28\">Past Appointment </h2>\n\n    <ion-card (click)=\"goToAppointmentDetail()\" *ngFor=\"let i of data.past\">\n        <ion-item class=\"doctor-detail\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"i?.img\">\n            </ion-avatar>\n            <ion-label>\n                <h2 class=\"doctor-name margin-bottom-4 margin-top-11\">{{i?.doctorName}}</h2>\n                <h3 class=\"specialist margin-bottom-4\">{{i?.specialistIn}}</h3>\n                <p class=\"location\">\n                    {{i?.location}}\n                </p>\n                <ion-button (click)=\"handleButtonClick($event)\" class=\"more-btn\" fill=\"clear\">\n                    <ion-icon name=\"ellipsis-vertical-sharp\"></ion-icon>\n                </ion-button>\n            </ion-label>\n        </ion-item>\n        <div class=\"other-info margin-top-10 margin-bottom-13\">\n            <div>\n                <h2>Date & Time</h2>\n                <h3> {{i?.date}}</h3>\n            </div>\n            <div>\n                <h2>Patient Name</h2>\n                <h3> {{i?.patientName}}</h3>\n            </div>\n        </div>\n    </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/appointment-list/appointment-list-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/appointment-list/appointment-list-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AppointmentListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListPageRoutingModule", function() { return AppointmentListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _appointment_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-list.page */ "./src/app/pages/appointment-list/appointment-list.page.ts");




const routes = [
    {
        path: '',
        component: _appointment_list_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentListPage"]
    }
];
let AppointmentListPageRoutingModule = class AppointmentListPageRoutingModule {
};
AppointmentListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appointment-list/appointment-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/appointment-list/appointment-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppointmentListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListPageModule", function() { return AppointmentListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _appointment_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-list-routing.module */ "./src/app/pages/appointment-list/appointment-list-routing.module.ts");
/* harmony import */ var _appointment_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-list.page */ "./src/app/pages/appointment-list/appointment-list.page.ts");







let AppointmentListPageModule = class AppointmentListPageModule {
};
AppointmentListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointment_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentListPageRoutingModule"]
        ],
        declarations: [_appointment_list_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentListPage"]]
    })
], AppointmentListPageModule);



/***/ }),

/***/ "./src/app/pages/appointment-list/appointment-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/appointment-list/appointment-list.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button,\nion-header ion-toolbar ion-buttons ion-button ion-menu-button {\n  color: var(--ion-color-primary-dark);\n}\nion-content .heading {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-card {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  margin-bottom: 25px;\n}\nion-content ion-card .doctor-detail {\n  border-bottom: 1px solid #DCEEFE;\n}\nion-content ion-card .doctor-detail ion-avatar {\n  height: 49px;\n  width: 49px;\n  box-shadow: 0 0 5px rgba(0, 135, 255, 0.3);\n}\nion-content ion-card .doctor-detail ion-avatar img {\n  height: 49px;\n  width: 49px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-white);\n}\nion-content ion-card .doctor-detail ion-label .doctor-name {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-card .doctor-detail ion-label .specialist {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content ion-card .doctor-detail ion-label .location {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n  line-height: 1.2;\n  white-space: normal;\n}\nion-content ion-card .doctor-detail ion-label .more-btn {\n  height: auto;\n  width: auto;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  position: absolute;\n  right: 9px;\n  top: 18px;\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-card .other-info {\n  display: flex;\n  justify-content: space-around;\n}\nion-content ion-card .other-info h2 {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content ion-card .other-info h3 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvYXBwb2ludG1lbnQtbGlzdC9hcHBvaW50bWVudC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXBwb2ludG1lbnQtbGlzdC9hcHBvaW50bWVudC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDRFo7QURJWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURHZ0I7O0VBRUksb0NBQUE7QUNEcEI7QURTSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDTlI7QURRSTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRE9RO0VBQ0ksZ0NBQUE7QUNMWjtBRE1ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ0poQjtBREtnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ0hwQjtBRE9nQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDTHBCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNMcEI7QURPZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMcEI7QURPZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FDTHBCO0FEU1E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNQWjtBRFFZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNOaEI7QURRWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDTmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwb2ludG1lbnQtbGlzdC9hcHBvaW50bWVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXNiJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWNrLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIC5kb2N0b3ItZGV0YWlsIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0VFRkU7XHJcbiAgICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMTM1LCAyNTUsIDMwJSk7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgLmRvY3Rvci1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcGVjaWFsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubW9yZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3RoZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXNiXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24tYmFjay1idXR0b24sXG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuXG5pb24tY29udGVudCAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuZG9jdG9yLWRldGFpbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENFRUZFO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmRvY3Rvci1kZXRhaWwgaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNDlweDtcbiAgd2lkdGg6IDQ5cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAxMzUsIDI1NSwgMC4zKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5kb2N0b3ItZGV0YWlsIGlvbi1hdmF0YXIgaW1nIHtcbiAgaGVpZ2h0OiA0OXB4O1xuICB3aWR0aDogNDlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmRvY3Rvci1kZXRhaWwgaW9uLWxhYmVsIC5kb2N0b3ItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5kb2N0b3ItZGV0YWlsIGlvbi1sYWJlbCAuc3BlY2lhbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuZG9jdG9yLWRldGFpbCBpb24tbGFiZWwgLmxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5kb2N0b3ItZGV0YWlsIGlvbi1sYWJlbCAubW9yZS1idG4ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICB0b3A6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5vdGhlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAub3RoZXItaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAub3RoZXItaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/appointment-list/appointment-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/appointment-list/appointment-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListPage", function() { return AppointmentListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_pop_over_content_pop_over_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/pop-over-content/pop-over-content.component */ "./src/app/components/pop-over-content/pop-over-content.component.ts");





let AppointmentListPage = class AppointmentListPage {
    constructor(util, popoverCtrl) {
        this.util = util;
        this.popoverCtrl = popoverCtrl;
        this.data = {
            upcoming: [
                {
                    doctorName: "Dr.Rose Ortiz",
                    specialistIn: "Orthopedics",
                    location: "Low Mill Farm, Lendales Lane, Pickering",
                    img: "../../../assets/imgs/data/appointment/common_appointment.png",
                    date: "2.Nov 2019 10:00am",
                    patientName: "Patrick Stanley",
                },
            ],
            past: [
                {
                    doctorName: "Dr.Rachel Carrol",
                    specialistIn: "Orthopedics",
                    location: "Low Mill Farm, Lendales Lane, Pickering",
                    img: "../../../assets/imgs/data/appointment/appointment2.png",
                    date: "5.Oct 2019 11:00am",
                    patientName: "Mary Ann Fuller",
                },
                {
                    doctorName: "Dr.Bianca Hart",
                    specialistIn: "Orthopedics",
                    location: "Low Mill Farm, Lendales Lane, Pickering",
                    img: "../../../assets/imgs/data/appointment/appointment3.png",
                    date: "12.Oct 2019 05:00pm",
                    patientName: "Fionna Fuller",
                },
                {
                    doctorName: "Dr.Alex Baker",
                    specialistIn: "Orthopedics",
                    location: "Low Mill Farm, Lendales Lane, Pickering",
                    img: "../../../assets/imgs/data/appointment/appointment4.png",
                    date: "22.Oct 2019 07:30am",
                    patientName: "Frank Green",
                },
            ],
        };
    }
    ngOnInit() { }
    handleButtonClick(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            ev.stopPropagation();
            const popover = yield this.popoverCtrl.create({
                component: src_app_components_pop_over_content_pop_over_content_component__WEBPACK_IMPORTED_MODULE_4__["PopOverContentComponent"],
                event: ev,
                mode: "ios",
                translucent: true,
            });
            return popover.present();
        });
    }
    goToAppointmentDetail() { }
};
AppointmentListPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
AppointmentListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-appointment-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment-list/appointment-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment-list.page.scss */ "./src/app/pages/appointment-list/appointment-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], AppointmentListPage);



/***/ })

}]);
//# sourceMappingURL=pages-appointment-list-appointment-list-module-es2015.js.map