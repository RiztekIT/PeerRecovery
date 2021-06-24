function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-book-appointment-book-appointment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-appointment/book-appointment.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-appointment/book-appointment.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookAppointmentBookAppointmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-item class=\"doctor-info\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/imgs/data/appointmentDetail/dr_dp.png\">\n        </ion-avatar>\n        <ion-label>\n            <h2 class=\"shop-name margin-bottom-4\">Rose Health Care</h2>\n            <h3 class=\"doctor-name margin-bottom-4\">Dr.Rose Ortiz</h3>\n            <p class=\"location\">\n                <ion-icon class=\"margin-right-10\" src=\"../../../assets/imgs/appicons/location.svg\">\n                </ion-icon>\n                <span>\n                  Low Mill Farm, Lendales Lane, Pickering, YO18 8EE\n                </span>\n            </p>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"stepper-container margin-top-10\">\n        <div class=\"step\">\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line\"></div>\n                    <div class=\"circle\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Patient Detail\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line in-progress\"></div>\n                    <div class=\"circle in-progress\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Date & Time\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line in-progress\"></div>\n                    <div class=\"circle in-progress\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Payment\n                </h2>\n            </div>\n            <div class=\"step-content\">\n                <div class=\"line-bar\">\n                    <div class=\"line in-progress\"></div>\n                    <div class=\"circle in-progress\"></div>\n                    <div class=\"line in-progress\"></div>\n                </div>\n                <h2 class=\"margin-top-10\">\n                    Booking Confirm\n                </h2>\n            </div>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/book-appointment/book-appointment-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/book-appointment/book-appointment-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: BookAppointmentPageRoutingModule */

  /***/
  function srcAppPagesBookAppointmentBookAppointmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookAppointmentPageRoutingModule", function () {
      return BookAppointmentPageRoutingModule;
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


    var _book_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book-appointment.page */
    "./src/app/pages/book-appointment/book-appointment.page.ts");

    var routes = [{
      path: '',
      component: _book_appointment_page__WEBPACK_IMPORTED_MODULE_3__["BookAppointmentPage"]
    }];

    var BookAppointmentPageRoutingModule = function BookAppointmentPageRoutingModule() {
      _classCallCheck(this, BookAppointmentPageRoutingModule);
    };

    BookAppointmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookAppointmentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/book-appointment/book-appointment.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/book-appointment/book-appointment.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BookAppointmentPageModule */

  /***/
  function srcAppPagesBookAppointmentBookAppointmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookAppointmentPageModule", function () {
      return BookAppointmentPageModule;
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


    var _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./book-appointment-routing.module */
    "./src/app/pages/book-appointment/book-appointment-routing.module.ts");
    /* harmony import */


    var _book_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book-appointment.page */
    "./src/app/pages/book-appointment/book-appointment.page.ts");

    var BookAppointmentPageModule = function BookAppointmentPageModule() {
      _classCallCheck(this, BookAppointmentPageModule);
    };

    BookAppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookAppointmentPageRoutingModule"]],
      declarations: [_book_appointment_page__WEBPACK_IMPORTED_MODULE_6__["BookAppointmentPage"]]
    })], BookAppointmentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/book-appointment/book-appointment.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/book-appointment/book-appointment.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookAppointmentBookAppointmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2stYXBwb2ludG1lbnQvYm9vay1hcHBvaW50bWVudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/book-appointment/book-appointment.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/book-appointment/book-appointment.page.ts ***!
    \*****************************************************************/

  /*! exports provided: BookAppointmentPage */

  /***/
  function srcAppPagesBookAppointmentBookAppointmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookAppointmentPage", function () {
      return BookAppointmentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookAppointmentPage = /*#__PURE__*/function () {
      function BookAppointmentPage() {
        _classCallCheck(this, BookAppointmentPage);
      }

      _createClass(BookAppointmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookAppointmentPage;
    }();

    BookAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-appointment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-appointment/book-appointment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-appointment.page.scss */
      "./src/app/pages/book-appointment/book-appointment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookAppointmentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-book-appointment-book-appointment-module-es5.js.map