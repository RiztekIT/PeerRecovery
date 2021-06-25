function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-with-doctor-chat-with-doctor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-with-doctor/chat-with-doctor.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-with-doctor/chat-with-doctor.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatWithDoctorChatWithDoctorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-menu-button></ion-menu-button>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">Chat with Doctor</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div class=\"banner\">\n        <div class=\"content\">\n            <h2 class=\"margin-bottom-5\">Start Chat in 3 Steps</h2>\n            <div class=\"list margin-bottom-4\">\n                <div class=\"circle margin-right-15\"></div>\n                <p>Select Specialty</p>\n            </div>\n            <div class=\"list margin-bottom-4\">\n                <div class=\"circle margin-right-15\"></div>\n                <p>Pay Fee</p>\n            </div>\n            <div class=\"list margin-bottom-4\">\n                <div class=\"circle margin-right-15\"></div>\n                <p>Start Chat</p>\n            </div>\n        </div>\n        <img class=\"banner-img padding-right-15\" src=\"../../../assets/imgs/chatWithDr_banner.svg\">\n    </div>\n\n    <div class=\"ion-padding\">\n        <h2 class=\"title\">Search Health Problem / Symptoms</h2>\n\n        <ion-input placeholder=\"Search  Cough, Fever, Cold\" class=\"search-input margin-top-18 margin-bottom-30\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n\n        <div class=\"flex-layout\">\n            <ion-card (click)=\"goToPurchaseChat()\" *ngFor=\"let i of problems\" class=\"margin-bottom-20\">\n                <img class=\"margin-right-13 margin-left-16\" [src]=\"i?.img\" alt=\"\">\n                <div class=\"content margin-right-12\">\n                    <h2 class=\"margin-top-19\">{{i?.title}}</h2>\n                    <p class=\"margin-bottom-19\"><span class=\"actual-price margin-right-9\">${{i?.actualPrice}}</span> <span class=\"sub-price\">${{i?.marketPrice}}</span></p>\n                </div>\n            </ion-card>\n        </div>\n\n    </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/chat-with-doctor/chat-with-doctor-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/chat-with-doctor/chat-with-doctor-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ChatWithDoctorPageRoutingModule */

  /***/
  function srcAppPagesChatWithDoctorChatWithDoctorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWithDoctorPageRoutingModule", function () {
      return ChatWithDoctorPageRoutingModule;
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


    var _chat_with_doctor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-with-doctor.page */
    "./src/app/pages/chat-with-doctor/chat-with-doctor.page.ts");

    var routes = [{
      path: '',
      component: _chat_with_doctor_page__WEBPACK_IMPORTED_MODULE_3__["ChatWithDoctorPage"]
    }];

    var ChatWithDoctorPageRoutingModule = function ChatWithDoctorPageRoutingModule() {
      _classCallCheck(this, ChatWithDoctorPageRoutingModule);
    };

    ChatWithDoctorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatWithDoctorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-with-doctor/chat-with-doctor.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/chat-with-doctor/chat-with-doctor.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ChatWithDoctorPageModule */

  /***/
  function srcAppPagesChatWithDoctorChatWithDoctorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWithDoctorPageModule", function () {
      return ChatWithDoctorPageModule;
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


    var _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-with-doctor-routing.module */
    "./src/app/pages/chat-with-doctor/chat-with-doctor-routing.module.ts");
    /* harmony import */


    var _chat_with_doctor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-with-doctor.page */
    "./src/app/pages/chat-with-doctor/chat-with-doctor.page.ts");

    var ChatWithDoctorPageModule = function ChatWithDoctorPageModule() {
      _classCallCheck(this, ChatWithDoctorPageModule);
    };

    ChatWithDoctorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatWithDoctorPageRoutingModule"]],
      declarations: [_chat_with_doctor_page__WEBPACK_IMPORTED_MODULE_6__["ChatWithDoctorPage"]]
    })], ChatWithDoctorPageModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-with-doctor/chat-with-doctor.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/chat-with-doctor/chat-with-doctor.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatWithDoctorChatWithDoctorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-header ion-toolbar ion-buttons ion-button ion-back-button,\nion-header ion-toolbar ion-buttons ion-button ion-menu-button {\n  color: var(--ion-color-primary-dark);\n}\nion-content .banner {\n  background: var(--ion-color-primary-dull);\n  padding-left: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .banner .content h2 {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .banner .content .list {\n  display: flex;\n  align-items: center;\n}\nion-content .banner .content .list .circle {\n  height: 7px;\n  width: 7px;\n  border-radius: 50%;\n  background: var(--ion-color-secondary);\n}\nion-content .banner .content .list p {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .banner .banner-img {\n  padding: 7px 0;\n}\nion-content .title {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .search-input {\n  width: auto;\n  height: 40px;\n  border-radius: 20px;\n  box-shadow: 0 0 3px rgba(31, 140, 237, 0.3);\n  font-size: 14px;\n  font-family: \"sfUi-bi\";\n  --padding-end: 44px;\n  --padding-start: 19px;\n  color: var(--ion-color-primary-dark);\n  --placeholder-color: var(--ion-color-primary-dark);\n}\nion-content .search-input ion-icon {\n  position: absolute;\n  right: 21px;\n}\nion-content .flex-layout {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\nion-content ion-card {\n  display: flex;\n  width: 47%;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\nion-content ion-card img {\n  min-height: 30px;\n  min-width: 30px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\nion-content ion-card .content h2 {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content ion-card .content p .actual-price {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-secondary);\n}\nion-content ion-card .content p .sub-price {\n  font-size: 12px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-light-red);\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2hhdC13aXRoLWRvY3Rvci9jaGF0LXdpdGgtZG9jdG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC13aXRoLWRvY3Rvci9jaGF0LXdpdGgtZG9jdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDRFo7QURJWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURHZ0I7O0VBRUksb0NBQUE7QUNEcEI7QURTSTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ05SO0FEUVk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ05oQjtBRFFZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTmhCO0FET2dCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FDTHBCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNMcEI7QURTUTtFQUNJLGNBQUE7QUNQWjtBRFVJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNSUjtBRFVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0RBQUE7QUNSUjtBRFNRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDUFo7QURVSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNSUjtBRFVJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FDUlI7QURTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNQWjtBRFVZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNSaEI7QURXZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ1RwQjtBRFdnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7QUNUcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0LXdpdGgtZG9jdG9yL2NoYXQtd2l0aC1kb2N0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktc2InO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgaW9uLWJhY2stYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWR1bGwpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFubmVyLWltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMzEsIDE0MCwgMjM3LCAzMCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktYmknO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDQ0cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsZXgtbGF5b3V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgLmFjdHVhbC1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ViLXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXNiXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24tYmFjay1idXR0b24sXG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuXG5pb24tY29udGVudCAuYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZHVsbCk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmJhbm5lciAuY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5iYW5uZXIgLmNvbnRlbnQgLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmJhbm5lciAuY29udGVudCAubGlzdCAuY2lyY2xlIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAuYmFubmVyIC5jb250ZW50IC5saXN0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAuYmFubmVyIC5iYW5uZXItaW1nIHtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5pb24tY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAuc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDMxLCAxNDAsIDIzNywgMC4zKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLWJpXCI7XG4gIC0tcGFkZGluZy1lbmQ6IDQ0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTlweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5zZWFyY2gtaW5wdXQgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMXB4O1xufVxuaW9uLWNvbnRlbnQgLmZsZXgtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0NyU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW1nIHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY29udGVudCBwIC5hY3R1YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY29udGVudCBwIC5zdWItcHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJlZCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/chat-with-doctor/chat-with-doctor.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/chat-with-doctor/chat-with-doctor.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ChatWithDoctorPage */

  /***/
  function srcAppPagesChatWithDoctorChatWithDoctorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatWithDoctorPage", function () {
      return ChatWithDoctorPage;
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

    var ChatWithDoctorPage = /*#__PURE__*/function () {
      function ChatWithDoctorPage(util) {
        _classCallCheck(this, ChatWithDoctorPage);

        this.util = util;
        this.problems = [{
          title: "Coronavirus consult",
          img: "../../../assets/imgs/data/chatWithDoctor/prob1.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Gynaecology",
          img: "../../../assets/imgs/data/chatWithDoctor/prob2.svg",
          actualPrice: 249,
          marketPrice: 249
        }, {
          title: "Cardiology",
          img: "../../../assets/imgs/data/chatWithDoctor/prob3.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Eye & Vision",
          img: "../../../assets/imgs/data/chatWithDoctor/prob4.svg",
          actualPrice: 199,
          marketPrice: 299
        }, {
          title: "Diet and Nutrition",
          img: "../../../assets/imgs/data/chatWithDoctor/prob5.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Diabetes & endoscopy",
          img: "../../../assets/imgs/data/chatWithDoctor/prob6.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Breathing & Chest",
          img: "../../../assets/imgs/data/chatWithDoctor/prob7.svg",
          actualPrice: 249,
          marketPrice: 349
        }, {
          title: "Dental",
          img: "../../../assets/imgs/data/chatWithDoctor/prob8.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Homeopathy",
          img: "../../../assets/imgs/data/chatWithDoctor/prob9.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Cancer",
          img: "../../../assets/imgs/data/chatWithDoctor/prob10.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Ayurveda",
          img: "../../../assets/imgs/data/chatWithDoctor/prob11.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Physiotherapy",
          img: "../../../assets/imgs/data/chatWithDoctor/prob12.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Child Specialist",
          img: "../../../assets/imgs/data/chatWithDoctor/prob13.svg",
          actualPrice: 150,
          marketPrice: 250
        }, {
          title: "Skin and hair",
          img: "../../../assets/imgs/data/chatWithDoctor/prob14.svg",
          actualPrice: 150,
          marketPrice: 250
        }];
      }

      _createClass(ChatWithDoctorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToPurchaseChat",
        value: function goToPurchaseChat() {}
      }]);

      return ChatWithDoctorPage;
    }();

    ChatWithDoctorPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    ChatWithDoctorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-chat-with-doctor",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-with-doctor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-with-doctor/chat-with-doctor.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-with-doctor.page.scss */
      "./src/app/pages/chat-with-doctor/chat-with-doctor.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], ChatWithDoctorPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-with-doctor-chat-with-doctor-module-es5.js.map