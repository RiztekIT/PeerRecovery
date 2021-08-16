(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"chatList\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\" (click)=\"goToChatList()\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>chat</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-header>\n    <ion-title>{{this.chatUser.displayName}}</ion-title>\n    <!--   <ion-avatar style=\"display: block !important; padding-left: 10px;\" slot=\"end\">\n        <img [src]=\"this.chatUser.photoUrl\">\n\n    </ion-avatar> -->\n</ion-header>\n<hr>\n<ion-content #chatcontent [scrollEvents]=\"true\" class=\"ion-padding-horizontal\">\n    <div *ngFor=\"let message of chatMessages\">\n\n\n        <div *ngIf=\"message.sender != this.firebaseAuthService.usersign.uid\" class=\"chat_div \">\n            <!-- Others messages -->\n            <!-- Other person message -->\n            <!-- <img src=\"../../../assets/image/patricia.png \"> -->\n            <div class=\"message_div \">\n                <div class=\"chat \">\n                    <p class=\"chat_lbl \">{{message.message}}</p>\n                </div>\n                <p class=\"time \">{{message.timestamp.seconds * 1000| date: 'dd/MM/yy h:mm a'}}</p>\n            </div>\n        </div>\n        <div *ngIf=\"message.sender == this.firebaseAuthService.usersign.uid\" class=\"chat_div replay_div \">\n            <!-- My messages -->\n            <!-- Me -->\n            <div class=\"message_div \">\n                <div class=\"chat \">\n                    <p class=\"chat_lbl \">{{message.message}}</p>\n                </div>\n                <p class=\"time \">{{message.timestamp.seconds * 1000| date: 'dd/MM/yy h:mm a'}}</p>\n\n            </div>\n            <!-- <img src=\"../../../assets/image/patricia.png \"> -->\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border \">\n    <ion-item mode=\"md\" lines=\"none \">\n        <ion-input style=\"font-size: 20px !important;\" [(ngModel)]=\"message\" placeholder=\"Type your message... \" (keypress)=\"eventoMensaje($event.keyCode)\">\n        </ion-input>\n    </ion-item>\n    <ion-button class=\"send_btn\" (click)=\"sendMessage()\">\n        <ion-icon src=\"../../../assets/image_icon/send.svg \"></ion-icon>\n    </ion-button>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/pages/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\nion-content .td_lbl {\n  font-size: 12px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  text-align: center;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\nion-content .chat_div {\n  display: flex;\n  margin-bottom: 20px;\n  align-items: center;\n}\nion-content .chat_div img {\n  height: 57px;\n  width: 57px;\n  border-radius: 50%;\n  border: solid 3px var(--white);\n  box-shadow: 0px 0px 5px 0px rgba(31, 140, 237, 0.25);\n}\nion-content .chat_div .message_div .chat {\n  width: 230px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);\n  padding: 15px;\n  margin-left: 15px;\n  border-radius: 5px;\n}\nion-content .chat_div .message_div .chat .chat_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md_i\";\n  margin-top: 0;\n  margin-bottom: 5px;\n}\nion-content .chat_div .time {\n  font-size: 12px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_md\";\n  margin-top: 8px;\n  margin-bottom: 0;\n  text-align: end;\n}\nion-content .replay_div {\n  display: flex;\n  justify-content: flex-end;\n}\nion-content .replay_div .message_div .chat {\n  width: 250px;\n  margin-right: 15px;\n  margin-left: 0;\n  background-color: var(--my_theme);\n  box-shadow: none;\n}\nion-content .replay_div .message_div .chat .chat_lbl {\n  color: var(--white);\n}\nion-content .replay_div .time {\n  text-align: start;\n}\nion-footer {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.2);\n}\nion-footer ion-item {\n  width: 100%;\n}\nion-footer ion-item ion-input {\n  font-size: 12px;\n  font-family: \"rubik_i\";\n  color: var(--gray);\n}\nion-footer .send_btn {\n  height: 50px;\n  width: 50px;\n  --background: var(--my_theme);\n  margin: 0;\n  --border-radius: 0px;\n  min-width: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-footer .send_btn ion-icon {\n  width: 27px;\n  height: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0FSO0FES0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvREFBQTtBQ0RaO0FESVk7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBREdnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRHBCO0FES1E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIWjtBRE1JO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDSlI7QURNWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDSmhCO0FES2dCO0VBQ0ksbUJBQUE7QUNIcEI7QURPUTtFQUNJLGlCQUFBO0FDTFo7QURVQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtDQUFBO0FDUEo7QURRSTtFQUNJLFdBQUE7QUNOUjtBRE9RO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTlI7QURPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLnRkX2xibCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAuY2hhdF9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDU3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgzMSwgMTQwLCAyMzcsIDAuMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZV9kaXYge1xyXG4gICAgICAgICAgICAuY2hhdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgLmNoYXRfbGJsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kX2lcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlcGxheV9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAubWVzc2FnZV9kaXYge1xyXG4gICAgICAgICAgICAuY2hhdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15X3RoZW1lKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAuY2hhdF9sYmwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwicnViaWtfaVwiO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbmRfYnRuIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1teV90aGVtZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY29udGVudCAudGRfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5jaGF0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuY2hhdF9kaXYgaW1nIHtcbiAgaGVpZ2h0OiA1N3B4O1xuICB3aWR0aDogNTdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDMxLCAxNDAsIDIzNywgMC4yNSk7XG59XG5pb24tY29udGVudCAuY2hhdF9kaXYgLm1lc3NhZ2VfZGl2IC5jaGF0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNoYXRfZGl2IC5tZXNzYWdlX2RpdiAuY2hhdCAuY2hhdF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRfaVwiO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAuY2hhdF9kaXYgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuaW9uLWNvbnRlbnQgLnJlcGxheV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuaW9uLWNvbnRlbnQgLnJlcGxheV9kaXYgLm1lc3NhZ2VfZGl2IC5jaGF0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAucmVwbGF5X2RpdiAubWVzc2FnZV9kaXYgLmNoYXQgLmNoYXRfbGJsIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5yZXBsYXlfZGl2IC50aW1lIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuaW9uLWZvb3RlciBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWZvb3RlciBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInJ1YmlrX2lcIjtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuaW9uLWZvb3RlciAuc2VuZF9idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW15X3RoZW1lKTtcbiAgbWFyZ2luOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tZm9vdGVyIC5zZW5kX2J0biBpb24taWNvbiB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let ChatPage = class ChatPage {
    constructor(nav, route, router, firebaseAuthService, chatService, http, http2) {
        this.nav = nav;
        this.route = route;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.chatService = chatService;
        this.http = http;
        this.http2 = http2;
        this.ID_Chat = "";
        this.message = "";
        this.chatMessages = [];
        /*  */
        this.messages = [];
        /*    this.route.queryParams.subscribe(params => {
             if (params && params.special) {
               this.data = JSON.parse(params.special);
               console.log(this.data.ID_Chat);
               this.ID_Chat = this.data.ID_Chat;
               this.chatDBRef = this.firebaseAuthService.firebaseDB.doc('messages/'+this.data.ID_Chat);
               
             }
           }); */
        this.route.queryParams.subscribe(params => {
            if (params && params.data) {
                let data = JSON.parse(params.data);
                data = JSON.parse(data);
                this.parametros = true;
                this.chatService.keymessage = data.key;
                this.chatUser = data.chatuser;
            }
        });
    }
    ngOnInit() {
        /*    this.getChat();
           this.getUserWith()
           this.chatService.readChats(); */
        this.user = JSON.parse(sessionStorage.getItem('user'));
        if (!this.parametros) {
            this.chatUser = this.chatService.user2;
            console.log(this.chatUser, 'USER');
        }
        this.getMessages();
    }
    getUserWith() {
        if (JSON.parse(localStorage.getItem('user2'))) {
            this.chatUser = JSON.parse(localStorage.getItem('user2'));
            console.log(this.chatUser);
        }
        else {
            this.chatUser = JSON.parse(localStorage.getItem('users2'));
            console.log(this.chatUser);
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.chatService.stopread();
    }
    /*   getMessage(){
        this.chatService.getMessages
      } */
    getChat() {
        /* console.log(localStorage.getItem('idchat'));
            this.chatService.getMessages(localStorage.getItem('idchat')).on('value', resp=>{
              let messages = snapshotToArray(resp)
              console.log(messages);
              this.chatMessages = messages;
              console.log(this.chatMessages);
              
              setTimeout(() => {
                this.scrollToBottom();
            }, 500);
            }) */
    }
    sendMessage() {
        console.log(this.message);
        /*
            let sendmessage = {
              message: this.message,
              sender: this.firebaseAuthService.usersign.uid,
              read:'false',
              sent: firebase.firestore.Timestamp.fromDate(new Date())
            }
        
        
            if (this.chatUser.displayName!='chatGroup'){
        
              this.chatService.newMessage(sendmessage);
              
              this.message = '';
            }else{
              this.chatService.newMessageGroup(sendmessage, this.chatUser.uid);
              this.message = '';
              
            } */
        console.log(this.message);
        this.chatService.sendMessage(this.message, this.firebaseAuthService.usersign, this.chatUser);
        this.message = '';
        this.chatService.getTokenID(this.chatUser.uid).once('value', token => {
            console.log(token.val(), 'USERS');
            /* this.sendLocation(this.currentPos,token.val()) */
            this.sendMessageNoti(this.message, this.chatService.keymessage, token.val(), this.chatUser);
        });
    }
    sendMessageNoti(message, keymessage, user, chatuser) {
        let data = {
            key: keymessage,
            m: message,
            user: chatuser
        };
        console.log(data, 'data');
        console.log(user, 'U');
        let body = {
            "notification": {
                "title": "PeerRecovery",
                "body": "New Message",
                "sound": "default",
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon"
            },
            "data": {
                "landing_page": "chat",
                "data": data
            },
            "to": user,
            "priority": "high",
            "restricted_package_name": ""
        };
        let headers = {
            'Authorization': 'key=AAAA7CwLHfI:APA91bGdbyFJFwO4xWEBilRVInU37vOoQ5jURZv0PHbD8zXc4pT58GEy1ETkskaOfIJEhHtR4YYMr4SbDRiuEI7BJG0JfoXDbguV691brsZri_bLqMQLc-FWffr1EakQsurEnb0ZrN2_',
            'Content-Type': 'application/json'
        };
        /*    this.http.post('https://fcm.googleapis.com/fcm/send',body,headers).then(res=>{
             console.log(res,'res');
           }).catch(e=>{
             console.log(e,'e');
           }) */
        this.http2.post('https://fcm.googleapis.com/fcm/send', body, { headers }).subscribe(res => {
            console.log(res);
        });
    }
    goToChatList() {
        this.nav.navigateBack("/chat");
        localStorage.removeItem('user2');
        localStorage.removeItem('users2');
        localStorage.removeItem('idchat');
    }
    scrollToBottom() {
        this.content.scrollToBottom(300);
        //document.getElementById('chatcontent').scrollTo();
    }
    eventoMensaje(tecla) {
        console.log(tecla);
        if (tecla == 13) {
            this.sendMessage();
        }
    }
    /*  */
    getMessages() {
        this.chatService.getMessages().orderByChild('timestamp').on('value', resp => {
            this.messages = [];
            resp.forEach((childSnapshot) => {
                let m = childSnapshot.val();
                console.log(childSnapshot.val());
                this.chatService.getUser(m.sender).on('value', resp => {
                    /* console.log(resp.val()); */
                    m.senderuser = resp.val();
                    this.messages.push(m);
                    this.chatMessages = this.messages;
                });
                setTimeout(() => {
                    this.scrollToBottom();
                }, 500);
            });
            console.log(this.messages);
        });
        this.chatService.cleanUnread(this.user.uid, this.chatService.keymessage);
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatcontent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatPage.prototype, "content", void 0);
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module-es2015.js.map