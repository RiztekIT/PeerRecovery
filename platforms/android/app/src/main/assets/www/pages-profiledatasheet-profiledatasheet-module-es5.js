function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiledatasheet-profiledatasheet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiledatasheet/profiledatasheet.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiledatasheet/profiledatasheet.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfiledatasheetProfiledatasheetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Participant Data Sheet </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Name</ion-label>\n        <ion-input [(ngModel)]=\"this.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Age</ion-label>\n        <ion-input [(ngModel)]=\"this.age\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Sobriety Date</ion-label>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"this.sobrietyDate\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Current phase of DWI Court</ion-label>\n        <ion-input [(ngModel)]=\"this.phaseDWI\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Occupation</ion-label>\n        <ion-input [(ngModel)]=\"this.Occupation\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Employeer</ion-label>\n        <ion-input [(ngModel)]=\"this.Employeer\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Describe your Job</ion-label>\n        <ion-input [(ngModel)]=\"this.job\"></ion-input>\n    </ion-item>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">Does your employeer know about this probation?</ion-label>\n        </ion-item-divider>\n\n        <ion-radio-group [(ngModel)]=\"this.probationKnow\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n    <ion-item-group *ngIf=\"this.probationKnow==true\">\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">If so, are they supportive?</ion-label>\n        </ion-item-divider>\n\n\n        <!--     <ion-label position=\"floating\">If so, are they supportive?</ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.supportiveJob\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\">Status</ion-label>\n        </ion-item-divider>\n\n        <!-- <ion-label position=\"floating\">Status</ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.status\">\n            <ion-item>\n                <ion-label color=\"primary\">Single</ion-label>\n                <ion-radio slot=\"start\" value=\"Single\"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">Married</ion-label>\n                <ion-radio slot=\"start\" value=\"Married\"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label color=\"primary\">Divorced</ion-label>\n                <ion-radio slot=\"start\" value=\"Divorced\"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label color=\"primary\">Widowed</ion-label>\n                <ion-radio slot=\"start\" value=\"Widowed\"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label color=\"primary\">Other commited relationship</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n\n    </ion-item-group>\n\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\" class=\"ion-text-wrap\">First name of spouse / significant other, if any </ion-label>\n        <ion-input [(ngModel)]=\"this.nameSpouse\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" (click)=\"addChildren()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n        Add Children\n    </ion-button>\n\n    <ion-item-group *ngFor=\"let child of children\">\n        <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">First name of Children </ion-label>\n            <ion-input [(ngModel)]=\"child.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">Age of Children </ion-label>\n            <ion-input [(ngModel)]=\"child.age\"></ion-input>\n        </ion-item>\n\n    </ion-item-group>\n\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Who lives with you & your relation to you? </ion-label>\n        <ion-input [(ngModel)]=\"this.liveswithyou\"></ion-input>\n    </ion-item>\n\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\">Are you presently in treatment?</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\"></ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.treatmeant\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n    <ion-item *ngIf=\"this.treatmeant\">\n        <ion-label color=\"primary\" position=\"floating\">What phase / type?</ion-label>\n        <ion-input [(ngModel)]=\"this.phaseTreatmeant\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">What sober support group do you attend </ion-label>\n        <ion-input [(ngModel)]=\"this.soberGroup\"></ion-input>\n\n    </ion-item>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\">If AA, do you have a sponsor?</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\"></ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.sponsorAA\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\">Working steps?</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">Working steps?</ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.steps\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">What part of the <b>DWI Court program</b> is the most helpful for your sobriety?</ion-label>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">(Circle all that apply)</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">What part of the <b>DWI Court program</b> is the most helpful for your sobriety?</ion-label> -->\n        <ion-item *ngFor=\"let dwi of DWICourtProgram\">\n            <ion-label color=\"primary\">{{dwi.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"dwi.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-label color=\"primary\" *ngIf=\"DWICourtProgram[12].isChecked\" position=\"floating\">Other </ion-label>\n        <ion-input *ngIf=\"DWICourtProgram[12].isChecked\" [(ngModel)]=\"otherpartDWI\"></ion-input>\n\n\n\n    </ion-item-group>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">What are your favorite incentives?</ion-label>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">(Circle all that apply)</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">What are your favorite incentives?</ion-label> -->\n        <!-- <ion-note>(Circle all that apply)</ion-note> -->\n        <ion-item *ngFor=\"let incentive of favoriteIncentive\">\n            <ion-label color=\"primary\">{{incentive.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"incentive.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-label color=\"primary\" *ngIf=\"favoriteIncentive[9].isChecked\" position=\"floating\">Other </ion-label>\n        <ion-input *ngIf=\"favoriteIncentive[9].isChecked\" [(ngModel)]=\"otherIncentive\"></ion-input>\n\n\n\n    </ion-item-group>\n\n    <ion-item>\n        <ion-label color=\"primary\" class=\"ion-text-wrap\" position=\"floating\">What are some fun things you do that help you stay sober?</ion-label>\n        <ion-textarea [(ngModel)]=\"this.funThings\"></ion-textarea>\n    </ion-item>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">The main source(s) of stress in my life right now is / are:</ion-label>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">(Circle all that apply)</ion-label>\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">The main source(s) of stress in my life right now is / are:</ion-label>\n            <ion-note>(Circle all that apply)</ion-note> -->\n        <ion-item *ngFor=\"let source of sourceStress\">\n            <ion-label color=\"primary\">{{source.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"source.isChecked\"></ion-checkbox>\n        </ion-item>\n        <ion-label color=\"primary\" *ngIf=\"sourceStress[6].isChecked\" position=\"floating\">Other </ion-label>\n        <ion-input *ngIf=\"sourceStress[6].isChecked\" [(ngModel)]=\"othersourceStress\"></ion-input>\n\n\n\n    </ion-item-group>\n\n    <ion-item>\n        <ion-label color=\"primary\" class=\"ion-text-wrap\" position=\"floating\">Who is the most supportive person(s) of your recovery?</ion-label>\n        <ion-textarea [(ngModel)]=\"this.mostSupportPerson\"></ion-textarea>\n    </ion-item>\n\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">Circle what alcohol / drug detenction device(s) you currently have, if any:</ion-label>\n\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">Circle what alcohol / drug detenction device(s) you currently have, if any:</ion-label> -->\n        <!-- <ion-note>(Circle all that apply)</ion-note> -->\n        <ion-item *ngFor=\"let device of detectionDevice\">\n            <ion-label color=\"primary\">{{device.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"device.isChecked\"></ion-checkbox>\n        </ion-item>\n\n\n\n\n    </ion-item-group>\n\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\" class=\"ion-text-wrap\">Is your driver´s licence currently suspended</ion-label>\n\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">Is your driver´s licence currently suspended</ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.driverLicenceSuspend\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label color=\"primary\">If yes, do you have a Occupational DL?</ion-label>\n\n        </ion-item-divider>\n        <!-- <ion-label position=\"floating\">If yes, do you have a Occupational DL?</ion-label> -->\n        <ion-radio-group [(ngModel)]=\"this.occupationalDL\">\n            <ion-item>\n                <ion-label color=\"primary\">Yes</ion-label>\n                <ion-radio slot=\"start\" value=true></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"primary\">No</ion-label>\n                <ion-radio slot=\"start\" value=false></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-item-group>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-button expand=\"full\" (click)=\"addprofileDS()\">Save</ion-button>\n\n    <ion-text *ngIf=\"this.ver\">\n        {{this.profileDS |json}}\n    </ion-text>\n\n\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/profiledatasheet/profiledatasheet-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/profiledatasheet/profiledatasheet-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfiledatasheetPageRoutingModule */

  /***/
  function srcAppPagesProfiledatasheetProfiledatasheetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfiledatasheetPageRoutingModule", function () {
      return ProfiledatasheetPageRoutingModule;
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


    var _profiledatasheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profiledatasheet.page */
    "./src/app/pages/profiledatasheet/profiledatasheet.page.ts");

    var routes = [{
      path: '',
      component: _profiledatasheet_page__WEBPACK_IMPORTED_MODULE_3__["ProfiledatasheetPage"]
    }];

    var ProfiledatasheetPageRoutingModule = function ProfiledatasheetPageRoutingModule() {
      _classCallCheck(this, ProfiledatasheetPageRoutingModule);
    };

    ProfiledatasheetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfiledatasheetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profiledatasheet/profiledatasheet.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/profiledatasheet/profiledatasheet.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfiledatasheetPageModule */

  /***/
  function srcAppPagesProfiledatasheetProfiledatasheetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfiledatasheetPageModule", function () {
      return ProfiledatasheetPageModule;
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


    var _profiledatasheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profiledatasheet-routing.module */
    "./src/app/pages/profiledatasheet/profiledatasheet-routing.module.ts");
    /* harmony import */


    var _profiledatasheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profiledatasheet.page */
    "./src/app/pages/profiledatasheet/profiledatasheet.page.ts");

    var ProfiledatasheetPageModule = function ProfiledatasheetPageModule() {
      _classCallCheck(this, ProfiledatasheetPageModule);
    };

    ProfiledatasheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profiledatasheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfiledatasheetPageRoutingModule"]],
      declarations: [_profiledatasheet_page__WEBPACK_IMPORTED_MODULE_6__["ProfiledatasheetPage"]]
    })], ProfiledatasheetPageModule);
    /***/
  },

  /***/
  "./src/app/pages/profiledatasheet/profiledatasheet.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/profiledatasheet/profiledatasheet.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfiledatasheetProfiledatasheetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVkYXRhc2hlZXQvcHJvZmlsZWRhdGFzaGVldC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profiledatasheet/profiledatasheet.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/profiledatasheet/profiledatasheet.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfiledatasheetPage */

  /***/
  function srcAppPagesProfiledatasheetProfiledatasheetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfiledatasheetPage", function () {
      return ProfiledatasheetPage;
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


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");

    var ProfiledatasheetPage = /*#__PURE__*/function () {
      function ProfiledatasheetPage(profileSVC) {
        _classCallCheck(this, ProfiledatasheetPage);

        this.profileSVC = profileSVC;
        this.name = '';
        this.age = '';
        this.sobrietyDate = '';
        this.phaseDWI = '';
        this.Occupation = '';
        this.Employeer = '';
        this.job = '';
        this.probationKnow = false;
        this.supportiveJob = '';
        this.status = '';
        this.nameSpouse = '';
        this.children = [];
        this.liveswithyou = '';
        this.treatmeant = false;
        this.phaseTreatmeant = '';
        this.soberGroup = '';
        this.sponsorAA = false;
        this.steps = false;
        this.otherpartDWI = '';
        this.otherIncentive = '';
        this.othersourceStress = '';
        this.funThings = '';
        this.mostSupportPerson = '';
        this.driverLicenceSuspend = '';
        this.occupationalDL = '';
        this.DWICourtProgram = [{
          name: 'My Case Manager',
          isChecked: false
        }, {
          name: 'My Treatment',
          isChecked: false
        }, {
          name: 'Sheriff´s Visits',
          isChecked: false
        }, {
          name: 'AA/Sober Group Support',
          isChecked: false
        }, {
          name: 'My Judge / Team',
          isChecked: false
        }, {
          name: 'Drug/ Alc Testing',
          isChecked: false
        }, {
          name: 'Receiving Incentives',
          isChecked: false
        }, {
          name: 'Fear of Punishment',
          isChecked: false
        }, {
          name: 'Accountability',
          isChecked: false
        }, {
          name: 'Avoiding Jail',
          isChecked: false
        }, {
          name: 'Interlock Device',
          isChecked: false
        }, {
          name: 'Support of Other Clients',
          isChecked: false
        }, {
          name: 'Other',
          isChecked: false
        }];
        this.favoriteIncentive = [{
          name: 'Fish Bowl',
          isChecked: false
        }, {
          name: 'Gift Card',
          isChecked: false
        }, {
          name: 'Bus Passes',
          isChecked: false
        }, {
          name: 'Community Service Voucher',
          isChecked: false
        }, {
          name: 'Report by Skype',
          isChecked: false
        }, {
          name: 'Candy, treats',
          isChecked: false
        }, {
          name: 'Spin the Wheel',
          isChecked: false
        }, {
          name: 'Certificates (Sobriety, etc.)',
          isChecked: false
        }, {
          name: 'Praise, positive feedback',
          isChecked: false
        }, {
          name: 'Other',
          isChecked: false
        }];
        this.sourceStress = [{
          name: 'Financial',
          isChecked: false
        }, {
          name: 'Family / Relationships',
          isChecked: false
        }, {
          name: 'Program Demands',
          isChecked: false
        }, {
          name: 'Transportation',
          isChecked: false
        }, {
          name: 'Health issues',
          isChecked: false
        }, {
          name: 'Work / Employment',
          isChecked: false
        }, {
          name: 'Other',
          isChecked: false
        }];
        this.detectionDevice = [{
          name: 'Portable or handheld',
          isChecked: false
        }, {
          name: 'Interlock on Vehicle',
          isChecked: false
        }, {
          name: 'SCRAM',
          isChecked: false
        }, {
          name: 'Drug patch',
          isChecked: false
        }];
        this.ver = false;
      }

      _createClass(ProfiledatasheetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initProfileDS",
        value: function initProfileDS() {}
      }, {
        key: "addChildren",
        value: function addChildren() {
          var children = {
            name: '',
            age: ''
          };
          this.children.push(children);
        }
      }, {
        key: "addprofileDS",
        value: function addprofileDS() {
          this.profileDS = {
            name: this.name,
            age: this.age,
            sobrietyDate: this.sobrietyDate,
            phaseDWI: this.phaseDWI,
            Occupation: this.Occupation,
            Employeer: this.Employeer,
            job: this.job,
            probationKnow: this.probationKnow,
            supportiveJob: this.supportiveJob,
            status: this.status,
            nameSpouse: this.nameSpouse,
            children: this.children,
            liveswithyou: this.liveswithyou,
            treatmeant: this.treatmeant,
            phaseTreatmeant: this.phaseTreatmeant,
            soberGroup: this.soberGroup,
            sponsorAA: this.sponsorAA,
            steps: this.steps,
            otherpartDWI: this.otherpartDWI,
            otherIncentive: this.otherIncentive,
            othersourceStress: this.othersourceStress,
            funThings: this.funThings,
            mostSupportPerson: this.mostSupportPerson,
            driverLicenceSuspend: this.driverLicenceSuspend,
            occupationalDL: this.occupationalDL,
            DWICourtProgram: this.DWICourtProgram,
            favoriteIncentive: this.favoriteIncentive,
            sourceStress: this.sourceStress,
            detectionDevice: this.detectionDevice
          };
          this.ver = true;
        }
      }]);

      return ProfiledatasheetPage;
    }();

    ProfiledatasheetPage.ctorParameters = function () {
      return [{
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }];
    };

    ProfiledatasheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profiledatasheet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profiledatasheet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiledatasheet/profiledatasheet.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profiledatasheet.page.scss */
      "./src/app/pages/profiledatasheet/profiledatasheet.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])], ProfiledatasheetPage);
    /***/
  },

  /***/
  "./src/app/services/profile.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/profile.service.ts ***!
    \*********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService() {
        _classCallCheck(this, ProfileService);
      }

      _createClass(ProfileService, [{
        key: "getProfileDS",
        value: function getProfileDS(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Profile/DataSheet/Users/' + user);
        }
      }, {
        key: "addProfileDS",
        value: function addProfileDS(ds) {
          console.log(ds);
          var key = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Profile/DataSheet/DataSheet').push(ds).key;
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Profile/DataSheet/Users/' + ds.user + '/' + key).set(ds);
        }
      }, {
        key: "editProfileDS",
        value: function editProfileDS(ds) {
          //console.log(app);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Profile/DataSheet/DataSheet/' + ds.appkey + '/').set(ds);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Profile/DataSheet/Users/' + ds.user + '/' + ds.appkey).set(ds);
        }
      }]);

      return ProfileService;
    }();

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfileService);
    /***/
  }
}]);
//# sourceMappingURL=pages-profiledatasheet-profiledatasheet-module-es5.js.map