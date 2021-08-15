(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-call-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <!--     <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons> -->\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Video call</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!--   <ion-buttons>\n        <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n\n    <div>\n\n        <h1>\n            Video Call\n        </h1>\n\n    </div> -->\n\n    <!-- <div id=\"video\"></div> -->\n\n    <ion-row>\n        <ion-col>\n            <h3>{{user.displayName}}</h3>\n        </ion-col>\n        <ion-col>\n            <h3>\n                {{usercall.displayName}}\n            </h3>\n        </ion-col>\n\n    </ion-row>\n\n    <div style=\"position: relative; width: 100%; height: 100%;\">\n\n        <div style=\"border: solid; width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;\">\n            <video style=\"width: 100%; height: 100%;\" id=\"device\" controls autoplay #remote></video>\n\n        </div>\n        <div style=\"border: solid; width: 30%; position: absolute; left: 65%; top: 10%;\">\n            <video style=\"width: 100%; height: 100%;\" id=\"me\" controls autoplay muted #me></video>\n        </div>\n    </div>\n    <!-- \n      <ion-row>\n        <video style=\"width: 100%; max-height: 350px;\" id=\"me\" controls autoplay #me></video>\n    </ion-row> -->\n\n\n\n    <hr>\n\n    <ion-row>\n\n    </ion-row>\n    <!--   <ion-row>\n        <video style=\"width: 100%; max-width: 350px;\" id=\"device\" controls autoplay #remote></video>\n    </ion-row> -->\n\n\n    <div class=\"bottom-content\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-fab-button (click)=\"reconnect()\" d class=\"call-green\">\n                        <!-- <ion-fab-button (click)=\"openCam()\" d class=\"call-green\"> -->\n                        <ion-icon name=\"call-outline\"></ion-icon>\n                    </ion-fab-button>\n                    <!-- <ion-fab-button (click)=\"reconnect()\" d class=\"call-green\"> -->\n                    <!--    <ion-fab-button (click)=\"startCamera()\" d class=\"call-green\">\n                        <ion-icon name=\"call-outline\"></ion-icon>\n                    </ion-fab-button> -->\n                </ion-col>\n                <ion-col>\n                    <!--        <ion-avatar class=\"avatar\">\n                        <img [src]=\"this.callData.photoUrl \">\n                    </ion-avatar> -->\n                </ion-col>\n                <ion-col>\n                    <ion-fab-button (click)=\"hangup()\" color=\"danger\" class=\"call-red\">\n                        <ion-icon name=\"call-outline\"></ion-icon>\n                    </ion-fab-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/call/call-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/call/call-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CallPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallPageRoutingModule", function() { return CallPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _call_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call.page */ "./src/app/pages/call/call.page.ts");




const routes = [
    {
        path: '',
        component: _call_page__WEBPACK_IMPORTED_MODULE_3__["CallPage"]
    }
];
let CallPageRoutingModule = class CallPageRoutingModule {
};
CallPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/call/call.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/call/call.module.ts ***!
  \*******************************************/
/*! exports provided: CallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallPageModule", function() { return CallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _call_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-routing.module */ "./src/app/pages/call/call-routing.module.ts");
/* harmony import */ var _call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call.page */ "./src/app/pages/call/call.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-overlays */ "./node_modules/agm-overlays/fesm2015/agm-overlays.js");









let CallPageModule = class CallPageModule {
};
CallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            agm_overlays__WEBPACK_IMPORTED_MODULE_8__["AgmOverlays"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE'
            }),
            _call_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallPageRoutingModule"]
        ],
        declarations: [_call_page__WEBPACK_IMPORTED_MODULE_6__["CallPage"]]
    })
], CallPageModule);



/***/ }),

/***/ "./src/app/pages/call/call.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/call/call.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n.call-red {\n  float: left;\n  margin-top: 25px;\n}\n.call-green {\n  float: right;\n  margin-top: 25px;\n}\n.avatar {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-avatar {\n  height: 80px;\n  width: 80px;\n  /* margin-right: 0px !important;*/\n}\nion-avatar img {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-white);\n}\n#background-content {\n  background-color: red !important;\n}\nion-content .bottom-content {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin: 16px;\n  width: 91%;\n}\n/* ion-content {\n    --background: url(\"https://i1.wp.com/sandsofsiwa.com/wp-content/uploads/2018/08/happiness.jpg\") 0 0/115% 100% no-repeat;\n}\n */\n.pt-5 {\n  padding-top: 10px;\n}\nhtml,\nbody,\nion-app,\nion-content {\n  background-color: transparent;\n}\n.video {\n  background-color: aqua;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: 16px;\n  width: 91%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0FDQVI7QURFSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0FSO0FESUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBT0EsaUNBQUE7QUNQSjtBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQ1I7QURJQTtFQUNJLGdDQUFBO0FDREo7QURLSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FET0E7OztFQUFBO0FBS0E7RUFDSSxpQkFBQTtBQ0xKO0FEUUE7Ozs7RUFJSSw2QkFBQTtBQ0xKO0FEUUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5jYWxsLXJlZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhbGwtZ3JlZW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgfVxuICAgIC8qIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7Ki9cbn1cblxuI2JhY2tncm91bmQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAuYm90dG9tLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICB9XG59XG5cblxuLyogaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pMS53cC5jb20vc2FuZHNvZnNpd2EuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4L2hhcHBpbmVzcy5qcGdcIikgMCAwLzExNSUgMTAwJSBuby1yZXBlYXQ7XG59XG4gKi9cblxuLnB0LTUge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5odG1sLFxuYm9keSxcbmlvbi1hcHAsXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi52aWRlbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTZweDtcbiAgICB3aWR0aDogOTElO1xufSIsImlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYWxsLXJlZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FsbC1ncmVlbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgLyogbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDsqL1xufVxuaW9uLWF2YXRhciBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG5cbiNiYWNrZ3JvdW5kLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHg7XG4gIHdpZHRoOiA5MSU7XG59XG5cbi8qIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaTEud3AuY29tL3NhbmRzb2ZzaXdhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9oYXBwaW5lc3MuanBnXCIpIDAgMC8xMTUlIDEwMCUgbm8tcmVwZWF0O1xufVxuICovXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5odG1sLFxuYm9keSxcbmlvbi1hcHAsXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udmlkZW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweDtcbiAgd2lkdGg6IDkxJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/call/call.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/call/call.page.ts ***!
  \*****************************************/
/*! exports provided: CallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallPage", function() { return CallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");
/* harmony import */ var src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/videocall.service */ "./src/app/services/videocall.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");









//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';





let CallPage = class CallPage {
    constructor(route, router, camera, util, alertController, authSVC, cameraPreview, videocallSVC, afDb, androidPermissions, 
    /* private videoCapturePlus: VideoCapturePlus, */
    zoomService) {
        this.route = route;
        this.router = router;
        this.camera = camera;
        this.util = util;
        this.alertController = alertController;
        this.authSVC = authSVC;
        this.cameraPreview = cameraPreview;
        this.videocallSVC = videocallSVC;
        this.afDb = afDb;
        this.androidPermissions = androidPermissions;
        this.zoomService = zoomService;
        this.SDK_KEY = "xqvI8YnZzEcm2wr4U0DYUl7eB90sPD2iiBjQ";
        this.SDK_SECRET = "iQWxlbFuiEzn4zIJjP1xK1rAYS07uMmgTCiN";
        this.zoom = 12;
        this.lat = 28.6532358;
        this.lng = -106.0991318;
        this.styles = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["mapStyle"];
        this.markers = [
            {
                img: this.authSVC.usersign.photoURL,
                select: true,
                isOpen: true,
                lat: 28.6532358,
                lng: -106.0991318,
            },
        ];
        this.callActive = false;
        console.log('ENTRO');
        this.route.queryParams.subscribe(params => {
            console.log(params, 'PARAMS');
            if (params && params.special) {
                this.callData = JSON.parse(params.special);
                this.user = this.callData.user;
                this.usercall = this.callData.usercall;
                this.data = this.callData;
            }
        });
        //this.openCamera();
    }
    ngOnInit() {
        //this.initZoom();
        console.log(this.data);
        this.user = JSON.parse(sessionStorage.getItem('user'));
        /*   if (this.data.type=='caller'){
      
            this.getCall();
          }
          else if (this.data.type=='answer'){
            this.setupWebRtc();
            //this.showRemote();
          } */
        this.status = 'Calling';
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (result.hasPermission) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(res => {
                    if (res.hasPermission) {
                        this.getCall();
                    }
                    else {
                        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r => {
                            this.getCall();
                        });
                    }
                });
            }
            else {
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r => {
                    this.getCall();
                });
            }
        }).catch(e => {
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r => {
                this.getCall();
            });
            console.log(e, 'ERROR3');
        });
    }
    openCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log(imageData);
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
            this.img = base64Image;
        }, (err) => {
            // Handle error
        });
    }
    openCam() {
        console.log('CAMARA');
        this.openCamera();
        //this.startCamera();
    }
    onMarkerSelect(marker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (marker.isOpen) {
                yield this.markers.forEach((element) => {
                    element.select = false;
                });
                marker.select = yield true;
            }
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Do you want to share your courrent location?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Share!',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    startCamera() {
        let div = document.getElementById('');
        // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
        const cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: +div.getAttribute('width'),
            height: +div.getAttribute('heigth'),
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: false,
            alpha: 1
        };
        // picture options
        const pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
        // start camera
        this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    startVideo() {
        var opts = {
            cameraDirection: 'BACK',
            width: (window.screen.width / 2),
            height: (window.screen.height / 2),
            quality: 60,
            withFlash: false
        };
        this.cameraPreview.startRecordVideo(opts).then(res => {
            console.log(res);
        });
    }
    recordVideo() {
        /*   const options: VideoCapturePlusOptions = {
            limit: 1,
            highquality: true,
            portraitOverlay: 'assets/img/camera/overlay/portrait.png',
            landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
         } */
        /*    this.videoCapturePlus.captureVideo(options).then(mediaFile =>{
             console.log(mediaFile);
           }) */
        /* this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong')); */
    }
    //ZOOM
    //SDK KEY
    //8eNI0Df1PjUKcNWOPBPJALT4uS6tPlJqUIuW
    //SDK Secret
    //YE5ZTor7c5BQXdqz2D9SAXzq1X7K29jkHq4n
    initZoom() {
        this.zoomService.initialize(this.SDK_KEY, this.SDK_SECRET).then(success => {
            console.log(success);
            this.loginZoom();
        })
            .catch((error) => console.log(error));
    }
    joinMeeting() {
        let options = {
            "no_driving_mode": true,
            "no_invite": true,
            "no_meeting_end_message": true,
            "no_titlebar": false,
            "no_bottom_toolbar": false,
            "no_dial_in_via_phone": true,
            "no_dial_out_to_phone": true,
            "no_disconnect_audio": true,
            "no_share": true,
            "no_audio": true,
            "no_video": true,
            "no_meeting_error_message": true
        };
        let meetingNumber = '74695593469';
        let meetingPassword = 'phc5T9';
        let displayName = 'CEL PEERRCOVERY';
        this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
            .then((success) => console.log(success))
            .catch((error) => console.log(error));
    }
    initMeeting2() {
        let options = {
            "no_driving_mode": true,
            "no_invite": true,
            "no_meeting_end_message": true,
            "no_titlebar": false,
            "no_bottom_toolbar": false,
            "no_dial_in_via_phone": true,
            "no_dial_out_to_phone": true,
            "no_disconnect_audio": true,
            "no_share": true,
            "no_audio": true,
            "no_video": true,
            "no_meeting_error_message": true
        };
        let meetingNumber = '123456789';
        let displayName = 'CEL PEERRCOVERY';
        let zoomToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw';
        let zoomAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw';
        let userId = 'ivan.talamantes@live.com';
        console.log(userId);
        this.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
            .then((success) => console.log(success))
            .catch((error) => console.log(error));
    }
    loginZoom() {
        this.zoomService.login('losarcoscongregacion2020@gmail.com', 'LosArcos2020.')
            .then((success) => console.log(success))
            .catch((error) => console.log(error));
    }
    initMeeting() {
        let options = {
            "no_driving_mode": true,
            "no_invite": true,
            "no_meeting_end_message": true,
            "no_titlebar": false,
            "no_bottom_toolbar": false,
            "no_dial_in_via_phone": true,
            "no_dial_out_to_phone": true,
            "no_disconnect_audio": true,
            "no_share": true,
            "no_audio": true,
            "no_video": true,
            "no_meeting_error_message": true
        };
        this.zoomService.startInstantMeeting(options)
            .then((success) => console.log(success))
            .catch((error) => console.log(error));
    }
    /*  */
    getCall() {
        this.listener = this.videocallSVC.getCall(this.videocallSVC.keycall).once('value', call => {
            console.log(call.val());
            /* console.log(call.val().Members.val()); */
            this.call();
            let keys = Object.keys(call.val().Members);
            console.log(keys);
            console.log(call.val().Members[keys[0]]);
            console.log(call.val().Members[keys[1]]);
            if ((call.val().Members[keys[0]]) && (call.val().Members[keys[1]])) {
                /*   if (this.data.type=='caller'){
          
                    this.showRemote();
                  } */
                this.status = 'Ready';
            }
        });
    }
    call() {
        console.log('Llamando');
        this.recordedBlobs = new Array();
        this.setupWebRtc();
    }
    setupWebRtc() {
        this.senderId = this.guid();
        console.log(this.senderId);
        var channelName = "/webrtc/" + this.videocallSVC.keycall;
        console.log(channelName);
        //this.database = firebase.database().ref('Video/');
        //this.channel = firebase.database().ref(channelName).on();
        this.channel = this.afDb.list(channelName);
        this.database = firebase__WEBPACK_IMPORTED_MODULE_11__["default"].database().ref(channelName);
        this.database.on("child_added", this.readMessage.bind(this));
        try {
            this.pc = new RTCPeerConnection({
                iceServers: [
                    { urls: "stun:stun.services.mozilla.com" },
                    { urls: "stun:stun.l.google.com:19302" },
                    { urls: "stun:0.0.0.0:6200" },
                ]
            }, { optional: [] });
        }
        catch (error) {
            console.log(error);
            this.pc = new RTCPeerConnection({
                iceServers: [
                    { urls: "stun:stun.services.mozilla.com" },
                    { urls: "stun:stun.l.google.com:19302" },
                    { urls: "stun:0.0.0.0:6200" },
                ]
            }, { optional: [] });
        }
        console.log(this.pc);
        this.pc.onicecandidate = event => {
            console.log(event);
            event.candidate ? this.sendMessage(this.senderId, JSON.stringify({ ice: event.candidate })) : console.log("Sent All Ice");
        };
        this.pc.onremovestream = event => {
            console.log('Stream Ended');
        };
        this.pc.ontrack = event => (this.remote.nativeElement.srcObject = event.streams[0]); // use ontrack
        this.showMe();
        if (this.data.type == 'caller') {
            this.showRemote();
        }
    }
    readMessage(data) {
        console.log(data, 'DATA');
        console.log(data.val(), 'DATAs');
        if (!data)
            return;
        try {
            console.log(data.val().message);
            var msg = JSON.parse(data.val().message);
            let personalData = data.val().personalData;
            var sender = data.val().sender;
            if (sender != this.senderId) {
                if (msg.ice != undefined && this.pc != null) {
                    this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
                }
                else if (msg.sdp.type == "offer") {
                    this.callActive = true;
                    this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
                        .then(() => this.pc.createAnswer())
                        .then(answer => this.pc.setLocalDescription(answer))
                        .then(() => this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription })));
                }
                else if (msg.sdp.type == "answer") {
                    this.callActive = true;
                    this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    sendMessage(senderId, data) {
        var msg = this.channel.push({ sender: senderId, message: data });
        msg.remove();
    }
    ngOnDestroy() {
        /*    this.pc.close();
           let tracks = this.localStream.getTracks();
           for (let i = 0; i < tracks.length; i++) {
             tracks[i].stop();
           }
           this.callActive = false; */
    }
    guid() {
        return (this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4());
    }
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    handleDataAvailable() {
        try {
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    this.recordedBlobs.push(event.data);
                }
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    // handleStop(event) {
    //   console.log('Recorder stopped: ', event);
    //   const videoBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
    //   this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
    //  /*  const link = document.createElement('a');
    //   link.href = this.downloadUrl;
    //   link.target = '_blank'    
    //   link.click(); */
    // }
    onStopRecordingEvent() {
        try {
            console.log('onstop');
            this.mediaRecorder.onstop = (event) => {
                const videoBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' });
                this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
                /*  Swal.fire({
                   title: 'Saving Video',
                
                 })
                 Swal.showLoading() */
                this.videocallSVC.tareaCloudStorage(this.videocallSVC.keycall + '/' + this.user.uid, videoBuffer).percentageChanges().subscribe(p => {
                    let porcentaje = Math.round(p);
                    if (porcentaje == 100) {
                    }
                });
                /* const link = document.createElement('a');
            link.href = this.downloadUrl;
            link.target = '_target';
            link.setAttribute('download', 'video')
            document.body.appendChild(link)
            link.click();  */
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    startRecording(stream) {
        let options = { mimeType: 'video/webm' };
        this.recordedBlobs = [];
        try {
            this.mediaRecorder = new MediaRecorder(stream);
        }
        catch (e0) {
            console.log('Try different mimeType', e0);
        }
        console.log('Created MediaRecorder', this.mediaRecorder, 'with options');
        //this.mediaRecorder.onstop = this.handleStop;
        //this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        //this.stopRecording()
        this.handleDataAvailable();
        this.onStopRecordingEvent();
        this.mediaRecorder.start(100); // collect 100ms of data
        console.log('MediaRecorder started', this.mediaRecorder);
    }
    stopRecording() {
        console.log('stop');
        this.mediaRecorder.stop();
        console.log('Recorded Blobs: ', this.recordedBlobs);
        //this.recordVideoElement.controls = true;
    }
    showMe() {
        console.log('showme');
        //AQUI
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            console.log(result, 'RESULT');
            navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
                /* navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream=>{ */
                console.log(stream, 'STREAM');
                this.me.nativeElement.srcObject = stream;
                this.me.nativeElement.muted = true;
                console.log(stream, 'STREAM2');
                this.pc.addStream(stream);
                console.log(stream, 'STREAM3');
                this.localStream = stream;
                console.log(this.localStream);
                this.startRecording(stream);
            }).catch(e => {
                console.log(JSON.stringify(e), 'ERROR1');
            });
        }).catch(e => {
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.MICROPHONE]);
            console.log(e, 'ERROR3');
        });
        /*
         this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        );
        
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]); */
        /*  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
           .then(stream => (this.me.nativeElement.srcObject = stream)).catch(e=>{
             console.log(e,'ERROR1');
           })
           .then(stream => {
             this.pc.addStream(stream);
             this.localStream = stream;
             console.log(this.localStream);
             this.startRecording(stream);
       
             
             
           }).catch(e=>{
             console.log(e,'ERROR2');
           }); */
    }
    showRemote() {
        console.log('Contesto');
        try {
            //this.setupWebRtc();
            this.pc.createOffer()
                .then(offer => this.pc.setLocalDescription(offer))
                .then(() => {
                this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription }));
                this.callActive = true;
            });
        }
        catch (error) {
            this.setupWebRtc();
            console.log(error);
        }
    }
    reconnect() {
        this.videocallSVC.reconnect(this.user, this.videocallSVC.keycall);
        //this.me.nativeElement.requestPictureInPicture()
        this.showRemote();
    }
    hangup() {
        //this.status = 'Hang Up'
        this.videocallSVC.hangup(this.user, this.videocallSVC.keycall);
        //this.videocallSVC.getCall(this.videocallSVC.keycall).off('value',this.listener)
        console.log('Colgaron');
        this.stopRecording();
        this.pc.close();
        let tracks = this.localStream.getTracks();
        for (let i = 0; i < tracks.length; i++) {
            tracks[i].stop();
        }
        this.callActive = false;
        this.router.navigate(['video']);
        /* this.close(); */
        //this.setupWebRtc();
    }
};
CallPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"] },
    { type: src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_10__["VideocallService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
    { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_9__["Zoom"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("search", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CallPage.prototype, "search", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("me", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CallPage.prototype, "me", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("remote", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CallPage.prototype, "remote", void 0);
CallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-call",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call.page.scss */ "./src/app/pages/call/call.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"],
        src_app_services_videocall_service__WEBPACK_IMPORTED_MODULE_10__["VideocallService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
        _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_9__["Zoom"]])
], CallPage);



/***/ })

}]);
//# sourceMappingURL=pages-call-call-module-es2015.js.map