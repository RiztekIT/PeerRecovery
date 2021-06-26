(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>{{this.authSVC.usersign.displayName}}\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>{{locatio}}</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <!--<ion-toolbar>\n        <ion-input (ionFocus)=\"goToSearch()\" placeholder=\"Search Doctor...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>-->\n</ion-header>\n\n\n<ion-content class=\"ion-padding-bottom\">\n\n    <div class=\"head_div\">\n        <h3 class=\"main_lbl head_lbl\">Next appointments <span class=\"ion-float-right\">Total: {{totalAppointments}}</span></h3>\n    </div>\n\n    <div>\n        <h5>{{this.resp}}</h5>\n    </div>\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of Appointments\">\n        <p class=\"time\">{{item.time | TimeFormat}}</p>\n        <div class=\"card_div\">\n            <!--<img [src]=\"item?.img\">-->\n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.date | date: 'mediumDate' }}</span></h3>\n                <!--<p class=\"age\">Age : {{item?.age}}</p>-->\n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <div>\n    </div>\n\n\n\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\" (click)=\"presentAlert()\">\n    <ion-toolbar color=\"danger\">\n    </ion-toolbar>\n</ion-footer>\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" (click)=\"presentAlert()\">\n    <ion-fab-button color=\"danger\">\n        <ion-icon name=\"radio-outline\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n\n\n<!--  \n<ion-content class=\"ion-padding\">\n\n    <h2 class=\"heading margin-bottom-17\">Upcoming Appointment</h2>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment inProgress margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">cardiologist</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">11:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Dermatology</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">01:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">Specialist\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllSpecialist()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"specialist-container\">\n        <div (click)=\"goToDoctorDetail()\" *ngFor=\"let i of specialist\" class=\"specialist margin-right-17\">\n            <img class=\"margin-bottom-4\" [src]=\"i?.img\">\n            <h2>{{i?.name}}</h2>\n            <h3 class=\"padding-bottom-6\">{{i?.specialist}}</h3>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-15\">Treatments\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllTreatments()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"treatments margin-bottom-23\">\n        <div (click)=\"goToAllSpecialist()\" *ngFor=\"let i of treatments\" class=\"treatment margin-right-20\">\n            <div class=\"image-container\">\n                <ion-icon [style.color]=\"i?.color\" src=\"../../../assets/imgs/appicons/traingle.svg\"></ion-icon>\n                <img [src]=\"i?.img\">\n            </div>\n            <h2 class=\"name margin-top-4\">{{i?.name}}</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">What are you looking for?</h2>\n\n    <div class=\"looking-container\">\n        <div (click)=\"goToAllSpecialist()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Meet a Doctor</h2>\n                <h3 class=\"margin-left-9\">Book Appointment</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n        <div (click)=\"goToChatWithDoc()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Consult with Doctor\n                </h2>\n                <h3 class=\"margin-left-9\">Private chat with doctor</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-20\">Offers</h2>\n\n    <div class=\"offer-container\">\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer1.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">30% Off on Checkup</h2>\n        </div>\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer2.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">50% Off on Face Treatment</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-23\">Favorite Doctor\n        <ion-button (click)=\"goToAllFavoriteDoctor()\" class=\"view-btn\" fill=\"clear\">\n            View all\n        </ion-button>\n    </h2>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"fav-doctors margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Nancy Stewart\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Orthopedics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$50</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Dan Collins\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Paediatrics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$70</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"plan-offer-banner\">\n        <div class=\"content margin-right-15 margin-left-15\">\n            <div class=\"top-line padding-top-18 margin-bottom-18\">\n                <h2 class=\"app-name margin-right-8\">Doctro</h2>\n                <div class=\"plus-label\">Plus</div>\n            </div>\n            <p class=\"offer-txt margin-bottom-5\">\n                Unlimited chat with doctors of any specialty\n            </p>\n            <p class=\"price\">\n                At just $199/month\n            </p>\n            <ion-button (click)=\"goToBuyPlan()\" class=\"plan-btn margin-top-30 margin-bottom-13\">\n                Buy Plan Now\n                <ion-icon class=\"margin-left-4\" name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n        </div>\n        <img src=\"../../../assets/imgs/plan_offer.png\">\n    </div>\n\n</ion-content>-->");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer ion-toolbar {\n  height: 30px;\n  border-top-right-radius: 100%;\n  border-top-left-radius: 100%;\n}\n\nion-fab-button {\n  margin: -17px 2px;\n  width: 65px;\n  height: 54px;\n  line-height: 40px;\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, -0.8), 0 6px 10px 0 rgba(0, 0, 0, -0.86), 0 1px 18px 0 rgba(0, 0, 0, -0.95);\n  --box-shadow: none !important;\n}\n\nion-content .main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .date_div {\n  background-color: var(--div_back);\n  margin-top: 10px;\n}\n\nion-content .date_div ion-col {\n  text-align: center;\n  padding: 11px 0px 0px 0px;\n}\n\nion-content .date_div ion-col .date_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\n\nion-content .date_div ion-col ion-datetime {\n  color: var(--my_theme);\n  font-family: \"sf_ui_md\";\n  font-size: 14px;\n  padding-left: 0;\n  padding-top: 5px;\n  padding-bottom: 0;\n}\n\nion-content .date_div ion-col .time_l {\n  color: var(--blue);\n  margin-bottom: 10px;\n}\n\nion-content .date_div .first_Col {\n  /*border-right: solid;\n  border-right-color: var(--lht_blue);\n  border-right-width: 1px;*/\n}\n\nion-content .head_div {\n  height: 40px;\n  background-color: var(--div_back);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n}\n\nion-content .head_div .head_lbl {\n  margin: 0;\n  width: 100%;\n}\n\nion-content .head_div .head_lbl span {\n  font-size: 13px;\n  color: var(--lht_blue);\n}\n\nion-content .data_div {\n  display: flex;\n  padding: 10px 16px;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\nion-content .data_div .time {\n  font-size: 16px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  width: 50px;\n  text-align: center;\n}\n\nion-content .data_div .card_div {\n  display: flex;\n  margin-left: 10px;\n  padding: 10px 10px 10px 5px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);\n  width: 100%;\n}\n\nion-content .data_div .card_div img {\n  height: 58px;\n  width: 58px;\n  border-radius: 5px;\n}\n\nion-content .data_div .card_div .info_div {\n  padding-left: 15px;\n  width: 100%;\n  padding-top: 3px;\n}\n\nion-content .data_div .card_div .info_div .name {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .data_div .card_div .info_div .name span {\n  font-size: 12px;\n}\n\nion-content .data_div .card_div .info_div .age {\n  font-size: 12px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 3px 0px;\n}\n\nion-content .data_div .card_div .info_div .add {\n  font-size: 12px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_r\";\n  margin: 0;\n}\n\n.stacked-lbl {\n  font-size: 19px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\n\nion-content .heading {\n  font-size: 16px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .heading .view-btn {\n  height: auto;\n  width: auto;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\n\nion-content .upcoming-appointment,\nion-content .fav-doctors {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  --padding-start: 6px;\n  border-radius: 5px;\n}\n\nion-content .upcoming-appointment.inProgress,\nion-content .fav-doctors.inProgress {\n  --background: var(--ion-color-primary) !important;\n}\n\nion-content .upcoming-appointment.inProgress h2,\nion-content .upcoming-appointment.inProgress h3,\nion-content .upcoming-appointment.inProgress h4,\nion-content .upcoming-appointment.inProgress p,\nion-content .fav-doctors.inProgress h2,\nion-content .fav-doctors.inProgress h3,\nion-content .fav-doctors.inProgress h4,\nion-content .fav-doctors.inProgress p {\n  color: var(--ion-color-white) !important;\n}\n\nion-content .upcoming-appointment ion-thumbnail,\nion-content .fav-doctors ion-thumbnail {\n  height: 78px;\n  width: 78px;\n  margin-right: 10px;\n  position: relative;\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button,\nion-content .fav-doctors ion-thumbnail ion-button {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: auto;\n  width: auto;\n  margin: 0;\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon {\n  font-size: 15px;\n  color: var(--ion-color-gray);\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon.active,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon.active {\n  color: var(--ion-color-red);\n}\n\nion-content .upcoming-appointment ion-thumbnail img,\nion-content .fav-doctors ion-thumbnail img {\n  height: 78px;\n  width: 78px;\n  border-radius: 5px;\n}\n\nion-content .upcoming-appointment ion-label .dr-name,\nion-content .fav-doctors ion-label .dr-name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .upcoming-appointment ion-label .dr-name .date,\nion-content .fav-doctors ion-label .dr-name .date {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .upcoming-appointment ion-label .specialist,\nion-content .fav-doctors ion-label .specialist {\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .upcoming-appointment ion-label .location,\nion-content .upcoming-appointment ion-label .last-line,\nion-content .fav-doctors ion-label .location,\nion-content .fav-doctors ion-label .last-line {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .upcoming-appointment ion-label .location .time,\nion-content .upcoming-appointment ion-label .last-line .time,\nion-content .fav-doctors ion-label .location .time,\nion-content .fav-doctors ion-label .last-line .time {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .specialist-container {\n  display: flex;\n  overflow: scroll;\n  padding: 10px 0px;\n}\n\nion-content .specialist-container .specialist {\n  text-align: center;\n  width: 140px;\n  min-width: 140px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\n\nion-content .specialist-container .specialist img {\n  width: 97px;\n  height: 90px;\n  border-radius: 5px;\n}\n\nion-content .specialist-container .specialist h2 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .specialist-container .specialist h3 {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .offer-container {\n  display: flex;\n  overflow: scroll;\n  position: relative;\n}\n\nion-content .offer-container .offer {\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  min-width: 170px;\n}\n\nion-content .offer-container .offer .black-wrapper {\n  background: linear-gradient(180deg, #0000 25%, #000 138%);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-content .offer-container .offer h2 {\n  position: absolute;\n  bottom: 0;\n  font-size: 12px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-m\";\n}\n\nion-content .looking-container {\n  display: flex;\n  overflow: scroll;\n}\n\nion-content .looking-container .content {\n  display: flex;\n  background: #FCE5F9;\n  width: 165px;\n  min-width: 165px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\nion-content .looking-container .content div {\n  width: 42%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nion-content .looking-container .content div h2 {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .looking-container .content div h3 {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .looking-container .content:nth-child(2) {\n  background: #F8E9E6;\n}\n\nion-content .plan-offer-banner {\n  background: #EEECF9;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\n\nion-content .plan-offer-banner img {\n  position: absolute;\n  bottom: 0;\n  right: 7px;\n}\n\nion-content .plan-offer-banner .content {\n  width: 63%;\n}\n\nion-content .plan-offer-banner .content .top-line {\n  display: flex;\n  align-items: center;\n}\n\nion-content .plan-offer-banner .content .top-line .app-name {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .top-line .plus-label {\n  width: 75px;\n  height: 30px;\n  background: var(--ion-color-primary);\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\nion-content .plan-offer-banner .content .offer-txt {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .price {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .plan-btn {\n  --padding-start: 8px;\n  --padding-end: 0;\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 148px;\n  height: 40px;\n  font-size: 16px;\n  text-transform: capitalize;\n  font-family: \"sfUi-r\";\n  position: relative;\n  z-index: 99;\n}\n\nion-content .plan-offer-banner .content .plan-btn ion-icon {\n  font-size: 15px;\n}\n\nion-content .treatments {\n  display: flex;\n  overflow: scroll;\n}\n\nion-content .treatments .treatment .image-container {\n  height: 66px;\n  width: 66px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .treatments .treatment .image-container ion-icon {\n  font-size: 66px;\n}\n\nion-content .treatments .treatment .image-container img {\n  position: absolute;\n  min-height: 30px;\n  min-width: 30px;\n  max-height: 30px;\n  max-width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .treatments .treatment .name {\n  font-size: 12px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzSEFBQTtFQUNBLDZCQUFBO0FDREo7O0FES0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRlI7O0FESUk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDRFo7O0FERVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNBaEI7O0FERVk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCOztBREVZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURHUTtFQUNJOzsyQkFBQTtBQ0NaOztBRElJO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURJUTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FDRlo7O0FER1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUNEaEI7O0FES0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURJUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxr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b0NBQUE7RUFDQSxrQkFBQTtBQ1doQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAtMTdweCAycHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC0wLjgpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAtMC44NiksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC0wLjk1KTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAubWFpbl9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLmRhdGVfZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAuZGF0ZV9sYmwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW15X3RoZW1lKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWVfbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maXJzdF9Db2wge1xyXG4gICAgICAgICAgICAvKmJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDsqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkX2RpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgICAgICAvL21hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5oZWFkX2xibCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXRhX2RpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mb19kaXYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhY2tlZC1sYmwge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnZpZXctYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXBjb21pbmctYXBwb2ludG1lbnQsXHJcbiAgICAuZmF2LWRvY3RvcnMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICYuaW5Qcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgLmRyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BlY2lhbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICAubGFzdC1saW5lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3BlY2lhbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICAuc3BlY2lhbGlzdCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAxNiUpO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAub2ZmZXItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5vZmZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICAuYmxhY2std3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwMCAyNSUsICMwMDAgMTM4JSk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb29raW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZDRTVGOTtcclxuICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAxNiUpO1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y4RTlFNjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGxhbi1vZmZlci1iYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFRUVDRjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAxNiUpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MyU7XHJcbiAgICAgICAgICAgIC50b3AtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5hcHAtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGx1cy1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9mZmVyLXR4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxhbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQ4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50cmVhdG1lbnRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgLnRyZWF0bWVudCB7XHJcbiAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXNiJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogLTE3cHggMnB4O1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC0wLjgpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAtMC44NiksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC0wLjk1KTtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5tYWluX2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweCAwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIC5kYXRlX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogdmFyKC0tbXlfdGhlbWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgaW9uLWNvbCAudGltZV9sIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGVfZGl2IC5maXJzdF9Db2wge1xuICAvKmJvcmRlci1yaWdodDogc29saWQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDsqL1xufVxuaW9uLWNvbnRlbnQgLmhlYWRfZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRfZGl2IC5oZWFkX2xibCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuaGVhZF9kaXYgLmhlYWRfbGJsIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLnRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYgaW1nIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICB3aWR0aDogNThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiAuaW5mb19kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiAuaW5mb19kaXYgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAubmFtZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiAuaW5mb19kaXYgLmFnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDNweCAwcHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAuYWRkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9yXCI7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0YWNrZWQtbGJsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNvbnRlbnQgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5oZWFkaW5nIC52aWV3LWJ0biB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LmluUHJvZ3Jlc3MsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyBoMixcbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudC5pblByb2dyZXNzIGgzLFxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LmluUHJvZ3Jlc3MgaDQsXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyBwLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzLmluUHJvZ3Jlc3MgaDIsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyBoMyxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycy5pblByb2dyZXNzIGg0LFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzLmluUHJvZ3Jlc3MgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogNzhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiBpb24taWNvbixcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uIGlvbi1pY29uLmFjdGl2ZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24gaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi10aHVtYm5haWwgaW1nLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAuZHItbmFtZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmRyLW5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5kci1uYW1lIC5kYXRlLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAuZHItbmFtZSAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5zcGVjaWFsaXN0LFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAuc3BlY2lhbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tbGFiZWwgLmxvY2F0aW9uLFxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAubGFzdC1saW5lLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAubG9jYXRpb24sXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5sYXN0LWxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAubG9jYXRpb24gLnRpbWUsXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5sYXN0LWxpbmUgLnRpbWUsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5sb2NhdGlvbiAudGltZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmxhc3QtbGluZSAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTQwcHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IGltZyB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciAuc3BlY2lhbGlzdCBoMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciAuc3BlY2lhbGlzdCBoMyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAub2ZmZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLm9mZmVyLWNvbnRhaW5lciAub2ZmZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cbmlvbi1jb250ZW50IC5vZmZlci1jb250YWluZXIgLm9mZmVyIC5ibGFjay13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMDAgMjUlLCAjMDAwIDEzOCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5pb24tY29udGVudCAub2ZmZXItY29udGFpbmVyIC5vZmZlciBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjRkNFNUY5O1xuICB3aWR0aDogMTY1cHg7XG4gIG1pbi13aWR0aDogMTY1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIC5jb250ZW50IGRpdiB7XG4gIHdpZHRoOiA0MiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIC5jb250ZW50IGRpdiBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciAuY29udGVudCBkaXYgaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogI0Y4RTlFNjtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciB7XG4gIGJhY2tncm91bmQ6ICNFRUVDRjk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDdweDtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCB7XG4gIHdpZHRoOiA2MyU7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLnRvcC1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAudG9wLWxpbmUgLmFwcC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IC50b3AtbGluZSAucGx1cy1sYWJlbCB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLm9mZmVyLXR4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLnBsYW4tYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxNDhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAucGxhbi1idG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDY2cHg7XG4gIHdpZHRoOiA2NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnRyZWF0bWVudHMgLnRyZWF0bWVudCAuaW1hZ2UtY29udGFpbmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NnB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZWF0bWVudHMgLnRyZWF0bWVudCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXNiXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");











let HomePage = class HomePage {
    constructor(util, authSVC, geolocation, nativeGeocoder, platform, zone, alertController, nav, router, modalCtr, appointmentService, http, backgroundGeolocation) {
        //this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
        //this.getAppointments();
        this.util = util;
        this.authSVC = authSVC;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.zone = zone;
        this.alertController = alertController;
        this.nav = nav;
        this.router = router;
        this.modalCtr = modalCtr;
        this.appointmentService = appointmentService;
        this.http = http;
        this.backgroundGeolocation = backgroundGeolocation;
        this.Appointments = [];
        this.totalAppointments = 4;
        this.resp = '';
        this.specialist = [
            {
                name: "Dr.Janice Bailey",
                specialist: "Gynaecology",
                img: "../../../assets/imgs/data/Specialist/Specialist1.png",
            },
            {
                name: "Dr.Matthew Willis",
                specialist: "General Surgeon",
                img: "../../../assets/imgs/data/Specialist/Specialist2.png",
            },
            {
                name: "Dr.Diana Willis",
                specialist: "Homeopathic",
                img: "../../../assets/imgs/data/Specialist/Specialist3.png",
            },
        ];
        this.treatments = [
            {
                img: "../../../assets/imgs/data/home/treat1.svg",
                name: "General Medicine",
                color: "#81BA83",
            },
            {
                img: "../../../assets/imgs/data/home/treat2.svg",
                name: "Woman's Health",
                color: "#E48A84",
            },
            {
                img: "../../../assets/imgs/data/home/treat3.svg",
                name: "Bone & Joints",
                color: "#A585BD",
            },
            {
                img: "../../../assets/imgs/data/home/treat4.svg",
                name: "Skin & Hair",
                color: "#00A8E5",
            },
        ];
        this.gps_update_link = "https://peerrecovery-app-default-rtdb.firebaseio.com/Tracking/2ZrxjV7h9yNEQNOEv41Pn0Oaedr2/Current.json";
    }
    ngOnInit() {
        this.locatio = 'Chihuahua, Chihuahua';
        this.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
        /*    this.getLocation();
           this.getLocation2(); */
        this.initializeApp();
    }
    ionViewWillEnter() {
        this.util.menuCtrl.enable(true);
    }
    startBackgroundGeolocation() {
        const config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 5,
            debug: true,
            stopOnTerminate: false,
            notificationTitle: "PeerRecovery Tracking 2",
            notificationText: "Tracking",
        };
        this.backgroundGeolocation.configure(config).then(() => {
            this.backgroundGeolocation
                .on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocationEvents"].location)
                .subscribe((location) => {
                console.log(location);
                this.backgroundGeolocation.startTask().then(res => {
                    /* this.sendGPS(location); */
                });
                /* this.sendGPS(location); */
                this.getGPS();
                //this.getGPS()
                //this.authSVC.updateLocation(location.latitude,location.longitude, this.authSVC.usersign)
                /* this.getLocation(location.latitude,location.longitude); */
                this.backgroundGeolocation.finish().then(res => {
                    this.getGPS();
                });
                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
            });
        });
        // start recording location
        this.backgroundGeolocation.start();
        // If you wish to turn OFF background-tracking, call the #stop method.
        //this.backgroundGeolocation.stop();
    }
    sendGPS(location) {
        if (location.speed == undefined) {
            location.speed = 0;
        }
        let timestamp = new Date(location.time);
        this.http
            .put(this.gps_update_link, // backend api to post
        {
            lat: location.latitude,
            lng: location.longitude,
            speed: location.speed,
            timestamp: timestamp
        }, {})
            .then(data => {
            /* this.backgroundGeolocation.finish(); // FOR IOS ONLY */
        })
            .catch(error => {
            /* this.backgroundGeolocation.finish(); // FOR IOS ONLY */
        });
    }
    put(lat, lng) {
        let timestamp = new Date();
        /*
            let data = {
              lat: lat,
              lng: lng,
              timestamp: {
                "nanoseconds": 870000000,
                "seconds": 1624645817
            }
            } */
        let data = {
            "lat": 39.7420054,
            "lng": -106.146794,
            "timestamp": {
                "nanoseconds": 870000000,
                "seconds": 1624645817
            }
        };
        let headers = {
            'Content-Type': 'application/json',
            'Content-Length': '150',
            'Host': 'peerrecovery-app-default-rtdb.firebaseio.com'
        };
        console.log(data);
        console.log(headers);
        /* let d = '{"lat":39.7420054,"lng":-106.146794,"timestamp":{"nanoseconds":870000000,"seconds":1624645817}}' */
        /* console.log(d); */
        this.http.put('https://peerrecovery-app-default-rtdb.firebaseio.com/Tracking/2ZrxjV7h9yNEQNOEv41Pn0Oaedr2/Current.json', data, headers).then(res => {
            console.log(res, 'RESPUESTA');
        }).catch(e => {
            console.log(e, 'ERROR');
        });
        /*
            this.http
              .put(
                this.gps_update_link, // backend api to post
                {
                  lat: lat,
                  lng: lng,
                  timestamp: {
                    "nanoseconds": 870000000,
                    "seconds": 1624645817
                }
                },
                {}
              )
              .then(data => {
              
                this.backgroundGeolocation.finish(); // FOR IOS ONLY
              })
              .catch(error => {
              
                this.backgroundGeolocation.finish(); // FOR IOS ONLY
              }); */
    }
    getGPS() {
        /* Swal.showLoading(); */
        navigator.geolocation.watchPosition(resp => {
            console.log(resp);
            let pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            //this.put(resp.coords.latitude,resp.coords.longitude)
            this.authSVC.updateLocation(resp.coords.latitude, resp.coords.longitude, this.authSVC.usersign);
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
        });
    }
    getLocation(lat, long) {
        const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`, {}, {}).then(data => {
            let l = JSON.parse(data.data);
            this.locatio = l.results[0].formatted_address;
            this.backgroundGeolocation.finish();
        });
    }
    getAppointments() {
        this.appointmentService.getAppointments().on('value', resp => {
            this.Appointments = [];
            resp.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                this.Appointments.push(item);
            });
            console.log(resp);
            console.log(this.Appointments);
        });
    }
    openAppointmentPage(item) {
        let appointment = {
            appointmentID: item.key,
        };
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(appointment)
            }
        };
        this.router.navigate(['appointment'], navigationExtras);
    }
    newAppointmentPage() {
        this.router.navigate(['appointment']);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Are you in trouble?, click on confirm to continue!</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm!',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToSearch() {
        this.util.navCtrl.navigateForward("search");
    }
    goToAppointmentDetail() { }
    goToAllSpecialist() {
        this.util.navCtrl.navigateForward("doctorCardView");
    }
    goToDoctorDetail() { }
    goToAllTreatments() { }
    goToAllFavoriteDoctor() { }
    goToChatWithDoc() {
        this.util.navCtrl.navigateForward("chatWithDoctor");
    }
    goToBuyPlan() { }
    getLocationn() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            console.log(data);
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    getLocation2() {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
            .then((result) => console.log(JSON.stringify(result[0])))
            .catch((error) => console.log(error));
        /*   this.nativeGeocoder.forwardGeocode('Berlin', options)
            .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
            .catch((error: any) => console.log(error)); */
    }
    /*  */
    initializeApp() {
        this.platform.ready().then(() => {
            //this.getUserLocation();
            //this.getGPS()
            this.startBackgroundGeolocation();
            //this.put(1,1);
            //this.backgroundGeolocation.start();
        });
    }
    getUserLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            }
        }).catch((error) => {
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            let options = {
                useLocale: true,
                maxResults: 5
            };
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                console.log('not cordove');
                this.getGeoLocation(data.coords.latitude, data.coords.longitude);
            }
        });
    }
    getGeoLocation(lat, lng, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.geolocation) {
                let geocoder = yield new google.maps.Geocoder();
                let latlng = yield new google.maps.LatLng(lat, lng);
                let request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        let result = results[0];
                        this.zone.run(() => {
                            if (result != null) {
                                this.userCity = result.formatted_address;
                                if (type === 'reverseGeocode') {
                                    this.latLngResult = result.formatted_address;
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    reverseGeocode(lat, lng) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then((result) => this.userLocationFromLatLng = result[0])
                .catch((error) => console.log(error));
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    }
    forwardGeocode(address) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options)
                .then((result) => {
                this.zone.run(() => {
                    this.lat = result[0].latitude;
                    this.lng = result[0].longitude;
                });
            })
                .catch((error) => console.log(error));
        }
        else {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.zone.run(() => {
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    alert('Error - ' + results + ' & Status - ' + status);
                }
            });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
        _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map