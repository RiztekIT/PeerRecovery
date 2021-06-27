(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>Patrick Stanley\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>46 Park Avenue 98 Station Road, Wembley London</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-input value=\"Orthopedics Doctor\" #search autofocus=\"true\" placeholder=\"Search Doctor...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <agm-map [styles]=\"styles\" [disableDefaultUI]=\"false\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [zoomControl]=\"false\">\n        <agm-overlay *ngFor=\"let item of markers\" [latitude]=\"item.lat\" [longitude]=\"item.lng\">\n            <div *ngIf=\"item.isOpen == true\" (click)=\"onMarkerSelect(item)\" [class.selected]=\"item.select\" class=\"open avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div>\n\n            <div *ngIf=\"item.isOpen == false\" class=\"avatar avatar_round\">\n                <img [src]=\"item.img\" alt=\"\" />\n            </div>\n        </agm-overlay>\n    </agm-map>\n\n    <div class=\"bottom-content\">\n        <ion-item class=\"doctor-info\" lines=\"full\">\n            <ion-avatar slot=\"start\">\n                <img src=\"../../../assets/imgs/marker/selectedMarker.png\">\n            </ion-avatar>\n            <ion-label>\n                <h2 class=\"dr-name\">Dr.Rose Ortiz</h2>\n                <h3 class=\"shop-name\">Rose Health Care</h3>\n            </ion-label>\n            <div class=\"km-txt\" slot=\"end\">\n                3.5 KM\n            </div>\n        </ion-item>\n\n        <ion-list class=\"other-content\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Low Mill Farm, Lendales Lane, Pickering, YO18 8EE\n                </ion-label>\n                <ion-icon class=\"margin-right-20\" src=\"../../../assets/imgs/appicons/location.svg\" slot=\"start\"></ion-icon>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-label>\n                    24/7 Service\n                </ion-label>\n                <ion-icon class=\"margin-right-20\" src=\"../../../assets/imgs/appicons/time.svg\" slot=\"start\"></ion-icon>\n            </ion-item>\n        </ion-list>\n\n        <ion-button (click)=\"goToHospitalDetail()\" expand=\"full\" shape=\"round\">View Hospital Detail</ion-button>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search/search-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/pages/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-overlays */ "./node_modules/agm-overlays/fesm2015/agm-overlays.js");









let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            agm_overlays__WEBPACK_IMPORTED_MODULE_8__["AgmOverlays"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE'
            }),
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/pages/search/search.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content agm-map {\n  height: 100%;\n  width: 100%;\n}\nion-content .bottom-content {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin: 16px;\n  width: 91%;\n}\nion-content .bottom-content .doctor-info {\n  --padding-start: 20px;\n  --border-radius: none;\n  border-radius: 5px 5px 0px 0px;\n}\nion-content .bottom-content .doctor-info ion-avatar {\n  height: 55px;\n  width: 55px;\n}\nion-content .bottom-content .doctor-info ion-avatar img {\n  height: 55px;\n  width: 55px;\n}\nion-content .bottom-content .doctor-info ion-label .dr-name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n  white-space: normal;\n}\nion-content .bottom-content .doctor-info ion-label .shop-name {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  white-space: normal;\n  color: var(--ion-color-primary-light);\n}\nion-content .bottom-content .doctor-info .km-txt {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n  height: 30px;\n  width: 76px;\n  border: 1px solid var(--ion-color-primary-dark);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 19px;\n}\nion-content .bottom-content .other-content ion-label {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n  white-space: normal;\n}\nion-content .bottom-content .other-content ion-icon {\n  font-size: 19px;\n}\nion-content .bottom-content ion-button {\n  margin: 0;\n  height: 43px;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-family: \"sfUi-m\";\n  --border-radius: 0 0 5px 5px;\n  --box-shadow: none;\n}\nion-content .avatar {\n  display: inline-block;\n  position: relative;\n  background: var(--ion-color-white);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 50%;\n}\nion-content .avatar img {\n  box-shadow: 0 0 0 5px var(--ion-color-red), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .avatar::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 12.6px solid var(--ion-color-red);\n  margin-left: -7px;\n  -webkit-filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.1));\n}\nion-content .open img {\n  box-shadow: 0 0 0 5px var(--ion-color-white), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .open::after {\n  content: \"\";\n  border-top: 12.6px solid var(--ion-color-white);\n}\nion-content .selected img {\n  box-shadow: 0 0 0 5px var(--ion-color-primary), 0 3px 5px 4px rgba(0, 0, 0, 0.1);\n}\nion-content .selected::after {\n  content: \"\";\n  border-top: 12.6px solid var(--ion-color-primary);\n}\nion-content .avatar_round img {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQVI7QURDUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0NaO0FEQVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0VoQjtBRERnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDR3BCO0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0NwQjtBRENnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNDcEI7QURFWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBaEI7QURJWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURJWTtFQUNJLGVBQUE7QUNGaEI7QURLUTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDSFo7QURNSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0ksNEVBQUE7QUNIWjtBREtRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkRBQUE7QUNIWjtBRE9RO0VBQ0ksOEVBQUE7QUNMWjtBRE9RO0VBQ0ksV0FBQTtFQUNBLCtDQUFBO0FDTFo7QURTUTtFQUNJLGdGQUFBO0FDUFo7QURTUTtFQUNJLFdBQUE7RUFDQSxpREFBQTtBQ1BaO0FEV1E7RUFDSSxrQkFBQTtBQ1RaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBhZ20tbWFwIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgLmRvY3Rvci1pbmZvIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAuZHItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zaG9wLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5rbS10eHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdGhlci1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDE2JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3ItcmVkKSwgMCAzcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAoN3B4ICogMS44KSBzb2xpZCB2YXIoLS1pb24tY29sb3ItcmVkKTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vcGVuIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKSwgMCAzcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICg3cHggKiAxLjgpIHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbGVjdGVkIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAwIDNweCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogKDdweCAqIDEuOCkgc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hdmF0YXJfcm91bmQge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCBhZ20tbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4O1xuICB3aWR0aDogOTElO1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5kb2N0b3ItaW5mbyB7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLmRvY3Rvci1pbmZvIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5kb2N0b3ItaW5mbyBpb24tYXZhdGFyIGltZyB7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDU1cHg7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLmRvY3Rvci1pbmZvIGlvbi1sYWJlbCAuZHItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAuZG9jdG9yLWluZm8gaW9uLWxhYmVsIC5zaG9wLW5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50IC5kb2N0b3ItaW5mbyAua20tdHh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA3NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG5pb24tY29udGVudCAuYm90dG9tLWNvbnRlbnQgLm90aGVyLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCAub3RoZXItY29udGVudCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbmlvbi1jb250ZW50IC5ib3R0b20tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDQzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICAtLWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAuYXZhdGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCAuYXZhdGFyIGltZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3ItcmVkKSwgMCAzcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tY29udGVudCAuYXZhdGFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMi42cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbn1cbmlvbi1jb250ZW50IC5vcGVuIGltZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3Itd2hpdGUpLCAwIDNweCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1jb250ZW50IC5vcGVuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDEyLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuaW9uLWNvbnRlbnQgLnNlbGVjdGVkIGltZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIDAgM3B4IDVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLWNvbnRlbnQgLnNlbGVjdGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDEyLjZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCAuYXZhdGFyX3JvdW5kIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/search/search.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SearchPage = class SearchPage {
    constructor(util) {
        this.util = util;
        this.zoom = 13;
        this.lat = 52.3555;
        this.lng = -1.17432;
        this.styles = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["mapStyle"];
        this.markers = [
            {
                img: "../../../assets/imgs/marker/marker1.png",
                select: true,
                isOpen: true,
                lat: 52.368315,
                lng: -1.187339,
            },
            {
                img: "../../../assets/imgs/marker/marker2.png",
                select: false,
                isOpen: true,
                lat: 52.361305,
                lng: -1.172887,
            },
            {
                img: "../../../assets/imgs/marker/marker3.png",
                select: false,
                isOpen: true,
                lat: 52.370883,
                lng: -1.150088,
            },
            {
                img: "../../../assets/imgs/marker/marker4.png",
                select: false,
                isOpen: false,
                lat: 52.373032,
                lng: -1.179442,
            },
            {
                img: "../../../assets/imgs/marker/marker5.png",
                select: false,
                isOpen: true,
                lat: 52.363808,
                lng: -1.158671,
            },
        ];
    }
    ngOnInit() { }
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
    goToHospitalDetail() { }
};
SearchPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("search", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchPage.prototype, "search", void 0);
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-search",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/app/pages/search/search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module-es2015.js.map