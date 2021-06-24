(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reward-reward-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reward/reward.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reward/reward.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Reward</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-horizontal ion-padding-bottom\">\n\n\n    <div class=\"profile_div\">\n        <div class=\"img_div\">\n            <img src=\"../../../assets/image_icon/certificate.png\">\n        </div>\n    </div>\n    <p class=\"reward-name\">Health course</p>\n    <p class=\"book_id\">Deadline: Feb, 25 2021</p>\n    <p>\n        <!--- <ion-progress-bar color=\"warning\" value=\"0.8\"></ion-progress-bar>  -->\n    </p>\n\n\n\n\n\n\n    <div class=\"card_div\" *ngFor=\"let item of review\">\n        <div class=\"data_div\">\n            <h3 class=\"name\">{{item?.name}}\n                <span class=\"ion-float-right\">\n                  <ion-progress-bar [color]=\"item.color\" value=\"{{item?.average}}\"></ion-progress-bar>\n                </span>\n            </h3>\n            <p class=\"ago\">{{item?.ago}}</p>\n            <p class=\"ago detail\">{{item?.detail}}</p>\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reward/reward-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/reward/reward-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RewardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPageRoutingModule", function() { return RewardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reward_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reward.page */ "./src/app/pages/reward/reward.page.ts");




const routes = [
    {
        path: '',
        component: _reward_page__WEBPACK_IMPORTED_MODULE_3__["RewardPage"]
    }
];
let RewardPageRoutingModule = class RewardPageRoutingModule {
};
RewardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RewardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reward/reward.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reward/reward.module.ts ***!
  \***********************************************/
/*! exports provided: RewardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPageModule", function() { return RewardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reward_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reward-routing.module */ "./src/app/pages/reward/reward-routing.module.ts");
/* harmony import */ var _reward_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reward.page */ "./src/app/pages/reward/reward.page.ts");







let RewardPageModule = class RewardPageModule {
};
RewardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reward_routing_module__WEBPACK_IMPORTED_MODULE_5__["RewardPageRoutingModule"]
        ],
        declarations: [_reward_page__WEBPACK_IMPORTED_MODULE_6__["RewardPage"]]
    })
], RewardPageModule);



/***/ }),

/***/ "./src/app/pages/reward/reward.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/reward/reward.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\n.profile_div {\n  justify-content: space-evenly;\n  display: flex;\n  align-items: flex-end;\n  padding: 0px 16px;\n}\n.profile_div .ic_div {\n  height: 43px;\n  width: 43px;\n  border-radius: 50%;\n  border: solid 3px var(--my_theme);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.profile_div .ic_div ion-icon {\n  color: var(--my_theme);\n}\n.profile_div .img_div {\n  height: 115px;\n  width: 115px;\n}\n.profile_div .img_div img {\n  height: 115px;\n  width: 115px;\n  border: solid 5px var(--my_theme);\n  border-radius: 50%;\n}\n.reward-name {\n  font-size: 24px;\n  font-family: \"sf_ui_md\";\n  color: var(--my_theme);\n  text-align: center;\n}\nion-progress-bar {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.book_id {\n  font-size: 14px;\n  font-family: \"sf_ui_sb\";\n  color: var(--my_theme);\n  margin: 0;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.h_info {\n  display: flex;\n  padding: 0px 16px;\n  justify-content: space-between;\n}\n.h_info .info_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n}\n.main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n}\n.ion-float-right {\n  width: 20%;\n}\n.card_div {\n  display: flex;\n  margin-bottom: 15px;\n}\n.card_div img {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: solid 3px var(--white);\n  box-shadow: 0px 1px 2px 0px rgba(31, 140, 237, 0.2);\n}\n.card_div .data_div {\n  padding-left: 15px;\n}\n.card_div .data_div .name {\n  font-size: 12px;\n  font-family: \"sf_ui_md\";\n  color: var(--blue);\n  margin-top: 2px;\n  margin-bottom: 3px;\n}\n.card_div .data_div .name span ion-icon {\n  height: 14px;\n  width: 14px;\n  margin-left: 1px;\n  color: var(--star);\n}\n.card_div .data_div .name span .rated_ic {\n  color: var(--my_theme);\n}\n.card_div .data_div .ago {\n  font-size: 11px;\n  font-family: \"sf_ui_r\";\n  color: var(--lht_blue);\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n.card_div .data_div .detail {\n  font-size: 12px;\n}\n.card_div .data_div .help_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n.card_div .data_div .help_div .help_lbl {\n  font-size: 12px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\n.card_div .data_div .help_div ion-button {\n  width: 50px;\n  height: 20px;\n  --border-radius: 10px;\n  font-size: 10px;\n  font-family: \"sf_ui_md\";\n  --color: var(--white);\n  text-transform: capitalize;\n}\n.card_div .data_div .help_div .yes_btn {\n  --background: var(--my_theme);\n  margin-right: 10px;\n}\n.card_div .data_div .help_div .no_btn {\n  --background: var(--red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvcmV3YXJkL3Jld2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jld2FyZC9yZXdhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDQVI7QURJQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksc0JBQUE7QUNDWjtBREVJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURJQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDREo7QURFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1EQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDcEI7QURDZ0I7RUFDSSxzQkFBQTtBQ0NwQjtBREdRO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREdRO0VBQ0ksZUFBQTtBQ0RaO0FER1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDRFo7QURFWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0FoQjtBREVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBaEI7QURFWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURFWTtFQUNJLHdCQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmV3YXJkL3Jld2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgfVxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuLnByb2ZpbGVfZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAuaWNfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1teV90aGVtZSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbWdfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHZhcigtLW15X3RoZW1lKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJld2FyZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm9va19pZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gICAgY29sb3I6IHZhcigtLW15X3RoZW1lKTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5pbmZvX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICAgIH1cbn1cblxuLm1haW5fbGJsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5jYXJkX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0td2hpdGUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgzMSwgMTQwLCAyMzcsIDAuMik7XG4gICAgfVxuICAgIC5kYXRhX2RpdiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN0YXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmF0ZWRfaWMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWdvIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX3JcIjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHBfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAuaGVscF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC55ZXNfYnRuIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLW15X3RoZW1lKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm9fYnRuIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZmlsZV9kaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbi5wcm9maWxlX2RpdiAuaWNfZGl2IHtcbiAgaGVpZ2h0OiA0M3B4O1xuICB3aWR0aDogNDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1teV90aGVtZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2ZpbGVfZGl2IC5pY19kaXYgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xufVxuLnByb2ZpbGVfZGl2IC5pbWdfZGl2IHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xufVxuLnByb2ZpbGVfZGl2IC5pbWdfZGl2IGltZyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tbXlfdGhlbWUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZXdhcmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgY29sb3I6IHZhcigtLW15X3RoZW1lKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJvb2tfaWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaF9pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oX2luZm8gLmluZm9fbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG59XG5cbi5tYWluX2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYXJkX2RpdiBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMzEsIDE0MCwgMjM3LCAwLjIpO1xufVxuLmNhcmRfZGl2IC5kYXRhX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jYXJkX2RpdiAuZGF0YV9kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uY2FyZF9kaXYgLmRhdGFfZGl2IC5uYW1lIHNwYW4gaW9uLWljb24ge1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBjb2xvcjogdmFyKC0tc3Rhcik7XG59XG4uY2FyZF9kaXYgLmRhdGFfZGl2IC5uYW1lIHNwYW4gLnJhdGVkX2ljIHtcbiAgY29sb3I6IHZhcigtLW15X3RoZW1lKTtcbn1cbi5jYXJkX2RpdiAuZGF0YV9kaXYgLmFnbyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfclwiO1xuICBjb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkX2RpdiAuZGF0YV9kaXYgLmRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkX2RpdiAuZGF0YV9kaXYgLmhlbHBfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jYXJkX2RpdiAuZGF0YV9kaXYgLmhlbHBfZGl2IC5oZWxwX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG59XG4uY2FyZF9kaXYgLmRhdGFfZGl2IC5oZWxwX2RpdiBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZF9kaXYgLmRhdGFfZGl2IC5oZWxwX2RpdiAueWVzX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbXlfdGhlbWUpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2FyZF9kaXYgLmRhdGFfZGl2IC5oZWxwX2RpdiAubm9fYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/reward/reward.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/reward/reward.page.ts ***!
  \*********************************************/
/*! exports provided: RewardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardPage", function() { return RewardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let RewardPage = class RewardPage {
    constructor(popoverController, modalController, nav, route) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.nav = nav;
        this.route = route;
        this.selectedLocation = "Dr.Rose Ortiz";
        this.review = [
            {
                img: "../../../assets/image/arron.png",
                name: "Send final work evidence",
                ago: "Finished: 2 days ago",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: 1,
                color: 'success',
            },
            {
                img: "../../../assets/image/fionna.png",
                name: "Video and practice volumen 3",
                ago: "Not finished yet",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: .5,
                color: 'warning',
            },
            {
                img: "../../../assets/image/patricia.png",
                name: "Send work evidence",
                ago: "Finished: 2 days ago",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: 1,
                color: 'success',
            },
            {
                img: "../../../assets/image/jacob.png",
                name: "Video and practice volumen 2",
                ago: "Finished: 2 days ago",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: 1,
                color: 'success',
            },
            {
                img: "../../../assets/image/fionna.png",
                name: "Send work evidence",
                ago: "Not finished yet",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: .7,
                color: 'warning',
            },
            {
                img: "../../../assets/image/patricia.png",
                name: "Video and practice volumen 1",
                ago: "Not finished yet",
                detail: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
                average: .1,
                color: 'danger',
            },
        ];
        this.activeTab = "PatientInfo";
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.activeTab = params["id"];
        });
    }
    chageTab(name) {
        this.activeTab = name;
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*const modal = await this.modalController.create({
              component: CallModalPa,
              cssClass: "callModal",
            });
            return await modal.present();*/
        });
    }
    chat() {
        this.nav.navigateForward("/chat");
    }
};
RewardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RewardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reward',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reward.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reward/reward.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reward.page.scss */ "./src/app/pages/reward/reward.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RewardPage);



/***/ })

}]);
//# sourceMappingURL=pages-reward-reward-module-es2015.js.map