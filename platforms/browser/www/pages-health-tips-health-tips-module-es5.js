function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-health-tips-health-tips-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-tips/health-tips.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-tips/health-tips.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHealthTipsHealthTipsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>Patrick Stanley\n                    <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon>\n                </h2>\n                <p>46 Park Avenue 98 Station Road, Wembley London</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-input placeholder=\"Search Tips...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <h2 class=\"title margin-bottom-17\">Today's Health Tips</h2>\n\n    <ion-item button=\"true\" (click)=\"goToViewTips()\" *ngFor=\"let i of tips\" class=\"margin-bottom-40\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img [src]=\"i?.img\">\n        </ion-thumbnail>\n        <ion-label class=\"margin-left-10\">\n            <h2 class=\"margin-bottom-6\">\n                {{i?.tipsTitle}}\n            </h2>\n            <h3 class=\"margin-bottom-5\">\n                {{i?.tipsBy}}\n            </h3>\n            <p>{{i?.tipsText}}</p>\n        </ion-label>\n    </ion-item>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/health-tips/health-tips-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/health-tips/health-tips-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: HealthTipsPageRoutingModule */

  /***/
  function srcAppPagesHealthTipsHealthTipsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthTipsPageRoutingModule", function () {
      return HealthTipsPageRoutingModule;
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


    var _health_tips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./health-tips.page */
    "./src/app/pages/health-tips/health-tips.page.ts");

    var routes = [{
      path: '',
      component: _health_tips_page__WEBPACK_IMPORTED_MODULE_3__["HealthTipsPage"]
    }];

    var HealthTipsPageRoutingModule = function HealthTipsPageRoutingModule() {
      _classCallCheck(this, HealthTipsPageRoutingModule);
    };

    HealthTipsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HealthTipsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/health-tips/health-tips.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/health-tips/health-tips.module.ts ***!
    \*********************************************************/

  /*! exports provided: HealthTipsPageModule */

  /***/
  function srcAppPagesHealthTipsHealthTipsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthTipsPageModule", function () {
      return HealthTipsPageModule;
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


    var _health_tips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./health-tips-routing.module */
    "./src/app/pages/health-tips/health-tips-routing.module.ts");
    /* harmony import */


    var _health_tips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./health-tips.page */
    "./src/app/pages/health-tips/health-tips.page.ts");

    var HealthTipsPageModule = function HealthTipsPageModule() {
      _classCallCheck(this, HealthTipsPageModule);
    };

    HealthTipsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _health_tips_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthTipsPageRoutingModule"]],
      declarations: [_health_tips_page__WEBPACK_IMPORTED_MODULE_6__["HealthTipsPage"]]
    })], HealthTipsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/health-tips/health-tips.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/health-tips/health-tips.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHealthTipsHealthTipsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .title {\n  color: var(--ion-color-primary-dark);\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n}\nion-content ion-item {\n  --padding-start: 0;\n}\nion-content ion-item ion-thumbnail {\n  margin: 0;\n  align-self: flex-start;\n  height: 75px;\n  width: 75px;\n  border-radius: 5px;\n}\nion-content ion-item ion-thumbnail img {\n  height: 75px;\n  width: 75px;\n  border-radius: 5px;\n}\nion-content ion-item ion-label {\n  margin: 0;\n}\nion-content ion-item ion-label h2 {\n  color: var(--ion-color-primary-dark);\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  white-space: normal;\n}\nion-content ion-item ion-label h3 {\n  color: var(--ion-color-primary-light);\n  font-size: 11px;\n  font-family: \"sfUi-r\";\n  white-space: normal;\n}\nion-content ion-item ion-label p {\n  color: var(--ion-color-primary-light);\n  font-size: 12px;\n  font-family: \"sfUi-r\";\n  white-space: normal;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvaGVhbHRoLXRpcHMvaGVhbHRoLXRpcHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oZWFsdGgtdGlwcy9oZWFsdGgtdGlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QURDUTtFQUNJLFNBQUE7QUNDWjtBREFZO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VoQjtBREFZO0VBQ0kscUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VoQjtBREFZO0VBQ0kscUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhbHRoLXRpcHMvaGVhbHRoLXRpcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktcic7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1yJztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/health-tips/health-tips.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/health-tips/health-tips.page.ts ***!
    \*******************************************************/

  /*! exports provided: HealthTipsPage */

  /***/
  function srcAppPagesHealthTipsHealthTipsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthTipsPage", function () {
      return HealthTipsPage;
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

    var HealthTipsPage = /*#__PURE__*/function () {
      function HealthTipsPage(util) {
        _classCallCheck(this, HealthTipsPage);

        this.util = util;
        this.tips = [{
          img: "../../../assets/imgs/data/tips/tipsNo1.png",
          tipsTitle: "Heart Health Tips: How can you improve your heart health?",
          tipsBy: "Financial Express-09-Oct-2019",
          tipsText: "A healthy heart is the key to avoiding cardiovascular issues and the first step in this"
        }, {
          img: "../../../assets/imgs/data/tips/tipsNo2.png",
          tipsTitle: "Skin Care Tips: With Pollution Levels So High Preserve Your Skin Health",
          tipsBy: "NDTV-03-Nov-2019",
          tipsText: "Here are some tips to control the adverse effect of air pollution on skin. Follow these..."
        }, {
          img: "../../../assets/imgs/data/tips/tipsNo3.png",
          tipsTitle: "Ayurveda for prostate: Simple tips that can safeguard you",
          tipsBy: "Times of India-18 hours ago",
          tipsText: "Very few men think about the health of their prostate - the gland that sits right underneath"
        }, {
          img: "../../../assets/imgs/data/tips/tipsNo4.png",
          tipsTitle: "Skincare tips to beat Diwali pollution: Doctors tell you how to ...",
          tipsBy: "India Today-31-Oct-2019",
          tipsText: "To get rid of these dead skin cells for a healthy-looking skin, use a peel-off mask..."
        }, {
          img: "../../../assets/imgs/data/tips/tipsNo1.png",
          tipsTitle: "Liz Earle's menopause diet with tips and tricks to help your ...",
          tipsBy: "Mirror.co.uk-03-Nov-2019",
          tipsText: "And for every woman – even those lucky enough to have minimal symptoms..."
        }];
      }

      _createClass(HealthTipsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToViewTips",
        value: function goToViewTips() {}
      }]);

      return HealthTipsPage;
    }();

    HealthTipsPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    HealthTipsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-health-tips",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./health-tips.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-tips/health-tips.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./health-tips.page.scss */
      "./src/app/pages/health-tips/health-tips.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], HealthTipsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-health-tips-health-tips-module-es5.js.map