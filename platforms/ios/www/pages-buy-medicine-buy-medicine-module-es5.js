function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buy-medicine-buy-medicine-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buy-medicine/buy-medicine.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buy-medicine/buy-medicine.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBuyMedicineBuyMedicinePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>Patrick Stanley\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>46 Park Avenue 98 Station Road, Wembley London</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-input placeholder=\"Search  Medicine...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-list-header class=\"margin-bottom-20\">\n            Items with Rx. require prescription from the doctor\n        </ion-list-header>\n        <div class=\"flex-layout\">\n            <ion-item class=\"margin-bottom-11\" *ngFor=\"let i of medicine\" lines=\"none\">\n                <ion-label>{{i?.name}}</ion-label>\n                <ion-checkbox [checked]=\"i?.checked\" [value]=\"i?.name\" class=\"margin-right-12\" slot=\"start\">\n                </ion-checkbox>\n            </ion-item>\n        </div>\n    </ion-list>\n\n    <h2 class=\"title margin-left-16\">Add Prescription Note</h2>\n\n    <div class=\"scroll-wrapper margin-left-15 margin-top-13 margin-bottom-20\">\n        <!-- <img class=\"margin-right-15\" src=\"../../../assets/imgs/data/appointmentDetail/Group 6428.png\"> -->\n        <div class=\"add-container\">\n            <ion-button fill=\"clear\">\n                <ion-icon src=\"../../../assets/imgs/appicons/add.svg\"></ion-icon>\n            </ion-button>\n        </div>\n    </div>\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-button (click)=\"goToCart()\">\n        add to cart\n    </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/buy-medicine/buy-medicine-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/buy-medicine/buy-medicine-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BuyMedicinePageRoutingModule */

  /***/
  function srcAppPagesBuyMedicineBuyMedicineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyMedicinePageRoutingModule", function () {
      return BuyMedicinePageRoutingModule;
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


    var _buy_medicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./buy-medicine.page */
    "./src/app/pages/buy-medicine/buy-medicine.page.ts");

    var routes = [{
      path: '',
      component: _buy_medicine_page__WEBPACK_IMPORTED_MODULE_3__["BuyMedicinePage"]
    }];

    var BuyMedicinePageRoutingModule = function BuyMedicinePageRoutingModule() {
      _classCallCheck(this, BuyMedicinePageRoutingModule);
    };

    BuyMedicinePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BuyMedicinePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/buy-medicine/buy-medicine.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/buy-medicine/buy-medicine.module.ts ***!
    \***********************************************************/

  /*! exports provided: BuyMedicinePageModule */

  /***/
  function srcAppPagesBuyMedicineBuyMedicineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyMedicinePageModule", function () {
      return BuyMedicinePageModule;
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


    var _buy_medicine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./buy-medicine-routing.module */
    "./src/app/pages/buy-medicine/buy-medicine-routing.module.ts");
    /* harmony import */


    var _buy_medicine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./buy-medicine.page */
    "./src/app/pages/buy-medicine/buy-medicine.page.ts");

    var BuyMedicinePageModule = function BuyMedicinePageModule() {
      _classCallCheck(this, BuyMedicinePageModule);
    };

    BuyMedicinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _buy_medicine_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyMedicinePageRoutingModule"]],
      declarations: [_buy_medicine_page__WEBPACK_IMPORTED_MODULE_6__["BuyMedicinePage"]]
    })], BuyMedicinePageModule);
    /***/
  },

  /***/
  "./src/app/pages/buy-medicine/buy-medicine.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/buy-medicine/buy-medicine.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBuyMedicineBuyMedicinePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-list ion-list-header {\n  background: var(--ion-color-primary-dull);\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list .flex-layout {\n  display: flex;\n  flex-wrap: wrap;\n}\nion-content ion-list .flex-layout ion-item {\n  width: 50%;\n  --min-height: 20px;\n}\nion-content ion-list .flex-layout ion-item ion-label {\n  white-space: normal;\n  margin: 0;\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content ion-list .flex-layout ion-item ion-checkbox {\n  margin: 0;\n  height: 13px;\n  width: 13px;\n  padding: 2px;\n  border: 1px solid var(--ion-color-primary-dark);\n  border-radius: 50%;\n  --border-radius: 50%;\n  --border-color-checked: var(--ion-color-primary);\n  --border-width: 3px !important;\n  --border-color: var(--ion-color-white);\n  --background-checked: var(--ion-color-primary);\n}\nion-content .title {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\nion-content .scroll-wrapper {\n  display: flex;\n  overflow: scroll;\n}\nion-content .scroll-wrapper img {\n  border-radius: 5px;\n  height: 48px;\n  width: 48px;\n  min-height: 48px;\n  min-width: 48px;\n}\nion-content .scroll-wrapper .add-container {\n  border-radius: 5px;\n  height: 48px;\n  width: 48px;\n  min-height: 48px;\n  min-width: 48px;\n  background: var(--ion-color-primary-dull);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .scroll-wrapper .add-container ion-icon {\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvYnV5LW1lZGljaW5lL2J1eS1tZWRpY2luZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2J1eS1tZWRpY2luZS9idXktbWVkaWNpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0kseUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ0RaO0FER1E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ0NwQjtBRENnQjtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBQ0NwQjtBRElJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNGUjtBRElJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDRlI7QURHUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNEWjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksZUFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1eS1tZWRpY2luZS9idXktbWVkaWNpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWR1bGwpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxleC1sYXlvdXQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kdWxsKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgLmZsZXgtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgLmZsZXgtbGF5b3V0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgLS1taW4taGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgLmZsZXgtbGF5b3V0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgLmZsZXgtbGF5b3V0IGlvbi1pdGVtIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5zY3JvbGwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAuc2Nyb2xsLXdyYXBwZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBtaW4td2lkdGg6IDQ4cHg7XG59XG5pb24tY29udGVudCAuc2Nyb2xsLXdyYXBwZXIgLmFkZC1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIG1pbi13aWR0aDogNDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnNjcm9sbC13cmFwcGVyIC5hZGQtY29udGFpbmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/buy-medicine/buy-medicine.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/buy-medicine/buy-medicine.page.ts ***!
    \*********************************************************/

  /*! exports provided: BuyMedicinePage */

  /***/
  function srcAppPagesBuyMedicineBuyMedicinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyMedicinePage", function () {
      return BuyMedicinePage;
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

    var BuyMedicinePage = /*#__PURE__*/function () {
      function BuyMedicinePage(util) {
        _classCallCheck(this, BuyMedicinePage);

        this.util = util;
        this.medicine = [{
          name: "Abilify",
          checked: false
        }, {
          name: "Cyanocobalamin",
          checked: false
        }, {
          name: "Acetaminophen",
          checked: false
        }, {
          name: "Demerol",
          checked: true
        }, {
          name: "Acyclovir",
          checked: false
        }, {
          name: "Depakote",
          checked: false
        }, {
          name: "Alprazolam",
          checked: false
        }, {
          name: "Diclofenac",
          checked: true
        }, {
          name: "Amoxicillin",
          checked: false
        }, {
          name: "Dicyclomine",
          checked: false
        }, {
          name: "Anastrozole",
          checked: false
        }, {
          name: "Doxycycline",
          checked: false
        }, {
          name: "Apixaban",
          checked: false
        }, {
          name: "Ecotrin",
          checked: false
        }, {
          name: "Aspirin",
          checked: false
        }, {
          name: "Elavil",
          checked: false
        }, {
          name: "Abaloparatide",
          checked: false
        }, {
          name: "Estradiol",
          checked: false
        }, {
          name: "Abatron",
          checked: false
        }, {
          name: "Ezetimibe",
          checked: false
        }, {
          name: "Abelcet",
          checked: false
        }, {
          name: "Fluconazole",
          checked: true
        }, {
          name: "Bacitracin",
          checked: false
        }, {
          name: "Focalin",
          checked: false
        }, {
          name: "Belbuca",
          checked: true
        }, {
          name: "Fosamax",
          checked: false
        }, {
          name: "Benicar",
          checked: false
        }, {
          name: "Gabapentin",
          checked: false
        }, {
          name: "Biaxin",
          checked: false
        }, {
          name: "Gaviscon ",
          checked: false
        }, {
          name: "Biotin",
          checked: false
        }, {
          name: "Glucosamine",
          checked: false
        }, {
          name: "Calcium carbonate",
          checked: false
        }, {
          name: "Griseofulvin",
          checked: false
        }, {
          name: "Cardizem",
          checked: false
        }, {
          name: "Hydrocodone",
          checked: false
        }, {
          name: "Clonidine",
          checked: false
        }, {
          name: "Hydroxyzine",
          checked: false
        }];
      }

      _createClass(BuyMedicinePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToCart",
        value: function goToCart() {}
      }]);

      return BuyMedicinePage;
    }();

    BuyMedicinePage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    BuyMedicinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-buy-medicine",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-medicine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buy-medicine/buy-medicine.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy-medicine.page.scss */
      "./src/app/pages/buy-medicine/buy-medicine.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], BuyMedicinePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-buy-medicine-buy-medicine-module-es5.js.map