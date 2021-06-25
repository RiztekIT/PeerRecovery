(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-users-list-chat-users-list-module"],{

/***/ "./src/app/pages/chat-users-list/chat-users-list-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/chat-users-list/chat-users-list-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChatUsersListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUsersListPageRoutingModule", function() { return ChatUsersListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-users-list.page */ "./src/app/pages/chat-users-list/chat-users-list.page.ts");




const routes = [
    {
        path: '',
        component: _chat_users_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatUsersListPage"]
    }
];
let ChatUsersListPageRoutingModule = class ChatUsersListPageRoutingModule {
};
ChatUsersListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatUsersListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chat-users-list/chat-users-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/chat-users-list/chat-users-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatUsersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUsersListPageModule", function() { return ChatUsersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-users-list-routing.module */ "./src/app/pages/chat-users-list/chat-users-list-routing.module.ts");
/* harmony import */ var _chat_users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-users-list.page */ "./src/app/pages/chat-users-list/chat-users-list.page.ts");







let ChatUsersListPageModule = class ChatUsersListPageModule {
};
ChatUsersListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatUsersListPageRoutingModule"]
        ],
        declarations: [_chat_users_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatUsersListPage"]]
    })
], ChatUsersListPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-chat-users-list-chat-users-list-module-es2015.js.map