function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-users-list-chat-users-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-users-list/chat-users-list.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-users-list/chat-users-list.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatUsersListChatUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>chat</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-bottom\">\n\n    <ion-item>\n        <h3 class=\"main_lbl ion-padding-start\">New chat with:</h3>\n\n        <ion-toggle [(ngModel)]=\"this.group\" slot=\"end\" color=\"primary\"></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf=\"this.group\">\n        <ion-input style=\"font-size: 20px !important;\" [(ngModel)]=\"this.namegroup\" placeholder=\"Group Name\">\n        </ion-input>\n    </ion-item>\n\n    <div class=\"today_div\">\n        <ion-item *ngFor=\"let item of Users\" lines=\"full\" (click)=\"openChat(item)\" mode=\"md\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item?.photoUrl\">\n            </ion-avatar>\n            <ion-label>\n                <h3 class=\"name\">{{item?.displayName}}</h3>\n                <p class=\"detail\">{{item?.email}}</p>\n            </ion-label>\n            <ion-checkbox *ngIf=\"this.group\" color=\"primary\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\n\n        </ion-item>\n    </div>\n\n    <!-- <ion-button (click)=\"info()\">VER</ion-button> -->\n    <ion-fab *ngIf=\"this.group\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"openChatGroup()\">\n        <ion-fab-button>\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/chat-users-list/chat-users-list-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/chat-users-list/chat-users-list-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatUsersListPageRoutingModule */

  /***/
  function srcAppPagesChatUsersListChatUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUsersListPageRoutingModule", function () {
      return ChatUsersListPageRoutingModule;
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


    var _chat_users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-users-list.page */
    "./src/app/pages/chat-users-list/chat-users-list.page.ts");

    var routes = [{
      path: '',
      component: _chat_users_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatUsersListPage"]
    }];

    var ChatUsersListPageRoutingModule = function ChatUsersListPageRoutingModule() {
      _classCallCheck(this, ChatUsersListPageRoutingModule);
    };

    ChatUsersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatUsersListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-users-list/chat-users-list.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/chat-users-list/chat-users-list.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ChatUsersListPageModule */

  /***/
  function srcAppPagesChatUsersListChatUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUsersListPageModule", function () {
      return ChatUsersListPageModule;
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


    var _chat_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-users-list-routing.module */
    "./src/app/pages/chat-users-list/chat-users-list-routing.module.ts");
    /* harmony import */


    var _chat_users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-users-list.page */
    "./src/app/pages/chat-users-list/chat-users-list.page.ts");

    var ChatUsersListPageModule = function ChatUsersListPageModule() {
      _classCallCheck(this, ChatUsersListPageModule);
    };

    ChatUsersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatUsersListPageRoutingModule"]],
      declarations: [_chat_users_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatUsersListPage"]]
    })], ChatUsersListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/chat-users-list/chat-users-list.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/chat-users-list/chat-users-list.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatUsersListChatUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_lbl {\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newuser {\n  margin-bottom: 12px;\n}\n\nion-header ion-back-button {\n  color: var(--ion-color-primary-dark);\n}\n\nion-header ion-title {\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  text-transform: capitalize;\n}\n\nion-content .main_lbl {\n  font-size: 18px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n}\n\nion-content .newuser {\n  padding-left: 16px;\n  display: -webkit-box;\n  overflow-x: auto;\n}\n\nion-content .newuser .card_div {\n  border-radius: 5px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);\n  width: 285px;\n  margin: 10px 20px 10px 0px;\n}\n\nion-content .newuser .card_div .data_div {\n  display: flex;\n  padding: 15px;\n  border-bottom: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: var(--ion-color-silver);\n}\n\nion-content .newuser .card_div .data_div img {\n  height: 45px;\n  width: 45px;\n  border-radius: 50px;\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\nion-content .newuser .card_div .data_div .info_div {\n  padding-left: 15px;\n}\n\nion-content .newuser .card_div .data_div .info_div .name {\n  font-size: 15px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n  margin-top: 3px;\n  margin-bottom: 2px;\n}\n\nion-content .newuser .card_div .data_div .info_div .ago {\n  font-size: 12px;\n  color: var(--ion-color-primary-light);\n  font-family: \"sfUi-m\";\n  margin: 0;\n}\n\nion-content .newuser .card_div .detail_div {\n  padding: 15px;\n}\n\nion-content .newuser .card_div .detail_div .detail_lbl {\n  font-size: 12px;\n  color: var(--ion-color-primary-light);\n  font-family: \"sfUi-m\";\n  margin: 0;\n}\n\nion-content .newuser::-webkit-scrollbar {\n  display: none;\n}\n\nion-content .info_lbl {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .today_div {\n  padding: 0px 16px;\n}\n\nion-content .today_div ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-content .today_div ion-item ion-avatar {\n  height: 55px;\n  width: 55px;\n}\n\nion-content .today_div ion-item ion-avatar img {\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 3px 0px rgba(31, 140, 237, 0.3);\n}\n\nion-content .today_div ion-item .name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .today_div ion-item .name span {\n  font-size: 11px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .today_div ion-item .detail {\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2hhdC11c2Vycy1saXN0L2NoYXQtdXNlcnMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQtdXNlcnMtbGlzdC9jaGF0LXVzZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURHSTtFQUNJLG9DQUFBO0FDQVI7O0FERUk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURHUTtFQUNJLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNEWjs7QURFWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRDQUFBO0FDQWhCOztBRENnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0FDQ3BCOztBRENnQjtFQUNJLGtCQUFBO0FDQ3BCOztBREFvQjtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRXhCOztBREFvQjtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ0V4Qjs7QURFWTtFQUNJLGFBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDQ3BCOztBRElJO0VBQ0ksYUFBQTtBQ0ZSOztBRElJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNGUjs7QURJSTtFQUNJLGlCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FDRFo7O0FERVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FoQjs7QURDZ0I7RUFDSSx3Q0FBQTtFQUNBLG1EQUFBO0FDQ3BCOztBREVZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNDcEI7O0FERVk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtdXNlcnMtbGlzdC9jaGF0LXVzZXJzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fbGJsIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5uZXd1c2VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgfVxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLm1haW5fbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICB9XG4gICAgLm5ld3VzZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAuY2FyZF9kaXYge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICB3aWR0aDogMjg1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDBweDtcbiAgICAgICAgICAgIC5kYXRhX2RpdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2lsdmVyKTtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZm9fZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFnbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgLmRldGFpbF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubmV3dXNlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaW5mb19sYmwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICB9XG4gICAgLnRvZGF5X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDMxLCAxNDAsIDIzNywgMC4zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fbGJsIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm5ld3VzZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY29udGVudCAubWFpbl9sYmwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG59XG5pb24tY29udGVudCAubmV3dXNlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5pb24tY29udGVudCAubmV3dXNlciAuY2FyZF9kaXYge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICB3aWR0aDogMjg1cHg7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IC5kYXRhX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zaWx2ZXIpO1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IC5kYXRhX2RpdiBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGF0YV9kaXYgLmluZm9fZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IC5kYXRhX2RpdiAuaW5mb19kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuaW9uLWNvbnRlbnQgLm5ld3VzZXIgLmNhcmRfZGl2IC5kYXRhX2RpdiAuaW5mb19kaXYgLmFnbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5uZXd1c2VyIC5jYXJkX2RpdiAuZGV0YWlsX2RpdiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5pb24tY29udGVudCAubmV3dXNlciAuY2FyZF9kaXYgLmRldGFpbF9kaXYgLmRldGFpbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAubmV3dXNlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWNvbnRlbnQgLmluZm9fbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IC50b2RheV9kaXYge1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbmlvbi1jb250ZW50IC50b2RheV9kaXYgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuaW9uLWNvbnRlbnQgLnRvZGF5X2RpdiBpb24taXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDMxLCAxNDAsIDIzNywgMC4zKTtcbn1cbmlvbi1jb250ZW50IC50b2RheV9kaXYgaW9uLWl0ZW0gLm5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IGlvbi1pdGVtIC5uYW1lIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAudG9kYXlfZGl2IGlvbi1pdGVtIC5kZXRhaWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/chat-users-list/chat-users-list.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/chat-users-list/chat-users-list.page.ts ***!
    \***************************************************************/

  /*! exports provided: snapshotToArray, ChatUsersListPage */

  /***/
  function srcAppPagesChatUsersListChatUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUsersListPage", function () {
      return ChatUsersListPage;
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

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };

    var ChatUsersListPage = /*#__PURE__*/function () {
      function ChatUsersListPage(nav, router, firebaseAuthService, chatService) {
        _classCallCheck(this, ChatUsersListPage);

        this.nav = nav;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.chatService = chatService;
        /* users: any[] = []; */
        //data: any;

        this.chats = [];
        this.group = false;
        this.groupusers = [];
        this.Users = [];
        this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('messages');
      }

      _createClass(ChatUsersListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(sessionStorage.getItem('user'));
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          /*  this.usersDBRef.onSnapshot(  snap =>{
               this.users = [];
               snap.forEach( snapHijo =>{
                   this.users.push({
                       id: snapHijo.id,
                       ...snapHijo.data()
                   })
               });
               console.log('Users: ', this.users);
             }); */

          /*    this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', (resp:any) =>{
               
                const users = snapshotToArray(resp);
               console.log(users);
               this.users = users;
               this.users = this.users.filter(x => x.uid != this.firebaseAuthService.usersign.uid);
                    }) */
          console.log(this.user);
          this.chatService.getUsers().on('value', function (resp) {
            _this.Users = [];
            var c = 0;
            resp.forEach(function (childSnapshot) {
              var item = childSnapshot.val();
              item.key = childSnapshot.key;
              /* item.selected = true; */

              if (item.key != _this.user.uid) {
                console.log(item);
                console.log(_this.user);

                _this.chatService.getRel(_this.user, item.key).once('value', function (resp) {
                  console.log(resp);
                  console.log(resp.val());
                  item.selected = resp.val();

                  if (resp.val()) {
                    _this.Users.push(item);
                  }
                });
              }
            }); //this.selected = this.Users

            console.log(_this.Users);
          });
        }
      }, {
        key: "openChat",
        value: function openChat(item) {
          var _this2 = this;

          if (!this.group) {
            console.log(item.uid);
            this.chatService.getChat2(this.user, item.uid).on('value', function (resp) {
              console.log(resp.val());
              console.log(resp.key);

              if (resp.val()) {
                var keys = Object.keys(resp.val());
                _this2.chatService.keymessage = keys[0];
                _this2.chatService.user2 = item; //this.getMessages()

                _this2.nav.navigateForward("/chat2"); //this.getMessages()

              } else {
                _this2.chatService.addChat(_this2.user, item); //this.chatService.keymessage = keys[0];        


                _this2.chatService.user2 = item;

                _this2.nav.navigateForward("/chat2");
              }
            });
            /*  this.chatService.getChat().orderByChild(item.uid).equalTo('true').once('value', (resp: any) =>{
               console.log(resp);
               const chats = snapshotToArray(resp);
               console.log(chats);
               if (chats.length>0){
                          chats.forEach(chat=>{
                            console.log(chat);
                  let users = Object.keys(chat).filter(user => user != this.firebaseAuthService.usersign.uid && user != 'key')
                  console.log(users);
                  if (users.length==1){
                              localStorage.setItem('user2',JSON.stringify(item))
                    localStorage.setItem('idchat', chats[0].key)
                    this.nav.navigateForward("/chat");
                  }else{
                   localStorage.setItem('user2',JSON.stringify(item))
                   let idchat = this.chatService.newChat(item);
                   localStorage.setItem('idchat', idchat)
                   this.nav.navigateForward("/chat");
                  }
                })
                         
               }else{
                 localStorage.setItem('user2',JSON.stringify(item))
                 let idchat = this.chatService.newChat(item);
                 localStorage.setItem('idchat', idchat)
                 this.nav.navigateForward("/chat");
               }
             }) */
          }
        }
      }, {
        key: "openChatGroup",
        value: function openChatGroup() {
          console.log(this.Users);
          this.groupusers = this.Users.filter(function (x) {
            return x.isChecked != false && x.isChecked;
          });
          console.log(this.groupusers);
          this.chatService.addGroup(this.user, this.namegroup, this.groupusers);
          this.nav.navigateForward("/chat2");
          /*   this.groupusers = this.Users.filter(x => x.isChecked != false && x.isChecked);
            console.log(this.groupusers);
            let group = {
              displayName: 'chatGroup'
            }
               
            localStorage.setItem('users2',JSON.stringify(group))
            let idchat = this.chatService.newChatGroup(this.groupusers);
            localStorage.setItem('idchat', idchat)
            this.nav.navigateForward("/chat"); */
        }
      }]);

      return ChatUsersListPage;
    }();

    ChatUsersListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
      }];
    };

    ChatUsersListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-chat-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-users-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-users-list/chat-users-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-users-list.page.scss */
      "./src/app/pages/chat-users-list/chat-users-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])], ChatUsersListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-users-list-chat-users-list-module-es5.js.map