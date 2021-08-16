function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-date-time-date-time-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDateTimeDateTimePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item class=\"doctor-info\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/imgs/data/appointmentDetail/dr_dp.png\">\n        </ion-avatar>\n        <ion-label>\n            <h2 class=\"shop-name margin-bottom-4\">Rose Health Care</h2>\n            <h3 class=\"doctor-name margin-bottom-4\">Dr.Rose Ortiz</h3>\n            <p class=\"location\">\n                <ion-icon class=\"margin-right-10\" src=\"../../../assets/imgs/appicons/location.svg\"></ion-icon>\n                <span>\n                  Low Mill Farm, Lendales Lane, Pickering, YO18 8EE\n              </span>\n            </p>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"stepper-container margin-top-10\">\n        <div class=\"step\">\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line\"></div>\n                    <div class=\"circle\">\n                        <ion-icon name=\"checkmark-sharp\"></ion-icon>\n                    </div>\n                    <div class=\"line\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Patient Detail\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line\"></div>\n                    <div class=\"circle\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Date & Time\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line in-progress\"></div>\n                    <div class=\"circle in-progress\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Payment\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line in-progress\"></div>\n                    <div class=\"circle in-progress\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Booking Confirm\n                </h2>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"date-container margin-top-40\">\n        <div (click)=\"onDateSelect(i)\" [class.selected]=\"i?.selected\" [class.hvr-radial-time]=\"i?.selected\" *ngFor=\"let i of date\" class=\"hvr-radial-out slot margin-left-15\">\n            <h2>{{i?.date}}</h2>\n            <p class=\"margin-top-3\">{{i?.availableSlot}} Time Available</p>\n        </div>\n    </div>\n\n    <h2 class=\"heading ion-text-center margin-top-17 margin-bottom-22\">Today, 1 Nov</h2>\n\n    <div class=\"time-container\">\n        <h2 class=\"head margin-left-15 margin-bottom-15\">\n            <ion-icon class=\"margin-right-9\" src=\"../../../assets/imgs/appicons/morning.svg\"></ion-icon>\n            Morning\n        </h2>\n        <div class=\"slots margin-left-15\">\n            <div (click)=\"onSlotSelect(item)\" [class.disabled]=\"!item?.available\" [class.selected]=\"item?.selected\" [class.hvr-radial-time]=\"item?.selected\" *ngFor=\"let item of timeSlots.morning\" class=\"hvr-radial-out slot margin-right-21\">\n                <h2 class=\"time\">{{item?.time}}</h2>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"time-container margin-top-20\">\n        <h2 class=\"head margin-left-15 margin-bottom-15\">\n            <ion-icon class=\"margin-right-9\" src=\"../../../assets/imgs/appicons/afternoon.svg\"></ion-icon>\n            Afternoon\n        </h2>\n        <div class=\"slots margin-left-15\">\n            <div (click)=\"onSlotSelect(item)\" [class.disabled]=\"!item?.available\" [class.selected]=\"item?.selected\" [class.hvr-radial-time]=\"item?.selected\" *ngFor=\"let item of timeSlots.afternoon\" class=\"hvr-radial-out slot margin-right-21\">\n                <h2 class=\"time\">{{item?.time}}</h2>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"time-container margin-top-20\">\n        <h2 class=\"head margin-left-15 margin-bottom-15\">\n            <ion-icon class=\"margin-right-9\" src=\"../../../assets/imgs/appicons/morning.svg\"></ion-icon>\n            Evening\n        </h2>\n        <div class=\"slots margin-left-15\">\n            <div (click)=\"onSlotSelect(item)\" [class.disabled]=\"!item?.available\" [class.selected]=\"item?.selected\" [class.hvr-radial-time]=\"item?.selected\" *ngFor=\"let item of timeSlots.evening\" class=\"hvr-radial-out slot margin-right-21\">\n                <h2 class=\"time\">{{item?.time}}</h2>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"time-container margin-top-20 margin-bottom-12\">\n        <h2 class=\"head margin-left-15 margin-bottom-15\">\n            <ion-icon class=\"margin-right-9 night-icon\" src=\"../../../assets/imgs/appicons/night.svg\"></ion-icon>\n            Night\n        </h2>\n        <div class=\"slots margin-left-15\">\n            <div (click)=\"onSlotSelect(item)\" [class.disabled]=\"!item?.available\" [class.selected]=\"item?.selected\" [class.hvr-radial-time]=\"item?.selected\" *ngFor=\"let item of timeSlots.night\" class=\"hvr-radial-out slot margin-right-21\">\n                <h2 class=\"time\">{{item?.time}}</h2>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-button (click)=\"goToPayment()\">\n        continue\n    </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/date-time/date-time-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DateTimePageRoutingModule */

  /***/
  function srcAppPagesDateTimeDateTimeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePageRoutingModule", function () {
      return DateTimePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _date_time_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-time.page */
    "./src/app/pages/date-time/date-time.page.ts");

    var routes = [{
      path: '',
      component: _date_time_page__WEBPACK_IMPORTED_MODULE_3__["DateTimePage"]
    }];

    var DateTimePageRoutingModule = function DateTimePageRoutingModule() {
      _classCallCheck(this, DateTimePageRoutingModule);
    };

    DateTimePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DateTimePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/date-time/date-time.module.ts ***!
    \*****************************************************/

  /*! exports provided: DateTimePageModule */

  /***/
  function srcAppPagesDateTimeDateTimeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function () {
      return DateTimePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _date_time_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./date-time-routing.module */
    "./src/app/pages/date-time/date-time-routing.module.ts");
    /* harmony import */


    var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time.page */
    "./src/app/pages/date-time/date-time.page.ts");

    var DateTimePageModule = function DateTimePageModule() {
      _classCallCheck(this, DateTimePageModule);
    };

    DateTimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _date_time_routing_module__WEBPACK_IMPORTED_MODULE_5__["DateTimePageRoutingModule"]],
      declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
    })], DateTimePageModule);
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/date-time/date-time.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDateTimeDateTimePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .heading {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .date-container {\n  height: 70px;\n  background: var(--ion-color-primary-dull);\n  display: flex;\n  align-items: center;\n  overflow: scroll;\n}\nion-content .date-container .slot {\n  border-radius: 5px;\n  background: var(--ion-color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 109px;\n  padding: 8px 0;\n}\nion-content .date-container .slot.selected h2,\nion-content .date-container .slot.selected p {\n  color: var(--ion-color-white);\n}\nion-content .date-container .slot h2 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .date-container .slot p {\n  font-size: 10px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\nion-content .time-container .head {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\nion-content .time-container .head ion-icon {\n  font-size: 26px;\n}\nion-content .time-container .head ion-icon.night-icon {\n  font-size: 18px;\n}\nion-content .time-container .slots {\n  display: flex;\n  overflow: scroll;\n}\nion-content .time-container .slots .slot {\n  width: 71px;\n  height: 31px;\n  background: var(--ion-color-primary-dull);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px;\n}\nion-content .time-container .slots .slot.disabled {\n  pointer-events: none;\n}\nion-content .time-container .slots .slot.disabled .time {\n  color: #00316540 !important;\n}\nion-content .time-container .slots .slot.selected .time {\n  color: var(--ion-color-white) !important;\n}\nion-content .time-container .slots .slot .time {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvZGF0ZS10aW1lL2RhdGUtdGltZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRENRO0VBT0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFBnQjs7RUFFSSw2QkFBQTtBQ1NwQjtBREVZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNBaEI7QURFWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDQWhCO0FES1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0haO0FESVk7RUFDSSxlQUFBO0FDRmhCO0FER2dCO0VBQ0ksZUFBQTtBQ0RwQjtBREtRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDSFo7QURJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRmhCO0FER2dCO0VBQ0ksb0JBQUE7QUNEcEI7QURFb0I7RUFDSSwyQkFBQTtBQ0F4QjtBREtvQjtFQUNJLHdDQUFBO0FDSHhCO0FETWdCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNKcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRlLXRpbWUvZGF0ZS10aW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgIH1cclxuICAgIC5kYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWR1bGwpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIC5zbG90IHtcclxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTA5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuaGVhZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAmLm5pZ2h0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xvdHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAuc2xvdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWR1bGwpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDMxNjU0MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5kYXRlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAuZGF0ZS1jb250YWluZXIgLnNsb3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDEwOXB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlLWNvbnRhaW5lciAuc2xvdC5zZWxlY3RlZCBoMixcbmlvbi1jb250ZW50IC5kYXRlLWNvbnRhaW5lciAuc2xvdC5zZWxlY3RlZCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24tY29udGVudCAuZGF0ZS1jb250YWluZXIgLnNsb3QgaDIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAuZGF0ZS1jb250YWluZXIgLnNsb3QgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCAudGltZS1jb250YWluZXIgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLnRpbWUtY29udGFpbmVyIC5oZWFkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuaW9uLWNvbnRlbnQgLnRpbWUtY29udGFpbmVyIC5oZWFkIGlvbi1pY29uLm5pZ2h0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAudGltZS1jb250YWluZXIgLnNsb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmlvbi1jb250ZW50IC50aW1lLWNvbnRhaW5lciAuc2xvdHMgLnNsb3Qge1xuICB3aWR0aDogNzFweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kdWxsKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmlvbi1jb250ZW50IC50aW1lLWNvbnRhaW5lciAuc2xvdHMgLnNsb3QuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmlvbi1jb250ZW50IC50aW1lLWNvbnRhaW5lciAuc2xvdHMgLnNsb3QuZGlzYWJsZWQgLnRpbWUge1xuICBjb2xvcjogIzAwMzE2NTQwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGltZS1jb250YWluZXIgLnNsb3RzIC5zbG90LnNlbGVjdGVkIC50aW1lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50aW1lLWNvbnRhaW5lciAuc2xvdHMgLnNsb3QgLnRpbWUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/date-time/date-time.page.ts ***!
    \***************************************************/

  /*! exports provided: DateTimePage */

  /***/
  function srcAppPagesDateTimeDateTimePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePage", function () {
      return DateTimePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DateTimePage = /*#__PURE__*/function () {
      function DateTimePage(util) {
        _classCallCheck(this, DateTimePage);

        this.util = util;
        this.date = [{
          date: 'Today, 1 Nov',
          availableSlot: '9',
          selected: true
        }, {
          date: 'Tomorrow, 2 Nov',
          availableSlot: '9',
          selected: false
        }, {
          date: 'Monday, 3 Nov',
          availableSlot: '9',
          selected: false
        }];
        this.timeSlots = {
          morning: [{
            time: '10:00 am',
            selected: false,
            available: false
          }, {
            time: '10:30 am',
            selected: true,
            available: true
          }, {
            time: '11:00 am',
            selected: false,
            available: false
          }, {
            time: '11:30 am',
            selected: false,
            available: false
          }],
          afternoon: [{
            time: '12:00 pm',
            selected: false,
            available: true
          }, {
            time: '12:30 am',
            selected: false,
            available: true
          }, {
            time: '1:00 am',
            selected: false,
            available: false
          }],
          evening: [{
            time: '05:00 pm',
            selected: false,
            available: true
          }, {
            time: '05:30 pm',
            selected: false,
            available: false
          }, {
            time: '06:00 pm',
            selected: false,
            available: true
          }, {
            time: '06:30 pm',
            selected: false,
            available: true
          }],
          night: [{
            time: '07:00 pm',
            selected: false,
            available: true
          }, {
            time: '07:30 pm',
            selected: false,
            available: true
          }, {
            time: '08:00 pm',
            selected: false,
            available: false
          }, {
            time: '08:30 pm',
            selected: false,
            available: true
          }]
        };
      }

      _createClass(DateTimePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSlotSelect",
        value: function onSlotSelect(selectedTime) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.timeSlots.morning.forEach(function (element) {
                      element.selected = false;
                    });

                  case 2:
                    _context.next = 4;
                    return this.timeSlots.afternoon.forEach(function (element) {
                      element.selected = false;
                    });

                  case 4:
                    _context.next = 6;
                    return this.timeSlots.evening.forEach(function (element) {
                      element.selected = false;
                    });

                  case 6:
                    _context.next = 8;
                    return this.timeSlots.night.forEach(function (element) {
                      element.selected = false;
                    });

                  case 8:
                    _context.next = 10;
                    return true;

                  case 10:
                    selectedTime.selected = _context.sent;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(selectedDate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.date.forEach(function (element) {
                      element.selected = false;
                    });

                  case 2:
                    _context2.next = 4;
                    return true;

                  case 4:
                    selectedDate.selected = _context2.sent;

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goToPayment",
        value: function goToPayment() {
          this.util.navCtrl.navigateForward('payment');
        }
      }]);

      return DateTimePage;
    }();

    DateTimePage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    DateTimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-date-time',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./date-time.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./date-time.page.scss */
      "./src/app/pages/date-time/date-time.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], DateTimePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-date-time-date-time-module-es5.js.map