(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancel-appointment-cancel-appointment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-appointment/cancel-appointment.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-appointment/cancel-appointment.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-back-button defaultHref=\"signIn\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item class=\"doctor-info\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/imgs/data/appointmentDetail/dr_dp.png\">\n        </ion-avatar>\n        <ion-label>\n            <h2 class=\"shop-name margin-bottom-4\">Rose Health Care</h2>\n            <h3 class=\"doctor-name margin-bottom-4\">Dr.Rose Ortiz</h3>\n            <p class=\"location\">\n                <ion-icon class=\"margin-right-10\" src=\"../../../assets/imgs/appicons/location.svg\"></ion-icon>\n                <span>\n              Low Mill Farm, Lendales Lane, Pickering, YO18 8EE\n          </span>\n            </p>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"date-time margin-top-30 margin-bottom-30\">\n        <h2>Today, 1 Nov</h2>\n        <p class=\"margin-top-3\">9 Time Available</p>\n    </div>\n\n\n    <ion-list class=\"cancel-reason\">\n        <ion-radio-group value=\"reason1\">\n            <ion-list-header>\n                <ion-label>Why you cancel an Appointment?</ion-label>\n            </ion-list-header>\n\n            <ion-item lines=\"none\">\n                <ion-label>appointment time doctor not available.</ion-label>\n                <ion-radio class=\"margin-right-12\" slot=\"start\" value=\"reason1\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label>Now I am perfectly alright.</ion-label>\n                <ion-radio class=\"margin-right-12\" slot=\"start\" value=\"reason2\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label>Hospital not find and I missed appointment time.</ion-label>\n                <ion-radio class=\"margin-right-12\" slot=\"start\" value=\"reason3\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label>Personal Reasons</ion-label>\n                <ion-radio class=\"margin-right-12\" slot=\"start\" value=\"reason4\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n\n    <ion-item class=\"margin-top-20 margin-bottom-20\" lines=\"none\">\n        <ion-label class=\"margin-bottom-10\" position=\"stacked\">Note</ion-label>\n        <ion-textarea rows=\"6\" cols=\"20\"></ion-textarea>\n    </ion-item>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-button>\n        send\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/cancel-appointment/cancel-appointment-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cancel-appointment/cancel-appointment-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CancelAppointmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelAppointmentPageRoutingModule", function() { return CancelAppointmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cancel_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-appointment.page */ "./src/app/pages/cancel-appointment/cancel-appointment.page.ts");




const routes = [
    {
        path: '',
        component: _cancel_appointment_page__WEBPACK_IMPORTED_MODULE_3__["CancelAppointmentPage"]
    }
];
let CancelAppointmentPageRoutingModule = class CancelAppointmentPageRoutingModule {
};
CancelAppointmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CancelAppointmentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cancel-appointment/cancel-appointment.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cancel-appointment/cancel-appointment.module.ts ***!
  \***********************************************************************/
/*! exports provided: CancelAppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelAppointmentPageModule", function() { return CancelAppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cancel_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel-appointment-routing.module */ "./src/app/pages/cancel-appointment/cancel-appointment-routing.module.ts");
/* harmony import */ var _cancel_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-appointment.page */ "./src/app/pages/cancel-appointment/cancel-appointment.page.ts");







let CancelAppointmentPageModule = class CancelAppointmentPageModule {
};
CancelAppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cancel_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelAppointmentPageRoutingModule"]
        ],
        declarations: [_cancel_appointment_page__WEBPACK_IMPORTED_MODULE_6__["CancelAppointmentPage"]]
    })
], CancelAppointmentPageModule);



/***/ }),

/***/ "./src/app/pages/cancel-appointment/cancel-appointment.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cancel-appointment/cancel-appointment.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button,\nion-header ion-toolbar ion-buttons ion-button ion-menu-button {\n  color: #003165;\n}\nion-content .date-time {\n  width: 109px;\n  background: var(--ion-color-primary);\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 109px;\n  padding: 8px 0;\n  margin: auto;\n}\nion-content .date-time h2 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-white);\n}\nion-content .date-time p {\n  font-size: 10px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-white);\n}\nion-content .cancel-reason ion-list-header {\n  text-align: center;\n}\nion-content .cancel-reason ion-list-header ion-label {\n  font-size: 18px;\n  font-family: sfUi-sb;\n  color: #FF4747 !important;\n}\nion-content .cancel-reason ion-label {\n  font-size: 16px;\n  font-family: sfUi-m;\n  color: #003165;\n  white-space: normal;\n}\nion-content .cancel-reason ion-radio {\n  --border-width: 1px;\n  --border-color: #7F98B2;\n  height: 22px;\n  width: 22px;\n}\nion-item {\n  --highlight-color-focused: #0000;\n}\nion-item ion-label {\n  font-size: 18px;\n  font-family: \"sfUi-sb\";\n  color: #FF4747;\n}\nion-item ion-textarea {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-primary-dark);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  border-radius: 5px;\n  --padding-start: 16px;\n  --padding-top: 12px;\n  width: 98%;\n  margin: 7px 9px 7px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FuY2VsLWFwcG9pbnRtZW50L2NhbmNlbC1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbmNlbC1hcHBvaW50bWVudC9jYW5jZWwtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBREdnQjs7RUFFSSxjQUFBO0FDRHBCO0FEU0k7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTlI7QURPUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDTFo7QURPUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDTFo7QURTUTtFQUNJLGtCQUFBO0FDUFo7QURRWTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDTmhCO0FEU1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNQWjtBRFNRO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUFo7QURZQTtFQUNJLGdDQUFBO0FDVEo7QURVSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FuY2VsLWFwcG9pbnRtZW50L2NhbmNlbC1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWNrLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDMxNjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIHdpZHRoOiAxMDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTA5cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYW5jZWwtcmVhc29uIHtcclxuICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2ZVaS1zYjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY0NzQ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2ZVaS1tO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMzE2NTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICM3Rjk4QjI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjMDAwMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1zYic7XHJcbiAgICAgICAgY29sb3I6ICNGRjQ3NDc7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktcic7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgbWFyZ2luOiA3cHggOXB4IDdweCA0cHg7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWJhY2stYnV0dG9uLFxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDAzMTY1O1xufVxuXG5pb24tY29udGVudCAuZGF0ZS10aW1lIHtcbiAgd2lkdGg6IDEwOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMTA5cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tY29udGVudCAuZGF0ZS10aW1lIGgyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24tY29udGVudCAuZGF0ZS10aW1lIHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5jYW5jZWwtcmVhc29uIGlvbi1saXN0LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5jYW5jZWwtcmVhc29uIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBzZlVpLXNiO1xuICBjb2xvcjogI0ZGNDc0NyAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNhbmNlbC1yZWFzb24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogc2ZVaS1tO1xuICBjb2xvcjogIzAwMzE2NTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5jYW5jZWwtcmVhc29uIGlvbi1yYWRpbyB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjN0Y5OEIyO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICMwMDAwO1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXNiXCI7XG4gIGNvbG9yOiAjRkY0NzQ3O1xufVxuaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogN3B4IDlweCA3cHggNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cancel-appointment/cancel-appointment.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cancel-appointment/cancel-appointment.page.ts ***!
  \*********************************************************************/
/*! exports provided: CancelAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelAppointmentPage", function() { return CancelAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CancelAppointmentPage = class CancelAppointmentPage {
    constructor() { }
    ngOnInit() {
    }
};
CancelAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancel-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancel-appointment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel-appointment/cancel-appointment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancel-appointment.page.scss */ "./src/app/pages/cancel-appointment/cancel-appointment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CancelAppointmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-cancel-appointment-cancel-appointment-module-es2015.js.map