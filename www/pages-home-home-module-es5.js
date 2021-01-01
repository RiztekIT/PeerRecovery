function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>{{this.authSVC.usersign.displayName}}\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>{{locatio}}</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-input (ionFocus)=\"goToSearch()\" placeholder=\"Search Doctor...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <h2 class=\"heading margin-bottom-17\">Upcoming Appointment</h2>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment inProgress margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">cardiologist</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">11:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Dermatology</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">01:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">Specialist\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllSpecialist()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"specialist-container\">\n        <div (click)=\"goToDoctorDetail()\" *ngFor=\"let i of specialist\" class=\"specialist margin-right-17\">\n            <img class=\"margin-bottom-4\" [src]=\"i?.img\">\n            <h2>{{i?.name}}</h2>\n            <h3 class=\"padding-bottom-6\">{{i?.specialist}}</h3>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-15\">Treatments\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllTreatments()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"treatments margin-bottom-23\">\n        <div (click)=\"goToAllSpecialist()\" *ngFor=\"let i of treatments\" class=\"treatment margin-right-20\">\n            <div class=\"image-container\">\n                <ion-icon [style.color]=\"i?.color\" src=\"../../../assets/imgs/appicons/traingle.svg\"></ion-icon>\n                <img [src]=\"i?.img\">\n            </div>\n            <h2 class=\"name margin-top-4\">{{i?.name}}</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">What are you looking for?</h2>\n\n    <div class=\"looking-container\">\n        <div (click)=\"goToAllSpecialist()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Meet a Doctor</h2>\n                <h3 class=\"margin-left-9\">Book Appointment</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n        <div (click)=\"goToChatWithDoc()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Consult with Doctor\n                </h2>\n                <h3 class=\"margin-left-9\">Private chat with doctor</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-20\">Offers</h2>\n\n    <div class=\"offer-container\">\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer1.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">30% Off on Checkup</h2>\n        </div>\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer2.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">50% Off on Face Treatment</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-23\">Favorite Doctor\n        <ion-button (click)=\"goToAllFavoriteDoctor()\" class=\"view-btn\" fill=\"clear\">\n            View all\n        </ion-button>\n    </h2>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"fav-doctors margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Nancy Stewart\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Orthopedics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$50</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Dan Collins\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Paediatrics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$70</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"plan-offer-banner\">\n        <div class=\"content margin-right-15 margin-left-15\">\n            <div class=\"top-line padding-top-18 margin-bottom-18\">\n                <h2 class=\"app-name margin-right-8\">Doctro</h2>\n                <div class=\"plus-label\">Plus</div>\n            </div>\n            <p class=\"offer-txt margin-bottom-5\">\n                Unlimited chat with doctors of any specialty\n            </p>\n            <p class=\"price\">\n                At just $199/month\n            </p>\n            <ion-button (click)=\"goToBuyPlan()\" class=\"plan-btn margin-top-30 margin-bottom-13\">\n                Buy Plan Now\n                <ion-icon class=\"margin-left-4\" name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n        </div>\n        <img src=\"../../../assets/imgs/plan_offer.png\">\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .heading {\n  font-size: 16px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .heading .view-btn {\n  height: auto;\n  width: auto;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\nion-content .upcoming-appointment,\nion-content .fav-doctors {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  --padding-start: 6px;\n  border-radius: 5px;\n}\nion-content .upcoming-appointment.inProgress,\nion-content .fav-doctors.inProgress {\n  --background: var(--ion-color-primary) !important;\n}\nion-content .upcoming-appointment.inProgress h2,\nion-content .upcoming-appointment.inProgress h3,\nion-content .upcoming-appointment.inProgress h4,\nion-content .upcoming-appointment.inProgress p,\nion-content .fav-doctors.inProgress h2,\nion-content .fav-doctors.inProgress h3,\nion-content .fav-doctors.inProgress h4,\nion-content .fav-doctors.inProgress p {\n  color: var(--ion-color-white) !important;\n}\nion-content .upcoming-appointment ion-thumbnail,\nion-content .fav-doctors ion-thumbnail {\n  height: 78px;\n  width: 78px;\n  margin-right: 10px;\n  position: relative;\n}\nion-content .upcoming-appointment ion-thumbnail ion-button,\nion-content .fav-doctors ion-thumbnail ion-button {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: auto;\n  width: auto;\n  margin: 0;\n}\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon {\n  font-size: 15px;\n  color: var(--ion-color-gray);\n}\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon.active,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon.active {\n  color: var(--ion-color-red);\n}\nion-content .upcoming-appointment ion-thumbnail img,\nion-content .fav-doctors ion-thumbnail img {\n  height: 78px;\n  width: 78px;\n  border-radius: 5px;\n}\nion-content .upcoming-appointment ion-label .dr-name,\nion-content .fav-doctors ion-label .dr-name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .upcoming-appointment ion-label .dr-name .date,\nion-content .fav-doctors ion-label .dr-name .date {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content .upcoming-appointment ion-label .specialist,\nion-content .fav-doctors ion-label .specialist {\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .upcoming-appointment ion-label .location,\nion-content .upcoming-appointment ion-label .last-line,\nion-content .fav-doctors ion-label .location,\nion-content .fav-doctors ion-label .last-line {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content .upcoming-appointment ion-label .location .time,\nion-content .upcoming-appointment ion-label .last-line .time,\nion-content .fav-doctors ion-label .location .time,\nion-content .fav-doctors ion-label .last-line .time {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .specialist-container {\n  display: flex;\n  overflow: scroll;\n  padding: 10px 0px;\n}\nion-content .specialist-container .specialist {\n  text-align: center;\n  width: 140px;\n  min-width: 140px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\nion-content .specialist-container .specialist img {\n  width: 97px;\n  height: 90px;\n  border-radius: 5px;\n}\nion-content .specialist-container .specialist h2 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\nion-content .specialist-container .specialist h3 {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\nion-content .offer-container {\n  display: flex;\n  overflow: scroll;\n  position: relative;\n}\nion-content .offer-container .offer {\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  min-width: 170px;\n}\nion-content .offer-container .offer .black-wrapper {\n  background: linear-gradient(180deg, #0000 25%, #000 138%);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\nion-content .offer-container .offer h2 {\n  position: absolute;\n  bottom: 0;\n  font-size: 12px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-m\";\n}\nion-content .looking-container {\n  display: flex;\n  overflow: scroll;\n}\nion-content .looking-container .content {\n  display: flex;\n  background: #FCE5F9;\n  width: 165px;\n  min-width: 165px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\nion-content .looking-container .content div {\n  width: 42%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\nion-content .looking-container .content div h2 {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .looking-container .content div h3 {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-secondary);\n}\nion-content .looking-container .content:nth-child(2) {\n  background: #F8E9E6;\n}\nion-content .plan-offer-banner {\n  background: #EEECF9;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\nion-content .plan-offer-banner img {\n  position: absolute;\n  bottom: 0;\n  right: 7px;\n}\nion-content .plan-offer-banner .content {\n  width: 63%;\n}\nion-content .plan-offer-banner .content .top-line {\n  display: flex;\n  align-items: center;\n}\nion-content .plan-offer-banner .content .top-line .app-name {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .plan-offer-banner .content .top-line .plus-label {\n  width: 75px;\n  height: 30px;\n  background: var(--ion-color-primary);\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\nion-content .plan-offer-banner .content .offer-txt {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .plan-offer-banner .content .price {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\nion-content .plan-offer-banner .content .plan-btn {\n  --padding-start: 8px;\n  --padding-end: 0;\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 148px;\n  height: 40px;\n  font-size: 16px;\n  text-transform: capitalize;\n  font-family: \"sfUi-r\";\n  position: relative;\n  z-index: 99;\n}\nion-content .plan-offer-banner .content .plan-btn ion-icon {\n  font-size: 15px;\n}\nion-content .treatments {\n  display: flex;\n  overflow: scroll;\n}\nion-content .treatments .treatment .image-container {\n  height: 66px;\n  width: 66px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .treatments .treatment .image-container ion-icon {\n  font-size: 66px;\n}\nion-content .treatments .treatment .image-container img {\n  position: absolute;\n  min-height: 30px;\n  min-width: 30px;\n  max-height: 30px;\n  max-width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .treatments .treatment .name {\n  font-size: 12px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNDWjtBREVJOztFQUVJLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7O0VBT0ksaURBQUE7QUNKWjtBREZZOzs7Ozs7OztFQUlJLHdDQUFBO0FDUWhCO0FESlE7O0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDT1o7QUROWTs7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1NoQjtBRFJnQjs7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNXcEI7QURWb0I7O0VBQ0ksMkJBQUE7QUNheEI7QURUWTs7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWWhCO0FEUlk7O0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNXaEI7QURWZ0I7O0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNhcEI7QURWWTs7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ2FoQjtBRFhZOzs7O0VBRUksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNlaEI7QURkZ0I7Ozs7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ21CcEI7QURkSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZ0JSO0FEZlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDaUJaO0FEaEJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2tCaEI7QURoQlk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ2tCaEI7QURoQlk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ2tCaEI7QURkSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZ0JSO0FEZlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2lCWjtBRGhCWTtFQUNJLHlEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2tCaEI7QURoQlk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ2tCaEI7QURkSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2dCUjtBRGZRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNpQlo7QURoQlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNrQmhCO0FEakJnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDbUJwQjtBRGpCZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ21CcEI7QURmUTtFQUNJLG1CQUFBO0FDaUJaO0FEZEk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ2dCUjtBRGZRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2lCWjtBRGZRO0VBQ0ksVUFBQTtBQ2lCWjtBRGhCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2tCaEI7QURqQmdCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNtQnBCO0FEakJnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNtQnBCO0FEaEJZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNrQmhCO0FEaEJZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNrQmhCO0FEaEJZO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDa0JoQjtBRGpCZ0I7RUFDSSxlQUFBO0FDbUJwQjtBRGRJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDZ0JSO0FEZFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNnQmhCO0FEZmdCO0VBQ0ksZUFBQTtBQ2lCcEI7QURmZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNpQnBCO0FEZFk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDZ0JoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudmlldy1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51cGNvbWluZy1hcHBvaW50bWVudCxcclxuICAgIC5mYXYtZG9jdG9ycyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgJi5pblByb2dyZXNzIHtcclxuICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgIGgzLFxyXG4gICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAuZHItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGVjaWFsaXN0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9jYXRpb24sXHJcbiAgICAgICAgICAgIC5sYXN0LWxpbmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zcGVjaWFsaXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgIC5zcGVjaWFsaXN0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vZmZlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLm9mZmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIC5ibGFjay13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAwIDI1JSwgIzAwMCAxMzglKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvb2tpbmctY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkNFNUY5O1xyXG4gICAgICAgICAgICB3aWR0aDogMTY1cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTY1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhFOUU2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wbGFuLW9mZmVyLWJhbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VFRUNGOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYzJTtcclxuICAgICAgICAgICAgLnRvcC1saW5lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmFwcC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wbHVzLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub2ZmZXItdHh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGFuLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLXInO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRyZWF0bWVudHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAudHJlYXRtZW50IHtcclxuICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktc2InO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5oZWFkaW5nIC52aWV3LWJ0biB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LmluUHJvZ3Jlc3MsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyBoMixcbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudC5pblByb2dyZXNzIGgzLFxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LmluUHJvZ3Jlc3MgaDQsXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyBwLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzLmluUHJvZ3Jlc3MgaDIsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyBoMyxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycy5pblByb2dyZXNzIGg0LFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzLmluUHJvZ3Jlc3MgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogNzhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiBpb24taWNvbixcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JheSk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uIGlvbi1pY29uLmFjdGl2ZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24gaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZWQpO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi10aHVtYm5haWwgaW1nLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAuZHItbmFtZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmRyLW5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5kci1uYW1lIC5kYXRlLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAuZHItbmFtZSAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5zcGVjaWFsaXN0LFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAuc3BlY2lhbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tbGFiZWwgLmxvY2F0aW9uLFxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAubGFzdC1saW5lLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAubG9jYXRpb24sXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5sYXN0LWxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAubG9jYXRpb24gLnRpbWUsXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5sYXN0LWxpbmUgLnRpbWUsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5sb2NhdGlvbiAudGltZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmxhc3QtbGluZSAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTQwcHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IGltZyB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciAuc3BlY2lhbGlzdCBoMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC5zcGVjaWFsaXN0LWNvbnRhaW5lciAuc3BlY2lhbGlzdCBoMyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAub2ZmZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLm9mZmVyLWNvbnRhaW5lciAub2ZmZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cbmlvbi1jb250ZW50IC5vZmZlci1jb250YWluZXIgLm9mZmVyIC5ibGFjay13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMDAgMjUlLCAjMDAwIDEzOCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5pb24tY29udGVudCAub2ZmZXItY29udGFpbmVyIC5vZmZlciBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjRkNFNUY5O1xuICB3aWR0aDogMTY1cHg7XG4gIG1pbi13aWR0aDogMTY1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIC5jb250ZW50IGRpdiB7XG4gIHdpZHRoOiA0MiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIC5jb250ZW50IGRpdiBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciAuY29udGVudCBkaXYgaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogI0Y4RTlFNjtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciB7XG4gIGJhY2tncm91bmQ6ICNFRUVDRjk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDdweDtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCB7XG4gIHdpZHRoOiA2MyU7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLnRvcC1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAudG9wLWxpbmUgLmFwcC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IC50b3AtbGluZSAucGx1cy1sYWJlbCB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLm9mZmVyLXR4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAucHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLnBsYW4tYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxNDhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJzZlVpLXJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAucGxhbi1idG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDY2cHg7XG4gIHdpZHRoOiA2NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnRyZWF0bWVudHMgLnRyZWF0bWVudCAuaW1hZ2UtY29udGFpbmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NnB4O1xufVxuaW9uLWNvbnRlbnQgLnRyZWF0bWVudHMgLnRyZWF0bWVudCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLXNiXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(util, authSVC, geolocation, nativeGeocoder) {
        _classCallCheck(this, HomePage);

        this.util = util;
        this.authSVC = authSVC;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.specialist = [{
          name: "Dr.Janice Bailey",
          specialist: "Gynaecology",
          img: "../../../assets/imgs/data/Specialist/Specialist1.png"
        }, {
          name: "Dr.Matthew Willis",
          specialist: "General Surgeon",
          img: "../../../assets/imgs/data/Specialist/Specialist2.png"
        }, {
          name: "Dr.Diana Willis",
          specialist: "Homeopathic",
          img: "../../../assets/imgs/data/Specialist/Specialist3.png"
        }];
        this.treatments = [{
          img: "../../../assets/imgs/data/home/treat1.svg",
          name: "General Medicine",
          color: "#81BA83"
        }, {
          img: "../../../assets/imgs/data/home/treat2.svg",
          name: "Woman's Health",
          color: "#E48A84"
        }, {
          img: "../../../assets/imgs/data/home/treat3.svg",
          name: "Bone & Joints",
          color: "#A585BD"
        }, {
          img: "../../../assets/imgs/data/home/treat4.svg",
          name: "Skin & Hair",
          color: "#00A8E5"
        }];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locatio = 'Chihuahua, Chihuahua';
          this.getLocation();
          this.getLocation2();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.util.menuCtrl.enable(true);
        }
      }, {
        key: "goToSearch",
        value: function goToSearch() {
          this.util.navCtrl.navigateForward("search");
        }
      }, {
        key: "goToAppointmentDetail",
        value: function goToAppointmentDetail() {}
      }, {
        key: "goToAllSpecialist",
        value: function goToAllSpecialist() {
          this.util.navCtrl.navigateForward("doctorCardView");
        }
      }, {
        key: "goToDoctorDetail",
        value: function goToDoctorDetail() {}
      }, {
        key: "goToAllTreatments",
        value: function goToAllTreatments() {}
      }, {
        key: "goToAllFavoriteDoctor",
        value: function goToAllFavoriteDoctor() {}
      }, {
        key: "goToChatWithDoc",
        value: function goToChatWithDoc() {
          this.util.navCtrl.navigateForward("chatWithDoctor");
        }
      }, {
        key: "goToBuyPlan",
        value: function goToBuyPlan() {}
      }, {
        key: "getLocation",
        value: function getLocation() {
          this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp); // resp.coords.latitude
            // resp.coords.longitude
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            console.log(data); // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
          });
        }
      }, {
        key: "getLocation2",
        value: function getLocation2() {
          var options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options).then(function (result) {
            return console.log(JSON.stringify(result[0]));
          })["catch"](function (error) {
            return console.log(error);
          });
          /*   this.nativeGeocoder.forwardGeocode('Berlin', options)
              .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
              .catch((error: any) => console.log(error)); */
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map