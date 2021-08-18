(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-appointment-appointment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment/appointment.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment/appointment.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Appointment</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"date_div\" style=\"margin: 10px 15px 15px 15px;background: #ffffff; border-radius: 5px;\">\n\n\n\n        <ion-row>\n            <ion-col style=\"padding-top: 0px;\">\n                <ion-item>\n                    <ion-label position=\"stacked\" class=\"stacked-lbl\">Title</ion-label>\n                    <ion-input [(ngModel)]=\"title\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col style=\"padding-top: 0px;\">\n                <ion-item>\n                    <ion-label position=\"stacked\" class=\"stacked-lbl\">Description</ion-label>\n                    <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col class=\"first_Col\" style=\"background-color: white;\">\n                <h3 class=\"date_lbl\">Date</h3>\n                <ion-datetime displayFormat=\"MMM DD YYYY\" placeholder=\"Nov 01 2019\" [(ngModel)]=\"date\"></ion-datetime>\n            </ion-col>\n            <ion-col style=\"background-color: white;\">\n                <h3 class=\"date_lbl\">Time</h3>\n                <ion-datetime displayFormat=\"hh:mm a\" placeholder=\"10:00 am\" [(ngModel)]=\"date\"></ion-datetime>\n            </ion-col>\n            <!--<ion-col>\n                <h3 class=\"date_lbl\">End Date</h3>\n                <ion-datetime id=\"dynamicDisabled\" displayFormat=\"DD MMM YYYY\" placeholder=\"30 Nov 2019\"></ion-datetime>\n                <ion-datetime id=\"dynamicDisabled\" displayFormat=\"hh:mm a\" placeholder=\"10:00am\" class=\"time_l\"></ion-datetime>\n            </ion-col>-->\n        </ion-row>\n\n        <hr>\n\n        <ion-row *ngIf=\"this.edit && this.canedit\">\n            <ion-col style=\"padding-top: 0px;\">\n                <ion-label position=\"stacked\" class=\"stacked-lbl\">Done</ion-label>\n                <ion-checkbox [(ngModel)]=\"done\"> </ion-checkbox>\n            </ion-col>\n        </ion-row>\n\n        <hr>\n\n        <!--   <ion-row>\n            <ion-text>\n                {{this.data |json}}\n            </ion-text>\n        </ion-row> -->\n\n\n        <ion-row>\n            <ion-col>\n            </ion-col>\n            <ion-col>\n                <ion-button *ngIf=\"!this.edit\" expand=\"block\" class=\"plan-btn margin-top-30\" (click)=\"addappintment()\">\n                    Save\n                </ion-button>\n                <ion-button *ngIf=\"this.edit && this.canedit\" expand=\"block\" class=\"plan-btn margin-top-30\" (click)=\"editappintment()\">\n                    Edit\n                </ion-button>\n            </ion-col>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/appointment/appointment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/appointment/appointment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPageRoutingModule", function() { return AppointmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment.page */ "./src/app/pages/appointment/appointment.page.ts");




const routes = [
    {
        path: '',
        component: _appointment_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentPage"]
    }
];
let AppointmentPageRoutingModule = class AppointmentPageRoutingModule {
};
AppointmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appointment/appointment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/appointment/appointment.module.ts ***!
  \*********************************************************/
/*! exports provided: AppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPageModule", function() { return AppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-routing.module */ "./src/app/pages/appointment/appointment-routing.module.ts");
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment.page */ "./src/app/pages/appointment/appointment.page.ts");







let AppointmentPageModule = class AppointmentPageModule {
};
AppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentPageRoutingModule"]
        ],
        declarations: [_appointment_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPage"]]
    })
], AppointmentPageModule);



/***/ }),

/***/ "./src/app/pages/appointment/appointment.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\nion-content .main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .date_div {\n  background-color: var(--div_back);\n  margin-top: 10px;\n}\nion-content .date_div ion-col {\n  text-align: center;\n  padding: 11px 0px 0px 0px;\n}\nion-content .date_div ion-col .date_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-content .date_div ion-col ion-datetime {\n  color: var(--my_theme);\n  font-family: \"sf_ui_md\";\n  font-size: 14px;\n  padding-left: 0;\n  padding-top: 5px;\n  padding-bottom: 0;\n}\nion-content .date_div ion-col .time_l {\n  color: var(--blue);\n  margin-bottom: 10px;\n}\n.stacked-lbl {\n  font-size: 19px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-button {\n  font-family: \"sf_ui_md\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcHBvaW50bWVudC9hcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNBUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0ZSO0FESUk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FDRlI7QURHUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNEWjtBREVZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQWhCO0FERVk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQWhCO0FETUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNISjtBRE1BO0VBQ0ksdUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLm1haW5fbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmRhdGVfZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGl2X2JhY2spO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAuZGF0ZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGltZV9sIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0YWNrZWQtbGJsIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xufSIsImlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZl91aV9zYlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGVfZGl2IGlvbi1jb2wgLmRhdGVfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIGlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIC50aW1lX2wge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGFja2VkLWxibCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/appointment/appointment.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.ts ***!
  \*******************************************************/
/*! exports provided: AppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPage", function() { return AppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");






let AppointmentPage = class AppointmentPage {
    constructor(route, router, firebaseAuthService, appointmentService) {
        this.route = route;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.appointmentService = appointmentService;
        this.appointmentID = "";
        this.title = "";
        this.description = "";
        this.edit = false;
        this.canedit = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
                this.edit = true;
                this.getAppointment(this.data);
            }
            else {
                this.date = new Date().toString();
                this.edit = false;
            }
        });
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.edit, 'edit');
    }
    getAppointment(app) {
        /*  this.appointmentService.getAppointment(appointmentID).on('value', resp=>{
            this.appointmentID = appointmentID;
            this.title = resp.val().title;
            this.description = resp.val().description;
            this.date = resp.val().date;
            this.time = resp.val().time;
            console.log(resp.val());
          }) */
        console.log(app);
        let fecha = new Date();
        let hoy = new Date();
        fecha.setTime(app.appointmentdate.seconds * 1000);
        let h = +fecha - +hoy;
        console.log(fecha, 'fecha');
        console.log(hoy, 'hoy');
        console.log(h, 'dif');
        /*     fecha.setHours(fecha.getHours()-6)
        
           console.log(fecha);
           console.log(fecha.toISOString().split('T')[1]);   */
        this.title = app.title;
        this.description = app.description;
        this.canedit = app.useredit;
        this.done = app.done;
        this.date = fecha.toString();
        console.log(this.date);
    }
    buttonSaveAppointment() {
        let Obj = {
            userID: this.firebaseAuthService.usersign.uid,
            title: this.title,
            description: this.description,
            date: this.date,
            time: this.time,
            updated: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date()),
            useredit: true
        };
        if (this.appointmentID) { //Update
            let appointmentObj = Object.assign({}, Obj);
            this.appointmentService.updateAppointment(this.appointmentID, appointmentObj);
        }
        else {
            let appointmentObj = Object.assign({ created: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date()) }, Obj);
            console.log(appointmentObj);
            this.appointmentService.postAppointment(appointmentObj);
        }
    }
    addappintment() {
        console.log(this.date);
        /*    console.log(this.time);
           let d = this.date + ' ' +  this.time */
        /* let d2 = new Date(d).toString()
    
        console.log(d2);
        
        
        let appdate = firebase.firestore.Timestamp.fromDate(new Date(d2))
        console.log(appdate); */
        let appintment = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date()),
            appointmentdate: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date(this.date)),
            description: this.description,
            title: this.title,
            user: this.user.uid,
            done: false,
            useredit: true
        };
        console.log(appintment);
        this.appointmentService.addApp(appintment);
        this.router.navigate(['appoinments']);
    }
    editappintment() {
        console.log(this.date, 'fecha');
        /*     console.log(this.time,'time');
            let d = this.date + ' ' +  this.time
            console.log(d);
            let appdate = firebase.firestore.Timestamp.fromDate(new Date(d))
            console.log(appdate); */
        /* console.log(this.data,'key'); */
        let appintment;
        appintment = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date()),
            appointmentdate: firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.Timestamp.fromDate(new Date(this.date)),
            description: this.description,
            title: this.title,
            user: this.user.uid,
            done: false,
            appkey: this.data.appkey,
            useredit: true
        };
        console.log(appintment);
        this.appointmentService.editapp(appintment);
        this.router.navigate(['appoinments']);
    }
};
AppointmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"] }
];
AppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appointment/appointment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment.page.scss */ "./src/app/pages/appointment/appointment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]])
], AppointmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-appointment-appointment-module-es2015.js.map