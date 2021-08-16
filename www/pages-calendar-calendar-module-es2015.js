(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Appointments</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding-bottom\">\n\n    <div class=\"head_div\">\n        <h3 class=\"main_lbl head_lbl\">Appointments <span class=\"ion-float-right\">Total: {{totalAppointments}}</span>\n            <ion-toggle [(ngModel)]=\"this.all\" slot=\"end\" color=\"primary\" (ngModelChange)=\"allChange()\"></ion-toggle>\n        </h3>\n\n    </div>\n\n    <ion-row *ngIf=\"this.dates\">\n        <ion-col class=\"first_Col\" style=\"background-color: white;\">\n            <h3 class=\"date_lbl\">Start</h3>\n            <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"this.startDate\" (ngModelChange)=\"changeDates()\"></ion-datetime>\n        </ion-col>\n        <ion-col style=\"background-color: white;\">\n            <h3 class=\"date_lbl\">End</h3>\n            <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"this.endDate\" (ngModelChange)=\"changeDates()\"></ion-datetime>\n        </ion-col>\n    </ion-row>\n\n\n    <!--    <div class=\"data_div\" style=\"text-align: end;\">\n\n\n        <ion-toggle [(ngModel)]=\"this.all\" slot=\"end\" color=\"primary\"></ion-toggle>\n\n\n    </div> -->\n\n\n    <!--    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of apps\">\n        \n        <ion-icon name=\"briefcase-outline\"> </ion-icon>\n        <div class=\"card_div\" [ngStyle]=\"getStyle(item)\">\n        \n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.appointmentdate.seconds * 1000| date: 'dd/MM/yy h:mm a' }}</span></h3>\n        \n                <p class=\"add\">{{item.description}}</p>\n                <p><a href=\"{{item.link}}\" target=\"_system\">{{item.link}}</a></p>\n            </div>\n        </div>\n    </div> -->\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of apps\">\n            <div [ngStyle]=\"getStyle(item)\">\n\n\n                <ion-item-options side=\"end\">\n\n                    <ion-item-option (click)=\"openlink(item)\">\n\n\n                        <ion-icon slot=\"icon-only\" name=\"eye\">\n\n                        </ion-icon>\n\n                    </ion-item-option>\n\n                </ion-item-options>\n\n                <ion-item (click)=\"openAppointmentPage(item)\" class=\"transparentbg\">\n                    <ion-icon name=\"briefcase-outline\"> </ion-icon>\n                    <ion-label>\n\n                        <h3 class=\"name\">{{item.title}} <span>{{item.appointmentdate.seconds * 1000| date: 'dd/MM/yy h:mm a' }}</span></h3>\n\n                        <p class=\"add\">{{item.description}}</p>\n\n                    </ion-label>\n\n\n                </ion-item>\n\n            </div>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <!--  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"newAppointmentPage()\">\n        <ion-fab-button>\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab> -->\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"settings\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n            <ion-fab-button (click)=\"newAppointmentPage()\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button (click)=\"searchDates()\">\n                <ion-icon name=\"calendar-outline\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n\n\n</ion-content>\n<!--<ion-footer class=\"ion-no-border\">\n    <ion-button class=\"main_btn\" expand=\"full\">\n        cancel appointment\n    </ion-button>\n</ion-footer>-->");

/***/ }),

/***/ "./src/app/pages/calendar/calendar-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPagePageRoutingModule", function() { return CalendarPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
let CalendarPagePageRoutingModule = class CalendarPagePageRoutingModule {
};
CalendarPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calendar/calendar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/pages/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPagePageRoutingModule"]
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]],
    })
], CalendarPageModule);



/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\nion-content .main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .date_div {\n  background-color: var(--div_back);\n  margin-top: 10px;\n}\nion-content .date_div ion-col {\n  text-align: center;\n  padding: 11px 0px 0px 0px;\n}\nion-content .date_div ion-col .date_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-content .date_div ion-col ion-datetime {\n  color: var(--my_theme);\n  font-family: \"sf_ui_md\";\n  font-size: 14px;\n  padding-left: 0;\n  padding-top: 5px;\n  padding-bottom: 0;\n}\nion-content .date_div ion-col .time_l {\n  color: var(--blue);\n  margin-bottom: 10px;\n}\nion-content .date_div .first_Col {\n  /*border-right: solid;\n  border-right-color: var(--lht_blue);\n  border-right-width: 1px;*/\n}\nion-content .head_div {\n  height: 40px;\n  background-color: var(--div_back);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n}\nion-content .head_div .head_lbl {\n  margin: 0;\n  width: 100%;\n}\nion-content .head_div .head_lbl span {\n  font-size: 13px;\n  color: var(--lht_blue);\n}\nion-content .data_div {\n  display: flex;\n  padding: 10px 16px;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\nion-content .data_div .time {\n  font-size: 16px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  width: 50px;\n  text-align: center;\n}\nion-content .data_div .card_div {\n  display: flex;\n  margin-left: 10px;\n  padding: 10px 10px 10px 5px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);\n  width: 100%;\n}\nion-content .data_div .card_div img {\n  height: 58px;\n  width: 58px;\n  border-radius: 5px;\n}\nion-content .data_div .card_div .info_div {\n  padding-left: 15px;\n  width: 100%;\n  padding-top: 3px;\n}\nion-content .data_div .card_div .info_div .name {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .data_div .card_div .info_div .name span {\n  font-size: 12px;\n}\nion-content .data_div .card_div .info_div .age {\n  font-size: 12px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 3px 0px;\n}\nion-content .data_div .card_div .info_div .add {\n  font-size: 12px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_r\";\n  margin: 0;\n}\n.stacked-lbl {\n  font-size: 19px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-fab-button {\n  color: var(--ion-color-primary-dark);\n}\n.transparentbg {\n  --ion-background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNBUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0ZSO0FESUk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FDRlI7QURHUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNEWjtBREVZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQWhCO0FERVk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQWhCO0FER1E7RUFDSTs7MkJBQUE7QUNDWjtBRElJO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRElRO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUNGWjtBREdZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FDRGhCO0FES0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRElRO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlo7QURJUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7QUNGWjtBREdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURFZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FwQjtBRENvQjtFQUNJLGVBQUE7QUNDeEI7QURFZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNBcEI7QURPQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0pKO0FET0E7RUFDSSxvQ0FBQTtBQ0pKO0FET0E7RUFDSSxtQ0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLm1haW5fbGJsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5kYXRlX2RpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGl2X2JhY2spO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTFweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgLmRhdGVfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lX2wge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3RfQ29sIHtcclxuICAgICAgICAgICAgLypib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLWxodF9ibHVlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZF9kaXYge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuaGVhZF9sYmwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YV9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm9fZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0YWNrZWQtbGJsIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKVxyXG59XHJcblxyXG4udHJhbnNwYXJlbnRiZyB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSIsImlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZl91aV9zYlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGVfZGl2IGlvbi1jb2wgLmRhdGVfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIGlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIC50aW1lX2wge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgLmZpcnN0X0NvbCB7XG4gIC8qYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4OyovXG59XG5pb24tY29udGVudCAuaGVhZF9kaXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaGVhZF9kaXYgLmhlYWRfbGJsIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5oZWFkX2RpdiAuaGVhZF9sYmwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiBpbWcge1xuICBoZWlnaHQ6IDU4cHg7XG4gIHdpZHRoOiA1OHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYgLmluZm9fZGl2IC5uYW1lIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAuYWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYgLmluZm9fZGl2IC5hZGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX3JcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3RhY2tlZC1sYmwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cblxuLnRyYW5zcGFyZW50Ymcge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.ts ***!
  \*************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









let CalendarPage = class CalendarPage {
    constructor(alertController, nav, router, modalCtr, firebaseAuthService, appointmentService, zoomService, sanitizer, 
    //private iab: InAppBrowser
    iab) {
        /*     this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
                        this.getAppointments(); */
        this.alertController = alertController;
        this.nav = nav;
        this.router = router;
        this.modalCtr = modalCtr;
        this.firebaseAuthService = firebaseAuthService;
        this.appointmentService = appointmentService;
        this.zoomService = zoomService;
        this.sanitizer = sanitizer;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.Appointments = [];
        this.totalAppointments = 0;
        this.apps = [];
        this.all = true;
        this.dates = false;
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.startDate = new Date();
        this.endDate = new Date();
        this.getAppointments();
    }
    /*async presentAlertRadio() {
      const alert = await this.alertController.create({
        header: "Set Doctor",
        inputs: [
          {
            name: "Kirakwall",
            type: "radio",
            label: "Kirakwall",
            value: "Kirakwall",
            checked: true,
          },
          {
            name: "Kirakwall2",
            type: "radio",
            label: "Kirakwall2",
            value: "Kirakwall2",
          },
          {
            name: "Kirakwall3",
            type: "radio",
            label: "Kirakwall3",
            value: "Kirakwall3",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {},
          },
          {
            text: "Ok",
            handler: (data) => {
              this.selectedLocation = data;
            },
          },
        ],
      });
  
      await alert.present();
    }*/
    getStyle(item) {
        let color;
        let hoy = new Date();
        let fecha = new Date();
        fecha.setTime(item.appointmentdate.seconds * 1000);
        let h = +fecha - +hoy;
        h = h / 86400000;
        if (h < 0) {
            color = {
                'background-color': '#ff3333'
            };
            return color;
        }
        else if (h < 1) {
            color = {
                'background-color': '#ffb3b3'
            };
            return color;
        }
        else if (h < 3) {
            color = {
                'background-color': '#ffff99'
            };
            return color;
        }
        else {
            color = {
                'background-color': '#66ff66'
            };
            return color;
        }
    }
    allChange() {
        this.getAppointments();
        /*    if (!this.all){
             console.log(this.all,'all');
       
             this.apps.filter(app => app.done == 'false')
           }
       
           console.log(this.apps); */
    }
    getAppointments() {
        /*   this.appointmentService.getAppointments().on('value', resp=>{
            this.Appointments  = [];
            resp.forEach((childSnapshot: any) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                this.Appointments.push(item);
            });
            console.log(resp);
            console.log(this.Appointments);
          }) */
        this.appointmentService.getApps(this.user.uid).on('value', resp => {
            this.apps = [];
            console.log(resp.val());
            resp.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.appkey = childSnapshot.key;
                if (this.all) {
                    if (this.dates) {
                        if ((item.appointmentdate.seconds * 1000 >= this.startDateS.getTime()) && (item.appointmentdate.seconds * 1000 <= this.endDateS.getTime())) {
                            this.apps.push(item);
                        }
                    }
                    else {
                        this.apps.push(item);
                    }
                }
                else {
                    if (!item.done) {
                        if (this.dates) {
                            if ((item.appointmentdate.seconds * 1000 >= this.startDateS.getTime()) && (item.appointmentdate.seconds * 1000 <= this.endDateS.getTime())) {
                                this.apps.push(item);
                            }
                        }
                        else {
                            this.apps.push(item);
                        }
                    }
                }
            });
            this.totalAppointments = this.apps.length;
        });
    }
    openAppointmentPage(item) {
        /*  let appointment = {
           appointmentID: item.key,
         }; */
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(item)
            }
        };
        this.router.navigate(['appointment'], navigationExtras);
    }
    newAppointmentPage() {
        this.router.navigate(['appointment']);
    }
    searchDates() {
        this.dates = !this.dates;
        this.startDate = new Date();
        this.endDate = new Date();
        console.log(this.dates);
    }
    changeDates() {
        console.log(this.startDate);
        console.log(this.endDate);
        this.startDateS = new Date(this.startDate);
        this.endDateS = new Date(this.endDate);
        console.log(this.startDateS);
        console.log(this.endDateS);
        if (this.startDateS < this.endDateS) {
            this.getAppointments();
        }
        //this.getAppointments();
    }
    openlink(item) {
        /*
            const url = item.link;
        
            const link = document.createElement('a');
            link.href = url;
            link.target = '_system'
            link.click(); */
        let url = this.sanitizer.bypassSecurityTrustUrl(item.link);
        let url2 = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].URL, url);
        //this.pdfSrc = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(url));
        //window.open(url2,'_system')
        this.iab.create(item.link, '_system', this.options).show();
        //this.iab.open(item.link,'_system')
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"] },
    { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_6__["Zoom"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calendar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.page.scss */ "./src/app/pages/calendar/calendar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"],
        _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_6__["Zoom"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=pages-calendar-calendar-module-es2015.js.map