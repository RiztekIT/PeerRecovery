function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-starter-starter-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStarterStarterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div class=\"main-container\">\n        <div class=\"bottom-container padding-left-22 padding-right-22\">\n            <img class=\"app-logo\" src=\"../../../assets/imgs/app-icon.png\">\n            <h2 class=\"title margin-top-22\">A Digital Solution For Substance Use Disorder</h2>\n            <div class=\"social-btns margin-top-19\">\n                <ion-button (click)=\"signinGoogle()\">\n                    <ion-icon src=\"../../../assets/imgs/appicons/google.svg\"></ion-icon> Google</ion-button>\n                <ion-button>\n                    <ion-icon src=\"../../../assets/imgs/appicons/facebook.svg\"></ion-icon> Facebook</ion-button>\n            </div>\n            <!-- <p class=\"sign-up-line margin-top-30\">Already have an account? <a (click)=\"goToSignIn()\">Sign in</a></p> -->\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/starter/starter-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/starter/starter-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: StarterPageRoutingModule */

  /***/
  function srcAppPagesStarterStarterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPageRoutingModule", function () {
      return StarterPageRoutingModule;
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


    var _starter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./starter.page */
    "./src/app/pages/starter/starter.page.ts");

    var routes = [{
      path: '',
      component: _starter_page__WEBPACK_IMPORTED_MODULE_3__["StarterPage"]
    }];

    var StarterPageRoutingModule = function StarterPageRoutingModule() {
      _classCallCheck(this, StarterPageRoutingModule);
    };

    StarterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StarterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/starter/starter.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/starter/starter.module.ts ***!
    \*************************************************/

  /*! exports provided: StarterPageModule */

  /***/
  function srcAppPagesStarterStarterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPageModule", function () {
      return StarterPageModule;
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


    var _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./starter-routing.module */
    "./src/app/pages/starter/starter-routing.module.ts");
    /* harmony import */


    var _starter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./starter.page */
    "./src/app/pages/starter/starter.page.ts");

    var StarterPageModule = function StarterPageModule() {
      _classCallCheck(this, StarterPageModule);
    };

    StarterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _starter_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarterPageRoutingModule"]],
      declarations: [_starter_page__WEBPACK_IMPORTED_MODULE_6__["StarterPage"]]
    })], StarterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/starter/starter.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/starter/starter.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStarterStarterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('starter_back.png') top/cover fixed;\n}\nion-content .main-container {\n  height: 100%;\n  width: 100%;\n  background: var(--ion-blackWhite-gradients);\n}\nion-content .main-container .bottom-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 68%;\n  transform: translateY(-50%);\n}\nion-content .main-container .bottom-container .app-logo {\n  width: 99px;\n  height: 108px;\n}\nion-content .main-container .bottom-container .title {\n  font-size: 22px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-b\";\n}\nion-content .main-container .bottom-container .social-btns {\n  display: flex;\n  justify-content: space-between;\n}\nion-content .main-container .bottom-container .social-btns ion-button {\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 46%;\n  height: 44px;\n  font-size: 16px;\n  font-family: \"sfUi-b\";\n  text-transform: capitalize;\n}\nion-content .main-container .bottom-container .social-btns ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 16px;\n}\nion-content .main-container .bottom-container .sign-up-line {\n  font-size: 14px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-r\";\n  text-align: center;\n}\nion-content .main-container .bottom-container .sign-up-line a {\n  font-family: \"sfUi-b\";\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhcnRlci9zdGFydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFEQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUNFUjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0loQjtBREZZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNJaEI7QURGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0loQjtBREhnQjtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDS3BCO0FESm9CO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTXhCO0FERlk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSWhCO0FESGdCO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0ZXIvc3RhcnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19pbWdzL3N0YXJ0ZXJfYmFjay5wbmcnKSB0b3AvY292ZXIgZml4ZWQ7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmxhY2tXaGl0ZS1ncmFkaWVudHMpO1xyXG4gICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA2OCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgLmFwcC1sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5OXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktYic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1idG5zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1iJztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2lnbi11cC1saW5lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLWInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iYWNrX2ltZ3Mvc3RhcnRlcl9iYWNrLnBuZ1wiKSB0b3AvY292ZXIgZml4ZWQ7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmxhY2tXaGl0ZS1ncmFkaWVudHMpO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA2OCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuYXBwLWxvZ28ge1xuICB3aWR0aDogOTlweDtcbiAgaGVpZ2h0OiAxMDhweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJzZlVpLWJcIjtcbn1cbmlvbi1jb250ZW50IC5tYWluLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuc29jaWFsLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNvY2lhbC1idG5zIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWNvbnRlbnQgLm1haW4tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5zb2NpYWwtYnRucyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNpZ24tdXAtbGluZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubWFpbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLnNpZ24tdXAtbGluZSBhIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1iXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/starter/starter.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/starter/starter.page.ts ***!
    \***********************************************/

  /*! exports provided: StarterPage */

  /***/
  function srcAppPagesStarterStarterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarterPage", function () {
      return StarterPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StarterPage = /*#__PURE__*/function () {
      function StarterPage(util, authSVC, router) {
        _classCallCheck(this, StarterPage);

        this.util = util;
        this.authSVC = authSVC;
        this.router = router;
      }

      _createClass(StarterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obtenerTokenGoogle();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.util.menuCtrl.enable(false);
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.util.navCtrl.navigateForward('signIn');
        }
      }, {
        key: "signinGoogle",
        value: function signinGoogle() {
          var _this = this;

          this.authSVC.loginGoogle().then(function (res) {
            console.log(res);
            _this.authSVC.user = res;
          });
        }
      }, {
        key: "obtenerTokenGoogle",
        value: function obtenerTokenGoogle() {
          var _this2 = this;

          this.authSVC.obtenerToken().then(function (result) {
            console.log(result);

            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential; // ...

              console.log(token);
            } // The signed-in user info.


            if (result.user) {
              console.log(result.user);
              _this2.authSVC.user = result.user.email;
              _this2.authSVC.usersign = result.user;
              _this2.user = {
                displayName: result.user.displayName,
                email: result.user.email,
                photoUrl: result.user.photoURL,
                type: 'User',
                password: '',
                created: new Date(),
                updated: new Date(),
                uid: result.user.uid
              };

              _this2.authSVC.addUser(_this2.user);
            }

            console.log(_this2.authSVC.usersign);

            if (_this2.authSVC.user) {
              sessionStorage.setItem('user', JSON.stringify(_this2.authSVC.usersign)); //this.util.navCtrl.navigateForward("onBoarding");

              _this2.router.navigate(['/onBoarding']);
            } else {
              _this2.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
              _this2.authSVC.user = _this2.authSVC.usersign.email;

              if (_this2.authSVC.user) {
                //this.util.navCtrl.navigateForward("onBoarding");
                _this2.router.navigate(['/onBoarding']);
              }
            }
          });
        }
      }]);

      return StarterPage;
    }();

    StarterPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    StarterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-starter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/starter/starter.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starter.page.scss */
      "./src/app/pages/starter/starter.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], StarterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-starter-starter-module-es5.js.map