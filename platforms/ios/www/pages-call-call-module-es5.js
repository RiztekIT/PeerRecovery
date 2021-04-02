function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-call-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCallCallPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <!--<agm-map [styles]=\"styles\" [disableDefaultUI]=\"false\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"false\">\n        <agm-overlay *ngFor=\"let item of markers\" [latitude]=\"item.lat\" [longitude]=\"item.lng\">\n            <div *ngIf=\"item.isOpen == true\" (click)=\"onMarkerSelect(item)\" [class.selected]=\"item.select\" class=\"open avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div>\n\n            <div *ngIf=\"item.isOpen == false\" class=\"avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div>\n        </agm-overlay>\n    </agm-map>-->\n\n    <ion-buttons>\n        <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n\n\n    <div class=\"bottom-content\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-fab-button color=\"success\" class=\"call-green\">\n                        <ion-icon name=\"call-outline\"></ion-icon>\n                    </ion-fab-button>\n                </ion-col>\n                <ion-col>\n                    <ion-avatar class=\"avatar\">\n                        <img [src]=\"this.callData.photoUrl \">\n                    </ion-avatar>\n                </ion-col>\n                <ion-col>\n                    <ion-fab-button color=\"danger\" class=\"call-red\">\n                        <ion-icon name=\"call-outline\"></ion-icon>\n                    </ion-fab-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/call/call-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/call/call-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CallPageRoutingModule */

  /***/
  function srcAppPagesCallCallRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallPageRoutingModule", function () {
      return CallPageRoutingModule;
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


    var _call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./call.page */
    "./src/app/pages/call/call.page.ts");

    var routes = [{
      path: '',
      component: _call_page__WEBPACK_IMPORTED_MODULE_3__["CallPage"]
    }];

    var CallPageRoutingModule = function CallPageRoutingModule() {
      _classCallCheck(this, CallPageRoutingModule);
    };

    CallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/call/call.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/call/call.module.ts ***!
    \*******************************************/

  /*! exports provided: CallPageModule */

  /***/
  function srcAppPagesCallCallModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallPageModule", function () {
      return CallPageModule;
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


    var _call_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-routing.module */
    "./src/app/pages/call/call-routing.module.ts");
    /* harmony import */


    var _call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./call.page */
    "./src/app/pages/call/call.page.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var agm_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! agm-overlays */
    "./node_modules/agm-overlays/fesm2015/agm-overlays.js");

    var CallPageModule = function CallPageModule() {
      _classCallCheck(this, CallPageModule);
    };

    CallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], agm_overlays__WEBPACK_IMPORTED_MODULE_8__["AgmOverlays"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: ''
      }), _call_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallPageRoutingModule"]],
      declarations: [_call_page__WEBPACK_IMPORTED_MODULE_6__["CallPage"]]
    })], CallPageModule);
    /***/
  },

  /***/
  "./src/app/pages/call/call.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/call/call.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCallCallPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n.call-red {\n  float: left;\n  margin-top: 25px;\n}\n.call-green {\n  float: right;\n  margin-top: 25px;\n}\n.avatar {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-avatar {\n  height: 80px;\n  width: 80px;\n  /* margin-right: 0px !important;*/\n}\nion-avatar img {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-white);\n}\n#background-content {\n  background-color: red !important;\n}\nion-content .bottom-content {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin: 16px;\n  width: 91%;\n}\nion-content {\n  --background: url(\"https://i1.wp.com/sandsofsiwa.com/wp-content/uploads/2018/08/happiness.jpg\") 0 0/115% 100% no-repeat;\n}\n.pt-5 {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0FDQVI7QURFSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0FSO0FESUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBT0EsaUNBQUE7QUNQSjtBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQ1I7QURJQTtFQUNJLGdDQUFBO0FDREo7QURLSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FETUE7RUFDSSx1SEFBQTtBQ0hKO0FETUE7RUFDSSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5jYWxsLXJlZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhbGwtZ3JlZW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgfVxuICAgIC8qIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7Ki9cbn1cblxuI2JhY2tncm91bmQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAuYm90dG9tLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaTEud3AuY29tL3NhbmRzb2ZzaXdhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9oYXBwaW5lc3MuanBnXCIpIDAgMC8xMTUlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4ucHQtNSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhbGwtcmVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYWxsLWdyZWVuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICAvKiBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50OyovXG59XG5pb24tYXZhdGFyIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cblxuI2JhY2tncm91bmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweDtcbiAgd2lkdGg6IDkxJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaTEud3AuY29tL3NhbmRzb2ZzaXdhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9oYXBwaW5lc3MuanBnXCIpIDAgMC8xMTUlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/call/call.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/call/call.page.ts ***!
    \*****************************************/

  /*! exports provided: CallPage */

  /***/
  function srcAppPagesCallCallPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallPage", function () {
      return CallPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");

    var CallPage = /*#__PURE__*/function () {
      function CallPage(route, router, camera, util, alertController, authSVC) {
        var _this = this;

        _classCallCheck(this, CallPage);

        this.route = route;
        this.router = router;
        this.camera = camera;
        this.util = util;
        this.alertController = alertController;
        this.authSVC = authSVC;
        this.zoom = 12;
        this.lat = 28.6532358;
        this.lng = -106.0991318;
        this.styles = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["mapStyle"];
        this.markers = [{
          img: this.authSVC.usersign.photoURL,
          select: true,
          isOpen: true,
          lat: 28.6532358,
          lng: -106.0991318
        }];
        this.route.queryParams.subscribe(function (params) {
          if (params && params.special) {
            _this.callData = JSON.parse(params.special);
            console.log(_this.callData);
          }
        });
        this.openCamera();
      }

      _createClass(CallPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openCamera",
        value: function openCamera() {
          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
          }, function (err) {// Handle error
          });
        }
      }, {
        key: "onMarkerSelect",
        value: function onMarkerSelect(marker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!marker.isOpen) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return this.markers.forEach(function (element) {
                      element.select = false;
                    });

                  case 3:
                    _context.next = 5;
                    return true;

                  case 5:
                    marker.select = _context.sent;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
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
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CallPage;
    }();

    CallPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("search", {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CallPage.prototype, "search", void 0);
    CallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-call",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call.page.scss */
      "./src/app/pages/call/call.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], CallPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-call-call-module-es5.js.map