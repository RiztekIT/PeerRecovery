(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rewards-rewards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Rewards</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-bottom\">\n    <div class=\"head_div\">\n        <h3 class=\"main_lbl ion-padding-start head_lbl\">Rewards<span class=\"ion-float-right\"> </span>\n            <ion-toggle [(ngModel)]=\"this.all\" slot=\"end\" color=\"primary\" (ngModelChange)=\"allChange()\"></ion-toggle>\n        </h3>\n        <h5 class=\"submain_lbl ion-padding-start\">Meet your goals and get rewards!</h5>\n    </div>\n\n    <ion-list>\n\n        <ion-item *ngFor=\"let reward of this.rewards\" (click)=\"openReward(reward)\">\n            <ion-label>\n                <h2>{{reward.title}}</h2>\n                <p>{{reward.dateline.seconds*1000 | date}}</p>\n                <p>\n                    <ion-progress-bar [color]=\"getColor(reward)\" [value]=\"reward.advance\"></ion-progress-bar>\n                </p>\n            </ion-label>\n\n        </ion-item>\n\n\n\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rewards/rewards-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rewards/rewards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RewardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageRoutingModule", function() { return RewardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rewards.page */ "./src/app/pages/rewards/rewards.page.ts");




const routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_3__["RewardsPage"]
    }
];
let RewardsPageRoutingModule = class RewardsPageRoutingModule {
};
RewardsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RewardsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rewards/rewards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.module.ts ***!
  \*************************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewards-routing.module */ "./src/app/pages/rewards/rewards-routing.module.ts");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "./src/app/pages/rewards/rewards.page.ts");







let RewardsPageModule = class RewardsPageModule {
};
RewardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__["RewardsPageRoutingModule"]
        ],
        declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
    })
], RewardsPageModule);



/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ion-header {\n    ion-back-button {\n        color: var(--blue);\n    }\n    ion-title {\n        color: var(--blue);\n        text-align: center;\n        font-size: 18px;\n        font-family: \"sf_ui_sb\";\n        text-transform: capitalize;\n    }\n}\n\n.main_lbl {\n    font-size: 18px;\n    color: var(--ion-color-primary-dark);\n    font-family: 'sfUi-m';\n}\n\n.submain_lbl {\n    font-size: 12px;\n    color: var(--ion-color-step-600, #666666);\n    font-family: 'sfUi-m';\n}\n\nion-avatar {\n    width: 55px;\n    height: 55px;\n} */\nion-header ion-back-button {\n  color: var(--blue);\n}\nion-header ion-title {\n  color: var(--blue);\n  text-align: center;\n  font-size: 18px;\n  font-family: \"sf_ui_sb\";\n  text-transform: capitalize;\n}\nion-content .main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .date_div {\n  background-color: var(--div_back);\n  margin-top: 10px;\n}\nion-content .date_div ion-col {\n  text-align: center;\n  padding: 11px 0px 0px 0px;\n}\nion-content .date_div ion-col .date_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-content .date_div ion-col ion-datetime {\n  color: var(--my_theme);\n  font-family: \"sf_ui_md\";\n  font-size: 14px;\n  padding-left: 0;\n  padding-top: 5px;\n  padding-bottom: 0;\n}\nion-content .date_div ion-col .time_l {\n  color: var(--blue);\n  margin-bottom: 10px;\n}\n.stacked-lbl {\n  font-size: 19px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\nion-button {\n  font-family: \"sf_ui_md\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBK0JJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDRFI7QURNSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNIUjtBREtJO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtBQ0hSO0FESVE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDRlo7QURHWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0RoQjtBREdZO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RoQjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0RoQjtBRE9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLHVCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXdhcmRzL3Jld2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLWhlYWRlciB7XG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIH1cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9zYlwiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5tYWluX2xibCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XG59XG5cbi5zdWJtYWluX2xibCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2NjY2NjYpO1xuICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xufSAqL1xuXG5pb24taGVhZGVyIHtcbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgfVxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC5tYWluX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5kYXRlX2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgLmRhdGVfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbWVfbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdGFja2VkLWxibCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbn0iLCIvKiBpb24taGVhZGVyIHtcbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgfVxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX3NiXCI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuLm1haW5fbGJsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcbn1cblxuLnN1Ym1haW5fbGJsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzY2NjY2Nik7XG4gICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG59ICovXG5pb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfc2JcIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1jb250ZW50IC5tYWluX2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweCAwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIC5kYXRlX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCAudGltZV9sIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3RhY2tlZC1sYmwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.ts ***!
  \***********************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reward.service */ "./src/app/services/reward.service.ts");




let RewardsPage = class RewardsPage {
    constructor(nav, rewardsSVC) {
        this.nav = nav;
        this.rewardsSVC = rewardsSVC;
        this.rewards = [];
        this.all = true;
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.getRewards(this.user);
    }
    openReward(reward) {
        //console.log(reward);
        this.rewardsSVC.rewardSelected = reward;
        this.nav.navigateForward("/reward");
    }
    getRewards(user) {
        this.rewardsSVC.getRewards(user.uid).on('value', resp => {
            this.rewards = [];
            resp.forEach((child) => {
                let item = child.val();
                item.rewardkey = child.key;
                item.advance = this.getPorcent(item);
                if (this.all) {
                    this.rewards.push(item);
                }
                else {
                    if (item.advance < 1) {
                        this.rewards.push(item);
                    }
                }
            });
            console.log(this.rewards);
        });
    }
    getPorcent(reward) {
        console.log(reward.task);
        let total = reward.task.length;
        let done = 0;
        for (let i = 0; i < total; i++) {
            if (reward.task[i].done) {
                done = done + 1;
            }
        }
        let ad = done / total;
        return ad;
    }
    getColor(reward) {
        if (reward.advance < .20) {
            return 'danger';
        }
        else if (reward.advance < .80) {
            return 'warning';
        }
        else {
            return 'success';
        }
    }
    allChange() {
        this.getRewards(this.user);
    }
};
RewardsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_reward_service__WEBPACK_IMPORTED_MODULE_3__["RewardService"] }
];
RewardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rewards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rewards.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards/rewards.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rewards.page.scss */ "./src/app/pages/rewards/rewards.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_reward_service__WEBPACK_IMPORTED_MODULE_3__["RewardService"]])
], RewardsPage);



/***/ })

}]);
//# sourceMappingURL=pages-rewards-rewards-module-es2015.js.map