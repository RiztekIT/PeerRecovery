function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-users-list-call-users-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCallUsersListCallUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Video call</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-bottom\">\n    <div class=\"today_div\">\n        <ion-fab-button *ngIf=\"llamando\" (click)=\"resVideoCall()\" d class=\"call-green\">\n            <!-- <ion-fab-button (click)=\"openCam()\" d class=\"call-green\"> -->\n            <ion-icon name=\"call-outline\"></ion-icon>\n        </ion-fab-button>\n        <!--         <ion-item *ngFor=\"let item of users\" lines=\"full\" (click)=\"startCamera()\" mode=\"md\"> -->\n        <ion-item *ngFor=\"let item of Users\" lines=\"full\" (click)=\"openCall(item)\" mode=\"md\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item?.photoUrl\">\n            </ion-avatar>\n            <ion-label>\n                <h3 class=\"name\">{{item?.displayName}}</h3>\n                <p class=\"detail\">{{item?.email}}</p>\n            </ion-label>\n        </ion-item>\n\n\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CallUsersListPageRoutingModule */

  /***/
  function srcAppPagesCallUsersListCallUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPageRoutingModule", function () {
      return CallUsersListPageRoutingModule;
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


    var _call_users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./call-users-list.page */
    "./src/app/pages/call-users-list/call-users-list.page.ts");

    var routes = [{
      path: '',
      component: _call_users_list_page__WEBPACK_IMPORTED_MODULE_3__["CallUsersListPage"]
    }];

    var CallUsersListPageRoutingModule = function CallUsersListPageRoutingModule() {
      _classCallCheck(this, CallUsersListPageRoutingModule);
    };

    CallUsersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallUsersListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CallUsersListPageModule */

  /***/
  function srcAppPagesCallUsersListCallUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPageModule", function () {
      return CallUsersListPageModule;
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


    var _call_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-users-list-routing.module */
    "./src/app/pages/call-users-list/call-users-list-routing.module.ts");
    /* harmony import */


    var _call_users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./call-users-list.page */
    "./src/app/pages/call-users-list/call-users-list.page.ts");

    var CallUsersListPageModule = function CallUsersListPageModule() {
      _classCallCheck(this, CallUsersListPageModule);
    };

    CallUsersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _call_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsersListPageRoutingModule"]],
      declarations: [_call_users_list_page__WEBPACK_IMPORTED_MODULE_6__["CallUsersListPage"]]
    })], CallUsersListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCallUsersListCallUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FsbC11c2Vycy1saXN0L2NhbGwtdXNlcnMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbGwtdXNlcnMtbGlzdC9jYWxsLXVzZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjtBREVJO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxsLXVzZXJzLWxpc3QvY2FsbC11c2Vycy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/call-users-list/call-users-list.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/call-users-list/call-users-list.page.ts ***!
    \***************************************************************/

  /*! exports provided: snapshotToArray, CallUsersListPage */

  /***/
  function srcAppPagesCallUsersListCallUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsersListPage", function () {
      return CallUsersListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/ngx/index.js");
    /* harmony import */


    var src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/videocall.service */
    "./src/app/services/videocall.service.ts");

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };

    var CallUsersListPage = /*#__PURE__*/function () {
      function CallUsersListPage(nav, router, firebaseAuthService, chatService, cameraPreview, videocallSVC) {
        _classCallCheck(this, CallUsersListPage);

        this.nav = nav;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.chatService = chatService;
        this.cameraPreview = cameraPreview;
        this.videocallSVC = videocallSVC;
        this.users = [];
        this.Users = [];
        this.llamando = false;
      }

      _createClass(CallUsersListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.getUsers();
          this.user = JSON.parse(sessionStorage.getItem('user'));
          this.getUser();
          this.getCalls();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', function (resp) {
            //console.log(resp);
            var users = snapshotToArray(resp);
            console.log(users);
            _this.users = users;
            _this.users = _this.users.filter(function (x) {
              return x.uid != _this.firebaseAuthService.usersign.uid;
            });
          });
        }
      }, {
        key: "openCall",
        value: function openCall(user) {
          var data = {
            user: this.user,
            usercall: user,
            type: 'caller'
          };
          var navigationExtras = {
            queryParams: {
              special: JSON.stringify(data)
            }
          };
          console.log(data, 'DATA');
          this.videocallSVC.newcall(this.user, user);
          this.router.navigate(['call'], navigationExtras); //this.router.navigate(['call']);
        }
        /*  */

      }, {
        key: "getUser",
        value: function getUser() {
          var _this2 = this;

          /* console.log(this.user); */
          this.videocallSVC.getUsers().on('value', function (resp) {
            _this2.Users = [];
            var c = 0;
            resp.forEach(function (childSnapshot) {
              var item = childSnapshot.val();
              item.key = childSnapshot.key;
              /* item.selected = true; */

              if (item.key != _this2.user.uid) {
                console.log(item);
                console.log(_this2.user);

                _this2.videocallSVC.getRel(_this2.user, item.key).once('value', function (resp) {
                  console.log(resp);
                  console.log(resp.val());
                  item.selected = resp.val();

                  if (resp.val()) {
                    _this2.Users.push(item);
                  }
                });
              }
            }); //this.selected = this.Users

            console.log(_this2.Users);
          });
        }
      }, {
        key: "getCalls",
        value: function getCalls() {
          var _this3 = this;

          this.videocallSVC.getCalls(this.user).on('value', function (calls) {
            console.log(calls.val());
            calls.forEach(function (childSnapshot) {
              console.log(childSnapshot.key);

              _this3.videocallSVC.getCall(childSnapshot.key).on('value', function (call) {
                console.log(call.val());

                if (call.val().state) {
                  _this3.llamando = true;
                  _this3.keycall = call.val().channel;
                  var keys = Object.keys(call.val().Members);

                  for (var i = 0; i < keys.length; i++) {
                    if (keys[i] != _this3.user.uid) {
                      _this3.videocallSVC.getUser(keys[i]).once('value', function (user) {
                        _this3.usercall = user.val();
                        console.log(_this3.usercall);
                      });
                    }
                  }
                } else {
                  _this3.llamando = false;
                }
              });
            });
          });
        }
      }, {
        key: "resVideoCall",
        value: function resVideoCall() {
          var data = {
            user: this.user,
            usercall: this.usercall,
            type: 'answer'
          };
          var navigationExtras = {
            queryParams: {
              special: JSON.stringify(data)
            }
          };
          this.videocallSVC.keycall = this.keycall;
          this.videocallSVC.answerccall(this.user, this.keycall);
          console.log(data, 'DATA');
          this.router.navigate(['call'], navigationExtras); //this.router.navigate(['call']);
        }
      }]);

      return CallUsersListPage;
    }();

    CallUsersListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
      }, {
        type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__["CameraPreview"]
      }, {
        type: src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_7__["VideocallService"]
      }];
    };

    CallUsersListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-call-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-users-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call-users-list/call-users-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-users-list.page.scss */
      "./src/app/pages/call-users-list/call-users-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__["CameraPreview"], src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_7__["VideocallService"]])], CallUsersListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-call-users-list-call-users-list-module-es5.js.map