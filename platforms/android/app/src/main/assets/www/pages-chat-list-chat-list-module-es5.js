function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-list-chat-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-list/chat-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-list/chat-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatListChatListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>chat</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding-bottom\">\n    <h3 class=\"main_lbl ion-padding-start\">Chats</h3>\n    <div class=\"today_div\">\n        <ion-item *ngFor=\"let chat of Users\" lines=\"full\" (click)=\"openChat(chat)\" mode=\"md\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"chat?.photoUrl\">\n            </ion-avatar>\n            <ion-label>\n                <h3 class=\"name\">{{chat?.displayName}} <span class=\"ion-float-right\"></span></h3>\n\n\n                <!-- <h3 class=\"name\">{{chat?.Title}} <span class=\"ion-float-right\">{{chat?.LastMessageSent.seconds * 1000| date: 'yyyy-MM-dd h:mm: a'}}</span></h3> -->\n                <!-- <p class=\"detail\"></p> -->\n            </ion-label>\n            <ion-badge color=\"primary\">{{chat?.unread}}</ion-badge>\n        </ion-item>\n    </div>\n\n\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openUsersPage()\">\n        <ion-fab-button>\n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/chat-list/chat-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/chat-list/chat-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ChatListPageRoutingModule */

  /***/
  function srcAppPagesChatListChatListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPageRoutingModule", function () {
      return ChatListPageRoutingModule;
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


    var _chat_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-list.page */
    "./src/app/pages/chat-list/chat-list.page.ts");

    var routes = [{
      path: '',
      component: _chat_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatListPage"]
    }];

    var ChatListPageRoutingModule = function ChatListPageRoutingModule() {
      _classCallCheck(this, ChatListPageRoutingModule);
    };

    ChatListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-list/chat-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/chat-list/chat-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChatListPageModule */

  /***/
  function srcAppPagesChatListChatListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function () {
      return ChatListPageModule;
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


    var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-list-routing.module */
    "./src/app/pages/chat-list/chat-list-routing.module.ts");
    /* harmony import */


    var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-list.page */
    "./src/app/pages/chat-list/chat-list.page.ts");

    var ChatListPageModule = function ChatListPageModule() {
      _classCallCheck(this, ChatListPageModule);
    };

    ChatListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatListPageRoutingModule"]],
      declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
    })], ChatListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-list/chat-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/chat-list/chat-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatListChatListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_lbl {\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newuser {\n  margin-bottom: 12px;\n}\n\nion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\n\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n\nion-content .main_lbl {\n  font-size: 18px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n}\n\nion-content .newuser {\n  padding-left: 16px;\n  display: -webkit-box;\n  overflow-x: auto;\n}\n\nion-content .newuser .card_div {\n  border-radius: 5px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);\n  width: 285px;\n  margin: 10px 20px 10px 0px;\n}\n\nion-content .newuser .card_div .data_div {\n  display: flex;\n  padding: 15px;\n  border-bottom: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--ion-color-silver);\n}\n\nion-content .newuser .card_div .data_div img {\n  height: 45px;\n  width: 45px;\n  border-radius: 50px;\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\nion-content .newuser .card_div .data_div .info_div {\n  padding-left: 15px;\n}\n\nion-content .newuser .card_div .data_div .info_div .name {\n  font-size: 15px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n  margin-top: 3px;\n  margin-bottom: 2px;\n}\n\nion-content .newuser .card_div .data_div .info_div .ago {\n  font-size: 12px;\n  color: var(--ion-color-primary-light);\n  font-family: \"sfUi-m\";\n  margin: 0;\n}\n\nion-content .newuser .card_div .detail_div {\n  padding: 15px;\n}\n\nion-content .newuser .card_div .detail_div .detail_lbl {\n  font-size: 12px;\n  color: var(--ion-color-primary-light);\n  font-family: \"sfUi-m\";\n  margin: 0;\n}\n\nion-content .newuser::-webkit-scrollbar {\n  display: none;\n}\n\nion-content .info_lbl {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .today_div {\n  padding: 0px 16px;\n}\n\nion-content .today_div ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-content .today_div ion-item ion-avatar {\n  height: 55px;\n  width: 55px;\n}\n\nion-content .today_div ion-item ion-avatar img {\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 3px 0px rgba(31, 140, 237, 0.3);\n}\n\nion-content .today_div ion-item .name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .today_div ion-item .name span {\n  font-size: 11px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .today_div ion-item .detail {\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQtbGlzdC9jaGF0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURHSTtFQUNJLG9DQUFBO0FDQVI7O0FERUk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURHUTtFQUNJLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNEWjs7QURFWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0FDQWhCOztBRENnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0FDQ3BCOztBRENnQjtFQUNJLGtCQUFBO0FDQ3BCOztBREFvQjtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRXhCOztBREFvQjtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ0V4Qjs7QURFWTtFQUNJLGFBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDQ3BCOztBRElJO0VBQ0ksYUFBQTtBQ0ZSOztBRElJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNGUjs7QURJSTtFQUNJLGlCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FDRFo7O0FERVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FoQjs7QURDZ0I7RUFDSSx3Q0FBQTtFQUNBLG1EQUFBO0FDQ3BCOztBREVZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNDcEI7O0FERVk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtbGlzdC9jaGF0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fbGJsIHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubmV3dXNlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5tYWluX2xibCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICB9XHJcbiAgICAubmV3dXNlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgLmRhdGFfZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2lsdmVyKTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbmZvX2RpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlsX2RpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgLmRldGFpbF9sYmwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV3dXNlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5mb19sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIH1cclxuICAgIC50b2RheV9kaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDMxLCAxNDAsIDIzNywgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tYWluX2xibCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5uZXd1c2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgd2lkdGg6IDI4NXB4O1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGF0YV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2lsdmVyKTtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGF0YV9kaXYgaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5pb24tY29udGVudCAubmV3dXNlciAuY2FyZF9kaXYgLmRhdGFfZGl2IC5pbmZvX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGF0YV9kaXYgLmluZm9fZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGF0YV9kaXYgLmluZm9fZGl2IC5hZ28ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAubmV3dXNlciAuY2FyZF9kaXYgLmRldGFpbF9kaXYge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IC5kZXRhaWxfZGl2IC5kZXRhaWxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5pbmZvX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuaW9uLWNvbnRlbnQgLnRvZGF5X2RpdiBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbn1cbmlvbi1jb250ZW50IC50b2RheV9kaXYgaW9uLWl0ZW0gaW9uLWF2YXRhciBpbWcge1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgzMSwgMTQwLCAyMzcsIDAuMyk7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IGlvbi1pdGVtIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgLnRvZGF5X2RpdiBpb24taXRlbSAubmFtZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgLnRvZGF5X2RpdiBpb24taXRlbSAuZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/chat-list/chat-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/chat-list/chat-list.page.ts ***!
    \***************************************************/

  /*! exports provided: snapshotToArray, snapshotToArray2, ChatListPage */

  /***/
  function srcAppPagesChatListChatListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray2", function () {
      return snapshotToArray2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPage", function () {
      return ChatListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts"); //import { NavigationExtras } from '@angular/router';


    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };

    var snapshotToArray2 = function snapshotToArray2(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val(); //item.key = childSnapshot.key;

        returnArr.push(item);
      });
      return returnArr;
    };

    var ChatListPage = /*#__PURE__*/function () {
      function ChatListPage(nav, chatService, firebaseAuthService) {
        _classCallCheck(this, ChatListPage);

        //this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
        //this.chatsDBRef = this.firebaseAuthService.firebaseDB.collection('chats');
        this.nav = nav;
        this.chatService = chatService;
        this.firebaseAuthService = firebaseAuthService;
        /*  */

        this.Users = [];
        this.group = false;
        this.messages = [];
        this.users = [];
        this.chats = [];
        this.keysUsers = [];
      }

      _createClass(ChatListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.user = new UserModel();
          //this.user.ID_User = 10;
          //this.user.Name = 'Alan Alexis';
          //this.user.LastName = 'Ramírez Lugo';
          //this.chatService.postUser(this.user);
          //this.getUsers();
          //this.getChats2();
          this.user = JSON.parse(sessionStorage.getItem('user'));
          this.getUsersChat();
        } // getChats2(){
        //   this.chatService.getChats().on('value',resp=>{
        //   this.chatService.chatsUsers = [];
        //   let chats = snapshotToArray(resp);
        //   console.log(chats);
        //   chats.forEach(chat=>{
        //     if (chat.type=='single'){
        //       this.chatService.getChatsMembers(chat.key).on('value', res=>{
        //         let users = res.val()
        //         console.log(users);
        //           console.log(Object.keys(users));
        //           let user = Object.keys(users).filter(user => user != this.firebaseAuthService.usersign.uid)
        //           let key = user[0]
        //           console.log(key);
        //           this.chatService.getUser(key).on('value', (resp)=>{
        //             console.log(resp);
        //             let u = resp.val()
        //            console.log(u);
        //            this.chatService.unreadChats(chat.key).on('value', resp=>{
        //              let messages = snapshotToArray(resp);
        //              console.log(messages);
        //              let count = 0;
        //              messages.forEach(message=>{
        //                if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
        //                  count = count + 1;
        //                }
        //              })
        //              console.log(count);
        //              u.unread = count;
        //            });
        //            this.chatService.chatsUsers.push(u)
        //           })                
        //       })
        //     }else if (chat.type=='group'){
        //       let groupinfo={
        //         displayName: 'chatGroup',
        //         photoUrl: 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg',
        //         uid:chat.key
        //       }
        //       this.chatService.chatsUsers.push(groupinfo)
        //     }
        //   })
        // })
        // /* 
        //   this.chatService.getChats().on('value', (resp:any)=>{
        //     let chats = snapshotToArray(resp);
        //     console.log(chats);
        //     chats.forEach(chat=>{
        //       this.chatService.getChatsMembers(chat.key).on('value', (res:any)=>{
        //         let usersChat = res.val()
        //         console.log(Object.keys(usersChat));
        //         if (Object.keys(usersChat).length==2){
        //           Object.keys(usersChat).forEach(key=>{
        //             console.log(key);
        //             if (key!='key' && key!=this.firebaseAuthService.usersign.uid){
        //               this.keysUsers.push(key)
        //               console.log(this.chatService.getUser(key).toJSON());
        //               this.chatService.getUser(key).on('value', (resp)=>{
        //                 console.log(resp);
        //                 let u = resp.val()
        //                console.log(u);
        //                this.chatService.unreadChats(chat.key).on('value', resp=>{
        //                  let messages = snapshotToArray(resp);
        //                  console.log(messages);
        //                  let count = 0;
        //                  messages.forEach(message=>{
        //                    if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
        //                      count = count + 1;
        //                    }
        //                  })
        //                  console.log(count);
        //                  u.unread = count;
        //                });
        //                this.chatService.chatsUsers.push(u)
        //               })
        //             }
        //           })
        //         }else if (Object.keys(usersChat).length>2){
        //           let groupinfo={
        //             displayName: 'chatGroup',
        //             photoUrl: 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg',
        //             uid:chat.key
        //           }
        //           this.chatService.chatsUsers.push(groupinfo)
        //         }
        //       })
        //     })
        //   }) */
        // }
        // getChats(){
        // /*   this.chatsDBRef.onSnapshot(  snap =>{
        //     this.chats = [];
        //     snap.forEach( snapHijo =>{
        //         this.chats.push({
        //             id: snapHijo.id,
        //             ...snapHijo.data()
        //         })
        //     });
        //     console.log(this.chats);
        //   }); */
        //   this.chatService.getUserChats().orderByChild(this.firebaseAuthService.usersign.uid).equalTo('true').on('value', (resp:any) =>{
        //   let chats = snapshotToArray(resp);
        //   this.chats = [];
        //   this.keysUsers = []
        //   this.chatService.chatsUsers = []
        //    console.log(this.chats);
        //    chats.forEach(chat=>{
        //      console.log(Object.keys(chat))
        //      Object.keys(chat).forEach(key=>{
        //        if (key!='key' && key!=this.firebaseAuthService.usersign.uid){
        //          this.keysUsers.push(key)
        //          console.log(this.chatService.getUser(key).toJSON());
        //          this.chatService.getUser(key).on('value', (resp)=>{
        //            console.log(resp);
        //            let u = resp.val()
        //           /* let users = snapshotToArray(resp); */
        //           /* console.log(users); */
        //           console.log(chat);
        //           this.chatService.unreadChats(chat.key).on('value', resp=>{
        //             let messages = snapshotToArray(resp);
        //             console.log(messages);
        //             let count = 0;
        //             messages.forEach(message=>{
        //               if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
        //                 count = count + 1;
        //               }
        //             })
        //             console.log(count);
        //             u.unread = count;
        //           });
        //           this.chatService.chatsUsers.push(u)
        //          })
        //        }
        //      })
        //    })
        // /*    console.log(this.keysUsers);
        //    this.keysUsers.forEach(keyUser=>{
        //     console.log(this.chatService.getUser(keyUser).toJSON());
        //      this.chatService.getUser(keyUser).on('value', (resp)=>{
        //        console.log(resp);
        //        let u = resp.val()
        //        this.chatService.chatsUsers.push(u)
        //      })
        //    }) */
        //    console.log(this.chatService.chatsUsers);
        //   })
        // }

      }, {
        key: "getUsers",
        value: function getUsers() {
          /*   this.usersDBRef.onSnapshot(  snap =>{
              this.users = [];
              snap.forEach( snapHijo =>{
                  this.users.push({
                      id: snapHijo.id,
                      ...snapHijo.data()
                  })
              });
              console.log(this.users);
            }); */
        }
        /*setLastHourForBets(){
          this.chatService.getUsers();
             this.chatService.getUsers().subscribe(message => {
            console.log(message);
          });
        }*/

      }, {
        key: "openUsersPage",
        value: function openUsersPage() {
          this.nav.navigateForward("/chat-users-list");
        }
      }, {
        key: "openChat",
        value: function openChat(event) {
          var _this = this;

          /*  console.log(chat);
           if (chat.displayName!='chatGroup'){
                   this.chatService.getChat().orderByChild(chat.uid).equalTo('true').on('value', (resp:any) =>{
               console.log(resp);
               const chats = snapshotToArray(resp);
               console.log(chats);
               
          
                 localStorage.setItem('user2',JSON.stringify(chat))
                 localStorage.setItem('idchat', chats[0].key)
                 this.nav.navigateForward("/chat");
              
             })
           }else{
               
                     localStorage.setItem('users2',JSON.stringify(chat))
             
             localStorage.setItem('idchat', chat.uid)
             this.nav.navigateForward("/chat");
           } */
          console.log(event, 'chat');

          if (event.type == 'User') {
            this.group = false;
          } else {
            this.group = true;
          }

          this.chatService.getChat(this.user, event.chatuid).once('value', function (resp) {
            console.log(resp.val());

            if (resp.val()) {
              _this.chatService.keymessage = event.chatuid;
              _this.chatService.user2 = event; //this.getMessages()

              event.unread = 0;

              _this.nav.navigateForward("/chat2");
            } else {
              _this.nav.navigateForward("/chat2");
            }
            /* else{
              this.chatSVC.addChat(this.user,event )
              this.getMessages()
            } */

            /* this.scrollToBottom(); */

          });
        }
        /*  */

      }, {
        key: "getUsersChat",
        value: function getUsersChat() {
          var _this2 = this;

          console.log('buscando chats');
          this.Users = [];
          this.chatService.getUsersChat(this.user).on('value', function (resp) {
            if (resp.val()) {
              _this2.Users = [];
              var keys = Object.keys(resp.val());
              console.log(keys);
              resp.forEach(function (childSnapshot) {
                console.log(childSnapshot.val());
                console.log(childSnapshot.key);
                var keychat = childSnapshot.key;
                /* keychat.key = childSnapshot.key */

                _this2.chatService.getChatType(keychat).on('value', function (res) {
                  console.log(res.val());
                  var chat = res.val();
                  chat.key = childSnapshot.val();
                  console.log(chat.key);

                  if (chat.name == 'single') {
                    _this2.chatService.getUser(chat.key).on('value', function (resp) {
                      var item = resp.val();
                      item.unread = 0;
                      item.chatuid = keychat;

                      _this2.chatService.unreadChats(_this2.user.uid, keychat).on('value', function (unread) {
                        var count = 0;
                        console.log(unread.val(), 'UNREAD');
                        unread.forEach(function (u) {
                          count = count + 1;
                        });
                        console.log(count, 'UNREAD2');
                        item.unread = count;
                      });

                      _this2.Users.push(item);
                    });
                  } else {
                    var item2 = res.val();
                    var item = res.val();
                    console.log(item2);
                    item.displayName = item2.name;
                    item.photoUrl = 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg', item.unread = 0;
                    item.chatuid = keychat;

                    _this2.Users.push(item);
                    /* SI ES GRUPO */

                  }
                });
              });
            }
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var _this3 = this;

          this.chatService.getMessages().on('value', function (resp) {
            _this3.messages = [];
            resp.forEach(function (childSnapshot) {
              var m = childSnapshot.val();
              console.log(childSnapshot.val());

              _this3.chatService.getUser(m.sender).on('value', function (resp) {
                /* console.log(resp.val()); */
                m.senderuser = resp.val();

                _this3.messages.push(m);
              }); //this.scrollToBottom()

            });
            console.log(_this3.messages);
          });
        }
      }]);

      return ChatListPage;
    }();

    ChatListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    ChatListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-chat-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-list/chat-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-list.page.scss */
      "./src/app/pages/chat-list/chat-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], ChatListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-list-chat-list-module-es5.js.map