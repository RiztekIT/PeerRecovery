function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracking-tracking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTrackingTrackingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Tracking</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <agm-map [styles]=\"styles\" [disableDefaultUI]=\"false\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"false\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        <!--  <agm-overlay *ngFor=\"let item of markers\" [latitude]=\"item.lat\" [longitude]=\"item.lng\"> -->\n\n        <!--    <div *ngIf=\"item.isOpen == true\" (click)=\"onMarkerSelect(item)\" [class.selected]=\"item.select\" class=\"open avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div>\n\n            <div *ngIf=\"item.isOpen == false\" class=\"avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div> -->\n        <!-- </agm-overlay> -->\n    </agm-map>\n\n    <div class=\"bottom-content\">\n        <ion-item class=\"doctor-info\" lines=\"full\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"this.authSVC.usersign.photoURL\">\n            </ion-avatar>\n\n            <ion-item lines=\"none\">\n                <ion-label>\n                    {{this.locatio}}\n                </ion-label>\n                <ion-icon class=\"margin-right-20\" src=\"../../../assets/imgs/appicons/location.svg\" slot=\"start\"></ion-icon>\n            </ion-item>\n\n\n            <!--<ion-label>\n                <h2 class=\"dr-name\">{{this.authSVC.usersign.displayName}}</h2>\n                <h3 class=\"shop-name\">Rose Health Care</h3>\n            </ion-label>\n            <div class=\"km-txt\" slot=\"end\">\n                3.5 KM\n            </div>-->\n        </ion-item>\n\n        <!--<ion-list class=\"other-content\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"this.authSVC.usersign.photoURL\">\n            </ion-avatar>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Low Mill Farm, Lendales Lane, Pickering, YO18 8EE\n                </ion-label>\n                <ion-icon class=\"margin-right-20\" src=\"../../../assets/imgs/appicons/location.svg\" slot=\"start\"></ion-icon>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    24/7 Service\n                </ion-label>\n                <ion-icon class=\"margin-right-20\" src=\"../../../assets/imgs/appicons/time.svg\" slot=\"start\"></ion-icon>\n            </ion-item>\n        </ion-list>-->\n\n        <ion-button (click)=\"presentAlert()\" expand=\"full\" shape=\"round \">Share my location</ion-button>\n\n    </div>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tracking/tracking-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TrackingPageRoutingModule */

  /***/
  function srcAppPagesTrackingTrackingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingPageRoutingModule", function () {
      return TrackingPageRoutingModule;
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


    var _tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tracking.page */
    "./src/app/pages/tracking/tracking.page.ts");

    var routes = [{
      path: '',
      component: _tracking_page__WEBPACK_IMPORTED_MODULE_3__["TrackingPage"]
    }];

    var TrackingPageRoutingModule = function TrackingPageRoutingModule() {
      _classCallCheck(this, TrackingPageRoutingModule);
    };

    TrackingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrackingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tracking/tracking.module.ts ***!
    \***************************************************/

  /*! exports provided: TrackingPageModule */

  /***/
  function srcAppPagesTrackingTrackingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function () {
      return TrackingPageModule;
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


    var _tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tracking-routing.module */
    "./src/app/pages/tracking/tracking-routing.module.ts");
    /* harmony import */


    var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tracking.page */
    "./src/app/pages/tracking/tracking.page.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var agm_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! agm-overlays */
    "./node_modules/agm-overlays/fesm2015/agm-overlays.js");

    var TrackingPageModule = function TrackingPageModule() {
      _classCallCheck(this, TrackingPageModule);
    };

    TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], agm_overlays__WEBPACK_IMPORTED_MODULE_8__["AgmOverlays"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE'
      }), _tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackingPageRoutingModule"]],
      declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
    })], TrackingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/tracking/tracking.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTrackingTrackingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\nion-content agm-map {\n  height: 100%;\n  width: 100%;\n}\nion-content .bottom-content {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin: 16px;\n  width: 91%;\n}\nion-content .bottom-content .doctor-info {\n  --padding-start: 20px;\n  --border-radius: none;\n  border-radius: 5px 5px 0px 0px;\n}\nion-content .bottom-content .doctor-info ion-avatar {\n  height: 55px;\n  width: 55px;\n  margin-right: 0px !important;\n}\nion-content .bottom-content .doctor-info ion-avatar img {\n  height: 55px;\n  width: 55px;\n}\nion-content .bottom-content .doctor-info ion-label .dr-name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n  white-space: normal;\n}\nion-content .bottom-content .doctor-info ion-label .shop-name {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  white-space: normal;\n  color: var(--ion-color-primary-light);\n}\nion-content .bottom-content .doctor-info ion-label {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n  white-space: normal;\n}\nion-content .bottom-content .doctor-info .km-txt {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n  height: 30px;\n  width: 76px;\n  border: 1px solid var(--ion-color-primary-dark);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 19px;\n}\nion-content .bottom-content .other-content ion-label {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n  white-space: normal;\n}\nion-content .bottom-content .other-content ion-icon {\n  font-size: 19px;\n}\nion-content .bottom-content .other-content ion-avatar {\n  height: 55px;\n  width: 55px;\n}\nion-content .bottom-content .other-content ion-avatar img {\n  height: 55px;\n  width: 55px;\n}\nion-content .bottom-content ion-button {\n  margin: 0;\n  height: 43px;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-family: \"sfUi-m\";\n  --border-radius: 0 0 5px 5px;\n  --box-shadow: none;\n}\nion-content .avatar {\n  display: inline-block;\n  position: relative;\n  background: var(--ion-color-white);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 50%;\n}\nion-content .avatar img {\n  box-shadow: 0 0 0 5px var(--ion-color-red), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .avatar::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 12.6px solid var(--ion-color-red);\n  margin-left: -7px;\n  -webkit-filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.1));\n}\nion-content .open img {\n  box-shadow: 0 0 0 5px var(--ion-color-white), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .open::after {\n  content: \"\";\n  border-top: 12.6px solid var(--ion-color-white);\n}\nion-content .selected img {\n  box-shadow: 0 0 0 5px var(--ion-color-primary), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .selected::after {\n  content: \"\";\n  border-top: 12.6px solid var(--ion-color-primary);\n}\nion-content .avatar_round img {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FERUk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBUjtBREtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRlI7QURHUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0RaO0FERVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUtBLDRCQUFBO0FDSmhCO0FEQWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFcEI7QURHZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDRHBCO0FER2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQ0RwQjtBRElZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBRE1ZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0poQjtBRE1ZO0VBQ0ksZUFBQTtBQ0poQjtBRE1ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNKaEI7QURLZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0hwQjtBRE9RO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFFJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQ05SO0FET1E7RUFDSSw0RUFBQTtBQ0xaO0FET1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSwyREFBQTtBQ0xaO0FEU1E7RUFDSSw4RUFBQTtBQ1BaO0FEU1E7RUFDSSxXQUFBO0VBQ0EsK0NBQUE7QUNQWjtBRFdRO0VBQ0ksZ0ZBQUE7QUNUWjtBRFdRO0VBQ0ksV0FBQTtFQUNBLGlEQUFBO0FDVFo7QURhUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWNraW5nL3RyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhZ20tbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJvdHRvbS1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgIC5kb2N0b3ItaW5mbyB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgLmRyLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2hvcC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5rbS10eHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzZweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3RoZXItY29udGVudCB7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGhlaWdodDogNDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHZhcigtLWlvbi1jb2xvci1yZWQpLCAwIDNweCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogKDdweCAqIDEuOCkgc29saWQgdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5vcGVuIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAwIDNweCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICg3cHggKiAxLjgpIHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdGVkIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIDAgM3B4IDVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogKDdweCAqIDEuOCkgc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hdmF0YXJfcm91bmQge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWNvbnRlbnQgYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweDtcbiAgd2lkdGg6IDkxJTtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAuZG9jdG9yLWluZm8ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5kb2N0b3ItaW5mbyBpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAuZG9jdG9yLWluZm8gaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5kb2N0b3ItaW5mbyBpb24tbGFiZWwgLmRyLW5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLmRvY3Rvci1pbmZvIGlvbi1sYWJlbCAuc2hvcC1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAuZG9jdG9yLWluZm8gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAuZG9jdG9yLWluZm8gLmttLXR4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNzZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5vdGhlci1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLm90aGVyLWNvbnRlbnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLm90aGVyLWNvbnRlbnQgaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDU1cHg7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLm90aGVyLWNvbnRlbnQgaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5hdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5hdmF0YXIgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHZhcigtLWlvbi1jb2xvci1yZWQpLCAwIDNweCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1jb250ZW50IC5hdmF0YXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEyLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcmVkKTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xufVxuaW9uLWNvbnRlbnQgLm9wZW4gaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHZhcigtLWlvbi1jb2xvci13aGl0ZSksIDAgM3B4IDVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLWNvbnRlbnQgLm9wZW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMTIuNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5pb24tY29udGVudCAuc2VsZWN0ZWQgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgMCAzcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tY29udGVudCAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMTIuNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5hdmF0YXJfcm91bmQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tracking/tracking.page.ts ***!
    \*************************************************/

  /*! exports provided: TrackingPage */

  /***/
  function srcAppPagesTrackingTrackingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingPage", function () {
      return TrackingPage;
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
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/tracking.service */
    "./src/app/services/tracking.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var TrackingPage = /*#__PURE__*/function () {
      function TrackingPage(util, alertController, authSVC, trackingSVC, http) {
        _classCallCheck(this, TrackingPage);

        this.util = util;
        this.alertController = alertController;
        this.authSVC = authSVC;
        this.trackingSVC = trackingSVC;
        this.http = http;
        this.zoom = 12;
        this.lat = 28.6532358;
        this.lng = -106.0991318;
        this.styles = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["mapStyle"];
        this.markers = [{
          img: this.authSVC.usersign.photoURL,
          select: true,
          isOpen: true,
          lat: 28.6532358,
          lng: -106.0991318
        }];
      }

      _createClass(TrackingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(sessionStorage.getItem('user'));
          this.getLocationUser(this.user);
        }
        /*  async onMarkerSelect(marker: any) {
           if (marker.isOpen) {
             await this.markers.forEach((element) => {
               element.select = false;
             });
             marker.select = await true;
           }
         } */

      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      message: 'Do you want to share your courrent location?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Share!',
                        handler: function handler() {
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getLocationUser",
        value: function getLocationUser(user) {
          var _this = this;

          /*    this.gps = false;
             this.disabled = false; */
          this.trackingSVC.getLocation(user).once('value').then(function (resp) {
            console.log(resp.val());
            var lat = resp.val().lat;
            var _long = resp.val().lng;
            _this.lat = lat;
            _this.lng = _long;

            _this.getLocation(lat, _long);
            /*   let pos : point = {
                lat: lat,
                lng: long
              }
                 
              this.points.push(pos); */

            /*    this.userlat = lat;
               this.userlng = long;
                         this.currentPos.lat = lat;
               this.currentPos.lng = long */

            /*   if (this.points.length>1){
                this.points[1] = pos;
                       }else if (this.points.length==1){
                this.points.push(pos);
                       }else{
                
                this.points.push(pos);
              } */

            /*   const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
            this.http.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`
             ).subscribe((e:any) => {
               
                 console.log(e);
                 //Swal.close();
                 
               
             }); */

          });
        }
      }, {
        key: "getLocation",
        value: function getLocation(lat, _long2) {
          var _this2 = this;

          /*  const lat = 45.45121212;
           const long = 45.451564; */
          var TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
          this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat, ",").concat(_long2, "&key=").concat(TU_LLAVE), {}, {}).then(function (data) {
            var l = JSON.parse(data.data);
            _this2.locatio = l.results[0].formatted_address;
            /* this.backgroundGeolocation.finish();  */
          });
        }
      }]);

      return TrackingPage;
    }();

    TrackingPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_tracking_service__WEBPACK_IMPORTED_MODULE_6__["TrackingService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("search", {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TrackingPage.prototype, "search", void 0);
    TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-tracking",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tracking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tracking.page.scss */
      "./src/app/pages/tracking/tracking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_tracking_service__WEBPACK_IMPORTED_MODULE_6__["TrackingService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])], TrackingPage);
    /***/
  },

  /***/
  "./src/app/services/tracking.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/tracking.service.ts ***!
    \**********************************************/

  /*! exports provided: TrackingService */

  /***/
  function srcAppServicesTrackingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingService", function () {
      return TrackingService;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");

    var TrackingService = /*#__PURE__*/function () {
      function TrackingService() {
        _classCallCheck(this, TrackingService);
      }

      _createClass(TrackingService, [{
        key: "updateLocation",
        value: function updateLocation(lat, lng, user) {
          var location = {
            lat: lat,
            lng: lng,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp.fromDate(new Date())
          };
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Current').set(location);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Historic').push(location);
        }
      }, {
        key: "getLocation",
        value: function getLocation(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Current');
        }
      }, {
        key: "getHistoric",
        value: function getHistoric(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Historic');
        }
      }]);

      return TrackingService;
    }();

    TrackingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TrackingService);
    /***/
  }
}]);
//# sourceMappingURL=pages-tracking-tracking-module-es5.js.map